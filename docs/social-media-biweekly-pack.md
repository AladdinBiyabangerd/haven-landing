# Sosial media — 2 gündən bir paket (şəkil/video prompt + 3 kanal mətn)

Bu sənəd **kod deyil**. Eyni vizual LinkedIn + Instagram + Facebook-da paylaşılır; **mətn hər kanalda fərqli**dir.

**Caption keyfiyyəti:** `social-hook-writing` + `social-media-post-writing` (+ şəkil üçün `social-image-post`) — təbii AZ, güclü açılış, marketinq jargonu yox, uydurma traction yox.

**Artıq paylaşılanı təkrarlama:** əvvəl [social-posts-log.md](social-posts-log.md) oxu. `post_01`…`post_06` və `post_10` (antikafe) paylaşılıb. **`post_07` (uzatma), `post_08` (qiymət) və `post_09` (bilyard) də bitib — siyahıdan çıxarılıb.** **Növbəti: post_11 (şəkil — lounge / VIP).**

## Agent / sən qaydası

1. Növbəti post = cədvəldə ilk `Pending`.
2. Vizualı generate et (şəkil və ya video — postda göstərilən format) → paylaşıb jurnalı yenilə (`Paylaşıldı` + tarix).
3. UTM:
  `https://heselo.online/az/?utm_source={facebook|instagram|linkedin}&utm_medium=organic_social&utm_campaign=heselo&utm_content={channel}_post_NN`  
   Həll səhifəsi varsa path dəyiş: `/az/solutions/gaming/` və s.
4. **Şəkil** ölçüsü (3 platforma eyni): **1080×1080** (1:1). İstəsən 1080×1350 (4:5).
5. **Video / Reel** (video postlar): **9:16**, 1080×1920, **5–8 saniyə**, səssiz də işləsin (caption + on-screen AZ mətn). IG Reels / FB Reels / LI native video.
6. **Vizual üzərində mətn: yalnız Azərbaycan dili** (etalon: “Cümə axşamı chat-də yaşamamalıdır.”). İngilis headline/UI (`Live floor`, `Active` və s.) **yox**.
7. Stil: fotoreal chaos→order, canlı tablet, teal `#14B8A6`, tünd klub atmosferi, diagonal və ya sol/sağ split, Heselo mark. Brand adı `Heselo` qala bilər.
8. **Alt text** (Instagram + LinkedIn): hər postda hazır blok var. Video üçün də eyni AZ təsvir — IG/LI accessibility.
9. **LinkedIn axını:** (1) tam mətni **Heselo** şirkət səhifəsində paylaş → (2) şəxsi profildən **Repost** + aşağıdakı qısa şəxsi mətn (copy-paste eyni şirkət postunu təkrarlama).
10. **Caption mətnləri** social-media-post-writing skill-lərinə uyğun yazılır (təbii AZ, problem→Heselo, kanalə görə ton).

### Shared negative (bütün promptlara)

```
English headline, English UI labels (Live floor, Active, Schedule, Cash, Session), pen illustration, sketch, vector flat, cartoon, plastic CGI, dollhouse, purple neon cyberpunk, kitchen POS, restaurant KDS, crowded sharp faces, watermark, misspelled Azerbaijani, wrong Latin letters instead of ə/ç/ğ/ı/ö/ş/ü, garbled AI text, dense unreadable UI, bland logo-on-gradient card, soft boring corporate template, stock handshake, shaky handheld spam zoom, text flicker, morphing letters
```

---

## Cədvəl


| #   | Tarix planı | Mövzu / açı                                 | Format | Status  |
| --- | ----------- | ------------------------------------------- | ------ | ------- |
| 11  | +0 gün      | Lounge / VIP otaq                           | şəkil  | Pending |
| 12  | +2 gün      | Anbar — qəlyanaltı sessiya ilə              | şəkil  | Pending |
| 13  | +4 gün      | Mətbəx POS deyil (soft)                     | **video** | Pending |
| 14  | +6 gün      | Gəlmədi — otaq boş qaldı (no-show)          | şəkil  | Pending |
| 15  | +8 gün      | AZ / EN / RU panel — komanda                | şəkil  | Pending |


---

## Post 11 — Lounge / VIP otaq

### Şəkil promptu

