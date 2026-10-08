# Current task — PS/PC competitor alternative guides

## Completed

- 8 rich comparison guides (az/en/ru): LANGAME, Club Timer, Akinsoft, Hasansoft, Təndir, SmartApp.az, GameClub, CafeSynk
- Wiring: `GUIDE_SLUGS`, `comparisonGuides.ts`, `COMPARISON_GUIDE_SLUGS`, `RELATED_COMPARISON`, `seoContentPlan.ts`, `llms.txt.ts`
- `SOLUTION_ALT_GUIDES.gaming` → langame, club-timer, gameclub
- Landscape cross-links in IZI + playstation cafe guides
- Build OK (all 8 × 3 locales prerendered)
- PsTally: landscape-only (CafeSynk guide), no dedicated URL

## Current state

All plan steps done. Commit when user asks.

## Decisions

- LANGAME = PC club soft (like IZI) — Heselo does not replace
- Club Timer / Akinsoft / Hasansoft = timer category — keep when enough
- Təndir / SmartApp = broad AZ platforms — kitchen/POS stay if needed
- GameClub / CafeSynk = closest lounge SaaS peers — honest peer comparison

## Remaining work

1. Commit when asked
2. Optional: IndexNow submit for new URLs

## Relevant files

- `src/data/guides/*AlternativeGuide.ts` (8 new)
- `src/data/guides/types.ts`, `comparisonGuides.ts`, `index.ts`
- `src/data/seoContentPlan.ts`, `src/pages/llms.txt.ts`
