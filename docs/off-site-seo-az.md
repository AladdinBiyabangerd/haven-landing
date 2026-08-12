# Off-site SEO — Azərbaycan bazarı (Heselo)

Bu sənəd **kod deyil** — `https://heselo.online` üçün backlink və kataloq qeydiyyatı planıdır. Məqsəd: organik axtarışa birbaşa təsir etməyən, amma domain authority və brend axtarışlarını gücləndirən off-site siqnallar yaratmaq.

## Ümumi qaydalar

1. **Eyni NAP** (Name, Address, Phone) istifadə edin:
   - Ad: **Heselo**
   - Sayt: **https://heselo.online**
   - E-poçt: **heselo.online@gmail.com**
2. Təsvir hər yerdə eyni olmasın — hər platformanın formatına uyğun **unikal 2–3 cümlə** yazın (doorway spam yox).
3. Kateqoriya: *proqram təminatı*, *biznes proqramları*, *restoran / məkan idarəetməsi*, *SaaS*.
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
| **AlternativeTo** | https://alternativeto.net | “Venue management”, “Restaurant management” kateqoriyalarında siyahı |
| **Capterra / GetApp** | https://www.capterra.com | SaaS kataloqu (uzunmüddətli; rəy yalnız real istifadəçidən) |

---

## Prioritet 2 — startup & IT ekosistem

| Platform | Qeyd |
|----------|------|
| **Landau Innovation Center** | AZ startup ekosistemi tədbirləri / profil imkanları |
| **SUP VC / Innoland** | Demo günü / pitch — backlink + PR |
| **Facebook / Instagram** | `@heselo` — bio-da `heselo.online`; postlarda həll səhifələrinə link |
| **LinkedIn Company Page** | Şirkət səhifəsi + məhsul linki |
| **GitHub** | Açıq repo varsa README-də landing linki (məhsul repo ayrı ola bilər) |

---

## Prioritet 3 — məzmun əsaslı backlink (uzunmüddət)

- **Qonaq bloq yazıları yox** — əvvəlcə öz guide-larınız: `/az/guides/`
- AZ biznes media / IT bloqlarına **faydalı** qonaq məqalə (restoran / antikafe rəqəmsallaşması)
- Universitet / inkubator **tələbə layihəsi** mention (real əməkdaşlıq varsa)
- **YouTube** demo video — təsvirdə sayt linki

---

## Hər kataloq üçün submit şablonu (AZ)

**Başlıq:** Heselo — məkan idarəetmə sistemi

**Qısa təsvir (≈400 simvol):**
> Heselo restoran, kafe, antikafe, gaming club və oxşar məkanlar üçün veb paneldir: masa və otaq rezervasiyası, canlı zal, kassa və anbar bir yerdə. Azərbaycan, İngilis və Rus dillərində. Pulsuz demo: heselo.online

**Açar sözlər:** restoran idarəetmə sistemi, antikafe proqramı, rezervasiya sistemi, kassa proqramı

**URL-lər (copy-paste):**
- Ana: https://heselo.online/az/
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

Son yeniləmə: 2026-08-12
