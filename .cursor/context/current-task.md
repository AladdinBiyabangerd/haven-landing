# Current task — Billiards SEO / GEO plan

## Completed
- Baseline docs: `docs/seo-billiards-baseline-2026-10-17.md`, GEO prompts B1–B7, KPI filters link
- Solution `/solutions/billiards/` az/en/ru: meta, body, compare table, honesty FAQ (relye/QR)
- Guides: CueDesk, BilliardPOS, BCMS, Biliardo.kz, comparison-2026, hourly-rates
- Expanded `billiards-club-management` + `billiards-table-booking` (az/en/ru)
- `llms.txt` billiards entity card; off-site URLs; YouTube script; case/KPI doc
- Wiring: GUIDE_SLUGS, comparisonGuides, SOLUTION_ALT_GUIDES, seoContentPlan

## Remaining (ops, not code)
- Fill GSC baseline numbers manually
- Record YouTube from `docs/youtube-billiards-demo-script.md`
- Real billiards case when client consents
- Deploy + IndexNow + GSC URL Inspection
- GEO remeasure 30/60/90 days

## Relevant files
- `src/data/solutions/{az,en,ru}.ts`, `src/pages/[locale]/solutions/[slug].astro`
- `src/data/guides/*billiard*`, `cuedeskAlternativeGuide.ts`, `bcmsAlternativeGuide.ts`, …
- `docs/seo-billiards-*.md`, `docs/youtube-billiards-demo-script.md`
