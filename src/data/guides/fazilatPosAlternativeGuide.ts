import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'pos',
  'karaoke',
  'gaming',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Klublar üçün Fazilat POS alternativi',
      h1: 'Otaqlı əyləncə klubları üçün Fazilat POS alternativi',
      seoTitle: 'Fazilat POS alternativi klublar üçün — otaq, sessiya, kassa | Heselo',
      seoDescription:
        'Fazilat POS restoran/satış POS istiqamətindədir; Heselo otaq və vaxt klubları üçündür. Qərar meyarları, müqayisə cədvəli, landşaft və keçid checklisti — AZ, EN, RU.',
      keywords: [
        'fazilat pos alternativ',
        'fazilat pos alternativi klublar',
        'fazilat pos müqayisə',
        'restoran POS alternativi',
        'klub idarəetmə proqramı',
        'otaq rezervasiya sistemi',
        'vaxt sessiyası proqramı',
        'playstation klub proqramı',
        'karaoke rezervasiya sistemi',
        'Heselo',
      ],
      intro:
        'Fazilat POS axtarışında çox vaxt mağaza, kafe və restoranlarda məhsul satışı və kassa gözlənilir. Əsas gəliriniz otaq, konsol və ya masa saatıdırsa, ehtiyac fərqlidir: rezervasiya, canlı sessiya, uzadılma və kassa növbəsi. Bu bələdçi Fazilat POS-u klub/otaq-vaxt nishi ilə dürüst müqayisə edir — Heselo tam restoran POS əvəzi deyil.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: restoran, yoxsa otaq-vaxt?',
          paragraphs: [
            'Alternativ seçməzdən əvvəl üç sualı cavablayın. Cavablar hansı kateqoriyaya baxacağınızı göstərir — brend adına görə deyil.',
          ],
          bullets: [
            'Əsas gəlir: yemək-içki sifarişi və satış, yoxsa otaq/stansiya/masa saatı?',
            'Region və dəstək: Azərbaycan komandası, dil və fiscal/kassa tələbləri nədir?',
            'Kritik funksiyalar: mətbəx/menyu/kassa satışı, yoxsa bron → canlı sessiya → uzadılma → kassa?',
          ],
        },
        {
          id: 'when-fazilat-fits',
          title: 'Fazilat POS nə vaxt qalmalıdır?',
          paragraphs: [
            'Fazilat POS mağaza, kafe və restoranlarda məhsul satışı və kassa üçün uyğundur. Gündəlik iş məhz buna dayanırsa, Fazilat POS (və ya digər restoran/satış POS) düzgün kateqoriyadır.',
            'Heselo mətbəx KDS-ini, tam restoran menyu konturunu və ya ümumi pərakəndə kassanı əvəz etmək üçün nəzərdə tutulmayıb. Mətbəx və ya mağaza mərkəzdədirsə, klub paneli axtarmağa ehtiyac yoxdur.',
          ],
          bullets: [
            'Restoran/kafe sifarişi və ya ümumi satış əsas axındır',
            'Menyu, mətbəx və ya barkod satışı gündəlik işdir',
            'Çatdırılma və ya restoran/pərakəndə hesabatı kritikdir',
            'Otaq vaxtı ikinci dərəcəlidir və ya ümumiyyətlə yoxdur',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'PlayStation stansiyası, karaoke otağı, bilyard masası, antikafe yeri və ya launj otağı vaxtla satılırsa, Heselo rezervasiyanı canlı sessiyaya, tarifi, kassa növbəsinə və stoka bağlayır.',
            'Bar və qəlyanaltı satışı sessiyaya əlavə olunur; bu, restoran mətbəx axını ilə eyni şey deyil. Demo zamanı öz otaq və stansiyalarınızla eyni ssenarini yoxlayın.',
          ],
          bullets: [
            'Əsas məhsul: otaq, konsol və ya masa saatı',
            'Öncədən bron və gəlişdə sessiya başlaması lazımdır',
            'Uzatma, tarif və növbə kassası bir paneldə olmalıdır',
            'AZ / EN / RU interfeys və açıq qiymət ({low} AZN/aydan) vacibdir',
          ],
        },
        {
          id: 'comparison',
          title: 'Fazilat POS və Heselo — qısa müqayisə',
          paragraphs: [
            'Cədvəl əsas istiqaməti göstərir. Modul və paket tərkibini satınalmadan əvvəl hər provayderlə təsdiqləyin. Fazilat POS qiyməti paket və tərəfdaş şərtlərindən asılıdır — uydurma rəqəm yoxdur (əgər açıq rəqəm göstərilibsə, mənbəyə görə).',
          ],
          table: {
            headers: ['Aspekt', 'Fazilat POS', 'Heselo'],
            rows: [
              [
                'Əsas fokus',
                'Mağaza, kafe və restoranlarda məhsul satışı və kassa',
                'Otaq / stansiya / masa vaxtı',
              ],
              ['Rezervasiya', 'Masa/restoran və ya satış axınına uyğun', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Sifariş və ya satış mərkəzdə', 'Canlı sessiya, uzadılma, tarif'],
              ['Mətbəx / satış', 'Restoran və ya satış konturuna uyğun', 'Tam mətbəx/retail POS əvəzi deyil'],
              ['Kassa', 'Restoran/satış növbəsi və çeklər', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Paket və təkliflə dəqiqləşdirin', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Region və paketdən asılı', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Mətbəxli restoran, kafe və ya satış nöqtəsi',
                'Oyun, karaoke, bilyard, antikafe, launj',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Restoran/satış axtarırsınızsa: qısa landşaft',
          paragraphs: [
            'Axtarışınız mətbəx, menyu və ya ümumi kassadırsa, klub paneli deyil, restoran/satış POS kateqoriyasına baxın. Tez-tez müzakirə olunanlar: Fazilat POS, SmartPOS, Clopos, Dine — modul və qiyməti birbaşa provayderdən öyrənin.',
            'Otaq və stansiya saatı satırsınızsa, bu siyahı sizin əsas alternativiniz deyil.',
          ],
          bullets: [
            'Fazilat POS, SmartPOS, Clopos, Dine — restoran/mətbəx/satış istiqaməti',
            'Heselo — yalnız otaq-vaxt, rezervasiya və canlı sessiya ehtiyacı olan klublar',
            'Hər iki ehtiyac varsa: restoran/satış POS + Heselo',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: [
            'Eyni brend müxtəlif məkanlarda fərqli rol oynayır. Aşağıdakı nümunələr tipik otaq-vaxt iş gününü göstərir.',
          ],
          bullets: [
            'PlayStation klubu: stansiya bronu → gəlişdə sessiya → uzadılma → qəlyanaltı → kassa bağlanışı',
            'Karaoke: otaq təqvimi → sessiya başlatma → saat tarifi → içki satışı → növbə hesabatı',
            'Bilyard: masa bronu → oyun sessiyası → pauza/uzatma → əlavə satış → ödəniş',
            'Paralel: güclü mətbəx/satış Fazilat POS-da qalır; otaq və stansiya vaxtı Heselo-da — hansı satışın harada yazıldığı əvvəlcədən bölünür',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Keçid checklisti',
          paragraphs: [
            'Tam keçiddən əvvəl bir növbəlik sınaq səhvləri erkən göstərir. Mətbəx/satış konturu qalırsa, onu köçürməyin — yalnız klub resurslarını gətirin.',
          ],
          bullets: [
            'Otaq, konsol və masa siyahısını və cari tarifləri hazırlayın',
            'İşçi rollarını və kassa növbəsi qaydalarını razılaşdırın',
            'Demoda tipik həftəsonu: bron → sessiya → məhsul → bağlanış',
            'Mətbəx/satış qalırsa, digər sistemi saxlayın və məsuliyyəti yazılı bölün',
            'Bir növbə paralel işlədin; sonra qərar verin',
          ],
        }
      ],
      faq: [
        {
          q: 'Heselo Fazilat POS-u tam əvəz edir?',
          a: 'Xeyr. Tam restoran mətbəxi, menyu və ya ümumi satış əsasdırsa, ixtisaslaşmış POS qalmalıdır. Heselo otaq və vaxt sessiyalarına fokuslanır.',
        },
        {
          q: 'Heselo hansı məkanlar üçündür?',
          a: 'PlayStation və oyun klubları, karaoke otaqları, bilyard, antikafe və otaqlı launj məkanları üçün.',
        },
        {
          q: 'Fazilat POS qiyməti ilə necə müqayisə etməliyəm?',
          a: 'Fazilat POS üzrə paket, avadanlıq və dəstək xərclərini rəsmi təkliflə dəqiqləşdirin. Heselo paketləri {low} AZN/aydan başlayır və saytda açıq göstərilir.',
        },
        {
          q: 'Barda mətbəx, otaqlarda isə saat satırıq — nə etmək olar?',
          a: 'Çox vaxt hər iki sistem məntiqlidir: Fazilat POS sifariş/satışı, Heselo isə otaq bronu və sessiyanı aparır. Hansı satışın harada qeyd olunduğunu əvvəlcədən razılaşdırın.',
        },
        {
          q: 'Heselo neçə dildədir və qiyməti nədir?',
          a: 'İnterfeys Azərbaycan, ingilis və rus dillərindədir. Paketlər {low} AZN/aydan başlayır və saytda açıq göstərilir.',
        },
        {
          q: 'Keçməzdən əvvəl necə yoxlaya bilərəm?',
          a: 'Demo istəyin və öz ssenarinizi addım-addım keçin: rezervasiya, sessiyanın başlaması, məhsul satışı və kassa bağlanışı.',
        },
        {
          q: 'Klub üçün WhatsApp və Excel kifayət etmirmi?',
          a: 'Kiçik həcmdə ola bilər, amma bron WhatsApp-da, vaxt taymerdə, ödəniş Excel-də qalanda üst-üstə rezervasiya və kassa fərqi yaranır. Heselo panelində bron, sessiya, kassa və stok bir yerdə görünür.',
        }
      ],
      ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
      ctaBody:
        'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    },
    en: {
      shortTitle: 'Fazilat POS alternative for clubs',
      h1: 'A Fazilat POS alternative for room-based entertainment clubs',
      seoTitle: 'Fazilat POS Alternative for Clubs — Rooms, Sessions, Cash | Heselo',
      seoDescription:
        'Fazilat POS leans restaurant/sales POS; Heselo is for room-time clubs. Decision criteria, comparison table, landscape, and switch checklist — AZ, EN, RU.',
      keywords: [
        'fazilat pos alternative',
        'fazilat pos alternative for clubs',
        'fazilat pos comparison',
        'restaurant POS alternative',
        'club management software',
        'room booking system',
        'timed session software',
        'PlayStation club software',
        'karaoke booking system',
        'Heselo',
      ],
      intro:
        'Searches for a Fazilat POS alternative often assume product sales and tills in shops, cafés and restaurants. If your main revenue is room, console or table hours, the need is different: bookings, live sessions, extensions and cash shifts. This guide compares Fazilat POS honestly with the club / room-time niche — Heselo is not a full restaurant POS replacement.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: restaurant or room-time?',
          paragraphs: [
            'Answer three questions before picking an alternative. The answers point to a category — not a brand name.',
          ],
          bullets: [
            'Main revenue: food & drink orders and sales, or room / station / table hours?',
            'Region and support: Azerbaijan team, languages, fiscal and till requirements?',
            'Must-have functions: kitchen/menus/till sales, or booking → live session → extension → cash?',
          ],
        },
        {
          id: 'when-fazilat-fits',
          title: 'When should Fazilat POS stay?',
          paragraphs: [
            'Fazilat POS fits product sales and tills in shops, cafés and restaurants. If that is your daily work, Fazilat POS (or another restaurant/sales POS) is the right category.',
            'Heselo is not built to replace kitchen KDS, a full restaurant menu stack or a general retail till. If the kitchen or shop is central, you do not need a club panel.',
          ],
          bullets: [
            'Restaurant/café orders or general sales are the main flow',
            'Menus, kitchen or barcode sales are daily work',
            'Delivery or restaurant/retail reporting is critical',
            'Room time is secondary or absent',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When PlayStation stations, karaoke rooms, billiards tables, anticafe seats or lounge rooms are sold by time, Heselo connects bookings to live sessions, rates, cash shifts and stock.',
            'Bar and snack sales attach to a session; that is not the same as a restaurant kitchen flow. In a demo, test the same scenario with your own rooms and stations.',
          ],
          bullets: [
            'Core product: room, console or table hours',
            'Advance booking and session start on arrival are required',
            'Extensions, rates and shift cash should live in one panel',
            'AZ / EN / RU UI and public pricing (from {low} AZN/month) matter',
          ],
        },
        {
          id: 'comparison',
          title: 'Fazilat POS vs Heselo — at a glance',
          paragraphs: [
            'The table shows primary focus. Confirm modules and packages with each provider before buying. Fazilat POS pricing depends on packages and partner terms — no invented figures (unless a public range is cited from their materials).',
          ],
          table: {
            headers: ['Aspect', 'Fazilat POS', 'Heselo'],
            rows: [
              [
                'Primary focus',
                'Product sales and tills in shops, cafés and restaurants',
                'Room / station / table time',
              ],
              [
                'Bookings',
                'Fitted to tables/restaurant or sales flow',
                'Room and station calendar',
              ],
              ['Time billing', 'Orders or sales centred', 'Live session, extension, rates'],
              ['Kitchen / sales', 'Built for restaurant or sales workflows', 'Not a full kitchen/retail POS'],
              ['Cash', 'Restaurant/sales shifts and receipts', 'Club shifts + session sales'],
              ['Pricing', 'Confirm via package and quote', 'Public: from {low} AZN/month'],
              ['Languages', 'Depends on region and package', 'AZ, EN, RU'],
              [
                'Best fit',
                'Kitchen restaurants, cafés or sales points',
                'Gaming, karaoke, billiards, anticafe, lounge',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Looking for restaurant/sales? Short landscape',
          paragraphs: [
            'If you need a kitchen, menus or a general till, look at restaurant/sales POS — not a club panel. Names often discussed: Fazilat POS, SmartPOS, Clopos, Dine; confirm modules and pricing with each provider.',
            'If you sell room and station hours, that list is not your main alternative.',
          ],
          bullets: [
            'Fazilat POS, SmartPOS, Clopos, Dine — restaurant / kitchen / sales direction',
            'Heselo — only for clubs that need room-time, bookings and live sessions',
            'Need both: restaurant/sales POS + Heselo',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: [
            'The same brand plays different roles in different venues. These examples show a typical room-time day.',
          ],
          bullets: [
            'PlayStation club: station booking → session on arrival → extension → snacks → cash close',
            'Karaoke: room calendar → start session → hourly rate → drinks → shift report',
            'Billiards: table booking → play session → pause/extend → extras → payment',
            'Parallel: strong kitchen/sales stay on Fazilat POS; room and station time on Heselo — agree which sales land where',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Switch checklist',
          paragraphs: [
            'A one-shift pilot surfaces gaps before a full move. If the kitchen/sales stack stays, do not migrate it — bring only club resources.',
          ],
          bullets: [
            'Prepare room, console and table lists with current rates',
            'Agree staff roles and cash-shift rules',
            'In the demo, run a typical weekend: book → session → item → close',
            'If kitchen/sales remain, keep the other system and document ownership',
            'Run one shift in parallel, then decide',
          ],
        }
      ],
      faq: [
        {
          q: 'Does Heselo fully replace Fazilat POS?',
          a: 'No. Keep a specialised POS when a full kitchen, menus or general sales are central. Heselo focuses on rooms and timed sessions.',
        },
        {
          q: 'Which venues is Heselo built for?',
          a: 'PlayStation and gaming clubs, karaoke rooms, billiards, anticafes and room-based lounges.',
        },
        {
          q: 'How should I compare Fazilat POS pricing?',
          a: 'Confirm Fazilat POS package, hardware and support costs with an official quote. Heselo plans start from {low} AZN per month and are listed publicly.',
        },
        {
          q: 'We have a kitchen bar and rooms sold by the hour — what then?',
          a: 'Often both systems make sense: Fazilat POS for orders/sales, Heselo for room bookings and sessions. Agree in advance which sales each system records.',
        },
        {
          q: 'Which languages does Heselo support and what does it cost?',
          a: 'The interface is in Azerbaijani, English and Russian. Plans start from {low} AZN per month and are listed publicly on this site.',
        },
        {
          q: 'How can I check the fit before switching?',
          a: 'Request a demo and walk your real flow step by step: booking, session start, item sale and cash-shift close.',
        },
        {
          q: 'Aren’t WhatsApp and Excel enough for a club?',
          a: 'They can work at small volumes, but when bookings live in WhatsApp, time on a timer and payments in Excel, you get double bookings and cash discrepancies. In Heselo, bookings, sessions, cash and stock sit in one place.',
        }
      ],
      ctaTitle: 'Test Heselo with your workflow',
      ctaBody:
        'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Альтернатива Fazilat POS для клубов',
      h1: 'Альтернатива Fazilat POS для клубов с комнатами и почасовой оплатой',
      seoTitle: 'Альтернатива Fazilat POS для клубов — комнаты, сеансы, касса | Heselo',
      seoDescription:
        'Fazilat POS — ресторанная/торговая POS; Heselo — для клубов с оплатой времени комнат. Критерии, таблица, ландшафт и чеклист — AZ, EN, RU.',
      keywords: [
        'альтернатива fazilat pos',
        'альтернатива fazilat pos для клубов',
        'fazilat pos сравнение',
        'альтернатива ресторанной POS',
        'программа управления клубом',
        'система бронирования комнат',
        'учёт почасовых сеансов',
        'программа для playstation клуба',
        'система бронирования караоке',
        'Heselo',
      ],
      intro:
        'Поиск альтернативы Fazilat POS часто подразумевает продажу товаров и кассу в магазинах, кафе и ресторанах. Если основная выручка — часы комнаты, консоли или стола, нужна другая модель: бронирования, живые сеансы, продления и кассовые смены. Это руководство честно сравнивает Fazilat POS с клубной / почасовой нишей — Heselo не заменяет полноценную ресторанную POS.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: ресторан или время комнат?',
          paragraphs: [
            'Перед выбором альтернативы ответьте на три вопроса. Ответы указывают на категорию — не на бренд.',
          ],
          bullets: [
            'Основная выручка: заказы еды и напитков и продажи или часы комнаты / станции / стола?',
            'Регион и поддержка: команда в Азербайджане, языки, фискальные и кассовые требования?',
            'Критичные функции: кухня/меню/кассовые продажи или бронь → живой сеанс → продление → касса?',
          ],
        },
        {
          id: 'when-fazilat-fits',
          title: 'Когда Fazilat POS стоит оставить?',
          paragraphs: [
            'Fazilat POS подходит для продажу товаров и кассу в магазинах, кафе и ресторанах. Если на этом строится день, Fazilat POS (или другая ресторанная/торговая POS) — верная категория.',
            'Heselo не создавалась, чтобы заменить кухонный KDS, полноценный ресторанный контур меню или общую розничную кассу. Если кухня или магазин в центре, клубная панель не нужна.',
          ],
          bullets: [
            'Ресторанные/кафе-заказы или общие продажи — основной поток',
            'Меню, кухня или продажи по штрихкоду — ежедневная работа',
            'Доставка или ресторанная/розничная отчётность критичны',
            'Время комнат вторично или отсутствует',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если PlayStation-станции, караоке-комнаты, бильярдные столы, места в антикафе или лаунж-комнаты продаются по времени, Heselo связывает бронь с живым сеансом, тарифом, кассовой сменой и складом.',
            'Бар и закуски добавляются к сеансу — это не ресторанный кухонный поток. На демо проверьте тот же сценарий на своих комнатах и станциях.',
          ],
          bullets: [
            'Основной продукт: часы комнаты, консоли или стола',
            'Нужны предварительная бронь и запуск сеанса по приходу',
            'Продления, тарифы и касса смены должны быть в одной панели',
            'Важны интерфейс AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Fazilat POS и Heselo — краткое сравнение',
          paragraphs: [
            'Таблица показывает основную направленность. Перед покупкой уточните модули и пакеты у каждого поставщика. Цена Fazilat POS зависит от пакета и условий партнёра — выдуманных цифр нет (если указан открытый диапазон, он из их материалов).',
          ],
          table: {
            headers: ['Аспект', 'Fazilat POS', 'Heselo'],
            rows: [
              [
                'Основной фокус',
                'Продажу товаров и кассу в магазинах, кафе и ресторанах',
                'Время комнаты / станции / стола',
              ],
              ['Бронирование', 'Под зал/ресторан или торговый поток', 'Календарь комнат и станций'],
              ['Учёт времени', 'Заказы или продажи в центре', 'Живой сеанс, продление, тариф'],
              ['Кухня / продажи', 'Под ресторанные или торговые процессы', 'Не полноценная кухонная/розничная POS'],
              ['Касса', 'Ресторанные/торговые смены и чеки', 'Клубные смены + продажи в сеансе'],
              ['Цена', 'Уточняйте по пакету и предложению', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Зависит от региона и пакета', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Рестораны, кафе или торговые точки',
                'Игровые, караоке, бильярд, антикафе, лаунж',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ищете ресторан/продажи? Короткий ландшафт',
          paragraphs: [
            'Если нужны кухня, меню или общая касса, смотрите ресторанные/торговые POS — не клубную панель. Часто обсуждают: Fazilat POS, SmartPOS, Clopos, Dine; модули и цены уточняйте у поставщиков.',
            'Если вы продаёте часы комнат и станций, этот список — не ваша главная альтернатива.',
          ],
          bullets: [
            'Fazilat POS, SmartPOS, Clopos, Dine — ресторан / кухня / продажи',
            'Heselo — только для клубов с бронью, временем комнат и живыми сеансами',
            'Нужно оба: ресторанная/торговая POS + Heselo',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: [
            'Один и тот же бренд в разных заведениях играет разную роль. Ниже — типичный день с оплатой времени.',
          ],
          bullets: [
            'PlayStation-клуб: бронь станции → сеанс по приходу → продление → закуски → закрытие кассы',
            'Караоке: календарь комнат → старт сеанса → почасовой тариф → напитки → отчёт смены',
            'Бильярд: бронь стола → игровой сеанс → пауза/продление → допы → оплата',
            'Параллельно: сильная кухня/продажи остаются в Fazilat POS; время комнат и станций — в Heselo; заранее разделите, какие продажи где учитываются',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода',
          paragraphs: [
            'Пилот на одну смену выявляет пробелы до полного перехода. Если кухонный/торговый контур остаётся, не переносите его — переносите только клубные ресурсы.',
          ],
          bullets: [
            'Подготовьте списки комнат, консолей и столов и актуальные тарифы',
            'Согласуйте роли сотрудников и правила кассовой смены',
            'В демо прогоните типичные выходные: бронь → сеанс → товар → закрытие',
            'Если кухня/продажи остаются, оставьте другую систему и зафиксируйте зоны ответственности',
            'Одну смену ведите параллельно, затем решайте',
          ],
        }
      ],
      faq: [
        {
          q: 'Heselo полностью заменяет Fazilat POS?',
          a: 'Нет. Если в центре полноценная кухня, меню или общие продажи, нужна профильная POS. Heselo сосредоточена на комнатах и почасовых сеансах.',
        },
        {
          q: 'Для каких заведений создана Heselo?',
          a: 'Для PlayStation- и игровых клубов, караоке-комнат, бильярда, антикафе и лаунж-заведений с комнатами.',
        },
        {
          q: 'Как сравнивать цену Fazilat POS?',
          a: 'Уточните пакет, оборудование и поддержку Fazilat POS по официальному предложению. Тарифы Heselo от {low} AZN в месяц и открыто указаны на сайте.',
        },
        {
          q: 'Есть бар с кухней и комнаты с почасовой оплатой — что делать?',
          a: 'Часто логичны обе системы: Fazilat POS — заказы/продажи, Heselo — бронь комнат и сеансы. Заранее договоритесь, какие продажи где учитываются.',
        },
        {
          q: 'Какие языки поддерживает Heselo и сколько она стоит?',
          a: 'Интерфейс на азербайджанском, английском и русском. Тарифы от {low} AZN в месяц и открыто указаны на сайте.',
        },
        {
          q: 'Как проверить систему до перехода?',
          a: 'Запросите демо и по шагам пройдите свой сценарий: бронь, запуск сеанса, продажу товара и закрытие кассовой смены.',
        },
        {
          q: 'Разве клубу недостаточно WhatsApp и Excel?',
          a: 'При небольшом потоке этого может хватить, но когда брони в WhatsApp, время в таймере, а оплаты в Excel, появляются двойные брони и расхождения в кассе. В Heselo брони, сеансы, касса и склад видны в одном месте.',
        }
      ],
      ctaTitle: 'Проверьте Heselo на своём сценарии',
      ctaBody:
        'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    },
  }

export function fazilatPosAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'fazilat-pos-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
