# Content Strategiyası — Keyword Gap & Expansion (AZ)

**Status:** Implemented (2026-09-23) — see ship notes below.  
**Parent:** [`seo-keyword-growth-plan.md`](./seo-keyword-growth-plan.md) → **Phase C3–C5**  
**Kod bazası:** guides/solutions = `src/data/*` (content collection yox); müqayisə = guide (`/guides/{slug}/`), ayrı `/compare/` yoxdur.

**Qaydalar (dəyişmir):**

1. Hər intent → **bir qalib URL** (cannibalization yox).
2. Solution = satış (“proqram al”); guide = “nədir / necə / seçim / alternativ”.
3. AZ primary; eyni slug az/en/ru eyni PR-də.
4. Doorway yox — nazik klon səhifə yox.
5. FAQ görünən blok + `seo.faq` JSON-LD **eyni massiv**.

---

## İndi nə örtülür (gap konteksti)

| Qat | Live |
|-----|------|
| Solutions | 8 (`gaming`…`inventory`) |
| Educational guides | 9 + `club-pos-vs-excel` |
| Comparison guides | 12 (`comparisonGuides.ts`) + Excel |
| FAQ | Hər solution/guide-da var, amma çoxunda **2–4** sual (hədəf: **5–8**) |

Bu sənəd **yeni** long-tail + **yeni** rəqib + FAQ dərinləşməni planlaşdırır. Mövcud C0/C1 səhifələri təkrar yazılmır — yalnız link və FAQ genişlənməsi.

---

## A. Yeni Guide mövzuları (AZ keyword → URL)

### A0 — Intent → qərər matrisası

| # | Keyword (verilmiş) | Intent | Qərər | Qalib URL | Mövcud yaxın səhifə (toxunma / link) |
|---|--------------------|--------|-------|-----------|-------------------------------------|
| A1 | playstation klubu necə açılır | informational (how-to business) | **YENİ guide** | `/guides/how-to-open-playstation-club/` | `playstation-club-software` = proqram seçimi; `solutions/gaming` = satış |
| A2 | klub üçün POS terminal seçimi | commercial investigation | **YENİ guide** | `/guides/club-pos-terminal-selection/` | `affordable-club-pos`, `solutions/pos`, `club-pos-vs-excel` — fərqli: **hardware/terminal seçimi**, panel deyil |
| A3 | oyun salonu avtomatlaşdırma *(orijinal: oyny)* | informational | **YENİ guide** *(və ya A1 altına merge — aşağıda)* | `/guides/game-hall-automation/` | `gaming-club-management` = “nədir”; bu = proses avtomatlaşdırma |
| A4 | bilyard stolunu onlayn bron etmək | transactional | **YENİ URL yox** — mövcud guide **cila** | `/guides/billiards-table-booking/` | `solutions/billiards` = məhsul; guide H1/meta “onlayn bron” intentini gücləndir |
| A5 | karaoke klubu biznes planı | informational | **YENİ guide** | `/guides/karaoke-club-business-plan/` | `karaoke-room-booking` / `karaoke-booking-system` = ops/seçim |
| A6 | antikafe menzil haqqı hesablama | commercial | **YENİ guide** | `/guides/anticafe-rent-cost-calculation/` | `antikafe-management-system` = sistem; bu = icarə/unit economics |
| A7 | lounge bar idarəetmə proqramı | commercial | **YENİ URL yox** — solution **cila** | `/solutions/lounge/` | Guide `room-lounge-management` informational qalır; “proqram” qalibi = solution |
| A8 | klub proqramı pulsuz sınaq | transactional | **YENİ URL yox** — pricing + contact | `/pricing/` + FAQ; soft guide yalnız ehtiyac olsa | `heselo-pricing`, `/contact/` |

**Merge seçimi (təsdiq lazımdır):** A3 (`oyun salonu avtomatlaşdırma`) A1 ilə çox yaxındırsa, A3-ü ayrı slug etmə — A1-də “avtomatlaşdırma” bölməsi + keywords. Default plan: **ayrı slug**, amma H1-lər fərqli olmalıdır (açılış vs günlük avtomatlaşdırma).

