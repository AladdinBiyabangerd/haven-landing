# Heselo.online /ru/ SEO audit, 16.10.2026 (live, read-only)

## TOTAL: 76/100

| Category | Score | Evidence |
|---|---|---|
| Technical | 22/25 | All 66 /ru URLs in sitemap.xml return 200. Canonical is self on all 66. robots allows all, blocks only /ru/404/. Unknown URL returns a real 404. /ru returns 308 to /ru/. Minus: /indexnow.txt returns 404; og-image.png is 960 KB. |
| On-page | 16/20 | 0 duplicate titles or descriptions; exactly 1 H1 per page. Minus: titles over 65 chars on /ru/ (80), ps-club-software-comparison (78), solutions/billiards (76), solutions/gaming (74), solutions/antikafe and lounge (72). Descriptions too short: tariff-calculator 83, terms 89, privacy 97, billiards 99, pricing-model 100. pricing description is 190, too long. |
| Content | 13/20 | Thin pages (word count in main): features 94, solutions hub 161, tools/pricing-model 87, tools/tariff-calculator 60. Many guides are 320–450 words. «сесси» still appears about 24 times (for example «Живая сессия» in feature lists), against 852 uses of «сеанс». «на полу»: 0. Cannibalization: solutions/gaming, guides/playstation-club-software and guides/ps-club-software-comparison all target «программа для PS/игрового клуба». The gaming page has 0 links to the guide. |
| Structured data | 8/10 | JSON-LD parses on all pages (0 invalid). Types: Organization, WebSite, SoftwareApplication+AggregateOffer, BreadcrumbList, Article (guides), FAQPage, PricingPage/OfferCatalog. Minus: FAQPage is on almost every page, and Google Rich Results was not checked. |
| International | 9/10 | az/en/ru/x-default are reciprocal (in head and in sitemap xhtml:link). x-default points to /az/. html lang="ru". og:locale is ru_RU. |
| Yandex/RU | 5/10 | Good: Yandex Metrica tag.js is present (counter ID not verified); no geo.region=AZ (only geo.placename); t.me/heselo_online is linked; prices shown in ₽. Bad: no yandex-verification meta; /indexnow.txt returns 404; contact is heselo.online@gmail.com. |
| Performance | 3/5 | HTML 34–56 KB (pricing 131 KB), about 16 KB compressed, TTFB about 0.63 s. 2 render-blocking CSS files plus gtag. Images use webp with width/height and lazy loading. PSI not run: API quota exceeded. |

## Live vs local
- /ru/faq/ (200), llms.txt (200, has RU) and llms-full.txt (200) are LIVE, so c0eb72d and 0651de2 (or equivalents) appear deployed.
- geo.region=AZ and the missing Metrica have already been fixed live.

## Top 10 fixes
1. IndexNow: add /<key>.txt (or /indexnow.txt) and ping Yandex on deploy.
2. Add the Yandex Webmaster verification meta (or verify via DNS) and submit the sitemap there.
3. Cannibalization: rewrite guides/playstation-club-software as "чек-лист выбора" without «программа для PS-клуба» in the title, and add links from both guides to /ru/solutions/gaming/.
4. Expand thin pages: features (94 words), solutions (161), tool pages (60–87) to 400+ words each.
5. Replace «Живая сессия» with «Активный сеанс» in feature lists (product copy only; «сессия входа» in privacy is fine).
6. Shorten titles over 65 chars (home, gaming, billiards, antikafe, lounge, ps-comparison).
7. Bring descriptions to 120–160 chars: tariff-calculator, terms, privacy, billiards, pricing-model; trim pricing (190).
8. Use an email on the heselo.online domain instead of Gmail.
9. Compress og-image.png (960 KB) to under 200 KB (JPG/WebP).
10. Keep FAQPage only on pages with real visible FAQs, and validate in Rich Results Test and Yandex Validator.

## Already good
Full sitemap coverage, canonical, hreflang, lang, robots meta with max-snippet, rich JSON-LD, OG/Twitter (13/6 tags), all img alt and dimensions, Metrica, Telegram, ₽ prices, the «сеанс»/«тарификация» terms, «на полу» removed, llms.txt, FAQ page.

## Not checked
PageSpeed/CWV (quota), Wordstat volumes, Yandex/Google index status, Rich Results validators, backlinks, the Metrica counter ID.
