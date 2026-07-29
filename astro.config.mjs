// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thatmusictherapylot.uk',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Old Squarespace paths → new Astro routes (static build emits HTML redirect pages).
  // For true HTTP 301s on GitHub Pages, also keep public/_redirects behind Cloudflare.
  redirects: {
    '/home': '/',
    '/therapyforyou': '/therapy',
    '/professionalsandinstitutions': '/consulting',
    '/contact': '/',
    '/appointments': '/therapy',
    '/packages': '/therapy',
    '/online': '/therapy',
    '/measurement': '/consulting',
    '/futurefocussed': '/',
    '/simt': '/',
    '/new-page-3': '/',
  },
});
