# Current task — Features page mobile clarity (next)

## Completed (prior)

Mobile home five-second clarity + nav back UX — committed `0c759fc`.

## Current state — `/az/features/`

[`src/pages/[locale]/features.astro`](src/pages/[locale]/features.astro):

1. H1 + short intro + **4 list rows** (was 9 cards)
2. NextThought (pricing door)
3. Cta

**Done:** gallery removed; modules 9→4; card-grid → compact list.

## Remaining (optional)

1. Delete unused `ProductGallery.astro` if still unreferenced
2. Commit when user asks

## Relevant files

- `src/pages/[locale]/features.astro`
- `src/components/ProductGallery.astro`
- `src/i18n/messages/{az,en,ru}.ts` → `featuresPage`
