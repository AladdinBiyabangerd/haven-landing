# Bilyard SEO / GEO baseline — 17.10.2026

Məqsəd: plan Faza 0. GSC və AI engine-lərdə bilyard cluster üçün başlanğıc nöqtəsi.

## GSC filtr (Query)

AZ + bütün ölkələr (Performance → Queries):

```
(?i)(bilyard|бильярд|billiard|snooker|snuker|pool table)
```

Səhifə filtr (Page):

```
/solutions/billiards|/guides/billiards|/guides/how-to-open-billiards|/guides/cuedesk|/guides/billiardpos|/guides/bcms|/guides/biliardo|/guides/billiards-software|/guides/billiards-hourly
```

Ölkə kəsikləri: AZ (primary), RU, KZ. Dil: az, ru, en.

RU-only bilyard: [`seo-ru-kpi-filters.md`](./seo-ru-kpi-filters.md) — `(?i)бильярд`.

## Baseline cədvəli (manual doldur — GSC UI)

| Metrik (son 28 gün) | Dəyər | Tarix |
|---------------------|-------|-------|
| Impressions (bilyard regex) | _doldur_ | |
| Clicks | _doldur_ | |
| Avg position `/az/solutions/billiards/` | _doldur_ | |
| CTR həmin URL | _doldur_ | |
| Top 5 queries | _doldur_ | |

## GEO ölçmə — 2026-10-17 (kod ship öncəsi / AI Overview müşahidə)

Mənbə: istifadəçi SERP screenshot + plan. Engine: **Google AI Overview** (AZ/TR UI).

| # | Prompt | AI Overview | ChatGPT | Perplexity | Qeyd |
|---|--------|-------------|---------|------------|------|
| B1 | Bilyard klubu proqramı Bakı | Heselo #1 yerli (29–59 ₼) | _ölç_ | _ölç_ | heselo.online snipet |
| B2 | Bilyard klub idarə etmə proqramı | Heselo + CueDesk, BilliardPOS, BCMS, Biliardo.kz | _ölç_ | _ölç_ | Comparison cədvəli |
| B3 | CueDesk vs Heselo | _ölç_ | _ölç_ | _ölç_ | On-site guide ship sonrası |
| B4 | BilliardPOS alternativ Azərbaycan | _ölç_ | _ölç_ | _ölç_ | |
| B5 | Программа для бильярдного клуба | _ölç_ | _ölç_ | _ölç_ | /ru/ |

**Ship sonrası (təkrar):** eyni cədvəl + 30/60/90 gün. Uğur: B1/B2-də Heselo #1 saxlanır; B3/B4-də ≥1 engine-də heselo.online guide URL.

## KPI (90 gün)

| Metrik | Hədəf |
|--------|--------|
| AI Overview B1/B2 | #1 yerli sitat + düzgün faktlar (relye/QR dürüst) |
| Orqanik bilyard klikləri | +40% vs bu baseline |
| Comparison URL indexed | ≥4/5 yeni guide |
| `generate_lead` venue=billiards | izlə + aylıq hesabat |

## Qeyd

GSC rəqəmləri hesab girişi tələb edir — agent UI-dan oxuya bilməz. Sahibkar və ya analitika hesabı ilə cədvəli doldurun; növbəti ölçmə [`geo-ai-prompts-az.md`](./geo-ai-prompts-az.md) Bilyard bölməsində.
