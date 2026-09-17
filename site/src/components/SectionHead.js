import Ornament from "./Ornament";

export default function SectionHead({ eyebrow, title, text, align = "center", as: Tag = "h2", light = false }) {
  return (
    <div className={`section-head section-head--${align}${light ? " section-head--light" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="section-title">{title}</Tag>
      <Ornament />
      {text && <p className="section-text">{text}</p>}
    </div>
  );
}
