const http = require("http");
const fs = require("fs");
const path = require("path");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

/** basePath `/maple` 정적 export → 파일 경로 */
function mapUrlToFile(outDir, urlPath) {
  const pathname = urlPath.split("?")[0];

  if (pathname === "/maple" || pathname === "/maple/") {
    return path.join(outDir, "index.html");
  }
  if (pathname === "/maple/overlay" || pathname === "/maple/overlay/") {
    return path.join(outDir, "overlay", "index.html");
  }
  if (pathname.startsWith("/maple/")) {
    const rel = pathname.slice("/maple".length);
    const candidate = path.join(outDir, rel);
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate;
    }
    const indexHtml = path.join(candidate, "index.html");
    if (fs.existsSync(indexHtml)) {
      return indexHtml;
    }
  }

  const fallback = path.join(outDir, pathname.replace(/^\//, ""));
  return fallback;
}

/**
 * @param {string} outDir absolute path to Next `out/`
 * @returns {Promise<{ server: import('http').Server, port: number, origin: string }>}
 */
function startStaticServer(outDir) {
  return new Promise((resolve, reject) => {
    const server = http.createServer((req, res) => {
      const filePath = mapUrlToFile(outDir, req.url || "/");

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.statusCode = err.code === "ENOENT" ? 404 : 500;
          res.end(err.code === "ENOENT" ? "Not Found" : "Server Error");
          return;
        }
        res.setHeader("Content-Type", contentType(filePath));
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        }
        res.end(data);
      });
    });

    server.listen(0, "127.0.0.1", () => {
      const addr = server.address();
      if (!addr || typeof addr === "string") {
        reject(new Error("Failed to bind static server"));
        return;
      }
      const origin = `http://127.0.0.1:${addr.port}`;
      resolve({ server, port: addr.port, origin });
    });

    server.on("error", reject);
  });
}

module.exports = { startStaticServer };