---

### A1 — `how-to-open-playstation-club`

| Sahə | Dəyər |
|------|--------|
| Slug | `how-to-open-playstation-club` |
| Tip | Educational (əl ilə `guides/{az,en,ru}.ts`) |
| Primar AZ | playstation klubu necə açılır |
| Secondary | PS klub açmaq, oyun klubu biznesi Bakı, konsol klub lisenziya |
| H1 (AZ istiqamət) | PlayStation klubu necə açılır? Addım-addım |
| seoTitle | PlayStation klubu necə açılır — addım-addım bələdçi \| Heselo |
| relatedSolutions | `gaming`, `pos`, `inventory`, `reservations` |
| relatedGuides | `playstation-club-software`, `club-pos-vs-excel`, `affordable-club-pos` |

**Kontent outline (AZ → en/ru eyni struktur):**

1. Kim üçündür / kim üçün deyil  
2. Yer, icarə, otaq planı (stansiya sayı)  
3. Avadanlıq (konsol, TV, oturacaq) — Heselo satmır, siyahı  
4. Hüquqi / vergi (ümumi, hüquqi məsləhət deyil)  
5. Gündəlik iş: bron → sessiya → kassa  
6. Proqram nə vaxt lazımdır (soft CTA → gaming + pricing)  
7. İlk 30 gün checklist  

**FAQ (6–7):** lisenziya, minimum stansiya, yalnız PS vs PC, WhatsApp ilə başlamaq, qiymət, demo.

**Kod toxunuşu:**

- `GUIDE_SLUGS` + `guides/{az,en,ru}.ts`
- `SOLUTION_GUIDE_MAP` / teaser (opsional): gaming → bu guide secondary
- `SEO_CONTENT_PLAN.educational`
- Hub keywords-ə “playstation klubu açmaq” əlavə etmə (şişirtmə yox — title kifayət)

---

### A2 — `club-pos-terminal-selection`

| Sahə | Dəyər |
|------|--------|
| Slug | `club-pos-terminal-selection` |
| Tip | Educational / commercial |
| Primar AZ | klub üçün POS terminal seçimi |
| Secondary | POS terminal Bakı, klub kassa terminalı, kartla ödəniş klub |
| H1 | Klub üçün POS terminal seçərkən nəyə baxmaq lazımdır? |
| relatedSolutions | `pos`, `gaming`, `karaoke` |
| relatedGuides | `affordable-club-pos`, `club-pos-vs-excel`, `iiko-alternative-clubs` |

**Outline:**

1. Terminal ≠ paneldəki kassa proqramı (aydın fərq)  
2. Klub ssenarisi: saat/otaq vs restoran check  
3. Seçim meyarları: offline, printer, vergi kassası (AZ ümumi), Wi‑Fi  
4. Heselo ilə necə birləşir (soft: panel vs hardware)  
5. Kiçik klub üçün minimum set  

**Cannibalization:** `solutions/pos` H1 “Kassa idarəetmə sistemi” qalır — bu guide “terminal/hardware seçimi”.

---

### A3 — `game-hall-automation`

| Sahə | Dəyər |
|------|--------|
| Slug | `game-hall-automation` |
| Primar AZ | oyun salonu avtomatlaşdırma |
| H1 | Oyun salonu avtomatlaşdırma: bron, sessiya, kassa |
| relatedSolutions | `gaming`, `reservations`, `pos` |
| relatedGuides | `gaming-club-management`, `how-to-open-playstation-club`, `playstation-club-software` |

**Outline:** əl prosesləri → avtomatlaşdırılacaq 4 axın (bron, taymer, ödəniş, növbə) → alətlər (WhatsApp/Excel vs panel) → nəticə metrikləri.

**Qeyd:** A1 ilə eyni PR-də yox — A1 live + 14 gün GSC sonra A3 (və ya A1 merge qərarı).

---

### A4 — `billiards-table-booking` (cila, yeni slug yox)

