<div align="center">

# Mayur — Portfolio

Personal developer portfolio built with **Astro 7**, **Tailwind CSS v4**, and **TypeScript**.

</div>

## Features

- **Astro 7** — static output, zero client-side JavaScript by default
- **Tailwind CSS v4** — modern CSS-first styling
- **Content Collections** with typed Zod schema — projects organized in `src/content/work/`
- **Light & dark mode** — class-based with instant theme switching
- **Astro Fonts API** — self-hosted typography (Fraunces, Inter, Space Mono)
- **SEO & Metadata** — canonical URLs, Open Graph, Twitter cards, auto-generated sitemap
- **Strict TypeScript** — type-checked with strict compiler options

## Quick Start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

| Command        | Action                                             |
| -------------- | -------------------------------------------------- |
| `pnpm dev`     | Start the local dev server                         |
| `pnpm build`   | Type-check, then build for production to `./dist/` |
| `pnpm preview` | Preview the production build locally               |
| `pnpm check`   | Run `astro check` only                             |

## Project Structure

```text
├── public/
│   ├── favicon.svg
│   ├── og-image.png          # 1200×630 Open Graph image
│   ├── resume.pdf            # downloadable resume
│   └── robots.txt
├── src/
│   ├── assets/               # static images and assets
│   ├── components/           # BaseHead, Button, Footer, Header, SectionHeading, ThemeToggle, WorkRow
│   ├── content/
│   │   └── work/*.md         # project markdown files
│   ├── layouts/
│   │   └── BaseLayout.astro  # layout shell with header, footer, SEO
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── work/[id].astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css        # design tokens + Tailwind v4 theme
│   ├── utils/
│   │   └── formatDate.ts     # date formatting utilities
│   ├── content.config.ts     # Zod schema for work collection
│   └── site.config.ts        # site configuration
├── astro.config.mjs
└── tsconfig.json
```

## Deployment

Configured for deployment on Vercel or any static host. Ensure `SITE_URL` in `astro.config.mjs` and `public/robots.txt` are set to your production domain.

## License

MIT — see [LICENSE](./LICENSE).
