// Small presentational building blocks shared by several pages.
import Link from "@/components/Link";
import Icon from "./Icon";
import Ornament from "./Ornament";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import { href, pick } from "@/lib/i18n";
import { img } from "@/lib/img";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFloat({ label }) {
  return (
    <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon name="whatsapp" size={30} />
    </a>
  );
}

// Curved gold edge closing a dark hero, echoing a Moroccan arch.
export function HeroArc({ fill = "var(--cream-50)" }) {
  return (
    <svg className="hero-arc" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 18C360 96 1080 96 1440 18V90H0Z" fill={fill} />
      <path d="M0 18C360 96 1080 96 1440 18" fill="none" stroke="var(--gold-500)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

export function PageHero({ eyebrow, title, intro, image = "tea-leaves.webp", crumbs, children }) {
  const bg = img(image);
  return (
    <section className="page-hero">
      <img className="page-hero__bg" src={bg.src} srcSet={bg.srcSet} sizes="100vw" alt="" width={bg.width} height={bg.height} fetchPriority="high" />
      <div className="container page-hero__inner">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1 className="page-hero__title">{title}</h1>
        <Ornament className="ornament--light" />
        {intro && <p className="page-hero__intro">{intro}</p>}
        {children}
      </div>
      <HeroArc />
    </section>
  );
}

export function CtaBand({ title, text, button, buttonHref, whatsappLabel }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <Ornament />
        <h2 className="cta-band__title">{title}</h2>
        {text && <p className="cta-band__text">{text}</p>}
        <div className="btn-row btn-row--center">
          {button && (
            <Link className="btn btn--gold" href={buttonHref}>
              {button}
            </Link>
          )}
          <a className="btn btn--outline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> {whatsappLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

export function TeaCard({ tea, locale, dict }) {
  const visual = tea.image ? img(tea.image) : null;
  // Second photo, shown on hover like a shop listing
  const hover = tea.gallery?.[0] ? img(tea.gallery[0].image) : null;
  return (
    <article className="tea-card">
      <Link href={href(locale, `/teas/${tea.slug}`)} className="tea-card__link">
        <div className={`tea-card__visual${visual ? "" : " tea-card__visual--leaf"}${tea.imageScene ? " tea-card__visual--scene" : ""}${tea.imageWhite ? " tea-card__visual--white" : ""}${hover ? " has-hover" : ""}`}>
          {visual && <img src={visual.src} srcSet={visual.srcSet} sizes="(max-width: 560px) 80vw, 260px" width={visual.width} height={visual.height} alt="" loading="lazy" />}
          {hover && <img className="tea-card__hover" src={hover.src} srcSet={hover.srcSet} sizes="(max-width: 560px) 80vw, 260px" width={hover.width} height={hover.height} alt="" loading="lazy" />}
          <span className="tea-card__code">{tea.code}</span>
        </div>
        <div className="tea-card__body">
          <p className="tea-card__family">{dict.common.family[tea.family]}</p>
          <h3 className="tea-card__title">{pick(tea.name, locale)}</h3>
          <p className="tea-card__tagline">{pick(tea.tagline, locale)}</p>
          <dl className="tea-card__specs">
            <div>
              <dt>{dict.common.liquor}</dt>
              <dd>{pick(tea.specs.liquor, locale)}</dd>
            </div>
            <div>
              <dt>{dict.common.taste}</dt>
              <dd>{pick(tea.specs.taste, locale)}</dd>
            </div>
          </dl>
          <span className="link-arrow">
            {dict.common.viewSheet} <Icon name="arrow" size={18} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function BrandCard({ brand, locale, dict, headingLevel = 3 }) {
  const cover = img(brand.cover);
  // Another pack of the range, shown on hover like a shop listing
  const alt = brand.packs.find((p) => p.image !== brand.cover);
  const hover = alt ? img(alt.image) : null;
  const Heading = `h${headingLevel}`;
  return (
    <article className="brand-card" style={{ "--brand": brand.accent }}>
      <Link href={href(locale, `/brands/${brand.slug}`)} className="brand-card__link">
        <div className={`brand-card__visual${brand.coverScene ? " brand-card__visual--scene" : ""}${hover ? " has-hover" : ""}`}>
          <img src={cover.src} srcSet={cover.srcSet} sizes="(max-width: 560px) 90vw, (max-width: 1080px) 45vw, 280px" width={cover.width} height={cover.height} alt={`${brand.name} — ${pick(brand.packs[0].name, locale)}`} loading="lazy" />
          {hover && <img className={`brand-card__hover${alt.scene ? " is-scene" : ""}`} src={hover.src} srcSet={hover.srcSet} sizes="(max-width: 560px) 90vw, (max-width: 1080px) 45vw, 280px" width={hover.width} height={hover.height} alt="" loading="lazy" />}
        </div>
        <div className="brand-card__body">
          <p className="brand-card__meaning">{pick(brand.meaning, locale)}</p>
          <Heading className="brand-card__name">
            {brand.name}
            {brand.arabic && (
              <span className="brand-card__arabic" lang="ar" dir="rtl">
                {brand.arabic}
              </span>
            )}
          </Heading>
          <p className="brand-card__pitch">{pick(brand.pitch, locale)}</p>
          <span className="link-arrow">
            {dict.common.discover} <Icon name="arrow" size={18} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function ServiceIcon({ name }) {
  return (
    <span className="service-icon">
      <Icon name={name} size={30} strokeWidth={1.4} />
    </span>
  );
}

export function Faq({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })),
  };
  return (
    <div className="faq">
      {items.map((it) => (
        <details key={it.q} className="faq__item">
          <summary>
            <span>{it.q}</span>
            <Icon name="plus" size={20} className="faq__icon" />
          </summary>
          <p>{it.a}</p>
        </details>
      ))}
      <JsonLd data={data} />
    </div>
  );
}

// Image framed in a Moroccan arch with a gold hairline offset.
export function ArchImage({ file, alt = "", className = "", priority = false }) {
  const i = img(file);
  return (
    <div className={`arch ${className}`}>
      <img src={i.src} srcSet={i.srcSet} sizes="(max-width: 860px) 360px, 440px" width={i.width} height={i.height} alt={alt} loading={priority ? "eager" : "lazy"} />
    </div>
  );
}
