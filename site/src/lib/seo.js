import { locales, defaultLocale, href, ogLocales } from "./i18n";
import { site } from "./site";

// Canonical + hreflang for a path that exists in every language.
export function alternates(locale, path = "/") {
  const languages = Object.fromEntries(locales.map((l) => [l, href(l, path)]));
  languages["x-default"] = href(defaultLocale, path);
  return { canonical: href(locale, path), languages };
}

// Full metadata for a page. Next replaces openGraph per segment, so each page restates it.
export function pageMetadata({ locale, path = "/", title, description, absolute = false, image = "/og.jpg" }) {
  const fullTitle = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: alternates(locale, path),
    openGraph: {
      title: fullTitle,
      description,
      url: href(locale, path),
      siteName: site.name,
      locale: ogLocales[locale],
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export function absoluteUrl(path) {
  return `${site.url}${path}`;
}

// Meta description in the 120–160 character window: pad a short text with a
// call to action, cut a long one on a word boundary.
export function metaDescription(text, suffix = "", max = 158) {
  let out = text.length < 120 && suffix ? `${text} ${suffix}` : text;
  if (out.length > max) {
    out = out.slice(0, max - 1).replace(/[\s,;:—–-]+\S*$/, "") + "…";
  }
  return out;
}

export function fill(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, k) => values[k] ?? "");
}
