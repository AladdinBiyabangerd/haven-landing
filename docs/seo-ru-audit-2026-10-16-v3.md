# Heselo /ru SEO audit v3, 16.10.2026 23:40 (live, read-only)

## Deploy state
- HEAD is 8874f4d ("Drop IndexNow GitHub workflow…"), preceded by 7a30117. After fetch: 0 unpushed commits, and src/ is clean.
- The live site (last-modified 19:23 UTC = 23:23 Baku) includes the 7a30117 changes: manifest and pricing links fixed.

## TOTAL: 92/100 (v2: 88, v1: 76)

| Category | v2 | v3 | Evidence |
|---|---|---|---|
| Technical | 24 | 25 | 66/66 pages return 200 and are in the sitemap. 234 unique internal hrefs, 0 non-200 / 0 redirects among /ru and root links. http→https is 1 hop with 308 (tested from the Mac). IndexNow key returns 200. og-image.jpg is 185 KB. |
| On-page | 19 | 20 | All titles are 20–70 chars. Only 1 description is off: playstation-cafe-software-alternative at 166 (borderline). 0 duplicate titles or descriptions. Canonical points to itself on all pages. |
| Content | 16 | 17 | Tools pages: pricing-model 377 words, tariff-calculator 338. Under 400: guides hub 310, billiards-club-management 360, heselo-pricing 360, karaoke-room-booking 368, room-lounge-management 382, club-revenue-control 394. **«Живая сессия» is still visible 12 times on /ru/pricing/** (15 counted inside main). |
| Structured data | 9 | 9 | JSON-LD parses on all pages. FAQPage appears only on pages with FAQs. The heuristic flagged /ru/guides/ and /ru/solutions/, but that is the word "FAQ" appearing in text; neither page has a real FAQ block, so this is a false positive. Rich Results not checked. |
| International | 9 | 10 | Hreflang az/en/ru/x-default is reciprocal on all pages, and ru points to itself. No issues found. |
| Yandex/RU | 8 | 8 | Verification meta, Metrica and IndexNow key are in place. Gmail is still used. IndexNow is manual (`npm run indexnow`; the workflow was removed). Whether a ping was actually sent is unknown. |
| Performance | 3 | 3 | PSI quota exceeded again (mobile and desktop). Not measured. |

## Status of the v2 issues
| Issue | Status |
|---|---|
| Gmail email | Not fixed (68 × mailto:heselo.online@gmail.com) |
| «Живая сессия» | Fixed locally in src/i18n/messages/ru.ts (7a30117), but **still live on pricing**. The pricing plan features come from `../Heselo/backend/app/services/plan_marketing_seed.json` (backend plans), not from ru.ts. |
| /ru/pricing#x/ 308 | Fixed live (/ru/pricing/#gaming) |
| manifest 308 | Fixed live (/ru/site.webmanifest, 200) |
| Thin pages | Partly: tools now 338–377 words; 6 pages are still under 400 |
| 3 long descriptions | Fixed (they are now within range); a different page is at 166 |
| IndexNow ping | Partly: manual script only, not automatic |

## New bugs / regressions
None found. All 66 pages return 200; JSON-LD is valid; hreflang, canonical and sitemap are correct; no duplicate titles or descriptions.

## Remaining fixes
1. Change «Живая сессия» to «Активный сеанс» in the RU entries of Heselo/backend/app/services/plan_marketing_seed.json, re-seed the plans or redeploy the backend, then rebuild the landing.
2. Use info@heselo.online instead of Gmail.
3. Run `npm run indexnow` after every deploy, or bring back an automatic hook.
4. Bring the 6 pages under 400 words to 400+.
5. Shorten the playstation-cafe-software-alternative description from 166 to ≤160.
6. Measure PSI once quota is available (or with an API key).
