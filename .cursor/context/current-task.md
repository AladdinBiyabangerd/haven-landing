# Current task — iiko alternative guide deepen

## Completed

- Gap analysis vs Poster / katalog “альтернатива iiko” pages
- Plan: club-niche deepen + short restaurant landscape redirect (not compete as kitchen POS)
- Plan file: `iiko_guide_deepen` (Cursor plans)
- `GuideCopy.sections[].table?: { headers; rows }` in `types.ts`
- Table render + CSS in `guides/[slug].astro`
- Rich az/en/ru override for `iiko-alternative-clubs` only (`iikoAlternativeGuide.ts`)
- Thin iiko catalog entry removed from `comparisonGuides.ts`; rich guide prepended
- SEO title/description/keywords + `dateModified: 2026-10-08` for this slug
- Build sanity-check: `/az|/en|/ru/guides/iiko-alternative-clubs/` has table, landscape, 8 FAQ

## Current state

Implementation **done** for stage 1 (iiko only). Other comparison guides remain on shared template.

## Decisions

- Winner URL stays `/guides/iiko-alternative-clubs/` (az/en/ru) — no new slug
- Heselo stays club/room-time alternative, **not** full restaurant iiko replacement
- Short landscape block: Poster, Quick Resto, r_keeper, Saby → for kitchen/delivery seekers only
- Optional `sections[].table` on `GuideCopy`; rendered in `guides/[slug].astro`
- Rich override **only for iiko** this stage; other comparison guides keep shared template
- Honest pricing: Heselo from 25 AZN/mo public; do not invent iiko prices

## Remaining work

1. Phase 2+ (separate chat): Clopos/Dine rich model; AlternativeTo off-site
2. Optional: visual QA in browser for table mobile scroll
3. Commit when user asks

## Relevant files

- `src/data/guides/types.ts`
- `src/pages/[locale]/guides/[slug].astro`
- `src/data/guides/iikoAlternativeGuide.ts` (new)
- `src/data/guides/comparisonGuides.ts`
- Live: https://heselo.online/ru/guides/iiko-alternative-clubs/
