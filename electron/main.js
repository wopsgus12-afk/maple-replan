const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;
const PORT = process.env.PORT || "3000";
const BASE_URL =
  process.env.ELECTRON_URL || `http://localhost:${PORT}`;

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
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL(BASE_URL);

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
    height: 230,
    alwaysOnTop: true,
    frame: false,
    transparent: true,
    resizable: false,
    skipTaskbar: true,
    hasShadow: false,
    backgroundColor: "#00000000",
    webPreferences: {
      preload: getPreloadPath(),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  overlayWindow.loadURL(`${BASE_URL}/overlay`);

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

app.whenReady().then(() => {
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
