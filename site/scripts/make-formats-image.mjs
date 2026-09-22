// Builds the "packaging formats" visual on the Services page: several of our boxes,
// from the tall family box to the 200 g cube, grouped on a light backdrop.
//   assets-src/stock/packaging-formats.jpg  (then `npm run images` makes the WebP variants)
// Run once after changing the pack shots: node scripts/make-formats-image.mjs
import sharp from "sharp";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const cut = (f) => path.join(root, "assets-src/cutout", `${f}.png`);
const W = 1200;
const H = 1500;

// Back row first so the front row overlaps it. x/y = top-left, h = pack height.
const packs = [
  { file: "dkhmiss-diwan-41022", x: 110, y: 330, h: 720 },
  { file: "dkhmiss-41022-edition-hd", x: 540, y: 470, h: 560 },
  { file: "brand-711", x: 80, y: 840, h: 500 },
  { file: "al-mousafir-4011-cube", x: 650, y: 900, h: 450 },
];

const backdrop = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f4efe2"/>
      <stop offset="1" stop-color="#e9e1cc"/>
    </linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ddd2b6"/>
      <stop offset="1" stop-color="#cfc2a2"/>
    </linearGradient>
    <radialGradient id="glow" cx=".5" cy=".42" r=".6">
      <stop offset="0" stop-color="#fffdf7" stop-opacity=".9"/>
      <stop offset="1" stop-color="#fffdf7" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#wall)"/>
  <rect y="980" width="${W}" height="${H - 980}" fill="url(#floor)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
</svg>`);

const layers = [];
for (const p of packs) {
  const buf = await sharp(cut(p.file)).resize({ height: p.h }).toBuffer();
  const { width } = await sharp(buf).metadata();
  // Soft contact shadow under each box.
  const shadow = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width + 80}" height="90">
    <ellipse cx="${(width + 80) / 2}" cy="45" rx="${width / 2}" ry="20" fill="#3b2f16" fill-opacity=".35"/>
  </svg>`);
  layers.push({ input: await sharp(shadow).blur(14).toBuffer(), left: p.x - 40, top: p.y + p.h - 50 });
  layers.push({ input: buf, left: p.x, top: p.y });
}

await sharp(backdrop)
  .composite(layers)
  .jpeg({ quality: 90 })
  .toFile(path.join(root, "assets-src/stock/packaging-formats.jpg"));
console.log("assets-src/stock/packaging-formats.jpg written");
