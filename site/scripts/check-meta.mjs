// Phase 1 check: title/description length, H1 count, canonical, hreflang (4 languages + x-default), OG image, lang — on the built out/ HTML.
import fs from "node:fs";
import path from "node:path";
const root = path.resolve("out");
const files = [];
(function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) { if (f !== "_next") walk(p); } else if (f.endsWith(".html")) files.push(p); } })(root);
const titles = new Map(), descs = new Map();
let issues = 0;
for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const head = html.slice(0, html.indexOf("</head>"));
  const rel = "/" + path.relative(root, f).replaceAll("\\", "/");
  const title = (head.match(/<title[^>]*>([^<]*)<\/title>/) || [])[1] || "";
  const desc = (head.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  const canon = (head.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || "";
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  const lang = (html.match(/<html lang="([^"]+)"/) || [])[1];
  const hreflang = (head.match(/hrefLang="/g) || []).length;
  const og = (head.match(/property="og:image" content="([^"]*)"/) || [])[1] || "";
  const noindex = /name="robots" content="[^"]*noindex/.test(head);
  const p = [];
  if (title.length < 25 || title.length > 62) p.push(`title ${title.length}`);
  if (!noindex && (desc.length < 110 || desc.length > 162)) p.push(`desc ${desc.length}`);
  if (h1 !== 1 && !rel.includes("404")) p.push(`h1 ${h1}`);
  if (!canon && !noindex) p.push("no canonical");
  if (!lang) p.push("no lang");
  if (!noindex && hreflang !== 5) p.push(`hreflang ${hreflang}`);
  if (og) { const local = path.join("public", new URL(og).pathname); if (!fs.existsSync(local) && !fs.existsSync(path.join("out", new URL(og).pathname))) p.push(`og missing ${new URL(og).pathname}`); } else if (!noindex) p.push("no og:image");
  if (!noindex) { titles.set(title, [...(titles.get(title) || []), rel]); descs.set(desc, [...(descs.get(desc) || []), rel]); }
  if (p.length) { issues++; console.log(rel.padEnd(42), p.join(" | "), "\n   ", title); }
}
for (const [t, r] of titles) if (r.length > 1) { issues++; console.log("DUP TITLE", t, r); }
for (const [t, r] of descs) if (r.length > 1) { issues++; console.log("DUP DESC", t.slice(0, 60), r); }
console.log(`${files.length} html files, ${issues} with issues`);
