import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const SITE = process.env.ASTRO_SITE || process.env.SITE || 'https://example.com';
const BASE_PATH = process.env.ASTRO_BASE || process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE_PATH,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      wrap: true,
    },
  },
  prefetch: {
    prefetchAll: true,
  },
});
