# Current task: Anticafe SEO P0 (19 Oct 2026)

## Completed
- AZ/EN/RU antikafe solution rewrite: H1/title/meta, sections (billing, zones, cloud, honesty), fan-out FAQ
- Optional `sections` on `SolutionCopy` + render in `[slug].astro`
- Antikafe alt block → 3 antikafe guides (not iiko/Clopos); `altSeekingAntikafe*` i18n
- RU guide meta: drop “Информационный гайд…” and raw `/ru/solutions/antikafe/` path
- AZ rent guide H1: “menzil” → “icarə / kirayə”
- JSON-LD: venue `Offer` (Small plan low) + site-wide `AggregateOffer` on solution pages

## Remaining (Aladdin / later)
- P0-1: GSC URL Inspection on AZ antikafe URLs
- P0-5: after deploy — GSC Request indexing + IndexNow
- Confirm §7 product honesty if any claim is wrong (first-hour→per-minute combo, offline, loyalty)
- P1: deepen thin guides; new “antikafe proqramı seçimi” page; off-site signals

## Relevant files
- `src/data/solutions/{az,en,ru}.ts`, `types.ts`
- `src/pages/[locale]/solutions/[slug].astro`
- `src/lib/seo.ts`
- `src/data/guides/{index,ru,ruCisGuides,gapEducationalGuides}.ts`
- `src/i18n/messages/{az,en,ru}.ts`, `types.ts`
- Plan: `docs/heselo-anticafe-seo-plan-2026-10-19.md`
