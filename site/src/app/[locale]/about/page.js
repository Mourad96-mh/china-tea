import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { ArchImage, CtaBand, PageHero } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).aboutPage;
  return pageMetadata({ locale, path: "/about", title: d.metaTitle, description: d.metaDescription });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.aboutPage;

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        image="tea-hills.webp"
        crumbs={[
          { name: dict.common.home, url: href(locale) },
          { name: dict.nav.about, url: href(locale, "/about") },
        ]}
      />

      <section className="section section--pattern">
        <div className="container split">
          <Reveal className="split__media">
            <ArchImage file="tea-picker-800.webp" alt="" />
          </Reveal>
          <Reveal className="split__copy" delay={100}>
            {d.paras.map((p, i) => (
              <p key={p} className={i === 0 ? "lead" : "prose"}>
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <SectionHead title={d.valuesTitle} />
          <div className="value-grid">
            {d.values.map((v, i) => (
              <Reveal key={v.title} className="value" delay={i * 70}>
                <span className="value__num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container">
          <SectionHead title={d.officesTitle} />
          <div className="office-grid">
            {site.offices.map((o, i) => (
              <Reveal key={o.id} className="office" delay={i * 100}>
                <Icon name="pin" size={28} />
                <h3>{pick(o.label, locale)}</h3>
                <address>
                  {o.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={dict.home.cta.title} text={dict.home.cta.text} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={dict.common.whatsapp} />
    </>
  );
}
