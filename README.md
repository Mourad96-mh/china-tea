# China Tea Group

Trilingual (FR / EN / ES) vitrine for a Chinese green-tea exporter selling to
importers and distributors in the Maghreb, Africa and Europe.

Live: <https://china-tea-ebon.vercel.app>

## Layout

| Path | What it holds |
| --- | --- |
| `site/` | The Next.js app (this is the Vercel root directory) |
| `site/src/` | App Router pages, components, dictionaries and content |
| `site/public/` | Processed images, logo, OG image, `llms.txt` |
| `site/assets-src/` | Raw client, cut-out, source and stock images |
| `site/scripts/` | Build, image preparation, brand assets, meta and schema checks |
| `file.txt` + `*.jpeg` | The client brief and the photos they sent |

## Stack

Next.js 15 with `output: "export"` — a fully static site, no server. Pure CSS
(`site/src/app/globals.css`), no UI framework. Every route lives under
`app/[locale]/`, each locale with its own root layout so `<html lang>` is
correct; `/` is a JS language picker that is not indexed.

Content is data: `src/dict/{fr,en,es}.js` for the interface,
`src/content/{teas,brands,pantry}.js` for the catalogue, `src/lib/site.js` for
company facts. The contact form opens WhatsApp — there is no backend.

## Working on it

```bash
cd site
npm install
npm run dev            # http://localhost:3000
npm run build          # refreshes out/
npm run images         # regenerates public/img from assets-src
```

`npm run build` deliberately builds a copy of the sources outside the project
so it can run while `npm run dev` holds `.next/`. It uses `cmd` and `mklink`,
so it is **Windows-only** — on Linux, macOS and CI run `npm run build:direct`
(plain `next build`). That is why `site/vercel.json` pins Vercel's build
command to `next build`.

## Deployment

Pushing to `main` deploys to Vercel (project `china-tea`, root directory
`site`). The export in `site/out/` is also uploadable to any static host.

Before this goes to a real domain, set it in `site/src/lib/site.js`: canonicals,
`og:url`, `robots.txt` and the sitemap all still point at the placeholder
`www.chinateagroup.com`.
