// Company facts used across the site, footer, contact page and JSON-LD.
// Everything marked TODO must be confirmed by the client before launch.
export const site = {
  name: "China Tea Group",
  // TODO: replace with the real domain once bought.
  url: "https://www.chinateagroup.com",
  phoneDisplay: "+86 180 5797 8014",
  phoneE164: "+8618057978014",
  whatsapp: "8618057978014",
  // TODO: no e-mail address was supplied — add one here and it appears everywhere.
  email: "",
  offices: [
    {
      id: "zhejiang",
      label: { fr: "Siège — Chine", en: "Head office — China", es: "Sede — China" },
      lines: ["7th floor, Tower A", "88 Financial Business Street", "Zhongfu Plaza", "Zhejiang Province, China"],
      country: "CN",
      region: "Zhejiang",
    },
    {
      id: "hongkong",
      label: { fr: "Bureau commercial — Hong Kong", en: "Trading office — Hong Kong", es: "Oficina comercial — Hong Kong" },
      lines: ["Room 701, Tower B", "New Mandarin Plaza", "Tsim Sha Tsui, Kowloon", "Hong Kong"],
      country: "HK",
      region: "Kowloon",
    },
  ],
};

export function whatsappLink(message = "") {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
