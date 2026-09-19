// Generates the share card and logo used by metadata and JSON-LD:
//   public/og.jpg   1200×630 Open Graph / Twitter card
//   public/logo.png 512×512 square logo (Organization schema)
// Run once after changing brand visuals: node scripts/make-brand-assets.mjs
import sharp from "sharp";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const pub = (f) => path.join(root, "public", f);
const GREEN = "#10291d";
const GOLD = "#c9a24a";
const GOLD_LIGHT = "#e4cb8e";
const CREAM = "#fcf9f2";

// Same eight-pointed star + leaf as components/Logo.js, scaled to a 48-unit box.
const emblem = (stroke, leaf, vein) => `
  <g fill="none" stroke="${stroke}" stroke-width="1.6">
    <rect x="11" y="11" width="26" height="26"/>
    <rect x="11" y="11" width="26" height="26" transform="rotate(45 24 24)"/>
  </g>
  <path d="M17.5 30.5c0-7.2 4.4-12.4 13-13-.8 8.6-5.8 13-13 13Z" fill="${leaf}"/>
  <path d="M17.5 30.5 25 23" stroke="${vein}" stroke-width="1.1" stroke-linecap="round"/>`;

// ---- logo.png ----
await sharp(
  Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 48 48">
    <rect width="48" height="48" fill="${GREEN}"/>
    <g transform="translate(6 6) scale(.75)">${emblem(GOLD, GOLD, GREEN)}</g>
  </svg>`)
)
  .png({ palette: true })
  .toFile(pub("logo.png"));

// ---- og.jpg ----
const W = 1200;
const H = 630;
const bg = await sharp(path.join(root, "assets-src/stock/tea-gardens.jpg"))
  .resize(W, H, { fit: "cover" })
  .modulate({ brightness: 0.8, saturation: 0.9 })
  .toBuffer();

const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="1">
      <stop offset="0" stop-color="#0a1c14" stop-opacity=".96"/>
      <stop offset=".55" stop-color="#0a1c14" stop-opacity=".82"/>
      <stop offset="1" stop-color="#0a1c14" stop-opacity=".35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="24" y="24" width="${W - 48}" height="${H - 48}" fill="none" stroke="${GOLD}" stroke-opacity=".55"/>
  <g transform="translate(72 70) scale(1.6)">${emblem(GOLD, GOLD, GREEN)}</g>
  <text x="158" y="116" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-weight="700" fill="${CREAM}">China Tea</text>
  <text x="160" y="146" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="7" fill="${GOLD_LIGHT}">GROUP</text>
  <text x="72" y="286" font-family="Georgia, 'Times New Roman', serif" font-size="58" font-weight="700" fill="${CREAM}">Thé vert de Chine</text>
  <text x="72" y="352" font-family="Georgia, 'Times New Roman', serif" font-size="50" font-style="italic" fill="${GOLD_LIGHT}">pour le Maroc et l’Afrique</text>
  <line x1="72" y1="392" x2="170" y2="392" stroke="${GOLD}" stroke-width="2"/>
  <text x="72" y="440" font-family="Arial, sans-serif" font-size="26" fill="${CREAM}" fill-opacity=".88">Chunmee 41022 · 4011 · 9371 · Gunpowder 3505</text>
  <text x="72" y="482" font-family="Arial, sans-serif" font-size="22" fill="${CREAM}" fill-opacity=".72">Marques maison · Marque privée OEM · Export en conteneur</text>
  <text x="72" y="566" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="${GOLD_LIGHT}">Zhejiang — Hong Kong</text>
</svg>`);

const packA = await sharp(path.join(root, "assets-src/cutout/al-mousafir-4011.png")).resize({ height: 330 }).toBuffer();
const packB = await sharp(path.join(root, "assets-src/cutout/dkhmiss-41022-edition.png")).resize({ height: 270 }).rotate(6, { background: "#0000" }).toBuffer();

await sharp(bg)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: packB, top: 104, left: 868 },
    { input: packA, top: 244, left: 770 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(pub("og.jpg"));

console.log("public/og.jpg + public/logo.png written");
