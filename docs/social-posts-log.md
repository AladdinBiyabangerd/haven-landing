# Sosial post jurnalı (Heselo)

Bu sənəd **kod deyil**. Məqsəd: artıq paylaşılan Facebook / LinkedIn (və digər) mətnləri qeyd etmək ki, agent **eyni mətni təkrar verməsin**.

## Agent qaydası

1. Yeni post yazmazdan əvvəl bu faylı oxu.
2. `Paylaşıldı` statuslu mətnləri **yenidən vermə**.
3. Yeni post: eyni ideya olsa belə — **başqa açı**, başqa hook, yeni `utm_content` (`…_post_02`, `_03`…).
4. Paylaşılandan sonra: bu cədvələ 1 sətir + mətn bloku əlavə et.

**UTM şablonu:**  
`?utm_source={facebook|linkedin}&utm_medium=organic_social&utm_campaign=heselo&utm_content={channel}_post_NN`

---

## Jurnal

| Tarix | Kanal | `utm_content` | Açı / mövzu | Status |
|-------|--------|---------------|-------------|--------|
| 2026-09-18 | Facebook | `facebook_post_01` | Kateqoriya: PS/karaoke — WhatsApp+dəftər vs Heselo panel; mətbəx POS deyil | Paylaşıldı |
| 2026-09-18 | LinkedIn | `linkedin_post_01` | Insight: otaq-vaxt məkanlara ümumi POS artıqdır; Heselo = rezervasiya+canlı+kassa | Paylaşıldı |

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

## Növbəti post üçün istifadə olunmamış açılar

- Konkret həll səhifəsi: yalnız gaming / yalnız karaoke (UTM → `/az/solutions/…`)
- “1 günün axışı” — resepsiyadan bağlanışa qədər qısa hekayə
- Screenshot + 1 funksiya (canlı zal / uzatma / kassa növbəsi)
- Excel vs panel — guide linki (`/az/guides/club-pos-vs-excel/`)
- Qiymət şəffaflığı (starter AZN) — soft CTA, soft sell
- Founder / qurucu qısa niyə: “mətbəx POS deyil” entity

Son yeniləmə: 2026-09-18