```
Photoreal cinematic square 1080x1080 for Heselo lounge / VIP room venue software.

LEFT: messy paper room board and Azerbaijani bubbles: "VIP 2 boşdur?", "bron hansı otaq?", "1-ə qədər?" — dissolving into teal particles. Soft premium lounge corridor bokeh (velvet/wood hints, no sharp faces).

RIGHT: real tablet on dark reception — Azerbaijani UI "Cədvəl" / "Canlı zal" with room cards "VIP 1", "VIP 2", teal "Aktiv" / "Boş".

Brand: Heselo mark top corner.

Headline Azerbaijani only:
"VIP otaq chat-də axtarılmamalıdır."
Subline: "Otaq · bron · sessiya."

No English. Photoreal, premium calm after chaos.
```

### Alt text — Instagram + LinkedIn

```
Heselo lounge şəkli: solda “VIP 2 boşdur?” chat xaosu, sağda tabletdə VIP otaq kartları olan panel. Başlıq: VIP otaq chat-də axtarılmamalıdır.
```

### Facebook (`facebook_post_11`)

```
“VIP 2 boşdur?”

Lounge-da otaq bahalı məhsuldur. Cavab chat və lövhə arasındadırsa — bron itir, axşam hesab dağılır.

Heselo otağı cədvəl və canlı sessiyada eyni resurs kimi saxlayır.

Lounge həlli:
https://heselo.online/az/solutions/lounge/?utm_source=facebook&utm_medium=organic_social&utm_campaign=heselo&utm_content=facebook_post_11

VIP otaqlarını indi necə izləyirsən?
```

### Instagram (`instagram_post_11`)

```
“VIP 2 boşdur?”
Cavab hələ chatdədirsə — bron risk altındadır.

Otaq, bron, sessiya bir yerdə olmalıdır. Heselo lounge üçün belə qurulub.

https://heselo.online/az/solutions/lounge/?utm_source=instagram&utm_medium=organic_social&utm_campaign=heselo&utm_content=instagram_post_11

#lounge #VIP #Heselo #Baki
```

### LinkedIn (`linkedin_post_11`)

```
Lounge və otaqlı məkanlarda VIP otaq yüksək marjalı məhsuldur — amma status WhatsApp-dadırsa, rezervasiya və canlı sessiya ayrı “həqiqət” danışır.

Boş/dolu, bron müddəti və uzatma eyni lövhədə olmalıdır. Heselo otağı cədvəl ↔ canlı sessiya ↔ kassa axınında aparır.

https://heselo.online/az/solutions/lounge/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=heselo&utm_content=linkedin_post_11

Lounge sahibləri — VIP və adi otaq eyni sistemdədir, yoxsa ayrı Excel?
```

### LinkedIn şəxsi repost (`linkedin_repost_11`)

```
Mən lounge-larda eyni şeyi görürəm: VIP otağın statusu hələ də chatdədir.

Bunu quranda otağı eyni resurs etdik — bron, sessiya, kassa. Şirkət postuna qısa əlavə edirəm.

Sizdə VIP indi harada yaşayır?
```

---

## Post 12 — Anbar / qəlyanaltı

### Şəkil promptu

```
Photoreal cinematic square 1080x1080 for Heselo club inventory + session.

LEFT: sticky stock notes and Azerbaijani bubbles: "Cola bitdi?", "kimə yazdıq?", "hesaba əlavə?" — dissolving into teal dust. Soft club snack-bar bokeh.

RIGHT: real tablet — Azerbaijani UI linking session line items: snack/drink rows under an active room/session, teal accents, dark counter, glass reflections. Optional small "Anbar" hint — keep UI sparse and readable.

Brand: Heselo mark.

Headline Azerbaijani only:
"Qəlyanaltı sessiyadan ayrı yazılmamalıdır."
Subline: "Sessiya · anbar · kassa."

No English. Photoreal, tension then order.
```

### Alt text — Instagram + LinkedIn

```
Heselo anbar şəkli: solda “Cola bitdi?” / “hesaba əlavə?” xaosu, sağda tabletdə sessiya altında qəlyanaltı sətirləri. Başlıq: qəlyanaltı sessiyadan ayrı yazılmamalıdır.
```

### Facebook (`facebook_post_12`)

