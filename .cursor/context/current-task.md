# Current task — /ru SEO deploy + Phase 0

## Completed

1. Phase 0–6 docs/checklists + `ru-seo-native-copy.mdc`.
2. Full /ru SEO code batch (tech, quick fixes, cannibalization, solutions, guides, tools) — local build green.
3. Phase 0 lab CWV (Lighthouse, pre-deploy) written into `docs/seo-ru-phase0-baseline.md`.
4. GSC/Yandex snapshot tables stubbed; real numbers **blocked** (no account/CSV).

## Current state

- Uncommitted /ru SEO work ready to ship; live `heselo.online/ru` still old copy (сессия, AZN-only vibes, no tools).
- Lab: `/ru/` LCP ~6.2s (bad); gaming ~2.7s; how-to-open-PS ~1.0s. Pricing Lighthouse flaky.
- PSI API quota exhausted today.

## Remaining

1. **Commit + push** → Vercel deploy `/ru` (user asked deploy).
2. User: fill GSC + Yandex numbers in phase0 (export CSV → `docs/gsc-baseline-ru-2026-10-16/`).
3. Post-deploy: IndexNow + GSC Request indexing priority URLs; recheck CWV.
4. **Week-2 GSC CTR pass** — only after 7–14 days + real GSC rows (checklist in phase0).

## Relevant files

- `docs/seo-ru-phase0-baseline.md`
- `docs/seo-ru-kpi-filters.md`, `docs/seo-ru-research-2026-10.md`
- `src/data/guides/ruCisGuides.ts`, `src/data/solutions/ru.ts`, `src/i18n/messages/ru.ts`
- `src/pages/[locale]/tools/*`
