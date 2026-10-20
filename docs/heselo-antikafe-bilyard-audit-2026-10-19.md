# Heselo: antikafe və bilyard səhifələrinin auditi (2026-10-19)

Yoxlama: 19.10.2026, 15:33–16:10 (Bakı vaxtı, UTC+4). Yalnız oxuma rejimi: Mac-də heç nə dəyişdirilmədi, commit və push edilmədi.
Mənbələr: Mac-dəki repo (HEAD `60b4044`, `main` = `origin/main`), canlı sayt https://heselo.online (curl ilə 33 səhifə və sitemap-dakı 216 URL), rəqiblərin rəsmi səhifələri (billiardpos.net, biliardo.kz, cuedesk.app, Microsoft Store BCMS) və Heselo backend kodu (`Heselo/backend/app/services/live_billing.py`). Backend kodu yalnız iddiaların doğru olub-olmadığını yoxlamaq üçün oxundu.

## 1. a21e93e-dən sonra nə dəyişib

| Commit | Vaxt (Bakı) | Nə edir |
|---|---|---|
| `63dfcf7` | 19.10, 09:16 | Bilyard: qiymətlər katalog API-dən gəlir (`{currency}`, `{billiardsHigh}`), rəqiblər haqqında iddialar düzəldilib, slug-dan il çıxarılıb (`billiards-software-comparison`, 308 redirect), mock-lar lokallaşdırılıb, llms.txt linkləri düzəldilib |
| `60b4044` | 19.10, 09:37 | Antikafe: AZ/EN/RU solution səhifələri yenidən yazılıb (title, H1, 9 H2 bölmə, 12 FAQ), iiko/Clopos bloku antikafe bələdçiləri ilə əvəz olunub, `Offer` JSON-LD əlavə edilib, RU təsvirləri və "menzil" yazı xətası düzəldilib |

Hər iki commit push edilib və saytda yayımdadır: canlı mətn koda uyğundur. Working tree-də yalnız untracked `docs/*.md` faylları var.

## 2. Ümumi nəticə

| | AZ | EN | RU | **Ümumi** | Əvvəl |
|---|---|---|---|---|---|
| **Antikafe** | 83 | 82 | 77 | **81%** | Əvvəl bal verilməyib. Bu rubrika ilə plan günündəki (09:00) vəziyyət təxminən 55 olardı |
| **Bilyard** | 76 | 77 | 79 | **77%** | 69 (səhər yoxlaması) |

Qiymətləndirmə rubrikası (cəmi 100): texniki/indeksləmə 15 · on-page açar sözlər 15 · məzmun dərinliyi 15 · faktların və qiymətin dəqiqliyi 20 · strukturlaşdırılmış data 10 · daxili linklər 10 · AI cavablarına hazırlıq 15.

