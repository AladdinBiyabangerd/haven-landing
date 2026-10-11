# Current task — GSC CTR cila (EN/RU)

## Completed (2026-10-11)

Copy-only CTR pass for queries with impressions but ~0 clicks (GSC ~3 months).

| Query cluster | URL | Files |
|---|---|---|
| billiards booking/scheduling/reservation | `/en/solutions/billiards/` | `src/data/solutions/en.ts` |
| gaming club / management / ps club | `/en/solutions/gaming/` | same |
| программа для бильярдного клуба | `/ru/solutions/billiards/` | `src/data/solutions/ru.ts` |
| программа для playstation клуба | `/ru/solutions/gaming/` | same |
| как открыть свой пс клуб | `/ru/guides/how-to-open-playstation-club/` | `src/data/guides/gapEducationalGuides.ts` |
| замена iiko | `/ru/guides/iiko-alternative-clubs/` | `src/data/guides/iikoAlternativeGuide.ts` |

Status logged in `docs/seo-keyword-growth-plan.md` → İcra statusu.

## Remaining (ops, not code)

1. Deploy
2. GSC URL Inspection → Request indexing on the 6 URLs above
3. Re-check Queries after 14 days (CTR / clicks on non-brand)

## Not in this change

- New guides/solutions
- AZ meta rewrite
- AlternativeTo claim (still pending ATO approval)

## Relevant files

- `src/data/solutions/en.ts`, `ru.ts`
- `src/data/guides/gapEducationalGuides.ts`
- `src/data/guides/iikoAlternativeGuide.ts`
- `docs/seo-keyword-growth-plan.md`
