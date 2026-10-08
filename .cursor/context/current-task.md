# Current task — catalog prices from API in all copy

## Completed

- `src/lib/catalogCopy.ts`: `{low|high|gaming|billiards|karaoke|lounge|antikafe}` from public subscription catalog
- `loadPricedMessages()` warms API then deep-fills i18n
- Pages + guides/solutions + SEO/`llms.txt` use catalog numbers (not hardcoded 25/29/32/39)
- Static `public/llms.txt` → dynamic `src/pages/llms.txt.ts`
- Build check: 0 leftover `{low}` / `{gaming}` placeholders in `dist/client`

## Current state

Hardcoded marketing fees replaced with API-backed placeholders. Offline fallback remains in `FALLBACK_VENUE_OFFERS` only.

## Decisions

- Placeholders in copy; fill at build/SSR via `applyCatalogPricesDeep` / `withCatalogPrices`
- Competitor prices (e.g. MinuPOS 99–799) stay literal — not Heselo catalog

## Remaining work

1. Commit when user asks
2. Optional: visual QA that hero/FAQ/guides cards match live catalog after API price change

## Relevant files

- `src/lib/catalogCopy.ts`, `src/lib/venueOffers.ts`, `src/lib/seo.ts`
- `src/i18n/index.ts` + `messages/{az,en,ru}.ts`
- `src/data/guides/*`, `src/data/solutions/*`
- `src/pages/llms.txt.ts`
