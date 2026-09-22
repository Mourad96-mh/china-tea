import Icon from "@/components/Icon";
import Ornament from "@/components/Ornament";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/Blocks";
import { getDict } from "@/dict";
import { href } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).contactPage;
  return pageMetadata({ locale, path: "/contact", title: d.metaTitle, description: d.metaDescription });
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.contactPage;
  const c = dict.common;

  return (
    <>
      <PageHero
        eyebrow={d.eyebrow}
        title={d.title}
        intro={d.intro}
        image="containers.webp"
        crumbs={[
          { name: c.home, url: href(locale) },
          { name: dict.nav.contact, url: href(locale, "/contact") },
        ]}
      />
      <section className="section section--pattern">
        <div className="container contact">
          <div className="contact__form panel">
            <ContactForm form={d.form} />
          </div>
          <aside className="contact__aside">
            <h2 className="panel__title">{d.directTitle}</h2>
            <Ornament className="ornament--start" />
            <a className="contact-line" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={22} />
              <span>
                <small>{c.phone}</small>
                {site.phoneDisplay}
              </span>
            </a>
            <a className="contact-line" href={`tel:${site.phoneE164}`}>
              <Icon name="phone" size={22} />
              <span>
                <small>{c.call}</small>
                {site.phoneDisplay}
              </span>
            </a>
            {site.email && (
              <a className="contact-line" href={`mailto:${site.email}`}>
                <Icon name="mail" size={22} />
                <span>
                  <small>{c.email}</small>
                  {site.email}
                </span>
              </a>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
