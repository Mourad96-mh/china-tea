import "../globals.css";
import { display, sans } from "../fonts";
import { site } from "@/lib/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: "China Tea Group",
  robots: { index: false, follow: true },
};

// Only used by the bare domain, which forwards visitors to their language.
export default function RootRedirectLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
