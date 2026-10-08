import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'gaming',
  'karaoke',
  'pos',
  'inventory',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Klublar üçün iiko alternativi',
      h1: 'Otaqlı əyləncə klubları üçün iiko alternativi',
      seoTitle: 'iiko alternativi klublar üçün — otaq, sessiya, kassa | Heselo',
      seoDescription:
        'iiko restoran POS-udur; Heselo otaq və vaxt klubları üçündür. Qərar meyarları, müqayisə cədvəli, Poster/Quick Resto landşaftı və keçid checklisti — Azərbaycan, EN, RU.',
      keywords: [
        'iiko alternativ',
        'iiko alternativi klublar',
        'iiko müqayisə',
        'restoran POS alternativi',
        'klub idarəetmə proqramı',
        'otaq rezervasiya sistemi',
        'vaxt sessiyası proqramı',
        'playstation klub proqramı',
        'karaoke rezervasiya sistemi',
        'Heselo',
      ],
      intro:
        'iiko axtarışında çox vaxt restoran mətbəxi, KDS və çatdırılma gözlənilir. Əsas gəliriniz otaq, konsol və ya masa saatıdırsa, ehtiyac fərqlidir: rezervasiya, canlı sessiya, uzadılma və kassa növbəsi. Bu bələdçi iiko-nu klub/otaq-vaxt nishi ilə dürüst müqayisə edir — Heselo tam restoran POS əvəzi deyil.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: restoran, yoxsa otaq-vaxt?',
          paragraphs: [
            'Alternativ seçməzdən əvvəl üç sualı cavablayın. Cavablar hansı kateqoriyaya baxacağınızı göstərir — brend adına görə deyil.',
          ],
          bullets: [
            'Əsas gəlir: yemək-içki sifarişi və çatdırılma, yoxsa otaq/stansiya/masa saatı?',
            'Region və dəstək: MDB/Azərbaycan komandası, dil və fiscal/kassa tələbləri nədir?',
            'Kritik funksiyalar: mətbəx ekranı və reseptura, yoxsa bron → canlı sessiya → uzadılma → kassa?',
          ],
        },
        {
          id: 'when-iiko-fits',
          title: 'iiko nə vaxt qalmalıdır?',
          paragraphs: [
            'iiko restoran əməliyyatında güclüdür: zal, mətbəx ekranı, texkartalar, QR menyu və çatdırılma bir konturda işləyə bilər. Gündəlik iş məhz buna dayanırsa, iiko (və ya digər restoran POS) düzgün kateqoriyadır.',
            'Heselo mətbəx KDS-ini, resepturanı və çatdırılma agregatorlarını əvəz etmək üçün nəzərdə tutulmayıb. Mətbəx mərkəzdədirsə, klub paneli axtarmağa ehtiyac yoxdur.',
          ],
          bullets: [
            'Restoran zalı + mətbəx + ofisiant sifarişi əsas axındır',
            'Reseptura, yarımfabrikat və inventar mətbəxə bağlıdır',
            'Wolt, Glovo və ya oxşar çatdırılma inteqrasiyası kritikdir',
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
          title: 'iiko və Heselo — qısa müqayisə',
          paragraphs: [
            'Cədvəl əsas istiqaməti göstərir. Modul və paket tərkibini satınalmadan əvvəl hər provayderlə təsdiqləyin. iiko qiyməti modul, inteqrasiya və tərəfdaş şərtlərindən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'iiko', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Restoran, mətbəx, çatdırılma', 'Otaq / stansiya / masa vaxtı'],
              ['Rezervasiya', 'Masa və restoran axınına uyğun', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Sifariş və masa xidməti mərkəzdə', 'Canlı sessiya, uzadılma, tarif'],
              ['Mətbəx / KDS', 'Güclü restoran konturu', 'Tam mətbəx POS əvəzi deyil'],
              ['Çatdırılma', 'Aqreqator və restoran inteqrasiyaları', 'Klub sessiyasına fokus'],
              ['Kassa', 'Restoran növbəsi və çeklər', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Modul və tərəfdaş təklifi ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Region və paketdən asılı', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Mətbəxli restoran və çatdırılma',
                'Oyun, karaoke, bilyard, antikafe, launj',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Restoran axtarırsınızsa: qısa landşaft',
          paragraphs: [
            'Axtarışınız mətbəx, KDS və çatdırılmadırsa, klub paneli deyil, restoran POS kateqoriyasına baxın. Bazarda tez-tez müzakirə olunan seçimlər arasında Poster, Quick Resto, r_keeper və Saby var — onların modul və qiymətini birbaşa provayderdən öyrənin.',
            'Otaq və stansiya saatı satırsınızsa, bu siyahı sizin əsas alternativiniz deyil. Aşağıdakı klub ssenariləri Heselo-nun harada işlədiyini göstərir.',
          ],
          bullets: [
            'Poster, Quick Resto, r_keeper, Saby — restoran/mətbəx istiqaməti',
            'Heselo — yalnız otaq-vaxt, rezervasiya və canlı sessiya ehtiyacı olan klublar',
            'Hər iki ehtiyac varsa: restoran POS + Heselo (aşağıda paralel ssenari)',
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
            'Paralel: güclü mətbəx iiko-da qalır; otaq və stansiya vaxtı Heselo-da — hansı satışın harada yazıldığı əvvəlcədən bölünür',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Keçid checklisti',
          paragraphs: [
            'Tam keçiddən əvvəl bir növbəlik sınaq səhvləri erkən göstərir. Mətbəx konturu qalırsa, onu köçürməyin — yalnız klub resurslarını gətirin.',
          ],
          bullets: [
            'Otaq, konsol və masa siyahısını və cari tarifləri hazırlayın',
            'İşçi rollarını və kassa növbəsi qaydalarını razılaşdırın',
            'Demoda tipik həftəsonu: bron → sessiya → məhsul → bağlanış',
            'Mətbəx/çatdırılma qalırsa, restoran sistemini saxlayın və məsuliyyəti yazılı bölün',
            'Bir növbə paralel işlədin; sonra qərar verin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo iiko-nu tam əvəz edir?',
          a: 'Xeyr. Tam restoran mətbəxi, reseptura və çatdırılma əsasdırsa, ixtisaslaşmış restoran POS qalmalıdır. Heselo otaq və vaxt sessiyalarına fokuslanır.',
        },
        {
          q: 'Heselo hansı məkanlar üçündür?',
          a: 'PlayStation və oyun klubları, karaoke otaqları, bilyard, antikafe və otaqlı launj məkanları üçün.',
        },
        {
          q: 'Poster və ya digər restoran POS-dan fərqi nədir?',
          a: 'Poster, Quick Resto, r_keeper və oxşar sistemlər restoran və mətbəxə yönəlir. Heselo bronu canlı otaq/stansiya sessiyasına çevirən klub paneli kimi qurulub; mətbəx KDS əvəzi deyil.',
        },
        {
          q: 'Barda mətbəx, otaqlarda isə saat satırıq — nə etmək olar?',
          a: 'Çox vaxt hər iki sistem məntiqlidir: iiko (və ya digər restoran POS) sifariş və mətbəxi, Heselo isə otaq bronu və sessiyanı aparır. Hansı satışın harada qeyd olunduğunu əvvəlcədən razılaşdırın.',
        },
        {
          q: 'Wolt və Glovo Heselo-da varmı?',
          a: 'Heselo çatdırılma aqreqatorlarına fokuslanmır. Çatdırılma kritikdirsə, restoran POS saxlayın; klub vaxtı üçün isə Heselo demosunu sınayın.',
        },
        {
          q: 'Heselo neçə dildədir və qiyməti nədir?',
          a: 'İnterfeys Azərbaycan, ingilis və rus dillərindədir. Paketlər {low} AZN/aydan başlayır və saytda açıq göstərilir. iiko üzrə yekun xərci aktual tərəfdaş təklifi ilə dəqiqləşdirin.',
        },
        {
          q: 'Keçməzdən əvvəl necə yoxlaya bilərəm?',
          a: 'Demo istəyin və öz ssenarinizi addım-addım keçin: rezervasiya, sessiyanın başlaması, məhsul satışı və kassa bağlanışı.',
        },
        {
          q: 'Klub üçün WhatsApp və Excel kifayət etmirmi?',
          a: 'Kiçik həcmdə ola bilər, amma bron WhatsApp-da, vaxt taymerdə, ödəniş Excel-də qalanda üst-üstə rezervasiya, unudulmuş uzadılma və kassa fərqi yaranır. Heselo panelində bron, sessiya, kassa və stok bir yerdə görünür.',
        },
      ],
      ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
      ctaBody:
        'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    },
    en: {
      shortTitle: 'iiko alternative for clubs',
      h1: 'An iiko alternative for room-based entertainment clubs',
      seoTitle: 'iiko Alternative for Clubs — Rooms, Sessions, Cash | Heselo',
      seoDescription:
        'iiko is a restaurant POS; Heselo is for room-time clubs. Decision criteria, comparison table, Poster/Quick Resto landscape, and a switch checklist — AZ, EN, RU.',
      keywords: [
        'iiko alternative',
        'iiko alternative for clubs',
        'iiko comparison',
        'restaurant POS alternative',
        'club management software',
        'room booking system',
        'timed session software',
        'PlayStation club software',
        'karaoke booking system',
        'Heselo',
      ],
      intro:
        'Searches for an iiko alternative often assume a restaurant kitchen, KDS and delivery. If your main revenue is room, console or table hours, the need is different: bookings, live sessions, extensions and cash shifts. This guide compares iiko honestly with the club / room-time niche — Heselo is not a full restaurant POS replacement.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: restaurant or room-time?',
          paragraphs: [
            'Answer three questions before picking an alternative. The answers point to a category — not a brand name.',
          ],
          bullets: [
            'Main revenue: food & drink orders and delivery, or room / station / table hours?',
            'Region and support: CIS / Azerbaijan team, languages, fiscal and till requirements?',
            'Must-have functions: kitchen screens and recipes, or booking → live session → extension → cash?',
          ],
        },
        {
          id: 'when-iiko-fits',
          title: 'When should iiko stay?',
          paragraphs: [
            'iiko is strong in restaurant operations: dining room, kitchen screens, recipes, QR menus and delivery can run in one stack. If that is your daily work, iiko (or another restaurant POS) is the right category.',
            'Heselo is not built to replace kitchen KDS, recipes or delivery aggregators. If the kitchen is central, you do not need a club panel.',
          ],
          bullets: [
            'Dining room + kitchen + waiter orders are the main flow',
            'Recipes, prep and inventory are kitchen-linked',
            'Wolt, Glovo or similar delivery integrations are critical',
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
          title: 'iiko vs Heselo — at a glance',
          paragraphs: [
            'The table shows primary focus. Confirm modules and packages with each provider before buying. iiko pricing depends on modules, integrations and partner terms — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'iiko', 'Heselo'],
            rows: [
              ['Primary focus', 'Restaurant, kitchen, delivery', 'Room / station / table time'],
              ['Bookings', 'Fitted to tables and restaurant flow', 'Room and station calendar'],
              ['Time billing', 'Orders and table service centred', 'Live session, extension, rates'],
              ['Kitchen / KDS', 'Strong restaurant stack', 'Not a full kitchen POS'],
              ['Delivery', 'Aggregator and restaurant integrations', 'Club session focus'],
              ['Cash', 'Restaurant shifts and receipts', 'Club shifts + session sales'],
              ['Pricing', 'By modules and partner quote', 'Public: from {low} AZN/month'],
              ['Languages', 'Depends on region and package', 'AZ, EN, RU'],
              [
                'Best fit',
                'Kitchen restaurants and delivery',
                'Gaming, karaoke, billiards, anticafe, lounge',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Looking for a restaurant stack? Short landscape',
          paragraphs: [
            'If you need a kitchen, KDS and delivery, look at restaurant POS — not a club panel. Names often discussed include Poster, Quick Resto, r_keeper and Saby; confirm modules and pricing with each provider.',
            'If you sell room and station hours, that list is not your main alternative. The club scenarios below show where Heselo fits.',
          ],
          bullets: [
            'Poster, Quick Resto, r_keeper, Saby — restaurant / kitchen direction',
            'Heselo — only for clubs that need room-time, bookings and live sessions',
            'Need both: restaurant POS + Heselo (parallel scenario below)',
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
            'Parallel: strong kitchen stays on iiko; room and station time on Heselo — agree which sales land where',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Switch checklist',
          paragraphs: [
            'A one-shift pilot surfaces gaps before a full move. If the kitchen stack stays, do not migrate it — bring only club resources.',
          ],
          bullets: [
            'Prepare room, console and table lists with current rates',
            'Agree staff roles and cash-shift rules',
            'In the demo, run a typical weekend: book → session → item → close',
            'If kitchen/delivery remains, keep the restaurant system and document ownership',
            'Run one shift in parallel, then decide',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo fully replace iiko?',
          a: 'No. Keep a specialised restaurant POS when a full kitchen, recipes and delivery are central. Heselo focuses on rooms and timed sessions.',
        },
        {
          q: 'Which venues is Heselo built for?',
          a: 'PlayStation and gaming clubs, karaoke rooms, billiards, anticafes and room-based lounges.',
        },
        {
          q: 'How is that different from Poster or other restaurant POS tools?',
          a: 'Poster, Quick Resto, r_keeper and similar tools target restaurants and kitchens. Heselo is built as a club panel that turns bookings into live room/station sessions — not as a kitchen KDS replacement.',
        },
        {
          q: 'We have a kitchen bar and rooms sold by the hour — what then?',
          a: 'Often both systems make sense: iiko (or another restaurant POS) for orders and the kitchen, Heselo for room bookings and sessions. Agree in advance which sales each system records.',
        },
        {
          q: 'Does Heselo support Wolt and Glovo?',
          a: 'Heselo does not focus on delivery aggregators. If delivery is critical, keep a restaurant POS; for club time, try a Heselo demo.',
        },
        {
          q: 'Which languages does Heselo support and what does it cost?',
          a: 'The interface is in Azerbaijani, English and Russian. Plans start from {low} AZN per month and are listed publicly on this site. Confirm iiko totals with a current partner quote.',
        },
        {
          q: 'How can I check the fit before switching?',
          a: 'Request a demo and walk your real flow step by step: booking, session start, item sale and cash-shift close.',
        },
        {
          q: 'Aren’t WhatsApp and Excel enough for a club?',
          a: 'They can work at small volumes, but when bookings live in WhatsApp, time on a timer and payments in Excel, you get double bookings, forgotten extensions and cash discrepancies. In Heselo, bookings, sessions, cash and stock sit in one place.',
        },
      ],
      ctaTitle: 'Test Heselo with your workflow',
      ctaBody:
        'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Альтернатива iiko для клубов',
      h1: 'Альтернатива iiko для клубов с комнатами и почасовой оплатой',
      seoTitle: 'Альтернатива iiko для клубов — комнаты, сеансы, касса | Heselo',
      seoDescription:
        'iiko — ресторанная POS; Heselo — для клубов с оплатой времени комнат. Критерии выбора, таблица сравнения, ландшафт Poster/Quick Resto и чеклист перехода — AZ, EN, RU.',
      keywords: [
        'альтернатива iiko',
        'альтернатива iiko для клубов',
        'iiko сравнение',
        'альтернатива ресторанной POS',
        'программа управления клубом',
        'система бронирования комнат',
        'учёт почасовых сеансов',
        'программа для playstation клуба',
        'система бронирования караоке',
        'Heselo',
      ],
      intro:
        'Поиск альтернативы iiko часто подразумевает ресторанную кухню, KDS и доставку. Если основная выручка — часы комнаты, консоли или стола, нужна другая модель: бронирования, живые сеансы, продления и кассовые смены. Это руководство честно сравнивает iiko с клубной / почасовой нишей — Heselo не заменяет полноценную ресторанную POS.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: ресторан или время комнат?',
          paragraphs: [
            'Перед выбором альтернативы ответьте на три вопроса. Ответы указывают на категорию — не на бренд.',
          ],
          bullets: [
            'Основная выручка: заказы еды и напитков и доставка или часы комнаты / станции / стола?',
            'Регион и поддержка: команда СНГ / Азербайджана, языки, фискальные и кассовые требования?',
            'Критичные функции: кухонные экраны и техкарты или бронь → живой сеанс → продление → касса?',
          ],
        },
        {
          id: 'when-iiko-fits',
          title: 'Когда iiko стоит оставить?',
          paragraphs: [
            'iiko сильна в ресторанных операциях: зал, кухонные экраны, техкарты, QR-меню и доставка могут работать в одном контуре. Если на этом строится день, iiko (или другая ресторанная POS) — верная категория.',
            'Heselo не создавалась, чтобы заменить кухонный KDS, техкарты и агрегаторы доставки. Если кухня в центре, клубная панель не нужна.',
          ],
          bullets: [
            'Зал + кухня + заказы официантов — основной поток',
            'Техкарты, заготовки и склад связаны с кухней',
            'Интеграции Wolt, Glovo или аналогов критичны',
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
          title: 'iiko и Heselo — краткое сравнение',
          paragraphs: [
            'Таблица показывает основную направленность. Перед покупкой уточните модули и пакеты у каждого поставщика. Цена iiko зависит от модулей, интеграций и условий партнёра — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'iiko', 'Heselo'],
            rows: [
              ['Основной фокус', 'Ресторан, кухня, доставка', 'Время комнаты / станции / стола'],
              ['Бронирование', 'Под зал и ресторанный поток', 'Календарь комнат и станций'],
              ['Учёт времени', 'Заказы и обслуживание столов', 'Живой сеанс, продление, тариф'],
              ['Кухня / KDS', 'Сильный ресторанный контур', 'Не полноценная кухонная POS'],
              ['Доставка', 'Агрегаторы и ресторанные интеграции', 'Фокус на клубном сеансе'],
              ['Касса', 'Ресторанные смены и чеки', 'Клубные смены + продажи в сеансе'],
              ['Цена', 'По модулям и предложению партнёра', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Зависит от региона и пакета', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Рестораны с кухней и доставкой',
                'Игровые, караоке, бильярд, антикафе, лаунж',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ищете ресторанный стек? Короткий ландшафт',
          paragraphs: [
            'Если нужны кухня, KDS и доставка, смотрите ресторанные POS — не клубную панель. Часто обсуждают Poster, Quick Resto, r_keeper и Saby; модули и цены уточняйте у поставщиков.',
            'Если вы продаёте часы комнат и станций, этот список — не ваша главная альтернатива. Сценарии ниже показывают, где работает Heselo.',
          ],
          bullets: [
            'Poster, Quick Resto, r_keeper, Saby — ресторан / кухня',
            'Heselo — только для клубов с бронью, временем комнат и живыми сеансами',
            'Нужно оба: ресторанная POS + Heselo (параллельный сценарий ниже)',
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
            'Параллельно: сильная кухня остаётся в iiko; время комнат и станций — в Heselo; заранее разделите, какие продажи где учитываются',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода',
          paragraphs: [
            'Пилот на одну смену выявляет пробелы до полного перехода. Если кухонный контур остаётся, не переносите его — переносите только клубные ресурсы.',
          ],
          bullets: [
            'Подготовьте списки комнат, консолей и столов и актуальные тарифы',
            'Согласуйте роли сотрудников и правила кассовой смены',
            'В демо прогоните типичные выходные: бронь → сеанс → товар → закрытие',
            'Если кухня/доставка остаются, оставьте ресторанную систему и зафиксируйте зоны ответственности',
            'Одну смену ведите параллельно, затем решайте',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo полностью заменяет iiko?',
          a: 'Нет. Если в центре полноценная кухня, техкарты и доставка, нужна профильная ресторанная POS. Heselo сосредоточена на комнатах и почасовых сеансах.',
        },
        {
          q: 'Для каких заведений создана Heselo?',
          a: 'Для PlayStation- и игровых клубов, караоке-комнат, бильярда, антикафе и лаунж-заведений с комнатами.',
        },
        {
          q: 'Чем это отличается от Poster или других ресторанных POS?',
          a: 'Poster, Quick Resto, r_keeper и похожие системы ориентированы на ресторан и кухню. Heselo — клубная панель, которая превращает бронь в живой сеанс комнаты/станции, а не замена кухонного KDS.',
        },
        {
          q: 'Есть бар с кухней и комнаты с почасовой оплатой — что делать?',
          a: 'Часто логичны обе системы: iiko (или другая ресторанная POS) — заказы и кухня, Heselo — бронь комнат и сеансы. Заранее договоритесь, какие продажи где учитываются.',
        },
        {
          q: 'Есть ли в Heselo Wolt и Glovo?',
          a: 'Heselo не фокусируется на агрегаторах доставки. Если доставка критична, оставьте ресторанную POS; для клубного времени попробуйте демо Heselo.',
        },
        {
          q: 'Какие языки поддерживает Heselo и сколько она стоит?',
          a: 'Интерфейс на азербайджанском, английском и русском. Тарифы от {low} AZN в месяц и открыто указаны на сайте. Итоговую стоимость iiko уточняйте по актуальному предложению партнёра.',
        },
        {
          q: 'Как проверить систему до перехода?',
          a: 'Запросите демо и по шагам пройдите свой сценарий: бронь, запуск сеанса, продажу товара и закрытие кассовой смены.',
        },
        {
          q: 'Разве клубу недостаточно WhatsApp и Excel?',
          a: 'При небольшом потоке этого может хватить, но когда брони в WhatsApp, время в таймере, а оплаты в Excel, появляются двойные брони, забытые продления и расхождения в кассе. В Heselo брони, сеансы, касса и склад видны в одном месте.',
        },
      ],
      ctaTitle: 'Проверьте Heselo на своём сценарии',
      ctaBody:
        'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    },
  }

export function iikoAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'iiko-alternative-clubs',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
