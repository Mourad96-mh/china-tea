import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ArchImage, CtaBand, Faq, PageHero, ServiceIcon } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).servicesPage;
  return pageMetadata({ locale, path: "/services", title: d.metaTitle, description: d.metaDescription });
}

export default async function ServicesPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.servicesPage;

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        intro={d.intro}
        image="containers.webp"
        crumbs={[
          { name: dict.common.home, url: href(locale) },
          { name: dict.nav.services, url: href(locale, "/services") },
        ]}
      />

      <section className="section section--pattern">
        <div className="container service-rows">
          {d.items.map((s, i) => (
            <Reveal key={s.title} className="service-row" delay={i * 60}>
              <ServiceIcon name={s.icon} />
              <div className="service-row__main">
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </div>
              <ul className="tick-list">
                {s.points.map((p) => (
                  <li key={p}>
                    <Icon name="leaf" size={18} /> {p}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container split">
          <Reveal className="split__media">
            <ArchImage file="packaging-formats-800.webp" alt="" />
          </Reveal>
          <Reveal className="split__copy" delay={100}>
            <SectionHead title={d.packagingTitle} text={d.packagingText} align="start" />
            <div className="format-grid">
              {d.formats.map((f) => (
                <div key={f.title} className="format">
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHead title={d.stepsTitle} />
          <ol className="timeline">
            {d.steps.map((s, i) => (
              <Reveal as="li" key={s.title} className="timeline__step" delay={i * 80}>
                <span className="timeline__num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container container--narrow">
          <SectionHead title={d.faqTitle} />
          <Faq items={d.faq} />
        </div>
      </section>

      <CtaBand title={dict.home.cta.title} text={dict.home.cta.text} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={dict.common.whatsapp} />
    </>
  );
}
