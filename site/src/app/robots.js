import { site } from "@/lib/site";

export const dynamic = "force-static";

// Answer engines are named explicitly so a future default-deny can't silently
// remove the company from ChatGPT, Claude, Gemini or Perplexity answers.
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "Applebot-Extended",
  "CCBot",
];

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...AI_BOTS.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