| İş | Detal |
|----|--------|
| Meta/H1 | “Bilyard stolunu onlayn bron etmək” fraza intro + seoDescription-da təbii |
| Bölmə | “Onlayn bron necə işləyir (müştəri + resepsiya)” |
| FAQ +2 | Onlayn vs telefon; depozit; eyni gün bron |
| Link | → `/solutions/billiards/` + `/solutions/reservations/` |

Doorway: ayrıca `online-billiards-booking` **yaratma**.

---

### A5 — `karaoke-club-business-plan`

| Sahə | Dəyər |
|------|--------|
| Slug | `karaoke-club-business-plan` |
| Primar AZ | karaoke klubu biznes planı |
| H1 | Karaoke klubu biznes planı: otaq, xərc, gəlir modeli |
| relatedSolutions | `karaoke`, `pos`, `inventory` |
| relatedGuides | `karaoke-room-booking`, `karaoke-booking-system` |

**Outline:** bazar/mövqe, otaq sayı & tarifi, xərc kateqoriyaları, gəlir fərziyyələri (nümunə, zəmanət yox), ops stack (bron/kassa), risklər, soft CTA.

---

### A6 — `anticafe-rent-cost-calculation`

| Sahə | Dəyər |
|------|--------|
| Slug | `anticafe-rent-cost-calculation` |
| Primar AZ | antikafe menzil haqqı hesablama |
| Secondary | antikafe icarə, antikafe rentabellik, saatla ödəniş kalkulyasiya |
| H1 | Antikafe menzil / icarə haqqını necə hesab etmək olar? |
| relatedSolutions | `antikafe`, `pos` |
| relatedGuides | `antikafe-management-system` |

**Outline:** icarə + kommunal + işçi; saatla gəlir modeli; break-even sadə formula; proqramın rolu (vaxt/kassa dəqiqliyi). **Hüquqi/maliyyə məsləhəti disclaimer.**

---

### A7 — Lounge “proqram” (cila)

| Fayl | İş |
|------|-----|
| `solutions/{az,en,ru}.ts` → `lounge` | seoTitle/desc/keywords: “lounge bar idarəetmə proqramı”, “launj bar proqramı” təbii |
| `room-lounge-management` | H1 informational qalır; 1 paraqraf “proqram axtarırsınızsa → solution” |
| FAQ lounge solution | + “Lounge bar üçün ayrıca proqram lazımdırmı?” |

Yeni slug **yox**.

---

### A8 — Pulsuz sınaq (cila)

| Yer | İş |
|-----|-----|
| `/pricing/` FAQ | “Pulsuz sınaq / demo varmı?” (varsa möhkəmləndir) |
| Home + contact | CTA dili “pulsuz demo / sınaq” |
| `heselo-pricing` guide | 1 FAQ: klub proqramı pulsuz sınaq → contact |
| Opsional sonrakı | `free-club-software-trial` yalnız GSC-də bu sorğu ayrı klaster kimi böyüyərsə |

---

### A — Implementasiya dalğaları

| Dalğa | Scope | Təxmini PR |
|-------|--------|------------|
| **C3a** | A1 + A5 (PS açılış + karaoke biznes planı) | 1 PR, 2 educational guide |
| **C3b** | A2 + A6 (POS terminal + antikafe icarə) | 1 PR |
| **C3c** | A4 + A7 + A8 cila (yeni URL yox) | 1 kiçik PR |
| **C3d** | A3 (oyun salonu avtomatlaşdırma) — A1-dən sonra | 1 PR və ya A1 merge |

Hər educational guide ship checklist: parent plandakı C checklist + FAQ **≥5**.

---

## B. Comparison genişləndirmə

Mövcud pattern: `comparisonGuides.ts` + `GUIDE_SLUGS` + `COMPARISON_GUIDE_SLUGS` + `RELATED_COMPARISON` + `SOLUTION_ALT_GUIDES`.

### B0 — Keyword → slug

