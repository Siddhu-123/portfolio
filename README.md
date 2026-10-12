# Satya Siddhartha Balanagu — Portfolio & Technical Dossier

[**Live site**](https://siddhu-123.github.io/portfolio/)

Vite + React + Tailwind portfolio built from `../Master_Project_and_Skills_Inventory/` (23 projects, 15 skill domains, 6 focus profiles; see the [dossier](https://siddhu-123.github.io/project-inventory/)). Styled after the Pixo design language (hard shadows, stroked wordmark, day/night theme, star cursor).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173/portfolio/ (Vite `base` is `/portfolio/` for GitHub Pages).

## Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

Pushing to `main` runs `.github/workflows/pages.yml`, which builds with Vite and publishes `dist/` through GitHub Pages (Settings, Pages, Source: GitHub Actions).

`base: '/portfolio/'` in `vite.config.js` makes assets resolve under `https://<user>.github.io/portfolio/`. If you rename the repository, update that value and `homepage` in `package.json`.

## Content notes

- `src/data/projects.js` — 23 projects with category, status, metrics, resume bullets and public links; categories and counts are derived from this file.
- `src/data/dossier.js` — coursework, 15 skill domains, experience, 6 focus profiles.
- Private `file://` evidence paths from the LaTeX dossier are intentionally omitted; public URLs kept (WhatsApp live, GitHub, Chrome Store, Behance).
- Status labels keep claims accurate: patent-style draft (not granted), SA Water research-only, SMARTGUARD concept, no clinical deployment claims.
- `_quarantine/` holds pre-rebuild strays (`.pth`, training JSON, WhatsApp jpeg, old `wiggle`/`lethimcook` experiments) and is git-ignored.

## Licence

Site code is MIT (see [LICENSE](LICENSE)). Project descriptions and media describe the author's own work.
