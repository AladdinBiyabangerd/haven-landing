# Quora playbook (Heselo)

Bu sənəd **kod deyil**. Agent Quora-da profil və cavab yazanda **bu axını izlə**.

## Strategiya

- Reklam postu yox — mövcud suallara **faydalı cavab**.
- Dil: **EN əsas** + **AZ** (lokal klub / POS sualları).
- Affiliation açıq: “I work on Heselo” / “Heselo-da işləyirəm”.
- Restoran mətbəxi POS iddiası **yox** — otaq-vaxt (rezervasiya + canlı sessiya + kassa).

## Profil (copy-paste)

**Credential / headline (EN):**
```
Building Heselo — venue software for gaming clubs, karaoke & anti-cafés
```

**Credential (AZ, bio-da da ola bilər):**
```
Heselo — oyun klubu, karaoke və antikafe üçün məkan paneli
```

**About:**
```
I build Heselo (heselo.online) — web software for venues that sell room/table time: PlayStation clubs, karaoke rooms, billiards, anti-cafés and lounges.

Booking, live floor sessions, cash shifts and inventory in one panel. Not a restaurant kitchen POS.

AZ / EN / RU. Demo: heselo.online
```

**Website:**
```
https://heselo.online/en/?utm_source=quora&utm_medium=referral&utm_campaign=heselo&utm_content=profile
```

**Topics to follow (mümkün olduqca):** Booking Systems, Point of Sale, Small Business, Karaoke, Gaming, Azerbaijan, Software as a Service, Entrepreneurship.

## UTM

```
?utm_source=quora&utm_medium=referral&utm_campaign=heselo&utm_content={profile|quora_answer_NN}
```

- Profil: `utm_content=profile`
- Cavablar: `quora_answer_01`, `quora_answer_02`…

## Cavab strukturu

1. Problemi 1–2 cümlə ilə tanı.
2. Nə lazımdır (3–5 madde).
3. Nə vaxt restoran POS / nə vaxt klub paneli (dürüst).
4. Qısa Heselo mention + affiliation + link.

## Seed cavab şablonları

### EN — gaming club software (`quora_answer_01`)

```
Most PlayStation / console clubs don’t need a full restaurant POS. They need timed bookings, live sessions (start / extend / settle), and a simple cash shift for the floor.

What usually breaks with WhatsApp + notebooks:
• Double-booked rooms/stations
• Unclear “who is on which station now”
• End-of-shift cash that doesn’t match

If you have a kitchen + table service, keep a restaurant POS. If your product is room or station time, look for venue/session software instead.

I work on Heselo — a web panel for gaming clubs, karaoke, billiards and anti-cafés (booking + live floor + cash). Demo: https://heselo.online/en/?utm_source=quora&utm_medium=referral&utm_campaign=heselo&utm_content=quora_answer_01
```

### EN — karaoke / room booking (əvvəlki seed; post `quora_answer_02` internet cafe sualına uyğunlaşdırılıb)

Karaoke / otaq bron şablonu üçün aşağıdakı **Nöqtə atışı** B/C mətnlərindən uyğunlaşdır.

### AZ seed (lazım olanda)

AZ PS/karaoke/iiko — əvvəlki `quora_post_az_01` + lazım olsa yeni `quora_answer_06+` AZ cavabları.

## Agent qaydaları

1. Eyni mətni 10 suala yapışdırma — suala uyğunlaşdır.
2. Növbəti dalğa: nöqtə atışı **A + B + C** (EN); tapılmayan sualda ən yaxın mövcud suala uyğunlaşdır və ya mənalı sual aç.
3. **Comment-də link yox** — Quora sonra silir / spam sayır. Demo: cavabın sonunda qısa `heselo.online` (UTM-siz) və ya yalnız profil website.
4. Cavabda uzun UTM URL yapışdırma — qısa domain kifayətdir.
5. Paylaşılandan sonra [social-posts-log.md](./social-posts-log.md) — 1 sətir + mətn.
6. Link yalnız `heselo.online` (qısa); saxta rəy / saxta “müştəri” persona yox.

## Nöqtə atışı ssenarilər (POS vs otaq-vaxt)

Kiçik biznes sahibləri restoran POS ilə vaxt idarəetməni qarışdırır. Bu 3 axtarış + cavab oxu — **reklam yox**, case/ops izahı.

