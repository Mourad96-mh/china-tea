// The five export grades. Tasting notes describe each grade as the trade knows it;
// the client can refine them against their own lots.
// Grades without a house pack show real dry Chun Mee leaf (assets-src/sources/chunmee-soultea.jpg);
// `image: null` would fall back to a dark leaf texture with the grade code;
// `imageScene: true` = the image is a styled photo, shown full-bleed rather than as a cut-out.
export const teas = [
  {
    slug: "chunmee-41022",
    code: "41022",
    family: "chunmee",
    image: "products/dkhmiss-41022-cut.webp",
    name: { fr: "Chunmee 41022", en: "Chunmee 41022", es: "Chunmee 41022" },
    tagline: {
      fr: "Le grand classique du thé à la menthe",
      en: "The great classic for mint tea",
      es: "El gran clásico del té con menta",
    },
    summary: {
      fr: "Feuilles longues et fines roulées en « sourcil », liqueur jaune-vert brillante et corps franc : le 41022 tient tête à la menthe et au sucre sans perdre son caractère.",
      en: "Long, thin leaves rolled into an “eyebrow”, a bright yellow-green liquor and a clean body: 41022 stands up to mint and sugar without losing its character.",
      es: "Hojas largas y finas enrolladas en forma de «ceja», licor amarillo verdoso brillante y cuerpo franco: el 41022 resiste la menta y el azúcar sin perder su carácter.",
    },
    specs: {
      leaf: {
        fr: "Longue, fine, bien torsadée, vert-gris lustré",
        en: "Long, thin, well twisted, glossy grey-green",
        es: "Larga, fina, bien retorcida, verde grisáceo brillante",
      },
      liquor: { fr: "Jaune-vert, limpide", en: "Yellow-green, clear", es: "Amarillo verdoso, límpido" },
      aroma: { fr: "Frais, légèrement grillé", en: "Fresh, lightly roasted", es: "Fresco, ligeramente tostado" },
      taste: {
        fr: "Corsé, rond, belle persistance",
        en: "Full-bodied, rounded, long finish",
        es: "Intenso, redondo, final persistente",
      },
    },
    uses: {
      fr: ["Thé à la menthe familial", "Cafés et hôtellerie", "Assemblages maison"],
      en: ["Everyday mint tea", "Cafés and hospitality", "House blends"],
      es: ["Té con menta diario", "Cafeterías y hostelería", "Mezclas propias"],
    },
    brands: ["dkhmiss", "amghar"],
  },
  {
    slug: "chunmee-4011",
    code: "4011",
    family: "chunmee",
    image: "products/al-mousafir-4011-cut.webp",
    name: { fr: "Chunmee 4011 Extra", en: "Chunmee 4011 Extra", es: "Chunmee 4011 Extra" },
    tagline: {
      fr: "La finesse d’un chunmee extra",
      en: "The finesse of an extra chunmee",
      es: "La finura de un chunmee extra",
    },
    summary: {
      fr: "Un tri plus serré et une feuille plus régulière que le 41022. Le 4011 donne une tasse soyeuse et parfumée, pour les amateurs qui recherchent de l’élégance dans le verre.",
      en: "A tighter sort and a more even leaf than 41022. 4011 brews a silky, fragrant cup for drinkers who want elegance in the glass.",
      es: "Una selección más estricta y una hoja más regular que el 41022. El 4011 da una taza sedosa y aromática para quienes buscan elegancia en el vaso.",
    },
    specs: {
      leaf: {
        fr: "Fine, régulière, serrée, vert foncé",
        en: "Fine, even, tightly rolled, dark green",
        es: "Fina, regular, apretada, verde oscuro",
      },
      liquor: { fr: "Jaune clair, brillante", en: "Light yellow, bright", es: "Amarillo claro, brillante" },
      aroma: { fr: "Floral et net", en: "Floral and clean", es: "Floral y limpio" },
      taste: {
        fr: "Doux, soyeux, peu d’amertume",
        en: "Smooth, silky, low bitterness",
        es: "Suave, sedoso, poco amargor",
      },
    },
    uses: {
      fr: ["Service premium", "Réceptions et fêtes", "Coffrets cadeaux"],
      en: ["Premium serving", "Receptions and celebrations", "Gift boxes"],
      es: ["Servicio premium", "Recepciones y celebraciones", "Estuches de regalo"],
    },
    brands: ["al-mousafir"],
  },
  {
    slug: "chunmee-9371",
    code: "9371",
    family: "chunmee",
    image: "products/chunmee-9371-cut.webp",
    name: { fr: "Chunmee 9371", en: "Chunmee 9371", es: "Chunmee 9371" },
    tagline: {
      fr: "La référence des tables marocaines",
      en: "A staple of Moroccan tables",
      es: "Una referencia en las mesas marroquíes",
    },
    summary: {
      fr: "Feuille moyenne bien roulée, liqueur ambrée et tasse puissante. Le 9371 offre un excellent rapport qualité-prix pour la consommation quotidienne et la grande distribution.",
      en: "A medium, well-rolled leaf with an amber liquor and a strong cup. 9371 offers excellent value for daily drinking and mass retail.",
      es: "Hoja mediana bien enrollada, licor ambarino y taza potente. El 9371 ofrece una excelente relación calidad-precio para el consumo diario y la gran distribución.",
    },
    specs: {
      leaf: {
        fr: "Moyenne, roulée, vert olive",
        en: "Medium, rolled, olive green",
        es: "Mediana, enrollada, verde oliva",
      },
      liquor: { fr: "Jaune ambré", en: "Amber yellow", es: "Amarillo ámbar" },
      aroma: { fr: "Végétal, chaleureux", en: "Vegetal, warm", es: "Vegetal, cálido" },
      taste: { fr: "Puissant, tannique", en: "Strong, tannic", es: "Potente, tánico" },
    },
    uses: {
      fr: ["Consommation quotidienne", "Grande distribution", "Grands formats"],
      en: ["Daily drinking", "Mass retail", "Large packs"],
      es: ["Consumo diario", "Gran distribución", "Formatos grandes"],
    },
    brands: [],
  },
  {
    slug: "chunmee-9366",
    code: "9366",
    family: "chunmee",
    image: "products/chunmee-9366.webp",
    imageScene: true,
    name: { fr: "Chunmee 9366", en: "Chunmee 9366", es: "Chunmee 9366" },
    tagline: {
      fr: "Le chunmee économique et généreux",
      en: "The generous value chunmee",
      es: "El chunmee económico y generoso",
    },
    summary: {
      fr: "Une feuille plus ouverte pour une infusion rapide et une couleur soutenue. Le 9366 est le choix des marchés sensibles au prix qui veulent garder du goût.",
      en: "A more open leaf for a quick brew and a deep colour. 9366 suits price-driven markets that still want taste.",
      es: "Una hoja más abierta para una infusión rápida y un color intenso. El 9366 es la elección de los mercados sensibles al precio que no renuncian al sabor.",
    },
    specs: {
      leaf: {
        fr: "Plus ouverte, vert-brun",
        en: "More open, brownish green",
        es: "Más abierta, verde parduzco",
      },
      liquor: { fr: "Ambre soutenu", en: "Deep amber", es: "Ámbar intenso" },
      aroma: { fr: "Boisé, simple", en: "Woody, straightforward", es: "Amaderado, sencillo" },
      taste: { fr: "Franc, corsé", en: "Direct, bold", es: "Franco, intenso" },
    },
    uses: {
      fr: ["Marchés prix", "Vrac et conditionneurs", "Restauration collective"],
      en: ["Price-driven markets", "Bulk and packers", "Catering"],
      es: ["Mercados de precio", "Granel y envasadores", "Restauración colectiva"],
    },
    brands: [],
  },
  {
    slug: "gunpowder-3505",
    code: "3505",
    family: "gunpowder",
    image: "products/gold-511-3505.webp",
    imageScene: true,
    name: { fr: "Gunpowder 3505", en: "Gunpowder 3505", es: "Gunpowder 3505" },
    tagline: {
      fr: "La perle roulée du Sahel",
      en: "The rolled pearl of the Sahel",
      es: "La perla enrollada del Sahel",
    },
    summary: {
      fr: "Des feuilles roulées en perles serrées qui s’ouvrent lentement dans la théière. Le 3505 supporte les infusions répétées des « trois verres » et existe en plusieurs niveaux de tri.",
      en: "Leaves rolled into tight pearls that unfurl slowly in the pot. 3505 handles the repeated brews of the “three glasses” and comes in several sorting levels.",
      es: "Hojas enrolladas en perlas apretadas que se abren lentamente en la tetera. El 3505 soporta las infusiones repetidas de los «tres vasos» y existe en varios niveles de selección.",
    },
    specs: {
      leaf: {
        fr: "Perles rondes et serrées, gris-vert brillant",
        en: "Round, tight pearls, shiny grey-green",
        es: "Perlas redondas y apretadas, verde grisáceo brillante",
      },
      liquor: { fr: "Jaune doré", en: "Golden yellow", es: "Amarillo dorado" },
      aroma: { fr: "Grillé, légèrement fumé", en: "Roasted, lightly smoky", es: "Tostado, ligeramente ahumado" },
      taste: {
        fr: "Intense, tient plusieurs infusions",
        en: "Intense, holds several infusions",
        es: "Intenso, aguanta varias infusiones",
      },
    },
    uses: {
      fr: ["Cérémonie des trois verres", "Afrique de l’Ouest et Sahara", "Assemblages 3505 AAA / AA"],
      en: ["Three-glass ceremony", "West Africa and the Sahara", "3505 AAA / AA blends"],
      es: ["Ceremonia de los tres vasos", "África Occidental y el Sáhara", "Mezclas 3505 AAA / AA"],
    },
    brands: ["511"],
  },
];

export const getTea = (slug) => teas.find((t) => t.slug === slug);