```
“Cola bitdi?” — bir chatdə.
“Kimə yazdıq?” — başqa yerdə.
Axşam hesabda — yoxdur.

Klubda qəlyanaltı və içki çox vaxt sessiya ilə eyni qonağa bağlıdır. Ayrı dəftərə düşəndə kassa boş qalır.

Heselo-da əlavə eyni sessiyaya yazılır; anbar da oradan hərəkət edir.

https://heselo.online/az/solutions/inventory/?utm_source=facebook&utm_medium=organic_social&utm_campaign=heselo&utm_content=facebook_post_12

Qəlyanaltını indi harada qeyd edirsiniz?
```

### Instagram (`instagram_post_12`)

```
İçki satıldı.
Sessiyada yoxdur.
Kassada da yoxdur.

Problem budur. Heselo-da əlavə eyni sessiyaya düşür.

https://heselo.online/az/solutions/inventory/?utm_source=instagram&utm_medium=organic_social&utm_campaign=heselo&utm_content=instagram_post_12

#anbar #klub #Heselo #Baki
```

### LinkedIn (`linkedin_post_12`)

```
Əyləncə məkanlarında qəlyanaltı gəliri tez-tez “kiçik” görünür — amma sessiya ilə bağlanmayanda axşam hesabında itir.

Ayrı sticky, ayrı chat, ayrı kassa sətri: stok da, ödəniş də əl ilə yığılır. Anbar klub paneli üçün əlavə modul deyil; sessiya axınının davamıdır.

https://heselo.online/az/solutions/inventory/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=heselo&utm_content=linkedin_post_12

Sahiblər: qəlyanaltı/içki sizdə sessiya hesabına düşür, yoxsa ayrı dəftərə?
```

### LinkedIn şəxsi repost (`linkedin_repost_12`)

```
Mən klubda bunu çox görmüşəm: içki satılıb, sessiya hesabında yoxdur.

Bunu quranda əlavəni eyni sessiyaya bağladıq — anbar da oradan gedir. Şirkət yazısını buraya da əlavə edirəm.

Sizdə qəlyanaltı harada qeyd olunur?
```

---

## Post 13 — Mətbəx POS deyil *(video / Reel)*

### Video promptu (9:16 · 5–8 s)

```
Photoreal cinematic vertical video 9:16 1080x1920, 6 seconds, social Reel ad for Heselo club software vs restaurant POS. Smooth continuous motion. No cut spam.

CRITICAL — Azerbaijani on-screen text must be spelled PERFECTLY (Latin Azerbaijani: ə ç ğ ı ö ş ü). Exact strings only. Sharp glyphs; no garbled AI text.

0.0–2.0s OPEN: soft kitchen-POS vibe that feels WRONG for a club — blurred ticket printer / KDS glow, sticky "mətbəx" notes — then reject/dissolve. Overlaid small Azerbaijani chat: "bu restoran üçündür", "bizdə otaq var". Teal edge light.

2.0–4.0s TRANSITION: clutter dissolves into teal #14B8A6 particle stream toward a real tablet on dark club reception desk. Slow push-in, glass reflections, alive product photography.

4.0–6.0s ORDER: tablet fills frame — Azerbaijani UI "Canlı zal" with room/station cards, teal "Aktiv". Heselo circular teal H + wordmark top corner, safe padding for Reels UI.

On-screen headline Azerbaijani only, large, bold, steady last 3s — exact:
"Mətbəx POS otaq vaxtını idarə etmir."
Tiny subline exact: "Bron · sessiya · kassa."

No English UI. Magazine-ad quality motion. Soft ambient haze — no voiceover required.
```

### Alt text — Instagram + LinkedIn

```
Heselo reklam videosu: əvvəl mətbəx/POS xaosu, sonra teal keçidlə tabletdə “Canlı zal”. Başlıq: mətbəx POS otaq vaxtını idarə etmir.
```

### Facebook (`facebook_post_13`)

```
Restoran POS-u mətbəx, KDS, çatdırılma üçündür. Oyun klubu, karaoke, bilyard, antikafe isə otaq və saat satır.

Eyni alətlə hər ikisini “həll etmək” çox vaxt ağır və artıq qalır. Excel + WhatsApp isə cümə axşamı dağılır.

Heselo mətbəx POS deyil — otaq-vaxt paneli.

Qısa izah:
https://heselo.online/az/guides/iiko-alternative-clubs/?utm_source=facebook&utm_medium=organic_social&utm_campaign=heselo&utm_content=facebook_post_13

Sənin məkanında əsas məhsul nədir — yemək, yoxsa otaq/saat?
```

