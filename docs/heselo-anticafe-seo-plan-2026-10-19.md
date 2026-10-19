# Heselo: anticafe SEO and Google AI Mode plan (2026-10-19)

Scope: why heselo.online does not appear in Google Search or AI Mode/AI Overviews for "antikafe idare etme proqrami" and similar queries, and what to do about it.
Method: I read the code on the Mac (read-only, HEAD `a21e93e`), crawled the live site (12 anticafe URLs plus the 216-URL sitemap for internal links), fetched competitor pages, and read official documentation. Nothing was edited, committed or pushed.
Data was collected on 2026-10-19 between 08:55 and 09:20 Baku time (UTC+4).

---

## 1. Current state: Heselo's anticafe pages

All 12 URLs return 200. Every one has `index, follow`, a self-referencing canonical, az/en/ru/x-default hreflang, and is listed in the sitemap and in llms.txt. robots.txt allows everything except /api/ and /404/. **There is no technical block.**

| URL | Title | H1 | Words (main) | Exact phrase in body |
|---|---|---|---|---|
| /az/solutions/antikafe/ | Antikafe idarəetmə sistemi və antikafe proqramı \| Heselo | Antikafe idarəetmə sistemi | 609 | "antikafe proqramı" **0** (only in title/meta), "dəqiqəlik" 0, "vaxta görə ödəniş" 0, "uçot" 0 |
| /az/guides/antikafe-management-system/ | Antikafe idarəetmə sistemi nədir? | same | 442 | "antikafe proqramı" 3, "dəqiqəlik" 1 |
| /az/guides/how-to-open-anticafe/ | Antikafe necə açılır… | same | **319** | – |
| /az/guides/anticafe-rent-cost-calculation/ | Antikafe icarə və saat haqqı hesablama | "Antikafe menzil / icarə…" (typo "menzil") | 699 | – |
| /ru/solutions/antikafe/ | Программа для антикафе — учёт времени и касса | Программа для антикафе и тайм-кафе | 602 | Good: "программа для антикафе" 2, "поминутн" 2, "тайм-кафе" 3 |
| /ru/guides/antikafe-management-system/ | Как вести учёт времени в антикафе… | same | 475 | Description says "Информационный гайд — не страница продукта" (wasted snippet space) |
| /ru/guides/how-to-open-anticafe/ | Как открыть антикафе… | same | 523 | Meta description contains a raw path "/ru/solutions/antikafe/" |
| /ru/guides/anticafe-rent-cost-calculation/ | Как рассчитать тарифы антикафе… | same | 589 | – |
| /en/solutions/antikafe/ | Anti-café management system & hourly venue software | Anti-café management system | 717 | "anticafe software" 0, "time cafe" 0, "per-minute" 0 |
| /en/guides/antikafe-management-system/ | What is an anti-café management system? | same | 538 | – |
| /en/guides/how-to-open-anticafe/ | How to Open an Anticafe… | same | **329** | – |
| /en/guides/anticafe-rent-cost-calculation/ | Anticafe Rent and Hourly Fee Calculation… | same | 883 | – |

**JSON-LD.** Solution pages carry Organization, Person, WebSite, WebPage, SoftwareApplication (with AggregateOffer 25–75 AZN), BreadcrumbList and FAQPage. Guides carry Article instead of WebPage. Everything parses.
- SoftwareApplication has no `aggregateRating`/`review`, so it is **not eligible** for the Software App rich result. Google lists a rating or review as required.
- FAQPage rich results are shown only for authoritative government and health sites since Aug 2023, so the FAQ markup will not produce a rich result.
- Organization `sameAs` lists only LinkedIn.

**Internal links (same locale).**
- Each solution page gets about 70 inbound links (sitewide footer/nav). This is fine.
- The guides are nearly orphaned: /az/guides/antikafe-management-system/ has 2 same-locale inbound links, how-to-open-anticafe has 1, rent-calculation has 1.

