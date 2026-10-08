# Current task — Clopos alternative guide deepen

## Completed

- Catalog prices from API (`catalogCopy.ts`, placeholders in copy)
- iiko rich guide: `iikoAlternativeGuide.ts` + optional `sections[].table`
- Clopos rich guide: `cloposAlternativeGuide.ts` (az/en/ru) — table, FAQ, landscape, SEO, `dateModified: 2026-10-08`
- Thin Clopos template removed from `comparisonGuides.ts`; prepended like iiko
- URL unchanged: `/guides/clopos-alternative/` (az/en/ru)

## Current state

Clopos deepen done. Build OK (`/az|/en|/ru/guides/clopos-alternative/`). Commit when user asks.

## Decisions (reuse)

- Niche: club / room-time — not full restaurant POS replacement
- Landscape: Clopos / iiko / Dine / MinuPOS named only to redirect restaurant intent
- Heselo prices via `{low}` only; no invented Clopos package prices
- One winner URL: `/guides/clopos-alternative/`

## Remaining work

1. Commit when asked

## Relevant files

- `src/data/guides/cloposAlternativeGuide.ts`
- `src/data/guides/comparisonGuides.ts`
- `src/data/guides/iikoAlternativeGuide.ts` (pattern)
- Live: https://heselo.online/az/guides/clopos-alternative/
