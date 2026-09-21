import Link from "@/components/Link";
import Logo from "./Logo";
import Icon from "./Icon";
import { href, pick } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";
import { teas } from "@/content/teas";
import { brands } from "@/content/brands";

export default function Footer({ locale, dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>{dict.meta.description}</p>
          <a className="btn btn--whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> {dict.common.whatsapp}
          </a>
        </div>

        <div>
          <h2 className="footer__title">{dict.nav.teas}</h2>
          <ul className="footer__list">
            {teas.map((t) => (
              <li key={t.slug}>
                <Link href={href(locale, `/teas/${t.slug}`)}>{pick(t.name, locale)}</Link>
              </li>
            ))}
          </ul>
          <h2 className="footer__title footer__title--spaced">{dict.nav.brands}</h2>
          <ul className="footer__list">
            {brands.map((b) => (
              <li key={b.slug}>
                <Link href={href(locale, `/brands/${b.slug}`)}>{b.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__title">{site.name}</h2>
          <ul className="footer__list">
            <li><Link href={href(locale, "/services")}>{dict.nav.services}</Link></li>
            <li><Link href={href(locale, "/conserves")}>{dict.nav.pantry}</Link></li>
            <li><Link href={href(locale, "/about")}>{dict.nav.about}</Link></li>
            <li><Link href={href(locale, "/contact")}>{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">{dict.common.offices}</h2>
          {site.offices.map((o) => (
            <address key={o.id} className="footer__office">
              <strong>{pick(o.label, locale)}</strong>
              {o.lines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>
          ))}
          <a className="footer__contact" href={`tel:${site.phoneE164}`}>
            <Icon name="phone" size={17} /> {site.phoneDisplay}
          </a>
          {site.email && (
            <a className="footer__contact" href={`mailto:${site.email}`}>
              <Icon name="mail" size={17} /> {site.email}
            </a>
          )}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {year} {site.name}. {dict.common.rights}
          </p>
          <Link href={href(locale, "/legal")}>
            {dict.common.legal} · {dict.common.photoCredits}
          </Link>
        </div>
      </div>
    </footer>
  );
}
