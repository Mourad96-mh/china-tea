// House brands, taken from the packaging photos the client supplied.
export const brands = [
  {
    slug: "al-mousafir",
    name: "Al Mousafir",
    arabic: "المسافر",
    accent: "#C9861A",
    cover: "products/al-mousafir-4011-cut.webp",
    meaning: { fr: "« Le voyageur »", en: "“The traveller”", es: "«El viajero»" },
    pitch: {
      fr: "L’esprit des caravanes du désert, dans une boîte jaune soleil que l’on reconnaît au premier coup d’œil sur l’étagère.",
      en: "The spirit of the desert caravans in a sun-yellow box that shoppers spot at first glance on the shelf.",
      es: "El espíritu de las caravanas del desierto en una caja amarillo sol que se reconoce a primera vista en el lineal.",
    },
    story: {
      fr: "Al Mousafir met en scène le voyageur du Sahara qui s’arrête pour préparer le thé au milieu des dunes. La gamme repose sur le Chunmee 4011 Extra, un thé fin et parfumé, et se décline dans un coffret rouge et or pour les grandes occasions.",
      en: "Al Mousafir shows the Saharan traveller stopping to brew tea among the dunes. The range is built on Chunmee 4011 Extra, a fine and fragrant tea, with a red-and-gold box for special occasions.",
      es: "Al Mousafir retrata al viajero del Sáhara que se detiene a preparar té entre las dunas. La gama se basa en el Chunmee 4011 Extra, un té fino y aromático, con un estuche rojo y oro para las grandes ocasiones.",
    },
    teas: ["chunmee-4011"],
    packs: [
      {
        image: "products/al-mousafir-4011-cut.webp",
        name: { fr: "4011 Extra Chunmee — 200 g", en: "4011 Extra Chunmee — 200 g", es: "4011 Extra Chunmee — 200 g" },
      },
      {
        image: "products/al-mousafir-4011-cube-cut.webp",
        name: { fr: "4011 — boîte cube", en: "4011 — cube box", es: "4011 — caja cubo" },
      },
      {
        image: "products/al-mousafir-sadjar.webp",
        name: { fr: "Coffret rouge et or", en: "Red and gold box", es: "Estuche rojo y oro" },
        scene: true,
      },
    ],
  },
  {
    slug: "dkhmiss",
    name: "Dkhmiss",
    arabic: "",
    accent: "#1F4E9E",
    cover: "products/dkhmiss-41022-edition-cut.webp",
    meaning: { fr: "Gammes Sahraoui & Diwan", en: "Sahraoui & Diwan ranges", es: "Gamas Sahraoui y Diwan" },
    pitch: {
      fr: "Le bleu du chèche et l’or du thé servi haut : une marque au caractère affirmé, pensée pour le Chunmee 41022.",
      en: "The blue of the desert turban and the gold of tea poured from high: a bold brand built around Chunmee 41022.",
      es: "El azul del turbante del desierto y el oro del té servido desde lo alto: una marca con carácter, pensada para el Chunmee 41022.",
    },
    story: {
      fr: "Dkhmiss rend hommage à l’hospitalité saharienne. La ligne Sahraoui (boîte rouge et bleue) existe en édition standard et en Édition spéciale à liseré doré ; la ligne Diwan, en boîte haute jaune, parle aux familles qui achètent en plus grande quantité.",
      en: "Dkhmiss pays tribute to Saharan hospitality. The Sahraoui line (red and blue box) comes as a standard pack and a gold-trimmed Special Edition; the Diwan line, in a tall yellow box, speaks to families who buy in larger quantities.",
      es: "Dkhmiss rinde homenaje a la hospitalidad sahariana. La línea Sahraoui (caja roja y azul) existe en edición estándar y en Edición especial con ribete dorado; la línea Diwan, en caja alta amarilla, se dirige a las familias que compran en mayor cantidad.",
    },
    teas: ["chunmee-41022"],
    packs: [
      {
        image: "products/dkhmiss-41022-edition-cut.webp",
        name: { fr: "Sahraoui 41022 — Édition spéciale 200 g", en: "Sahraoui 41022 — Special Edition 200 g", es: "Sahraoui 41022 — Edición especial 200 g" },
      },
      {
        image: "products/dkhmiss-41022-cut.webp",
        name: { fr: "Sahraoui 41022 — 200 g", en: "Sahraoui 41022 — 200 g", es: "Sahraoui 41022 — 200 g" },
      },
      {
        image: "products/dkhmiss-diwan-41022-cut.webp",
        name: { fr: "Diwan 41022 — boîte haute", en: "Diwan 41022 — tall box", es: "Diwan 41022 — caja alta" },
      },
      {
        image: "products/dkhmiss-41022-marble.webp",
        name: { fr: "Édition spéciale — mise en scène", en: "Special Edition — styled shot", es: "Edición especial — ambientada" },
        scene: true,
      },
    ],
  },
  {
    slug: "amghar",
    name: "Amghar",
    arabic: "أمغار",
    accent: "#2E8B3E",
    cover: "products/amghar-41022.webp",
    coverScene: true,
    meaning: { fr: "« Le chef, l’ancien » en amazigh", en: "“The chief, the elder” in Amazigh", es: "«El jefe, el anciano» en amazigh" },
    pitch: {
      fr: "Les couleurs amazighes, l’Atlas et les champs de thé réunis sur une boîte joyeuse et fière de ses racines.",
      en: "Amazigh colours, the Atlas mountains and tea fields brought together on a cheerful box proud of its roots.",
      es: "Los colores amazigh, el Atlas y los campos de té reunidos en una caja alegre y orgullosa de sus raíces.",
    },
    story: {
      fr: "Amghar célèbre la culture berbère : drapeau amazigh, montagnes de l’Atlas et caravane au pied des cimes. À l’intérieur, un Chunmee 41022 généreux en boîte de 200 g, pour une clientèle attachée à son identité.",
      en: "Amghar celebrates Berber culture: the Amazigh flag, the Atlas peaks and a caravan at their foot. Inside is a generous Chunmee 41022 in a 200 g box, for customers attached to their identity.",
      es: "Amghar celebra la cultura berberisca: la bandera amazigh, las cumbres del Atlas y una caravana a sus pies. Dentro, un Chunmee 41022 generoso en caja de 200 g, para un público apegado a su identidad.",
    },
    teas: ["chunmee-41022"],
    packs: [
      {
        image: "products/amghar-41022.webp",
        name: { fr: "Thé amazigh berbère 41022 — 200 g", en: "Amazigh Berber tea 41022 — 200 g", es: "Té amazigh berberisco 41022 — 200 g" },
        scene: true,
      },
    ],
  },
  {
    slug: "511",
    name: "511",
    arabic: "",
    accent: "#B8913A",
    cover: "products/gold-511-3505.webp",
    coverScene: true,
    meaning: { fr: "Noir & or", en: "Black & gold", es: "Negro y oro" },
    pitch: {
      fr: "Un écrin noir et or, sobre et haut de gamme, qui associe le thé vert de Chine au mélange traditionnel marocain 3505.",
      en: "A sober, upmarket black-and-gold box pairing Chinese green tea with the traditional Moroccan 3505 blend.",
      es: "Un estuche negro y oro, sobrio y de alta gama, que une el té verde de China con la mezcla tradicional marroquí 3505.",
    },
    story: {
      fr: "511 s’adresse aux points de vente qui veulent une présence premium en rayon. Une face présente le thé vert de Chine, l’autre le « thé vert marocain, mélange traditionnel supérieur 3505 » : deux usages, une seule boîte.",
      en: "511 is made for retailers who want a premium presence on the shelf. One face shows Chinese green tea, the other the “Moroccan green tea, superior traditional blend 3505”: two uses, one box.",
      es: "511 está pensado para los puntos de venta que buscan una presencia premium en el lineal. Una cara presenta el té verde de China y la otra el «té verde marroquí, mezcla tradicional superior 3505»: dos usos, una sola caja.",
    },
    teas: ["gunpowder-3505"],
    packs: [
      {
        image: "products/gold-511-3505.webp",
        name: { fr: "511 · 3505 — coffret noir et or", en: "511 · 3505 — black and gold box", es: "511 · 3505 — estuche negro y oro" },
        scene: true,
      },
    ],
  },
];

export const getBrand = (slug) => brands.find((b) => b.slug === slug);
