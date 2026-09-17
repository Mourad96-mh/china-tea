import Link from "@/components/Link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";

// items: [{ name, url }] — the last one is the current page.
export default function Breadcrumbs({ items }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.url),
    })),
  };
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => (
          <li key={it.url}>
            {i < items.length - 1 ? <Link href={it.url}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
      <JsonLd data={data} />
    </nav>
  );
}
