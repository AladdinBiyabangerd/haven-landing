import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'pos',
  'inventory',
  'karaoke',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Baza Market alternativi',
      h1: 'Klub əməliyyatları üçün Baza Market alternativi',
      seoTitle: 'Baza Market alternativi — klub paneli Heselo (marketplace deyil)',
      seoDescription:
        'Baza Market ticarət/kataloq yönümlüdür; Heselo daxili klub panelidir. Müqayisə cədvəli, landşaft, FAQ — karaoke, oyun klubları — AZ, EN, RU.',
      keywords: [
        'baza market alternativ',
        'baza market müqayisə',
        'klub idarəetmə proqramı',
        'otaq rezervasiya sistemi',
        'karaoke rezervasiya sistemi',
        'marketplace alternativi klub',
        'Heselo',
      ],
      intro:
        'Baza Market adı ilə tanınan həllər daha çox məhsul satışı, kataloq, mağaza və ya marketplace istiqamətində işləyir. Heselo marketplace deyil: bu, məkanın öz otaqlarını, rezervasiyalarını, canlı sessiyalarını, kassa növbəsini və stokunu idarə edən daxili klub panelidir.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: ticarət platforması, yoxsa klub paneli?',
          paragraphs: [
            'Alternativ seçməzdən əvvəl üç sualı cavablayın. Cavablar kateqoriyanı göstərir — brend adına görə deyil.',
          ],
          bullets: [
            'Əsas gəlir: onlayn/mağaza məhsul satışı və kataloq, yoxsa otaq/stansiya/masa saatı?',
            'Anbar, təchizatçı və komissiya modeli kritikdirmi?',
            'Kritik funksiyalar: kataloq və satış kanalları, yoxsa bron → canlı sessiya → kassa?',
          ],
        },
        {
          id: 'when-baza-market-fits',
          title: 'Baza Market nə vaxt qalmalıdır?',
          paragraphs: [
            'Məqsədiniz məhsul kataloqu yaratmaq, onlayn və ya mağazada mal satmaq, anbar və təchizatçı ilə işləməkdirsə, Baza Market kimi ticarət yönümlü həll daha uyğun ola bilər.',
            'Heselo bu ssenari üçün qurulmayıb — o, daxili klub əməliyyatlarına fokuslanır, açıq marketplace və ya multi-satıcı model deyil.',
          ],
          bullets: [
            'Kataloq, qiymət və satış kanalları mərkəzdədir',
            'Anbar, təchizatçı və ya komissiya modeli vacibdir',
            'Otaq vaxtı ikinci dərəcəlidir və ya ümumiyyətlə yoxdur',
            'Klub yalnız məhsul satışı aparmır',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Karaoke otağı, PlayStation stansiyası, bilyard masası və ya launj otağı vaxtla satılırsa, Heselo rezervasiyanı sessiyaya çevirir, vaxt tarifini hesablayır və sessiyaya əlavə olunan içki-qəlyanaltını stokdan silir.',
            'Bar satışı sessiyaya bağlanır; bu, e-ticarət kataloqu ilə eyni şey deyil. Demo zamanı yalnız klub otaqlarını və tarifləri qurub bir növbəni sınayın.',
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
          title: 'Baza Market və Heselo — qısa müqayisə',
          paragraphs: [
            'Cədvəl əsas istiqaməti göstərir. Baza Market-in qiymət və komissiya şərtlərini birbaşa dəqiqləşdirin — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Baza Market', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Məhsul satışı, kataloq, ticarət', 'Otaq / stansiya / masa vaxtı'],
              ['Marketplace', 'Ticarət/marketplace yönü', 'Daxili klub paneli, marketplace deyil'],
              ['Rezervasiya', 'Satış/kataloq axınına uyğun', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Adətən tətbiq olunmur', 'Canlı sessiya, uzadılma, tarif'],
              ['Anbar', 'Ticarət anbarı və təchizat', 'Klub stoku, sessiyaya satış'],
              ['Kassa', 'Satış və komissiya konturu', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Brenddən aktual təklif', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Provayderdən asılı', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Kataloq, mağaza, marketplace',
                'Karaoke, oyun, bilyard, antikafe, launj',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Qısa landşaft',
          paragraphs: [
            'Ticarət və kataloq axtarırsınızsa, Baza Market tipli həllər e-ticarət və pərakəndə konturuna yaxındır. Otaq və stansiya saatı satırsınızsa, Heselo ayrı kateqoriyadır.',
            'Restoran POS (Clopos, iiko, Dine) və ümumi kassa (Fazilat POS, SmartPOS) də fərqli kateqoriyalardır — hər birini gündəlik əməliyyatınıza görə seçin.',
          ],
          bullets: [
            'Baza Market — məhsul kataloqu və ticarət satışı',
            'Clopos, iiko, Dine — restoran/mətbəx',
            'Heselo — otaq-vaxt klubları (daxili panel)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: [
            'Ticarət aləti ilə klub paneli eyni gündə fərqli rollarda ola bilər. Aşağıdakı nümunələr tipik otaq-vaxt iş gününü göstərir.',
          ],
          bullets: [
            'Karaoke: otaq təqvimi → sessiya başlatma → saat tarifi → içki satışı → növbə hesabatı',
            'PlayStation klubu: stansiya bronu → gəlişdə sessiya → uzadılma → qəlyanaltı → kassa bağlanışı',
            'Paralel: onlayn/mağaza satışı ticarət həllində qalır; otaq vaxtı Heselo-da',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Keçid checklisti',
          paragraphs: [
            'Onlayn və ya mağaza satışınız varsa, onu mövcud ticarət həllində saxlayın. Heselo-ya yalnız klub resurslarını gətirin.',
          ],
          bullets: [
            'Otaq, konsol və masa siyahısını və cari tarifləri hazırlayın',
            'Sessiyaya satılan məhsul siyahısını müəyyən edin',
            'Demoda bir növbə: bron → sessiya → məhsul → kassa bağlanışı',
            'Ticarət satışları ilə klub satışlarının harada qeyd olunduğunu yazılı bölün',
            'Bir növbə paralel işlədin; sonra qərar verin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo Baza Market-in marketplace-i əvəz edirmi?',
          a: 'Xeyr. Heselo marketplace və ya açıq ticarət platforması deyil. O, klubun daxili otaq, bron, sessiya, kassa və stok prosesinə fokuslanır.',
        },
        {
          q: 'Heselo Baza Market-i tam əvəz edir?',
          a: 'Xeyr. Kataloq, onlayn satış və anbar/təchizatçı konturu əsasdırsa, ticarət yönümlü həll qalmalıdır. Heselo otaq-vaxt klubları üçündür.',
        },
        {
          q: 'Heselo hansı məkanlar üçündür?',
          a: 'Karaoke otaqları, PlayStation və oyun klubları, bilyard, antikafe və otaqlı launj məkanları üçün.',
        },
        {
          q: 'Baza Market qiyməti ilə necə müqayisə etməliyəm?',
          a: 'Baza Market-in aktual qiymət və komissiya şərtlərini birbaşa dəqiqləşdirin — burada uydurma rəqəm yoxdur. Eyni əməliyyat ssenarisi üzrə ticarət platforması ilə klub panelini müqayisə edin. Heselo paketləri {low} AZN/aydan başlayır və saytda açıq göstərilir.',
        },
        {
          q: 'Həm Baza Market, həm Heselo saxlamaq olarmı?',
          a: 'Bəli. Onlayn və mağaza satışını ticarət həllində saxlayın; otaq bronu, sessiya və klub kassasını Heselo-da aparın. Satışların harada qeyd olunduğunu əvvəlcədən razılaşdırın.',
        },
        {
          q: 'Heselo neçə dildədir və qiyməti nədir?',
          a: 'İnterfeys Azərbaycan, ingilis və rus dillərindədir. Paketlər {low} AZN/aydan başlayır və saytda açıq göstərilir.',
        },
        {
          q: 'Keçməzdən əvvəl necə yoxlaya bilərəm?',
          a: 'Demo istəyin: yalnız klub otaqlarını, tarifləri və sessiyaya satılan məhsulları qurub bir növbəni sınayın.',
        },
        {
          q: 'Klub üçün WhatsApp və Excel kifayət etmirmi?',
          a: 'Kiçik həcmdə ola bilər, amma bron WhatsApp-da, vaxt taymerdə, ödəniş Excel-də qalanda üst-üstə rezervasiya və kassa fərqi yaranır. Heselo panelində bron, sessiya, kassa və stok bir yerdə görünür.',
        },
      ],
      ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
      ctaBody:
        'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    },
    en: {
      shortTitle: 'Baza Market alternative',
      h1: 'A Baza Market alternative for club operations',
      seoTitle: 'Baza Market Alternative — Heselo Club Panel (Not a Marketplace)',
      seoDescription:
        'Baza Market is commerce/catalog oriented; Heselo is an internal club panel. Comparison table, landscape, FAQ — karaoke and gaming clubs — AZ, EN, RU.',
      keywords: [
        'baza market alternative',
        'baza market comparison',
        'club management software',
        'room booking system',
        'karaoke booking system',
        'marketplace alternative club',
        'Heselo',
      ],
      intro:
        'Solutions known as Baza Market lean towards product sales, catalogues, retail or marketplace use. Heselo is not a marketplace: it is an internal panel for a venue’s own rooms, bookings, live sessions, cash shifts and stock.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: commerce platform or club panel?',
          paragraphs: [
            'Answer three questions before picking an alternative. The answers point to a category — not a brand name.',
          ],
          bullets: [
            'Main revenue: online/shop product sales and catalogues, or room / station / table hours?',
            'Are warehouse, suppliers and commission models critical?',
            'Must-have: catalogues and sales channels, or booking → live session → cash?',
          ],
        },
        {
          id: 'when-baza-market-fits',
          title: 'When should Baza Market stay?',
          paragraphs: [
            'A commerce-oriented tool such as Baza Market may fit better when you want to build a product catalogue, sell goods online or in store, and work with warehouses and suppliers.',
            'Heselo is not built for that scenario — it focuses on internal club operations, not an open marketplace or multi-vendor model.',
          ],
          bullets: [
            'Catalogues, pricing and sales channels are central',
            'Warehouse, suppliers or commission model matter',
            'Room time is secondary or absent',
            'The venue is not mainly selling room hours',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When karaoke rooms, PlayStation stations, billiards tables or lounge rooms are sold by time, Heselo turns bookings into sessions, bills the time and deducts drinks and snacks added to a session from stock.',
            'Bar sales attach to a session; that is not the same as an e-commerce catalogue. In the demo, set up only club rooms and rates and test one shift.',
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
          title: 'Baza Market vs Heselo — at a glance',
          paragraphs: [
            'The table shows primary focus. Confirm Baza Market pricing and commission terms directly — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Baza Market', 'Heselo'],
            rows: [
              ['Primary focus', 'Product sales, catalogue, commerce', 'Room / station / table time'],
              ['Marketplace', 'Commerce/marketplace direction', 'Internal club panel, not a marketplace'],
              ['Bookings', 'Fitted to sales/catalogue flow', 'Room and station calendar'],
              ['Time billing', 'Usually not applicable', 'Live session, extension, rates'],
              ['Inventory', 'Trade warehouse and suppliers', 'Club stock, session add-ons'],
              ['Cash', 'Sales and commission stack', 'Club shifts + session sales'],
              ['Pricing', 'Current quote from provider', 'Public: from {low} AZN/month'],
              ['Languages', 'Provider-dependent', 'AZ, EN, RU'],
              [
                'Best fit',
                'Catalogue, shop, marketplace',
                'Karaoke, gaming, billiards, anticafe, lounge',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Short landscape',
          paragraphs: [
            'If you need commerce and catalogues, Baza Market–style tools sit in e-commerce and retail. If you sell room and station hours, Heselo is a different category.',
            'Restaurant POS (Clopos, iiko, Dine) and general tills (Fazilat POS, SmartPOS) are also different categories — choose by daily operation.',
          ],
          bullets: [
            'Baza Market — product catalogue and commerce sales',
            'Clopos, iiko, Dine — restaurant / kitchen',
            'Heselo — room-time clubs (internal panel)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: [
            'A commerce tool and a club panel can play different roles on the same day. These examples show a typical room-time day.',
          ],
          bullets: [
            'Karaoke: room calendar → start session → hourly rate → drinks → shift report',
            'PlayStation club: station booking → session on arrival → extension → snacks → cash close',
            'Parallel: online/shop sales stay in the commerce tool; room time on Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Switch checklist',
          paragraphs: [
            'Keep any online or shop sales in your existing commerce tool. Bring only club resources into Heselo.',
          ],
          bullets: [
            'Prepare room, console and table lists with current rates',
            'Define items sold into sessions',
            'In the demo, run one shift: book → session → item → close',
            'Document where commerce sales vs club sales are recorded',
            'Run one shift in parallel, then decide',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace Baza Market’s marketplace?',
          a: 'No. Heselo is not a marketplace or open commerce platform. It focuses on a club’s internal rooms, bookings, sessions, cash and stock.',
        },
        {
          q: 'Does Heselo fully replace Baza Market?',
          a: 'No. When catalogues, online sales and warehouse/supplier workflows are central, keep a commerce-oriented tool. Heselo is for room-time clubs.',
        },
        {
          q: 'Which venues is Heselo built for?',
          a: 'Karaoke rooms, PlayStation and gaming clubs, billiards, anticafes and room-based lounges.',
        },
        {
          q: 'How should I compare Baza Market pricing?',
          a: 'Confirm current Baza Market pricing and commission terms directly — no invented figures here. Compare commerce platform and club panel on the same operating scenario. Heselo plans start from {low} AZN per month and are listed publicly.',
        },
        {
          q: 'Can we keep both Baza Market and Heselo?',
          a: 'Yes. Keep online and shop sales in the commerce tool; run room bookings, sessions and club cash in Heselo. Agree in advance which sales each system records.',
        },
        {
          q: 'Which languages does Heselo support and what does it cost?',
          a: 'The interface is in Azerbaijani, English and Russian. Plans start from {low} AZN per month and are listed publicly on this site.',
        },
        {
          q: 'How can I check the fit before switching?',
          a: 'Request a demo: set up only club rooms, rates and session items, then test one shift.',
        },
        {
          q: 'Aren’t WhatsApp and Excel enough for a club?',
          a: 'They can work at small volumes, but when bookings live in WhatsApp, time on a timer and payments in Excel, you get double bookings and cash discrepancies. In Heselo, bookings, sessions, cash and stock sit in one place.',
        },
      ],
      ctaTitle: 'Test Heselo with your workflow',
      ctaBody:
        'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Альтернатива Baza Market',
      h1: 'Альтернатива Baza Market для клубных операций',
      seoTitle: 'Альтернатива Baza Market — клубная панель Heselo (не маркетплейс)',
      seoDescription:
        'Baza Market ориентирован на торговлю и каталог; Heselo — внутренняя клубная панель. Таблица, ландшафт, FAQ — караоке и игровые клубы — AZ, EN, RU.',
      keywords: [
        'альтернатива baza market',
        'baza market сравнение',
        'программа управления клубом',
        'система бронирования комнат',
        'система бронирования караоке',
        'альтернатива маркетплейсу для клуба',
        'Heselo',
      ],
      intro:
        'Решения под названием Baza Market ориентированы скорее на продажу товаров, каталог, розницу или маркетплейс. Heselo — не маркетплейс, а внутренняя панель заведения для собственных комнат, бронирований, живых сеансов, кассовых смен и склада.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: торговая платформа или клубная панель?',
          paragraphs: [
            'Перед выбором альтернативы ответьте на три вопроса. Ответы указывают на категорию — не на бренд.',
          ],
          bullets: [
            'Основная выручка: онлайн/магазин и каталог или часы комнаты / станции / стола?',
            'Критичны ли склад, поставщики и комиссионная модель?',
            'Что нужно: каталог и каналы продаж или бронь → живой сеанс → касса?',
          ],
        },
        {
          id: 'when-baza-market-fits',
          title: 'Когда Baza Market стоит оставить?',
          paragraphs: [
            'Торговое решение вроде Baza Market может подойти лучше, если нужно вести каталог товаров, продавать онлайн или в магазине, работать со складом и поставщиками.',
            'Heselo для такого сценария не создавалась — она фокусируется на внутренних клубных операциях, а не на открытом маркетплейсе.',
          ],
          bullets: [
            'Каталог, цены и каналы продаж в центре',
            'Важны склад, поставщики или комиссия',
            'Время комнат вторично или отсутствует',
            'Заведение не продаёт в основном часы комнат',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если караоке-комнаты, PlayStation-станции, бильярдные столы или лаунж-комнаты продаются по времени, Heselo превращает бронь в сеанс, считает время и списывает со склада напитки и закуски, добавленные в счёт.',
            'Продажи в баре привязаны к сеансу; это не e-commerce каталог. В демо настройте только клубные комнаты и тарифы и проверьте одну смену.',
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
          title: 'Baza Market и Heselo — краткое сравнение',
          paragraphs: [
            'Таблица показывает основную направленность. Цены и комиссии Baza Market уточняйте напрямую — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Baza Market', 'Heselo'],
            rows: [
              ['Основной фокус', 'Продажа товаров, каталог, торговля', 'Время комнаты / станции / стола'],
              ['Маркетплейс', 'Торговля / маркетплейс', 'Внутренняя клубная панель, не маркетплейс'],
              ['Бронирование', 'Под поток продаж/каталога', 'Календарь комнат и станций'],
              ['Учёт времени', 'Обычно не применяется', 'Живой сеанс, продление, тариф'],
              ['Склад', 'Торговый склад и поставщики', 'Клубный склад, допы к сеансу'],
              ['Касса', 'Продажи и комиссии', 'Клубные смены + продажи в сеансе'],
              ['Цена', 'Актуальное предложение', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Зависит от поставщика', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Каталог, магазин, маркетплейс',
                'Караоке, игровые, бильярд, антикафе, лаунж',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Короткий ландшафт',
          paragraphs: [
            'Если нужны торговля и каталог, решения типа Baza Market ближе к e-commerce и рознице. Если продаёте часы комнат и станций, Heselo — другая категория.',
            'Ресторанные POS (Clopos, iiko, Dine) и общие кассы (Fazilat POS, SmartPOS) тоже отдельные категории — выбирайте по ежедневному процессу.',
          ],
          bullets: [
            'Baza Market — каталог товаров и торговые продажи',
            'Clopos, iiko, Dine — ресторан / кухня',
            'Heselo — клубы с оплатой времени (внутренняя панель)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: [
            'Торговый инструмент и клубная панель могут работать параллельно. Ниже — типичный день с оплатой времени.',
          ],
          bullets: [
            'Караоке: календарь комнат → старт сеанса → почасовой тариф → напитки → отчёт смены',
            'PlayStation-клуб: бронь станции → сеанс по приходу → продление → закуски → закрытие кассы',
            'Параллельно: онлайн/магазин в торговом решении; время комнат — в Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода',
          paragraphs: [
            'Онлайн- и розничные продажи оставьте в текущем торговом решении. В Heselo переносите только клубные ресурсы.',
          ],
          bullets: [
            'Подготовьте списки комнат, консолей и столов и актуальные тарифы',
            'Определите товары, продаваемые в сеанс',
            'В демо одна смена: бронь → сеанс → товар → закрытие',
            'Зафиксируйте, где учитываются торговые и клубные продажи',
            'Одну смену ведите параллельно, затем решайте',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет маркетплейс Baza Market?',
          a: 'Нет. Heselo — не маркетплейс и не открытая торговая платформа. Она фокусируется на внутренних комнатах, брони, сеансах, кассе и складе клуба.',
        },
        {
          q: 'Heselo полностью заменяет Baza Market?',
          a: 'Нет. Если в центре каталог, онлайн-продажи и склад/поставщики, оставьте торговое решение. Heselo — для клубов с оплатой времени.',
        },
        {
          q: 'Для каких заведений создана Heselo?',
          a: 'Для караоке-комнат, PlayStation- и игровых клубов, бильярда, антикафе и лаунж-заведений с комнатами.',
        },
        {
          q: 'Как сравнивать цену Baza Market?',
          a: 'Актуальные цены и комиссии Baza Market уточняйте напрямую — без выдуманных цифр. Сравнивайте торговую платформу и клубную панель на одном сценарии. Тарифы Heselo от {low} AZN в месяц и открыто на сайте.',
        },
        {
          q: 'Можно оставить и Baza Market, и Heselo?',
          a: 'Да. Онлайн- и магазинные продажи — в торговом решении; бронь комнат, сеансы и клубная касса — в Heselo. Заранее договоритесь, какие продажи где учитываются.',
        },
        {
          q: 'Какие языки поддерживает Heselo и сколько она стоит?',
          a: 'Интерфейс на азербайджанском, английском и русском. Тарифы от {low} AZN в месяц и открыто указаны на сайте.',
        },
        {
          q: 'Как проверить систему до перехода?',
          a: 'Запросите демо: настройте только клубные комнаты, тарифы и товары для сеансов и проверьте одну смену.',
        },
        {
          q: 'Разве клубу недостаточно WhatsApp и Excel?',
          a: 'При небольшом потоке этого может хватить, но когда брони в WhatsApp, время в таймере, а оплаты в Excel, появляются двойные брони и расхождения в кассе. В Heselo брони, сеансы, касса и склад видны в одном месте.',
        },
      ],
      ctaTitle: 'Проверьте Heselo на своём сценарии',
      ctaBody:
        'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    },
  }

export function bazaMarketAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'baza-market-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
