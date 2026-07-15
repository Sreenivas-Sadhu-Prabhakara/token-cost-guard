import type { APIRoute } from 'astro';
import { canonicalRoot } from '../site.config.mjs';

const body = `User-agent: *
Allow: /

Sitemap: ${canonicalRoot}/sitemap-index.xml
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain' } });
