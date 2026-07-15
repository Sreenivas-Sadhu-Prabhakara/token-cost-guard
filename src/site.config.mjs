// ─────────────────────────────────────────────────────────────
// PER-PRODUCT CONFIG — each of the 5 sites customizes ONLY this file.
// Everything else (SEO head, sitemap, GA4, JSON-LD) reads from here.
// ─────────────────────────────────────────────────────────────
export const site = {
  // Identity
  name: 'Token Cost Guard',
  organization: 'Sreenivas Sadhu',
  tagline: 'Cut your LLM bill 30–60% — without changing a line of product code.',

  // Hosting (GitHub Pages project site)
  domain: 'https://sreenivas-sadhu-prabhakara.github.io',
  base: '/token-cost-guard', // MUST match the repo name, e.g. '/llm-eval-trace'

  // SEO
  title: 'Token Cost Guard — Cut & Monitor Your LLM API Costs',
  description:
    'Token Cost Guard tracks LLM spend per feature, caches repeat calls, alerts on budget overruns, and flags where a cheaper model would do the same job.',
  keywords: [
    'LLM cost optimization',
    'AI token cost tracking',
    'reduce OpenAI Anthropic bill',
    'LLM spend monitoring',
    'token usage dashboard',
  ],
  ogImage: '/og.png', // 1200x630, lives in /public
  twitter: '', // e.g. '@handle' (optional)

  // Analytics — real GA4 Measurement ID goes here (or leave placeholder)
  ga4Id: 'G-XXXXXXXXXX',

  // Structured data
  jsonLdType: 'SoftwareApplication', // or 'WebApplication'
  appCategory: 'BusinessApplication',
  price: '0', // '0' => free; used in Offer schema
};

// Absolute canonical URL for the homepage (used in <head> + JSON-LD)
export const canonicalRoot = `${site.domain}${site.base}`;
