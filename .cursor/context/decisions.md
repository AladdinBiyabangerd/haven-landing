# Decisions — heselo-landing

## Comparison guides (2026-10-08)

- **iiko page niche:** club / room-time venues (PS, karaoke, billiards, anticafé, lounge), not kitchen POS.
- **Landscape OK:** name Poster / Quick Resto / r_keeper / Saby only to redirect restaurant intent; do not claim Heselo replaces them.
- **Guide tables:** optional `section.table` on `GuideCopy` is allowed for comparison pages; first use = `iiko-alternative-clubs`.
- **One winner URL per intent:** keep `/guides/iiko-alternative-clubs/`; no doorway clones.

## Catalog prices in copy (2026-10-08)

- Do not hardcode Heselo plan fees in i18n/guides/solutions/SEO; use `{low}` / venue placeholders and fill from the public subscription catalog API.
- Competitor package prices may stay literal when they are not our catalog.
