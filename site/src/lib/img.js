import sizes from "@/content/image-sizes.json";

// Width variants written by scripts/prepare-images.mjs next to each image.
const VARIANTS = ["400", "450", "800", "1280"];

// Returns { src, width, height, srcSet } for a file in public/img so every <img>
// is sized (no layout shift) and phones download a smaller variant.
export function img(file) {
  const [width, height] = sizes[file] || [1200, 800];
  const base = file.replace(/\.webp$/, "");
  const set = VARIANTS.map((v) => `${base}-${v}.webp`)
    .filter((f) => sizes[f])
    .map((f) => `/img/${f} ${sizes[f][0]}w`);
  return {
    src: `/img/${file}`,
    width,
    height,
    srcSet: set.length ? [...set, `/img/${file} ${width}w`].join(", ") : undefined,
  };
}
