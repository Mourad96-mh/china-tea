// The four export grades. Tasting notes describe each grade as the trade knows it;
// the client can refine them against their own lots.
// `image: null` would fall back to a dark leaf texture with the grade code;
// `imageScene: true` = the image is a styled photo, shown full-bleed rather than as a cut-out;
// `imageWhite: true` = a photo on a white background (the dry-leaf bowls), shown whole on white;
// `imageConcept: true` = a presentation visual, not the real pack (captioned as such on the page).
// `gallery` = extra photos after the main one, like a shop listing: the first shows on card hover,
// all of them in the thumbnail gallery on the tea page. kind "leaf" = the grade's dry leaf in a bowl
// (assets-src/leaves/), `sort` names a sorting level (3505 A / AA / AAA) in the caption.
export const teas = [
  {
    slug: "chunmee-41022",
    code: "41022",
    family: "chunmee",
    image: "products/dkhmiss-41022-special.webp",
    imageScene: true,
    gallery: [
      { image: "products/leaf-41022.webp", kind: "leaf" },
      { image: "products/dkhmiss-41022-gold.webp", kind: "pack" },
      { image: "products/dkhmiss-41022-desert-cut.webp", kind: "pack" },
    ],
    name: { fr: "Chunmee 41022", en: "Chunmee 41022", es: "Chunmee 41022", ar: "Chunmee 41022" },
    tagline: {
      fr: "Le grand classique du thé à la menthe",
      en: "The great classic for mint tea",
      es: "El gran clásico del té con menta",
      ar: "الكلاسيكي الأشهر لشاي النعناع",
    },
    summary: {
      fr: "Feuilles longues et fines roulées en « sourcil », liqueur jaune-vert brillante et corps franc : le 41022 tient tête à la menthe et au sucre sans perdre son caractère.",
      en: "Long, thin leaves rolled into an “eyebrow”, a bright yellow-green liquor and a clean body: 41022 stands up to mint and sugar without losing its character.",
      es: "Hojas largas y finas enrolladas en forma de «ceja», licor amarillo verdoso brillante y cuerpo franco: el 41022 resiste la menta y el azúcar sin perder su carácter.",
      ar: "أوراق طويلة ورفيعة ملفوفة على شكل «حاجب»، ونقيع أصفر مخضرّ لامع وقوام واضح: يصمد الـ41022 أمام النعناع والسكر دون أن يفقد طابعه.",
    },
    specs: {
      leaf: {
        fr: "Longue, fine, bien torsadée, vert-gris lustré",
        en: "Long, thin, well twisted, glossy grey-green",
        es: "Larga, fina, bien retorcida, verde grisáceo brillante",
        ar: "طويلة، رفيعة، جيدة الالتواء، أخضر رمادي لامع",
      },
      liquor: { fr: "Jaune-vert, limpide", en: "Yellow-green, clear", es: "Amarillo verdoso, límpido", ar: "أصفر مخضرّ، صافٍ" },
      aroma: { fr: "Frais, légèrement grillé", en: "Fresh, lightly roasted", es: "Fresco, ligeramente tostado", ar: "منعش، محمّص قليلاً" },
      taste: {
        fr: "Corsé, rond, belle persistance",
        en: "Full-bodied, rounded, long finish",
        es: "Intenso, redondo, final persistente",
        ar: "قوي، متوازن، أثر طويل في الفم",
      },
    },
    uses: {
      fr: ["Thé à la menthe familial", "Cafés et hôtellerie", "Assemblages maison"],
      en: ["Everyday mint tea", "Cafés and hospitality", "House blends"],
      es: ["Té con menta diario", "Cafeterías y hostelería", "Mezclas propias"],
      ar: ["شاي النعناع اليومي", "المقاهي والفنادق", "خلطات خاصة"],
    },
    brands: ["dkhmiss", "amghar"],
  },
  {
    slug: "chunmee-4011",
    code: "4011",
    family: "chunmee",
    image: "products/al-mousafir-4011-cut.webp",
    gallery: [
      { image: "products/leaf-4011.webp", kind: "leaf" },
      { image: "products/brand-4111-box.webp", kind: "pack" },
    ],
    name: { fr: "Chunmee 4011 Extra", en: "Chunmee 4011 Extra", es: "Chunmee 4011 Extra", ar: "Chunmee 4011 Extra" },
    tagline: {
      fr: "La finesse d’un chunmee extra",
      en: "The finesse of an extra chunmee",
      es: "La finura de un chunmee extra",
      ar: "رقّة الـChunmee إكسترا",
    },
    summary: {
      fr: "Un tri plus serré et une feuille plus régulière que le 41022. Le 4011 donne une tasse soyeuse et parfumée, pour les amateurs qui recherchent de l’élégance dans le verre.",
      en: "A tighter sort and a more even leaf than 41022. 4011 brews a silky, fragrant cup for drinkers who want elegance in the glass.",
      es: "Una selección más estricta y una hoja más regular que el 41022. El 4011 da una taza sedosa y aromática para quienes buscan elegancia en el vaso.",
      ar: "فرز أدقّ وورقة أكثر انتظاماً من الـ41022. يمنح الـ4011 كأساً حريرية عطرة لمن يبحث عن الأناقة في الكأس.",
    },
    specs: {
      leaf: {
        fr: "Fine, régulière, serrée, vert foncé",
        en: "Fine, even, tightly rolled, dark green",
        es: "Fina, regular, apretada, verde oscuro",
        ar: "رفيعة، منتظمة، ملفوفة بإحكام، أخضر داكن",
      },
      liquor: { fr: "Jaune clair, brillante", en: "Light yellow, bright", es: "Amarillo claro, brillante", ar: "أصفر فاتح، لامع" },
      aroma: { fr: "Floral et net", en: "Floral and clean", es: "Floral y limpio", ar: "زهري ونقي" },
      taste: {
        fr: "Doux, soyeux, peu d’amertume",
        en: "Smooth, silky, low bitterness",
        es: "Suave, sedoso, poco amargor",
        ar: "ناعم، حريري، قليل المرارة",
      },
    },
    uses: {
      fr: ["Service premium", "Réceptions et fêtes", "Coffrets cadeaux"],
      en: ["Premium serving", "Receptions and celebrations", "Gift boxes"],
      es: ["Servicio premium", "Recepciones y celebraciones", "Estuches de regalo"],
      ar: ["تقديم راقٍ", "الحفلات والمناسبات", "علب الهدايا"],
    },
    brands: ["al-mousafir", "4111", "401", "711"],
  },
  {
    slug: "chunmee-9371",
    code: "9371",
    family: "chunmee",
    image: "products/dkhmiss-9371-cut.webp",
    gallery: [{ image: "products/leaf-9371.webp", kind: "leaf" }],
    name: { fr: "Chunmee 9371", en: "Chunmee 9371", es: "Chunmee 9371", ar: "Chunmee 9371" },
    tagline: {
      fr: "La référence des tables marocaines",
      en: "A staple of Moroccan tables",
      es: "Una referencia en las mesas marroquíes",
      ar: "مرجع على الموائد المغربية",
    },
    summary: {
      fr: "Feuille moyenne bien roulée, liqueur ambrée et tasse puissante. Le 9371 offre un excellent rapport qualité-prix pour la consommation quotidienne et la grande distribution.",
      en: "A medium, well-rolled leaf with an amber liquor and a strong cup. 9371 offers excellent value for daily drinking and mass retail.",
      es: "Hoja mediana bien enrollada, licor ambarino y taza potente. El 9371 ofrece una excelente relación calidad-precio para el consumo diario y la gran distribución.",
      ar: "ورقة متوسطة جيدة اللفّ، ونقيع كهرماني وكأس قوية. يقدّم الـ9371 قيمة ممتازة مقابل السعر للاستهلاك اليومي والتوزيع الواسع.",
    },
    specs: {
      leaf: {
        fr: "Moyenne, roulée, vert olive",
        en: "Medium, rolled, olive green",
        es: "Mediana, enrollada, verde oliva",
        ar: "متوسطة، ملفوفة، أخضر زيتوني",
      },
      liquor: { fr: "Jaune ambré", en: "Amber yellow", es: "Amarillo ámbar", ar: "أصفر كهرماني" },
      aroma: { fr: "Végétal, chaleureux", en: "Vegetal, warm", es: "Vegetal, cálido", ar: "نباتي، دافئ" },
      taste: { fr: "Puissant, tannique", en: "Strong, tannic", es: "Potente, tánico", ar: "قوي، غني بالتانين" },
    },
    uses: {
      fr: ["Consommation quotidienne", "Grande distribution", "Grands formats"],
      en: ["Daily drinking", "Mass retail", "Large packs"],
      es: ["Consumo diario", "Gran distribución", "Formatos grandes"],
      ar: ["الاستهلاك اليومي", "التوزيع الواسع", "العبوات الكبيرة"],
    },
    brands: ["9371", "dkhmiss"],
  },
  {
    slug: "gunpowder-3505",
    code: "3505",
    family: "gunpowder",
    image: "products/brand-511-diamant-cut.webp",
    gallery: [
      { image: "products/leaf-3505.webp", kind: "leaf" },
      { image: "products/leaf-3505-a.webp", kind: "leaf", sort: "A" },
      { image: "products/leaf-3505-aa.webp", kind: "leaf", sort: "AA" },
      { image: "products/leaf-3505-aaa.webp", kind: "leaf", sort: "AAA" },
    ],
    name: { fr: "Gunpowder 3505", en: "Gunpowder 3505", es: "Gunpowder 3505", ar: "Gunpowder 3505" },
    tagline: {
      fr: "La perle roulée du Sahel",
      en: "The rolled pearl of the Sahel",
      es: "La perla enrollada del Sahel",
      ar: "اللؤلؤة الملفوفة من الساحل",
    },
    summary: {
      fr: "Des feuilles roulées en perles serrées qui s’ouvrent lentement dans la théière. Le 3505 supporte les infusions répétées des « trois verres » et existe en plusieurs niveaux de tri.",
      en: "Leaves rolled into tight pearls that unfurl slowly in the pot. 3505 handles the repeated brews of the “three glasses” and comes in several sorting levels.",
      es: "Hojas enrolladas en perlas apretadas que se abren lentamente en la tetera. El 3505 soporta las infusiones repetidas de los «tres vasos» y existe en varios niveles de selección.",
      ar: "أوراق ملفوفة على شكل لآلئ محكمة تتفتح ببطء في البرّاد. يتحمّل الـ3505 النقعات المتكررة لـ«الكؤوس الثلاثة»، ويتوفر بعدة درجات فرز.",
    },
    specs: {
      leaf: {
        fr: "Perles rondes et serrées, gris-vert brillant",
        en: "Round, tight pearls, shiny grey-green",
        es: "Perlas redondas y apretadas, verde grisáceo brillante",
        ar: "لآلئ مستديرة ومحكمة، أخضر رمادي لامع",
      },
      liquor: { fr: "Jaune doré", en: "Golden yellow", es: "Amarillo dorado", ar: "أصفر ذهبي" },
      aroma: { fr: "Grillé, légèrement fumé", en: "Roasted, lightly smoky", es: "Tostado, ligeramente ahumado", ar: "محمّص، مدخّن قليلاً" },
      taste: {
        fr: "Intense, tient plusieurs infusions",
        en: "Intense, holds several infusions",
        es: "Intenso, aguanta varias infusiones",
        ar: "قوي، يتحمّل عدة نقعات",
      },
    },
    uses: {
      fr: ["Cérémonie des trois verres", "Afrique de l’Ouest et Sahara", "Assemblages 3505 AAA / AA"],
      en: ["Three-glass ceremony", "West Africa and the Sahara", "3505 AAA / AA blends"],
      es: ["Ceremonia de los tres vasos", "África Occidental y el Sáhara", "Mezclas 3505 AAA / AA"],
      ar: ["طقس الكؤوس الثلاثة", "غرب أفريقيا والصحراء", "خلطات 3505 AAA / AA"],
    },
    brands: ["511", "711"],
  },
];

export const getTea = (slug) => teas.find((t) => t.slug === slug);