### Instagram (`instagram_post_13`)

```
Mətbəx POS.
Klubda otaq satırsan.
Uyğun gəlmir.

Heselo otaq-vaxt üçündür — mətbəx/KDS yox.

https://heselo.online/az/guides/iiko-alternative-clubs/?utm_source=instagram&utm_medium=organic_social&utm_campaign=heselo&utm_content=instagram_post_13

#Heselo #klub #POS #Baki
```

### LinkedIn (`linkedin_post_13`)

```
Azərbaycanda klublar tez-tez “ümumi POS” axtarır — iiko, Clopos və s. Amma məhsul otaq və saatdırsa, mətbəx/KDS modulları yük olur; Excel isə növbəni chatə atır.

Doğru sual “ən böyük POS hansıdır?” deyil — “otaq-vaxt axını bir paneldədirmi?” Heselo buna görə qurulub: rezervasiya, canlı sessiya, kassa.

https://heselo.online/az/guides/iiko-alternative-clubs/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=heselo&utm_content=linkedin_post_13

Sahiblər: hazırda alətinizi mətbəx üçün, yoxsa otaq üçün seçmisiniz?
```

### LinkedIn şəxsi repost (`linkedin_repost_13`)

```
Mən bunu quranda bir qayda qoydum: mətbəx POS-u otaq vaxtını idarə etmir.

Şirkət postunda yazdıq — özüm də buraya qoyuram. Klubda əsas məhsul otaq/saatdırsa, alət də ona uyğun olmalıdır.

Sizdə indi nə üstünlük təşkil edir?
```

---

## Post 14 — Gəlmədi / no-show

### Şəkil promptu

```
Photoreal cinematic square 1080x1080 for Heselo reservations / no-show problem.

LEFT: empty VIP/room door ajar, phone with Azerbaijani bubbles: "gəlirik 10 dəq", "ləğv?", "otaq boş qaldı" — dissolving into teal particles. Soft night corridor bokeh, no sharp faces.

RIGHT: real tablet — Azerbaijani "Cədvəl" with room block status clearly freed/updated (e.g. "Boş" or cancelled state), teal accents, calm control after loss.

Brand: Heselo mark.

Headline Azerbaijani only:
"Gəlməyən bron otağı tutmamalıdır."
Subline: "Cədvəl · status · növbəti qonaq."

No English. Empathy + order, photoreal.
```

### Alt text — Instagram + LinkedIn

```
Heselo bron şəkli: solda boş otaq və “gəlirik 10 dəq” / “otaq boş qaldı” mesajları, sağda tabletdə yenilənmiş “Cədvəl”. Başlıq: gəlməyən bron otağı tutmamalıdır.
```

### Facebook (`facebook_post_14`)

```
“Gəlirik 10 dəqiqəyə.”
Sonra — gəlmədilər. Otaq boş qaldı. Növbəti qonaq isə chatdə gözləyirdi.

Problem “pis qonaq” deyil. Status cədvəldə görünmürsə, otaq tutulu qalır.

Heselo-da bron statusu eyni lövhədədir — boşaldıqda növbəti qonağa yer açılır.

https://heselo.online/az/solutions/reservations/?utm_source=facebook&utm_medium=organic_social&utm_campaign=heselo&utm_content=facebook_post_14

Sənin klubda no-show-dan sonra otağı necə azad edirsiniz?
```

### Instagram (`instagram_post_14`)

```
Bron var.
Qonaq gəlmədi.
Otaq hələ “dolu”dur.

Status cədvəldə olmalıdır. Heselo belə işləyir.

https://heselo.online/az/solutions/reservations/?utm_source=instagram&utm_medium=organic_social&utm_campaign=heselo&utm_content=instagram_post_14

#bron #rezervasiya #Heselo #Baki
```

### LinkedIn (`linkedin_post_14`)

```
No-show əyləncə məkanlarında gəlir itkisidir — amma ikinci itki statusun yenilənməməsidir: otaq “dolu” qalır, növbəti qonaq chatdə gözləyir.

Rezervasiya lövhəsi yalnız “yazmaq” üçün deyil; ləğv, gecikmə və boşalma eyni yerdə görünməlidir. Heselo bronu cədvəl və canlı axında saxlayır.

https://heselo.online/az/solutions/reservations/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=heselo&utm_content=linkedin_post_14

Sahiblər: no-show qaydanız yazılıdır, yoxsa növbədə qərar verilir?
```

