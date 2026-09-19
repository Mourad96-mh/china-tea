import { notFound } from "next/navigation";
import "../globals.css";
import { display, sans } from "../fonts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { WhatsAppFloat } from "@/components/Blocks";
import WeChatFloat from "@/components/WeChatFloat";
import { getDict } from "@/dict";
import { isLocale, locales } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: "#10291d",
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDict(locale);
  return {
    metadataBase: new URL(site.url),
    ...pageMetadata({ locale, title: dict.meta.title, description: dict.meta.description, absolute: true }),
    title: { default: dict.meta.title, template: `%s | ${site.name}` },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDict(locale);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: dict.meta.description,
    telephone: site.phoneE164,
    ...(site.email ? { email: site.email } : {}),
    address: site.offices.map((o) => ({
      "@type": "PostalAddress",
      streetAddress: o.lines.slice(0, -1).join(", "),
      addressRegion: o.region,
      addressCountry: o.country,
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneE164,
      contactType: "sales",
      availableLanguage: ["French", "English", "Spanish"],
    },
    knowsAbout: ["Chinese green tea", "Chunmee tea", "Gunpowder tea", "Private label tea", "Tea export"],
  };

  return (
    <html lang={locale} className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WeChatFloat t={dict.common} />
        <WhatsAppFloat label={dict.common.whatsapp} />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}
