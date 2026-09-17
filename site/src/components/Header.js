"use client";
import Link from "@/components/Link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Icon from "./Icon";
import { href, locales } from "@/lib/i18n";
import { site, whatsappLink } from "@/lib/site";

const NAV = [
  ["teas", "/teas"],
  ["brands", "/brands"],
  ["services", "/services"],
  ["ritual", "/tea-ritual"],
  ["pantry", "/pantry"],
  ["about", "/about"],
];

export default function Header({ locale, dict }) {
  const pathname = usePathname() || `/${locale}/`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Same page in another language: swap the first path segment.
  const switchTo = (l) => pathname.replace(/^\/(fr|en|es)(?=\/|$)/, `/${l}`);
  const isActive = (path) => pathname.startsWith(href(locale, path));

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <a className="skip-link" href="#main">{dict.nav.skip}</a>
      <div className="topbar">
        <div className="container topbar__inner">
          <p className="topbar__text">{dict.topbar.text}</p>
          <a className="topbar__phone" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={15} /> {site.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="container navbar__inner">
          <Link href={href(locale)} className="navbar__brand">
            <Logo />
          </Link>

          <nav className="nav" id="site-nav" aria-label="Menu">
            <ul className="nav__list">
              {NAV.map(([key, path]) => (
                <li key={key}>
                  <Link
                    href={href(locale, path)}
                    className={`nav__link${isActive(path) ? " is-active" : ""}`}
                    aria-current={isActive(path) ? "page" : undefined}
                  >
                    {dict.nav[key]}
                  </Link>
                </li>
              ))}
              <li className="nav__mobile-only">
                <Link href={href(locale, "/contact")} className="nav__link">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
            <div className="lang" role="group" aria-label={dict.nav.language}>
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchTo(l)}
                  hrefLang={l}
                  lang={l}
                  className={`lang__link${l === locale ? " is-current" : ""}`}
                  aria-current={l === locale ? "true" : undefined}
                >
                  {l.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>

          <Link href={href(locale, "/contact")} className="btn btn--gold navbar__cta">
            {dict.nav.quote}
          </Link>

          <button
            type="button"
            className="burger"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={26} />
            <span className="sr-only">{open ? dict.nav.close : dict.nav.menu}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
