// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/site.config.mjs';

// https://astro.build/config
export default defineConfig({
  site: site.domain,
  base: site.base,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
