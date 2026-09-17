// Production-like preview of out/: gzip + the same Cache-Control as public/.htaccess,
// so Lighthouse numbers match what the real host serves. Usage: node scripts/preview.mjs [port]
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";

const root = path.resolve(import.meta.dirname, "..", "out");
const port = Number(process.argv[2] || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".woff2": "font/woff2",
};
const compressible = new Set([".html", ".css", ".js", ".json", ".txt", ".xml", ".svg"]);

http
  .createServer((req, res) => {
    let url = decodeURIComponent(req.url.split("?")[0]);
    let file = path.join(root, url);
    if (!file.startsWith(root)) return res.writeHead(403).end();
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
      if (!url.endsWith("/")) return res.writeHead(301, { Location: url + "/" }).end();
      file = path.join(file, "index.html");
    }
    let status = 200;
    if (!fs.existsSync(file)) {
      file = path.join(root, "404.html");
      status = 404;
    }
    const ext = path.extname(file);
    const headers = { "Content-Type": types[ext] || "application/octet-stream" };
    if (/\.(js|css|woff2)$/.test(file)) headers["Cache-Control"] = "public, max-age=31536000, immutable";
    else if (/\.(webp|jpg|png|svg)$/.test(file)) headers["Cache-Control"] = "public, max-age=2592000";
    else headers["Cache-Control"] = "public, max-age=0, must-revalidate";
    let body = fs.readFileSync(file);
    if (compressible.has(ext) && /gzip/.test(req.headers["accept-encoding"] || "")) {
      body = zlib.gzipSync(body);
      headers["Content-Encoding"] = "gzip";
    }
    res.writeHead(status, headers).end(body);
  })
  .listen(port, () => console.log(`preview on http://127.0.0.1:${port}`));
