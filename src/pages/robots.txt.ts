import type { APIRoute } from "astro";
import { SITE } from "../site";

// Se permite explícitamente a buscadores y asistentes de IA (ChatGPT, Claude, Perplexity, Gemini…).
const BOTS = ["Googlebot", "Bingbot", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot", "Applebot-Extended", "DuckAssistBot", "meta-externalagent"];

export const GET: APIRoute = () =>
  new Response(
    [
      ...BOTS.flatMap((b) => [`User-agent: ${b}`, "Allow: /", ""]),
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${SITE.url}/sitemap-index.xml`,
      "",
    ].join("\n"),
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