**Content gaps against the product's own RU copy.** The RU page says the product does per-minute and hourly billing, packages, a daily cap (stop-check), snacks on the same bill, and "not a fiscal register (KKT)". **None of that is on the AZ solution page.** The AZ page only says "saatla ödəniş". The AZ solution page also shows an off-topic block, "iiko, Clopos və ya Excel axtarırsınız?" (`src/pages/[locale]/solutions/[slug].astro:231`).

**Source files:**
- `src/data/solutions/az.ts` (antikafe entry from about line 311), `src/data/solutions/ru.ts`, `src/data/solutions/en.ts`
- `src/data/guides/az.ts:390`, `en.ts:390`, `ru.ts:392` (antikafe-management-system)
- `src/data/guides/gapEducationalGuides.ts:1611` (rent calculation)
- `src/data/guides/ruCisGuides.ts:1391` (how-to-open-anticafe)
- `src/lib/seo.ts` (JSON-LD), `src/lib/site.ts:88` (sameAs comes from the PUBLIC_HESELO_SOCIAL_* env vars)

## 2. Index check, and its limits

- **The Google index could not be verified.** Plain curl gets Google's JS-only page with no results. Bing returned a bot challenge, Yandex a captcha, and the browser tool failed to start. Google's own docs say `site:` is not a complete index view anyway; the authoritative check is **Search Console URL Inspection**. Aladdin must run it (section 5).
- A third-party web index (not Google) does have the site. For "antikafe idarəetmə proqramı" it returned **heselo.online/az/ ranked #1, ahead of usu-az.com**. That suggests the content is understandable and the gap is Google-specific: indexing, trust or age.
- **Age and authority.** The earliest Wayback capture of heselo.online is 2026-09-30. Aladdin's LinkedIn shows Heselo started in June 2026. The only third-party mentions I found are LinkedIn posts. So this is a roughly 3–4-month-old domain with almost no external links, competing against usu-az.com (a large multi-year network) and long-established global brands.

## 3. Why the competitors get cited

**usu-az.com/anticafe/program_for_an_anti-cafe.php**
- `<title>` and H1 are literally **"Antikafe proqramı"**, an exact match for the query head.
- About 1,000+ words of Azerbaijani text. It reads machine-translated ("anti-qəhvə"), so its advantage is not quality.
- What it does have: an exact-match title/H1 in the query's language, long topical text (hourly pay, club cards, renting consoles and board games, SMS, warehouse, reports), a clear "one-time payment, no monthly fee" price statement, a free demo download, and an old domain with thousands of interlinked "X proqramı" pages.
- No FAQ, so FAQ markup is not what gets it cited.

**icafecloud.com**
- English. Long "What is…" definition, a feature list, "Who uses this", a **per-PC price shown in plain text ($2.50/PC/month)**, and roughly 8 FAQ answers to concrete operator questions (time runs out, zones, migration).
- It is cited for the "bulud sistemi" (cloud) follow-up.

**Antamedia, PanCafe, AKINSOFT, Poster, Gizmo, Sintel**
- Global brands cited for specific *sub-topics* the AI answer covered: smart-plug or console shutdown, a free option, loyalty cards, and mini-bar stock.

**How AI Mode built its answer.** It used query fan-out (Google documents this). Its sub-topics were:
1. Time-based billing: first hour fixed, then per minute
2. Zones and rooms
3. Console and device control through smart plugs
4. Free tea and coffee stock plus mini-bar POS
5. Loyalty, club cards and subscriptions
6. Cloud versus local
7. E-Kassa and bank terminal integration
8. Number of staff

Pages that answer these sub-questions in AZ text get pulled in. Heselo's AZ pages answer only #1 (hourly, not per minute), #2 and #4 partly, and nothing on #3, #5, #6 or #7.

## 4. Top reasons Heselo is invisible (ranked)

