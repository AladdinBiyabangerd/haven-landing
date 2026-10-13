# Current task — Heselo-first presentation (guides + solutions)

## Completed

1. All guide `sections` arrays: Heselo / `when-heselo-fits` / `how-heselo-fits` moved to **first** (az/en/ru + alternatives + gap educational).
2. Gap guides without a Heselo block (`how-to-open-playstation-club`, `karaoke-club-business-plan`, `anticafe-rent-cost-calculation`): Heselo-first section added/renamed in az/en/ru.
3. Solution page template: **how → features → who → problems → differ** ([slug].astro).
4. Solution `howTitle`/`howBody` → hook form (“Heselo X üçün nə verir?” / EN/RU equivalents).
5. Alternative first-section titles → hook (“Heselo sizə nə verir?” etc.).
6. Main guide intros mention Heselo; heselo paragraphs lead with brand; `dateModified` → 2026-10-13 on az/en/ru guides.

## Current state

- `heselo-pricing` still starts with `published` (page is already about Heselo) — intentional.
- Brace-balance check on key files: OK.

## Remaining

- Optional: bump `dateModified` on alternative/gap guide constants if they expose it separately.
- Optional: EN/RU solution `howBody` sentences that still open without “Heselo” (titles already hook).

## Relevant files

- `src/data/guides/az.ts`, `en.ts`, `ru.ts`
- `src/data/guides/gapEducationalGuides.ts`
- `src/data/guides/*AlternativeGuide.ts` (+ affordable / restaurant / playstation / azerbaijan)
- `src/data/solutions/{az,en,ru}.ts`
- `src/pages/[locale]/solutions/[slug].astro`
