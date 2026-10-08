# Product Hunt launch playbook (Heselo)

Bu sənəd **kod deyil**. Agent PH draft / launch dolduranda **bu axını izlə**.

## Strategiya (realist)

- EN only — beynəlxalq backlink + brend.
- Launch günü trafik və bir neçə demo lead — PotD zəmanəti yox.
- Mesaj: **room-time** venues (gaming / karaoke / billiards / anti-café) — restaurant kitchen POS **deyil**.
- Affiliation açıq (maker = founder). Spam upvote / ödənişli hunter **yox**.

## Default qərarlar

| Sahə | Dəyər |
|------|--------|
| Dil | EN |
| Hunter | Özünüz (maker launch) |
| Pricing | Free demo + subscription (kart lazım deyil) |
| Launch | Əvvəl **draft** → **Schedule** (PST 00:01) — **Launch now** yalnız istifadəçi təsdiqi ilə |
| Assets | [docs/marketing-raw/producthunt/](./marketing-raw/producthunt/) |

## UTM

```
?utm_source=producthunt&utm_medium=referral&utm_campaign=heselo&utm_content={ph_launch_01|ph_profile|ph_social_announce}
```

| `utm_content` | Harada |
|---------------|--------|
| `ph_launch_01` | Product link (listing) |
| `ph_profile` | Maker / company website on PH profile |
| `ph_social_announce` | LinkedIn / FB launch announce (ayrı post) |

**Product link (copy-paste):**
```
https://heselo.online/en/?utm_source=producthunt&utm_medium=referral&utm_campaign=heselo&utm_content=ph_launch_01
```

**Maker profile website:**
```
https://heselo.online/en/?utm_source=producthunt&utm_medium=referral&utm_campaign=heselo&utm_content=ph_profile
```

---

## Listing copy (yapışdır)

### Name

```
Heselo
```

### Tagline (≤60 chars)

```
Room-time ops for gaming clubs, karaoke and anti-cafés
```

(58 chars.)

### Topics / categories (PH UI-də ən yaxınları seç)

Prioritet: **SaaS**, **Productivity**, **Tech**, mümkün olduqda **Restaurants & Bars** / **Small Business** (yalnız UI təklif edirsə — mətbəx POS kimi təqdim etmə).

Kateqoriya sərhədi: otaq-vaxt paneli; KDS / recipes / kitchen **yox**.

### Short description (≤260 chars — UI limitinə uyğun qısalt)

```
Web panel for venues that sell room and station time: PlayStation clubs, karaoke, billiards and anti-cafés. Bookings, live floor sessions and cash shifts — not a restaurant kitchen POS. Free demo, AZ/EN/RU.
```

### Full description

```
Heselo is venue software for entertainment spots that sell time — PlayStation / console clubs, karaoke rooms, billiards halls, anti-cafés and VIP room lounges.

The problem we see in Baku and similar markets: bookings live in WhatsApp, the floor is a notebook, and end-of-shift cash never matches sessions. Restaurant POS (kitchen tickets, KDS, recipes) does not map cleanly to “Room 2 until 22:40, extend 30 min.”

What Heselo does:
• Book rooms, stations and tables
• Run live floor sessions (start, extend, settle)
• Cash shift for the club floor
• Inventory and basic stock
• Customers, staff permissions and statistics
• Languages: Azerbaijani, English, Russian

Who it is for:
Venues whose main product is room or table time.

Who it is not for:
A full restaurant kitchen stack. If you need KDS, recipes and dining-room service, keep a restaurant POS (iiko / Clopos class). If you need booking + live sessions + floor cash for clubs, Heselo is the lighter option.

Pricing:
Subscription from about 25 AZN/month depending on venue type. Free demo via the site — no card required.

Try it: heselo.online
```

---

## Maker first comment (launch anında)

```
Hey Product Hunt 👋

I’m Aladdin, founder of Heselo.

We build a web panel for venues that sell *room/station time* — gaming clubs, karaoke rooms, billiards and anti-cafés — not a restaurant kitchen POS.

Happy to answer:
• How room-time ops differs from iiko/Clopos-style POS
• Pricing / free demo (no card)
• What we ship next (AZ/EN/RU already live)

Demo: https://heselo.online/en/?utm_source=producthunt&utm_medium=referral&utm_campaign=heselo&utm_content=ph_launch_01

Thanks for checking us out — upvote if the problem resonates, and drop questions below.
```

### Reply templates (3)

**1 — POS fərqi**
```
Great question. Kitchen POS shines with tickets, KDS and recipes. Gaming / karaoke / anti-cafés usually sell timed rooms or stations — so you need booking + live sessions + floor cash that matches the shift. Many clubs keep WhatsApp + notebooks beside a restaurant POS. Heselo is the room-time side of that stack, not a kitchen replacement.
```

**2 — Pricing**
```
Plans are subscription-based (from about 25 AZN/mo depending on venue type and capacity). Free demo through the site contact form / WhatsApp — no card required to try.
```

