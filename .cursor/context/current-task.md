# Current task — /ru SEO audit v2 remaining fixes (2026-10-16)

## Completed (this pass)

1. `localePath`: hash before trailing slash (`/ru/pricing/#gaming`); no trailing slash on `*.webmanifest`.
2. Pricing feature bullets: «Живой сеанс» → «Активный сеанс» (15); playstation-club-software checklist + meta.
3. Shortened long RU descriptions: ps-club-software-comparison, club-pos-terminal-selection, clopos-alternative; lengthened short pos/inventory/lounge/room-lounge.
4. Public email left as `heselo.online@gmail.com` (only real mailbox; audit Gmail note stays).
5. IndexNow: `.github/workflows/indexnow-on-deploy.yml` + README note (needs GitHub secret).
6. Expanded RU copy toward 400+ words: features, solutions hub, pricing-model, tariff-calculator, ps-club-tariffs, how-to-open-anticafe, karaoke-booking-system.

## Current state

Code changes uncommitted (plus audit docs). Deploy + re-measure for real score.

## Remaining / ops

1. Add GitHub secret `HESELO_INDEXNOW_KEY`; deploy; verify workflow + no 308 on pricing chips / manifest.
2. PSI/CWV when quota available (Performance still 3/10).
3. Optional: more «живой сеанс» → «активный сеанс» site-wide (outside pricing/PS guide).
4. Domain email only if/when a real `@heselo.online` mailbox exists.

## Relevant files

- `src/lib/site.ts`, `src/layouts/BaseLayout.astro` (manifest via localePath)
- `src/i18n/messages/ru.ts`, `src/data/solutions/ru.ts`, `src/data/guides/{ru,ruCisGuides,gapEducational,cloposAlternativeGuide}.ts`
- `src/pages/[locale]/tools/{pricing-model,tariff-calculator}.astro`
- `.github/workflows/indexnow-on-deploy.yml`
- `docs/seo-ru-audit-2026-10-16-v2.md`
