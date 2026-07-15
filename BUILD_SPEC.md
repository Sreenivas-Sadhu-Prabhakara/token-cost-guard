# Build spec — 5K SEO site template

This is the shared, best-in-class SEO base for all 5 products. Each site is a
copy of this template with **only its content + `src/site.config.mjs` changed**.

## What's already wired (do not rebuild)
- **Astro 7 + Tailwind v4** (`@tailwindcss/vite`)
- **SEO head** (`src/layouts/BaseLayout.astro`): title, description, keywords,
  canonical, Open Graph, Twitter card, robots meta.
- **Structured data**: `SoftwareApplication` + `Organization` JSON-LD in the
  layout; `FAQPage` JSON-LD on the homepage.
- **Sitemap**: `@astrojs/sitemap` → `/sitemap-index.xml`.
- **robots.txt**: dynamic route `src/pages/robots.txt.ts` (points at sitemap).
- **GA4**: `src/components/Analytics.astro` — activates when `ga4Id` is a real
  `G-XXXX` id (placeholder = disabled, so dev/build stay clean).
- **GitHub Pages deploy**: `.github/workflows/deploy.yml` (withastro/action).
- Accessible: skip link, focus-visible, semantic landmarks.

## Per-product checklist for the subagent
1. Fill **`src/site.config.mjs`** completely:
   - `name`, `tagline`, `title`, `description`, `keywords` (real, keyword-rich)
   - `base` = `'/<repo-name>'` (MUST match the GitHub repo)
   - leave `ga4Id` as placeholder unless a real id is provided
2. Rewrite **`src/pages/index.astro`** content: hero, 3–6 features, 3–5 FAQs —
   all SEO-focused, benefit-led, keyword-rich. Keep the structure/JSON-LD.
3. Add a **1200×630 `public/og.png`** (or a simple SVG exported) for social.
4. Products with a backend (Idea Validator, LLM Eval, Token Cost Guard): wire the
   CTA/demo form to the Vercel endpoint; others: keep waitlist form.
5. `npm install && npm run build` must pass with **zero errors**.

## SEO rules (non-negotiable)
- One `<h1>` per page, logical `<h2>`/`<h3>` hierarchy.
- Meta description 140–160 chars, primary keyword near the front.
- Descriptive `alt` on every image; lazy-load below the fold.
- Internal links use `site.base` prefix (Astro handles via `base`).
- Lighthouse SEO + Best-Practices should be ~100 (static, no blocking JS).

## Note: github.io project-site SEO caveat (Phase 1)
Project sites share the root `github.io/robots.txt`; per-repo robots at root
isn't honored. Mitigation: submit each site's `/<base>/sitemap-index.xml`
directly in Google Search Console. Custom domains in Phase 2 remove this.
