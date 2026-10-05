# TikTok paylaşım playbook (Heselo)

Bu sənəd **kod deyil**. Agent TikTok-a post qoyanda **bu axını izlə**. Uğurlu sınaq: 2026-09-29 (`tiktok_post_T01b`).

Alqoritm orientasiyası (Buffer / 2026 guide, Heselo-ya uyğunlaşdırılıb): watch time + niche + konsistens + trend səs + SEO — “hack” yox.

## Prioritetlər (hər həftə)

1. **Hook (3 s):** AZ headline / problem dərhal oxunsun.
2. **Niche:** PS · karaoke · bilyard · antikafe · otaq-vaxt — mass dance trendinə zorlama.
3. **Konsistens:** hədəf **3–5 post/həftə** (1 gün şəkil / 1 gün video planı uyğundur). Keyfiyyəti öldürmə.
4. **Peak saat (Bakı):** mümkün qədər aşağıdakı pəncərədə paylaş — axşam 16:00–21:00 ümumi pik.
5. **Trend səs:** Add sound → For You → **Use**.
6. **SEO:** caption + on-screen AZ açar sözlər (`otaq`, `bron`, `kassa`, `oyun klubu`…).
7. **Bio link (əsas klik):** qısa URL — aşağıda. Comment-dəki URL kliklənməz; bio əsasdır.
8. **Everyone = alqoritm siqnalı.** Agent default **Only you** paylaşır (yoxlama üçün); istifadəçi bəyəndikdən sonra **Everyone** edir. Yalnız Only me qalan postlar FYP öyrətmir.

## Peak saatlar (yerli vaxt — Bakı / AZT)

Ümumi pik: **16:00–21:00** (iş/məktəbdən sonra). Günü seçəndə bu pəncərəyə üstünlük ver.

| Gün | Ən yaxşı pəncərə |
|-----|------------------|
| Bazar ertəsi | 13:00–17:00 |
| Çərşənbə axşamı | 14:00–18:00 (+ səhər ~06:00) |
| Çərşənbə | 13:00–20:00 |
| Cümə axşamı | 13:00–18:00 |
| Cümə | 16:00–21:00 |
| Şənbə | 16:00–21:00 (ümumi engagement yüksək) |
| Bazar | 09:00–16:00 |

Agent paylaşım sessiyası açanda: mümkünse bu saatlara düşür; düşmürsə Only me yoxlamasını indi et, **Everyone**-i pikə yaxın vaxta saxla.

## Sabit qaydalar

1. **Privacy default (agent): Only you / Only me** — `Everyone` seçmə. İstifadəçi sonra açıq edir.
2. **Mövcud açıq T01-ə toxunma** (`Everyone` video):  
   https://www.tiktok.com/@heselo.online/video/7690888611595554068
3. Chrome + Remote Debugging (`chrome://inspect/#remote-debugging`) — Cursor brauzeri QR/Google ilə ilişir.
4. Caption: `docs/marketing-raw/tiktok/T0N-caption.txt` və ya plan.
5. **Hashtag:** **8–12 güclü niche tag** (aşağıdakı core + mövzuya 1–3). 25+ spam tag yox; 3–4 də azdır.
6. **Post-comment (məcburi):** paylaşımın dərhal ardından comment — bio-ya yönəldən qısa mətn (aşağıda). Tam URL comment-də kliklənməz.
7. Jurnal: [social-posts-log.md](./social-posts-log.md).

## Bio Website (qısa — length limit)

```
https://heselo.online/az/?utm_source=tiktok
```

Hələ də uzun gəlirsə: `https://heselo.online/?utm_source=tiktok`

## Hashtag bloku (core ~10 + mövzu)

**Core (həmişə):**

```
#Heselo #oyunklubu #karaoke #bilyard #antikafe #Playstation #rezervasiya #bron #kassa #Baki #klub
```

**Mövzuya əlavə (1–3):** məs. `#lounge` `#VIP` `#noShow` `#billiards` `#PSklub`

Cəmi hədəf: **8–12 tag**. `#SaaS #startup #business #gaming #nightclub #booking #venue #Azerbaijan` yalnız yer qalsa — əvvəl niche AZ.

## Comment şablonu (paylaşımdan dərhal sonra)

TikTok comment-də link adətən **kliklənməz**. Comment bio-ya aparır:

```
Pulsuz demo → profilimizdəki sayt linki (heselo.online)
```

İstəyə görə qısa URL (kopyalama üçün, klik gözləmə):

```
Profil linki: heselo.online/az
```

- Comment Only me postlarda da göndər (Everyone olanda hazır qalsın).
- Ölçmə üçün əsas klik = **bio Website** UTM.

## Hesab

- Handle: `@heselo.online`
- Studio upload: https://www.tiktok.com/tiktokstudio/upload
- Posts: https://www.tiktok.com/tiktokstudio/content

---

## A) Şəkil postu + trend səs (İŞLƏYƏN AXIN)

1. `https://www.tiktok.com/tiktokstudio/upload`
2. **Photos** tab (Videos şəkil qəbul etmir).
3. JPG/PNG yüklə (`DOM.setFileInputFiles`).
4. “1 photo uploaded” + **Post** görünənə qədər gözlə.
5. Caption: gövdə (SEO açar söz) + **8–12 hashtag**.
6. Privacy: **Everyone** → **Only you**.
7. Səs: **Add sound** → **For You** → **Use** (səs adı görünməlidir).
8. **Post**.
9. content: **Only me** təsdiq.
10. **Comment** (bio yönləndirmə şablonu).

### Uğurlu nümunə (T01b)

| Sahə | Dəyər |
|------|--------|
| Format | Photos |
| Fayl | `docs/marketing-raw/tiktok/T01-post.jpg` |
| Privacy | Only you → Only me |
| Səs | For You → Use → `original sound - wlyxxn1` |
| Caption | `T01-caption.txt` |

---

## B) Video postu (10s)

1. Lazımdırsa ffmpeg ilə 10s MP4 (1080×1920).
2. Studio → **Videos** → MP4.
3. Caption + Only you + Sounds → Use.
4. Post → comment (bio şablonu).

```bash
ffmpeg -y -loop 1 -i T0N-post.jpg -c:v libx264 -t 10 -pix_fmt yuv420p \
  -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" \
  -r 30 T0N-post.mp4
```

---

## Etmə

- Cursor daxili browser ilə TikTok login.
- Agent-in default **Everyone** paylaşması.
- Açıq T01 silmək / privacy dəyişmək.
- Səs seçmədən Post (trend səs istənibsə).
- 25+ random hashtag.
- Comment-də uzun UTM URL-ə güvənmək (klik gözləmə).
- Upload xətası: Retry 2–3×; keçmirsə dayan.

---

## Agent checklist

```
[ ] Chrome RD + @heselo.online
[ ] Peak saat? (Bakı cədvəli) — Everyone üçün uyğun vaxt
[ ] Photos / Videos
[ ] Caption: hook + SEO + 8–12 niche tag
[ ] Privacy: Only you
[ ] Add sound → For You → Use
[ ] Post → Only me təsdiq
[ ] Comment: bio / heselo.online yönləndirmə
[ ] social-posts-log.md
[ ] Açıq T01-ə toxunma
```

Son yeniləmə: 2026-09-30 (peak saatlar + alqoritm/hashtag/bio)
