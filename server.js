const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html; charset=UTF-8",
  ".css": "text/css; charset=UTF-8",
  ".js": "text/javascript; charset=UTF-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".json": "application/json; charset=UTF-8"
};

function sendFile(res, filePath) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=UTF-8" });
      res.end("Not found");
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
}

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(req.url.split("?")[0]);
  const normalized = urlPath === "/" ? "/index.html" : urlPath;
  const safePath = path.normalize(normalized).replace(/^(\.\.[/\\])+/, "");
  const target = path.join(PUBLIC_DIR, safePath);

  if (!target.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=UTF-8" });
    res.end("Forbidden");
    return;
  }

  fs.stat(target, (err, stats) => {
    if (!err && stats.isFile()) {
      sendFile(res, target);
      return;
    }
    sendFile(res, path.join(PUBLIC_DIR, "index.html"));
  });
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/api/health")) {
    res.writeHead(200, { "Content-Type": "application/json; charset=UTF-8" });
    res.end(JSON.stringify({ status: "ok", project: "zene-ai" }));
    return;
  }
  serveStatic(req, res);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Zene AI server running at http://localhost:${PORT}`);
});
