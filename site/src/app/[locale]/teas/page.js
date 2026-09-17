import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { CtaBand, PageHero, TeaCard } from "@/components/Blocks";
import JsonLd from "@/components/JsonLd";
import Link from "@/components/Link";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { teas } from "@/content/teas";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).teasPage;
  return pageMetadata({ locale, path: "/teas", title: d.metaTitle, description: d.metaDescription });
}

export default async function TeasPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.teasPage;
  const c = dict.common;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: d.title,
    itemListElement: teas.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pick(t.name, locale),
      item: absoluteUrl(href(locale, `/teas/${t.slug}`)),
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        intro={d.intro}
        image="tea-leaves.webp"
        crumbs={[
          { name: c.home, url: href(locale) },
          { name: dict.nav.teas, url: href(locale, "/teas") },
        ]}
      />

      <section className="section section--pattern">
        <div className="container family-grid">
          {d.families.map((f, i) => (
            <Reveal key={f.id} className="family-card" delay={i * 100}>
              <h2>{f.title}</h2>
              <p>{f.text}</p>
              <ul className="chip-list">
                {teas
                  .filter((t) => t.family === f.id)
                  .map((t) => (
                    <li key={t.slug}>
                      <Link className="chip" href={href(locale, `/teas/${t.slug}`)}>
                        {t.code}
                      </Link>
                    </li>
                  ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="tea-grid">
            {teas.map((t, i) => (
              <Reveal key={t.slug} delay={i * 70}>
                <TeaCard tea={t} locale={locale} dict={dict} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container">
          <SectionHead title={d.compareTitle} />
          <div className="table-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col">{c.grade}</th>
                  <th scope="col">{c.leaf}</th>
                  <th scope="col">{c.liquor}</th>
                  <th scope="col">{c.aroma}</th>
                  <th scope="col">{c.taste}</th>
                </tr>
              </thead>
              <tbody>
                {teas.map((t) => (
                  <tr key={t.slug}>
                    <th scope="row">
                      <Link href={href(locale, `/teas/${t.slug}`)}>{pick(t.name, locale)}</Link>
                    </th>
                    <td>{pick(t.specs.leaf, locale)}</td>
                    <td>{pick(t.specs.liquor, locale)}</td>
                    <td>{pick(t.specs.aroma, locale)}</td>
                    <td>{pick(t.specs.taste, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand title={d.ctaTitle} text={d.ctaText} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={c.whatsapp} />
      <JsonLd data={itemList} />
    </>
  );
}
