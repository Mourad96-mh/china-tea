import Link from "@/components/Link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { BrandCard, CtaBand, PageHero } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { img } from "@/lib/img";
import { fill, metaDescription, pageMetadata } from "@/lib/seo";
import { brands, getBrand } from "@/content/brands";
import { getTea } from "@/content/teas";

export const dynamicParams = false;

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  const d = getDict(locale).brandDetail;
  const grades = brand.teas.map((t) => getTea(t)?.code).join(", ");
  return pageMetadata({
    locale,
    path: `/brands/${slug}`,
    title: fill(d.metaTitle, { name: brand.name, grades }),
    description: metaDescription(pick(brand.pitch, locale), d.metaSuffix),
    image: `/img/${brand.cover}`,
  });
}

export default async function BrandPage({ params }) {
  const { locale, slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();
  const dict = getDict(locale);
  const c = dict.common;
  const d = dict.brandDetail;
  const cover = img(brand.cover);
  const others = brands.filter((b) => b.slug !== slug);

  return (
    <>
      <PageHero
        eyebrow={pick(brand.meaning, locale)}
        title={brand.name}
        intro={pick(brand.pitch, locale)}
        image="tea-hills.webp"
        crumbs={[
          { name: c.home, url: href(locale) },
          { name: dict.nav.brands, url: href(locale, "/brands") },
          { name: brand.name, url: href(locale, `/brands/${slug}`) },
        ]}
      />

      <section className="section section--pattern">
        <div className="container detail" style={{ "--brand": brand.accent }}>
          <Reveal className="detail__media">
            <div className={`detail__visual detail__visual--brand${brand.coverScene ? " is-scene" : ""}`}>
              <img src={cover.src} srcSet={cover.srcSet} sizes="(max-width: 860px) 90vw, 480px" width={cover.width} height={cover.height} alt={`${brand.name} — ${pick(brand.packs[0].name, locale)}`} />
            </div>
            {brand.concept && <p className="detail__note">{d.conceptNote}</p>}
          </Reveal>
          <Reveal className="detail__copy" delay={100}>
            {brand.arabic && (
              <p className="detail__arabic" lang="ar" dir="rtl">
                {brand.arabic}
              </p>
            )}
            <h2 className="detail__subtitle detail__subtitle--first">{d.storyTitle}</h2>
            <p className="lead">{pick(brand.story, locale)}</p>
            <h2 className="detail__subtitle">{c.brandTeas}</h2>
            <ul className="grade-links">
              {brand.teas.map(getTea).filter(Boolean).map((t) => (
                <li key={t.slug}>
                  <Link href={href(locale, `/teas/${t.slug}`)}>
                    <span className="grade-links__code">{t.code}</span>
                    <span>
                      <strong>{pick(t.name, locale)}</strong>
                      <small>{pick(t.tagline, locale)}</small>
                    </span>
                    <Icon name="arrow" size={18} />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {brand.packs.length > 1 && (
        <section className="section section--cream">
          <div className="container">
            <SectionHead title={d.rangeTitle} />
            <div className="pack-grid">
              {brand.packs.map((p, i) => {
                const pi = img(p.image);
                return (
                  <Reveal as="figure" key={p.image} className={`pack${p.scene ? " is-scene" : ""}`} delay={i * 80}>
                    <div className="pack__img">
                      <img src={pi.src} srcSet={pi.srcSet} sizes="(max-width: 560px) 90vw, 280px" width={pi.width} height={pi.height} alt={`${brand.name} — ${pick(p.name, locale)}`} loading="lazy" />
                    </div>
                    <figcaption>{pick(p.name, locale)}</figcaption>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section section--dark">
        <div className="container">
          <SectionHead title={d.otherBrands} />
          <div className="brand-grid brand-grid--three">
            {others.map((b) => (
              <BrandCard key={b.slug} brand={b} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={d.ctaTitle} text={d.ctaText} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={c.whatsapp} />
    </>
  );
}