### LinkedIn şəxsi repost (`linkedin_repost_14`)

```
Mən klublarla danışanda no-show-dan sonra eyni mənzərəni eşidirəm: otaq boşdur, amma lövhə hələ “dolu” göstərir.

Bunu quranda statusu eyni cədvəldə saxladıq. Şirkət yazısını buraya da qoyuram.

Sizdə qayda yazılıdır, yoxsa “adətən belə”?
```

---

## Post 15 — AZ / EN / RU panel

### Şəkil promptu

```
Photoreal cinematic square 1080x1080 for Heselo multilingual club panel.

LEFT: confused sticky language mix and Azerbaijani/Russian-style chat fragments about "hansı dil?", staff handover notes — dissolving into teal particles. Soft reception bokeh.

RIGHT: real tablet — clean Azerbaijani "Canlı zal" UI with a subtle language switch hint (AZ visible as active; EN/RU as small calm selectors — keep primary labels Azerbaijani). Teal accents, dark desk, sharp glass.

Brand: Heselo mark.

Headline Azerbaijani only:
"Növbə dəyişəndə dil dəyişməməlidir."
Subline: "AZ · EN · RU — eyni panel."

No English headline. Photoreal, practical trust.
```

### Alt text — Instagram + LinkedIn

```
Heselo dil şəkli: solda növbə/dil qarışıqlığı, sağda tabletdə AZ paneli və sakit dil seçimi. Başlıq: növbə dəyişəndə dil dəyişməməlidir.
```

### Facebook (`facebook_post_15`)

```
Gündüz növbə AZ danışır. Axşam kimisə EN və ya RU lazımdır. Panel bir dildədirsə — təlim uzanır, səhv artır.

Heselo paneli AZ / EN / RU işləyir. Eyni bron, eyni sessiya, eyni kassa — dil dəyişəndə axın qalmır.

Demo:
https://heselo.online/az/?utm_source=facebook&utm_medium=organic_social&utm_campaign=heselo&utm_content=facebook_post_15

Komandanda hansı dil daha çox lazımdır?
```

### Instagram (`instagram_post_15`)

```
Növbə dəyişdi.
Dil dəyişdi.
Panel eyni qalmalıdır.

Heselo: AZ / EN / RU.

https://heselo.online/az/?utm_source=instagram&utm_medium=organic_social&utm_campaign=heselo&utm_content=instagram_post_15

#Heselo #klub #Baki
```

### LinkedIn (`linkedin_post_15`)

```
Bakı klublarında komanda çoxdillidir — qonaq da, növbə də. Alət yalnız bir dildədirsə, təlim və səhv riski artır; axşam növbəsi “kim bilir, o basır”a çevrilir.

Heselo paneli AZ / EN / RU: eyni rezervasiya, canlı sessiya və kassa axını. Dil dəyişəndə proses dəyişmir.

https://heselo.online/az/?utm_source=linkedin&utm_medium=organic_social&utm_campaign=heselo&utm_content=linkedin_post_15

Sahiblər: komandada ən çox hansı dil əlavə lazımdır — EN, yoxsa RU?
```

### LinkedIn şəxsi repost (`linkedin_repost_15`)

```
Mən bunu quranda bilirdim: növbə dəyişəndə dil dəyişə bilər, panel isə eyni qalmalıdır.

AZ / EN / RU — eyni axın. Şirkət yazısını buraya da əlavə edirəm.

Sizdə ikinci dil hansıdır?
```

---

## Paylaşılandan sonra

1. Bu faylda status → `Paylaşıldı` + tarix.
2. [social-posts-log.md](social-posts-log.md) cədvəlinə sətirlər: FB / IG / LI (Heselo) + istəyə görə `linkedin_repost_NN` (şəxsi).
3. Instagram və LinkedIn-də **Alt text** sahəsinə bu postun alt blokunu yapışdır.
4. LinkedIn: əvvəl **Heselo** səhifəsi → sonra şəxsi **Repost** + `linkedin_repost_NN`.
5. Növbəti # Pending götür — eyni promptu təkrar vermə.