Vacib qeyd: Google indeksi bu auditdə yoxlana bilməz. Səhifə nə qədər yaxşı olsa da, görünmək üçün əvvəlcə Search Console → URL Inspection ilə "URL is on Google" olduğunu təsdiqləmək lazımdır. Bunu yalnız Aladdin edə bilər ([URL Inspection](https://support.google.com/webmasters/answer/9012289), [AI features](https://developers.google.com/search/docs/appearance/ai-features)).

---

## 3. Antikafe

### 3.1 Ballar

| Meyar | AZ | EN | RU | Qeyd |
|---|---|---|---|---|
| Texniki/indeksləmə (15) | 14 | 14 | 14 | Hər yerdə 200, `index,follow`, öz-canonical, az/en/ru/x-default hreflang, sitemap `lastmod 2026-10-19`. GSC yoxlanmayıb |
| On-page (15) | 13 | 12 | 14 | AZ title/H1 plana tam uyğundur. Dəqiq sorğu "antikafe idarə etmə proqramı" görünən mətndə 0 dəfə keçir. EN title 69 simvoldur, uzundur |
| Dərinlik (15) | 13 | 13 | 12 | Əsas mətn: AZ 1363, EN 1426, RU 1187 söz; 9 H2 bölmə; fan-out mövzularının hamısı var. Bələdçilər hələ də zəifdir |
| Fakt/qiymət (20) | 17 | 17 | **12** | Qiymətlər düzgündür (32 AZN / 19 USD / 1600 RUB). Məhdudiyyətlər dürüst yazılıb. **RU nümunəsi absurddur** (aşağıda P0) |
| Strukturlaşdırılmış data (10) | 8 | 8 | 8 | Venue `Offer` + `AggregateOffer`, 12 sual FAQPage, hamısı səhvsiz parse olunur. Offer description ümumidir |
| Daxili linklər (10) | 6 | 6 | 6 | Solution → 3 bələdçi linki var. Amma bələdçilərə saytda cəmi 2 daxili link gəlir |
| AI-cavab hazırlığı (15) | 12 | 12 | 11 | Birinci cümlə tərifdir; E-Kassa, oflayn, loyalty kimi suallara dürüst cavab var. llms.txt-də antikafe üçün entity card yoxdur, saytdan kənar siqnal da yoxdur |
| **Cəmi** | **83** | **82** | **77** | |

### 3.2 Düzəldilənlər (plan 2026-10-19 ilə müqayisə)
- AZ title: `Antikafe proqramı — vaxt uçotu, dəqiqəlik tarif və kassa | Heselo`, H1: `Antikafe proqramı və idarəetmə sistemi` (`src/data/solutions/az.ts:313-314`). "antikafe proqramı" artıq görünən mətndə 6 dəfə keçir (əvvəl 0).
- AZ mətn 609 sözdən 1363 sözə çıxıb. Plandakı 9 H2 bölmənin hamısı yazılıb: tərif, dəqiqəlik/stop-çek, zonalar, mini-bar, oyunlar/konsollar, bulud, kassa, "Heselo nəyi etmir", qiymət (`az.ts:340-414`).
- FAQ 12 sualdır: plandakı 10 sual və 2 əlavə (`az.ts:437-486`).
- Dürüst məhdudiyyətlər yazılıb: E-Kassa yoxdur, oflayn rejim yoxdur, loyalty yoxdur, smart-plug yoxdur. RU-da 54-ФЗ/ККТ qeydi var.
- EN title və H1 plana uyğundur; "anticafe", "time café", "per-minute" sözləri mətndə işlənib.
- RU bələdçi təsvirlərindəki "Информационный гайд — не страница продукта" ifadəsi və xam path silinib (`guides/ru.ts:397`, `ruCisGuides.ts:1608`).
- "menzil" yazı xətası düzəldilib (`gapEducationalGuides.ts:1616`).
- iiko/Clopos bloku "Antikafe haqqında bələdçilər" bloku ilə əvəz olunub (`guides/index.ts:43-47, 73-77`; `[slug].astro:247-259`).
- JSON-LD: antikafe planı üçün `Offer` əlavə olunub (32 AZN / 19 USD / 1600 RUB, `src/lib/seo.ts:194-215`). aggregateRating əlavə edilməyib, bu düzgündür, çünki real rəy yoxdur ([Software App](https://developers.google.com/search/docs/appearance/structured-data/software-app), [Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)).
- Funksiya iddiaları backend ilə yoxlanıb və təsdiqlənib (`Heselo/backend/app/services/live_billing.py`): `min_billable_minutes` sabit ilk saat verir, `billing_interval_minutes=1` dəqiqəlik hesablama verir, `max_base_price` stop-çek tavanıdır, `overtime_mode` və `included_products` paketlərdir.

### 3.3 Qalan problemlər

**P0**
1. **RU: tarif nümunəsi rublda absurddur.** Səhifədə "первый час 5 RUB, далее 0,08 RUB за минуту, стоп-чек 15 RUB в день" yazılıb. Səbəb: AZN rəqəmləri saxlanılıb, sadəcə `{currency}` RUB ilə əvəz olunur. Real antikafedə qiymət 3–8 ₽/dəqiqədir. Bu, RU bazarında etibarı birbaşa zədələyir. → `src/data/solutions/ru.ts:367`. Həll: RU üçün ayrıca rəqəm (məs. первый час 300 ₽, далее 4 ₽/мин, стоп-чек 900 ₽), ya da hər locale üçün ayrı nümunə dəyişənləri.
2. **RU: icarə bələdçisindəki nümunə də absurddur.** "постоянные 4 000 RUB/мес, средняя выручка с часа 4 RUB". → `src/data/guides/gapEducationalGuides.ts:1893`. Həll yuxarıdakı kimidir: RUB üçün real miqyas.

**P1**
3. "Günlük stop-çek" ifadəsi engine ilə uyğun gəlmir. Backend-də `max_base_price` **sessiya** üzrə tavandır, gün üzrə deyil; üstəlik əlavə qonaq haqqı tavana daxil deyil. → `az.ts:354, 444`; `en.ts:356, 446`; `ru.ts:367`. "Sessiya üzrə stop-çek (tavan)" yazın, ya da Aladdin gündəlik tavanın olub-olmadığını təsdiqləsin.
4. Antikafe bələdçiləri hələ də nazikdir və az link alır. Söz sayı: how-to-open-anticafe AZ 321 / EN 330, antikafe-management-system AZ 444. Hər bələdçiyə yalnız 2 daxili link gəlir. `dateModified` 2026-10-13-dür. → `src/data/guides/az.ts:390`, `en.ts:390`, `ruCisGuides.ts:1391`, `gapEducationalGuides.ts:1611`. ([Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [Links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable))
5. **"how-to-open-anticafe" bələdçisində xam slug görünür.** Mətndə "anticafe-rent-cost-calculation bələdçisinə baxın" yazılıb, FAQ cavabında da var: EN "Guide slug anticafe-rent-cost-calculation…". Bu mətn FAQPage JSON-LD-yə də düşür. Slug-ı linkli, təsviri anchor ilə əvəz edin, məsələn "antikafe tariflərini necə hesablamaq olar". → `src/data/guides/ruCisGuides.ts:1446, 1481, 1551, 1586, 1660, 1698`.
6. EN icarə bələdçisində AZN nümunəsi var ("4,000 AZN a month… 4 AZN"), halbuki səhifənin qalan hissəsi USD-dədir. → `gapEducationalGuides.ts:1786`.
7. GSC URL Inspection və "Request indexing" hələ edilməyib (məlumat yoxdur). Deploy-dan sonra AZ/EN/RU solution səhifələri və 3 bələdçi üçün bunu edin, üstəlik `npm run indexnow` işlədin ([Ask Google to recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Yandex IndexNow](https://yandex.com/support/webmaster/en/indexing-options/index-now)).

**P2**
8. Dəqiq sorğu "antikafe idarə etmə proqramı" görünən mətndə yoxdur, yalnız `keywords`-dədir (`az.ts:320`). Onu bir dəfə, təbii şəkildə, məsələn FAQ-da işlədin. Meta keywords Google üçün siqnal deyil.
9. EN title 69 simvoldur və kəsilə bilər (`en.ts:316`). Təklif: `Anticafe software — per-minute billing & cash | Heselo`.
10. Venue `Offer.description` ümumi mətndir ("planlar 25 AZN-dən"). `UnitPriceSpecification` (`billingDuration: P1M`) da yoxdur (`seo.ts:206`). [schema.org/Offer](https://schema.org/Offer)
11. Bələdçilərin Article sxemində `image` yoxdur (Google tövsiyə edir, məcburi deyil: [Article](https://developers.google.com/search/docs/appearance/structured-data/article)).
12. llms.txt-də bilyard üçün entity card var, antikafe üçün yoxdur (`src/pages/llms.txt.ts`). Google xüsusi AI faylı tələb etmir, ona görə prioriteti aşağıdır.
13. Saytdan kənar siqnallar (Instagram, Tap.az, real müştəri case-i) hələ yoxdur (plan P1-3).

---

## 4. Bilyard

### 4.1 Ballar

| Meyar | AZ | EN | RU | Qeyd |
|---|---|---|---|---|
| Texniki/indeksləmə (15) | 14 | 14 | 14 | 21 URL-in hamısı 200 qaytarır. Köhnə `-2026` slug 308 ilə yeni slug-a yönləndirilir (Google 308-i 301 kimi qəbul edir). Sitemap yenidir, köhnə slug sitemap-da yoxdur. llms.txt linkləri artıq tam URL-dir |
| On-page (15) | 10 | 10 | 12 | AZ H1 "idarəetmə **sistemi**"dir, title isə "proqramı". "bilyard klubu proqramı" mətndə 0 dəfə keçir. EN-də "billiards club software" 0 dəfə |
| Dərinlik (15) | 10 | 11 | 10 | Solution 990–1130 sözdür; antikafedə olan tərif, nümunə və limit bölmələri burada yoxdur. Alternativ bələdçilər 295–430 sözdür |
| Fakt/qiymət (20) | 17 | 17 | 17 | Bütün qiymətlər düzgündür: 29–59 AZN / 18–37 USD / 1420–2900 RUB. Rəqib iddiaları rəsmi saytlarla əsasən uyğundur. Kiçik qüsurlar aşağıda |
| Strukturlaşdırılmış data (10) | 8 | 8 | 8 | `Offer` 29 AZN / 18 USD / 1420 RUB. Article + Breadcrumb + FAQ səhvsiz parse olunur. Article `image` yoxdur |
| Daxili linklər (10) | 6 | 6 | 7 | Solution səhifəsi hourly-rates və bcms bələdçilərinə link vermir. BCMS bələdçisinə 2 link gəlir |
| AI-cavab hazırlığı (15) | 11 | 11 | 11 | Mənbə və yoxlama tarixi olan müqayisə var, llms.txt entity card var. Solution səhifəsində tərif + nümunə formatı yoxdur |
| **Cəmi** | **76** | **77** | **79** | |

### 4.2 Səhər yoxlamasındakı P0/P1 bəndlərinin statusu

| Köhnə bənd | Status | Sübut |
|---|---|---|
| P0-1 BilliardPOS və Biliardo.kz-də relye "yox" yazılması | **DÜZƏLİB** | `billiardsSoftwareComparisonGuide.ts:60/161/262`: "Bəli (ESP32 IP)", "Bəli (USB dəst)". Rəsmi saytlarla təsdiqlənir (billiardpos.net/en "Automatic Table Lights… ESP32 IP relay"; biliardo.kz "USB-контроллер на реле") |
| P0-2 RU "1420–59 AZN" | **DÜZƏLİB** | Canlı: "1420–2900 RUB" (`:265` → `{billiards}–{billiardsHigh} {currency}`) |
| P0-3 / NEW-1 EN "18 AZN" (bütün sayt) | **DÜZƏLİB** | EN səhifələrində "N AZN" qalmayıb: gaming, karaoke, lounge, reservations, pos, billiards və antikafe yoxlanıb. Qiymətlər /pricing ilə uyğundur |
| P0-4 printer / BCMS default login / CueDesk / Biliardo qiyməti / ClubSystem | **ƏSASƏN DÜZƏLİB** | Printer və "default login" iddiaları silinib. Real rəqəmlər yazılıb: BilliardPOS $39/$69/$99 (≤8/16/24 masa), Biliardo 1000/1500/2500 ₸, CueDesk "tək plan, 7 gün trial", BCMS "v1.3.0.0-dan abunə". Hamısı rəsmi səhifələrdə təsdiqlənir. Qalan kiçik qüsurlar aşağıda |
| P1-1 QR legend-in qalığı | **DÜZƏLİB** | Legend artıq yalnız "(işıq relye)" deyir (`:37/138/239`) |
| P1-2 "iiko, Clopos or Excel?" başlığı | **DÜZƏLİB** | Yeni başlıq "Bilyard proqramı müqayisə edirsiniz?" (`messages/*.ts` `altSeekingBilliardsTitle`, `[slug].astro:247`) |
| P1-3 AZ/RU rəqibləri | **QİSMƏN** | Mətndə Club Timer, SoftBilling, Smartbit, Paloma365 adları çəkilir (`:44/145/246`). Ayrı bələdçi yoxdur |
| P1-5 llms.txt 404 linkləri | **DÜZƏLİB** | `llms.txt.ts:69-70` tam locale URL-ləri verir, canlı 200 |
| P1-6 "Açıq qiymət" fərq kimi | **DÜZƏLİB** | "«Açıq qiymət» tək fərq deyil" (`:98/199/300`) |
| P2-7 slug-da il | **DÜZƏLİB** | 308 redirect + `astro.config.mjs` retiredPaths |
| P2-8 6 masa limiti | **DÜZƏLİB** | Müqayisə cədvəlində və solution mətnində qeyd olunub |
| P2-5 mock-larda AZN | **DÜZƏLİB** | EN-də US$, RU-da ₽ göstərilir |

### 4.3 Qalan problemlər

**P0**: yoxdur. Ciddi faktiki və ya qiymət səhvi qalmayıb.

**P1**
1. **"katalog API" texniki jarqonu istifadəçiyə görünür.** Məsələn: "ayda 29 AZN-dən başlayır (katalog API)". Bu, AZ/EN/RU solution səhifələrində və 6 bələdçidə var. → `src/data/solutions/az.ts:47`, `en.ts:47`, `ru.ts:47`; `billiardsSoftwareComparisonGuide.ts:37, 138, 239` ("bu saytın katalog API-sindən"); `billiardposAlternativeGuide.ts:51, 130, 209`; `cuedeskAlternativeGuide.ts:52, 140, 228`. "Qiymətlər səhifəsindəki cari tarif" yazın.
2. **AZ H1 sorğuya uyğun deyil.** H1 "Bilyard klubu idarəetmə sistemi"dir, title və əsas sorğu isə "bilyard klubu proqramı"dır, və bu ifadə mətndə 0 dəfə keçir. → `az.ts:30`. Təklif: H1 `Bilyard klubu proqramı və idarəetmə sistemi` (antikafedəki kimi). EN: H1 `Billiards club software` (`en.ts:30`); "pool hall software" ifadəsini də bir dəfə işlədin.
3. **Solution səhifəsi antikafe səviyyəsində deyil.** `sections` bloku yoxdur: tərif ("Bilyard proqramı nədir"), rəqəmli tarif nümunəsi (gecə/gündüz, pauza), "Heselo nəyi etmir" bölməsi (relye, QR, E-Kassa/ККТ). Antikafedəki 9 H2 bölmə strukturunu təkrarlayın. Hədəf 1300+ söz. → `az/en/ru.ts` billiards entry (`:28-`).
4. **BCMS dilləri səhv göstərilib.** Cədvəldə "Vendor-dan asılı" yazılıb, amma Microsoft Store 8 dili açıq siyahılayır: EN, DE, ZH, EL, ID, JA, TH, VI. Bunların arasında AZ və RU yoxdur. → `bcmsAlternativeGuide.ts:54, 118` (RU ekvivalenti də), `billiardsSoftwareComparisonGuide.ts:69/170/271`. Düzgün dəyər: "Xeyr (EN, DE, ZH… — Store)".
5. **CueDesk.** QR check-in rəsmi saytda açıq funksiya kimi göstərilir, ona görə "Tez-tez bəli" yox, sadəcə "Bəli" olmalıdır (`cuedeskAlternativeGuide.ts:59, 147, 235`). "Çoxmərkəzli şəbəkə / multi-site network" ifadəsi şişirdilib, çünki plan "Up to 2 branches" ilə məhduddur (`:45, 133, 221`, `:64, 152`).
6. Alternativ bələdçilər nazikdir: BCMS AZ 295, Biliardo 309, hourly-rates 349 söz. Ekran şəkli yoxdur. Bunları genişləndirin və ya müqayisə hub-ı ilə birləşdirin ([Spam policies: scaled content](https://developers.google.com/search/docs/essentials/spam-policies)).

**P2**
7. Solution səhifəsi `billiards-hourly-rates` və `bcms-alternative` bələdçilərinə link vermir (`guides/index.ts:37-42, 67-72`). Hourly-rates bələdçisinə cəmi 3 daxili link gəlir.
8. Müqayisə cədvəlində CueDesk və BCMS üçün işıq relyesi "Xeyr*" yazılıb. Bu təsdiqlənmiş fakt deyil, sadəcə saytlarında qeyd olunmayıb. "Açıq materialda yoxdur" yazmaq daha dürüstdür (`:60/161/262`).
9. Biliardo qiymət sətrində "3 masaya qədər pulsuz" qeydi yoxdur (`:67/168/269`). Bu məlumat intro-da var.
10. BilliardPOS dili "Vendor-dan asılı" yazılıb, halbuki saytda EN və ES hreflang var (`billiardposAlternativeGuide.ts:60, 139`).
11. Article `image` yoxdur (bütün bələdçilərdə). EN title 65 simvol, RU 63 simvoldur (bir az uzundur).
12. FAQPage rich result verməyəcək, çünki 2023-dən bu nəticə yalnız dövlət və səhiyyə saytlarında göstərilir ([Google 2023](https://developers.google.com/search/blog/2023/08/howto-faq-changes)). Markup-ı saxlayın, amma ondan nəticə gözləməyin.

---

## 5. Növbəti addımlar (sıra ilə)
1. RU antikafe nümunələrini rubla uyğunlaşdırın (`ru.ts:367`, `gapEducationalGuides.ts:1893`). Bu yeganə P0-dır.
2. Bilyard səhifələrindən "katalog API" jarqonunu, antikafe bələdçisindən isə xam slug-ları silin.
3. Bilyard AZ/EN H1-ni düzəldin və `sections` bloku əlavə edin (P1-2, P1-3).
4. Kiçik fakt düzəlişləri: "günlük stop-çek", BCMS dilləri, CueDesk QR/filial.
5. Deploy-dan sonra GSC URL Inspection → Request indexing, `npm run indexnow`, Yandex Webmaster reindex.
6. Bələdçiləri genişləndirib bir-birinə linkləyin. Saytdan kənar siqnallar (Instagram, Tap.az, case study).

Gözlənilən nəticə: 1–4 bəndlərindən sonra antikafe ~86, bilyard ~84 olar. Görünmək üçün isə əsas şərt indeksləmə və saytdan kənar siqnallardır.
