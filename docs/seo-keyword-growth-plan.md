# Heselo — keyword / GSC böyümə planı

Şəxsi saytdakı Phase A–E modelinin **məhsul saytına** uyğunlaşdırılması. Məqsəd: `heselo.online` üçün axtarış sorğu səthini (unique queries + impressions) artırıb, sonra klik və demo.

**Baseline (GSC, 11 Avq – 5 Sent 2026):** ~14 impression, **0 klik**. Sorğular: `heselo` (9), qalanı 1-lik EN long-tail (`gaming club software`, `billiards booking system`, …).

**İcra qaydası:** bir phase → deploy → **7–14 gün GSC** → növbəti. Eyni PR-də A+C+D qarışdırma.

---

## İndi nə var (təkrar etmə)

| Qat | Status |
|-----|--------|
| Hub-lar | home, features, solutions, guides, pricing, contact |
| Həll səhifələri | gaming, karaoke, billiards, antikafe, lounge, reservations, pos, inventory |
| Bələdçilər | 5 guide (hər əsas venue tipi) |
| Texniki SEO | sitemap, hreflang, JSON-LD, `llms.txt`, 3 dil |
| Off-site checklist | `docs/off-site-seo-az.md` (icra gözləyir) |

Çatışmayan: **sorğu səthi dar**, brend zəif, daxili link funnel zəif ölçülür, GSC-də AZ sorğusu demək olar ki, yoxdur.

---

## Keyword → URL xəritəsi (cannibalization yox)

Hər intent **bir qalib URL**. Title/H1 eyni əsas fraza üçün yarışmasın.

### AZ (əsas bazar)

| Intent | Qalib URL | Tip |
|--------|-----------|-----|
| Ümumi məkan idarəetmə / rezervasiya+kassa | `/az/` | home |
| Funksiya siyahısı | `/az/features/` | hub |
| Venue hub | `/az/solutions/` | hub |
| Oyun / PS / konsol klub proqramı | `/az/solutions/gaming/` | solution |
| Karaoke otaq rezervasiya (satış) | `/az/solutions/karaoke/` | solution |
| Bilyard klubu proqramı | `/az/solutions/billiards/` | solution |
| Antikafe proqramı | `/az/solutions/antikafe/` | solution |
| Otaqlı launj | `/az/solutions/lounge/` | solution |
| Masa/otaq rezervasiya sistemi | `/az/solutions/reservations/` | solution |
| Kassa / anbar | `/az/solutions/pos/`, `…/inventory/` | solution |
| “Nədir / necə işləyir” (informational) | `/az/guides/…` | guide |
| Qiymət | `/az/pricing/` | pricing |
| Demo | `/az/contact/` | contact |
| Brend `heselo` | `/az/` (canonical) | brand |

### EN (GSC artıq toxunur)

| Intent | Qalib URL |
|--------|-----------|
| `gaming club software` / `gaming management` | `/en/solutions/gaming/` |
| `console club` / PS club | `/en/solutions/gaming/` (+ guide dəstək) |
| `billiards booking system` / `billiards scheduling` | `/en/solutions/billiards/` |
| `karaoke room booking` | `/en/solutions/karaoke/` |
| What-is educational | `/en/guides/…` |

### RU

Eyni slug-lar; Phase RU-da CIS dili (yalnız `ru` copy), AZ/EN title kökünə toxunma.

---

## Phase sırası

| Phase | Ad | Məqsəd | Kod riski | Gözlənilən GSC effekti |
|-------|-----|--------|-----------|-------------------------|
| **0** | Baseline + indeks | Ölçmə düzgün olsun | Ops | Coverage görünür |
| **A** | Keyword cila | Mövcud URL-lərdə title/desc/H1 intent | Aşağı (copy) | Unique query ↑, mövqe |
| **B** | Daxili link | Guide → solution → contact | Aşağı | Pages impressiya yayılır |
| **C** | Guide genişlənmə | Yeni long-tail məqalələr | Orta | **Əsas keyword artımı** |
| **D** | Yeni solution (seçimli) | Yalnız unik intent | Orta | 1–2 yeni qalib URL |
| **E** | Off-site + brend | Kataloq, GBP, sosial, UTM | Ops | `heselo` klik, referral |
| **RU** | RU cila track | CIS/remote dil | Aşağı | `/ru` sorğuları |

Şəxsi sayt paraleli: A≈keyword, B≈internal links, C≈writing, D≈yeni landings, E≈distribution.

---

## Phase 0 — Baseline (3 gün, ops)