**3 — Trial / how to start**
```
Open heselo.online → request a demo. We walk through booking, live floor and cash for your venue type (PS club, karaoke, billiards, anti-café or lounge). AZ, EN and RU UI are available.
```

---

## Assets

Qovluq: `docs/marketing-raw/producthunt/`

| Fayl | Rol | Ölçü hədəfi |
|------|-----|-------------|
| `thumbnail-240x240.png` | Listing **icon** (PH ~240×240) | 240×240 |
| `thumbnail-1270x760.png` | Geniş sosial / gallery fallback | ~1270×760 |
| `gallery-01-schedule.png` | Booking / cədvəl | 1270×760 |
| `gallery-02-live-floor.png` | Live floor | |
| `gallery-03-cash.png` | Cash / shift | |
| `gallery-04-sessions.png` | Sessions | |
| `gallery-05-room-analytics.png` | Analytics (opsional 5-ci) | |

Brauzer file-upload avtomatlaşdırıla bilməyəndə: PH-də **Select an image** ilə əl ilə bu qovluqdan seçin. Bu mərhələdə GIF/video **yox**.

---

## Brauzer icra checklist

### Draft (launch-dan əvvəl)

1. [x] producthunt.com — maker hesabı login
2. [x] Maker profile website → `utm_content=ph_profile`
3. [x] Submit a product → Name, tagline, descriptions, topics
4. [x] Product link → `ph_launch_01` UTM
5. [x] Thumbnail + 3–5 gallery upload (əl ilə Select an image mümkün olduqda; assets: `docs/marketing-raw/producthunt/`)
6. [x] **Schedule** PST midnight — **Thu Oct 1, 2026** (PT)
7. [x] **Launch now** istifadə edilmədi (yalnız schedule)

### Launch day

1. [x] Listing canlı — URL: https://www.producthunt.com/products/heselo?launch=heselo (Oct 1 PT)
2. [x] Maker **first comment** (prelaunch checklist ✓ — room-time vs POS stub; tam şablon yuxarıda cavablar üçün)
3. [ ] 4–6 saat: kommentlərə cavab (3 şablon + uyğunlaşdır) — **maker Sign in lazımdır** (agent brauzerdə logged out; 2026-10-08 yoxlama)
4. [ ] LinkedIn/FB-də 1 announce (`utm_content=ph_social_announce`) — spam upvote çağırışı yox
5. [x] [social-posts-log.md](./social-posts-log.md) → `ph_launch_01` + PH URL + Launched
6. [x] Product link UTM yoxlandı (2026-10-08): `utm_source=producthunt&utm_medium=referral&utm_campaign=heselo&utm_content=ph_launch_01`

### Launch-gün qadağalar

- Fake / purchased upvotes
- Eyni cavabı 20 şəxsə spam
- Kitchen POS iddiası
- Demo linkində UTM unutmaq

---

## Uğur (1 həftə)

- PH views / upvotes qeyd
- Analytics: `utm_source=producthunt` sessions + demo sorğuları
- Hədəf: **1+ ciddi demo lead**; PotD əsas KPI deyil

---

## Post-launch ölçmə (GA4)

Launch sonrası 7g-də: çox sessiya Direct-ə düşə bilər; PH referral qısa eng (~5s) tipikdir. Kod tərəfi: first-touch UTM + EN form-first hero + funnel events.

### GA4 Admin checklist

1. [ ] Events → `generate_lead` → **Mark as key event**
2. [ ] (opsional) Explorations: Session source/medium × `generate_lead` / `cta_click` / `pricing_select`
3. [ ] Filter / compare: `utm_source=producthunt` vs Direct vs `google / organic`

### Hadisələr (sayt)

| Event | Məna |
|-------|------|
| `generate_lead` | WhatsApp klik və ya contact form success — **əsas KPI** |
| `cta_click` | `/contact` link klik (hero, header, footer, …) |
| `pricing_select` | Pricing plan → contact |

Event params: `placement`, `method` / `plan`, plus `utm_source|medium|campaign|content` (first-touch `sessionStorage`).

### Organic amplify (PH-dən güclü keyfiyyət)

7g GA: `google / organic` ən yaxşı eng (~80%, ~41s). Növbəti böyümə: guide/SEO publish — sosial bounce chase yox.

1. [ ] Competitor alternative guide-ları **deploy** (live URL-lər)
2. [ ] Deploy sonrası **IndexNow** (submit publish-dən əvvəl olubsa yenidən)
3. [ ] GSC: yeni `/guides/…` URL-ləri Coverage / URL Inspection

## Əlaqəli sənədlər

- [off-site-seo-az.md](./off-site-seo-az.md) — Prioritet 1 kataloqlar
- [alternativeto-form-fill.md](./alternativeto-form-fill.md) — EN təsvir / pricing eyni məntiq
- [quora-playbook.md](./quora-playbook.md) — kateqoriya sərhədi (otaq-vaxt vs mətbəx)
- [social-posts-log.md](./social-posts-log.md) — `ph_launch_01` jurnalı + sosial UTM hygiene

Son yeniləmə: 2026-10-08
