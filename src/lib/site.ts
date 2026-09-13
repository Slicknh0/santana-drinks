/**
 * URL pública do site. Defina NEXT_PUBLIC_SITE_URL no deploy (ex.: https://seudominio.com.br);
 * canonical, Open Graph, sitemap e JSON-LD dependem dela.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
