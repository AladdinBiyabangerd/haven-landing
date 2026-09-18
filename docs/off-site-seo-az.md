# Off-site SEO — Azərbaycan bazarı (Heselo)

Bu sənəd **kod deyil** — `https://heselo.online` üçün backlink və kataloq qeydiyyatı planıdır. Məqsəd: organik axtarışa birbaşa təsir etməyən, amma domain authority və brend axtarışlarını gücləndirən off-site siqnallar yaratmaq.

## Ümumi qaydalar

1. **Eyni NAP** (Name, Address, Phone) istifadə edin:
   - Ad: **Heselo**
   - Sayt: **https://heselo.online**
   - E-poçt: **heselo.online@gmail.com**
2. Təsvir hər yerdə eyni olmasın — hər platformanın formatına uyğun **unikal 2–3 cümlə** yazın (doorway spam yox).
3. Kateqoriya: *proqram təminatı*, *biznes proqramları*, *məkan / klub idarəetməsi*, *SaaS*.
4. Dil: AZ profillərdə azərbaycan dili; beynəlxalq kataloqlarda EN + sayt linki.
5. Sosial profil açsanız, `.env`-də `PUBLIC_SOCIAL_*` doldurun — Organization `sameAs` schema avtomatik dolacaq.

---

## Prioritet 1 — pulsuz / aşağı baha AZ kataloqları

| Platform | URL | Nə etmək |
|----------|-----|----------|
| **Google Business Profile** | https://business.google.com | “Software company” və ya “Business service” kimi qeydiyyat; sayt + e-poçt; demo üçün əlaqə düyməsi |
| **Bing Places** | https://www.bingplaces.com | Eyni məlumat; IndexNow açar faylı deploy-dan sonra URL submit |
| **Apple Maps Connect** | https://mapsconnect.apple.com | Brend axtarışları üçün (fiziki ofis varsa ünvan, yoxdursa online service) |
| **Tap.az (biznes / xidmət)** | https://tap.az | “Proqram təminatı” / biznes xidməti elanı — spam deyil, 1 keyfiyyətli elan |
| **Boss.az** | https://boss.az | İş elanları deyil — şirkət/profil varsa SaaS təqdimatı |
| **Linq.az** | https://linq.az | Startup / biznes kataloqu (aktivdirsə qeydiyyat) |
| **Product Hunt** | https://www.producthunt.com | EN launch — beynəlxalq backlink + brend |
| **AlternativeTo** | https://alternativeto.net | “Venue management”, “Booking system” kateqoriyalarında siyahı; **alternative to** iiko / Clopos / Dine / Restomas / MinuPOS / robotPOS siyahılarına əlavə (dürüst: klub/otaq-vaxt, mətbəx POS yox) |
| **Capterra / GetApp** | https://www.capterra.com | SaaS kataloqu (uzunmüddətli; rəy yalnız real istifadəçidən) |

---

## Prioritet 2 — startup & IT ekosistem

| Platform | Qeyd |
|----------|------|
| **Landau Innovation Center** | AZ startup ekosistemi tədbirləri / profil imkanları |
| **SUP VC / Innoland** | Demo günü / pitch — backlink + PR |
| **Facebook / Instagram** | `@heselo` — bio-da `heselo.online`; postlarda həll səhifələrinə link |
| **LinkedIn Company Page** | Şirkət səhifəsi + məhsul linki |
| **Sosial post jurnalı** | Artıq paylaşılan mətnlər: [social-posts-log.md](./social-posts-log.md) — təkrarlama
| **GitHub** | Açıq repo varsa README-də landing linki (məhsul repo ayrı ola bilər) |

---

## Prioritet 3 — məzmun əsaslı backlink (uzunmüddət)

- **Qonaq bloq yazıları yox** — əvvəlcə öz guide-larınız: `/az/guides/`
- AZ biznes media / IT bloqlarına **faydalı** qonaq məqalə (oyun klubu / karaoke / antikafe rəqəmsallaşması)
- Universitet / inkubator **tələbə layihəsi** mention (real əməkdaşlıq varsa)
- **YouTube** demo video — təsvirdə sayt linki

---

## Hər kataloq üçün submit şablonu (AZ)

**Başlıq:** Heselo — məkan idarəetmə sistemi

**Qısa təsvir (≈400 simvol):**
> Heselo oyun klubu (PS), karaoke otaqları, bilyard, antikafe və otaqlı launj üçün veb paneldir: otaq və PS rezervasiyası, canlı zal, kassa və anbar bir yerdə. Azərbaycan, İngilis və Rus dillərində. Pulsuz demo: heselo.online

