# GreenRide

GreenRide is the public website for Greenride Africa Tech Limited, a Kenya-based electric mobility company. It presents the company's vehicle, fleet, charging infrastructure, and consultancy offerings, along with company information, news, and contact details.

## Features

- Responsive public website with home, about, products, news, and contact pages.
- Product and news detail pages generated from local TypeScript data.
- English, Kiswahili, and Chinese interface translations. A visitor's language preference is stored in their browser.
- Page metadata for search and social sharing.
- Static assets served from `public/`.

## Technology

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- ESLint 9
- pnpm lockfile

## Requirements

- Node.js 20.9.0 or later
- pnpm

## Getting started

Install dependencies from the repository root:

```bash
pnpm install --frozen-lockfile
```

Start the development server:

```bash
pnpm dev
```

Use the local URL printed by Next.js in the terminal to open the site.

## Available commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Run `api.js`, then start the Next.js development server. |
| `pnpm build` | Run `api.js`, then create a production build with Next.js. |
| `pnpm start` | Run `api.js`, then start the Next.js production server. |
| `pnpm lint` | Run ESLint. |
| `pnpm typecheck` | Check TypeScript types without emitting files. |
| `pnpm format` | Format TypeScript and TSX files with Prettier. |

The `dev`, `build`, and `start` scripts run `node api.js` before invoking Next.js. Review that script and provide any required runtime configuration before using these commands in a local or production environment. The repository does not currently include an `.env.example`; do not assume environment variables or deployment secrets are configured.

## Site routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/about` | Company information |
| `/products` | Product and service catalogue |
| `/products/[slug]` | Product or service details |
| `/news` | News and insights |
| `/news/[slug]` | News article |
| `/contact` | Contact information and enquiry form |
| `/admin` | Placeholder page; not an implemented or protected administration system |

## Project structure

```text
app/
  (public)/             Public App Router pages and layouts
  (dashboard)/          Dashboard route group
  globals.css           Global styles
components/
  common/               Shared site components
  layout/public/        Public navigation and footer
  public/               Page and feature components
  ui/                   Reusable UI primitives
contexts/               Shared React contexts, including language preference
data/                   Local product, news, and scenario data
lib/                    Translation and utility functions
public/                 Images, logos, and other static assets
api.js                  Script invoked by the package lifecycle commands
```

## Updating site content

- Edit product entries and slugs in `data/products.ts`.
- Edit news articles and slugs in `data/news.ts`.
- Edit scenario-grid content in `data/scenario-grid.ts`.
- Update translated interface strings in `lib/translations.ts`. Keep English (`en`), Kiswahili (`sw`), and Chinese (`zh`) entries consistent when changing shared copy.
- Place or replace static images in `public/` and update the corresponding asset paths in the relevant data or component files.

Product and news detail routes use the local data files and generate static route parameters from their slugs. Keep slugs unique within their respective data sets and ensure referenced image paths exist.

## Production and operational notes

- The contact form validates required fields in the browser and opens a pre-filled email in the visitor's email application. It does not send or store submissions on a server.
- Products, news, and scenario content are maintained in the repository; no CMS or database is configured in the application.
- `/admin` is a placeholder and must not be treated as a secure administration interface.
- Before deployment, review `api.js`, confirm its runtime and configuration requirements, and verify that the hosting environment supports the project's Node.js version and startup sequence.
- Build and type-check the application in CI or before release:

  ```bash
  pnpm lint
  pnpm typecheck
  pnpm build
  ```

## License

See [LICENSE](./LICENSE) for licensing information.
