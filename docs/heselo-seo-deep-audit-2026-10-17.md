# Heselo.online: deep SEO audit (az / en / ru), 17.10.2026

Method: live, read-only crawl from the box (curl + Python parser) of all **198 sitemap URLs** (66 × 3 locales); Lighthouse 13.5 run locally (headless Chrome, box network) on 5 URLs × mobile/desktop; read-only inspection of the Mac repos.
- PageSpeed Insights API: **quota exceeded** (mobile + desktop, 3rd day in a row). CrUX API: 403 without an API key. **So there is no field (real-user) CWV data; all performance numbers are lab numbers.**
- Box network note: the box saw 5 temporary `000`/truncated responses under parallel load; all 5 returned 200 on retry, so this is not a site problem. Lab TTFB of about 815 ms reflects the box's network, not real users.
- GSC context (from the user): AZ 76% of clicks, RU 14%, KZ 10%.

## Deploy state
- heselo-landing: HEAD `7b7b4d8` (docs), 0 unpushed, only docs-related changes uncommitted.
- Heselo backend: `470bb52 fix(seo): RU plan marketing uses сеанс` is pushed (main). The live /ru/pricing/ shows **12× «Активный сеанс», 0× «Живая сессия»** (last-modified 17.10 10:58 Baku), so the v3 issue is **fixed live**.

## Score per locale (same weights as v1–v3)
Weights: Technical 25, On-page 20, Content 20, Structured data 10, International 10, Market-specific 10 (AZ: local trust/AZ signals; RU: Yandex), Performance 5.

| Category | AZ | EN | RU |
|---|---|---|---|
| Technical (25) | 22 | 22 | 23 |
| On-page (20) | 15 | 17 | 20 |
| Content (20) | 15 | 16 | 17 |
| Structured data (10) | 8 | 8 | 8 |
| International (10) | 10 | 10 | 10 |
| Market-specific (10) | 6 | 6 | 8 |
| Performance (5) | 3 | 4 | 3 |
| **TOTAL** | **79** | **83** | **89** |

**Weighted by GSC click share: about 81/100** (AZ 79 × 0.76 + RU 89 × 0.24; KZ visitors land on /ru).
RU dropped from v3's 92 to 89 because of the stricter method: this time Lighthouse lab performance, security/cache headers and rich-result eligibility were actually measured. **Nothing regressed on /ru.**

## Evidence by category

### Technical
- 198/198 pages return 200; canonical points to itself on all of them; robots.txt allows all and lists the sitemap; http→https and www→apex each take 1 hop (308).
- **The `public/_headers` file has no effect on Vercel** (Netlify/Cloudflare syntax). Live: `/_astro/*.css` and `/images/product/*.webp` return `cache-control: public, max-age=0, must-revalidate`, even though `_headers` asks for `max-age=31536000, immutable`. `X-Content-Type-Options`, `X-Frame-Options` and `Referrer-Policy` **do not appear live**; there is no CSP; HSTS is present (Vercel default, `max-age=63072000`). File: `public/_headers` → move these rules into `vercel.json` `headers`.
- **Orphan tool pages:** `/az|en/tools/pricing-model/` and `/az|en/tools/tariff-calculator/` cannot be reached by links from the home page (BFS: 64/66 reachable per locale). They are linked only from RU guides (`src/data/guides/ruCisGuides.ts`, `gapEducationalGuides.ts`), and not from `src/components/Footer.astro`.
- Click depth: every reachable page is ≤2 clicks away (18 at depth 1, 45 at depth 2). Good.
- Sitemap lastmod: guides use `dateModified` (accurate). **All other pages use `buildDate = new Date()`** (`src/pages/sitemap.xml.ts:14,49`), so every deploy marks them "changed". Google uses lastmod only when it is "consistently and verifiably accurate".
- Manifest is a 308 → fixed (v3). 0 broken internal links (v3 crawl, /ru, 234 hrefs).

