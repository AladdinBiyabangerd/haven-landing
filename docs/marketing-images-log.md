# Marketing şəkillər jurnalı (Heselo) — chaos→order

Bu sənəd **kod deyil**. Məqsəd: product marketing vizuallarını eyni promptla təkrarlamamaq; stil etalonunu və statusu saxlamaq.

**Stil etalon:** prompt tipi **2** — sol chaos → teal particle keçid → sağda device + sadələşdirilmiş İngilis UI.

**Referans kompozisiya:** `docs/marketing-raw/live-floor-ref.jpg` (istifadəçi bəyəndi; overlay typo-lu draft). Sayt üçün təmiz variant: `docs/marketing-raw/live-floor-clean.png`.

---

## Agent qaydası

1. İstifadəçi **marketing şəkil / prompt** istəyəndə əvvəl **bu faylı oxu**.
2. Statusu `Hazır` və ya `Saytda` olan shot üçün **eyni promptu yenidən vermə** (istəsə variant / regenerasiya — jurnalda yeni sətir).
3. Növbəti iş üçün cədvəldən ilk `Pending` sətiri götür; aşağıdakı **unique prompt** blokunu ver (master + negative ilə).
4. Generate / export bitəndən sonra: cədvəl statusunu yenilə + **İstifadə jurnalı**na 1 sətir əlavə et.
5. Sayta qoyanda: **WebP primary** — `public/images/product/{id}.webp` + `{id}@2x.webp`. Export: `fit: contain`, quality ~88. (Bütün 8 shot marketing WebP-only.)
6. **Canlılıq:** tablet/laptop **fotoreal** olmalıdır (schedule 1-ci variant kimi). Qələmlə çəkilmiş / flat illustration / plastik CGI yox — `schedule-alt-v2-light.jpg` səviyyəsi qəbul edilmir.

---

## Master style (sabit)

- Kompozisiya: **chaos (sol) → particle disintegration (mərkəz) → order on tablet/laptop (sağ)**
- Rənglər: teal `#0F766E` / `#14B8A6`, mist `#EEF3F6`, ink `#152033`, white cards
- UI: **English only**, stylized/simplified (dense admin table yox)
- Mood: premium B2B SaaS campaign still (Stripe/Linear key visual), **not** a flat product screenshot
- Aspect: **16:10** (sayt ~1256×788)
- **Device (vacib):** real iPad/laptop kimi — metal/glass reflection, sharp screen, shallow DOF, cinematic product photography. Referans: `docs/marketing-raw/schedule-final.jpg` (1-ci, canlı). Anti-referans: `schedule-alt-v2-light.jpg` (quru / illustration hissi)
- Chaos tərəfi kağız/sticky ola bilər; **device həmişə canlı fotoreal** qalır
- **No** large serif marketing headline overlay on the image (landing artıq headline göstərir)
- **No** purple, neon cyberpunk, dark-mode glow spam, kitchen POS / KDS / food

### Shared negative (hər prompta)

```
flat UI screenshot, dense data table, spreadsheet look, large serif headline overlay, misspelled text, Azerbaijani or Russian UI text, purple gradients, neon cyberpunk, kitchen POS, food tickets, crowded faces, watermark, low-res illegible UI, cartoon, cluttered composition, pen illustration, hand-drawn look, sketch, vector flat art, plastic toy CGI, dollhouse render, matte lifeless device, chalk drawing, storybook style, over-smoothed 3D, clipart
```

### Master skeleton (chaos + UI dəyişir)

```
Photoreal cinematic marketing still for Heselo venue software (product photography, not illustration). Split-depth chaos-to-order composition: left side [CHAOS], dissolving into a cloud of fine teal digital particles flowing right; right side a real physical tablet or laptop on a club reception desk — sharp glass screen reflections, believable materials, shallow depth of field — showing a clean English "[SCREEN_TITLE]" UI — [UI_DETAIL]. Teal accents #0F766E / #14B8A6, no purple, no people faces, no large headline text overlaid on the image, 16:10, alive and photographic like a real device photo, magazine ad quality, marketing key visual not documentation screenshot and not a pen-drawn or flat illustrated scene.
```
---

## Shot cədvəli

| id | Chaos angle (unique) | Order UI on device | Status |
|----|----------------------|--------------------|--------|
| live-floor | sticky notes + WhatsApp booking bubbles | Live floor room cards (Active) | Saytda (user-fixed v2 final) |
| schedule | calendar scribbles / double-booked chats | Schedule grid | Saytda |
| sessions | stopwatch notes / “extend?” chats | Session detail / timers | Saytda |
| cash | cash scraps / “who paid?” chats | Cash shift / report | Saytda |
| inventory | stock count paper / “out of X” chats | Inventory list | Saytda |
| products | messy menu price stickers | Product catalog | Saytda |
| room-analytics | gut-feel “Room 2 busy?” chats | Room analytics chart | Saytda |
| audit | “who changed this?” blame chats | Audit log | Saytda |

---

## Unique prompts

### live-floor — Saytda (referans + təmiz)

**Draft (bəyənildi, overlay typo-lu — sayta yox):** chaos sticky + WhatsApp → Live floor cards. Fayl: `docs/marketing-raw/live-floor-ref.jpg`.

