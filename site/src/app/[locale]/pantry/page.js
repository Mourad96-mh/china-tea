import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";
import { CtaBand, PageHero } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { img } from "@/lib/img";
import { pageMetadata } from "@/lib/seo";
import { pantry, pantryGroups } from "@/content/pantry";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).pantryPage;
  return pageMetadata({ locale, path: "/pantry", title: d.metaTitle, description: d.metaDescription });
}

export default async function PantryPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.pantryPage;

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        intro={d.intro}
        image="teapot.webp"
        crumbs={[
          { name: dict.common.home, url: href(locale) },
          { name: dict.nav.pantry, url: href(locale, "/pantry") },
        ]}
      />
      {pantryGroups.map((group, g) => {
        const items = pantry.filter((p) => p.group === group.id);
        return (
          <section key={group.id} className={`section section--compact ${g % 2 ? "section--cream" : "section--pattern"}`}>
            <div className="container">
              <SectionHead title={pick(group.name, locale)} />
              <div className="product-grid">
                {items.map((p, i) => {
                  const pi = img(p.image);
                  return (
                    <Reveal as="article" key={p.id} className="product" delay={i * 80}>
                      <div className={`product__img${p.scene ? " is-scene" : ""}`}>
                        <img src={pi.src} srcSet={pi.srcSet} sizes="(max-width: 720px) 45vw, 260px" width={pi.width} height={pi.height} alt={pick(p.name, locale)} loading="lazy" />
                      </div>
                      <div className="product__body">
                        <p className="product__cat">{pick(group.name, locale)}</p>
                        <h3 className="product__name">{pick(p.name, locale)}</h3>
                        <p>{pick(p.text, locale)}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
      <section className="section section--compact section--pattern">
        <div className="container">
          <p className="note note--center note--flush">{d.note}</p>
        </div>
      </section>
      <CtaBand title={dict.home.cta.title} text={dict.home.cta.text} button={dict.nav.quote} buttonHref={href(locale, "/contact")} whatsappLabel={dict.common.whatsapp} />
    </>
  );
}
