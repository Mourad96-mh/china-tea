// Products outside tea that the group also ships, grouped by category on /conserves.
// Several packs imitate well-known brands (Bonduelle, Lune de Miel): descriptions stay
// strictly factual and never repeat origin or quality claims printed on those labels.
// Exceptions stated by the client themselves: honey sold as 100% pure, tomato concentrate in 1/6, 1/2 and 4/4 cans.
export const pantryGroups = [
  { id: "canned", name: { fr: "Conserves", en: "Canned goods", es: "Conservas", ar: "المعلبات" } },
  { id: "honey", name: { fr: "Miels", en: "Honey", es: "Mieles", ar: "العسل" } },
  { id: "spreads", name: { fr: "Épicerie salée", en: "Savoury pantry", es: "Despensa salada", ar: "بقالة مالحة" } },
];

export const pantry = [
  {
    id: "honey-assila",
    group: "honey",
    featured: true,
    image: "products/assila-honey-range-cut.webp",
    name: { fr: "Miel Assila — 250 g, 500 g et 1 kg", en: "Assila honey — 250 g, 500 g & 1 kg", es: "Miel Assila — 250 g, 500 g y 1 kg", ar: "عسل أصيلة — 250 غ و500 غ و1 كغ" },
    text: {
      fr: "Un miel 100 % pur et doux, en flacon verseur de 250 g ou en pot de verre de 500 g et 1 kg.",
      en: "A mild, 100% pure honey in a 250 g squeeze bottle or 500 g and 1 kg glass jars, a natural partner for tea and the pastries served with it.",
      es: "Una miel 100 % pura y suave, en bote dosificador de 250 g o tarro de cristal de 500 g y 1 kg, compañera natural del té y de los dulces que lo acompañan.",
      ar: "عسل نقي 100% ولطيف، في قارورة ضاغطة سعة 250 غ أو برطمان زجاجي سعة 500 غ و1 كغ، رفيق طبيعي للشاي والحلويات التي تُقدَّم معه.",
    },
  },
  {
    id: "honey-mill-miel",
    group: "honey",
    image: "products/mill-miel-honey-range-cut.webp",
    name: { fr: "Miel de fleurs Mill Miel — 250 g, 500 g et 1 kg", en: "Mill Miel flower honey — 250 g, 500 g & 1 kg", es: "Miel de flores Mill Miel — 250 g, 500 g y 1 kg", ar: "عسل الأزهار Mill Miel — 250 غ و500 غ و1 كغ" },
    text: {
      fr: "Miel de fleurs 100 % pur et doux, en flacon verseur de 250 g ou en pot de verre de 500 g et 1 kg.",
      en: "Mild, 100% pure flower honey in a 250 g squeeze bottle or 500 g and 1 kg glass jars, for breakfast and the sweets served with tea.",
      es: "Miel de flores 100 % pura y suave, en bote dosificador de 250 g o tarro de cristal de 500 g y 1 kg, para el desayuno y los dulces que acompañan al té.",
      ar: "عسل أزهار نقي 100% ولطيف، في قارورة ضاغطة سعة 250 غ أو برطمان زجاجي سعة 500 غ و1 كغ، للفطور والحلويات التي تُقدَّم مع الشاي.",
    },
  },
  {
    id: "honey-luna",
    group: "honey",
    image: "products/luna-honey-cut.webp",
    name: { fr: "Miel de fleurs Luna Honey", en: "Luna Honey flower honey", es: "Miel de flores Luna Honey", ar: "عسل الأزهار Luna Honey" },
    text: {
      fr: "Miel de fleurs 100 % pur et doux en pot de verre.",
      en: "Mild, 100% pure flower honey in a glass jar, a family-size format for retail chains.",
      es: "Miel de flores 100 % pura y suave en tarro de cristal, un formato familiar para la gran distribución.",
      ar: "عسل أزهار نقي 100% ولطيف في برطمان زجاجي، بحجم عائلي للتوزيع الواسع.",
    },
  },
  {
    id: "tomato-rollio",
    group: "canned",
    featured: true,
    image: "products/rollio-tomato-range-cut.webp",
    name: { fr: "Double concentré de tomates Rollio — 1/6, 1/2 et 4/4", en: "Rollio double tomato concentrate — 1/6, 1/2 & 4/4", es: "Doble concentrado de tomate Rollio — 1/6, 1/2 y 4/4", ar: "معجون طماطم مركّز مضاعف Rollio — 1/6 و1/2 و4/4" },
    text: {
      fr: "Double concentré en boîte 1/6 (135 g), 1/2 (400 g) ou 4/4 (800 g).",
      en: "Double concentrate in 1/6 (135 g), 1/2 (400 g) or 4/4 (800 g) cans, the base of tagines, sauces and soups.",
      es: "Doble concentrado en lata 1/6 (135 g), 1/2 (400 g) o 4/4 (800 g), la base de tajines, salsas y sopas.",
      ar: "مركّز مضاعف في علب 1/6 (135 غ) و1/2 (400 غ) و4/4 (800 غ)، أساس الطواجن والصلصات والحساء.",
    },
  },
  {
    id: "tomato-bondelice",
    group: "canned",
    image: "products/bondelice-tomato-cut.webp",
    name: { fr: "Double concentré de tomates Bondélice — 1/2 et 4/4", en: "Bondélice double tomato concentrate — 1/2 & 4/4", es: "Doble concentrado de tomate Bondélice — 1/2 y 4/4", ar: "معجون طماطم مركّز مضاعف Bondélice — 1/2 و4/4" },
    text: {
      fr: "Double concentré de tomates en boîte 1/2 (400 g) ou 4/4.",
      en: "Double tomato concentrate in 1/2 (400 g) or 4/4 cans, for everyday cooking and catering.",
      es: "Doble concentrado de tomate en lata 1/2 (400 g) o 4/4, para la cocina diaria y la restauración.",
      ar: "معجون طماطم مركّز مضاعف في علب 1/2 (400 غ) أو 4/4، للطبخ اليومي والمطاعم.",
    },
  },
  {
    id: "corn-bondelice",
    group: "canned",
    image: "products/bondelice-corn-3pack-cut.webp",
    name: { fr: "Maïs doux Bondélice — lot de 3 × 130 g", en: "Bondélice sweet corn — 3 × 130 g pack", es: "Maíz dulce Bondélice — pack de 3 × 130 g", ar: "ذرة حلوة Bondélice — عبوة 3 × 130 غ" },
    text: {
      fr: "Maïs doux en grains, sans sucres ajoutés, en lot de 3 boîtes de 130 g.",
      en: "Sweet corn kernels with no added sugar in a pack of three 130 g cans: salads, side dishes and pizzas.",
      es: "Maíz dulce en grano, sin azúcares añadidos, en pack de 3 latas de 130 g: ensaladas, guarniciones y pizzas.",
      ar: "حبوب ذرة حلوة بدون سكر مضاف، في عبوة من 3 علب سعة 130 غ: للسلطات والأطباق الجانبية والبيتزا.",
    },
  },
  {
    id: "peas-bondelice",
    group: "canned",
    image: "products/bondelice-peas-3pack-cut.webp",
    name: { fr: "Petits pois extra-fins Bondélice — lot de 3 × 130 g", en: "Bondélice extra-fine garden peas — 3 × 130 g pack", es: "Guisantes extrafinos Bondélice — pack de 3 × 130 g", ar: "بازلاء رفيعة جداً Bondélice — عبوة 3 × 130 غ" },
    text: {
      fr: "Petits pois extra-fins cuits à l’étuvée, en lot de 3 boîtes de 130 g.",
      en: "Steamed extra-fine garden peas in a pack of three 130 g cans for families.",
      es: "Guisantes extrafinos cocidos al vapor, en pack de 3 latas de 130 g para familias.",
      ar: "بازلاء رفيعة جداً مطهوة بالبخار، في عبوة من 3 علب سعة 130 غ للعائلات.",
    },
  },
  {
    id: "corn-mama-delice",
    group: "canned",
    image: "products/mama-delice-corn-cut.webp",
    name: { fr: "Maïs doux Mama délice — 300 g", en: "Mama délice sweet corn — 300 g", es: "Maíz dulce Mama délice — 300 g", ar: "ذرة حلوة Mama délice — 300 غ" },
    text: {
      fr: "Maïs doux en grains, sans sucres ajoutés, en boîte de 300 g à ouverture facile.",
      en: "Sweet corn kernels with no added sugar in an easy-open 300 g can.",
      es: "Maíz dulce en grano, sin azúcares añadidos, en lata de 300 g de apertura fácil.",
      ar: "حبوب ذرة حلوة بدون سكر مضاف، في علبة 300 غ سهلة الفتح.",
    },
  },
  {
    id: "peas-mama-delice",
    group: "canned",
    featured: true,
    image: "products/mama-delice-peas-cut.webp",
    name: { fr: "Petits pois extra-fins Mama délice", en: "Mama délice extra-fine garden peas", es: "Guisantes extrafinos Mama délice", ar: "بازلاء رفيعة جداً Mama délice" },
    text: {
      fr: "Petits pois extra-fins cuits à l’étuvée, en grande boîte.",
      en: "Steamed extra-fine garden peas in a large can for families and catering.",
      es: "Guisantes extrafinos cocidos al vapor, en lata grande para familias y restauración.",
      ar: "بازلاء رفيعة جداً مطهوة بالبخار، في علبة كبيرة للعائلات والمطاعم.",
    },
  },
  {
    id: "peanut",
    group: "spreads",
    featured: true,
    image: "products/mamafe-peanut-range-cut.webp",
    name: { fr: "Pâte d’arachide Mamafé — 500 g et 1 kg", en: "Mamafé peanut paste — 500 g & 1 kg", es: "Pasta de cacahuete Mamafé — 500 g y 1 kg", ar: "زبدة الفول السوداني Mamafé — 500 غ و1 كغ" },
    text: {
      fr: "Pâte d’arachide onctueuse, en pot de 500 g ou 1 kg.",
      en: "Smooth peanut paste in 500 g or 1 kg jars, for the sauces and stews of West African cooking.",
      es: "Pasta de cacahuete cremosa, en tarro de 500 g o 1 kg, para las salsas y guisos de la cocina de África Occidental.",
      ar: "زبدة فول سوداني كريمية، في برطمان 500 غ أو 1 كغ، لصلصات وأطباق غرب أفريقيا المطهوة على نار هادئة.",
    },
  },
];
