# Current task — FAQ expand + rewrite (2026-10-11)

## Completed

Expanded and rewrote site FAQ copy in `src/i18n/messages/{az,en,ru}.ts` (same counts, aligned intent).

| Group | Before | After |
|-------|--------|-------|
| Home (`faq.items`) | 9 | 15 |
| Pricing | 7 | 9 |
| About | 4 | 7 |
| Contact | 4 | 7 |
| **FAQ page total** | **24** | **38** |

New home topics: Excel/WhatsApp, languages, PC lock (no), setup time, multi-branch, opened session.
Polished choppy AZ/EN/RU answers (price lists, co-founder wording, contact venue-type answer).

## Decisions

1. FAQ source of truth remains message catalogs; `/faq/` aggregates via `getFaqGroups`.
2. PC-lock FAQ links to `/guides/izi-alternative`.
3. Did not touch solution/guide FAQs in this pass.

## Remaining

1. Optional: spot-check `/faq/`, home, pricing, about, contact in browser (az/en/ru).
2. Commit when user asks.

## Relevant files

- `src/i18n/messages/az.ts`
- `src/i18n/messages/en.ts`
- `src/i18n/messages/ru.ts`
- `src/lib/faqPage.ts`
