// Proposed mark: an eight-pointed Moroccan star (khatam) holding a tea leaf.
export function Emblem({ size = 44, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="11" y="11" width="26" height="26" />
        <rect x="11" y="11" width="26" height="26" transform="rotate(45 24 24)" />
      </g>
      <path d="M17.5 30.5c0-7.2 4.4-12.4 13-13-.8 8.6-5.8 13-13 13Z" fill="currentColor" />
      <path d="M17.5 30.5 25 23" stroke="var(--logo-vein, #fff)" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ light = false }) {
  return (
    <span className={`logo${light ? " logo--light" : ""}`}>
      <Emblem className="logo__emblem" />
      <span className="logo__text">
        <span className="logo__name">China Tea</span>{" "}
        <span className="logo__group">Group</span>
      </span>
    </span>
  );
}
