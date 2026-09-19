"use client";
import { useState } from "react";

// Shop-style product gallery: one large photo in the arch frame, thumbnails underneath.
// Hovering or clicking a thumbnail swaps the large photo. With a single photo, no thumbnails.
// items: [{ src, srcSet, width, height, alt, caption, scene, fit, leaf }] — scene photos fill the
// frame, fit photos are shown whole (leaf photos on white), cut-outs sit centred with a drop shadow.
export default function Gallery({ items, code, photoLabel }) {
  const [active, setActive] = useState(0);
  const cur = items[active];
  return (
    <div className="gallery">
      <div className={`detail__visual${cur.scene ? " is-scene" : ""}${cur.fit ? " is-fit" : ""}${cur.leaf ? " is-leaf" : ""}`}>
        <img key={cur.src} className="gallery__main" src={cur.src} srcSet={cur.srcSet} sizes="(max-width: 860px) 90vw, 480px" width={cur.width} height={cur.height} alt={cur.alt} />
        {code && <span className="detail__code">{code}</span>}
      </div>
      {cur.caption && <p className="gallery__caption">{cur.caption}</p>}
      {items.length > 1 && (
        <ul className="gallery__thumbs">
          {items.map((it, i) => (
            <li key={it.src}>
              <button
                type="button"
                className={`gallery__thumb${i === active ? " is-active" : ""}${it.scene ? " is-scene" : ""}${it.leaf ? " is-leaf" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-label={photoLabel.replace("{n}", i + 1)}
                aria-pressed={i === active}
              >
                <img src={it.src} srcSet={it.srcSet} sizes="68px" width={it.width} height={it.height} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
