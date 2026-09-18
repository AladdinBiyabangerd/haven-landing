# GEO — AI tövsiyə ölçmə batareyası (Heselo)

Bu sənəd **kod deyil**. Məqsəd: ChatGPT, Perplexity, Gemini və Google AI Overview-də Heselo-nun görünüb-görünmədiyini **ayda bir dəfə** eyni suallarla ölçmək.

Sayt: [https://heselo.online](https://heselo.online) · `llms.txt` · `/az/guides/`

## Necə ölçülür

1. Yeni chat / inkoqnito (həmin AI-da).
2. Aşağıdakı promptları soruş → cədvələ 1 sətir.
3. Ayda bir dəfə eyni siyahı — baseline ilə müqayisə.

---

## Baseline — 2026-09-17 (ilk yoxlama)

Engine: **ChatGPT** + **Perplexity**. Promptlar: 1, 4, 5, 9, 18.

### Nəticə cədvəli

| # | Prompt (qısa) | ChatGPT | Perplexity | Qeyd |
|---|----------------|---------|------------|------|
| 1 | Heselo nədir? | Xeyr | Xeyr | Hər ikisi markanı tanımır (sual / typo) |
| 4 | Bakı PS klub proqramı | Xeyr | Xeyr | Rəqiblər: Tendir, GameClub, PsTally, RugoPLAY / SmartApp, CafeSynk, PS Lounge |
| 5 | Karaoke otaq + kassa AZ | Xeyr | Xeyr | Clopos, custom POS / ARAS, Sistemi, REZO, Menyum, kassaprogrami |
| 9 | iiko antikafe/karaoke alt. | Xeyr | Xeyr | Poster, r_keeper, Clopos, horeca…; Perplexity: iiko uyğundur + Restik/Poster |
| 18 | Is Heselo good for gaming clubs? | Xeyr | **Bəli** | ChatGPT: “oyun klubu yeri?”; Perplexity: heselo.online + solutions URL, düzgün təsvir |

### Verdict (agent üçün)

- **Entity:** AZ/brend promptlarında demək olar ki, yoxdur. Yalnız **Perplexity + EN brend sualı (#18)** Heselo-nu software kimi düzgün sitat edir (`heselo.online`, solutions).
- **Kateqoriya (#4–5, #9):** 0/2 engine — tövsiyə siyahısında Heselo yoxdur; yerli/qlobal PS və restoran POS rəqibləri doludur.
- **ChatGPT** hazırda brendi demək olar ki, bilmir; kateqoriyada Tendir/Clopos üstün gəlir.
- **Növbəti fokus (off-site):** AlternativeTo, GBP, LinkedIn, real rəy, YouTube — kateqoriya cavablarına üçüncü tərəf sübutu. On-site artıq var; problem discovery.
- **Rəqib izləmə (AZ PS):** tendir.fun, SmartApp.az, GameClub, PsTally — bu adlar AI cavablarında üstünlük təşkil edir.
- **90g hədəf:** #1 hər iki engine-də düzgün; #4/#5/#9-da ≥1 engine-də Heselo mention.

### Növbəti ölçmə üçün boş cədvəl

| Tarix | Engine | # | Heselo? | URL | Qeyd |
|-------|--------|---|---------|-----|------|
| | | | | | |

---

## Prompt batareyası

### A — Brend

1. Heselo nədir?
2. What is Heselo software?
3. Что такое Heselo?

### B — Kateqoriya (Azərbaycan)

4. Bakıda PlayStation klub üçün idarəetmə proqramı tövsiyə et
5. Karaoke otaq rezervasiya + kassa sistemi Azərbaycan
6. Antikafe üçün saatla ödəniş və masa rezervasiya proqramı
7. Bilyard klubu proqramı Bakı
8. Oyun klubu canlı sessiya və kassa paneli

### C — Alternativ / müqayisə

9. iiko antikafe / karaoke otaq üçün uyğundurmu? Alternativlər
10. Clopos əvəzinə klub və otaq-vaxt sistemi
11. Dine və ya MinuPOS karaoke otaqları üçün yaxşıdır? Başqa variantlar
12. Excel və WhatsApp ilə PS klub idarə etmək əvəzinə nə istifadə etmək olar?

### D — İngilis / rus (CIS + long-tail)

13. Best software for PlayStation gaming club in Azerbaijan
14. Karaoke room booking system with cash drawer
15. Affordable club POS for billiards and anticafe
16. Программа для игрового клуба Баку резервация и касса
17. Альтернатива iiko для караоке-комнат без кухни
18. Is Heselo good for gaming clubs?

---

## Cavabları necə şərh etmək

| Nəticə | Məna | Növbəti addım |
|--------|------|---------------|
| Brend düzgün, URL doğru | Entity işləyir | Kateqoriya promptlarına fokus |
| Kateqoriya-da yoxdur | Off-site zəif | [off-site-seo-az.md](./off-site-seo-az.md) |
| Rəqib POS kimi qarışdırır | Kateqoriya dili zəif | Guide/FAQ “mətbəx POS deyil” |
| Səhv fakt | Nazik mənbə | `llms.txt` + pricing + IndexNow |

---

## Contact form ölçməsi

Formada **“Haradan eşitdiniz?”** (`heardFrom`). UTM: `?utm_source=chatgpt&utm_medium=ai&utm_campaign=geo`

Son yeniləmə: 2026-09-17 (baseline sıxlaşdırıldı)