| # | Keyword | Slug | Kind (template) | Qeyd |
|---|---------|------|-----------------|------|
| B1 | fazilat pos alternativi | `fazilat-pos-alternative` | `restaurant` və ya `club-pos` | Araşdırma: Fazilat POS nəyi örtür (mətbəx vs ümumi) |
| B2 | smartpos alternativi | `smartpos-alternative` | `restaurant` / `club-pos` | Brend adı dəqiq yazılsın (SmartPOS / Smart Pos) |
| B3 | kassa az alternativi | `kassa-az-alternative` | `club-pos` | **Diqqət:** Heselo-da “kassa” = feature. Title: “Kassa.az alternativi” / brend adı; H1-də `solutions/pos` ilə eyni kök olmasın |
| B4 | baza market alternativi | `baza-market-alternative` | `restaurant` | Baza Market = marketplace? Əgər POS deyilsə, kind `appointments` və ya xüsusi copy |
| B5 | yerli POS sistemləri müqayisəsi | `azerbaijan-pos-systems-comparison` | kateqoriya (yeni `kind: 'local-az'` və ya əl yazısı) | Tək rəqib yox — cədvəl: iiko, Clopos, Dine, Fazilat, SmartPOS, Heselo (dürüst sütunlar) |

### B1–B4 — Standart comparison entry

Hər biri üçün `comparisonGuides.ts` entry:

```text
slug, name (display), kind, relatedSolutions[],
copy az/en/ru: shortTitle, h1, seoTitle, seoDescription, intro angle
```

Template artıq FAQ (~4) generasiya edir → **C5-də 5–8-ə çıxar** (template `faq()` genişləndir və ya entry override).

**Dürüstlük qaydası (C0 ilə eyni):**

- Heselo mətbəx/KDS/restoran zalı deyil.
- Rəqib güclüdirsə (mətbəx) — yaz.
- Trademark: “alternativ / müqayisə”; böhtan yox.

**Daxili link:**

| Comparison | relatedSolutions | RELATED_COMPARISON qonşuları |
|------------|------------------|------------------------------|
| fazilat | pos, karaoke, gaming | iiko, clopos, affordable-club-pos |
| smartpos | pos, gaming | minupos, dine, iiko |
| kassa-az | pos, inventory | club-pos-vs-excel, affordable-club-pos |
| baza-market | reservations, karaoke | kaktus, dine (əgər booking oxşardırsa) |

### B5 — `azerbaijan-pos-systems-comparison`

Bu **template-dən çıxa bilər** — əl ilə `guides/{az,en,ru}.ts` + `COMPARISON_GUIDE_SLUGS`, və ya `comparisonGuides` içində `kind: 'local-az'` + xüsusi sections.

**Outline:**

1. Kim üçün müqayisə (otaq-vaxt klub vs restoran)  
2. Cədvəl: funksiya × sistem (bron otaq, sessiya, KDS, anbar, qiymət şəffaflığı)  
3. Nə vaxt restoran POS; nə vaxt klub paneli  
4. Soft CTA → Heselo + digər comparison guides  

Hub: `guidesHub*.comparisonIntro` — “yerli POS müqayisəsi” bir dəfə.

### B — Araşdırma checklist (koddan əvvəl)

Hər rəqib üçün 30–60 dəq:

- [ ] Rəsmi sayt / App Store adı  
- [ ] Əsas müştəri tipi (restoran, retail, klub)  
- [ ] AZ bazarda görünürmü  
- [ ] 3 dürüst “onlar yaxşıdır” + 3 “klub ağrısı”  
- [ ] Qiymət açıqdırmı (yoxdursa “sorğu ilə”)

Əgər brend tapılmırsa / əlaqəsizdirsə → siyahıdan çıxar, GSC-də görünən əvəzlə (Club Timer, Akinsoft — `geo-ai-prompts-az.md`).

### B — Dalğalar

| Dalğa | Scope |
|-------|--------|
| **C4a** | B1 + B2 (Fazilat, SmartPOS) — araşdırma hazır olanda |
| **C4b** | B3 + B4 (Kassa.az, Baza Market) |
| **C4c** | B5 kateqoriya müqayisə (daha ağır copy) |

