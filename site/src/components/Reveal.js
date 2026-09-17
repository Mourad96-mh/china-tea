"use client";
import { useEffect, useRef } from "react";

// Fades children in when they scroll into view. Content stays visible without JS.
// The IntersectionObserver's first report tells us whether the element starts on
// screen, so we never read layout ourselves (no forced reflow per element).
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let first = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          if (entry.isIntersecting) return io.disconnect(); // already visible: no animation
          el.classList.add("reveal");
          return;
        }
        if (entry.isIntersecting) {
          el.classList.add("reveal--in");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={className} style={delay ? { "--reveal-delay": `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
