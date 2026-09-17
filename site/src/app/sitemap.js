import { locales, href, defaultLocale } from "@/lib/i18n";
import { site } from "@/lib/site";
import { teas } from "@/content/teas";
import { brands } from "@/content/brands";

export const dynamic = "force-static";

const paths = [
  "/",
  "/teas",
  ...teas.map((t) => `/teas/${t.slug}`),
  "/brands",
  ...brands.map((b) => `/brands/${b.slug}`),
  "/services",
  "/tea-ritual",
  "/pantry",
  "/about",
  "/contact",
];

export default function sitemap() {
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${site.url}${href(locale, path)}`,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map((l) => [l, `${site.url}${href(l, path)}`])),
          "x-default": `${site.url}${href(defaultLocale, path)}`,
        },
      },
    }))
  );
}
