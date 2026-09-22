import { Amiri, Cormorant_Garamond, Manrope, Tajawal } from "next/font/google";

export const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Arabic pages (dir="rtl") swap these in through globals.css; not preloaded on the other languages.
export const arabicDisplay = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-ar-display",
  display: "swap",
  preload: false,
});

export const arabicSans = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ar-sans",
  display: "swap",
  preload: false,
});
