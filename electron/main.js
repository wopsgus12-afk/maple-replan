const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { startStaticServer } = require("./static-server");

const isDev = !app.isPackaged;
const PORT = process.env.PORT || "3000";
const BASE_PATH = (process.env.MAPLE_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/$/,
  ""
);

/** @type {string} */
let activeOrigin = (process.env.ELECTRON_URL || `http://localhost:${PORT}`).replace(/\/$/, "");
/** @type {import('http').Server | null} */
let staticServer = null;

function resolveAppUrl(route = "/") {
  const normalized = route.startsWith("/") ? route : `/${route}`;
  if (normalized === "/") {
    return `${activeOrigin}${BASE_PATH}/`;
  }
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `${activeOrigin}${BASE_PATH}${withSlash}`;
}

function getOutDir() {
  return path.join(__dirname, "..", "out");
}

async function ensureProductionServer() {
  if (isDev) return;
  const { server, origin } = await startStaticServer(getOutDir());
  staticServer = server;
  activeOrigin = origin;
}

/** @type {BrowserWindow | null} */
let mainWindow = null;
/** @type {BrowserWindow | null} */
let overlayWindow = null;

function getPreloadPath() {
  return path.join(__dirname, "preload.js");
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 440,
    height: 860,
    minWidth: 360,
    minHeight: 600,
    title: "메이플 재획 정산",
    show: false,
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  mainWindow.loadURL(resolveAppUrl("/"));

  mainWindow.once("ready-to-show", () => {
    mainWindow?.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

function createOverlayWindow() {
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.focus();
    return;
  }

  overlayWindow = new BrowserWindow({
    width: 360,
    height: 320,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,
    hasShadow: false,
    backgroundColor: "#00000000",
    show: false,
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  overlayWindow.loadURL(resolveAppUrl("/overlay"));

  overlayWindow.once("ready-to-show", () => {
    overlayWindow?.show();
  });

  overlayWindow.on("closed", () => {
    overlayWindow = null;
  });
}

function closeOverlayWindow() {
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    overlayWindow.close();
  }
}

ipcMain.handle("overlay:open", () => {
  createOverlayWindow();
});

ipcMain.handle("overlay:close", () => {
  closeOverlayWindow();
});

app.whenReady().then(async () => {
  await ensureProductionServer();
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("will-quit", () => {
  if (staticServer) {
    staticServer.close();
    staticServer = null;
  }
});
