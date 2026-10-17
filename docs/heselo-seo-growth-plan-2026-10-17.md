# Heselo: SEO and growth plan (based on official sources), 17.10.2026

Based on: `heselo-seo-deep-audit-2026-10-17.md`. Market share (GSC, 28 days): AZ 76%, RU 14%, KZ 10%.
Rule: every recommendation cites an official source. Every URL was opened on 17.10.2026 (curl/WebFetch, 200 + content checked). Sources that failed to open were removed (list at the end).
Format: **P** priority, **I** impact (H/M/L), **E** effort (S/M/L), **Files**, **AC** acceptance criteria, **Src** source.

## (c) FIX: bugs and errors

**F1. Security and cache headers do not work on Vercel**. P0 · I: M · E: S
- Files: `public/_headers` → `vercel.json` (`headers` array). Rules: `/_astro/(.*)` and `/images/product/(.*)` → `Cache-Control: public, max-age=31536000, immutable`; all routes → `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`. CSP as a separate P2 (start in Report-Only).
- AC: `curl -I https://heselo.online/_astro/<hash>.css` shows `max-age=31536000, immutable`; `curl -I /az/` shows nosniff, XFO and Referrer-Policy.
- Src: https://vercel.com/docs/project-configuration · https://vercel.com/docs/headers/cache-control-headers · https://vercel.com/docs/headers/security-headers · https://web.dev/articles/http-cache · https://web.dev/articles/strict-csp

**F2. Mobile LCP: hero image is oversized**. P0 · I: H · E: S
- Files: `src/components/ProductShot.astro`, `src/pages/[locale]/index.astro:46-48` (preload), `scripts/process-product-shots.mjs`, `public/images/product/`. Generate 480w/768w variants of live-floor; switch the preload `imagesrcset` to w descriptors and add `imagesizes` identical to the `<img sizes>`.
- AC: Lighthouse mobile /az/ "image delivery" savings <10 KiB, LCP (lab) ≤2.5 s; on mobile the `live-floor@2x.webp` request does not happen.
- Src: https://web.dev/articles/optimize-lcp · https://web.dev/articles/serve-responsive-images · https://web.dev/articles/vitals · https://docs.astro.build/en/guides/images/

**F3. az/en tool pages are orphans**. P0 · I: M · E: S
- Files: `src/components/Footer.astro` (product links), `src/pages/[locale]/pricing.astro` (link to the calculator).
- AC: crawl from /az/ and /en/ reaches all 66/66 URLs; each tool page has ≥3 internal links in `<a href>` form.
- Src: https://developers.google.com/search/docs/crawling-indexing/links-crawlable

**F4. Sitemap lastmod = build date**. P1 · I: L-M · E: S
- Files: `src/pages/sitemap.xml.ts:14,49`. Add `lastmod` per route manually for non-guide pages (or from the git commit date).
- AC: deploying twice without content changes does not change lastmod in sitemap.xml.
- Src: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

**F5. Metrica gets no lead goals; Metrica/Clarity load only after interaction**. P0 (measurement) · I: H · E: S
- Files: `src/components/Analytics.astro`. In `heseloTrack` also call `ym(metricaId,'reachGoal',name,params)`; consider loading Metrica on page load (`boot()` change). Define goals in the Metrica UI with JavaScript-event type `generate_lead`/`pricing_select`.
- AC: a WhatsApp click on /ru/ shows a goal in Metrica Goals; GA4 DebugView shows `generate_lead`.
- Src: https://yandex.ru/support/metrica/objects/reachgoal.html · https://yandex.com/support/metrica/objects/reachgoal.html

**F6. Cookie consent / Consent Mode**. P1 · I: M (legal + measurement) · E: M
- Files: new `src/components/ConsentBanner.astro`, `Analytics.astro` (load Clarity/Metrica webvisor after consent, Consent Mode v2 defaults for gtag).
- AC: on first visit the banner appears; on "reject", Clarity cookies (CLID/MUID) are not set. **Legal requirements in AZ/RU/KZ were not researched (unverified).**
- Src: https://developers.google.com/tag-platform/security/guides/consent

