"use client";
import { useEffect, useState } from "react";

// Filter buttons above the teas grid. The URL hash picks the family (#chunmee, #gunpowder),
// so the home page category links open the grid already filtered. Without JS every card shows.
export default function TeaFilter({ families, allLabel, children }) {
  const [active, setActive] = useState("all");

  useEffect(() => {
    const read = () => {
      const hash = window.location.hash.slice(1);
      setActive(families.some((f) => f.id === hash) ? hash : "all");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [families]);

  const choose = (id) => {
    setActive(id);
    const url = id === "all" ? window.location.pathname : `#${id}`;
    window.history.replaceState(null, "", url);
  };

  return (
    <>
      <div className="chip-list chip-list--center tea-filter" role="group">
        {[{ id: "all", label: allLabel }, ...families].map((f) => (
          <button key={f.id} type="button" className="chip" aria-pressed={active === f.id} onClick={() => choose(f.id)}>
            {f.label}
          </button>
        ))}
      </div>
      <div className="tea-grid tea-grid--three" data-filter={active}>
        {children}
      </div>
    </>
  );
}
