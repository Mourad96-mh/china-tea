// Gold divider: two hairlines around a small eight-pointed star.
export default function Ornament({ className = "" }) {
  return (
    <span className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament__line" />
      <svg width="18" height="18" viewBox="0 0 18 18">
        <g fill="currentColor">
          <rect x="4.5" y="4.5" width="9" height="9" />
          <rect x="4.5" y="4.5" width="9" height="9" transform="rotate(45 9 9)" />
        </g>
      </svg>
      <span className="ornament__line" />
    </span>
  );
}