## (a) OPTIMIZE: improve the existing system

**O1. Shorten AZ/EN meta descriptions and titles**. P0 · I: M · E: S
- 28 AZ + 12 EN descriptions (list in the audit). Target: the main message in the first ~150 chars, unique per page; titles ≤70.
- Files: `src/data/guides/*Guide.ts` (az blocks), `src/i18n/messages/az.ts`, `en.ts`, `src/data/solutions/az.ts`.
- AC: automated check: AZ/EN 0 descriptions >165, 0 titles >70; 0 duplicates.
- Src: https://developers.google.com/search/docs/appearance/snippet (no length limit, but truncated) · https://developers.google.com/search/docs/appearance/title-link

**O2. Port the RU content improvements to AZ/EN (thin pages)**. P0 · I: H · E: M
- AZ: features 92, solutions 158, tools 51/73 words plus 10 guides at 298–385. EN 7 pages.
- Files: `src/pages/[locale]/features.astro`, `solutions/index.astro`, `tools/pricing-model.astro`, `tools/tariff-calculator.astro`, the guide files listed in the audit.
- AC: every AZ/EN commercial page ≥400 words of useful, unique content (no padding); helpful-content self-assessment passed.
- Src: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

**O3. Article schema: add image; visible byline**. P1 · I: M · E: S
- Files: `src/lib/seo.ts` (Article `image`), guide layout component (`src/pages/[locale]/guides/[slug].astro`, name not verified): "Müəllif: Aladdin Biyabangerd" → /about/ link.
- AC: Rich Results Test shows Article valid, no warnings; byline visible on every guide.
- Src: https://developers.google.com/search/docs/appearance/structured-data/article · https://developers.google.com/search/docs/fundamentals/creating-helpful-content

**O4. Lighter third-party JS**. P2 · I: L-M · E: S
- gtag 180 KB (71 KB unused) + Clarity. Load Clarity only on selected pages or after consent.
- AC: Lighthouse mobile TBT ≤200 ms.
- Src: https://web.dev/articles/inp · https://developer.chrome.com/docs/lighthouse/overview

**O5. Keep FAQPage, but do not expect Google rich results from it**. P2 · I: L · E: none
- Src: https://developers.google.com/search/blog/2023/08/howto-faq-changes · https://developers.google.com/search/docs/appearance/structured-data/faqpage

**O6. Organization/WebSite schema: site name and logo consistency**. P2 · I: L · E: S
- Files: `src/lib/seo.ts`. Add Telegram and Instagram profiles (if they exist) to `sameAs`.
- Src: https://developers.google.com/search/docs/appearance/structured-data/organization · https://developers.google.com/search/docs/appearance/site-names

## (b) ADD: new pages, features, integrations

**A1. Domain email (info@heselo.online)**. P0 · I: M (trust) · E: S
- Files: `src/lib/site.ts:3`, `src/pages/llms.txt.ts:95`, Organization `email` in `src/lib/seo.ts`.
- AC: 0 instances of `gmail` in live HTML.
- Src: https://developers.google.com/search/docs/fundamentals/creating-helpful-content ("Who" signals: clear who is behind the site). **The domain-email recommendation itself is not in an official source; it is a trust signal by my judgment.**

**A2. Real customer cases and reviews**. P1 · I: H · E: M-L
- New: `/[locale]/cases/<slug>/` (one AZ PS club, one karaoke venue). Add `review`/`aggregateRating` only once real, verifiable reviews exist; **never fake ones**. Self-serving reviews on your own site are not eligible for LocalBusiness/Organization review snippets, but SoftwareApplication is a supported type.
- AC: ≥2 cases with real numbers, client name and consent.
- Src: https://developers.google.com/search/docs/appearance/structured-data/review-snippet · https://developers.google.com/search/docs/appearance/structured-data/software-app · https://developers.google.com/search/docs/essentials

