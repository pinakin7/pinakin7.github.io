# pinakin7.github.io

Personal portfolio for **Preet Viradiya — AI Systems Engineer** (Agentic AI, Edge/Video AI, RAG, ML infrastructure, production inference).

Built with [Astro](https://astro.build/) + Tailwind CSS v4, deployed to GitHub Pages via GitHub Actions.

## Stack

- **Astro 5** — static multi-page site, ships near-zero JS.
- **Tailwind CSS v4** via `@tailwindcss/vite` (theme tokens in `src/styles/global.css`, no `tailwind.config.js`).
- **Content collections** — case studies loaded from `src/data/case_studies.json` (`src/content.config.ts`), validated with Zod.
- **@astrojs/sitemap** — auto-generates `/sitemap-index.xml`.

## Local development

Requires Node 18.20.8+, 20.3+, or 22+.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Content

All copy is data-driven — edit the JSON, no template changes needed:

- `src/data/site_content.json` — hero, about, experience, skills, education, contact.
- `src/data/case_studies.json` — case studies (one detail page generated per entry).
- `src/data/seo.json` — per-page title / description / keywords.

Planning & reference material (personas, roadmap, copy decks) lives in `docs/`.

## Project layout

```
src/
  components/    UI components (Hero, Nav, CaseStudyCard, …)
  data/          JSON content + SEO metadata
  layouts/       BaseLayout (wraps every page)
  pages/         routes — index, experience, research, contact,
                 case-studies/index + case-studies/[id]
  styles/        global.css (Tailwind import + design tokens)
  content.config.ts
public/          favicon, robots.txt, .nojekyll
.github/workflows/deploy.yml
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` (build with `withastro/action`, deploy with `actions/deploy-pages`).

**One-time setup:** in repo **Settings → Pages → Build and deployment**, set **Source = "GitHub Actions"**.

## TODO before launch

- Add the real LinkedIn URL in `src/data/site_content.json` (`contact.linkedin`) — currently a placeholder, so LinkedIn links are hidden until set.
