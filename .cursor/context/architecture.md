# heselo-landing — Architecture

Marketing / SEO site for Heselo (`https://heselo.online`). Astro SSG + on-demand contact API.

## Stack

- Astro 5, TypeScript
- Adapters: `@astrojs/node` (Railway) or `@astrojs/vercel` (Vercel) via `DEPLOY_TARGET` / `VERCEL`
- Locales: az / en / ru under `/{locale}/…`
- Contact: `/api/contact` (Nodemailer / SMTP)
- Analytics: GA4 / Plausible, Microsoft Clarity (env-driven)

## Layout

```text
src/
  pages/[locale]/   # Localized routes (home, features, pricing, solutions, guides)
  pages/api/         # contact endpoint
  components/ layouts/ styles/
  i18n/ messages/    # Copy
  data/              # solutions + guides content
  content/ lib/
public/              # Static assets, og-image, robots, llms.txt helpers
scripts/             # IndexNow, product shots
docs/                # SEO / GEO notes
```

## Runtime

- Dev: `npm run dev` → `http://localhost:4321/az/`
- Build: static + server entry (Node) or Vercel output
- Canonical site: `PUBLIC_HESELO_SITE_URL` / `PUBLIC_SITE_URL`

## Domains

- Marketing pages, solution pages, guides
- SEO/GEO: sitemap, hreflang, JSON-LD, IndexNow
- Contact form email delivery

## Pricing copy

- Live catalog: `GET {PUBLIC_HESELO_API_BASE_URL}/v1/public/subscription-catalog` via `loadVenueOffers()`
- Marketing strings use `{low}`, `{gaming}`, `{billiards}`, `{karaoke}`, `{lounge}`, `{antikafe}` — filled by `catalogCopy.ts` / `loadPricedMessages()`
- Fallback numbers live only in `FALLBACK_VENUE_OFFERS` (`venueOffers.ts`)
- `/llms.txt` is generated from the same catalog (`src/pages/llms.txt.ts`)

## Notes

- Prefer `src/pages/[locale]`, `src/data`, `src/i18n` for content/UI work
- Deploy config: `railway.json`, `vercel.json`, `astro.config.mjs`
