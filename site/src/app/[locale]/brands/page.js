import Reveal from "@/components/Reveal";
import { BrandCard, CtaBand, PageHero } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { brands } from "@/content/brands";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).brandsPage;
  return pageMetadata({ locale, path: "/brands", title: d.metaTitle, description: d.metaDescription });
}

export default async function BrandsPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.brandsPage;

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        intro={d.intro}
        image="tea-hills.webp"
        crumbs={[
          { name: dict.common.home, url: href(locale) },
          { name: dict.nav.brands, url: href(locale, "/brands") },
        ]}
      />
      <section className="section section--dark">
        <div className="container">
          <div className="brand-grid brand-grid--two">
            {brands.map((b, i) => (
              <Reveal key={b.slug} delay={i * 80}>
                <BrandCard brand={b} locale={locale} dict={dict} headingLevel={2} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title={d.ctaTitle} text={d.ctaText} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={dict.common.whatsapp} />
    </>
  );
}
