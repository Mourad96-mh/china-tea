// Four languages, each under its own prefix: /fr/, /en/, /es/, /ar/ (right-to-left).
// The bare domain (/) picks one from the browser language (see app/(root)/page.js).
export const locales = ["fr", "en", "es", "ar"];
export const defaultLocale = "fr";

export const localeNames = { fr: "Français", en: "English", es: "Español", ar: "العربية" };
export const ogLocales = { fr: "fr_FR", en: "en_US", es: "es_ES", ar: "ar_AR" };
const rtlLocales = ["ar"];

export function dir(locale) {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}

export function isLocale(value) {
  return locales.includes(value);
}

// Build an internal href: href("en", "/teas/chunmee-41022") -> "/en/teas/chunmee-41022/"
export function href(locale, path = "/") {
  const clean = path === "/" ? "" : path.replace(/^\/|\/$/g, "");
  return clean ? `/${locale}/${clean}/` : `/${locale}/`;
}

// Pick the current language out of a { fr, en, es, ar } object (falls back to French).
export function pick(value, locale) {
  if (value == null || typeof value !== "object" || Array.isArray(value)) return value;
  return value[locale] ?? value[defaultLocale];
}