`SEO_CONTENT_PLAN.comparison` + hub SEO keywords (mötədil) yenilə.

---

## C. FAQ bölmələri (Featured Snippet)

### C0 — Audиt (indi)

| Səhifə tipi | Tipik FAQ sayı | Hədəf |
|-------------|----------------|-------|
| Solutions (8) | 2–3 | **5–8** |
| Educational guides | 3–4 | **5–8** |
| Comparison (template) | ~4 | **5–8** |
| Home / pricing / about | ayrıca | Snippet üçün cilala; bu phase-in ikinci dərəcəli |

JSON-LD: `seoMeta` → `input.faq` → `FAQPage`. UI: `Faq.astro`. **Eyni array.**

### C1 — FAQ yazı qaydaları (snippet)

1. Sual = insanlar necə axtarır (“X nədir?”, “X necə işləyir?”, “X qiyməti?”).  
2. Cavab **40–60 söz** ilk 2 cümlədə birbaşa; sonra 1 cümlə dəqiqləşdirmə.  
3. Cavabda yalnız həqiqət; qiymət rəqəmləri `/pricing` ilə sync.  
4. Hər səhifədə **1 demo CTA sualı** kifayət (hamısı eyni “Demo necə?” klonu olmasın — variantlar).  
5. Guide FAQ ≠ solution FAQ (informational vs product).  
6. az / en / ru eyni say və eyni intent.

### C2 — Solution FAQ şablon mövzuları (hər venue/feature)

Hər solution üçün mövcud 2–3 saxla, əlavə et:

| # | Mövzu nümunəsi |
|---|----------------|
| 1 | Bu sistem kim üçündür / kim üçün deyil |
| 2 | WhatsApp/Excel ilə fərq |
| 3 | Qiymət haradadır / approximate |
| 4 | Digər venue tipi eyni paneldə? |
| 5 | Qurulum / demo müddəti |
| 6 | (Venue-specific) otaq vs masa / stansiya |
| 7 | (Opsional) anbar və ya ödəniş |
| 8 | (Opsional) iiko/Clopos ilə nə vaxt qalmaq |

**Primar fayllar:** `src/data/solutions/{az,en,ru}.ts` — `faq` massivi; `[slug].astro` artıq `seo.faq` ötürür.

### C3 — Guide FAQ

Educational: how-to / cost / “lazımdırmı” sualları.  
Comparison: “X-i atmaq lazımdırmı?”, “Heselo mətbəx əvəzidimidir?”, “Keçid necə?”.

**Template:** `comparisonGuides.ts` → `localeLabels.faq()` — 5–8 suala çıxar (bütün comparison-lara təsir edir → bir PR-də regressiya yoxla).

### C4 — Featured snippet prioritet səhifələr

İlk növbədə dərinləşdir (GSC/AI üçün dəyərli):

1. `/solutions/gaming|karaoke|billiards|antikafe|lounge/`  
2. `/guides/heselo-pricing/`  
3. `/guides/iiko-alternative-clubs/`, `clopos-alternative`, `club-pos-vs-excel`  
4. Yeni C3a guides (A1, A5) — doğulanda artıq 6+ FAQ  

### C — Dalğa

| Dalğa | Scope |
|-------|--------|
| **C5a** | 8 solution × 3 dil FAQ 5–8 |
| **C5b** | 9 educational + Excel + pricing guide FAQ |
| **C5c** | `comparisonGuides` template FAQ 5–8 (+ override lazım olanlar) |

C5a C3/C4 ilə eyni PR-də qarışdırılmasın — diff oxunaqlı qalsın (parent plan: phase qarışdırma).

---

## Ümumi icra sırası (tövsiyə)

```text
0. Rəqib araşdırması (B1–B4) — 0.5–1 gün, kod yox
1. C5a — Solution FAQ (sürətli snippet qazancı, yeni URL yox)
2. C3c — A4/A7/A8 cila (yeni URL yox)
3. C3a — A1 + A5 yeni guides
4. C4a — Fazilat + SmartPOS comparisons
5. C3b — A2 + A6
6. C4b — Kassa.az + Baza Market
7. C5b + C5c — Guide/comparison FAQ
8. C4c — Yerli POS müqayisə
9. C3d — A3 (və ya A1 merge qərarı)
```

