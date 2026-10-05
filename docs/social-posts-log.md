# Sosial post jurnalı (Heselo)

Bu sənəd **kod deyil**. Məqsəd: artıq paylaşılan Facebook / LinkedIn (və digər) mətnləri qeyd etmək ki, agent **eyni mətni təkrar verməsin**.

## Agent qaydası

1. Yeni post yazmazdan əvvəl bu faylı oxu.
2. `Paylaşıldı` statuslu mətnləri **yenidən vermə**.
3. Yeni post: eyni ideya olsa belə — **başqa açı**, başqa hook, yeni `utm_content` (`…_post_02`, `_03`…).
4. Paylaşılandan sonra: bu cədvələ 1 sətir + mətn bloku əlavə et.
5. **TikTok privacy:** agent default **Only me** paylaşır (`Everyone` yox). İstifadəçi sonra açıq edir. Mövcud `tiktok_post_T01`-ə toxunma.
6. **TikTok icra axını:** [tiktok-post-playbook.md](./tiktok-post-playbook.md) — Photos + səs + Only you + comment (bio). Hashtag **8–12 niche**. Bio: `?utm_source=tiktok`.
7. **Quora:** [quora-playbook.md](./quora-playbook.md) — profil + faydalı cavablar (AZ/EN); spam reklam yox; **comment-də link yazma** (Quora silir).
8. **Product Hunt:** [producthunt-playbook.md](./producthunt-playbook.md) — EN listing + maker first comment; UTM `ph_launch_01` / `ph_profile`; spam upvote yox. Launch sonrası bu cədvələ `ph_launch_01` sətri.

**UTM şablonu:**  
`?utm_source={facebook|linkedin|instagram|tiktok|quora|producthunt}&utm_medium={organic_social|referral}&utm_campaign=heselo&utm_content={channel}_post_NN|quora_answer_NN|ph_launch_01|ph_profile`

---

## Jurnal