**A3. KZ content (hypothesis)**. P2 · I: M · E: M
- First check in GSC: country=Kazakhstan × query × page. If the demand is real, consider pages like "программа для PS-клуба в Казахстане" and showing prices in KZT/USD (`src/lib/platformCurrency.ts`). If a separate region is targeted, follow the hreflang (`ru-KZ`) rules.
- AC: decision backed by GSC data. **Unverified.**
- Src: https://support.google.com/webmasters/answer/7576553 · https://developers.google.com/search/docs/specialty/international/localized-versions · https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites

**A4. Localised OG image (az/ru/en)**. P2 · I: L · E: S. File: `public/og-image-{az,ru,en}.jpg`, `BaseLayout.astro`.

**A5. IndexNow automation**. P1 · I: M (Yandex/Bing) · E: S
- The `npm run indexnow` script exists. Call it on a Vercel deploy hook or post-deploy step (only for changed URLs).
- AC: after every deploy the IndexNow response is 200/202 (log).
- Src: https://www.indexnow.org/documentation · https://yandex.com/support/webmaster/indexing-options/index-now.html · https://www.bing.com/indexnow

## (d) MARKETING and ACQUISITION (AZ, RU, KZ)

**M1. Google Business Profile: check eligibility first**. P1 · I: M (if eligible) · E: S
- Google: a profile is allowed if the business "has a physical location that customers can visit, or travels to customers". Virtual offices are not eligible. Heselo is online SaaS, so open a profile **only if** there is a staffed office that receives customers, or you travel to customers for setup/training (service-area business). Otherwise, do not open one (suspension risk).
- Src: https://support.google.com/business/answer/3038177 · https://support.google.com/business/answer/9157481

**M2. Yandex Webmaster + Yandex Business**. P1 · I: M (RU/KZ) · E: S
- In Webmaster: confirm rights (done), submit the sitemap, set the site region (AZ/RU/KZ; the region is considered for geo-dependent queries), use page reindexing.
- Yandex Business/Maps: same eligibility logic as GBP (real address). **The detailed rules on the Yandex Business page are JS-rendered and could not be read fully (partly verified).**
- Src: https://yandex.com/support/webmaster/service/rights.html · https://yandex.com/support/webmaster/en/site-geography/site-region.md · https://yandex.com/support/webmaster/en/indexing-options/link-metrica.md · https://yandex.ru/support/business-priority/ · https://yandex.ru/support/maps/

**M3. Bing Webmaster Tools**. P2 · I: L-M · E: S. Import the site from GSC; send the sitemap and IndexNow.
- Src: https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a · https://www.bing.com/indexnow

**M4. Telegram channel + bot (RU/KZ, and AZ)**. P1 · I: M · E: M
- Public channel @heselo_online: guide summaries, tariff tips, short videos. Optional: a bot (demo booking, price calculator) via the Bot API.
- AC: ≥8 posts/month; channel link in `Footer.astro` and every guide; UTM tags (`src/lib/campaign.ts` already exists).
- Src: https://telegram.org/faq_channels · https://telegram.org/tour/channels · https://core.telegram.org/bots

**M5. Instagram (AZ main channel)**. P1 · I: M · E: M
- Reels: "live floor" demo, before/after (Excel → Heselo). **The official Instagram/Meta help pages are JS-rendered and their content could not be verified, so there is no official citation for this item (marked unverified).**

**M6. Keyword research with real volumes**. P0 · I: H · E: S
- Google Keyword Planner (AZ/RU/KZ, az/ru languages) plus Yandex Wordstat (RU/KZ). Resolve «seans/sessiya», «PS klub proqramı», «программа для компьютерного клуба» and similar with data, then adjust titles/H1s.
- Src: https://support.google.com/google-ads/answer/7337243 · https://support.google.com/webmasters/answer/7576553

**M7. Partnerships and directories**. P2 · I: M · E: M
- AZ: PS/console sellers, karaoke equipment suppliers, local business associations; one partner page plus links. **Official guideline: links must not be bought or manipulative.**
- Src: https://developers.google.com/search/docs/essentials

