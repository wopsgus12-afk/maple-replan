const http = require("http");
const fs = require("fs");
const path = require("path");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function contentType(filePath) {
  return MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
}

function mapUrlToFile(outDir, urlPath) {
  const pathname = urlPath.split("?")[0];

  if (pathname === "/" || pathname === "") {
    return path.join(outDir, "index.html");
  }
  if (pathname === "/overlay" || pathname === "/overlay/") {
    return path.join(outDir, "overlay", "index.html");
  }

  const candidate = path.join(outDir, pathname.replace(/^\//, ""));
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
    return candidate;
  }
  const indexHtml = path.join(candidate, "index.html");
  if (fs.existsSync(indexHtml)) {
    return indexHtml;
  }
  return candidate;
}

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
        if (filePath.endsWith(".html")) {
          res.setHeader("Cache-Control", "no-cache");
        } else {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
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
      resolve({ server, port: addr.port, origin: `http://127.0.0.1:${addr.port}` });
    });

    server.on("error", reject);
  });
}

module.exports = { startStaticServer };
