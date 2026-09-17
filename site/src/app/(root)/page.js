import { Emblem } from "@/components/Logo";
import { locales, localeNames, href, defaultLocale } from "@/lib/i18n";

export const metadata = {
  alternates: {
    canonical: href(defaultLocale),
    languages: { ...Object.fromEntries(locales.map((l) => [l, href(l)])), "x-default": href(defaultLocale) },
  },
};

// Static host, no server redirect: pick the browser language, fall back to French.
const script = `(function(){var l=(navigator.languages&&navigator.languages[0]||navigator.language||'fr').slice(0,2).toLowerCase();var ok=${JSON.stringify(
  locales
)};location.replace('/'+(ok.indexOf(l)>-1?l:'${defaultLocale}')+'/');})();`;

export default function RootPage() {
  return (
    <div className="lang-gate">
      <meta httpEquiv="refresh" content={`2;url=${href(defaultLocale)}`} />
      <script dangerouslySetInnerHTML={{ __html: script }} />
      <Emblem size={64} className="lang-gate__emblem" />
      <p className="lang-gate__name">China Tea Group</p>
      <ul className="lang-gate__list">
        {locales.map((l) => (
          <li key={l}>
            <a href={href(l)} hrefLang={l} lang={l}>
              {localeNames[l]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
