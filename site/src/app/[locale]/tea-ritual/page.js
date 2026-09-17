import Link from "@/components/Link";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ArchImage, CtaBand, PageHero } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { teas } from "@/content/teas";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).ritualPage;
  return pageMetadata({ locale, path: "/tea-ritual", title: d.metaTitle, description: d.metaDescription });
}

export default async function RitualPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.ritualPage;

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        intro={d.intro}
        image="mint-tea-dark.webp"
        crumbs={[
          { name: dict.common.home, url: href(locale) },
          { name: dict.nav.ritual, url: href(locale, "/tea-ritual") },
        ]}
      />

      <section className="section section--pattern">
        <div className="container split">
          <Reveal className="split__media">
            <ArchImage file="mint-tea-tray-800.webp" alt="" />
          </Reveal>
          <Reveal className="split__copy" delay={100}>
            <SectionHead title={d.historyTitle} align="start" />
            {d.history.map((p) => (
              <p key={p} className="prose">
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHead title={d.prepTitle} />
          <ol className="prep-grid">
            {d.prep.map((s, i) => (
              <Reveal as="li" key={s.title} className="prep" delay={i * 70}>
                <span className="prep__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead title={d.glassesTitle} light />
          <div className="glasses">
            {d.glasses.map((g, i) => (
              <Reveal key={g.title} className={`glass glass--${i + 1}`} delay={i * 120}>
                <svg className="glass__icon" viewBox="0 0 60 90" aria-hidden="true">
                  <path d="M10 8h40l-5 74H15L10 8Z" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path className="glass__tea" d="M12.6 38h34.8l-2.9 44H15.5Z" />
                </svg>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </Reveal>
            ))}
          </div>
          <p className="glasses__note">{d.glassesNote}</p>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container container--narrow">
          <SectionHead title={d.glossaryTitle} />
          <dl className="glossary">
            {d.glossary.map((g) => (
              <div key={g.term}>
                <dt>{g.term}</dt>
                <dd>{g.def}</dd>
              </div>
            ))}
          </dl>
          <Ornament />
          <ul className="chip-list chip-list--center">
            {teas.map((t) => (
              <li key={t.slug}>
                <Link className="chip" href={href(locale, `/teas/${t.slug}`)}>
                  {t.code}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title={dict.home.cta.title} text={dict.home.cta.text} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={dict.common.whatsapp} />
    </>
  );
}
