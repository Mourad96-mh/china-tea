import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` writes out/, uploadable to any host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // The home folder is itself a git repo with a lockfile; pin the real root.
  outputFileTracingRoot: __dirname,
  // Needed because each language has its own root layout (<html lang>).
  experimental: { globalNotFound: true },
};

export default nextConfig;
