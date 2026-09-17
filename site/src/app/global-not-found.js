import "./globals.css";
import { display, sans } from "./fonts";
import { Emblem } from "@/components/Logo";
import { locales, href } from "@/lib/i18n";
import fr from "@/dict/fr";
import en from "@/dict/en";
import es from "@/dict/es";

export const metadata = {
  title: "404 — China Tea Group",
  robots: { index: false },
};

const dicts = { fr, en, es };

export default function GlobalNotFound() {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="lang-gate">
          <Emblem size={64} className="lang-gate__emblem" />
          <p className="lang-gate__code">404</p>
          {locales.map((l) => (
            <p key={l} lang={l} className="lang-gate__line">
              <strong>{dicts[l].notFound.title}</strong> — <a href={href(l)}>{dicts[l].common.backHome}</a>
            </p>
          ))}
        </div>
      </body>
    </html>
  );
}
