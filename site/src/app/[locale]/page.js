import Link from "@/components/Link";
import Icon from "@/components/Icon";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ArchImage, BrandCard, CtaBand, HeroArc, ServiceIcon, TeaCard } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { img } from "@/lib/img";
import { teas } from "@/content/teas";
import { brands } from "@/content/brands";
import { pantry } from "@/content/pantry";

// The four product lines shown right under the hero; their text lives in dict.home.categories.
const categories = [
  { id: "chunmee", image: "products/dkhmiss-41022.webp", path: "/teas", hash: "chunmee" },
  { id: "gunpowder", image: "products/gold-511-3505.webp", path: "/teas", hash: "gunpowder" },
  { id: "food", image: "products/bondelice-tomato-square.webp", path: "/conserves", hash: "canned" },
  { id: "bags", image: "products/custom-bag.webp", path: "/contact" },
];

export default async function HomePage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const h = dict.home;
  const heroBg = img("tea-gardens.webp");
  const packA = img("products/al-mousafir-4011-cut.webp");
  const packB = img("products/dkhmiss-41022-edition-cut.webp");
  const ritualBg = img("mint-tea-dark.webp");

  return (
    <>
      {/* ——— Hero ——— */}
      <section className="hero">
        <img className="hero__bg" src={heroBg.src} srcSet={heroBg.srcSet} sizes="100vw" width={heroBg.width} height={heroBg.height} alt="" fetchPriority="high" />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">{h.hero.eyebrow}</p>
            <h1 className="hero__title">
              {h.hero.title} <em>{h.hero.titleAccent}</em>
            </h1>
            <Ornament className="ornament--light ornament--start" />
            <p className="hero__text">{h.hero.text}</p>
            <div className="btn-row">
              <Link className="btn btn--gold btn--lg" href={href(locale, "/teas")}>
                {h.hero.cta} <Icon name="arrow" size={18} />
              </Link>
              <Link className="btn btn--ghost-light btn--lg" href={href(locale, "/contact")}>
                {h.hero.cta2}
              </Link>
            </div>
          </div>
          <div className="hero__showcase" aria-hidden="true">
            <div className="hero__halo" />
            <img className="hero__pack hero__pack--back" src={packB.src} srcSet={packB.srcSet} sizes="(max-width: 900px) 220px, 290px" width={packB.width} height={packB.height} alt="" />
            <img className="hero__pack hero__pack--front" src={packA.src} srcSet={packA.srcSet} sizes="(max-width: 900px) 240px, 320px" width={packA.width} height={packA.height} alt="" />
            <p className="hero__badge">
              <Icon name="leaf" size={18} /> {h.hero.badge}
            </p>
          </div>
        </div>
        <HeroArc />
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
                    <div className="cat-card__visual">
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
          <SectionHead eyebrow={h.brands.eyebrow} title={h.brands.title} text={h.brands.text} light />
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