**Açar sözlər:** oyun klubu proqramı, ps klub proqramı, karaoke otaq rezervasiya, bilyard klubu proqramı, antikafe proqramı

**URL-lər (copy-paste):**
- Ana: https://heselo.online/az/
- Oyun klubu: https://heselo.online/az/solutions/gaming/
- Karaoke: https://heselo.online/az/solutions/karaoke/
- Antikafe: https://heselo.online/az/solutions/antikafe/
- Əlaqə: https://heselo.online/az/contact/

---

## IndexNow (Bing sürətli index)

1. `.env`-də `INDEXNOW_KEY=<32-char-hex>` təyin edin
2. `npm run build` — açar faylı `public/{key}.txt` yaradılır
3. Deploy-dan sonra Bing Webmaster Tools → URL submit və ya API:
   ```
   POST https://api.indexnow.org/indexnow
   {
     "host": "heselo.online",
     "key": "YOUR_KEY",
     "keyLocation": "https://heselo.online/YOUR_KEY.txt",
     "urlList": ["https://heselo.online/az/solutions/antikafe/"]
   }
   ```

---

## Google Search Console checklist

- [ ] Property: `https://heselo.online` (domain və ya URL prefix)
- [ ] Sitemap: `https://heselo.online/sitemap.xml`
- [ ] Əsas səhifələr: Request indexing (`/az/`, `/az/solutions/antikafe/`, guide-lar)
- [ ] `PUBLIC_ANALYTICS=plausible` və ya `ga4` — trafik ölçümü

---

## Nə etməyin

- ❌ Saxta müştəri rəyi / ulduz reytinqi kataloqlarda
- ❌ Eyni mətni 50 kataloqa yapışdırmaq
- ❌ PBN / alınmış spam linklər
- ❌ `heselo.app` və ya köhnə domain (yalnız **heselo.online**)

---

## İzləmə (aylıq)

| Metrik | Harada |
|--------|--------|
| Organik klik / göstəriş | Google Search Console |
| İndekslənmiş səhifə sayı | GSC → Pages |
| Referral trafik | Plausible / GA4 |
| Brend axtarış “Heselo” | GSC → Search results |
| AI tövsiyə görünürlüyü | [geo-ai-prompts-az.md](./geo-ai-prompts-az.md) — 18 prompt batareyası |
| Demo mənbəyi (AI) | Contact form `heardFrom` + owner email |

Son yeniləmə: 2026-09-17

---

## GEO qısa xatırlatma (AI tövsiyəsi)

On-site artıq güclüdür (`llms.txt`, FAQ schema, müqayisə guide-ları, AI bot `robots` icazəsi). **Qazanan qol off-site-dır:**

1. Bu checklist-dəki kataloqları doldurun (GBP, AlternativeTo, LinkedIn).
2. Ayda bir dəfə [geo-ai-prompts-az.md](./geo-ai-prompts-az.md) batareyasını ölçün.
3. Real müştəri rəyi + YouTube demo (transcript) — AI üçün üçüncü tərəf sübutu.
4. Demo linklərində UTM: `?utm_source=chatgpt&utm_medium=ai&utm_campaign=geo` (forma avtomatik `heardFrom` seçə bilər).

Admin panel (Heselo app) marketing indeksi üçün deyil — yalnız `heselo.online`.

---

## AlternativeTo icra checklist (Phase C0 / E)

Hədəf: brend + “alternative to X” siyahıları. Təsvirdə restoran mətbəxi POS iddiası **yox** — otaq/masa sessiya + kassa.

- [ ] Heselo profili yaradılıb (Venue / Booking software)
- [ ] Sayt: `https://heselo.online/az/` + EN mirror link
- [ ] “Similar to / Alternative to” siyahılarına əlavə:
  - [ ] iiko → daxili link `…/guides/iiko-alternative-clubs/`
  - [ ] Clopos → `…/guides/clopos-alternative/`
  - [ ] Dine / dine.az → `…/guides/dine-alternative/`
  - [ ] Restomas → `…/guides/restomas-alternative/`
  - [ ] MinuPOS → `…/guides/minupos-alternative/`
  - [ ] robotPOS → `…/guides/robotpos-alternative/`
- [ ] Qısa EN təsvir (unik): room-time clubs, karaoke, billiards, live sessions, cash shifts; from 25 AZN/mo in Azerbaijan
- [ ] Screenshot: live floor və ya schedule (mətbəx/KDS ekranı yox)
- [ ] UTM: `?utm_source=alternativeto&utm_medium=referral&utm_campaign=seo-c0`