| Tarix | Kanal | `utm_content` | Açı / mövzu | Format | Status |
|-------|--------|---------------|-------------|--------|--------|
| 2026-09-29 | TikTok | `tiktok_post_T01b` | Eyni vizual + For You səs (`wlyxxn1`); privacy Only me | photo | Paylaşıldı · Only me |
| 2026-09-29 | TikTok | `tiktok_post_T01` | Gecə növbəsi — 3 telefon → canlı zal | video 10s (şəkildən) | Paylaşıldı · Everyone · [video](https://www.tiktok.com/@heselo.online/video/7690888611595554068) |
| 2026-09-18 | Facebook | `facebook_post_01` | Kateqoriya: PS/karaoke — WhatsApp+dəftər vs Heselo panel; mətbəx POS deyil | şəkil | Paylaşıldı |
| 2026-09-18 | LinkedIn | `linkedin_post_01` | Insight: otaq-vaxt məkanlara ümumi POS artıqdır; Heselo = rezervasiya+canlı+kassa | şəkil | Paylaşıldı |
| 2026-09-20 | FB / IG / LI | `*_post_02` | Cümə axşamı növbəsi — WhatsApp vs canlı zal | şəkil | Paylaşıldı |
| 2026-09-20 | FB / IG / LI | `*_post_03` | Yalnız PlayStation / oyun klubu | şəkil | Paylaşıldı |
| 2026-09-22 | FB / IG / LI | `*_post_04` | Karaoke otağı — bron → sessiya | video | Paylaşıldı |
| 2026-09-24 | FB / IG / LI | `*_post_05` | Kassa bağlanışı — “kim nə ödədi?” | şəkil | Paylaşıldı |
| 2026-09-24 | FB / IG / LI | `*_post_06` | Excel+dəftər vs panel (soft) | şəkil | Paylaşıldı |
| 2026-09-30 | FB / IG / LI | `*_post_10` | Antikafe — saatla oturmaq | şəkil | Paylaşıldı |
| 2026-09-30 | Quora | `quora_answer_01` | EN: best software for Xbox/PS cafe — otaq-vaxt vs restoran POS + Heselo | cavab | Paylaşıldı · [answer](https://www.quora.com/What-is-the-best-software-solution-to-manage-an-Xbox-PlayStation-cafe/answer/Aladdin-Biyabangerd) |
| 2026-09-30 | Quora | `quora_answer_02` | EN: best software internet cafe — PC cafe vs PS/karaoke otaq-vaxt + Heselo | cavab | Paylaşıldı · [answer](https://www.quora.com/What-is-the-best-software-to-manage-an-internet-cafe/answer/Aladdin-Biyabangerd) |
| 2026-09-30 | Quora | `quora_answer_03` | EN nöqtə atışı A: POS for entertainment centers — kitchen POS vs room-time + Heselo | cavab | Paylaşıldı · [answer](https://www.quora.com/Is-POS-system-software-necessary-for-newly-established-entertainment-centers/answer/Aladdin-Biyabangerd) |
| 2026-09-30 | Quora | `quora_answer_05` | EN nöqtə atışı C: FEC venue software — iiko/POS alt vs time-first + Heselo | cavab | Paylaşıldı · [answer](https://www.quora.com/What-is-the-best-venue-management-software-for-family-entertainment-centers-FECs/answer/Aladdin-Biyabangerd) |
| 2026-09-30 | Quora | `quora_post_en_04` | EN nöqtə atışı B: anti-café time-based billing + Heselo (Bakı) | post | Paylaşıldı · [post](https://www.quora.com/profile/Aladdin-Biyabangerd/How-do-you-track-time-based-billing-in-an-anti-caf%C3%A9-Anti-caf%C3%A9s-bill-by-time-per-minute-hour-open-session-not-by) |
| 2026-09-30 | Quora | `quora_post_az_01` | AZ post: Bakı PS/karaoke WhatsApp+dəftər vs otaq-vaxt panel + Heselo | post | Paylaşıldı · [post](https://www.quora.com/profile/Aladdin-Biyabangerd/Bak%C4%B1da-PS-v%C9%99-karaoke-klublar%C4%B1n-%C3%A7oxu-rezervasiyan%C4%B1-WhatsApp-da-n%C3%B6vb%C9%99ni-d%C9%99ft%C9%99rd%C9%99-saxlay%C4%B1r-N%C9%99tic%C9%99-eyni-olur-otaq-stansi) |
| 2026-09-30 | Quora | `quora_post_az_02` | AZ post: Oyun klubu/PS kafe hansı POS — mətbəx vs otaq-vaxt | post | Paylaşıldı · [post](https://www.quora.com/profile/Aladdin-Biyabangerd/Oyun-klubu-PS-kafe-%C3%BC%C3%A7%C3%BCn-hans%C4%B1-POS-laz%C4%B1md%C4%B1r-%C3%87ox-vaxt-iki-i%C5%9F-qar%C4%B1%C5%9F%C4%B1r-Restoran-POS-iiko-Clopos-sinfi-m%C9%99tb%C9%99x-KDS) |
| 2026-09-30 | Quora | `quora_post_az_03` | AZ post: Antikafedə saatla ödəniş — sessiya + kassa | post | Paylaşıldı · [post](https://www.quora.com/profile/Aladdin-Biyabangerd/Antikafed%C9%99-saatla-%C3%B6d%C9%99ni%C5%9Fi-nec%C9%99-izl%C9%99m%C9%99k-olar-Antikafe-d%C9%99qiq%C9%99-saat-v%C9%99-ya-a%C3%A7%C4%B1q-sessiya-il%C9%99-i%C5%9Fl%C9%99yir-klassik-restoran-%C3%A7ek) |
| 2026-09-30 | Quora | `quora_answer_06` | AZ sual+cavab: Karaoke otağı rezervasiyası — hansı proqram | cavab | Paylaşıldı · [answer](https://www.quora.com/Karaoke-ota%C4%9F%C4%B1-rezervasiyas%C4%B1-%C3%BC%C3%A7%C3%BCn-hans%C4%B1-proqram-laz%C4%B1md%C4%B1r/answer/Aladdin-Biyabangerd) |
| 2026-09-30 | Quora | `profile` | Profil bio AZ+EN; credential **Founder at Heselo** (default) | profil | Yeniləndi · [profile](https://www.quora.com/profile/Aladdin-Biyabangerd) |
| 2026-09-30 | Product Hunt | `ph_launch_01` | EN launch — room-time ops (gaming/karaoke/anti-café); maker first comment; scheduled Oct 1 PT midnight | listing | Scheduled · [product](https://www.producthunt.com/products/heselo) · [launch](https://www.producthunt.com/products/heselo?launch=heselo) · prelaunch OK · playbook: [producthunt-playbook.md](./producthunt-playbook.md) |

---

### 2026-09-30 — Quora (`quora_answer_01`)

Sual: What is the best software solution to manage an Xbox/PlayStation cafe?  
URL: https://www.quora.com/What-is-the-best-software-solution-to-manage-an-Xbox-PlayStation-cafe/answer/Aladdin-Biyabangerd

```
Most Xbox / PlayStation cafés don’t need a full restaurant POS. They need timed bookings for stations/rooms, a live floor view (who is on which station, when it ends), easy extend/settle, and a simple cash shift.

What usually breaks with WhatsApp + notebooks:
• Double-booked stations
• Unclear live occupancy
• End-of-shift cash that doesn’t match

If you also run a real kitchen + table service, keep a restaurant POS for food. If your main product is console/station time, look for venue/session software instead.

Disclosure: I work on Heselo — a web panel for gaming clubs, karaoke, billiards and anti-cafés (booking + live floor + cash). Demo: https://heselo.online/en/?utm_source=quora&utm_medium=referral&utm_campaign=heselo&utm_content=quora_answer_01
```

---

### 2026-09-30 — Quora (`quora_answer_02`)

Sual: What is the best software to manage an internet cafe?

```
It depends what kind of internet cafe you run.

Classic PC cafes (timed desktop sessions, client lock screens) usually need dedicated cafe tools (EasyCafe-class). Restaurant kitchen POS is the wrong category.

Console / PlayStation clubs and karaoke rooms are different: the product is room or station time. For those you need booking + live sessions + a simple floor cash shift.

Disclosure: I build Heselo for room-time venues (gaming clubs, karaoke, billiards, anti-cafes) — not a classic PC cafe lock client. Demo: https://heselo.online/en/?utm_source=quora&utm_medium=referral&utm_campaign=heselo&utm_content=quora_answer_02
```

---

### 2026-09-30 — Quora (`quora_answer_03`) · nöqtə atışı A

Sual: Is POS system software necessary for newly established entertainment centers?  
URL: https://www.quora.com/Is-POS-system-software-necessary-for-newly-established-entertainment-centers/answer/Aladdin-Biyabangerd

```
Yes — but pick the right class of tool.

“POS for an entertainment center” usually mixes two jobs:

1) Restaurant / kitchen POS (iiko, Clopos class) — strong for food tickets, KDS, recipes and dining-room service.
2) Room-time / station ops — bookings, live floor (who is on which PS/room), extend/settle, and shift cash that matches sessions.

New gaming lounges, karaoke rooms and similar venues often buy a heavy kitchen POS, then still run WhatsApp + notebooks for timed stations. What usually breaks:
• Double-booked rooms/stations
• No clear live occupancy
• End-of-shift cash that doesn’t match sessions

If you have a real kitchen, keep restaurant POS for food. If your main product is timed rooms or PlayStation stations, you need a lighter time-management panel — not a full kitchen stack.

Disclosure: I build Heselo in Baku for gaming clubs, karaoke, billiards and anti-cafés (booking + live sessions + floor cash). Not a kitchen POS.
```

---

### 2026-09-30 — Quora (`quora_answer_05`) · nöqtə atışı C

Sual: What is the best venue management software for family entertainment centers (FECs)?  
URL: https://www.quora.com/What-is-the-best-venue-management-software-for-family-entertainment-centers-FECs/answer/Aladdin-Biyabangerd

```
“Best venue software for an FEC” depends on what you actually sell.

Many entertainment venues look for an iiko / restaurant-POS alternative and end up over-buying kitchen tools (KDS, recipes, dining service). Those are excellent when food is the core product.

If the venue sells timed attractions — rooms, stations, party slots, karaoke, console zones — the ops problem is different:
• booking / holds / no-shows
• live floor: what is running now and when it ends
• extend / settle without a notebook
• shift cash that matches sessions

Ask: food-first or time-first?
• Food-first → stay in restaurant POS class.
• Time-first (rooms/stations) → booking + live sessions + floor cash is the right class.

Disclosure: I work on Heselo — we built it in Baku for room-time entertainment venues (gaming clubs, karaoke, billiards, anti-cafés). Honest fit when you don’t need a full kitchen stack.
```

---

### 2026-09-30 — Quora (`quora_post_en_04`) · nöqtə atışı B

Profil post (EN): anti-café time-based billing.  
URL: https://www.quora.com/profile/Aladdin-Biyabangerd/How-do-you-track-time-based-billing-in-an-anti-caf%C3%A9-Anti-caf%C3%A9s-bill-by-time-per-minute-hour-open-session-not-by

```
How do you track time-based billing in an anti-café?

Anti-cafés bill by time (per minute / hour / open session), not by a classic restaurant check flow.

You need:
• Start / pause / end sessions tied to a table or guest
• Live view of who is still on the clock
• Transparent price as time accrues
• Shift cash that matches sessions (not only “sold items”)

A full restaurant POS (iiko / Clopos class) can ring up drinks, but time-based seating is a different model. Many venues end up with notebooks + stopwatches + WhatsApp — that scales poorly.

We built Heselo in Baku for venues that sell time (anti-cafés, PS clubs, karaoke rooms): live sessions + booking + floor cash in one web panel. Not a kitchen POS.
```

---

### 2026-09-30 — Quora (`quora_post_az_01`)

Profil post (AZ). Credential: Founder at Heselo.  
https://www.quora.com/profile/Aladdin-Biyabangerd/posts

```
Bakıda PS və karaoke klubların çoxu rezervasiyanı WhatsApp-da, növbəni dəftərdə saxlayır.

Nəticə eyni olur: otaq/stansiya iki dəfə bron olunur, “indi kim hansı stansiyadadır” itir, növbənin sonunda kassa tutmur.

Otaq-vaxt satan məkan üçün lazım olan:
• rezervasiya cədvəli
• canlı zal (start / uzat / bağla)
• növbə kassası

Tam restoran mətbəxi (KDS, resept) lazımdırsa — iiko/Clopos sinfi. Yalnız otaq/stansiya vaxtıdırsa — daha yüngül panel kifayətdir.

Mən Heselo-da işləyirəm — oyun klubu, karaoke, bilyard və antikafe üçün veb panel. Demo: https://heselo.online/az/?utm_source=quora&utm_medium=referral&utm_campaign=heselo&utm_content=quora_post_az_01
```

---

### 2026-09-30 — Quora (`quora_post_az_02`)

Profil post (AZ). Credential: Founder at Heselo.  
https://www.quora.com/profile/Aladdin-Biyabangerd/Oyun-klubu-PS-kafe-%C3%BC%C3%A7%C3%BCn-hans%C4%B1-POS-laz%C4%B1md%C4%B1r-%C3%87ox-vaxt-iki-i%C5%9F-qar%C4%B1%C5%9F%C4%B1r-Restoran-POS-iiko-Clopos-sinfi-m%C9%99tb%C9%99x-KDS

```
Oyun klubu / PS kafe üçün hansı POS lazımdır?

Çox vaxt iki iş qarışır.

Restoran POS (iiko / Clopos sinfi) — mətbəx, KDS, resept, zal xidməti.
PS / oyun klubu — əsasən stansiya və otaq vaxtı: kim bron edib, indi kim oynayır, sessiya nə vaxt bitir, uzatma və növbə kassası.

Mətbəx POS-u otaq-vaxta zorla oturduqda: rezervasiya WhatsApp-da qalır, canlı zal yoxdur, növbənin sonunda kassa sessiyalarla tutmur.

Əsl mətbəx varsa — onu restoran POS-da saxlayın. Stansiya/otaq vaxtı üçün yüngül rezervasiya + canlı sessiya + kassa paneli kifayətdir.

Açıqlama: mən Bakıda Heselo qururam — oyun klubu, karaoke, bilyard, antikafe. Demo: heselo.online
```

---

### 2026-09-30 — Quora (`quora_post_az_03`)

Profil post (AZ).  
https://www.quora.com/profile/Aladdin-Biyabangerd/Antikafed%C9%99-saatla-%C3%B6d%C9%99ni%C5%9Fi-nec%C9%99-izl%C9%99m%C9%99k-olar-Antikafe-d%C9%99qiq%C9%99-saat-v%C9%99-ya-a%C3%A7%C4%B1q-sessiya-il%C9%99-i%C5%9Fl%C9%99yir-klassik-restoran-%C3%A7ek

```
Antikafedə saatla ödənişi necə izləmək olar?

Antikafe dəqiqə/saat və ya açıq sessiya ilə işləyir — klassik restoran çeki axını ilə eyni deyil.

Lazım olan:
• masa/qonağa bağlı start / pauza / bağla
• kim hələ saatda — canlı görünüş
• vaxt artdıqca şəffaf məbləğ
• növbə kassası sessiyalarla üst-üstə düşür

Tam restoran POS içki sata bilər, amma saatla oturmaq başqa modeldir. Çox məkan dəftər + saniyəölçən + WhatsApp-la qalır — böyümür.

Biz Bakıda Heselo-nu vaxt satan məkanlar (antikafe, PS, karaoke) üçün qurduq: canlı sessiya + rezervasiya + kassa. Mətbəx POS deyil. Demo: heselo.online
```

---

### 2026-09-30 — Quora (`quora_answer_06`)

Sual (AZ): Karaoke otağı rezervasiyası üçün hansı proqram lazımdır?  
URL: https://www.quora.com/Karaoke-ota%C4%9F%C4%B1-rezervasiyas%C4%B1-%C3%BC%C3%A7%C3%BCn-hans%C4%B1-proqram-laz%C4%B1md%C4%B1r/answer/Aladdin-Biyabangerd

```
Karaoke otağı satırsınızsa, lazım olan əsasən “mətbəx POS” deyil — otaq-vaxt idarəsidir.

Praktikada çox klub belə işləyir: rezervasiya WhatsApp-da, otağın kimdə olduğu dəftərdə, ödəniş ayrıca. Nəticə: ikiqat bron, “indi hansı otaq boşdur” sualı, növbənin sonunda kassa tutmur.

Otaq-vaxt paneldə axtarın:
• cədvəl / rezervasiya
• canlı sessiya (start, uzat, bağla)
• növbə kassası

Əgər mətbəx, KDS, resept əsas işdirsə — iiko/Clopos sinfi uyğundur. Əsas məhsul otaq saatıdırsa — yüngül rezervasiya + canlı zal + kassa kifayətdir.

Açıqlama: mən Heselo-da işləyirəm — karaoke, oyun klubu, bilyard və antikafe üçün veb panel (Bakı). Demo: heselo.online
```

---

### 2026-09-29 — TikTok (`tiktok_post_T01b`) · Only me

Eyni şəkil (Photos upload). Privacy: **Only me**. Səs: For You → `original sound - wlyxxn1`. Açıq T01-ə toxunulmayıb.

```
Gecə növbəsi — üç telefon, bir resepsiya.

Otaq boşdur? Chat-də itir. Heselo-da canlı zal bir ekrandadır.

Demo: https://heselo.online/az/?utm_source=tiktok&utm_medium=organic_social&utm_campaign=heselo&utm_content=tiktok_post_T01

#Heselo #oyunklubu #karaoke #Baki
```

---

### 2026-09-29 — TikTok (`tiktok_post_T01`)

URL: https://www.tiktok.com/@heselo.online/video/7690888611595554068  
Fayl: `docs/marketing-raw/tiktok/T01-post.jpg` → `T01-post.mp4` (10s, Studio yalnız video qəbul edir)  
Səs: Original sound — Heselo (trend səs panelindən Use basılmadı)

```
Gecə növbəsi — üç telefon, bir resepsiya.

Otaq boşdur? Chat-də itir. Heselo-da canlı zal bir ekrandadır.

Demo: https://heselo.online/az/?utm_source=tiktok&utm_medium=organic_social&utm_campaign=heselo&utm_content=tiktok_post_T01

#Heselo #oyunklubu #karaoke #Baki
```

---

### 2026-09-18 — Facebook (`facebook_post_01`)

```
Bakıda PS və karaoke klubların çoxu hələ də rezervasiyanı WhatsApp-da, kassanı dəftərdə saxlayır.

Heselo — oyun klubu, karaoke, bilyard və antikafe üçün bir veb panel:
• otaq / stansiya rezervasiyası
• canlı zal
• kassa + anbar

Restoran POS (iiko, Clopos) deyil — otaq-vaxt satan məkanlar üçündür.

Pulsuz demo:
https://heselo.online/az/?utm_source=facebook&utm_medium=organic_social&utm_campaign=heselo&utm_content=facebook_post_01

Sənin klubda ən çox vaxt harada gedir — rezervasiya, yoxsa hesablaşma?
```

### 2026-09-18 — LinkedIn (`linkedin_post_01`)

```
Azərbaycanda oyun və karaoke klubları üçün “ümumi POS” çox vaxt artıq qalır.

Mətbəx, KDS, çatdırılma yoxdur — məhsul otaq və saatdır. Bu tip məkanlara iiko/Clopos yüngül gəlmir; Excel + WhatsApp isə axşam saatlarında dağılır.

Heselo buna görə qurulub: rezervasiya, canlı sessiya, kassa və anbar — bir paneldə. Dil: AZ / EN / RU. Qiymət aylıq SaaS (starter-dən başlayır). Pulsuz demo, kart lazım deyil.

Demo: https://heselo.online/az/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=heselo&utm_content=linkedin_post_01

PS / karaoke / bilyard / antikafe sahibləri — hazırda rezervasiyanı necə aparırsınız?
```

---

### 2026-09-30 — Product Hunt (`ph_launch_01`)

Product: https://www.producthunt.com/products/heselo  
Launch: https://www.producthunt.com/products/heselo?launch=heselo  
Edit: https://www.producthunt.com/posts/heselo/edit  
Prelaunch: https://www.producthunt.com/products/heselo/heselo/prelaunch  

Status: **Scheduled for Thu Oct 1, 2026** (Product Hunt midnight PT). Maker first comment posted (prelaunch checklist ✓). Reply templates in [producthunt-playbook.md](./producthunt-playbook.md). Live-day cavablar + LinkedIn/FB announce (`ph_social_announce`) Oct 1-də.

Product link UTM: `utm_content=ph_launch_01`  
Maker profile link: `utm_content=ph_profile`

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

---

## Növbəti post

**Post 11 — Lounge / VIP otaq.** Prompt + FB/IG/LI caption: [social-media-biweekly-pack.md](social-media-biweekly-pack.md).

`post_07`–`post_09` siyahıdan çıxarılıb. `post_10` (antikafe) 2026-09-30 paylaşılıb.

Pack-də qalan açılar (11–15): lounge → anbar → mətbəx POS deyil (video) → no-show → AZ/EN/RU.

Son yeniləmə: 2026-09-30