Hər deploy-dan sonra: **7–14 gün GSC** (Queries + Pages); parent plandakı uğur meyarları.

---

## Kod / fayl xəritəsi (implementasiya zamanı)

| İş | Fayllar |
|----|---------|
| Yeni educational guide | `guides/types.ts` (`GUIDE_SLUGS`), `guides/{az,en,ru}.ts`, `guides/index.ts` (maps), `seoContentPlan.ts` |
| Yeni comparison | + `COMPARISON_GUIDE_SLUGS`, `comparisonGuides.ts`, `RELATED_COMPARISON`, `SOLUTION_ALT_GUIDES` |
| Solution cila / FAQ | `solutions/{az,en,ru}.ts` |
| Pricing / home FAQ | `i18n/messages/{az,en,ru}.ts` |
| Sitemap | avtomatik (`GUIDE_SLUGS`) |
| Astro səhifə | **yeni fayl lazım deyil** (`[slug].astro`) |

---

## Uğur meyarları (28–60 gün)

| Metrik | Hədəf |
|--------|--------|
| Yeni guide URL Indexed (3 dil) | C3a/C3b shipped olanların ≥90%-i |
| Unique AZ queries | + long-tail (aşağıdakı klasterlərdən ≥5) |
| FAQ rich result | Search Console → Enhancements (mövcudsa) xəta 0 |
| Cannibalization | Eyni primar keyword üçün 2 URL top-10-da yarışmır |

**İzləniləcək klaster nümunələri:** playstation klubu açmaq; karaoke biznes planı; POS terminal; antikafe icarə; fazilat/smartpos alternativ; yerli POS müqayisə.

---

## Açıq qərarlar (implementasiyadan əvvəl təsdiq)

1. **A3** ayrı guide, yoxsa A1 bölməsi?  
2. **B3** brend dəqiq adı: `Kassa.az` / digər?  
3. **B4** Baza Market həqiqətən POS/rəqibdir, yoxsa çıxarılmalıdır?  
4. **B5** əl yazısı vs yeni `kind`?  
5. FAQ cavab uzunluğu: qısa snippet (40–60 söz) vs daha izahlı (indiki üslub)?

---

## Nə etməmək

- Hər keyword üçün nazik səhifə  
- “Kassa” feature səhifəsi ilə `kassa-az-alternative` H1 toqquşması  
- A4 üçün ikinci bilyard bron URL  
- A7 üçün ikinci lounge solution  
- Saxta rəqib faktları / qiymət uydurmaq  
- Yalnız AZ yazıb en/ru boş buraxmaq  

---

## Ship notes (2026-09-23)

| Dalğa | Status | Nə ship olundu |
|-------|--------|----------------|
| C5a | Done | 8 solution FAQ → 6–7 (az/en/ru) |
| C3c | Done | Bilyard onlayn bron cila; lounge bar SEO; pricing pulsuz sınaq FAQ |
| C3a–d | Done | 5 educational: `how-to-open-playstation-club`, `club-pos-terminal-selection`, `game-hall-automation`, `karaoke-club-business-plan`, `anticafe-rent-cost-calculation` (`gapEducationalGuides.ts`) |
| C4a–c | Done | 5 comparison: Fazilat, SmartPOS, Kassa.az, Baza Market, yerli POS müqayisə |
| C5b | Done | Mövcud educational FAQ → ≥5 |
| C5c | Done | Comparison template FAQ → 7 (+ `club-pos` cavab budağı) |

**Açıq qərarlar (default):** A3 ayrı guide; B3 `Kassa.az`; B4 ehtiyatlı copy (məhsul faktı yoxlanılmalıdır); B5 catalog entry.

**Post-deploy:** GSC Request indexing yeni `/az/guides/…` URL-lər; 14 gün unique query izlə.

Son yeniləmə: 2026-09-23 (implemented)