| # | Axtarış (EN) | Cavab oxu | `utm_content` |
|---|--------------|-----------|---------------|
| A | Best POS software for a gaming lounge? | Ağır POS vs time panel | `quora_answer_03` |
| B | How to track time-based billing for anti-cafes? | Saatla oturmaq → sessiya + kassa | `quora_answer_04` |
| C | Alternative to iiko for entertainment venues | iiko/Clopos = mətbəx; klub = otaq-vaxt | `quora_answer_05` |

**Cavab ssenarisi (məntiq, dil suala uyğun):**  
iiko və Clopos kimi sistemlər mətbəx (KDS) üçün əladır; otaq / PlayStation vaxtı satırsınızsa, ağır POS yox, sadə time-management paneli lazımdır. Biz Bakıda bu problemi həll etmək üçün Heselo qurduq… (affiliation açıq; demo: `heselo.online` — **comment-də link yox**).

### A — gaming lounge POS (`quora_answer_03`)

```
“Best POS for a gaming lounge” usually means one of two jobs — don’t mix them.

Restaurant POS (iiko / Clopos class) shines with kitchen tickets, KDS, recipes and dining-room service.
A gaming lounge’s core product is usually timed stations or rooms: who booked, who is playing now, when the session ends, how to extend, and whether the shift cash matches.

What breaks when you force a kitchen POS onto room-time:
• Bookings live in WhatsApp while “POS” only takes payment
• No clear live floor (which PS / room is running)
• End-of-shift totals that don’t match sessions

If you run a real kitchen, keep a restaurant POS for food. For station/room time, use a lighter booking + live session + floor cash panel.

Disclosure: I build Heselo in Baku for gaming clubs, karaoke, billiards and anti-cafés — room-time ops, not a kitchen stack.
```

### B — anti-café time billing (`quora_answer_04`)

```
Anti-cafés bill by time (per minute / hour / open session), not by a classic restaurant check flow.

You need:
• Start / pause / end sessions tied to a table or guest
• Live view of who is still on the clock
• Transparent price as time accrues
• Shift cash that matches sessions (not only “sold items”)

A full restaurant POS can ring up drinks, but time-based seating is a different model. Many venues end up with notebooks + stopwatches + WhatsApp — that scales poorly.

We built Heselo in Baku for venues that sell time (anti-cafés, PS clubs, karaoke rooms): live sessions + booking + floor cash in one web panel. Not a kitchen POS.
```

### C — iiko alternative for entertainment (`quora_answer_05`)

```
Looking for an “iiko alternative” for an entertainment venue? First split the problem.

iiko (and Clopos-class tools) are excellent when the venue is food-first: kitchen, KDS, recipes, hall service.
Entertainment venues (PS clubs, karaoke, billiards, anti-cafés) often sell room or station time. Kitchen POS doesn’t map cleanly to “Room 2 until 22:40, extend 30 min” — so teams fall back to WhatsApp + notebooks.

Ask: is your main product food service, or timed rooms/stations?
• Food-first → stay in restaurant POS class.
• Time-first → booking + live sessions + floor cash is the right class.

Disclosure: I work on Heselo — we built it in Baku for room-time entertainment venues (AZ/EN/RU). Honest alternative only when you don’t need a full kitchen stack. Demo: heselo.online
```

**Comment:** boş saxla və ya linksiz qısa qeyd (məs. “Happy to clarify ops fit.”). **URL yazma** — Quora comment linklərini sonra silir.

## Axtarış sorğuları (brauzer)

EN: `Best POS software for a gaming lounge`, `How to track time-based billing for anti-cafes`, `Alternative to iiko for entertainment venues`, `gaming club management software`, `karaoke room booking system`, `PlayStation cafe software`, `iiko alternative`, `Clopos alternative`, `anti cafe booking`

AZ: `oyun klubu proqramı`, `karaoke rezervasiya`, `ps klub proqram`, `iiko alternativ`, `antikafe proqram`

### AZ seed cavablar (2026-09-30)

- `quora_post_az_02` — PS/oyun POS  
- `quora_post_az_03` — antikafe saatla ödəniş  
- `quora_answer_06` — karaoke otağı rezervasiyası (AZ sual + cavab)

Son yeniləmə: 2026-09-30