**Təmiz regenerate (sayt üçün) — overlay yox:**

```
Aspirational marketing still for Heselo venue software. Split-depth chaos-to-order composition: left side softly blurred wall of sticky notes and floating WhatsApp-style chat bubbles about room bookings, dissolving into a cloud of fine teal digital particles flowing right; right side crystal-clear teal-lit club reception desk with a tablet showing a clean English "Live floor" board — simple room cards (Room 1–5) with teal Active status, minimal sidebar icons. Soft mist background #EEF3F6, teal accents #0F766E / #14B8A6 only, no purple, no people faces, no large headline or subhead text overlaid on the image, no misspellings, 16:10 hero banner, cinematic lighting, magazine ad quality, marketing key visual not documentation screenshot.
```

Negative: shared block yuxarıda.

---

### schedule — Saytda

**Seçilən (canlılıq etalonu):** DOUBLE BOOKED wall + fotoreal tablet (1-ci). Fayl: `docs/marketing-raw/schedule-final.jpg`.

**Alt (seçilmədi — çox “çəkilmiş” / illustration):** `docs/marketing-raw/schedule-alt-v2-light.jpg` — bundan sonra belə stil vermə.

---

### sessions — Saytda

**Seçilən:** fotoreal tablet + stopwatches / “extend 30 min?”. Fayl: `docs/marketing-raw/sessions-final.jpg`.

---

### cash — Saytda

**Seçilən:** fotoreal tablet + cash/receipt chaos → Cash shift view. Fayl: `docs/marketing-raw/cash-final.jpg`.

---

### inventory — Saytda

**Seçilən:** clipboard chaos → Inventory tablet. Fayl: `docs/marketing-raw/inventory-final.jpg`.

---

### products — Saytda

**Seçilən:** price scrap chaos → Products catalog tablet. Fayl: `docs/marketing-raw/products-final.jpg`.

---

### room-analytics — Saytda

**Seçilən:** sticky “Room 2 busy?” → analytics charts tablet. Fayl: `docs/marketing-raw/room-analytics-final.jpg`.

---

### audit — Saytda

**Seçilən:** notebooks + blame chats → Audit log tablet (WebP-only). Fayl: `docs/marketing-raw/audit-final.jpg`.

---

## İstifadə jurnalı

| Tarix | Shot id | Generator | Qeyd | Fayl |
|-------|---------|-----------|------|------|
| 2026-09-18 | live-floor | (user) | Draft bəyənildi; overlay typo — sayta yox | `docs/marketing-raw/live-floor-ref.jpg` |
| 2026-09-18 | live-floor | Cursor GenerateImage | Overlay-siz təmiz (ref əsasında); 1256×788 / 2512×1576 export | `docs/marketing-raw/live-floor-clean.png` → `public/images/product/live-floor{.png,.webp,@2x.*}` |
| 2026-09-18 | live-floor | (user) | A/B: dark campaign “From chaos to live clarity” — müqayisə üçün sayta qoyuldu; v1 raw saxlanıb | `docs/marketing-raw/live-floor-v2.jpg` → `public/images/product/live-floor*` (v1: `live-floor-clean.png`) |
| 2026-09-18 | live-floor | (user) | User-fixed final; contain export (kəsilməsin) | `docs/marketing-raw/live-floor-v2-final.png` → `public/images/product/live-floor*` |
| 2026-09-18 | schedule | (user) | 1-ci variant (DOUBLE BOOKED wall) — sayta; 2-ci alt kimi saxlanmayıb (overwrite) | `docs/marketing-raw/schedule-final.jpg` → `public/images/product/schedule*` |
| 2026-09-18 | sessions | (user) | Fotoreal session timer tablet + extend chaos | `docs/marketing-raw/sessions-final.jpg` → `public/images/product/sessions*` |
| 2026-09-18 | cash | (user) | Cash/receipt chaos → Cash shift tablet | `docs/marketing-raw/cash-final.jpg` → `public/images/product/cash*` |
| 2026-09-18 | inventory | (user) | Clipboard stock chaos → Inventory tablet | `docs/marketing-raw/inventory-final.jpg` → `public/images/product/inventory*` |
| 2026-09-18 | products | (user) | Price scraps → Products catalog tablet | `docs/marketing-raw/products-final.jpg` → `public/images/product/products*` |
| 2026-09-18 | room-analytics | (user) | Sticky gut-feel → Room analytics tablet | `docs/marketing-raw/room-analytics-final.jpg` → `public/images/product/room-analytics*` |
| 2026-09-18 | (marketing) | — | Bütün fotoreal shot-lar WebP-only; ProductShot img → `.webp` | `ProductShot.astro` |
| 2026-09-18 | audit | (user) | Blame notebooks → Audit log tablet; WebP-only (köhnə UI PNG silindi) | `docs/marketing-raw/audit-final.jpg` → `public/images/product/audit*.webp` |
| 2026-09-18 | og-image | (user) | Satış OG: WhatsApp lost booking → Live floor; köhnə minimal backup | `docs/marketing-raw/og-image-final.jpg` → `public/og-image.png` (old: `og-image-old.png`) |
