# SEO Audit — Status

**Project:** China Tea Group  ·  **Type:** vitrine B2B + catalogue (exportateur de thé)  ·  **Stack:** Next.js 15.5 static export (`out/`), CSS pur
**Build:** ✅ passing — 57 HTML pages (19 routes × FR/EN/ES)  ·  **Last updated:** 2026-09-16

## ▶ Overall: ✅ COMPLETE (technical) — launch blockers remain (client data, domain, hosting)

## Phases
| # | Phase | Status | Result / note |
|---|-------|:------:|---------------|
| 0  | Build & inventory                     | ✅ | 57 pages, `/` = language picker (noindex), 404.html via `global-not-found` (single `<html>`, stylesheet present) |
| 1  | Per-page meta                         | ✅ | `scripts/check-meta.mjs`: 52 → 5 flagged (2× 404 + root picker = noindex; 2× "Chunmee 4011 Extra" titles at 64 ch, accepted). Unique titles/descriptions, 1 H1, self-canonical + 4 hreflang (fr/en/es/x-default) |
| 1b | On-page targeting & internal linking  | ➖ | no `research/` folder — keywords chosen from competitor research (grades 41022/4011/9371/9366/3505, "thé vert de Chine", OEM) |
| 2  | Structured data (JSON-LD)             | ✅ | `validate-schema.mjs`: 111 blocks, 0 errors. Organization (site-wide, 2 addresses, contactPoint), BreadcrumbList (all deep pages), ItemList (/teas), FAQPage (/services). Product schema deliberately **not** used (no price/offer → invalid item) |
| 2c | GEO / LLM                             | ✅ | `public/llms.txt`, robots.txt names 11 AI crawlers |
| 3  | Sitemap + robots                      | ✅ | `app/sitemap.js` 54 URLs with hreflang alternates (legal excluded: noindex) |
| 4  | OG share image                        | ✅ | `public/og.jpg` 1200×630 (`scripts/make-brand-assets.mjs`) + `logo.png` 512² |
| 5  | Page weight / DOM size                | ✅ | home 23 KB gz / 636 tags; other pages 16–19 KB gz |
| 6  | Images                                | ✅ | all WebP, width/height set, `srcset` 400–1920 w, lazy below the fold |
| 7  | Lighthouse                            | ✅ | see table (mobile lab, gzip preview `scripts/preview.mjs`) |
| 8  | Launch checklist + report             | ⚠️ | technical checklist done; blockers below |

## Scores (Lighthouse 12, mobile lab, production-like preview)
| Page | Perf | A11y | Best Pr. | SEO | LCP | CLS |
|------|:----:|:----:|:--------:|:---:|:---:|:---:|
| /fr/ (home) | 89 | 100 | 100 | 100 | 3.3 s | 0.028 |
| /en/teas/chunmee-41022/ | 86 | 100 | 100 | 100 | 3.1 s | 0 |
| /es/brands/ | 90 | 100 | 100 | 100 | 3.5 s | 0.001 |
| /fr/brands/511/ | 86 | 100 | 100 | 100 | 3.5 s | 0 |
| /en/services/ | 94 | 100 | 100 | 100 | 2.9 s | 0 |
| /fr/tea-ritual/ | 92 | 100 | 100 | 100 | 3.1 s | 0.033 |
| /es/pantry/ | 86 | 100 | 100 | 100 | 3.0 s | 0 |
| /en/about/ | 94 | 100 | 100 | 100 | 3.0 s | 0 |
| /fr/contact/ | 96 | 100 | 100 | 100 | 2.6 s | 0 |
| /fr/legal/ | 97 | 100 | 100 | 66* | 2.3 s | 0 |

\* noindex on purpose.

Fixes made during the audit (home before → after: Perf 69 → 89, LCP 5.4 s → 3.3 s, TBT 410 → 150 ms):
- Reveal-on-scroll read `getBoundingClientRect` per element → forced reflow × 40; now IntersectionObserver-only.
- `<Link prefetch={false}>` via `components/Link.js` (static export: RSC prefetch = wasted requests + script).
- Responsive `srcset` on every image (phones were downloading the 1920 px hero and 800 px pack shots).
- Removed `backdrop-filter` from the sticky header; `will-change` on the floating hero packs.
- WhatsApp green darkened to `#157a3a` (white text 5.3:1); logo link accessible name now matches visible text; brand cards use `h2` on /brands (heading order).
- Titles shortened to keyword-led ≤ 62 ch, templated meta for tea and brand pages.

## Blockers / open items (not closeable in-repo)
- [ ] Final domain → `site.url` in `src/lib/site.js` + URLs in `public/llms.txt` (currently `www.chinateagroup.com`, placeholder)
- [ ] Contact e-mail (none supplied) → `site.email`
- [ ] Confirm office addresses spelling ("Zhongfu Plaza"?) and the relation with Layane Groupe
- [ ] Hosting upload of `out/` (+ `.htaccess` is included), HTTPS, then Search Console: verify property, submit `sitemap.xml`, request indexing of home + tea pages
- [ ] Rich Results Test on the live URL

## Verdict
Technical audit complete; not launched — see blockers.
