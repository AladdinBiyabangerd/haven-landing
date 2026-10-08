import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'pos',
  'inventory',
  'gaming',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Kassa.az alternativi',
      h1: 'Otaq-vaxt klubları üçün Kassa.az brendi alternativi',
      seoTitle: 'Kassa.az alternativi — otaq-vaxt klubları | Heselo (Kassa.az deyil)',
      seoDescription:
        'Kassa.az brendinin kassa həlli ilə Heselo müqayisəsi: ümumi satış proqramı yoxsa oyun klubları üçün rezervasiya və vaxt sessiyası. Cədvəl, landşaft, FAQ — AZ, EN, RU.',
      keywords: [
        'kassa.az alternativ',
        'kassa az alternativi',
        'kassa.az müqayisə',
        'klub kassa proqramı',
        'otaq rezervasiya sistemi',
        'vaxt sessiyası proqramı',
        'playstation klub proqramı',
        'Heselo',
      ],
      intro:
        '“Kassa.az alternativi” axtarışında ad tez-tez ümumi kassa və məhsul satışı proqramı ilə qarışır. Bu bələdçi Kassa.az brendinin həllini klub kontekstində Heselo ilə müqayisə edir. Heselo Kassa.az deyil və Kassa.az ilə əlaqəli deyil; Heselo-da kassa növbəsi klub panelinin funksiyalarından biridir — əsas fokus otaq vaxtı, rezervasiya və canlı sessiyadır.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: ümumi kassa, yoxsa otaq-vaxt?',
          paragraphs: [
            'Alternativ seçməzdən əvvəl üç sualı cavablayın. Cavablar kateqoriyanı göstərir — “kassa” sözünə görə deyil.',
          ],
          bullets: [
            'Əsas gəlir: mağaza çeki və məhsul satışı, yoxsa otaq/stansiya/masa saatı?',
            'Region və dəstək: Azərbaycan, dil və fiscal/kassa tələbləri nədir?',
            'Kritik funksiyalar: gündəlik kassa hesabatı, yoxsa bron → canlı sessiya → uzadılma → növbə kassası?',
          ],
        },
        {
          id: 'when-kassa-az-fits',
          title: 'Kassa.az brendi nə vaxt qalmalıdır?',
          paragraphs: [
            'Kassa.az adı altında təqdim olunan həllər ümumi satış və kassa nöqtələri üçün uyğun ola bilər: məhsul satışı, çek və gündəlik kassa hesabatı bir konturda işləyir. Gündəlik iş məhz buna dayanırsa, bu kateqoriya düzgündür.',
            'Heselo ümumi mağaza kassasını və ya Kassa.az brendini əvəz etmək üçün nəzərdə tutulmayıb. Vaxt hesabı ayrıca cədvəl və ya taymerdə qalırsa, klub paneli axtarmağa ehtiyac yaranır.',
          ],
          bullets: [
            'Mağaza və ya xidmət nöqtəsində çek və məhsul satışı əsas axındır',
            'Gündəlik kassa hesabatı və satış qeydləri mərkəzdədir',
            'Otaq vaxtı ikinci dərəcəlidir və ya ümumiyyətlə yoxdur',
            'Vaxt üçün ayrıca Excel/taymer kifayət edir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'PlayStation stansiyası, karaoke otağı, bilyard masası və ya launj otağı vaxtla satılırsa, Heselo rezervasiyanı canlı sessiyaya, tarifi, kassa növbəsinə və stoka bağlayır.',
            'Sessiyaya əlavə olunan içki və qəlyanaltı satışı kassa növbəsi ilə bir yerdə görünür; bu, ümumi mağaza kassası ilə eyni biznes modeli deyil. Demo zamanı öz otaq və stansiyalarınızla eyni ssenarini yoxlayın.',
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
          title: 'Kassa.az brendi və Heselo — qısa müqayisə',
          paragraphs: [
            'Cədvəl əsas istiqaməti göstərir. Kassa.az üzrə modul, avadanlıq və tarifləri brendin özündən təsdiqləyin — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Kassa.az (brend)', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Ümumi satış və kassa', 'Otaq / stansiya / masa vaxtı'],
              ['Rezervasiya', 'Satış nöqtəsinə uyğun', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Adətən ayrı proses', 'Canlı sessiya, uzadılma, tarif'],
              ['Mətbəx / menyu', 'Restoran modulundan asılı', 'Tam mətbəx POS əvəzi deyil'],
              ['Kassa növbəsi', 'Gündəlik satış növbəsi', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Brenddən aktual təklif', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Provayderdən asılı', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Mağaza və ümumi kassa nöqtəsi',
                'Oyun, karaoke, bilyard, antikafe, launj',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Qısa landşaft',
          paragraphs: [
            'Ümumi kassa və satış axtarırsınızsa, Kassa.az brendi ilə yanaşı Fazilat POS, SmartPOS və oxşar həllər müzakirə olunur — modul və qiyməti birbaşa provayderdən öyrənin.',
            'Otaq və stansiya saatı satırsınızsa, Heselo ayrı kateqoriyadır — Kassa.az brendinin birbaşa alternativi deyil, otaq-vaxt klubu üçün paneldir.',
          ],
          bullets: [
            'Kassa.az, Fazilat POS, SmartPOS — ümumi satış və kassa istiqaməti',
            'Heselo — yalnız otaq-vaxt, rezervasiya və canlı sessiya ehtiyacı olan klublar',
            'Hər ikisi lazımdırsa: ümumi kassa + Heselo (paralel ssenari)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: [
            'Eyni “kassa” sözü müxtəlif məkanlarda fərqli rol oynayır. Aşağıdakı nümunələr tipik otaq-vaxt iş gününü göstərir.',
          ],
          bullets: [
            'PlayStation klubu: stansiya bronu → gəlişdə sessiya → uzadılma → qəlyanaltı → kassa bağlanışı',
            'Karaoke: otaq təqvimi → sessiya başlatma → saat tarifi → içki satışı → növbə hesabatı',
            'Paralel: mağaza/çek satışı mövcud kassada qalır; otaq vaxtı Heselo-da — satışların harada yazıldığını bölün',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Keçid checklisti',
          paragraphs: [
            'Mövcud kassa proqramınız çek və məhsul satışını yaxşı aparırsa, tələsik imtina etməyin. Yalnız klub resurslarını pilot edin.',
          ],
          bullets: [
            'Otaq, konsol və masa siyahısını və cari tarifləri hazırlayın',
            'İşçi rollarını və kassa növbəsi qaydalarını razılaşdırın',
            'Demoda tipik həftəsonu: bron → sessiya → məhsul → bağlanış',
            'Ümumi kassa qalırsa, hansı satışın harada qeyd olunduğunu yazılı bölün',
            'Bir növbə paralel işlədin; sonra qərar verin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo Kassa.az-dır?',
          a: 'Xeyr. Heselo Kassa.az deyil və Kassa.az brendi ilə əlaqəli deyil. Heselo otaq və vaxt sessiyaları üçün klub panelidir; kassa növbəsi bu panelin funksiyalarından biridir.',
        },
        {
          q: 'Heselo Kassa.az brendini tam əvəz edir?',
          a: 'Xeyr. Mağaza və ya ümumi satış nöqtəsində çek və gündəlik kassa hesabatı əsasdırsa, Kassa.az kimi ümumi kassa həlli qalmalıdır. Heselo otaq-vaxt klublarına fokuslanır.',
        },
        {
          q: 'Heselo hansı məkanlar üçündür?',
          a: 'PlayStation və oyun klubları, karaoke otaqları, bilyard, antikafe və otaqlı launj məkanları üçün.',
        },
        {
          q: 'Kassa.az qiyməti ilə necə müqayisə etməliyəm?',
          a: 'Kassa.az üzrə tarif, avadanlıq və inteqrasiya şərtlərini brendin özündən öyrənin — burada uydurma rəqəm yoxdur. Vaxt hesabı üçün ayrıca cədvəl saxlamağın xərcini də nəzərə alın. Heselo paketləri {low} AZN/aydan başlayır və saytda açıq göstərilir.',
        },
        {
          q: 'Həm Kassa.az, həm Heselo saxlamaq olarmı?',
          a: 'Bəli, məntiqli ola bilər: ümumi kassa çek və mağaza satışını, Heselo isə otaq bronu, sessiya və klub kassa növbəsini aparır. Satışların harada qeyd olunduğunu əvvəlcədən razılaşdırın.',
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
          a: 'Kiçik həcmdə ola bilər, amma bron WhatsApp-da, vaxt taymerdə, ödəniş Excel-də qalanda üst-üstə rezervasiya, unudulmuş uzadılma və kassa fərqi yaranır. Heselo panelində bron, sessiya, kassa və stok bir yerdə görünür.',
        },
      ],
      ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
      ctaBody:
        'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    },
    en: {
      shortTitle: 'Kassa.az alternative',
      h1: 'A Kassa.az brand alternative for room-time clubs',
      seoTitle: 'Kassa.az Alternative for Room-Time Clubs — Heselo (not Kassa.az)',
      seoDescription:
        'Compare the Kassa.az brand’s till solution with Heselo: general sales software versus bookings and timed sessions for gaming clubs. Table, landscape, FAQ — AZ, EN, RU.',
      keywords: [
        'kassa.az alternative',
        'kassa az alternative',
        'kassa.az comparison',
        'club till software',
        'room booking system',
        'timed session software',
        'PlayStation club software',
        'Heselo',
      ],
      intro:
        'Searches for a “Kassa.az alternative” often mix the brand name with any general till and product sales tool. This guide compares the Kassa.az brand’s solution with Heselo in a club context. Heselo is not Kassa.az and is not affiliated with it; in Heselo, cash shifts are one feature of the club panel — the core focus is room time, bookings and live sessions.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: general till or room-time?',
          paragraphs: [
            'Answer three questions before picking an alternative. The answers point to a category — not the word “kassa” alone.',
          ],
          bullets: [
            'Main revenue: shop receipts and product sales, or room / station / table hours?',
            'Region and support: Azerbaijan, languages, fiscal and till requirements?',
            'Must-have: daily till reporting, or booking → live session → extension → shift cash?',
          ],
        },
        {
          id: 'when-kassa-az-fits',
          title: 'When should the Kassa.az brand stay?',
          paragraphs: [
            'Solutions offered under the Kassa.az brand can fit general sales and till points: product sales, receipts and daily cash reporting in one stack. If that is your daily work, this category is correct.',
            'Heselo is not built to replace a general shop till or the Kassa.az brand. If time billing still lives in a spreadsheet or timer, a club panel is worth considering.',
          ],
          bullets: [
            'Receipts and product sales at a shop or service point are the main flow',
            'Daily till reporting and sales records are central',
            'Room time is secondary or absent',
            'A separate Excel/timer is enough for time',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When PlayStation stations, karaoke rooms, billiards tables or lounge rooms are sold by time, Heselo connects bookings to live sessions, rates, cash shifts and stock.',
            'Drinks and snacks sold into a session appear on the same shift cash flow; that is not the same operating model as a general shop till. In a demo, test the same scenario with your own rooms and stations.',
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
          title: 'Kassa.az brand vs Heselo — at a glance',
          paragraphs: [
            'The table shows primary focus. Confirm Kassa.az modules, hardware and pricing with the brand itself — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Kassa.az (brand)', 'Heselo'],
            rows: [
              ['Primary focus', 'General sales and till', 'Room / station / table time'],
              ['Bookings', 'Fitted to a sales point', 'Room and station calendar'],
              ['Time billing', 'Usually a separate process', 'Live session, extension, rates'],
              ['Kitchen / menus', 'Depends on restaurant modules', 'Not a full kitchen POS'],
              ['Cash shift', 'Daily sales shift', 'Club shift + session sales'],
              ['Pricing', 'Current quote from brand', 'Public: from {low} AZN/month'],
              ['Languages', 'Provider-dependent', 'AZ, EN, RU'],
              [
                'Best fit',
                'Shop and general till points',
                'Gaming, karaoke, billiards, anticafe, lounge',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Short landscape',
          paragraphs: [
            'If you need a general till and sales stack, the Kassa.az brand is discussed alongside Fazilat POS, SmartPOS and similar tools — confirm modules and pricing with each provider.',
            'If you sell room and station hours, Heselo is a different category — not a direct substitute for the Kassa.az brand, but a panel for room-time clubs.',
          ],
          bullets: [
            'Kassa.az, Fazilat POS, SmartPOS — general sales and till direction',
            'Heselo — only for clubs that need room-time, bookings and live sessions',
            'Need both: general till + Heselo (parallel scenario)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: [
            'The word “till” plays different roles in different venues. These examples show a typical room-time day.',
          ],
          bullets: [
            'PlayStation club: station booking → session on arrival → extension → snacks → cash close',
            'Karaoke: room calendar → start session → hourly rate → drinks → shift report',
            'Parallel: shop/receipt sales stay on the existing till; room time on Heselo — agree which sales land where',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Switch checklist',
          paragraphs: [
            'If your current till software handles receipts and product sales well, do not drop it in a hurry. Pilot only club resources.',
          ],
          bullets: [
            'Prepare room, console and table lists with current rates',
            'Agree staff roles and cash-shift rules',
            'In the demo, run a typical weekend: book → session → item → close',
            'If the general till remains, document which sales each system records',
            'Run one shift in parallel, then decide',
          ],
        },
      ],
      faq: [
        {
          q: 'Is Heselo the same as Kassa.az?',
          a: 'No. Heselo is not Kassa.az and is not affiliated with the Kassa.az brand. Heselo is a club panel for room and timed sessions; cash shifts are one feature of that panel.',
        },
        {
          q: 'Does Heselo fully replace the Kassa.az brand?',
          a: 'No. When receipts and daily till reporting at a shop or general sales point are central, keep a general till solution such as Kassa.az. Heselo focuses on room-time clubs.',
        },
        {
          q: 'Which venues is Heselo built for?',
          a: 'PlayStation and gaming clubs, karaoke rooms, billiards, anticafes and room-based lounges.',
        },
        {
          q: 'How should I compare Kassa.az pricing?',
          a: 'Get current Kassa.az plan, hardware and integration terms from the brand itself — no invented figures here. Include the cost of keeping a separate time spreadsheet. Heselo plans start from {low} AZN per month and are listed publicly.',
        },
        {
          q: 'Can we keep both Kassa.az and Heselo?',
          a: 'Yes, it can make sense: the general till for receipts and shop sales, Heselo for room bookings, sessions and club cash shifts. Agree in advance which sales each system records.',
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
          a: 'They can work at small volumes, but when bookings live in WhatsApp, time on a timer and payments in Excel, you get double bookings, forgotten extensions and cash discrepancies. In Heselo, bookings, sessions, cash and stock sit in one place.',
        },
      ],
      ctaTitle: 'Test Heselo with your workflow',
      ctaBody:
        'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Альтернатива Kassa.az',
      h1: 'Альтернатива бренду Kassa.az для клубов с почасовой оплатой',
      seoTitle: 'Альтернатива Kassa.az для клубов — Heselo (не Kassa.az)',
      seoDescription:
        'Сравнение кассового решения бренда Kassa.az и Heselo: общая касса или бронирования и сеансы для игровых клубов. Таблица, ландшафт, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива kassa.az',
        'kassa az альтернатива',
        'kassa.az сравнение',
        'кассовая программа для клуба',
        'система бронирования комнат',
        'учёт почасовых сеансов',
        'программа для playstation клуба',
        'Heselo',
      ],
      intro:
        'Поиск «альтернативы Kassa.az» часто смешивает бренд с любой общей кассовой программой. В этом руководстве решение бренда Kassa.az сравнивается с Heselo в клубном контексте. Heselo — это не Kassa.az и не связана с этим брендом; в Heselo кассовая смена — одна из функций клубной панели, а основной фокус — время комнат, бронирования и живые сеансы.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: общая касса или время комнат?',
          paragraphs: [
            'Перед выбором альтернативы ответьте на три вопроса. Ответы указывают на категорию — не только на слово «кassa».',
          ],
          bullets: [
            'Основная выручка: чеки магазина и продажа товаров или часы комнаты / станции / стола?',
            'Регион и поддержка: Азербайджан, языки, фискальные и кассовые требования?',
            'Критично: ежедневная кассовая отчётность или бронь → живой сеанс → продление → касса смены?',
          ],
        },
        {
          id: 'when-kassa-az-fits',
          title: 'Когда стоит оставить бренд Kassa.az?',
          paragraphs: [
            'Решения под брендом Kassa.az могут подходить для общих продаж и кассовых точек: продажа товаров, чеки и ежедневная кассовая отчётность в одном контуре. Если на этом строится день, категория верная.',
            'Heselo не создавалась, чтобы заменить общую магазинную кассу или бренд Kassa.az. Если учёт времени остаётся в таблице или таймере, имеет смысл смотреть клубную панель.',
          ],
          bullets: [
            'Чеки и продажа товаров в магазине или точке обслуживания — основной поток',
            'Ежедневная кассовая отчётность и записи продаж в центре',
            'Время комнат вторично или отсутствует',
            'Для времени достаточно отдельной таблицы/таймера',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если PlayStation-станции, караоке-комнаты, бильярдные столы или лаунж-комнаты продаются по времени, Heselo связывает бронь с живым сеансом, тарифом, кассовой сменой и складом.',
            'Напитки и закуски, добавленные в сеанс, видны в той же кассовой смене; это другая модель, чем общая магазинная касса. На демо проверьте тот же сценарий на своих комнатах и станциях.',
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
          title: 'Бренд Kassa.az и Heselo — краткое сравнение',
          paragraphs: [
            'Таблица показывает основную направленность. Модули, оборудование и цены Kassa.az уточняйте у самого бренда — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Kassa.az (бренд)', 'Heselo'],
            rows: [
              ['Основной фокус', 'Общие продажи и касса', 'Время комнаты / станции / стола'],
              ['Бронирование', 'Под точку продаж', 'Календарь комнат и станций'],
              ['Учёт времени', 'Обычно отдельный процесс', 'Живой сеанс, продление, тариф'],
              ['Кухня / меню', 'Зависит от модулей', 'Не полноценная кухонная POS'],
              ['Кассовая смена', 'Смена продаж', 'Клубная смена + продажи в сеансе'],
              ['Цена', 'Актуальное предложение бренда', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Зависит от поставщика', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Магазин и общая касса',
                'Игровые, караоке, бильярд, антикафе, лаунж',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Короткий ландшафт',
          paragraphs: [
            'Если нужна общая касса и продажи, бренд Kassa.az обсуждают вместе с Fazilat POS, SmartPOS и аналогами — модули и цены уточняйте у поставщиков.',
            'Если вы продаёте часы комнат и станций, Heselo — другая категория: не прямая замена бренда Kassa.az, а панель для клубов с оплатой времени.',
          ],
          bullets: [
            'Kassa.az, Fazilat POS, SmartPOS — общие продажи и касса',
            'Heselo — только для клубов с бронью, временем комнат и живыми сеансами',
            'Нужны оба — общая касса + Heselo (параллельный сценарий)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: [
            'Слово «касса» в разных заведениях означает разное. Ниже — типичный день с оплатой времени.',
          ],
          bullets: [
            'PlayStation-клуб: бронь станции → сеанс по приходу → продление → закуски → закрытие кассы',
            'Караоке: календарь комнат → старт сеанса → почасовой тариф → напитки → отчёт смены',
            'Параллельно: чеки/магазин остаются в текущей кассе; время комнат — в Heselo; разделите продажи',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода',
          paragraphs: [
            'Если текущая кассовая программа хорошо справляется с чеками и продажей товаров, не отказывайтесь от неё впопыхах. Пилотируйте только клубные ресурсы.',
          ],
          bullets: [
            'Подготовьте списки комнат, консолей и столов и актуальные тарифы',
            'Согласуйте роли сотрудников и правила кассовой смены',
            'В демо прогоните типичные выходные: бронь → сеанс → товар → закрытие',
            'Если общая касса остаётся, зафиксируйте, какие продажи где учитываются',
            'Одну смену ведите параллельно, затем решайте',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo — это Kassa.az?',
          a: 'Нет. Heselo — это не Kassa.az и не связана с брендом Kassa.az. Heselo — клубная панель для комнат и почасовых сеансов; кассовая смена — одна из её функций.',
        },
        {
          q: 'Heselo полностью заменяет бренд Kassa.az?',
          a: 'Нет. Если в центре чеки и ежедневная кассовая отчётность в магазине или точке продаж, оставьте общую кассу вроде Kassa.az. Heselo сосредоточена на клубах с оплатой времени.',
        },
        {
          q: 'Для каких заведений создана Heselo?',
          a: 'Для PlayStation- и игровых клубов, караоке-комнат, бильярда, антикафе и лаунж-заведений с комнатами.',
        },
        {
          q: 'Как сравнивать цену Kassa.az?',
          a: 'Актуальные тарифы, оборудование и интеграцию Kassa.az уточняйте у самого бренда — без выдуманных цифр. Учтите затраты на отдельную таблицу учёта времени. Тарифы Heselo от {low} AZN в месяц и открыто на сайте.',
        },
        {
          q: 'Можно оставить и Kassa.az, и Heselo?',
          a: 'Да, это может быть логично: общая касса для чеков и магазина, Heselo — для брони комнат, сеансов и клубной смены. Заранее договоритесь, какие продажи где учитываются.',
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
          a: 'При небольшом потоке этого может хватить, но когда брони в WhatsApp, время в таймере, а оплаты в Excel, появляются двойные брони, забытые продления и расхождения в кассе. В Heselo брони, сеансы, касса и склад видны в одном месте.',
        },
      ],
      ctaTitle: 'Проверьте Heselo на своём сценарии',
      ctaBody:
        'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    },
  }

export function kassaAzAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'kassa-az-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
