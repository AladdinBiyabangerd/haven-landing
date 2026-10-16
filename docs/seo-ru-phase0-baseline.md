# Phase 0 — /ru SEO baseline checklist (ops)

İcra tarixi: **2026-10-16** · Sahib: agent + istifadəçi (GSC/Yandex login)

## Google Search Console

**Status: BLOK — hesab məlumatı yoxdur.** Agent GSC API/CSV oxuya bilmir. Aşağıdakıları GSC UI-dan export edib `docs/gsc-baseline-ru-2026-10-16/` altına qoyun (və ya CSV-ləri chatə yapışdırın).

- [ ] Property: `heselo.online` (apex)
- [ ] Export Queries + Pages (28g), ölkə filtrləri: **Azerbaijan**, **Russia**, **Kazakhstan**, **Uzbekistan**, **Belarus**, All
- [ ] Path filter: `/ru/`
- [ ] Coverage: Indexed vs Not indexed for `/ru/*`
- [ ] Request indexing (priority): `/ru/`, `/ru/solutions/gaming/`, `/ru/solutions/karaoke/`, `/ru/solutions/antikafe/`, `/ru/pricing/`, 2–3 top guides + yeni:
  - `/ru/guides/ps-club-software-comparison/`
  - `/ru/guides/how-to-open-billiards-club/`
  - `/ru/guides/club-revenue-control/`
  - `/ru/guides/ps-club-tariffs/`
  - `/ru/guides/how-to-open-anticafe/`
  - `/ru/tools/tariff-calculator/`
  - `/ru/tools/pricing-model/`
- [ ] CSV saxla: `docs/gsc-baseline-ru-2026-10-16/`

### Snapshot (GSC) — doldurulmayıb

| Filtr | Impressions | Clicks | CTR | Avg position | Qeyd |
|-------|-------------|--------|-----|--------------|------|
| Page contains `/ru/` · All countries · 28g | | | | | |
| `/ru/` · Azerbaijan | | | | | |
| `/ru/` · Russia | | | | | |
| `/ru/` · Kazakhstan | | | | | |
| `/ru/` · Uzbekistan | | | | | |
| `/ru/` · Belarus | | | | | |
| Brand `(?i)(heselo\|хесело)` · `/ru/` | | | | | |

Coverage `/ru/*`: Indexed ___ · Not indexed ___ · Reason top: _______

Köhnə site-wide kontekst (Aug 11 – Sep 5 2026, bütün dillər): ~14 impression, 0 klik — `/ru` ayrı export hələ yoxdur.

## Yandex Webmaster

**Status: BLOK — hesab məlumatı yoxdur.**

- [ ] Sayt verify (DNS və ya meta `yandex-verification`)
- [ ] Sitemap: `https://heselo.online/sitemap.xml`
- [ ] Региональность: **Азербайджан** və ya boş — saxta RF şəhəri **yox**
- [ ] Важные страницы: home, pricing, gaming, karaoke, billiards, antikafe, lounge, contact
- [ ] IndexNow statusu yoxla (açar env: `HESELO_INDEXNOW_KEY`)
- [ ] Переобход after deploy

### Snapshot (Yandex) — doldurulmayıb

| Metrik | Dəyər | Tarix |
|--------|-------|-------|
| Indexed pages (sayt) | | |
| Indexed `/ru/*` (təxmini / filter) | | |
| ИКС | | |
| Region | | |
| Sitemap status | | |
| IndexNow | | |

## Mobile / CWV lab baseline

Lab = Lighthouse 12.2 mobile (headless Chrome), **pre-deploy** canlı `heselo.online` (köhnə build). PSI API daily quota exhausted (429). INP lab-da tez-tez n/a.

| URL | Tool | LCP | CLS | INP | Perf | Date |
|-----|------|-----|-----|-----|------|------|
| /ru/ | Lighthouse mobile | 6197 ms | 0 | n/a | 74 | 2026-10-16 |
| /ru/pricing/ | Lighthouse mobile | fail / no score | 0 | n/a | — | 2026-10-16 (retry failed) |
| /ru/solutions/gaming/ | Lighthouse mobile | 2666 ms | 0 | n/a | 97 | 2026-10-16 |
| /ru/guides/how-to-open-playstation-club/ | Lighthouse mobile | 999 ms | 0 | n/a | 100 | 2026-10-16 |

CrUX (Search Console / CrUX API) qeyd: _______ (GSC → Core Web Vitals; agent oxuya bilmədi)

**Post-deploy:** eyni 4 URL-i yenidən ölç (hero/LCP + Metrica defer gözlənilir). Home LCP 6s+ — prioritet.

## Week-2 GSC CTR pass (deploy + 7–14 gün)

Şərt: Phase 0 GSC snapshot dolu + yeni `/ru` URL-lər indekslənib.

1. GSC → Pages, filter `page` contains `/ru/`, 28g (və ya deploy-dan sonra mövcud günlər).
2. Sırala: impressions ↓; CTR < ~2% və ya clicks = 0, impressions ≥ 10.
3. Hər URL üçün: title + meta description → SERP intent (bir dəyişiklik / URL); H1 toxunma əvvəl title.
4. Klaster filterlər: [`seo-ru-kpi-filters.md`](./seo-ru-kpi-filters.md).
5. Nəticəni bu faylda «CTR pass log» bölməsinə yaz.

### CTR pass log

| Date | URL | Impr | CTR before | Title change | Notes |
|------|-----|------|------------|--------------|-------|
| | | | | | |

## Keçid

- [x] Lab CWV cədvəli (pre-deploy)
- [ ] GSC CSV + ölkə snapshot
- [ ] Yandex snapshot
- [ ] Deploy live + Request indexing / Переобход
- [ ] Post-deploy CWV recheck
- [ ] Week-2 CTR pass (7–14g sonra)

Indexed hub-lar + CSV + PSI/Lighthouse cədvəli doldurulanda Phase 0 bağlanır.
