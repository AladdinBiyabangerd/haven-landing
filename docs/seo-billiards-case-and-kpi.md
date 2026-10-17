# Bilyard case + KPI remeasure

## Real case status (2026-10-17)

**Nəşr olunan `/cases/` bilyard hekayəsi yoxdur** — razılıq və rəqəmlər olmadan saxta case yazılmayıb.

Növbəti addım (sahibkar):
1. İstifadə edən bilyard klubundan yazılı razılıq (ad, masa sayı, əvvəl/sonra proses).
2. Razılıqdan sonra `/[locale]/cases/<slug>/` və ya guide içində qısa blok.
3. `aggregateRating` yalnız real, yoxlanıla bilən rəydən.

## 30 / 60 / 90 gün KPI (baseline-dan)

Baseline: [`seo-billiards-baseline-2026-10-17.md`](./seo-billiards-baseline-2026-10-17.md).

| Gün | GSC | GEO (B1–B7) | Lead |
|-----|-----|-------------|------|
| +30 | Impressions/clicks vs baseline | AI Overview B1/B2 yenidən | `generate_lead` venue=billiards |
| +60 | Comparison URL-lər indexed? | B3/B4-də Heselo URL? | Demo keyfiyyəti |
| +90 | +40% klik hədəfi | #1 yerli saxlanır? | Aylıq hesabat |

## IndexNow / GSC (deploy checklist)

Yeni/yenilənən URL-lər (az/en/ru):
- `/solutions/billiards/`
- `/guides/billiards-club-management/`
- `/guides/billiards-table-booking/`
- `/guides/billiards-hourly-rates/`
- `/guides/billiards-software-comparison-2026/`
- `/guides/cuedesk-alternative/`
- `/guides/billiardpos-alternative/`
- `/guides/bcms-alternative/`
- `/guides/biliardo-kz-alternative/`

`npm run indexnow` (və ya deploy hook) + GSC URL Inspection prioritet səhifələr üçün.
