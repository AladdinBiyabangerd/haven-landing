# Current task — deepen all comparison guides

## Completed

- iiko + Clopos rich guides (prior)
- All remaining thin comparison guides → dedicated rich files (az/en/ru, table, FAQ, landscape, `dateModified: 2026-10-08`)
- [`comparisonGuides.ts`](src/data/guides/comparisonGuides.ts) now only wires rich overrides (no thin catalog)
- Build OK for all `/az|/en|/ru/guides/{slug}/` comparison URLs

## Current state

Deepen plan done. Commit when user asks.

## Decisions

- Niche: club / room-time; not full restaurant/retail POS replacement
- Heselo prices `{low}` only; MinuPOS may cite public 99–799; others “official quote”
- One winner URL per slug (unchanged)
- `club-pos-vs-excel` stayed outside this wave (already full guide)

## Remaining work

1. Commit when asked

## Relevant files

- `src/data/guides/*AlternativeGuide.ts`, `*Guide.ts` (rich)
- `src/data/guides/comparisonGuides.ts`