1. GSC: ölkə **Azerbaijan** / **All**, dil filtri ayrı; Pages + Queries export (CSV saxla).
2. Coverage: Indexed vs Not indexed sayı.
3. Sitemap submit yenilə; yüksək dəyərli URL-lərə Request indexing:
   - `/az/`, `/az/solutions/gaming|karaoke|billiards/`, 2–3 guide
4. Analytics açıq olsun (Plausible və ya GA4) — path + UTM.
5. Portfolio ↔ Heselo: `aladdinbiyabangerd.site/az/work/heselo` canonical live + `heselo.online` backlink.

**Keçid:** Indexed ≥ əsas hub-lar; CSV baseline saxlanıb.

---

## Phase A — Keyword cila (kod, ~1 PR)

**Yeni səhifə yox.** UI layout yox.

### A1 — AZ-first (prioritet)

| Səhifə | Nə cilalanır |
|--------|----------------|
| Home | `seo.home` title/desc — Bakı/AZ klub dili, stuffing yox |
| Solutions hub + 5 venue | `seoTitle` / `seoDescription` / H1 — bir-birindən fərqli qalib fraza |
| Features, pricing, contact | Meta: funksiya / qiymət / demo intent ayrılıqda |
| Guides hub + 5 guide | Informational title (“nədir/necə”) — solution title ilə eyni kök olmasın |

Fayllar: `src/i18n/messages/az.ts`, `src/data/solutions/az.ts`, `src/data/guides/az.ts`.

### A2 — EN (GSC-də görünən sorğular)

Mövcud EN title/desc içində bu fraza **təbii** yerləşsin (meta + intro 1 cümlə), ayrı doorway yox:

- `billiards booking` / `scheduling` → billiards solution
- `gaming club software` / `gaming management` → gaming solution
- `console` / PlayStation club → gaming solution + gaming guide

Fayllar: `src/data/solutions/en.ts`, `src/data/guides/en.ts`, lazım olsa `messages/en.ts` home/solutions.

### Checklər

- Hər locale-də eyni slug üçün title unik
- Solution vs guide: satış vs “nədir” ayrılığı
- `keywords` mass array şişirdilmir — Google ignore edir; fokus title/H1/ilk paraqraf
- Diff: yalnız copy faylları

**Uğur (14 gün):** unique queries ≥ 15–25; AZ sorğusu görünməyə başlayır; klik hələ 0–5 ola bilər.

---

## Phase B — Daxili link + funnel

Şəxsi saytdakı footer/capability deep-link kimi.

| # | İş |
|---|-----|
| 1 | Hər guide sonunda **1 qalib solution** + contact CTA (artıq qismən var — yoxla, boş olanları tamamla) |
| 2 | Hər solution → related guide + digər 1–2 solution (related block) |
| 3 | Home audiences kartları → doğru `/solutions/{slug}/` (locale-aware) |
| 4 | Guides hub ↔ solutions hub qarşılıqlı link |
| 5 | Footer: solutions / guides / pricing / contact (3 dil) |

**Toxunulmur:** Phase A title kökü (yenidən yazma).

**Uğur:** GSC Pages-də yalnız home yox, `/solutions/*` və `/guides/*` impressiya payı ↑.

---

## Phase C — Guide genişlənmə (əsas keyword motoru)

Şəxsi saytdakı `/writing` artımı = burada `/guides`. Hər məqalə **bir sorğu klasteri**, unik body (doorway yox), AZ+EN+RU eyni PR.

### C1 — İlk dalğa (4–6 məqalə, 2–3 həftə)

GSC + məhsul boşluqlarından:

| Slug (təklif) | Primar intent | Daxili link |
|---------------|---------------|-------------|
| `playstation-club-software` | PS / PlayStation klub proqramı | → gaming |
| `console-club-management` | console club / konsol klub | → gaming |
| `billiards-table-booking` | billiards booking / masa bronu | → billiards |
| `billiards-scheduling-system` | scheduling (EN GSC) — və ya C1-də billiards guide genişləndirmə | → billiards |
| `karaoke-booking-system` | karaoke booking system (satışdan fərqli “necə seçilir”) | → karaoke |
| `club-pos-vs-excel` | Excel/WhatsApp vs panel (pain intent) | → home / pos |

Qayda: **solution “proqram al”**, guide “necə işləyir / nə seçmək”**. Eyni H1 yox.

### C2 — İkinci dalğa (sorğu datasına görə)

Yalnız Phase A–C1-dən sonra GSC-də çıxan impressiya > 0 olan klasterlər:

