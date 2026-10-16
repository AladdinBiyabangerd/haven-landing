# Heselo /ru SEO audit v2, 16.10.2026 22:30 (live, read-only)

## Deploy state
- Local HEAD 7cd2720 is the same as origin/main (git ls-remote). No unpushed commits.
- Uncommitted changes are docs only: seo-ru-phase0-baseline.md, social-guide-hooks.md, plus 2 untracked docs.
- The changes from 7cd2720 are LIVE: og-image.jpg, yandex-verification meta, new titles, expanded pages.
- So local = live, and the projected score equals the live score.
- npm run build was not run, because the deployed site already matches HEAD.

## TOTAL: 88/100 (previously 76)

| Category | v1 | v2 | Evidence |
|---|---|---|---|
| Technical | 22 | 24 | 66/66 pages return 200 and are in the sitemap. IndexNow key /6333c2a8c71f44f0a0f557eaaebd5745.txt returns 200 and its content matches the key. og-image.jpg is 185 KB. Minus: some internal links are 308 redirects (see bugs). |
| On-page | 16 | 19 | All titles are 29–69 chars, 0 duplicate titles or descriptions. Descriptions over 160: ps-club-software-comparison 180, club-pos-terminal-selection 172, clopos 171. Short ones: solutions/pos 105, inventory 111, room-lounge-management 114. |
| Content | 13 | 16 | Word counts: features 315, solutions 356, pricing-model 285, tariff-calculator 266. «Живая сессия» still appears 15 times on /ru/pricing/ and once on the playstation guide (6 «сессия входа» in privacy are fine). gaming and the PS guides now link to each other, and their titles no longer overlap. |
| Structured data | 8 | 9 | JSON-LD is valid on all pages. FAQPage is present only on pages with a visible FAQ (by heuristic); features, solutions, tools, terms and privacy have none. Rich Results not checked. |
| International | 9 | 9 | Reciprocal hreflang az/en/ru/x-default(→az) on all 66 pages. ru vs az/en word overlap (Jaccard) is about 0.02, so this is real translation, not duplication. |
| Yandex/RU | 5 | 8 | yandex-verification meta plus the yandex_0d90f5775e306c28.html file (200), IndexNow key, Metrica, Telegram. Minus: heselo.online@gmail.com; IndexNow pinging on deploy not verified. |
| Performance | 3 | 3 | PSI quota exceeded again (mobile and desktop), so not measured. |

## Status of the 10 fixes
1. IndexNow: fixed live (the key file is correct; /indexnow.txt is not needed). Ping not verified.
2. Yandex verification: fixed live.
3. Cannibalization: fixed live (separate titles, links in both directions).
4. Thin pages: fixed live, but partly (266–356 words, below the 400 target).
5. «сессия»: partly fixed; 15 remain on pricing.
6. Long titles: fixed live.
7. Descriptions: mostly fixed; 3 are still over 160.
8. Gmail address: not fixed.
9. og-image: fixed live (185 KB jpg; the old png returns 404 but no page references it).
10. FAQPage only where visible: fixed / already correct.

## Bugs (not breaking)
- Price chip on 5 solution pages: href="/ru/pricing#gaming/" leads to a 308 to /ru/pricing/ (wrong slash placement). Fix: "/ru/pricing/#gaming".
- <link rel="manifest" href="/ru/site.webmanifest/"> leads to a 308. Fix: "/site.webmanifest".
- 0 broken internal links (205 unique hrefs checked). www redirects in 1 hop, and /ru to /ru/ is 1 hop.
- http:// timed out from the box. Not verified; likely a box network issue.

## Remaining top issues
1. Use info@heselo.online (domain email) instead of Gmail.
2. Replace «Живая сессия» with «Активный сеанс» on /ru/pricing/ and in the playstation guide.
3. Fix the price-chip and manifest URLs above.
4. Bring tools, features and solutions to 400+ words; expand guides that are under 400 words (ps-club-tariffs 319, how-to-open-anticafe 348, karaoke-booking-system 350).
5. Shorten the 3 descriptions that are over 160 chars.
6. Ping IndexNow from the deploy hook.
7. Measure PSI/CWV once quota is available (or with an API key).
