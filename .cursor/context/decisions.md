# Decisions — heselo-landing

## Comparison guides (2026-10-08)

- **iiko / Clopos page niche:** club / room-time venues (PS, karaoke, billiards, anticafé, lounge), not kitchen POS.
- **Landscape OK:** name other restaurant POS only to redirect restaurant intent; do not claim Heselo replaces them.
  - iiko page: Poster / Quick Resto / r_keeper / Saby
  - Clopos page: Clopos / iiko / Dine / MinuPOS (AZ-local restaurant stack)
- **Guide tables:** optional `section.table` on `GuideCopy` is allowed for comparison pages (`iiko-alternative-clubs`, `clopos-alternative`).
- **One winner URL per intent:** keep `/guides/iiko-alternative-clubs/` and `/guides/clopos-alternative/`; no doorway clones.
- **Rich overrides:** named competitors that need depth use dedicated files (`iikoAlternativeGuide.ts`, `cloposAlternativeGuide.ts`) prepended in `comparisonGuides.ts`; thin template catalog stays for the rest.

## Catalog prices in copy (2026-10-08)

- Do not hardcode Heselo plan fees in i18n/guides/solutions/SEO; use `{low}` / venue placeholders and fill from the public subscription catalog API.
- Competitor package prices may stay literal when they are not our catalog.
