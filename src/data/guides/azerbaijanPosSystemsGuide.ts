import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'pos',
  'gaming',
  'karaoke',
  'billiards',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Yerli POS müqayisəsi',
      h1: 'Azərbaycanda yerli POS sistemləri müqayisəsi — klub baxışı',
      seoTitle: 'Yerli POS sistemləri müqayisəsi (klublar üçün) | Heselo',
      seoDescription:
        'iiko, Clopos, Dine, Fazilat POS, SmartPOS və Heselo: restoran, pərakəndə və otaq-vaxt klubları üçün dürüst müqayisə cədvəli — AZ, EN, RU.',
      keywords: [
        'azerbaycan pos sistemleri',
        'yerli pos müqayisə',
        'pos sistemləri müqayisəsi',
        'restoran pos azərbaycan',
        'klub pos sistemi',
        'otaq rezervasiya sistemi',
        'iiko clopos dine müqayisə',
        'Heselo',
      ],
      intro:
        'Azərbaycanda POS bazarının böyük hissəsi restoran, kafe və pərakəndə satışa yönəlib: iiko, Clopos və Dine sifariş, menyu və mətbəx prosesində güclüdür; Fazilat POS və SmartPOS kimi həllər ümumi satış və kassaya fokuslanır. Heselo fərqli kateqoriyadadır — otaq, konsol və masa vaxtını satan klublar üçün daxili panel. Bu bələdçi restoran vs otaq-vaxt seçimini dürüst müqayisə edir; rəqib qiymətləri burada uydurulmur.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: restoran, pərakəndə, yoxsa otaq-vaxt?',
          paragraphs: [
            'POS seçməzdən əvvəl gəlirin haradan gəldiyini aydınlaşdırın. Düzgün kateqoriya seçimi modul sayını və gündəlik iş yükünü azaldır.',
          ],
          bullets: [
            'Əsas gəlir: yemək-içki və mətbəx, mağaza satışı, yoxsa otaq/stansiya saatı?',
            'Vaxt hesabı Excel/taymerdə qalırsa, restoran POS adətən tam həll vermir',
            'Hər ikisi varsa: restoran/pərakəndə POS + klub paneli (paralel ssenari)',
          ],
        },
        {
          id: 'when-restaurant-pos-fits',
          title: 'Restoran və ümumi kassa POS nə vaxt düzgündür?',
          paragraphs: [
            'Gəlirin əsas hissəsi yemək-içki sifarişindən, mətbəxdən, çatdırılmadan və ya mağaza satışından gəlirsə, iiko, Clopos, Dine kimi restoran POS-ları və ya Fazilat POS, SmartPOS kimi ümumi kassa həlləri daha doğru seçimdir.',
            'Heselo tam mətbəx, reseptura və pərakəndə marketplace konturunu əvəz etmir.',
          ],
          bullets: [
            'Mətbəx sifarişi, menyu və ofisiant axını mərkəzdədir',
            'Pərakəndə barkod, anbar və ümumi kassa kritikdir',
            'Otaq vaxtı ikinci dərəcəlidir və ya ayrıca cədvəldə qalır',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'PlayStation stansiyası, karaoke otağı, bilyard masası və ya antikafe yeri vaxtla satılırsa, Heselo rezervasiya, canlı sessiya, uzadılma, kassa növbəsi və stoku bir paneldə birləşdirir — restoran POS-da bunu adətən əlavə cədvəl və ya taymerlə tamamlamaq lazım gəlir.',
          ],
          bullets: [
            'Əsas məhsul: otaq, konsol və ya masa saatı',
            'Bron → gəlişdə sessiya → uzadılma → kassa standart axındır',
            'Sessiyaya məhsul satışı stokla bağlıdır',
            'Açıq qiymət: {low} AZN/aydan; AZ / EN / RU',
          ],
        },
        {
          id: 'comparison',
          title: 'Yerli POS — çoxsütunlu müqayisə',
          paragraphs: [
            'Cədvəl əsas istiqaməti göstərir. Modul, avadanlıq və yekun xərci hər provayderdən eyni ssenari üzrə aktual təkliflə dəqiqləşdirin. Yalnız Heselo üçün qiymət saytda açıq göstərilir ({low} AZN/aydan).',
          ],
          table: {
            headers: ['Aspekt', 'iiko', 'Clopos', 'Dine', 'Fazilat POS', 'SmartPOS', 'Heselo'],
            rows: [
              [
                'Əsas fokus',
                'Restoran, mətbəx, şəbəkə',
                'Restoran, kafe, mətbəx',
                'Restoran sifarişi, menyu',
                'Ümumi satış, kassa',
                'Kafe/restoran kassa',
                'Otaq / stansiya vaxtı',
              ],
              [
                'Mətbəx / menyu',
                'Güclü',
                'Güclü',
                'Güclü',
                'Əsas deyil',
                'Dəyişir',
                'Tam mətbəx POS əvəzi deyil',
              ],
              [
                'Otaq-vaxt sessiyası',
                'Adətən əlavə proses',
                'Adətən əlavə proses',
                'Adətən əlavə proses',
                'Fokus deyil',
                'Fokus deyil',
                'Mərkəzdə: canlı sessiya',
              ],
              [
                'Otaq/stansiya təqvimi',
                'Restoran masa axını',
                'Restoran masa axını',
                'Restoran masa axını',
                'Tətbiq olunmur',
                'Tətbiq olunmur',
                'Otaq və stansiya təqvimi',
              ],
              [
                'Pərakəndə / mağaza',
                'Bəzi modullar',
                'Bəzi modullar',
                'Məhdud',
                'Güclü istiqamət',
                'Güclü istiqamət',
                'Sessiyaya əlavə satış',
              ],
              [
                'Kassa növbəsi',
                'Restoran növbəsi',
                'Restoran növbəsi',
                'Restoran növbəsi',
                'Ümumi kassa',
                'Ümumi kassa',
                'Klub növbəsi + sessiya',
              ],
              [
                'Qiymət',
                'Təkliflə dəqiqləşdirin',
                'Təkliflə dəqiqləşdirin',
                'Təkliflə dəqiqləşdirin',
                'Təkliflə dəqiqləşdirin',
                'Təkliflə dəqiqləşdirin',
                'Açıq: {low} AZN/aydan',
              ],
              [
                'Dillər',
                'Paket/region',
                'Paket/region',
                'Paket/region',
                'Provayder',
                'Provayder',
                'AZ, EN, RU',
              ],
              [
                'Ən yaxşı uyğunluq',
                'Mətbəxli restoran',
                'Restoran və kafe',
                'Restoran, rəqəmsal menyu',
                'Mağaza, ümumi kassa',
                'Kafe, restoran satışı',
                'Oyun, karaoke, bilyard, antikafe',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Azərbaycan bazarı — qısa landşaft',
          paragraphs: [
            'Restoran və kafe seqmentində iiko, Clopos, Dine, MinuPOS və robotPOS tez-tez müzakirə olunur. Pərakəndə və ümumi kassada Fazilat POS və SmartPOS adları görünür.',
            'Otaq-vaxt klubu axtarırsınızsa, yuxarıdakı siyahı əsas alternativiniz deyil — Heselo kimi klub panelinə baxın. Mətbəx güclüdürsə, restoran POS saxlanıb otaqlar üçün Heselo paralel istifadə oluna bilər.',
          ],
          bullets: [
            'iiko, Clopos, Dine — restoran/mətbəx',
            'Fazilat POS, SmartPOS — ümumi satış və kassa',
            'Heselo — otaq-vaxt klubları (fərqli kateqoriya)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: [
            'Bir məkan həm restoran, həm otaq satışı edə bilər. Satışların harada qeyd olunduğunu əvvəlcədən bölün.',
          ],
          bullets: [
            'Yalnız oyun klubu: Heselo — bron, sessiya, kassa, stok',
            'Güclü mətbəx + karaoke otaqları: restoran POS (mətbəx) + Heselo (otaqlar)',
            'Mağaza satışı + bilyard: Fazilat/SmartPOS (mağaza) + Heselo (masa vaxtı)',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Seçimi necə yoxlamalı?',
          paragraphs: [
            'Bir həftə üçün vaxt gəliri ilə yemək-içki və məhsul gəlirinin payını ölçün. Vaxt gəliri üstünlük təşkil edirsə, Heselo demosunu sınayın.',
          ],
          bullets: [
            'Eyni ssenari ilə namizədlərdən təklif alın (modul + avadanlıq)',
            'Demoda: bron → sessiya → məhsul → kassa bağlanışı',
            'Mətbəx qalırsa, onu köçürməyin — yalnız klub resursları',
            'Bir növbə paralel işlədin; sonra qərar verin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo iiko və ya Clopos-u əvəz edirmi?',
          a: 'Xeyr. Tam restoran mətbəxi və ofisiant sifarişi əsasdırsa, iiko, Clopos və ya Dine kimi restoran POS qalmalıdır. Heselo otaq və vaxt sessiyalarına fokuslanır.',
        },
        {
          q: 'Otaq-vaxt klubu üçün hansı POS seçməliyəm?',
          a: 'Əsas gəlir otaq, konsol və ya masa saatındandırsa, klub paneli (məsələn Heselo) daha birbaşa uyğundur. Restoran POS-u adətən vaxt hesabını tam əhatə etmir.',
        },
        {
          q: 'Fazilat POS və ya SmartPOS klub üçün kifayətdirmi?',
          a: 'Ümumi kassa və mağaza satışı lazımdırsa, bəli. Amma otaq bronu, canlı sessiya və saat tarifi mərkəzdədirsə, ümumi kassa tək başına yetərli olmaya bilər.',
        },
        {
          q: 'Rəqib POS qiymətlərini haradan müqayisə etməliyəm?',
          a: 'Hər provayderdən eyni istifadəçi, terminal və modul ssenarisi üzrə rəsmi təklif alın — bu bələdçidə rəqib qiymətləri uydurulmur. Heselo {low} AZN/aydan başlayır və saytda açıqdır.',
        },
        {
          q: 'Həm restoran POS, həm Heselo lazımdır?',
          a: 'Tez-tez bəli: mətbəx və zal sifarişi restoran POS-da, otaq və stansiya vaxtı Heselo-da. Hansı satışın harada yazıldığını əvvəlcədən razılaşdırın.',
        },
        {
          q: 'Heselo neçə dildədir?',
          a: 'İnterfeys Azərbaycan, ingilis və rus dillərindədir.',
        },
        {
          q: 'Keçməzdən əvvəl necə yoxlaya bilərəm?',
          a: 'Demo istəyin və öz klub ssenarinizi addım-addım keçin: rezervasiya, sessiya, məhsul satışı, kassa bağlanışı.',
        },
        {
          q: 'Dine və Clopos arasında fərq nədir?',
          a: 'Hər ikisi restoran kateqoriyasındadır; modul, avadanlıq və dəstək fərqlidir. Otaq-vaxt klubu üçün hər ikisi də adətən klub paneli deyil — seçimi mətbəx ehtiyacınıza görə edin, otaq vaxtı üçün ayrıca alət düşünün.',
        },
      ],
      ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
      ctaBody:
        'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    },
    en: {
      shortTitle: 'Local POS comparison',
      h1: 'Local POS systems in Azerbaijan compared — a club perspective',
      seoTitle: 'Local POS Systems Compared (for Clubs) | Heselo',
      seoDescription:
        'iiko, Clopos, Dine, Fazilat POS, SmartPOS and Heselo: honest comparison for restaurants, retail and room-time clubs — AZ, EN, RU.',
      keywords: [
        'azerbaijan pos systems',
        'local pos comparison',
        'pos systems comparison',
        'restaurant pos azerbaijan',
        'club pos system',
        'room booking system',
        'iiko clopos dine comparison',
        'Heselo',
      ],
      intro:
        'Most of the POS market in Azerbaijan targets restaurants, cafés and retail: iiko, Clopos and Dine are strong in ordering, menus and kitchen workflows; Fazilat POS and SmartPOS focus on general sales and tills. Heselo sits in a different category — a panel for clubs that sell room, console and table time. This guide compares restaurant vs room-time honestly; competitor prices are not invented here.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: restaurant, retail or room-time?',
          paragraphs: [
            'Clarify where revenue comes from before choosing POS. The right category reduces unused modules and daily overhead.',
          ],
          bullets: [
            'Main revenue: food & kitchen, shop sales, or room / station hours?',
            'If time still lives in Excel or a timer, restaurant POS rarely fixes that alone',
            'Need both: restaurant/retail POS + club panel (parallel scenario)',
          ],
        },
        {
          id: 'when-restaurant-pos-fits',
          title: 'When is restaurant or general till POS the right fit?',
          paragraphs: [
            'When most revenue comes from food and drink orders, a kitchen, delivery or shop sales, restaurant POS tools such as iiko, Clopos or Dine, or general tills like Fazilat POS or SmartPOS, are the right choice.',
            'Heselo does not replace a full kitchen, recipes or a retail marketplace stack.',
          ],
          bullets: [
            'Kitchen orders, menus and waiter flow are central',
            'Retail barcodes, warehouse and general till matter',
            'Room time is secondary or tracked separately',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When PlayStation stations, karaoke rooms, billiards tables or anticafe seats are sold by time, Heselo combines bookings, live sessions, extensions, cash shifts and stock in one panel — something restaurant POS usually needs a spreadsheet or timer to cover.',
          ],
          bullets: [
            'Core product: room, console or table hours',
            'Booking → session on arrival → extension → cash is the standard flow',
            'Item sales attach to sessions and stock',
            'Public pricing from {low} AZN/month; AZ / EN / RU',
          ],
        },
        {
          id: 'comparison',
          title: 'Local POS — multi-column comparison',
          paragraphs: [
            'The table shows primary direction. Confirm modules, hardware and total cost with each provider for the same scenario. Only Heselo pricing is public on this site (from {low} AZN/month).',
          ],
          table: {
            headers: ['Aspect', 'iiko', 'Clopos', 'Dine', 'Fazilat POS', 'SmartPOS', 'Heselo'],
            rows: [
              [
                'Primary focus',
                'Restaurant, kitchen, chains',
                'Restaurant, café, kitchen',
                'Restaurant orders, menus',
                'General sales, till',
                'Café/restaurant till',
                'Room / station time',
              ],
              [
                'Kitchen / menus',
                'Strong',
                'Strong',
                'Strong',
                'Not the focus',
                'Varies',
                'Not a full kitchen POS',
              ],
              [
                'Room-time sessions',
                'Usually extra process',
                'Usually extra process',
                'Usually extra process',
                'Not the focus',
                'Not the focus',
                'Core: live sessions',
              ],
              [
                'Room/station calendar',
                'Restaurant table flow',
                'Restaurant table flow',
                'Restaurant table flow',
                'N/A',
                'N/A',
                'Room and station calendar',
              ],
              [
                'Retail / shop',
                'Some modules',
                'Some modules',
                'Limited',
                'Strong direction',
                'Strong direction',
                'Session add-on sales',
              ],
              [
                'Cash shift',
                'Restaurant shift',
                'Restaurant shift',
                'Restaurant shift',
                'General till',
                'General till',
                'Club shift + session',
              ],
              [
                'Pricing',
                'Confirm via quote',
                'Confirm via quote',
                'Confirm via quote',
                'Confirm via quote',
                'Confirm via quote',
                'Public: from {low} AZN/month',
              ],
              [
                'Languages',
                'Package/region',
                'Package/region',
                'Package/region',
                'Provider',
                'Provider',
                'AZ, EN, RU',
              ],
              [
                'Best fit',
                'Kitchen-led restaurants',
                'Restaurants and cafés',
                'Restaurants, digital menus',
                'Shops, general till',
                'Café, restaurant sales',
                'Gaming, karaoke, billiards, anticafe',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Azerbaijan market — short landscape',
          paragraphs: [
            'In restaurants and cafés, iiko, Clopos, Dine, MinuPOS and robotPOS are often discussed. In retail and general tills, Fazilat POS and SmartPOS appear.',
            'If you run a room-time club, that list is not your main alternative — look at a club panel such as Heselo. If the kitchen is strong, keep restaurant POS and use Heselo for rooms in parallel.',
          ],
          bullets: [
            'iiko, Clopos, Dine — restaurant / kitchen',
            'Fazilat POS, SmartPOS — general sales and till',
            'Heselo — room-time clubs (different category)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: [
            'One venue can run both restaurant and room sales. Agree in advance which system records which sale.',
          ],
          bullets: [
            'Gaming club only: Heselo — bookings, sessions, cash, stock',
            'Strong kitchen + karaoke rooms: restaurant POS (kitchen) + Heselo (rooms)',
            'Shop sales + billiards: Fazilat/SmartPOS (shop) + Heselo (table time)',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'How to test your choice',
          paragraphs: [
            'Measure the share of time revenue versus food and product revenue for one week. If time dominates, try the Heselo demo.',
          ],
          bullets: [
            'Request quotes for the same scenario (modules + hardware)',
            'In the demo: book → session → item → cash close',
            'If the kitchen stays, do not migrate it — club resources only',
            'Run one shift in parallel, then decide',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace iiko or Clopos?',
          a: 'No. When a full kitchen and waiter orders are central, keep a restaurant POS such as iiko, Clopos or Dine. Heselo focuses on rooms and timed sessions.',
        },
        {
          q: 'Which POS should a room-time club choose?',
          a: 'If main revenue is room, console or table hours, a club panel (such as Heselo) is a more direct fit. Restaurant POS usually does not fully cover time billing.',
        },
        {
          q: 'Is Fazilat POS or SmartPOS enough for a club?',
          a: 'Yes for general till and shop sales. If room bookings, live sessions and hourly rates are central, a general till alone may not be enough.',
        },
        {
          q: 'How should I compare competitor POS pricing?',
          a: 'Get official quotes from each provider for the same users, terminals and modules — this guide does not invent competitor prices. Heselo starts from {low} AZN per month and is public on this site.',
        },
        {
          q: 'Do we need both restaurant POS and Heselo?',
          a: 'Often yes: kitchen and dining orders on restaurant POS, room and station time on Heselo. Agree which sales each system records.',
        },
        {
          q: 'Which languages does Heselo support?',
          a: 'The interface is in Azerbaijani, English and Russian.',
        },
        {
          q: 'How can I check before switching?',
          a: 'Request a demo and walk your club flow: booking, session, item sale, cash-shift close.',
        },
        {
          q: 'What is the difference between Dine and Clopos?',
          a: 'Both sit in the restaurant category; modules, hardware and support differ. For a room-time club, neither is usually the club panel — choose by kitchen needs and plan a separate tool for room time.',
        },
      ],
      ctaTitle: 'Test Heselo with your workflow',
      ctaBody:
        'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Сравнение местных POS-систем',
      h1: 'Сравнение местных POS-систем в Азербайджане — взгляд клуба',
      seoTitle: 'Сравнение местных POS-систем (для клубов) | Heselo',
      seoDescription:
        'iiko, Clopos, Dine, Fazilat POS, SmartPOS и Heselo: честное сравнение для ресторанов, розницы и клубов с почасовой оплатой — AZ, EN, RU.',
      keywords: [
        'pos системы азербайджан',
        'сравнение местных pos',
        'сравнение pos систем',
        'ресторанная pos азербайджан',
        'pos для клуба',
        'система бронирования комнат',
        'iiko clopos dine сравнение',
        'Heselo',
      ],
      intro:
        'Большая часть рынка POS в Азербайджане ориентирована на рестораны, кафе и розницу: iiko, Clopos и Dine сильны в заказах, меню и кухонных процессах; Fazilat POS и SmartPOS сосредоточены на общих продажах и кассе. Heselo относится к другой категории — панель для клубов, которые продают время комнат, консолей и столов. Это руководство честно сравнивает ресторан и почасовую оплату; цены конкурентов здесь не выдумываются.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: ресторан, розница или время комнат?',
          paragraphs: [
            'Перед выбором POS проясните источник выручки. Верная категория снижает число ненужных модулей и ежедневную нагрузку.',
          ],
          bullets: [
            'Основная выручка: еда и кухня, магазин или часы комнаты / станции?',
            'Если время всё ещё в Excel или таймере, ресторанная POS редко решает это сама',
            'Нужны оба: ресторанная/розничная POS + клубная панель (параллельно)',
          ],
        },
        {
          id: 'when-restaurant-pos-fits',
          title: 'Когда подходит ресторанная или общая касса?',
          paragraphs: [
            'Если основную выручку дают заказы еды и напитков, кухня, доставка или розничные продажи, правильнее выбрать ресторанную POS вроде iiko, Clopos или Dine либо общую кассу вроде Fazilat POS или SmartPOS.',
            'Heselo не заменяет полноценную кухню, техкарты и контур розничного маркетплейса.',
          ],
          bullets: [
            'Кухонные заказы, меню и официанты в центре',
            'Важны штрихкоды, склад и общая касса',
            'Время комнат вторично или учитывается отдельно',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если PlayStation-станции, караоке-комнаты, бильярдные столы или места в антикафе продаются по времени, Heselo объединяет бронь, живые сеансы, продления, кассовые смены и склад в одной панели — ресторанную POS для этого обычно дополняют таблицей или таймером.',
          ],
          bullets: [
            'Основной продукт: часы комнаты, консоли или стола',
            'Бронь → сеанс по приходу → продление → касса — стандартный поток',
            'Продажи товаров привязаны к сеансу и складу',
            'Открытая цена: от {low} AZN/мес.; AZ / EN / RU',
          ],
        },
        {
          id: 'comparison',
          title: 'Местные POS — многоколоночное сравнение',
          paragraphs: [
            'Таблица показывает основную направленность. Модули, оборудование и итоговую стоимость уточняйте у каждого поставщика на одинаковом сценарии. Только цена Heselo открыта на сайте (от {low} AZN/мес.).',
          ],
          table: {
            headers: ['Аспект', 'iiko', 'Clopos', 'Dine', 'Fazilat POS', 'SmartPOS', 'Heselo'],
            rows: [
              [
                'Основной фокус',
                'Ресторан, кухня, сети',
                'Ресторан, кафе, кухня',
                'Ресторанные заказы, меню',
                'Общие продажи, касса',
                'Кафе/ресторан, касса',
                'Время комнаты / станции',
              ],
              [
                'Кухня / меню',
                'Сильно',
                'Сильно',
                'Сильно',
                'Не фокус',
                'Зависит',
                'Не полноценная кухонная POS',
              ],
              [
                'Почасовые сеансы',
                'Обычно отдельный процесс',
                'Обычно отдельный процесс',
                'Обычно отдельный процесс',
                'Не фокус',
                'Не фокус',
                'В центре: живые сеансы',
              ],
              [
                'Календарь комнат/станций',
                'Поток столов ресторана',
                'Поток столов ресторана',
                'Поток столов ресторана',
                'Н/П',
                'Н/П',
                'Календарь комнат и станций',
              ],
              [
                'Розница / магазин',
                'Некоторые модули',
                'Некоторые модули',
                'Ограничено',
                'Сильное направление',
                'Сильное направление',
                'Допы к сеансу',
              ],
              [
                'Кассовая смена',
                'Ресторанная смена',
                'Ресторанная смена',
                'Ресторанная смена',
                'Общая касса',
                'Общая касса',
                'Клубная смена + сеанс',
              ],
              [
                'Цена',
                'Уточняйте по предложению',
                'Уточняйте по предложению',
                'Уточняйте по предложению',
                'Уточняйте по предложению',
                'Уточняйте по предложению',
                'Открыто: от {low} AZN/мес.',
              ],
              [
                'Языки',
                'Пакет/регион',
                'Пакет/регион',
                'Пакет/регион',
                'Поставщик',
                'Поставщик',
                'AZ, EN, RU',
              ],
              [
                'Лучшее соответствие',
                'Рестораны с кухней',
                'Рестораны и кафе',
                'Рестораны, цифровое меню',
                'Магазины, общая касса',
                'Кафе, ресторанные продажи',
                'Игровые, караоке, бильярд, антикафе',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Рынок Азербайджана — короткий ландшафт',
          paragraphs: [
            'В ресторанах и кафе часто обсуждают iiko, Clopos, Dine, MinuPOS и robotPOS. В рознице и общих кассах встречаются Fazilat POS и SmartPOS.',
            'Если у вас клуб с оплатой времени, этот список — не главная альтернатива; смотрите клубную панель вроде Heselo. При сильной кухне оставьте ресторанную POS и используйте Heselo для комнат параллельно.',
          ],
          bullets: [
            'iiko, Clopos, Dine — ресторан / кухня',
            'Fazilat POS, SmartPOS — общие продажи и касса',
            'Heselo — клубы с оплатой времени (другая категория)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: [
            'Одно заведение может совмещать ресторан и продажу времени. Заранее договоритесь, какая система учитывает какие продажи.',
          ],
          bullets: [
            'Только игровой клуб: Heselo — бронь, сеансы, касса, склад',
            'Сильная кухня + караоке: ресторанная POS (кухня) + Heselo (комнаты)',
            'Магазин + бильярд: Fazilat/SmartPOS (магазин) + Heselo (время стола)',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Как проверить выбор',
          paragraphs: [
            'За неделю измерьте долю выручки от времени и от еды и товаров. Если преобладает время, попробуйте демо Heselo.',
          ],
          bullets: [
            'Запросите расчёты у кандидатов на одном сценарии (модули + оборудование)',
            'В демо: бронь → сеанс → товар → закрытие кассы',
            'Если кухня остаётся, не переносите её — только клубные ресурсы',
            'Одну смену ведите параллельно, затем решайте',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет iiko или Clopos?',
          a: 'Нет. Если в центре полноценная кухня и заказы официантов, оставьте ресторанную POS вроде iiko, Clopos или Dine. Heselo сосредоточена на комнатах и почасовых сеансах.',
        },
        {
          q: 'Какую POS выбрать клубу с почасовой оплатой?',
          a: 'Если основная выручка — часы комнаты, консоли или стола, клубная панель (например Heselo) подходит прямее. Ресторанная POS обычно не закрывает учёт времени полностью.',
        },
        {
          q: 'Достаточно ли Fazilat POS или SmartPOS для клуба?',
          a: 'Да для общей кассы и магазина. Если в центре бронь комнат, живые сеансы и почасовые тарифы, одной общей кассы может не хватить.',
        },
        {
          q: 'Как сравнивать цены конкурентов?',
          a: 'Получите официальные предложения от каждого поставщика на тех же пользователей, терминалах и модулях — в этом руководстве цены конкурентов не выдумываются. Heselo от {low} AZN в месяц и открыта на сайте.',
        },
        {
          q: 'Нужны ли и ресторанная POS, и Heselo?',
          a: 'Часто да: кухня и зал — в ресторанной POS, время комнат и станций — в Heselo. Договоритесь, какие продажи где учитываются.',
        },
        {
          q: 'На каких языках Heselo?',
          a: 'Интерфейс на азербайджанском, английском и русском.',
        },
        {
          q: 'Как проверить до перехода?',
          a: 'Запросите демо и пройдите клубный сценарий: бронь, сеанс, продажа товара, закрытие смены.',
        },
        {
          q: 'Чем отличаются Dine и Clopos?',
          a: 'Оба в ресторанной категории; отличаются модули, оборудование и поддержка. Для клуба с почасовой оплатой ни один не является клубной панелью — выбирайте по кухне и планируйте отдельный инструмент для времени комнат.',
        },
      ],
      ctaTitle: 'Проверьте Heselo на своём сценарии',
      ctaBody:
        'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    },
  }

export function azerbaijanPosSystemsGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'azerbaijan-pos-systems-comparison',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
