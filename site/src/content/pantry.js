// Products outside tea that the group also ships, grouped by category on /conserves.
// Several packs imitate well-known brands (Bonduelle, Lune de Miel): descriptions stay
// strictly factual and never repeat origin or quality claims printed on those labels.
// Exceptions stated by the client themselves: honey sold as 100% pure, tomato concentrate in 1/2 and 4/4 cans.
export const pantryGroups = [
  { id: "canned", name: { fr: "Conserves", en: "Canned goods", es: "Conservas" } },
  { id: "honey", name: { fr: "Miels", en: "Honey", es: "Mieles" } },
  { id: "spreads", name: { fr: "Épicerie salée", en: "Savoury pantry", es: "Despensa salada" } },
];

export const pantry = [
  {
    id: "honey-assila",
    group: "honey",
    featured: true,
    image: "products/assila-honey-square.webp",
    scene: true,
    name: { fr: "Miel Assila — 500 g", en: "Assila honey — 500 g", es: "Miel Assila — 500 g" },
    text: {
      fr: "Un miel 100 % pur et doux en pot de verre, compagnon naturel du thé et des pâtisseries servies avec.",
      en: "A mild, 100% pure honey in a glass jar, a natural partner for tea and the pastries served with it.",
      es: "Una miel 100 % pura y suave en tarro de cristal, compañera natural del té y de los dulces que lo acompañan.",
    },
  },
  {
    id: "honey-mill-miel",
    group: "honey",
    image: "products/mill-miel-honey-cut.webp",
    name: { fr: "Miel de fleurs Mill Miel", en: "Mill Miel flower honey", es: "Miel de flores Mill Miel" },
    text: {
      fr: "Miel de fleurs 100 % pur et doux en pot de verre, pour le petit-déjeuner et les douceurs servies avec le thé.",
      en: "Mild, 100% pure flower honey in a glass jar, for breakfast and the sweets served with tea.",
      es: "Miel de flores 100 % pura y suave en tarro de cristal, para el desayuno y los dulces que acompañan al té.",
    },
  },
  {
    id: "honey-luna",
    group: "honey",
    image: "products/luna-honey-cut.webp",
    name: { fr: "Miel de fleurs Luna Honey", en: "Luna Honey flower honey", es: "Miel de flores Luna Honey" },
    text: {
      fr: "Miel de fleurs 100 % pur et doux en pot de verre, un format familial pour la grande distribution.",
      en: "Mild, 100% pure flower honey in a glass jar, a family-size format for retail chains.",
      es: "Miel de flores 100 % pura y suave en tarro de cristal, un formato familiar para la gran distribución.",
    },
  },
  {
    id: "tomato-rollio",
    group: "canned",
    featured: true,
    image: "products/rollio-tomato-cut.webp",
    name: { fr: "Double concentré de tomates Rollio — 1/2 et 4/4", en: "Rollio double tomato concentrate — 1/2 & 4/4", es: "Doble concentrado de tomate Rollio — 1/2 y 4/4" },
    text: {
      fr: "Double concentré en boîte 1/2 (400 g) ou 4/4, la base des tajines, sauces et soupes.",
      en: "Double concentrate in 1/2 (400 g) or 4/4 cans, the base of tagines, sauces and soups.",
      es: "Doble concentrado en lata 1/2 (400 g) o 4/4, la base de tajines, salsas y sopas.",
    },
  },
  {
    id: "tomato-bondelice",
    group: "canned",
    image: "products/bondelice-tomato-square.webp",
    scene: true,
    name: { fr: "Double concentré de tomates Bondélice — 1/2 et 4/4", en: "Bondélice double tomato concentrate — 1/2 & 4/4", es: "Doble concentrado de tomate Bondélice — 1/2 y 4/4" },
    text: {
      fr: "Double concentré de tomates en boîte 1/2 (400 g) ou 4/4, pour la cuisine du quotidien et la restauration.",
      en: "Double tomato concentrate in 1/2 (400 g) or 4/4 cans, for everyday cooking and catering.",
      es: "Doble concentrado de tomate en lata 1/2 (400 g) o 4/4, para la cocina diaria y la restauración.",
    },
  },
  {
    id: "corn-bondelice",
    group: "canned",
    image: "products/bondelice-corn-cut.webp",
    name: { fr: "Maïs doux Bondélice — 300 g", en: "Bondélice sweet corn — 300 g", es: "Maíz dulce Bondélice — 300 g" },
    text: {
      fr: "Maïs doux en grains, sans sucres ajoutés, en boîte de 300 g : salades, garnitures et pizzas.",
      en: "Sweet corn kernels with no added sugar in a 300 g can: salads, side dishes and pizzas.",
      es: "Maíz dulce en grano, sin azúcares añadidos, en lata de 300 g: ensaladas, guarniciones y pizzas.",
    },
  },
  {
    id: "peas-bondelice",
    group: "canned",
    image: "products/bondelice-peas-cut.webp",
    name: { fr: "Petits pois extra-fins Bondélice", en: "Bondélice extra-fine garden peas", es: "Guisantes extrafinos Bondélice" },
    text: {
      fr: "Petits pois extra-fins cuits à l’étuvée, en grande boîte pour les familles et la restauration.",
      en: "Steamed extra-fine garden peas in a large can for families and catering.",
      es: "Guisantes extrafinos cocidos al vapor, en lata grande para familias y restauración.",
    },
  },
  {
    id: "corn-mama-delice",
    group: "canned",
    image: "products/mama-delice-corn-cut.webp",
    name: { fr: "Maïs doux Mama délice — 300 g", en: "Mama délice sweet corn — 300 g", es: "Maíz dulce Mama délice — 300 g" },
    text: {
      fr: "Maïs doux en grains, sans sucres ajoutés, en boîte de 300 g à ouverture facile.",
      en: "Sweet corn kernels with no added sugar in an easy-open 300 g can.",
      es: "Maíz dulce en grano, sin azúcares añadidos, en lata de 300 g de apertura fácil.",
    },
  },
  {
    id: "peas-mama-delice",
    group: "canned",
    featured: true,
    image: "products/mama-delice-peas-cut.webp",
    name: { fr: "Petits pois extra-fins Mama délice", en: "Mama délice extra-fine garden peas", es: "Guisantes extrafinos Mama délice" },
    text: {
      fr: "Petits pois extra-fins cuits à l’étuvée, en grande boîte pour les familles et la restauration.",
      en: "Steamed extra-fine garden peas in a large can for families and catering.",
      es: "Guisantes extrafinos cocidos al vapor, en lata grande para familias y restauración.",
    },
  },
  {
    id: "peanut",
    group: "spreads",
    featured: true,
    image: "products/mamafe-peanut-cut.webp",
    name: { fr: "Pâte d’arachide Mamafé", en: "Mamafé peanut paste", es: "Pasta de cacahuete Mamafé" },
    text: {
      fr: "Pâte d’arachide onctueuse pour les sauces et plats mijotés d’Afrique de l’Ouest.",
      en: "Smooth peanut paste for the sauces and stews of West African cooking.",
      es: "Pasta de cacahuete cremosa para las salsas y guisos de la cocina de África Occidental.",
    },
  },
];
