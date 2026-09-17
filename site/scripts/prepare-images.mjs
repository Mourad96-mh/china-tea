// Converts the raw assets in assets-src/ into web-ready WebP files in public/img/.
//   assets-src/stock/*.jpg   -> public/img/<name>.webp (1920w) + <name>-1280.webp + <name>-800.webp
//   assets-src/client/*.png  -> public/img/products/<name>.webp (+ -450) — scene shots, as photographed
//   assets-src/cutout/*.png  -> public/img/products/<name>-cut.webp (+ -400) — transparent pack shots
// Run: npm run images
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = (d) => path.join(root, "assets-src", d);
const out = path.join(root, "public", "img");
const sizes = {};

async function emit(input, file, opts) {
  const info = await sharp(input)
    .rotate()
    .resize({ width: opts.width, height: opts.height, fit: "inside", withoutEnlargement: true })
    .webp({ quality: opts.quality, alphaQuality: 90, effort: 5 })
    .toFile(file);
  sizes[path.relative(out, file).replaceAll("\\", "/")] = [info.width, info.height];
}

for (const f of fs.readdirSync(src("stock")).filter((f) => f.endsWith(".jpg"))) {
  const name = path.parse(f).name;
  await emit(path.join(src("stock"), f), path.join(out, `${name}.webp`), { width: 1920, quality: 62 });
  await emit(path.join(src("stock"), f), path.join(out, `${name}-1280.webp`), { width: 1280, quality: 64 });
  await emit(path.join(src("stock"), f), path.join(out, `${name}-800.webp`), { width: 800, quality: 70 });
}
for (const f of fs.readdirSync(src("client")).filter((f) => f.endsWith(".png"))) {
  const name = path.parse(f).name;
  await emit(path.join(src("client"), f), path.join(out, "products", `${name}.webp`), { width: 900, height: 1100, quality: 80 });
  await emit(path.join(src("client"), f), path.join(out, "products", `${name}-450.webp`), { width: 450, height: 550, quality: 80 });
}
for (const f of fs.readdirSync(src("cutout")).filter((f) => f.endsWith(".png"))) {
  const name = path.parse(f).name;
  await emit(path.join(src("cutout"), f), path.join(out, "products", `${name}-cut.webp`), { width: 800, height: 900, quality: 82 });
  await emit(path.join(src("cutout"), f), path.join(out, "products", `${name}-cut-400.webp`), { width: 400, height: 450, quality: 82 });
}

// Intrinsic sizes, imported by the site so every <img> gets width/height (no layout shift).
fs.writeFileSync(path.join(root, "src", "content", "image-sizes.json"), JSON.stringify(sizes, null, 1));
console.log(`${Object.keys(sizes).length} images written`);