### On-page
- 0 duplicate titles or descriptions in any locale; 1 H1 per page (one RU page showed 0 H1s only because of a truncated transfer; on retry it was fine).
- **AZ: 28 descriptions longer than 165 chars** (up to 215: `/az/` 215, `/az/guides/fazilat-pos-alternative/` 212, `resto-az/restomas/robotpos/smartpos` 209 each, `dine` 205, `club-timer` 201, `kassa-az` 201…). Short ones: `/az/tools/pricing-model/` 56, `/az/tools/tariff-calculator/` 66. Titles over 70: `/az/` 72, `/az/guides/` 76, `/az/guides/ps-club-software-comparison/` 73.
- EN: 12 descriptions out of range (`/en/` 235, `/en/pricing/` 206, `tools` 54/66, `terms` 97, `karaoke` 98), 2 titles over 70.
- RU: 1 description at 166, otherwise all fine.
- Note: Google says "There's no limit on how long a meta description can be", only that snippets get truncated. So this is a CTR/truncation risk, not an error.

### Content
- Pages under 400 words (excluding legal pages): AZ 14, EN 7, RU 9.
- AZ: `tools/tariff-calculator` 51, `tools/pricing-model` 73, `features` 92, `solutions` 158, `guides` 298, `karaoke-booking-system` 317, `karaoke-room-booking` 326, `room-lounge-management` 330, `how-to-open-anticafe` 332, `billiards-club-management` 336, `ps-club-tariffs` 340, `heselo-pricing` 343, `playstation-club-software` 377, `club-revenue-control` 385.
- **The RU fixes (features/solutions/tools expanded) were not carried over to AZ/EN.** AZ brings 76% of clicks, yet AZ `features` has 92 words vs RU's 315. Files: `src/pages/[locale]/features.astro`, `solutions/index.astro`, `tools/*.astro` and the az/en blocks in `src/i18n/messages/az.ts`/`en.ts`.
- Duplicate content between locales: ru↔az/en word overlap is about 0.02 (Jaccard), so these are real translations.
- AZ wording: reads naturally, no obvious calques in the sample (home page main text). «sessiya» is used throughout (as in «canlı sessiya»); in AZ both «seans» and «sessiya» are used, so this is not an error. Recommend checking Keyword Planner volumes first (unverified).
- KZ (10% of clicks): there is no KZ-specific content and no KZT prices (`src/lib/platformCurrency.ts`: ru→RUB). Whether this is a gap is **unverified** and should be checked in GSC by country × query.

### Structured data
- JSON-LD parses on all 198 pages (0 invalid). Organization (logo, founder, sameAs LinkedIn), WebSite, SoftwareApplication (+AggregateOffer on the home page), BreadcrumbList, Article (author → founder Person, datePublished/dateModified), FAQPage.
- **SoftwareApplication is not eligible for the Google rich result:** Google requires `aggregateRating` or `review`. The site explicitly says it uses no fake reviews ("Uydurma rəy və ulduz yoxdur"), which is correct; add ratings only once real reviews exist.
- **Article has no `image`** (Google recommends it). File: wherever Article JSON-LD is built (`src/lib/seo.ts`).
- FAQPage: Google has shown FAQ rich results only for government and health sites since Aug 2023. Not harmful, but brings no Google benefit (Yandex/LLM use unverified).
- Rich Results Test was not run (it needs a browser; not verified).

### International
- All 198 pages carry reciprocal az/en/ru/x-default(→/az/) hreflang; html lang and og:locale are correct. 10/10.

### Market-specific
- RU: yandex-verification meta + file, Metrica, IndexNow key (`/6333c2a8….txt`) all live. **Metrica gets no lead goals**: `window.heseloTrack` in `src/components/Analytics.astro` only calls `gtag('event')`; there is no `ym(id,'reachGoal',…)`. Metrica (and Clarity) load only after the first interaction (`boot()` on pointerdown/scroll/keydown), so bounce visits that never interact are not counted.
- AZ: the contact email is Gmail (`src/lib/site.ts:3`, `src/pages/llms.txt.ts:95`). There is a WhatsApp number (+994…), Telegram and a founder bio, but no address or legal entity (VÖEN) on the site (unverified whether one exists). A Google Business Profile requires a "physical location that customers can visit, or travels to customers", so whether an online SaaS is eligible is **doubtful** (see plan).
- No cookie-consent mechanism was detected, while GA4, Clarity (3rd-party cookies: CLID, MUID…) and Metrica webvisor are all active. Lighthouse "third-party-cookies" fails. Legal requirements were not researched (unverified).

