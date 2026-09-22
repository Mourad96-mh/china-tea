import Link from "@/components/Link";
import Icon from "@/components/Icon";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ArchImage, BrandCard, CtaBand, ServiceIcon, TeaCard } from "@/components/Blocks";
import { site } from "@/lib/site";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { img } from "@/lib/img";
import { teas } from "@/content/teas";
import { brands } from "@/content/brands";
import { pantry } from "@/content/pantry";

// Packs lined up in the hero, as in the client's mock-up; icons of the feature strip below it.
const heroPacks = [
  "products/brand-401-atay-cut.webp",
  "products/dkhmiss-41022-edition-hd-cut.webp",
  "products/brand-711-cut.webp",
  "products/brand-511-diamant-cut.webp",
];
const featureIcons = ["leaf", "box", "ship"];

// The four product lines shown right under the hero; their text lives in dict.home.categories.
// `contain`: white-background visuals (cut-out packs, M / L / XL bag line-up) shown whole instead of cropped.
const categories = [
  { id: "chunmee", image: "products/dkhmiss-41022-edition-hd-cut.webp", path: "/teas", hash: "chunmee", contain: true },
  { id: "gunpowder", image: "products/brand-511-diamant-cut.webp", path: "/teas", hash: "gunpowder", contain: true },
  { id: "food", image: "products/bondelice-tomato-cut.webp", path: "/conserves", hash: "canned", contain: true },
  { id: "bags", image: "products/custom-bag.webp", path: "/contact", contain: true },
];

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const h = dict.home;
  const heroBg = img("tea-gardens.webp");
  const ritualBg = img("mint-tea-dark.webp");

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero">
        <img className="hero__bg" src={heroBg.src} srcSet={heroBg.srcSet} sizes="100vw" width={heroBg.width} height={heroBg.height} alt="" fetchPriority="high" />
        <div className="container hero__inner">
          <p className="eyebrow hero__eyebrow">{h.hero.eyebrow}</p>
          <h1 className="hero__title">{h.hero.title}</h1>
          <p className="hero__text">{h.hero.text}</p>
          <Link className="btn btn--green btn--lg" href={href(locale, "/contact")}>
            {h.hero.cta} <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="container hero__packs" aria-hidden="true">
          {heroPacks.map((file) => {
            const p = img(file);
            return <img key={file} src={p.src} srcSet={p.srcSet} sizes="(max-width: 640px) 45vw, 280px" width={p.width} height={p.height} alt="" fetchPriority="high" />;
          })}
        </div>
      </section>

      <section className="hero-features" aria-label={h.hero.featuresLabel}>
        <div className="container hero-features__inner">
          {h.hero.features.map((f, i) => (
            <p key={f} className="hero-features__item">
              <Icon name={featureIcons[i]} size={34} strokeWidth={1.3} /> {f}
            </p>
          ))}
          <p className="hero-features__tag">{site.name}</p>
        </div>
      </section>

      {/* ——— Product categories ——— */}
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow={h.categories.eyebrow} title={h.categories.title} text={h.categories.text} />
          <div className="cat-grid">
            {categories.map((c, i) => {
              const t = h.categories.items[c.id];
              const pic = img(c.image);
              return (
                <Reveal key={c.id} className="cat-card" delay={i * 80}>
                  <Link className="cat-card__link" href={href(locale, c.path) + (c.hash ? `#${c.hash}` : "")}>
                    <div className={c.contain ? "cat-card__visual cat-card__visual--contain" : "cat-card__visual"}>
                      <img src={pic.src} srcSet={pic.srcSet} sizes="(max-width: 560px) 45vw, 280px" width={pic.width} height={pic.height} alt="" loading="lazy" />
                    </div>
                    <div className="cat-card__body">
                      <h3 className="cat-card__title">{t.title}</h3>
                      <p>{t.text}</p>
                      <span className="link-arrow">
                        {t.cta} <Icon name="arrow" size={18} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ——— Intro + figures ——— */}
      <section className="section section--pattern">
        <div className="container split">
          <Reveal className="split__media">
            <ArchImage file="tea-picker-800.webp" alt="" />
            <div className="split__stamp">
              <span>Zhejiang</span>
              <Ornament />
              <span>Hong Kong</span>
            </div>
          </Reveal>
          <Reveal className="split__copy" delay={120}>
            <SectionHead eyebrow={h.intro.eyebrow} title={h.intro.title} align="start" />
            {h.intro.paras.map((p) => (
              <p key={p} className="prose">
                {p}
              </p>
            ))}
            <Link className="link-arrow" href={href(locale, "/about")}>
              {h.intro.cta} <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
        <div className="container">
          <ul className="stats">
            {h.stats.map((s, i) => (
              <Reveal as="li" key={s.label} className="stats__item" delay={i * 80}>
                <span className="stats__value">{s.value}</span>
                <span className="stats__label">{s.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Grades ——— */}
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow={h.teas.eyebrow} title={h.teas.title} text={h.teas.text} />
          <div className="tea-grid">
            {teas.map((t, i) => (
              <Reveal key={t.slug} delay={i * 70}>
                <TeaCard tea={t} locale={locale} dict={dict} />
              </Reveal>
            ))}
          </div>
          <p className="center-cta">
            <Link className="btn btn--outline" href={href(locale, "/teas")}>
              {dict.common.allTeas}
            </Link>
          </p>
        </div>
      </section>

      {/* ——— Brands ——— */}
      <section className="section section--dark">
        <div className="container">
          <SectionHead eyebrow={h.brands.eyebrow} title={h.brands.title} text={h.brands.text} />
          <div className="brand-grid">
            {brands.map((b, i) => (
              <Reveal key={b.slug} delay={i * 80}>
                <BrandCard brand={b} locale={locale} dict={dict} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Process ——— */}
      <section className="section section--pattern">
        <div className="container">
          <SectionHead eyebrow={h.process.eyebrow} title={h.process.title} text={h.process.text} />
          <div className="process">
            <ArchImage file="withering-800.webp" className="process__media" alt="" />
            <ol className="process__steps">
              {h.process.steps.map((s, i) => (
                <Reveal as="li" key={s.title} className="process__step" delay={i * 60}>
                  <span className="process__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section className="section section--cream">
        <div className="container">
          <SectionHead eyebrow={h.services.eyebrow} title={h.services.title} text={h.services.text} />
          <div className="service-grid">
            {h.services.items.map((s, i) => (
              <Reveal key={s.title} className="service-card" delay={i * 70}>
                <ServiceIcon name={s.icon} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="center-cta">
            <Link className="btn btn--outline" href={href(locale, "/services")}>
              {h.services.cta}
            </Link>
          </p>
        </div>
      </section>

      {/* ——— Ritual quote ——— */}
      <section className="quote-band">
        <img className="quote-band__bg" src={ritualBg.src} srcSet={ritualBg.srcSet} sizes="100vw" width={ritualBg.width} height={ritualBg.height} alt="" loading="lazy" />
        <div className="container quote-band__inner">
          <Reveal className="quote-band__card">
            <p className="eyebrow eyebrow--light">{h.ritual.eyebrow}</p>
            <h2 className="quote-band__title">{h.ritual.title}</h2>
            <Ornament className="ornament--light ornament--start" />
            <p>{h.ritual.text}</p>
          </Reveal>
        </div>
      </section>

      {/* ——— Markets ——— */}
      <section className="section section--pattern">
        <div className="container">
          <SectionHead eyebrow={h.markets.eyebrow} title={h.markets.title} text={h.markets.text} />
          <div className="market-grid">
            {h.markets.regions.map((r, i) => (
              <Reveal key={r.name} className="market-card" delay={i * 80}>
                <span className="market-card__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{r.name}</h3>
                <p>{r.text}</p>
                <ul className="market-card__countries">
                  {r.countries.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
          <p className="market-note">
            {h.markets.note}{" "}
            <Link className="link-arrow" href={href(locale, "/contact")}>
              {h.markets.noteCta} <Icon name="arrow" size={16} />
            </Link>
          </p>
        </div>
      </section>

      {/* ——— Pantry teaser ——— */}
      <section className="section section--cream">
        <div className="container split split--reverse">
          <Reveal className="split__copy">
            <SectionHead eyebrow={h.pantry.eyebrow} title={h.pantry.title} text={h.pantry.text} align="start" />
            <Link className="btn btn--outline" href={href(locale, "/conserves")}>
              {h.pantry.cta}
            </Link>
          </Reveal>
          <Reveal className="pantry-mini" delay={100}>
            {pantry.filter((p) => p.featured).map((p) => {
              const i = img(p.image);
              return (
                <figure key={p.id} className={`pantry-mini__item${p.scene ? " is-scene" : ""}`}>
                  <img src={i.src} srcSet={i.srcSet} sizes="(max-width: 860px) 45vw, 260px" width={i.width} height={i.height} alt={pick(p.name, locale)} loading="lazy" />
                </figure>
              );
            })}
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={h.cta.title}
        text={h.cta.text}
        button={h.cta.button}
        buttonHref={href(locale, "/contact")}
        whatsappLabel={dict.common.whatsapp}
      />
    </>
  );
}
