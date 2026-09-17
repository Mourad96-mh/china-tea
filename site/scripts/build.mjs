// Production build that never touches this folder's .next/ — safe to run while
// `npm run dev` is up. `next build` shares .next/ with the dev server, and a
// concurrent build breaks it ("Cannot find module './611.js'"). A distDir
// override does NOT help with output: "export" (it moves the exported site and
// still writes .next/), so we build a copy in the temp folder instead.
//
// Usage: npm run build   ->   out/ is refreshed, .next/ is left alone.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const work = path.join(os.tmpdir(), "china-tea-group-build");
const copyItems = ["src", "public", "package.json", "next.config.mjs", "jsconfig.json"];

function removeJunction(p) {
  // A junction must be removed with rmdir, never recursively (that would empty the target).
  if (fs.existsSync(p)) execFileSync("cmd", ["/c", "rmdir", p], { stdio: "ignore" });
}

// 1. Fresh mirror of the sources (node_modules shared through a junction).
removeJunction(path.join(work, "node_modules"));
fs.rmSync(work, { recursive: true, force: true });
fs.mkdirSync(work, { recursive: true });
for (const item of copyItems) fs.cpSync(path.join(root, item), path.join(work, item), { recursive: true });
execFileSync("cmd", ["/c", "mklink", "/J", path.join(work, "node_modules"), path.join(root, "node_modules")], { stdio: "ignore" });

try {
  // 2. Build there. Spawn node directly: npx.cmd fails with EINVAL on Windows.
  execFileSync(process.execPath, [path.join(work, "node_modules", "next", "dist", "bin", "next"), "build"], {
    cwd: work,
    stdio: "inherit",
  });

  // 3. Replace the contents of out/ (keep the folder itself: OneDrive may lock it).
  const out = path.join(root, "out");
  fs.mkdirSync(out, { recursive: true });
  for (const entry of fs.readdirSync(out)) fs.rmSync(path.join(out, entry), { recursive: true, force: true });
  fs.cpSync(path.join(work, "out"), out, { recursive: true });
  console.log(`\nout/ updated from ${work}`);
} finally {
  removeJunction(path.join(work, "node_modules"));
}