- antikafe saatla ödəniş
- otaq launj bron
- növbə bağlanışı / kassa sayımı
- “rezervasiya sistemi Bakı” (lokal)

### Ship checklist (hər guide)

1. `src/data/guides/{az,en,ru}.ts` + `GUIDE_SLUGS`
2. `datePublished` real; sitemap `lastmod`
3. FAQ 3–5 (uyğunsa FAQ schema artıq pattern)
4. Related solution link
5. Doorway test: səhifəni oxuyanda digər guide-ın klonu deyil

**Uğur (30–45 gün C1-dən):** unique queries **50+**; guide URL-ləri GSC Pages-də; ilk qeyri-brend kliklər.

---

## Phase D — Yeni solution (yalnız lazım olsa)

Yeni URL **yalnız** mövcud 8 solution + guides klasteri örtə bilməyəndə.

Namizədlər (indilik gözlə):

| Namizəd | Şərt |
|---------|------|
| `playstation` ayrıca slug | gaming səhifəsi “PS” intent-i itirirsə |
| `pc-club` | PC klub sorğusu GSC-də ayrılırsa |
| Deep feature: `live-floor` | `seoContentPlan` qeydi — demand görünəndə |

**Default:** D yox, C davam.

---

## Phase E — Off-site + brend (paralel, həftəlik)

Koddan asılı deyil; `docs/off-site-seo-az.md` + satış.

Həftəlik minimum:

1. GBP (və ya Bing Places) — NAP eyni
2. 1 kataloq (AlternativeTo / Product Hunt / AZ biznes)
3. 1 LinkedIn və ya Instagram post → `heselo.online/az/solutions/…` UTM
4. Portfolio case + Heselo qarşılıqlı link yoxlanışı
5. WhatsApp outreach (`docs/month-1-sales-az.md`) — SEO-nu gözləmə

**Uğur:** `heselo` impressiya ↑ və **ilk brend klikləri**; referral > 0.

---

## Phase RU (AZ/EN qorunur)

Şəxsi sayt `phase-ru-overview` kimi:

1. Yalnız `ru.ts` / `guides/ru.ts` / `solutions/ru.ts` copy cila
2. CIS intent: не только «Баку» — клуб / бильярд / караоке / антикафе
3. Paylaşımda bəzən `/ru/` URL
4. Diff check: `az`/`en` 0 sətir

Sıra: RU meta → RU guide intro → distribution.

---

## 90 günlük hədəf (realist)

| Metrik | İndi | 30 gün | 90 gün |
|--------|------|--------|--------|
| Unique queries (28g) | ~6 | 20–40 | 60–120 |
| Impressions (28g) | ~14 | 80–300 | 400–1500 |
| Clicks (28g) | 0 | 3–15 | 20–60 |
| Indexed URL (3 dil) | ~əsas set | eyni + C1 guides | +C2 |
| Brend `heselo` klik | 0 | 1–5 | sabit |

Satış hələ də outreach-dən gəlir; SEO demo dəstəyidir.

---

## Nə etməmək

- 1 impression-lu sorğuya görə mass title rewrite
- Hər keyword üçün ayrı nazik səhifə (doorway)
- Solution və guide-da eyni H1
- Keywords meta tag-ı şişirtmək (siqnal deyil)
- Phase C-ni A/B-dən əvvəl (zəif linkli yeni URL)
- Saxta rəy / PBN

---

## Bu həftə (konkret start)

1. **Phase 0** — GSC CSV + indexing (sən)
2. **Phase A1** — AZ meta/H1 cila PR (agent)
3. **Phase A2** — EN billiards/gaming GSC fraza uyğunluğu (eyni və ya +1 PR)
4. **Phase E** — 2 off-site addım paralel
5. C1 slug siyahısını təsdiqlə → növbəti sprint

---

## İcra statusu

| Phase | Status | Qeyd |
|-------|--------|------|
| 0 | İstifadəçi | Index URL siyahısı verilib |
| A | Done (2026-09-07) | AZ/EN/RU meta + gaming/billiards intent; guide↔solution ayrılığı |
| B | Done (qismən) | Footer/hub linklər artıq var; gaming `related` → karaoke əlavə |
| C1 | Done (2026-09-07) | 4 guide: playstation-club-software, billiards-table-booking, karaoke-booking-system, club-pos-vs-excel |
| C2+ | Gözləyir | GSC impressiya > 0 olan klasterlər |

Son yeniləmə: 2026-09-07
