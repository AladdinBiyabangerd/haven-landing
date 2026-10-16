# Current task — /ru SEO audit fixes (2026-10-16)

## Completed

1. P0: `yandex-verification` meta; IndexNow/email ops notes in phase0 + README.
2. P1: RU titles ≤65; descriptions 120–160 (privacy/terms/tools/billiards/pricing).
3. P2: gaming ↔ playstation-club-software + comparison links; product «сессия» → «сеанс».
4. P3: Expanded RU features, solutions hub, tariff-calculator, pricing-model.
5. P4: `public/og-image.jpg` (~181 KB); home FAQPage = visible pick only; build OK.

## Current state

Code ready to deploy. Audit file `docs/seo-ru-audit-2026-10-16.md` may still be uncommitted.

## Remaining (user / ops)

1. Deploy → confirm `yandex-verification` + `/{HESELO_INDEXNOW_KEY}.txt` 200 → `npm run indexnow`.
2. Yandex Webmaster: verify site, submit sitemap, Переобход.
3. Rich Results Test + Yandex Validator: `/ru/`, gaming, one guide, `/ru/faq/`.
4. Domain email: set `PUBLIC_HESELO_CONTACT_EMAIL` only when mailbox exists.
5. GSC CSV / Week-2 CTR (phase0).

## Relevant files

- `src/layouts/BaseLayout.astro`, `src/lib/site.ts`, `src/pages/[locale]/index.astro`
- `src/i18n/messages/ru.ts`, `src/data/solutions/ru.ts`, `src/data/guides/*`
- `src/pages/[locale]/features.astro`, `solutions/index.astro`, `tools/*`
- `public/og-image.jpg`, `docs/seo-ru-phase0-baseline.md`
