import Ornament from "@/components/Ornament";
import { getDict } from "@/dict";
import { href, pick } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import credits from "@/content/photo-credits.json";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const d = getDict(locale).legalPage;
  return {
    ...pageMetadata({ locale, path: "/legal", title: d.metaTitle, description: d.metaDescription }),
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  const d = dict.legalPage;

  return (
    <section className="section section--pattern legal">
      <div className="container container--narrow">
        <Breadcrumbs
          items={[
            { name: dict.common.home, url: href(locale) },
            { name: d.title, url: href(locale, "/legal") },
          ]}
        />
        <h1 className="section-title">{d.title}</h1>
        <Ornament className="ornament--start" />
        {d.sections.map((s) => (
          <div key={s.title} className="legal__block">
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </div>
        ))}
        <div className="legal__block">
          <h2>{site.name}</h2>
          {site.offices.map((o) => (
            <address key={o.id}>
              <strong>{pick(o.label, locale)}</strong>
              <br />
              {o.lines.join(", ")}
            </address>
          ))}
          <p>{site.phoneDisplay}</p>
        </div>
        <div className="legal__block">
          <h2>{d.creditsTitle}</h2>
          <p>{d.creditsIntro}</p>
          <ul className="credits">
            {credits.map((c) => (
              <li key={c.file}>
                <a href={`https://commons.wikimedia.org/wiki/${encodeURIComponent(c.source.replaceAll(" ", "_"))}`} target="_blank" rel="noopener noreferrer">
                  {c.source.replace(/^File:/, "")}
                </a>{" "}
                — {c.author}, {c.license}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
