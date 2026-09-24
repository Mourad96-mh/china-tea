// Company facts used across the site, footer, contact page and JSON-LD.
// Everything marked TODO must be confirmed by the client before launch.
export const site = {
  name: "China Tea Group",
  // TODO: replace with the real domain once bought.
  url: "https://www.chinateagroup.com",
  phoneDisplay: "+86 180 5797 8014",
  phoneE164: "+8618057978014",
  whatsapp: "8618057978014",
  // WeChat is linked to the same number: visitors add us by searching it in the app.
  // Optional: `qr` = path in public/img to the WeChat QR code (WeChat > Me > QR code), shown in the panel.
  wechat: { search: "+86 180 5797 8014", qr: "" },
  // TODO: no e-mail address was supplied — add one here and it appears everywhere.
  email: "",
  offices: [
    {
      id: "zhejiang",
      label: { fr: "Bureau commercial — Yiwu, Zhejiang, Chine", en: "Sales office — Yiwu, Zhejiang, China", es: "Oficina comercial — Yiwu, Zhejiang, China", ar: "المكتب التجاري — ييوو، تشجيانغ، الصين" },
      lines: ["7th floor, Tower A", "88 Financial Business Street", "Zhongfu Plaza", "Yiwu, Zhejiang Province, China"],
      country: "CN",
      region: "Zhejiang",
    },
    {
      id: "hongkong",
      label: { fr: "Bureau administratif et financier — Hong Kong", en: "Administrative and finance office — Hong Kong", es: "Oficina administrativa y financiera — Hong Kong", ar: "المكتب الإداري والمالي — هونغ كونغ" },
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
