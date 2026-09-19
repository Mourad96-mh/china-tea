import Link from "@/components/Link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import SectionHead from "@/components/SectionHead";
import { CtaBand, PageHero, TeaCard } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { img } from "@/lib/img";
import { fill, metaDescription, pageMetadata } from "@/lib/seo";
import { teas, getTea } from "@/content/teas";
import { getBrand } from "@/content/brands";

export const dynamicParams = false;

export function generateStaticParams() {
  return teas.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const tea = getTea(slug);
  if (!tea) return {};
  const d = getDict(locale).teaDetail;
  return pageMetadata({
    locale,
    path: `/teas/${slug}`,
    title: fill(d.metaTitle, { name: pick(tea.name, locale) }),
    description: metaDescription(pick(tea.summary, locale), d.metaSuffix),
  });
}

export default async function TeaDetailPage({ params }) {
  const { locale, slug } = await params;
  const tea = getTea(slug);
  if (!tea) notFound();
  const dict = getDict(locale);
  const c = dict.common;
  const d = dict.teaDetail;
  // Main photo first, then the extra shop-style photos. Leaf photos are captioned with the grade
  // (and sort level), shown whole on white like their own background; nothing is cropped.
  const name = pick(tea.name, locale);
  const leafLabel = (sort) => fill(d.leafLabel, { name: sort ? `${name} ${sort}` : name });
  const photos = [
    tea.imageWhite
      ? { image: tea.image, fit: true, leaf: true, alt: leafLabel(), caption: leafLabel() }
      : {
          image: tea.image,
          scene: Boolean(tea.imageScene),
          alt: name,
          caption: tea.imageConcept ? dict.brandDetail.conceptNote : undefined,
        },
    ...(tea.gallery || []).map((g) => ({
      image: g.image,
      fit: true,
      leaf: g.kind === "leaf",
      alt: g.kind === "leaf" ? leafLabel(g.sort) : name,
      caption: g.kind === "leaf" ? leafLabel(g.sort) : undefined,
    })),
  ].map((p) => ({ ...p, ...img(p.image) }));
  const brandList = tea.brands.map(getBrand).filter(Boolean);
  const others = teas.filter((t) => t.slug !== slug);
  const specKeys = ["leaf", "liquor", "aroma", "taste"];

  return (
    <>
      <PageHero
        eyebrow={`${c.family[tea.family]} · ${c.grade} ${tea.code}`}
        title={pick(tea.name, locale)}
        intro={pick(tea.tagline, locale)}
        image="tea-leaves.webp"
        crumbs={[
          { name: c.home, url: href(locale) },
          { name: dict.nav.teas, url: href(locale, "/teas") },
          { name: pick(tea.name, locale), url: href(locale, `/teas/${slug}`) },
        ]}
      />

      <section className="section section--pattern">
        <div className="container detail">
          <Reveal className="detail__media">
            <Gallery items={photos} code={tea.code} photoLabel={d.photoLabel} />
          </Reveal>
          <Reveal className="detail__copy" delay={100}>
            <p className="lead">{pick(tea.summary, locale)}</p>
            <h2 className="detail__subtitle">{d.specsTitle}</h2>
            <dl className="spec-list">
              {specKeys.map((k) => (
                <div key={k}>
                  <dt>{c[k]}</dt>
                  <dd>{pick(tea.specs[k], locale)}</dd>
                </div>
              ))}
            </dl>
            <h2 className="detail__subtitle">{c.idealFor}</h2>
            <ul className="tick-list">
              {pick(tea.uses, locale).map((u) => (
                <li key={u}>
                  <Icon name="leaf" size={18} /> {u}
                </li>
              ))}
            </ul>
            {brandList.length > 0 ? (
              <>
                <h2 className="detail__subtitle">{c.availableIn}</h2>
                <ul className="chip-list">
                  {brandList.map((b) => (
                    <li key={b.slug}>
                      <Link className="chip" href={href(locale, `/brands/${b.slug}`)}>
                        {b.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="note">{c.privateLabelOnly}</p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container two-col">
          <Reveal className="panel">
            <h2 className="panel__title">{d.brewTitle}</h2>
            <Ornament className="ornament--start" />
            <ol className="num-list">
              {d.brewSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="panel" delay={100}>
            <h2 className="panel__title">{d.packagingTitle}</h2>
            <Ornament className="ornament--start" />
            <p>{d.packagingText}</p>
            <Link className="link-arrow" href={href(locale, "/services")}>
              {dict.nav.services} <Icon name="arrow" size={18} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--pattern">
        <div className="container">
          <SectionHead title={d.otherTeas} />
          <div className="tea-grid tea-grid--four">
            {others.map((t) => (
              <TeaCard key={t.slug} tea={t} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={d.ctaTitle} text={d.ctaText} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={c.whatsapp} />
    </>
  );
}
