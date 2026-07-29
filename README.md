# That Music Therapy Lot

Custom Astro site for [thatmusictherapylot.uk](https://thatmusictherapylot.uk) — process-based music therapy, consulting, supervision, and SECAT®.

## Develop

```bash
npm install
npm run dev
```

## Blog

Posts live in `src/content/blog/` as Markdown (Astro content collections). Edit locally or via CloudCannon (`cloudcannon.config.yml`). Existing Squarespace URLs are preserved.

## Build & deploy

```bash
npm run build
npm run preview
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

Sister site: [therapywithben.uk](https://therapywithben.uk) (integrative psychotherapy).