### Performance (Lighthouse lab, box network)
| URL | Mobile perf | LCP | TBT | CLS | Desktop perf |
|---|---|---|---|---|---|
| /az/ | 77 | 4.5 s | 290 ms | 0 | 98 |
| /ru/ | 74 | 4.7 s | 370 ms | 0 | 97 |
| /en/ | 85 | 3.6 s | 230 ms | 0 | 96 |
| /az/pricing/ | 85 | 3.8 s | 210 ms | 0 | 98 |
| /ru/guides/how-to-open-playstation-club/ | 78 | 3.8 s | 420 ms | 0 | 98 |

- SEO category 100 and accessibility 93–97 on every page; best practices 73–77 (third-party cookies + Issues panel cookie warnings from Clarity).
- LCP element: hero `div.hero__visual > figure.shot > picture > img` (`/images/product/live-floor.webp`). The display slot on mobile is 350×219 px, but the smallest srcset candidate is 1256w, and the preload in `src/pages/[locale]/index.astro:46-48` uses `1x/2x` descriptors, so `live-floor@2x.webp` (209 KB) gets loaded. Lighthouse: "image delivery" saves about 71 KiB.
- Total page weight about 576 KiB; gtag.js 180 KB (71 KB unused); Clarity 26 KB; 2 render-blocking CSS files (7.8 KB + 2 KB); font Manrope woff2 (font-display not flagged).
- The LCP breakdown includes TTFB of 815 ms and render delay of 360 ms. TTFB is affected by the box network; real CrUX data is **unknown**.

### E-E-A-T / trust
- Good: About page with the founder (Person schema, portfolio sameAs), visible `<time>` dates on guides, dateModified in schema, privacy/terms in all 3 languages, contact page, phone/WhatsApp/Telegram, published prices, an honest "no fake reviews" stance.
- Gaps: no visible byline ("Müəllif: Aladdin Biyabangerd") on guides (only in schema); Gmail email; no customer cases or real reviews; no address or legal entity.

### OG / llms.txt
- og-image.jpg is 185 KB, 1200×630, the same image for all locales (og:locale correct). Localised OG images would be optional.
- llms.txt is 18.5 KB and llms-full.txt 52 KB, both 200, with AZN prices and an entity description.

## Top findings (by impact)
1. AZ content is thin/inconsistent: the RU improvements (features/solutions/tools) were not applied to AZ/EN. AZ = 76% of clicks.
2. 28 AZ descriptions run 170–215 characters (truncation); 3 AZ titles are over 70.
3. `public/_headers` is ignored on Vercel: no immutable cache for assets, and no nosniff/XFO/Referrer-Policy.
4. Mobile LCP is 3.6–4.7 s (lab) because of an oversized hero image candidate and preload.
5. az/en tool pages are orphans.
6. Metrica gets no lead goals; Metrica and Clarity load only after interaction.
7. Sitemap lastmod = build date for non-guide pages.
8. Gmail contact; no visible author byline; Article has no image.
9. No cookie consent, while 3 trackers set cookies (legal status not checked).
10. SoftwareApplication rich result requires reviews/ratings; real reviews are needed (never fake ones).

## Not verified
CWV field data (PSI quota, CrUX key); Rich Results Test; Google/Yandex index coverage; Keyword Planner/Wordstat volumes; whether the IndexNow ping has actually been sent; whether GBP eligibility applies; legal cookie requirements in AZ/RU/KZ; whether a legal entity/address exists.
