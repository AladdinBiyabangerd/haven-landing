# Heselo Landing

Kiçik, SEO-güclü marketinq saytı — Heselo space booking məhsulu üçün.

StayBoard landing ilə eyni məqsəd (lokalizə, prerender, meta/JSON-LD/sitemap), amma **Astro** ilə daha yüngül və Core Web Vitals üçün daha əlverişli.

**Production domain:** `https://heselo.online`

## Stack

- Astro 5 (SSG + Node adapter for `/api/contact`)
- TypeScript
- az / en / ru (`/$locale/…`)
- CSS (self-hosted Manrope), zero UI-kit bloat

## SEO

- Canonical + `hreflang` (az/en/ru + x-default)
- Open Graph / Twitter cards (`/og-image.png`)
- JSON-LD: Organization, SoftwareApplication, WebSite, BreadcrumbList, FAQPage, Article (guides)
- `/sitemap.xml` (xhtml alternate links)
- `/robots.txt` (Disallow `/api/`)
- Unique titles & descriptions per page, solution pages, and guides
- Commercial solutions ↔ informational guides cross-linking

## Dev

```bash
cd heselo-landing
cp .env.example .env   # optional
npm install
npm run dev
```

Open http://localhost:4321/az/

## Build

```bash
PUBLIC_SITE_URL=https://heselo.online npm run build
npm run preview
```

Output: `dist/` (client static + server handler for contact API)

## Environment

| Variable | Purpose |
|----------|---------|
| `PUBLIC_SITE_URL` | Canonical origin (default production: `https://heselo.online`) |
| `SMTP_*` | Contact form email delivery via `/api/contact` |
| `PUBLIC_CONTACT_ENDPOINT` | Optional external form endpoint instead of mailto |

## Pages

| Path | Purpose |
|------|---------|
| `/{az\|en\|ru}/` | Home |
| `/features/` | Modules |
| `/pricing/` | Plans |
| `/contact/` | Demo request |
| `/solutions/` | Business solutions hub |
| `/solutions/{slug}/` | Restaurant, cafe, POS, reservations, etc. |
| `/guides/` | Educational guides hub |
| `/guides/{slug}/` | SEO articles (e.g. restaurant management system) |
| `/privacy/`, `/terms/` | Legal |

## Post-deploy checklist

1. Set `PUBLIC_SITE_URL=https://heselo.online` in production env
2. Submit `https://heselo.online/sitemap.xml` in Google Search Console
3. Verify OG image and canonical URLs on a live page
4. Optional: `PUBLIC_ANALYTICS`, `PUBLIC_SOCIAL_*`, `INDEXNOW_KEY` — see `.env.example`
5. Off-site backlinks: [docs/off-site-seo-az.md](docs/off-site-seo-az.md)