1. **New domain with almost no external signals.** It has existed for weeks to months, with no backlinks beyond LinkedIn. Google says indexing and serving are not guaranteed, and AI features show only pages that are indexed and eligible for a snippet. ([AI features](https://developers.google.com/search/docs/appearance/ai-features), [How Search works](https://developers.google.com/search/docs/fundamentals/how-search-works))
2. **Probably not indexed, or not yet trusted, in Google for the anticafe URLs.** Unverified. Must be checked in GSC.
3. **Weak match between the AZ page and the query.**
   - The H1 says "idarəetmə sistemi", while people search "proqramı" or "idarə etmə proqramı".
   - "antikafe proqramı" appears only in title/meta and never in the body.
   - There are no per-minute, stop-check, package, cloud or E-Kassa answers in AZ.
   - Google uses visible text, and title links come from on-page content. ([Title links](https://developers.google.com/search/docs/appearance/title-link), [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide))
4. **Thin, poorly linked guides:** 319–540 words with 1–2 internal links. ([Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable))
5. **No presence on the "sources" AI Mode also used:** Instagram, Google Play, local directories and listings.
6. **Site-wide risk:** about 216 URLs, including many short "X alternative" guides published within a few months. Google's spam policy on *scaled content abuse* targets pages made mainly to rank without adding value. These guides are not necessarily in violation, but thin near-duplicates dilute site quality signals. ([Spam policies](https://developers.google.com/search/docs/essentials/spam-policies))

## 5. Prioritized plan

### P0: this week

**P0-1. Verify indexing in Google Search Console (Aladdin, 15 min).**
- Run URL Inspection on /az/solutions/antikafe/, /az/guides/antikafe-management-system/ and /az/. Note "URL is on Google?", the Google-selected canonical and the last crawl date. If a URL is not indexed, use "Request indexing".
- Open Pages (indexing) report → "Crawled – currently not indexed" and "Discovered – not indexed". This tells us whether Google is choosing not to index thin pages.
- Confirm the sitemap is submitted and read without errors.
- Docs: [URL Inspection](https://support.google.com/webmasters/answer/9012289), [Ask Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), [site: operator limits](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site)

**P0-2. Rewrite the AZ antikafe solution page** (`src/data/solutions/az.ts`, antikafe entry). Write for people, in natural Azerbaijani; do not keyword-stuff.
- **seoTitle:** `Antikafe proqramı — vaxt uçotu, dəqiqəlik tarif və kassa | Heselo` (about 62 characters)
- **h1:** `Antikafe proqramı və idarəetmə sistemi`
- **seoDescription:** `Antikafe üçün bulud proqram: qonaq vaxtının uçotu, dəqiqəlik və saatlıq tarif, paket və stop-çek, çay/qəlyanaltı eyni hesabda, kassa növbəsi. Ayda 32 AZN-dən, pulsuz demo.` (about 160 characters; use the real {antikafe} price placeholder)
- **intro**, first 2 sentences: a direct definition. Example: "Antikafe proqramı qonağın məkanda keçirdiyi vaxtı sayır, dəqiqəlik və ya saatlıq tarifə görə məbləği avtomatik hesablayır və çay, qəlyanaltı satışını eyni hesaba yazır. Heselo bunu brauzerdə işləyən bulud paneldə edir: kompüterə quraşdırma, server lazım deyil."
- **Outline (H2s, aim for about 1,200–1,500 useful words):**
  1. Antikafe proqramı nədir və nə edir? (definition plus the 4-step flow: gəliş → sessiya → məhsul → ödəniş)
  2. Vaxta görə ödəniş: dəqiqəlik, saatlıq, paket və stop-çek (with a worked numeric example, e.g. first hour X AZN, then Y AZN per minute, daily cap Z)
  3. Masa, zona və otaqlar (ümumi zal, VIP otaq, PS zonası, kino otağı): separate rates per zone
  4. Pulsuz çay/kofe və mini-bar: anbar uçotu (how "free" consumables are stocked versus paid snacks)
  5. Stolüstü oyunlar, konsollar: only if Heselo can track them as resources; otherwise say so honestly
  6. Bulud sistemi: telefondan nəzarət, server lazım deyil
  7. Kassa növbəsi və hesabat
  8. Heselo nəyi etmir: not E-Kassa fiscal (if true), no automatic light or TV shutdown yet (smart plugs are on the roadmap). Honesty helps trust, and the AI answer explicitly asked about E-Kassa.
  9. Qiymət (plain text: Kiçik plan {antikafe} AZN/ay; link to pricing)
  10. FAQ (below)
- **FAQ, written to match the real fan-out questions:**
  - Antikafe proqramı neçəyə başa gəlir? Aylıq yoxsa birdəfəlik?
  - Dəqiqəlik tarif və stop-çek necə qurulur?
  - İlk saat sabit, sonrası dəqiqəlik hesablamaq olar? (only if supported)
  - Proqram Azərbaycan dilindədir? (yes, AZ/EN/RU)
  - Bulud sistemi internet kəsiləndə necə işləyir? (be honest)
  - E-Kassa və bank POS terminalı ilə inteqrasiya var? (be honest)
  - Klub kartı, abunəlik və bonus sistemi var? (be honest)
  - PlayStation zonası və stolüstü oyunlar eyni sistemdə idarə olunur?
  - Neçə admin eyni anda işləyə bilər? İşçi icazələri?
  - Pulsuz çay və kofe xərcini necə izləyim?
- Remove or replace the "iiko, Clopos və ya Excel axtarırsınız?" block on antikafe pages with a link to the antikafe guides (`[slug].astro:231`).
- Docs: [Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Title links](https://developers.google.com/search/docs/appearance/title-link), [Snippets/meta description](https://developers.google.com/search/docs/appearance/snippet), [AI features: content in text form](https://developers.google.com/search/docs/appearance/ai-features)

**P0-3. Mirror the fix in EN and RU.**
- EN `src/data/solutions/en.ts`:
  - title `Anticafe software — time tracking, per-minute billing & cash | Heselo`
  - H1 `Anticafe & time-café software`
  - use "anticafe", "anti-café" and "time café" naturally in the body, and add per-minute and stop-check text
- RU is already strong on terms. Fix two descriptions:
  - remove "Информационный гайд — не страница продукта" (`ru` antikafe-management-system guide)
  - remove the raw path "/ru/solutions/antikafe/" from the how-to-open-anticafe description

**P0-4. Make structured data match the visible text** (`src/lib/seo.ts`).
- On the antikafe page, use an `Offer` or `AggregateOffer` whose price is the antikafe plan ({antikafe} AZN), alongside the site-wide 25–75 range.
- Keep BreadcrumbList.
- Keep FAQPage only for Q&A that are visible on the page. It is harmless, but expect no rich result.
- **Do not add aggregateRating/review until there are real, verifiable customer reviews.** The Software App rich result requires them, and fake reviews violate review-snippet guidelines.
- Validate with the Rich Results Test.
- Docs: [Software App](https://developers.google.com/search/docs/appearance/structured-data/software-app), [Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet), [General SD policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [FAQ change 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes), [Breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [schema.org/SoftwareApplication](https://schema.org/SoftwareApplication), [schema.org/Offer](https://schema.org/Offer)

**P0-5. After deploy, submit the changed URLs.**
- Google: GSC "Request indexing" for the 3 solution URLs plus the 3 AZ guides.
- Bing and Yandex: `npm run indexnow -- <urls>`. The script and key file already exist (`scripts/submit-indexnow.mjs`, `public/6333c2a8….txt`).
- Yandex: also use "Page reindexing" in Yandex Webmaster (the verification file `yandex_0d90f5775e306c28.html` exists).
- Docs: [Bing IndexNow](https://www.bing.com/indexnow/getstarted), [Yandex IndexNow](https://yandex.com/support/webmaster/en/indexing-options/index-now), [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmasters-guidelines-30fba23a)

### P1: next 2–3 weeks

**P1-1. Deepen and connect the guides.**
- Grow `how-to-open-anticafe` (319 and 329 words in AZ/EN) and `antikafe-management-system` (442 AZ) to complete answers: steps, numbers and an example day. Fix the "menzil" typo in the rent-calculation H1.
- From the solution page body (not only the footer), link in-context to all 3 guides. The guides should link to each other and back to the solution page with descriptive anchors such as "antikafe tariflərini necə hesablamaq olar".
- Add the three AZ guides to the "related" blocks on the gaming, lounge and pricing pages.
- Docs: [Crawlable links and anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

**P1-2. Write one new AZ informational page that targets the fan-out.**
- Suggested slug `/az/guides/antikafe-proqrami-secimi/`: "Antikafe proqramı necə seçilir: 10 sual". It is a decision checklist covering billing models, zones, cloud versus local, E-Kassa, loyalty, staff permissions, price models (one-time versus monthly) and smart plugs.
- Name competitor categories factually (desktop one-time-license programs like USU and AKINSOFT, cyber-cafe systems like iCafeCloud and Antamedia, restaurant POS like Poster). Make no false claims, unlike the billiards comparison issue from 2026-10-18.

**P1-3. Off-site signals that AI Mode demonstrably draws from.** Only do what is real and policy-compliant.
- **Instagram:** a Heselo business account (AZ), with posts and reels demonstrating the anticafe flow (per-minute bill, stop-check). Add it to Organization `sameAs` through `PUBLIC_HESELO_SOCIAL_*` (`src/lib/site.ts:88`).
- **Tap.az:** a service listing in the business software category, following Tap.az rules. Competitors like Freedom Platform and Club Timer are already there.
- **Local directories and agency or blog mentions** (the crea.az type): ask for genuine listings or reviews. Do not buy links. Link schemes violate [spam policies](https://developers.google.com/search/docs/essentials/spam-policies).
- **Google Play:** only if Heselo has, or ships, a real Android app (e.g. a PWA wrapped as a TWA) that meets Play policies. Don't create an empty listing for SEO.
- **Google Business Profile:** Heselo is eligible only if it has a staffed physical location that receives customers, or genuinely serves customers at their sites. A virtual office or home-based online SaaS is not eligible. Check the [GBP guidelines](https://support.google.com/business/answer/3038177) before creating one.
- **Early anticafe customers:** with permission, publish a short real case study (name, city, tables, before/after). It gives Google and AI answers something unique to cite, and later supplies genuine reviews.

**P1-4. Measure.**
- In GSC Performance (Web), filter queries containing "antikafe" or "антикафе" and the antikafe pages. AI Overview and AI Mode clicks count inside Web search. Check weekly.
- Docs: [AI features: measuring](https://developers.google.com/search/docs/appearance/ai-features), [Performance report](https://support.google.com/webmasters/answer/7576553)

### P2: next 1–2 months

- **Prune or merge thin pages.** Audit the 300–480-word "alternative" guides site-wide. Merge or expand the weakest, and keep only pages that add something unique. ([Helpful content self-assessment](https://developers.google.com/search/docs/fundamentals/creating-helpful-content))
- **Product gap that also matters for SEO:** smart-plug or relay control (Shelly local API, from the 2026-10-18 research). AI Mode lists it as a core anticafe and PS feature. Once built, add a real section and screenshots.
- **Media:** a 60–90 second screen video of an anticafe session on the solution page, with descriptive text around it. ([Video best practices](https://developers.google.com/search/docs/appearance/video), [Image SEO](https://developers.google.com/search/docs/appearance/google-images))
- **Page experience:** check /az/solutions/antikafe/ in PageSpeed Insights or the GSC Core Web Vitals report. Not measured in this audit. ([web.dev Core Web Vitals](https://web.dev/articles/vitals))
- **llms.txt** is fine to keep, but Google says no special AI files or markup are needed ([AI features](https://developers.google.com/search/docs/appearance/ai-features)). Don't invest more there.

## 6. What not to do

- Don't fake reviews or ratings in schema, and don't stuff keyword lists.
- Don't create dozens of near-identical "antikafe proqramı Bakı/Sumqayıt/…" doorway pages ([spam policies: doorway, scaled content](https://developers.google.com/search/docs/essentials/spam-policies)).
- Don't claim features Heselo lacks (light control, E-Kassa) or make unverifiable claims about competitors.

## 7. Open items needing Aladdin

- GSC URL Inspection results for the antikafe URLs. This is the decisive data point.
- Confirm which of these Heselo actually supports, so the copy stays honest: first hour fixed then per minute, packages and stop-check in AZ, loyalty or club cards, E-Kassa or bank POS integration, board-game or console rental tracking, offline behaviour.
