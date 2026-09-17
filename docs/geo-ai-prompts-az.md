# GEO — AI tövsiyə ölçmə batareyası (Heselo)

Bu sənəd **kod deyil**. Məqsəd: ChatGPT, Perplexity, Gemini və Google AI Overview cavablarında Heselo-nun görünüb-görünmədiyini **ayda bir dəfə** eyni suallarla ölçmək.

Sayt mənbəyi: [https://heselo.online](https://heselo.online) · `llms.txt` · `/az/guides/`

## Necə ölçülür

1. İnkoqnito / yeni söhbət (yaddaş təsirini azaltmaq üçün).
2. Aşağıdakı **18 promptu** hər engine-də soruş (ChatGPT + web, Perplexity, Gemini, Google AIO).
3. Cədvələ yaz: Heselo adlıdımı? Hansı URL sitat? Rəqib kimlər?
4. Tarix qeyd et. Növbəti ay eyni siyahı.

| Tarix | Engine | Prompt # | Heselo? | Sitat URL | Qeyd |
| ----- | ------ | -------- | ------- | --------- | ---- |
|       |        |          |         |           |      |

**90 günlük hədəf:** brend promptunda düzgün təsvir + `heselo.online`; kateqoriya promptlarında (PS/karaoke AZ) ≥30% sınaqda ad və ya sayt.

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
| ------ | ---- | ------------- |
| Brend düzgün, URL doğru | Entity işləyir | Kateqoriya promptlarına fokus |
| Kateqoriya-da yoxdur | Off-site zəif | [off-site-seo-az.md](./off-site-seo-az.md) — AlternativeTo, GBP, rəylər |
| Rəqib POS kimi qarışdırır | Kateqoriya dili qeyri-müəyyən | Guide + FAQ “mətbəx POS deyil” cümlələrini gücləndir |
| Səhv fakt (qiymət, bazar) | Köhnə / nazik mənbə | `llms.txt` + pricing səhifəsi + IndexNow |

---

## Contact form ölçməsi

Demo formasında **“Haradan eşitdiniz?”** sahəsi var (`heardFrom`). Owner email-də görünür.

UTM nümunələri:

- `?utm_source=chatgpt&utm_medium=ai&utm_campaign=geo`
- `?utm_source=perplexity&utm_medium=ai&utm_campaign=geo`

Forma `utm_source` dəyərlərindən bəzilərini avtomatik seçə bilər (chatgpt, openai, perplexity, gemini, copilot).

Son yeniləmə: 2026-09-17