## (e) MEASUREMENT: GA4 / GSC / Metrica, KPIs

**E1. GA4 key events**. P0 · I: H · E: S
- `generate_lead` is already sent (`Analytics.astro`, `ContactForm.astro`). In GA4 Admin, mark `generate_lead` as a key event; for the funnel, add `qualify_lead` and `close_convert_lead` (offline/CRM).
- AC: the GA4 Key events report shows daily data, broken down by country.
- Src: https://support.google.com/analytics/answer/9267735 · https://support.google.com/analytics/answer/9322688

**E2. Metrica goals** (see F5). P0.

**E3. GSC routine**. P1 · URL Inspection for new pages; Performance report for country × query × page analysis once a week.
- Src: https://support.google.com/webmasters/answer/9012289 · https://support.google.com/webmasters/answer/7576553

**E4. CWV field data**. P1 · get a PSI API key (or CrUX API key). The heselo-analytics extension can also use it.
- Src: https://developers.google.com/speed/docs/insights/v5/get-started · https://developer.chrome.com/docs/crux/api · https://developers.google.com/search/docs/appearance/core-web-vitals

**KPIs (baseline = current GSC/GA4 values; they were not given to me, so targets are relative):**
- Organic clicks: AZ +30% in 90 days; RU+KZ +50% (low base). **Targets are hypotheses, not forecasts.**
- `generate_lead` per organic session (CR): measure baseline in month 1, then +20%.
- CWV: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 (web.dev thresholds) for ≥75% of URLs in GSC CWV.
- Index: 198/198 indexed in both GSC and Yandex Webmaster.

## Roadmap

**0–30 days (P0):** F1 headers · F2 LCP image · F3 orphan tools · F5 + E1 + E2 measurement · O1 AZ/EN meta · A1 domain email · M6 keyword research · O2 AZ features/solutions/tools content (first wave).
**31–60 days (P1):** O2 second wave (10 AZ guides) · O3 byline/image · F4 lastmod · F6 consent · A5 IndexNow automation · M2 Yandex region/Webmaster · M4 Telegram · M5 Instagram · M1 GBP eligibility decision · E3/E4.
**61–90 days (P2 + scale):** A2 cases/reviews · A3 KZ (if GSC confirms demand) · O4 JS diet · M3 Bing · M7 partnerships · A4 OG · CSP Report-Only → enforce.

## Sources (opened on 17.10.2026; 58)
Google Search Central: build-sitemap, localized-versions, title-link, snippet, software-app, faqpage, howto-faq-changes (blog), article, breadcrumb, organization, review-snippet, creating-helpful-content, core-web-vitals, links-crawlable, consolidate-duplicate-urls, site-names, google-images, essentials, managing-multi-regional-sites, sd-policies (all at developers.google.com/search/…) · web.dev: vitals, optimize-lcp, inp, http-cache, strict-csp, serve-responsive-images · Chrome: lighthouse/overview, crux/api · PSI v5 get-started · schema.org/SoftwareApplication · indexnow.org/documentation · bing.com/indexnow · Bing webmaster guidelines · Yandex: index-now, service/rights, site-region.md, link-metrica.md, metrica reachgoal (ru + com), business-priority, maps · GBP 3038177, 9157481 · GA4 9267735, 9322688 · Consent mode guide · Keyword Planner 7337243 · GSC 7576553, 9012289 · Telegram: bots, faq_channels, tour/channels · Vercel: project-configuration, cache-control-headers, security-headers · Astro: images, internationalization, configuration-reference.
(The full URLs are in the items above. Astro i18n/config reference and google-images, consolidate-duplicate-urls, sd-policies and breadcrumb were opened but are not cited separately in an item; they serve as general references.)

**Removed (failed or content not readable):** yandex.com/…/site/regions.html (404), bing indexnow help page (404), help.instagram.com and business.instagram.com (content JS-rendered, not verifiable), facebook business help (400/404), schema.org/Article (content not readable).
