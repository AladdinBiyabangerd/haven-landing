import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-23'

type LocalizedGuide = Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>

type CatalogEntry = {
  slug: string
  relatedSolutions: GuideCopy['relatedSolutions']
  copy: Record<Locale, LocalizedGuide>
}

const catalog: CatalogEntry[] = [
  {
    slug: 'how-to-open-playstation-club',
    relatedSolutions: ['gaming', 'pos', 'inventory', 'reservations'],
    copy: {
      az: {
        shortTitle: 'PS klub açmaq',
        h1: 'PlayStation klubu necə açılır? Addım-addım',
        seoTitle: 'PlayStation klubu necə açılır — addım-addım bələdçi | Heselo',
        seoDescription:
          'PlayStation klubu açmaq istəyirsiniz? Məkan və zal planı, avadanlıq, ümumi hüquqi addımlar, gündəlik iş prosesi və ilk 30 gün üçün yoxlama siyahısı.',
        keywords: [
          'playstation klubu necə açılır',
          'PS klub açmaq',
          'oyun klubu biznesi',
          'playstation klub biznesi',
          'ps klub avadanlıqları',
          'oyun klubu açmaq',
        ],
        intro:
          'PlayStation klubu kiçik kapitalla başlanan, amma nizam tələb edən biznesdir. Konsol almaq işin asan hissəsidir; çətini boş saatları doldurmaq, bronu itirməmək və gecə növbəsinin kassasını düzgün bağlamaqdır. Bu bələdçi açılışdan əvvəl və ilk ay üçün əsas addımları sıralayır.',
        sections: [
          {
            id: 'heselo',
            title: 'Heselo PS klub üçün nə verir?',
            paragraphs: [
              'Heselo stansiya bronunu canlı sessiyaya, uzatmanı və qəlyanaltı satışını eyni hesaba, ödənişi isə kassa növbəsinə bağlayır. Açılışdan belə quranda vərəq və taymeri sonradan köçürmək lazım gəlmir.',
            ],
            bullets: [
              'Stansiya cədvəli və rezervasiya',
              'Canlı sessiya, uzatma, əlavə satış',
              'Kassa növbəsi və gün sonu hesabatı',
              'Kiçik plan {gaming} {currency}/aydan',
            ],
          },
          {
            id: 'who-for',
            title: 'Bu bələdçi kimin üçündür?',
            paragraphs: [
              'İlk PS klubunu açmağı planlaşdıranlar, 2–3 konsolla başlayıb genişlənmək istəyənlər və kafe ya antikafe daxilində oyun zonası quranlar üçün.',
              'Artıq işləyən klubunuz varsa, gündəlik iş və ilk 30 gün bölmələri yenə faydalı olacaq.',
            ],
          },
          {
            id: 'location-layout',
            title: 'Məkan və zal planı',
            paragraphs: [
              'Müştərilərin böyük hissəsi tələbə və gənclərdir, ona görə universitet, məktəb, yaşayış massivi və metroya yaxınlıq adətən küçə vitrinindən vacibdir. Kirayə müqaviləsində səs, iş saatları və elektrik gücünü əvvəlcədən dəqiqləşdirin.',
              'Zalı stansiya üzrə planlayın: hər PS üçün divan, ekran və keçid sahəsi. Bir-iki qapalı VIP otaq ümumi zaldan yüksək saat tarifi ilə satıla bilər.',
            ],
            bullets: [
              'Hər stansiya üçün təxminən 6–9 m² (divan, ekran, keçid)',
              'Ayrı elektrik xətləri və kifayət qədər rozetka',
              'Səs izolyasiyası — xüsusən yuxarıda və ya yanda mənzil varsa',
              'Ventilyasiya və kondisioner: konsollar və insanlar zalı tez qızdırır',
              'Resepsiya zalı görməli və girişə yaxın olmalıdır',
            ],
          },
          {
            id: 'equipment',
            title: 'Avadanlıq siyahısı',
            paragraphs: [
              'Açılışda hər şeyi ən bahalı modeldən almaq lazım deyil, amma müştərinin əlində olan hissəyə — pult, ekran, oturacaq — qənaət etməyin. İşləməyən pult müştərini ən tez itirən səbəbdir.',
            ],
            bullets: [
              'PS5 konsolları — açılış üçün 4–6 stansiya real başlanğıcdır',
              'Hər stansiyaya 55–65 düymlük televizor və ya monitor',
              'Hər konsola ən azı 2 pult, üstəlik 2–3 ehtiyat pult',
              'Populyar oyunlar: futbol, döyüş, yarış — ilk ay nəyin oynandığına baxın',
              'Sabit internet və router, mümkünsə kabel bağlantısı',
              'Pultlar üçün şarj stansiyası və ehtiyat kabellər',
              'Resepsiya üçün noutbuk və ya planşet, kart ödəniş terminalı',
              'Qəlyanaltı və içki üçün soyuducu və rəf',
            ],
          },
          {
            id: 'legal-tax-disclaimer',
            title: 'Qeydiyyat, vergi və icazələr (ümumi məlumat)',
            paragraphs: [
              'Bu bölmə hüquqi məsləhət deyil: tələblər dəyişə bilər və fəaliyyət növündən asılıdır. Açılışdan əvvəl mühasib və ya hüquqşünasla dəqiqləşdirin.',
              'Adətən bu məsələlər yoxlanılır:',
            ],
            bullets: [
              'Hüquqi forma: fərdi sahibkar və ya MMC',
              'Vergi qeydiyyatı və uyğun vergi rejimi',
              'Nağd və kartla satış üçün nəzarət-kassa aparatı tələbləri',
              'Rəsmi kirayə müqaviləsi',
              'Yanğın təhlükəsizliyi və təxliyə yolu',
              'Oyun və abunələrin kommersiya istifadəsi şərtləri',
            ],
          },
          {
            id: 'daily-ops',
            title: 'Gündəlik iş: bron → sessiya → kassa',
            paragraphs: [
              'PS klubunda gün üç addımla dövr edir. Müştəri zəng edir və ya yazır — stansiya bron olunur. Gələndə bron canlı sessiyaya çevrilir, vaxt sayılır, uzatma və qəlyanaltı eyni hesaba düşür. Sessiya bitəndə ödəniş alınır və növbənin kassasına yazılır.',
              'Bu addımlar ayrı yerlərdə — dəftər, telefon, taymer, Excel — aparılanda səhv qaçılmazdır: iki qrup eyni konsola yazılır, uzatma unudulur, gecə kassası tutmur.',
            ],
            bullets: [
              'Bron: stansiya, saat, müştərinin adı və telefonu',
              'Sessiya: başlama vaxtı, tarif, uzatma, əlavə satış',
              'Kassa: nağd və kart, endirim, növbənin açılışı və bağlanışı',
            ],
          },
          {
            id: 'when-software',
            title: 'Proqram nə vaxt lazımdır?',
            paragraphs: [
              '2 konsol və tək sahibkarla dəftər də işləyir. Proqram ehtiyacı adətən bu hallarda yaranır: 4-dən çox stansiya, növbəli işçilər, axşam pik saatları və “kassa niyə tutmur?” sualı.',
              'Açılışdan sistemlə başlamaq daha asandır: sonradan vərəqləri köçürmək və işçiləri yenidən öyrətmək lazım olmur. Heselo-da oyun klubu / PS üçün Kiçik plan {gaming} {currency}/aydan başlayır.',
            ],
          },
          {
            id: 'first-30-days',
            title: 'İlk 30 gün üçün yoxlama siyahısı',
            paragraphs: [
              'İlk ay qiymətləri, iş saatlarını və heyəti sınamaq üçündür. Hər həftə nəticəyə baxın və bir şeyi dəyişin — hamısını birdən yox.',
            ],
            bullets: [
              'Tarifləri və iş saatlarını elan edin, hər bronu sistemdə qeyd edin',
              'Hər növbəni kassa sayımı ilə bağlayın',
              'Hansı saatların boş qaldığını qeyd edin — gündüz paketi düşünün',
              'Ən çox oynanan oyunları və xarab pultları izləyin',
              'Qəlyanaltı qalığını həftədə bir sayın',
              'Instagram və Google Xəritələrdə real şəkillər və iş saatları olan profil açın',
              '30-cu gün: stansiya üzrə doluluğu və orta çeki müqayisə edin',
            ],
          },
        ],
        faq: [
          {
            q: 'PS klub açmaq üçün neçə konsolla başlamaq olar?',
            a: 'Çox klub 4–6 stansiya ilə başlayır: bu, axşam pikini qarşılamağa kifayət edir və investisiyanı idarəolunan saxlayır. İlk ayın doluluğuna baxıb genişlənmək daha təhlükəsizdir. Yer imkan verirsə, bir VIP otaq da əlavə edin — ayrıca tarif orta çeki qaldırır.',
          },
          {
            q: 'Ən ağır xərc hansıdır?',
            a: 'Konsollar birdəfəlik xərcdir; ən ağır aylıq xərc adətən kirayədir, ardınca əmək haqqı və kommunal gəlir. Ona görə məkan seçimi və iş saatları gəlirə birbaşa təsir edir. Açılışdan əvvəl ən azı üç aylıq kirayə və maaş qədər ehtiyat saxlamaq məntiqlidir.',
          },
          {
            q: 'Saatlıq tarifi necə təyin edim?',
            a: 'Yaxınlıqdakı klubların qiymətlərinə, məkanınızın səviyyəsinə və xərclərinizə baxın. Gündüz və axşam üçün fərqli tarif, 3 və 5 saatlıq paketlər boş saatları doldurmağa kömək edir. Tarifləri ilk ayda sınayın, amma tez-tez dəyişməyin — daimi müştəri çaşır.',
          },
          {
            q: 'Hüquqi baxımdan nə etmək lazımdır?',
            a: 'Ümumi olaraq sahibkarlıq qeydiyyatı, vergi uçotu, nəzarət-kassa aparatı tələbləri, kirayə müqaviləsi və yanğın təhlükəsizliyi yoxlanılır. Bu, hüquqi məsləhət deyil: tələblər dəyişə bilər, ona görə açılışdan əvvəl mühasib və ya hüquqşünasla dəqiqləşdirin.',
          },
          {
            q: 'Proqramsız işləmək olarmı?',
            a: 'Bir-iki konsol və tək işçi ilə olar. Stansiya sayı artanda, növbəli işçi və qəlyanaltı satışı başlayanda dəftər və taymer çatmır: bron itir, uzatma unudulur, kassa tutmur. Proqram bron, sessiya və ödənişi bir qeyddə saxlayır.',
          },
          {
            q: 'Heselo PS klub üçün neçəyədir?',
            a: 'Oyun klubu / PS üçün Kiçik plan {gaming} {currency}/aydan başlayır. Stansiya və rezervasiya sayı artanda Orta və Böyük plan açılır; illik ödənişdə 2 ay hədiyyədir. Tam cədvəl qiymətlər səhifəsindədir, demoda isə öz stansiyalarınızla sınaya bilərsiniz.',
          },
        ],
        ctaTitle: 'PS klub üçün demo',
        ctaBody:
          'Neçə konsol planlaşdırdığınızı yazın — bron, canlı sessiya və kassa növbəsini sizin zal planınızla göstəririk.',
      },
      en: {
        shortTitle: 'Opening a PS club',
        h1: 'How to open a PlayStation club: step by step',
        seoTitle: 'How to Open a PlayStation Club — Step-by-Step Guide | Heselo',
        seoDescription:
          'Planning to open a PlayStation club? Location and floor plan, equipment, general legal steps, daily operations and a checklist for your first 30 days.',
        keywords: [
          'how to open a playstation club',
          'open a ps club',
          'gaming club business',
          'playstation lounge business',
          'ps club equipment list',
          'start a gaming club',
        ],
        intro:
          'A PlayStation club can start with modest capital, but it rewards discipline. Buying consoles is the easy part; the hard part is filling quiet hours, never losing a booking and closing the night-shift cash drawer correctly. This guide walks through the key steps before opening and during your first month.',
        sections: [
          {
            id: 'heselo',
            title: 'What does Heselo give a PS club?',
            paragraphs: [
              'Heselo ties station bookings to live sessions, extensions and snack sales on the same bill, and payment to the cash shift. Starting this way means you do not migrate from paper and timers later.',
            ],
            bullets: [
              'Station schedule and bookings',
              'Live session, extensions, add-on sales',
              'Cash shift and end-of-day report',
              'Small plan from {gaming} {currency}/month',
            ],
          },
          {
            id: 'who-for',
            title: 'Who is this guide for?',
            paragraphs: [
              'People planning their first PS club, owners starting with 2–3 consoles who want to grow, and cafés or anticafes adding a gaming zone.',
              'If your club is already running, the daily operations and first-30-days sections are still worth a read.',
            ],
          },
          {
            id: 'location-layout',
            title: 'Location and floor plan',
            paragraphs: [
              'Most customers are students and young people, so being close to universities, schools, residential blocks and metro stations usually matters more than a street-front window. Before signing the lease, confirm noise rules, permitted opening hours and available electrical capacity.',
              'Plan the room station by station: a sofa, a screen and walking space for each PS. One or two private VIP rooms can be sold at a higher hourly rate than the main hall.',
            ],
            bullets: [
              'Roughly 6–9 m² per station (sofa, screen, walkway)',
              'Separate electrical circuits and plenty of sockets',
              'Sound insulation, especially with flats above or next door',
              'Ventilation and air conditioning: consoles and people heat a room fast',
              'A front desk that can see the hall and sits near the entrance',
            ],
          },
          {
            id: 'equipment',
            title: 'Equipment checklist',
            paragraphs: [
              'You do not need the most expensive model of everything on day one, but do not cut corners on what customers hold and look at: controllers, screens and seating. A faulty controller is the fastest way to lose a regular.',
            ],
            bullets: [
              'PS5 consoles: 4–6 stations is a realistic starting point',
              'A 55–65 inch TV or monitor per station',
              'At least 2 controllers per console, plus 2–3 spares',
              'Popular titles: football, fighting, racing. Track what actually gets played in month one',
              'Stable internet and a router, wired where possible',
              'A controller charging dock and spare cables',
              'A laptop or tablet for the front desk and a card payment terminal',
              'A fridge and shelving for snacks and drinks',
            ],
          },
          {
            id: 'legal-tax-disclaimer',
            title: 'Registration, tax and permits (general information)',
            paragraphs: [
              'This section is not legal advice: requirements change and depend on your type of activity. Confirm the details with an accountant or lawyer before opening.',
              'Owners typically check the following:',
            ],
            bullets: [
              'Legal form: sole proprietor or limited liability company',
              'Tax registration and a suitable tax regime',
              'Cash register requirements for cash and card sales',
              'A formal lease agreement',
              'Fire safety and an evacuation route',
              'Terms for commercial use of games and subscriptions',
            ],
          },
          {
            id: 'daily-ops',
            title: 'Daily operations: booking → session → cash',
            paragraphs: [
              'A PS club day runs in three steps. A customer calls or messages, and a station is booked. When they arrive, the booking becomes a live session: time is tracked, and extensions and snacks go on the same bill. When the session ends, payment is taken and recorded in the current cash shift.',
              'When these steps live in different places (a notebook, a phone, a timer, a spreadsheet), mistakes are inevitable: two groups get booked on the same console, an extension is forgotten, the night cash count does not match.',
            ],
            bullets: [
              'Booking: station, time slot, customer name and phone',
              'Session: start time, rate, extensions, add-on sales',
              'Cash: cash and card, discounts, shift opening and closing',
            ],
          },
          {
            id: 'when-software',
            title: 'When do you need software?',
            paragraphs: [
              'With two consoles and the owner behind the desk, a notebook works. The need for software usually appears with more than four stations, shift staff, evening peaks and the recurring question of why the cash drawer is short.',
              'Starting with a system from day one is easier than migrating later: no spreadsheets to transfer and no staff to retrain. Heselo’s Small plan for gaming / PS clubs starts from {gaming} {currency} per month.',
            ],
          },
          {
            id: 'first-30-days',
            title: 'Checklist for your first 30 days',
            paragraphs: [
              'The first month is for testing prices, opening hours and staffing. Review results every week and change one thing at a time, not everything at once.',
            ],
            bullets: [
              'Publish your rates and hours, and record every booking in the system',
              'Close every shift with a cash count',
              'Note which hours stay empty and consider a daytime package',
              'Track the most-played games and any faulty controllers',
              'Count snack and drink stock once a week',
              'Set up Instagram and Google Maps profiles with real photos and opening hours',
              'Day 30: compare occupancy per station and the average bill',
            ],
          },
        ],
        faq: [
          {
            q: 'How many consoles should a new PS club start with?',
            a: 'Many clubs open with 4–6 stations. That is enough to handle the evening peak while keeping the investment manageable. Growing after you see real first-month occupancy is the safer route. If space allows, add one VIP room: a separate rate lifts the average bill.',
          },
          {
            q: 'What is the biggest cost?',
            a: 'Consoles are a one-off purchase. The heaviest monthly cost is usually rent, followed by wages and utilities, which is why location and opening hours drive revenue so directly. Keeping a reserve of at least three months of rent and wages before opening is sensible.',
          },
          {
            q: 'How should I set the hourly rate?',
            a: 'Look at nearby clubs, the standard of your venue and your own costs. Separate daytime and evening rates, plus 3- and 5-hour packages, help fill quiet hours. Test your rates during the first month, but avoid changing them too often, because regulars get confused.',
          },
          {
            q: 'What do I need to do legally?',
            a: 'In general, owners check business registration, tax accounting, cash register requirements, the lease agreement and fire safety. This is not legal advice: requirements can change, so confirm everything with an accountant or lawyer before you open.',
          },
          {
            q: 'Can I run a club without software?',
            a: 'With one or two consoles and a single person on the desk, yes. Once stations multiply, shifts begin and snack sales pick up, a notebook and timer stop coping: bookings get lost, extensions are forgotten, cash does not reconcile. Software keeps booking, session and payment in one record.',
          },
          {
            q: 'How much does Heselo cost for a PS club?',
            a: 'The Small plan for gaming / PS clubs starts from {gaming} {currency} per month. Medium and Large plans unlock as your station and booking volume grows, and annual billing includes two months free. The full table is on the pricing page, and a demo lets you test with your own stations.',
          },
        ],
        ctaTitle: 'Demo for your PS club',
        ctaBody:
          'Tell us how many consoles you are planning. We will show bookings, live sessions and cash shifts laid out for your floor plan.',
      },
      ru: {
        shortTitle: 'Открыть PS-клуб',
        h1: 'Как открыть PS-клуб: пошаговый план 2026',
        seoTitle: 'Как открыть PS-клуб в 2026: расходы, окупаемость, чек-лист | Heselo',
        seoDescription:
          'Пошагово: помещение, PS5 и ТВ, бюджет по статьям, тарифы и окупаемость с примерами из открытых источников. Чек-лист первых 30 дней.',
        keywords: [
          'как открыть ps клуб',
          'как открыть playstation клуб',
          'открыть игровой клуб 2026',
          'бюджет playstation клуб',
          'окупаемость ps клуба',
          'оборудование для ps клуба',
          'чек-лист открытия игрового клуба',
        ],
        intro:
          'Открыть PS-клуб можно быстрее, чем компьютерный: меньше вложений в железо и проще обслуживание. Но бюджет, тарифы и учёт выручки лучше продумать до первого гостя. Ниже — шаги, диапазоны расходов из открытых источников и чек-лист первых 30 дней.',
        sections: [
          {
            id: 'heselo',
            title: 'Программа учёта с первого дня',
            paragraphs: [
              'Heselo — онлайн-панель: бронь станции → живой сеанс → бар в тот же счёт → кассовая смена. Контроллеры ТВ и онлайн-касса (ККТ) не входят в продукт — в РФ ККТ подключают отдельно. План «Старт» для игровых клубов — от {gaming} {currency}/мес.',
            ],
            bullets: [
              'Расписание станций и предварительная бронь',
              'Живой сеанс, продление, бар в счёт',
              'Смена администратора и отчёт по выручке',
              'Работает удалённо (Баку; Казахстан, Узбекистан, Россия — онлайн)',
            ],
          },
          {
            id: 'format',
            title: 'Формат: PS-клуб, кабинки, лаунж',
            paragraphs: [
              'Выберите модель до аренды: открытый зал со станциями, закрытые кабинки или смешанный лаунж с VIP-комнатами. Кабинки дают выше средний чек, но дороже по площади и звукоизоляции.',
              'Смешанный формат (PS + бильярд или караоке) усложняет расписание — заранее решите, одна ли панель будет вести все ресурсы.',
            ],
            bullets: [
              'Открытый зал — ниже CAPEX, выше шум',
              'Кабинки / VIP — выше тариф часа',
              '4–6 консолей на старте — частый минимум для вечернего пика',
            ],
          },
          {
            id: 'location-layout',
            title: 'Помещение и требования',
            paragraphs: [
              'Аудитория — студенты и молодёжь: важнее близость к кампусу, жилому массиву и транспорту, чем витрина на проспект. В договоре аренды зафиксируйте шум, часы работы и электрическую мощность.',
              'Планируйте зал по станциям: диван, ТВ, проход. Одна-две VIP-комнаты продаются дороже общего зала.',
            ],
            bullets: [
              'Около 6–9 м² на станцию (диван, экран, проход)',
              'Отдельные линии и запас розеток',
              'Звукоизоляция при соседстве с жильём',
              'Вентиляция и кондиционер',
              'Стойка администратора с обзором зала',
            ],
          },
          {
            id: 'equipment',
            title: 'Оборудование: PS5, ТВ, мебель, сеть',
            paragraphs: [
              'Не экономьте на геймпадах и экранах — это то, что гость трогает первым. Консоли — крупная разовая статья; запасные геймпады окупаются быстрее, чем простой станции.',
            ],
            bullets: [
              'PS5: 4–6 станций на старт',
              'ТВ/монитор 55–65″ на станцию',
              '2 геймпада на консоль + 2–3 запасных',
              'Популярные игры: футбол, файтинги, гонки',
              'Стабильный интернет, по возможности кабель',
              'Зарядка геймпадов, ноутбук/планшет администратора, терминал',
              'Холодильник и стеллаж для снеков',
            ],
          },
          {
            id: 'budget',
            title: 'Бюджет по статьям (диапазоны из открытых источников)',
            paragraphs: [
              'Цифры зависят от города и года; ниже — ориентиры из открытых материалов (не смета Heselo). Проверяйте актуальные цены на дату открытия.',
              'Обзоры бюджета PS-клуба: telegra.ph (статья «Сколько нужно денег… PlayStation-клуб») и Enextware «Сколько стоит открыть PS-клуб» (2026). Типичные статьи: консоли и ТВ, мебель, ремонт/звук, депозит аренды, запас на 2–3 месяца OPEX. Цифры у источников расходятся — подставляйте цены своего города.',
            ],
            bullets: [
              'CAPEX: консоли, ТВ, мебель, ремонт, вывеска',
              'OPEX: аренда, зарплаты, коммуналка, интернет, игры/подписки, снеки',
              'Запас: минимум 2–3 месяца постоянных расходов до стабильной загрузки',
            ],
          },
          {
            id: 'tariffs-load',
            title: 'Тарифы и загрузка',
            paragraphs: [
              'Почасовой тариф — база; дневной/вечерний уровень, пакеты часов и ночной тариф заполняют «дыры» в расписании. Не копируйте чужой прайс вслепую: считайте себестоимость часа.',
              'Подробнее — в статье ps-club-tariffs. Контроль смен и выручки — в club-revenue-control.',
            ],
            bullets: [
              'Сравните цены соседних клубов, но считайте свою себестоимость часа',
              'Отдельно — ночной тариф и VIP-кабинки',
              'Следите за загрузкой по часам, а не только за «средним чеком»',
            ],
          },
          {
            id: 'payback',
            title: 'Окупаемость: от чего зависит',
            paragraphs: [
              'Срок считают от маржи после аренды и зарплат, а не от «часа × число консолей». Рычаги: загрузка в пик, доля пустых дневных часов, средний чек с баром и отсутствие «левых» сеансов.',
              'Открытые кейсы дают разные сроки — от нескольких месяцев до года и больше. Единой цифры нет: постройте сценарии загрузки 30% / 50% / 70% на своих CAPEX/OPEX.',
            ],
          },
          {
            id: 'seasonality',
            title: 'Сезонность',
            paragraphs: [
              'У учебных и молодёжных залов пик часто приходится на сентябрь–март: больше вечерних сеансов в будни. Лето и сессия могут проседать — закладывайте это в запас оборотки.',
              'В открытых историях про компьютерные клубы (например, разборы на vc.ru) сезонность связывают с учёбой и погодой. Для PS-зала логика похожа; после открытия опирайтесь на свою статистику, а не на чужой кейс.',
            ],
          },
          {
            id: 'legal-tax-disclaimer',
            title: 'Документы (общие шаги; зависят от страны)',
            paragraphs: [
              'Не юридическая консультация. В Азербайджане, Казахстане, Узбекистане и России набор требований разный. В РФ отдельно проверьте ККТ (54-ФЗ) — Heselo кассой не является. ОКВЭД и ОК упоминайте только после консультации с бухгалтером в вашей стране.',
            ],
            bullets: [
              'Регистрация бизнеса (ИП/ООО или местный аналог)',
              'Налоговый режим и учёт',
              'Договор аренды, пожарная безопасность',
              'Условия коммерческого использования игр и подписок',
            ],
          },
          {
            id: 'daily-ops',
            title: 'Ежедневная работа: бронь → сеанс → касса',
            paragraphs: [
              'Гость пишет или звонит — станция в расписании. По приходу бронь становится живым сеансом: время, продление и снеки в одном счёте. Оплата закрывается в смене.',
              'Тетрадь + WhatsApp + таймер дают накладки и «дыру» в ночной кассе. С первого дня лучше одна панель.',
            ],
            bullets: [
              'Бронь: станция, время, контакт',
              'Сеанс: старт, тариф, продление, бар',
              'Касса: наличные/карта, скидки, открытие и закрытие смены',
            ],
          },
          {
            id: 'first-30-days',
            title: 'Чек-лист первых 30 дней',
            paragraphs: [
              'Первый месяц — проверка цен, графика и персонала. Меняйте по одному правилу в неделю.',
            ],
            bullets: [
              'Опубликуйте тарифы и часы; каждую бронь — в системе',
              'Закрывайте смену с пересчётом кассы',
              'Отмечайте пустые часы → дневной пакет',
              'Учёт геймпадов и топ-игр',
              'Еженедельный пересчёт снеков',
              'Карточки в картах/соцсетях с реальными фото',
              'На 30-й день: загрузка по станциям и средний чек',
            ],
          },
        ],
        faq: [
          {
            q: 'Сколько стоит открыть PS-клуб?',
            a: 'Диапазон сильно зависит от города и числа станций. Ориентиры по статьям бюджета — в открытых обзорах (Enextware 2026, материалы вроде telegra.ph); заложите CAPEX на консоли/ТВ/ремонт и 2–3 месяца OPEX. Это не смета Heselo.',
          },
          {
            q: 'Сколько консолей нужно на старт?',
            a: 'Часто начинают с 4–6 станций: хватает на вечерний пик при управляемых вложениях. Расширяйтесь после реальной загрузки первого месяца. VIP-кабинка поднимает средний чек, если позволяет площадь.',
          },
          {
            q: 'Какая окупаемость?',
            a: 'Зависит от аренды, цены часа и загрузки. Считайте точку безубыточности в гостечасах, а не «среднюю по рынку». Лето часто слабее учебного сезона — закладывайте сезонность.',
          },
          {
            q: 'Нужна ли лицензия на игры?',
            a: 'Условия коммерческого использования игр и подписок задаёт правообладатель. Перед открытием проверьте актуальные правила — это не юридическая консультация Heselo.',
          },
          {
            q: 'Какие тарифы ставить?',
            a: 'Смотрите соседей и свою себестоимость часа. Разделите день/вечер, добавьте пакеты и ночной тариф. Подробнее — статья про тарифы PS-клуба и калькулятор на сайте.',
          },
          {
            q: 'Как не допустить кражи выручки?',
            a: 'Закрывайте смену с пересчётом, ведите бар в счёте сеанса, ограничивайте права на скидки. Практический разбор — в статье «Как контролировать выручку и администратора в игровом клубе».',
          },
          {
            q: 'Сколько стоит Heselo для PS-клуба?',
            a: 'План «Старт» — от {gaming} {currency}/мес. «Стандарт» и «Про» — на странице цен. Демо бесплатно: укажите число станций в форме связи.',
          },
        ],
        ctaTitle: 'Демо для PS-клуба',
        ctaBody:
          'Напишите, сколько консолей планируете, — покажем бронь, живые сеансы и смены на примере вашей планировки.',
      },
    },
  },
  {
    slug: 'club-pos-terminal-selection',
    relatedSolutions: ['pos', 'gaming', 'karaoke'],
    copy: {
      az: {
        shortTitle: 'POS terminal seçimi',
        h1: 'Klub üçün POS terminal seçərkən nəyə baxmaq lazımdır?',
        seoTitle: 'Klub üçün POS terminal seçimi — nəyə baxmalı | Heselo',
        seoDescription:
          'Klub üçün POS terminal seçərkən nəyi yoxlamaq lazımdır: terminal ilə idarəetmə panelinin fərqi, printer, internet, kassa aparatı və kiçik klub üçün minimum dəst.',
        keywords: [
          'klub üçün pos terminal',
          'pos terminal seçimi',
          'pos terminal nədir',
          'oyun klubu pos',
          'karaoke pos terminal',
          'kassa aparatı klub',
        ],
        intro:
          'POS söhbəti çox vaxt iki fərqli şeyi qarışdırır: kart qəbul edən və çek çıxaran cihazı (terminal) və satışı, sessiyanı, növbəni idarə edən proqramı (panel). Klub üçün hər ikisi lazımdır, amma fərqli suallarla seçilir. Heselo proqram tərəfidir — cihaz satmır.',
        sections: [
          {
            id: 'how-heselo-fits',
            title: 'Heselo POS sxemində nə verir?',
            paragraphs: [
              'Heselo idarəetmə panelidir: rezervasiya, canlı sessiya, satış, endirim, kassa növbəsi və anbar. Ödəniləcək məbləği sistem hesablayır, işçi ödəniş üsulunu — nağd və ya kart — qeyd edir. Kart ödənişinin özü isə bankın terminalından keçir.',
              'Heselo terminal, kassa aparatı və ya printer satmır. Mövcud avadanlığınızla necə birgə işləyəcəyini demoda öz cihazlarınız üzrə yoxlayın.',
            ],
          },

          {
            id: 'terminal-vs-panel',
            title: 'Terminal və panel: fərq nədir?',
            paragraphs: [
              'Terminal fiziki avadanlıqdır: bankın kart terminalı, nəzarət-kassa aparatı, çek printeri, bəzən sensor ekranlı kompüter. Bunlar adətən bank, avadanlıq satıcısı və vergi tələbləri ilə bağlıdır.',
              'Panel işçinin gördüyü proqramdır: stansiya və otaq cədvəli, canlı sessiya, satış, endirim, növbə hesabatı. Heselo bu hissədir — veb paneldir və brauzerdə, kompüter, planşet və ya telefonda açılır.',
            ],
          },

          {
            id: 'club-vs-restaurant-scenario',
            title: 'Klub ssenarisi restorandan nə ilə fərqlənir?',
            paragraphs: [
              'Restoranda çek sifarişdən yaranır: masa, menyu, mətbəx. Klubda isə hesab vaxtdan yaranır: stansiya və ya otaq açılır, saat gedir, sonda qəlyanaltı əlavə olunur. Restoran POS-unda vaxtı çox vaxt əl ilə “məhsul” kimi vurmaq lazım gəlir.',
              'Ona görə cihazı seçməzdən əvvəl panelin klub ssenarisini — bron, sessiya, uzatma, növbə — dəstəklədiyini yoxlayın. Terminal sonra bu prosesə qoşulur.',
            ],
          },

          {
            id: 'selection-criteria',
            title: 'Terminal seçərkən meyarlar',
            paragraphs: [
              'Bu suallar bankla və avadanlıq satıcısı ilə danışanda işə yarayır. Kassa aparatı ilə bağlı hissə ümumi məlumatdır — dəqiq tələbi mühasibinizdən və ya Dövlət Vergi Xidmətinin rəsmi mənbələrindən yoxlayın.',
            ],
            bullets: [
              'İnternet kəsiləndə nə olur: kart terminalı SIM kartla işləyirmi, panel üçün ehtiyat mobil internet varmı',
              'Wi-Fi və kabel: resepsiyada sabit bağlantı, qonaq Wi-Fi-dan ayrı şəbəkə',
              'Çek printeri: kağız eni, sürət, ehtiyat rulonun asan tapılması',
              'Kassa aparatı: Azərbaycanda nağd və kart satışı üçün ümumi olaraq nəzarət-kassa aparatı tələbləri tətbiq olunur',
              'Bank komissiyası, terminalın icarə haqqı və pulun hesaba düşmə müddəti',
              'Servis: cihaz xarab olanda neçə saata dəyişdirilir',
              'Ekran: resepsiya üçün planşet və ya noutbuk kifayətdirmi',
            ],
          },

          {
            id: 'minimum-set-small-club',
            title: 'Kiçik klub üçün minimum dəst',
            paragraphs: [
              '4–8 stansiyalı və ya 2–4 otaqlı klub üçün başlanğıc dəsti sadə ola bilər. Əsas odur ki, hər ödəniş eyni növbəyə düşsün.',
            ],
            bullets: [
              'Resepsiya üçün noutbuk və ya planşet (Heselo paneli brauzerdə)',
              'Bankın kart terminalı',
              'Tələblərə uyğun kassa aparatı və ya çek həlli',
              'Sabit internet və ehtiyat mobil internet',
              'İstəyə görə: pul qutusu və ayrıca çek printeri',
            ],
          },
            ],
        faq: [
          {
            q: 'POS terminal və POS proqramı eyni şeydir?',
            a: 'Xeyr. Terminal kart qəbul edən və ya çek çıxaran fiziki cihazdır. Proqram, yəni panel, satışı, sessiyanı, endirimi və növbə hesabatını idarə edir. Klub üçün hər ikisi lazımdır, amma ayrı-ayrı seçilir. Heselo proqram tərəfidir.',
          },
          {
            q: 'Heselo terminal və ya kassa aparatı satır?',
            a: 'Xeyr. Heselo veb paneldir və brauzerdə açılır. Kart terminalını bankdan, kassa aparatını isə səlahiyyətli satıcıdan alırsınız. Panel işçiyə məbləği və ödəniş üsulunu qeyd etməyə, növbənin sonunda nağd və kartı ayrıca görməyə imkan verir.',
          },
          {
            q: 'Restoran POS-u klubda işləyərmi?',
            a: 'Məhsul satışı üçün işləyir, amma vaxtla hesablanan xidmətdə çətinlik yaradır: saatı əl ilə “məhsul” kimi vurmaq, uzatmanı ayrıca hesablamaq lazım gəlir. Klubda bron, sessiya və növbə bir yerdə olmalıdır — bunu seçimdən əvvəl demoda yoxlayın.',
          },
          {
            q: 'İnternet kəsiləndə nə etməli?',
            a: 'Veb panel internet tələb edir, ona görə resepsiyada kabel internetlə yanaşı ehtiyat mobil internet — modem və ya telefondan paylaşım — saxlayın. Kart terminalının SIM kartla işləyib-işləmədiyini bankdan soruşun. Beləliklə bir bağlantı düşəndə növbə dayanmır.',
          },
          {
            q: 'Kassa aparatı məcburidirmi?',
            a: 'Azərbaycanda nağd və kart satışında ümumi olaraq nəzarət-kassa aparatı tələbləri tətbiq olunur, amma dəqiq şərtlər fəaliyyət növündən və vergi rejimindən asılıdır. Bu, hüquqi məsləhət deyil — mühasibinizlə və ya Dövlət Vergi Xidmətinin rəsmi mənbələri ilə dəqiqləşdirin.',
          },
          {
            q: 'Kiçik klub üçün minimum nə lazımdır?',
            a: 'Resepsiya üçün noutbuk və ya planşet, bankın kart terminalı, tələblərə uyğun kassa həlli və ehtiyatlı internet. Printer və pul qutusunu sonra əlavə etmək olar. Heselo paneli bu dəstlə işləyir; PS klub üçün {gaming}, karaoke üçün {karaoke} {currency}/aydan başlayır.',
          },
        ],
        ctaTitle: 'Kassa axınını demoda yoxlayın',
        ctaBody:
          'Stansiya və ya otaq sayınızı, istifadə etdiyiniz avadanlığı yazın — sessiyadan ödənişə və növbə bağlanışına qədər axını göstəririk.',
      },
      en: {
        shortTitle: 'Choosing a POS terminal',
        h1: 'What to look for when choosing a POS terminal for a club',
        seoTitle: 'Choosing a POS Terminal for a Club — What to Check | Heselo',
        seoDescription:
          'What to check when choosing a POS terminal for a club: hardware versus management software, printers, internet, cash register rules and a minimum setup for a small club.',
        keywords: [
          'pos terminal for club',
          'choosing a pos terminal',
          'what is a pos terminal',
          'gaming club pos',
          'karaoke pos terminal',
          'cash register for club',
        ],
        intro:
          'Conversations about POS often mix up two different things: the device that takes cards and prints receipts (the terminal) and the software that runs sales, sessions and shifts (the panel). A club needs both, but you choose them by asking different questions. Heselo is the software side and does not sell hardware.',
        sections: [
          {
            id: 'how-heselo-fits',
            title: 'What does Heselo give in this setup?',
            paragraphs: [
              'Heselo is the management panel: bookings, live sessions, sales, discounts, cash shifts and inventory. The system calculates the amount due, and staff record the payment method, cash or card. The card payment itself goes through your bank terminal.',
              'Heselo does not sell terminals, cash registers or printers. Check how it works alongside your existing hardware during a demo with your actual devices.',
            ],
          },

          {
            id: 'terminal-vs-panel',
            title: 'Terminal versus panel: what is the difference?',
            paragraphs: [
              'The terminal is physical hardware: a bank card terminal, a fiscal cash register, a receipt printer, sometimes a touchscreen computer. These are usually tied to your bank, a hardware vendor and tax requirements.',
              'The panel is the software your staff see: the station and room schedule, live sessions, sales, discounts and shift reports. Heselo is this part. It is a web panel that opens in a browser on a computer, tablet or phone.',
            ],
          },

          {
            id: 'club-vs-restaurant-scenario',
            title: 'How does a club differ from a restaurant?',
            paragraphs: [
              'In a restaurant, the bill comes from an order: table, menu, kitchen. In a club, the bill comes from time: a station or room opens, the clock runs, and snacks are added at the end. Restaurant POS systems often make staff ring up time manually as if it were a product.',
              'So before choosing hardware, confirm that the panel supports the club flow: booking, session, extension and shift. The terminal then plugs into that process.',
            ],
          },

          {
            id: 'selection-criteria',
            title: 'Criteria for choosing a terminal',
            paragraphs: [
              'These questions are useful when talking to your bank and hardware vendor. The cash register part is general information only; confirm the exact rules with your accountant or the official State Tax Service sources.',
            ],
            bullets: [
              'What happens when the internet drops: does the card terminal run on a SIM, and do you have backup mobile data for the panel?',
              'Wi-Fi and cable: a stable connection at the front desk, on a network separate from guest Wi-Fi',
              'Receipt printer: paper width, speed and how easy spare rolls are to find',
              'Cash register: in Azerbaijan, fiscal cash register requirements generally apply to cash and card sales',
              'Bank fees, terminal rental and how quickly funds reach your account',
              'Service: how many hours it takes to replace a broken device',
              'Screen: whether a tablet or laptop is enough for the front desk',
            ],
          },

          {
            id: 'minimum-set-small-club',
            title: 'Minimum setup for a small club',
            paragraphs: [
              'For a club with 4–8 stations or 2–4 rooms, the starting kit can be simple. What matters is that every payment lands in the same shift.',
            ],
            bullets: [
              'A laptop or tablet for the front desk (Heselo runs in the browser)',
              'A bank card terminal',
              'A compliant cash register or receipt solution',
              'Stable internet plus backup mobile data',
              'Optional: a cash drawer and a separate receipt printer',
            ],
          },
            ],
        faq: [
          {
            q: 'Are a POS terminal and POS software the same thing?',
            a: 'No. The terminal is a physical device that accepts cards or prints receipts. The software, or panel, manages sales, sessions, discounts and shift reports. A club needs both, but they are chosen separately. Heselo is the software side.',
          },
          {
            q: 'Does Heselo sell terminals or cash registers?',
            a: 'No. Heselo is a web panel that opens in a browser. You get the card terminal from your bank and the cash register from an authorised vendor. The panel lets staff record the amount and payment method, and see cash and card separately when the shift closes.',
          },
          {
            q: 'Will a restaurant POS work in a club?',
            a: 'It works for product sales, but struggles with time-based billing: staff have to ring up hours manually as a product and calculate extensions separately. A club needs booking, session and shift in one place, so test that flow in a demo before you commit.',
          },
          {
            q: 'What should I do when the internet goes down?',
            a: 'A web panel needs a connection, so keep backup mobile data at the front desk alongside wired internet, via a modem or phone hotspot. Ask your bank whether the card terminal can run on a SIM. That way one dropped connection does not stop the shift.',
          },
          {
            q: 'Is a cash register mandatory?',
            a: 'In Azerbaijan, fiscal cash register requirements generally apply to cash and card sales, but the exact conditions depend on your activity and tax regime. This is not legal advice. Confirm with your accountant or the official State Tax Service sources.',
          },
          {
            q: 'What is the minimum a small club needs?',
            a: 'A laptop or tablet for the front desk, a bank card terminal, a compliant cash register solution and internet with a backup. A printer and cash drawer can come later. Heselo works with this setup and starts from {gaming} {currency} per month for PS clubs and {karaoke} {currency} for karaoke.',
          },
        ],
        ctaTitle: 'Test the checkout flow in a demo',
        ctaBody:
          'Tell us your station or room count and the hardware you use. We will walk you through the flow from session to payment to shift close.',
      },
      ru: {
        shortTitle: 'Выбор POS-терминала',
        h1: 'На что смотреть при выборе POS-терминала для клуба',
        seoTitle: 'Выбор POS-терминала для клуба — что проверить | Heselo',
        seoDescription:
          'POS-терминал для клуба: чем железо отличается от панели, принтер, интернет, касса и минимальный комплект для небольшого зала.',
        keywords: [
          'pos терминал для клуба',
          'выбор pos терминала',
          'что такое pos терминал',
          'pos для игрового клуба',
          'pos терминал для караоке',
          'кассовый аппарат для клуба',
        ],
        intro:
          'В разговорах о POS часто смешивают две разные вещи: устройство, которое принимает карты и печатает чеки (терминал), и программу, которая ведёт продажи, сеансы и смены (панель). Клубу нужно и то и другое, но выбирают их по разным критериям. Heselo — это программная часть, оборудование мы не продаём.',
        sections: [
          {
            id: 'how-heselo-fits',
            title: 'Что Heselo даёт в этой схеме?',
            paragraphs: [
              'Heselo — панель управления: бронирования, живые сеансы, продажи, скидки, кассовая смена и склад. Сумму к оплате считает система, а сотрудник отмечает способ оплаты — наличные или карта. Сама оплата картой проходит через терминал банка.',
              'Heselo не продаёт терминалы, кассовые аппараты и принтеры. Как система работает вместе с вашим оборудованием, проверьте на демо на своих устройствах.',
            ],
          },

          {
            id: 'terminal-vs-panel',
            title: 'Терминал и панель: в чём разница?',
            paragraphs: [
              'Терминал — это физическое оборудование: банковский платёжный терминал, контрольно-кассовый аппарат, чековый принтер, иногда сенсорный моноблок. Обычно оно связано с банком, поставщиком оборудования и налоговыми требованиями.',
              'Панель — программа, с которой работает персонал: расписание станций и комнат, живые сеансы, продажи, скидки, отчёт по смене. Heselo — именно эта часть: веб-панель, которая открывается в браузере на компьютере, планшете или телефоне.',
            ],
          },

          {
            id: 'club-vs-restaurant-scenario',
            title: 'Чем сценарий клуба отличается от ресторана?',
            paragraphs: [
              'В ресторане счёт складывается из заказа: стол, меню, кухня. В клубе — из времени: станция или комната открывается, идёт время, в конце добавляются снеки. В ресторанной POS время часто приходится пробивать вручную как «товар».',
              'Поэтому до выбора оборудования убедитесь, что панель поддерживает клубный сценарий: бронь, сеанс, продление, смену. Терминал потом просто встраивается в этот процесс.',
            ],
          },

          {
            id: 'selection-criteria',
            title: 'Критерии выбора терминала',
            paragraphs: [
              'Эти вопросы пригодятся в разговоре с банком и поставщиком оборудования. Часть о кассовом аппарате — только общая информация: точные требования уточните у бухгалтера или в официальных источниках Государственной налоговой службы.',
            ],
            bullets: [
              'Что будет при отключении интернета: работает ли терминал через SIM-карту, есть ли резервный мобильный интернет для панели',
              'Wi-Fi и кабель: стабильное подключение на стойке, отдельная сеть от гостевого Wi-Fi',
              'Чековый принтер: ширина ленты, скорость, доступность запасных рулонов',
              'Кассовый аппарат: в Азербайджане к наличным и безналичным продажам в целом применяются требования к ККА',
              'Комиссия банка, аренда терминала и срок зачисления денег',
              'Сервис: за сколько часов заменят сломанное устройство',
              'Экран: хватит ли планшета или ноутбука для стойки администратора',
            ],
          },

          {
            id: 'minimum-set-small-club',
            title: 'Минимальный комплект для небольшого клуба',
            paragraphs: [
              'Для клуба на 4–8 станций или 2–4 комнаты стартовый набор может быть простым. Главное — чтобы каждая оплата попадала в одну и ту же смену.',
            ],
            bullets: [
              'Ноутбук или планшет для стойки (панель Heselo работает в браузере)',
              'Банковский платёжный терминал',
              'Кассовый аппарат или чековое решение в соответствии с требованиями',
              'Стабильный интернет и резервный мобильный интернет',
              'По желанию: денежный ящик и отдельный чековый принтер',
            ],
          },
            ],
        faq: [
          {
            q: 'POS-терминал и POS-программа — одно и то же?',
            a: 'Нет. Терминал — физическое устройство, которое принимает карты или печатает чеки. Программа, то есть панель, управляет продажами, сеансами, скидками и отчётами по смене. Клубу нужны оба, но выбираются они отдельно. Heselo — программная часть.',
          },
          {
            q: 'Heselo продаёт терминалы или кассовые аппараты?',
            a: 'Нет. Heselo — веб-панель, которая открывается в браузере. Платёжный терминал вы получаете в банке, кассовый аппарат — у авторизованного поставщика. Панель позволяет сотруднику фиксировать сумму и способ оплаты, а при закрытии смены видеть наличные и безнал отдельно.',
          },
          {
            q: 'Подойдёт ли ресторанная POS для клуба?',
            a: 'Для продажи товаров — да, но с почасовой оплатой начинаются сложности: время приходится пробивать вручную как товар, а продление считать отдельно. В клубе бронь, сеанс и смена должны быть в одном месте — проверьте это на демо до покупки.',
          },
          {
            q: 'Что делать, если пропал интернет?',
            a: 'Веб-панели нужен интернет, поэтому на стойке, кроме кабельного подключения, держите резервный мобильный — модем или раздачу с телефона. Уточните в банке, работает ли терминал через SIM-карту. Тогда обрыв одного канала не остановит смену.',
          },
          {
            q: 'Обязателен ли кассовый аппарат?',
            a: 'В Азербайджане к наличным и безналичным продажам в целом применяются требования к контрольно-кассовому аппарату, но точные условия зависят от вида деятельности и налогового режима. Это не юридическая консультация — уточните у бухгалтера или в официальных источниках Государственной налоговой службы.',
          },
          {
            q: 'Что минимально нужно небольшому клубу?',
            a: 'Ноутбук или планшет для стойки, банковский терминал, кассовое решение по требованиям и интернет с резервом. Принтер и денежный ящик можно добавить позже. Heselo работает с таким комплектом и стоит от {gaming} {currency} в месяц для PS-клуба и от {karaoke} {currency} для караоке.',
          },
        ],
        ctaTitle: 'Проверьте кассовый сценарий на демо',
        ctaBody:
          'Напишите число станций или комнат и какое оборудование используете — покажем путь от сеанса до оплаты и закрытия смены.',
      },
    },
  },
  {
    slug: 'game-hall-automation',
    relatedSolutions: ['gaming', 'reservations', 'pos'],
    copy: {
      az: {
        shortTitle: 'Oyun salonu avtomatlaşdırma',
        h1: 'Oyun salonu avtomatlaşdırma: bron, sessiya, kassa',
        seoTitle: 'Oyun salonu avtomatlaşdırma: bron, sessiya, kassa | Heselo',
        seoDescription:
          'Oyun salonunda nə avtomatlaşdırılmalıdır: bron, taymer, ödəniş və növbə. WhatsApp və Excel ilə panelin müqayisəsi, izlənməli göstəricilər.',
        keywords: [
          'oyun salonu avtomatlaşdırma',
          'oyun klubu avtomatlaşdırma',
          'ps klub avtomatlaşdırma',
          'oyun salonu proqramı',
          'oyun zalı idarəetmə',
        ],
        intro:
          'Oyun salonunu avtomatlaşdırmaq robot və ya bahalı avadanlıq demək deyil. Söhbət dörd təkrarlanan işdən gedir: bron, vaxt sayğacı, ödəniş və növbə bağlanışı. Bunlar bir qeyddə birləşəndə işçi daha az yazır, sahib isə gəliri daha dəqiq görür.',
        sections: [
          {
            id: 'heselo',
            title: 'Heselo oyun zalı üçün nə verir?',
            paragraphs: [
              'Heselo-da stansiya cədvəldə və canlı zalda eyni vahiddir: bron sessiyaya çevrilir, məbləği sistem hesablayır, satış eyni hesaba düşür, növbə hesabatı sonda hazır olur. PS və PC stansiyaları eyni paneldə ola bilər.',
              'Oyun klubu üçün Kiçik plan {gaming} {currency}/aydan başlayır. Keçidi bir növbədə sınayın: bronları paneldə aparın və gecə kassasını köhnə üsulla müqayisə edin.',
            ],
          },

          {
            id: 'manual-pain',
            title: 'Əl ilə işləyəndə nə itir?',
            paragraphs: [
              'Əl ilə idarə olunan salonda məlumat bir neçə yerdə yaşayır: bron WhatsApp-da, saat divarda, uzatma dəftərdə, nağd pul qutuda. Hər keçiddə nəsə düşür.',
            ],
            bullets: [
              'Eyni stansiyaya iki bron',
              'Uzadılan 30 dəqiqə hesaba düşmür',
              'Qəlyanaltı satışı sessiyadan ayrı qalır',
              'Gecə növbəsinin kassası tutmur, səbəbi tapılmır',
              'Sahib gəliri yalnız ay sonunda, təxmini bilir',
            ],
          },

          {
            id: 'four-flows',
            title: 'Avtomatlaşdırılacaq dörd axın',
            paragraphs: [
              'Hər axını ayrıca yoxlayın: hansında ən çox vaxt və pul itir?',
            ],
            bullets: [
              'Bron: stansiya və saat cədvəldədir, toqquşma dərhal görünür, müştərinin adı və telefonu qeyd olunur',
              'Taymer: bron canlı sessiyaya çevrilir, vaxt avtomatik sayılır, uzatma bir kliklə edilir',
              'Ödəniş: məbləğ tarif və vaxtdan hesablanır, qəlyanaltı eyni hesaba düşür, nağd və kart ayrılır',
              'Növbə: açılış və bağlanış, gözlənilən və faktiki kassa, işçi üzrə hesabat',
            ],
          },

          {
            id: 'tools-whatsapp-excel-vs-panel',
            title: 'WhatsApp və Excel, yoxsa panel?',
            paragraphs: [
              'WhatsApp və Excel pulsuzdur və başlanğıcda bəs edə bilər. Problem onların bir-biri ilə əlaqəsizliyidir: WhatsApp-dakı bron Excel-dəki kassanı bilmir, Excel isə canlı vaxtı saymır.',
              'Panel bu məlumatları bir qeyddə saxlayır. 2–3 stansiyalı salon üçün cədvəl kifayətdir; 5-dən çox stansiya, növbəli işçi və qəlyanaltı satışı olanda panelin aylıq haqqı adətən itən saatlardan az olur.',
            ],
            bullets: [
              'WhatsApp: müştəri ilə ünsiyyət üçün yaxşıdır, bron cədvəli üçün yox',
              'Excel: hesabat üçün yaxşıdır, canlı sessiya üçün yox',
              'Panel: bron, sessiya, kassa və anbar bir yerdə',
            ],
          },

          {
            id: 'metrics',
            title: 'Hansı göstəricilərə baxmaq lazımdır?',
            paragraphs: [
              'Avtomatlaşdırmanın faydası rəqəmdə görünməlidir. Bu göstəriciləri həftəlik izləyin:',
            ],
            bullets: [
              'Stansiya üzrə doluluq: satılan saat / açıq saat',
              'Saatlar üzrə yük: hansı saatlar boş qalır',
              'Orta çek: vaxt və qəlyanaltı birlikdə',
              'Uzatma payı: sessiyaların neçə faizi uzadılır',
              'Kassa fərqi: gözlənilən və faktiki məbləğ',
              'Təkrar gələn müştərilər',
            ],
          },
            ],
        faq: [
          {
            q: 'Oyun salonu avtomatlaşdırma nədir?',
            a: 'Bron, vaxt sayğacı, ödəniş və növbə bağlanışı kimi təkrarlanan işlərin bir sistemdə aparılmasıdır. Məqsəd işçinin əl ilə yazdığını azaltmaq, səhvlərin qarşısını almaq və sahibə gündəlik gəliri real vaxtda göstərməkdir. Bahalı avadanlıq tələb etmir — brauzerdə açılan panel bəs edir.',
          },
          {
            q: 'Konsolları avtomatik söndürmək lazımdırmı?',
            a: 'Mütləq deyil. Çox PS klubunda vaxt paneldə sayılır, sessiya bitəndə işçi bunu görür və müştəriyə uzatma təklif edir. Konsolun özünü idarə etmək ayrıca avadanlıq tələb edir. Heselo stansiyanın vaxtını və hesabını idarə edir, konsolu uzaqdan söndürmür.',
          },
          {
            q: 'Kiçik salon üçün də mənası varmı?',
            a: 'Stansiya sayı 2–3-dürsə və işi sahibin özü aparırsa, cədvəl də işləyə bilər. Növbəli işçilər, axşam pikləri və qəlyanaltı satışı başlayanda əl ilə uçot səhv verməyə başlayır. Həmin nöqtədə panelin aylıq haqqı itən bir-iki saatdan az olur.',
          },
          {
            q: 'WhatsApp-dan gələn bronlar nə olur?',
            a: 'Müştəri yenə WhatsApp-da yaza bilər — bu, ünsiyyət kanalıdır. Fərq ondadır ki, işçi bronu dərhal paneldəki cədvələ yazır: toqquşma görünür, müştəri gələndə bron bir kliklə sessiyaya çevrilir. Mesajlarda axtarış və “kim yazmışdı?” sualı aradan qalxır.',
          },
          {
            q: 'Keçid nə qədər vaxt aparır?',
            a: 'Stansiyaları, tarifləri və satış məhsullarını yaratmaq adətən bir-iki saat çəkir. Ən yaxşı yol bir növbəni tam paneldə aparıb gecə kassasını köhnə üsulla müqayisə etməkdir. İşçilərə bronu, sessiyanı və növbə bağlanışını göstərmək kifayətdir.',
          },
          {
            q: 'Heselo neçəyədir?',
            a: 'Oyun klubu / PS üçün Kiçik plan {gaming} {currency}/aydan başlayır. Stansiya və rezervasiya sayı artanda Orta və Böyük plan açılır; illik ödənişdə 2 ay hədiyyədir. Demoda dörd axını öz stansiyalarınızla sınaya bilərsiniz.',
          },
        ],
        ctaTitle: 'Oyun salonu üçün demo',
        ctaBody:
          'Stansiya sayınızı yazın — bron, canlı sessiya, ödəniş və növbə bağlanışının sizin zalda necə görünəcəyini göstəririk.',
      },
      en: {
        shortTitle: 'Game hall automation',
        h1: 'Game hall automation: bookings, sessions, cash',
        seoTitle: 'Game Hall Automation: Bookings, Sessions, Cash | Heselo',
        seoDescription:
          'What to automate in a game hall: bookings, timers, payments and shifts. WhatsApp and Excel compared with a management panel, plus the metrics worth tracking.',
        keywords: [
          'game hall automation',
          'gaming club automation',
          'ps club automation',
          'game hall software',
          'gaming lounge management',
        ],
        intro:
          'Automating a game hall does not mean robots or expensive hardware. It comes down to four repetitive jobs: bookings, the session timer, payments and closing the shift. When they share one record, staff write less and the owner sees revenue more accurately.',
        sections: [
          {
            id: 'heselo',
            title: 'What does Heselo give a game hall?',
            paragraphs: [
              'In Heselo, a station is the same unit on the schedule and in the live hall: a booking turns into a session, the system calculates the amount, sales land on the same bill, and the shift report is ready at close. PS and PC stations can share one panel.',
              'The Small plan for gaming clubs starts from {gaming} {currency} per month. Try the switch over a single shift: run bookings in the panel and compare the night cash count with your old method.',
            ],
          },

          {
            id: 'manual-pain',
            title: 'What gets lost when you run things by hand?',
            paragraphs: [
              'In a manually run hall, information lives in several places: bookings in WhatsApp, the clock on the wall, extensions in a notebook, cash in a box. Something slips at every hand-off.',
            ],
            bullets: [
              'Two bookings on the same station',
              'An extra 30 minutes never makes it onto the bill',
              'Snack sales stay separate from the session',
              'The night-shift cash does not reconcile and nobody knows why',
              'The owner only sees revenue at month end, and only roughly',
            ],
          },

          {
            id: 'four-flows',
            title: 'The four flows to automate',
            paragraphs: ['Review each flow separately: where do you lose the most time and money?'],
            bullets: [
              'Booking: station and time on a schedule, clashes visible instantly, customer name and phone recorded',
              'Timer: the booking becomes a live session, time is tracked automatically, extensions take one click',
              'Payment: the amount comes from rate and time, snacks go on the same bill, cash and card are split',
              'Shift: opening and closing, expected versus actual cash, a report per staff member',
            ],
          },

          {
            id: 'tools-whatsapp-excel-vs-panel',
            title: 'WhatsApp and Excel, or a panel?',
            paragraphs: [
              'WhatsApp and Excel are free and can be enough at the start. The problem is that they do not talk to each other: a booking in WhatsApp knows nothing about the cash in Excel, and Excel does not track live time.',
              'A panel keeps this information in one record. For a hall with 2–3 stations a spreadsheet is fine; with more than five stations, shift staff and snack sales, the monthly fee is usually less than the hours you lose.',
            ],
            bullets: [
              'WhatsApp: good for talking to customers, not for a booking schedule',
              'Excel: good for reports, not for live sessions',
              'Panel: bookings, sessions, cash and inventory in one place',
            ],
          },

          {
            id: 'metrics',
            title: 'Which metrics should you watch?',
            paragraphs: ['The benefit of automation should show up in numbers. Track these weekly:'],
            bullets: [
              'Occupancy per station: hours sold / hours open',
              'Load by hour: which hours stay empty',
              'Average bill: time and snacks combined',
              'Extension rate: the share of sessions that get extended',
              'Cash variance: expected versus actual amount',
              'Returning customers',
            ],
          },
            ],
        faq: [
          {
            q: 'What is game hall automation?',
            a: 'Running repetitive tasks such as bookings, the session timer, payments and shift close in one system. The goal is less manual writing for staff, fewer mistakes and real-time daily revenue for the owner. It does not need expensive hardware; a browser-based panel is enough.',
          },
          {
            q: 'Do consoles need to switch off automatically?',
            a: 'Not necessarily. In many PS clubs time is tracked in the panel; when a session ends, staff see it and offer the customer an extension. Controlling the console itself requires separate hardware. Heselo manages station time and billing; it does not switch consoles off remotely.',
          },
          {
            q: 'Is it worth it for a small hall?',
            a: 'With 2–3 stations and the owner running the desk, a spreadsheet can work. Once shift staff, evening peaks and snack sales arrive, manual tracking starts producing errors. At that point the monthly panel fee is usually less than one or two lost hours.',
          },
          {
            q: 'What happens to bookings that come in on WhatsApp?',
            a: 'Customers can keep messaging on WhatsApp; it stays your communication channel. The difference is that staff enter the booking on the panel schedule straight away: clashes are visible, and when the customer arrives the booking becomes a session in one click. No more scrolling through chats.',
          },
          {
            q: 'How long does the switch take?',
            a: 'Setting up stations, rates and sale items usually takes an hour or two. The best approach is to run one full shift in the panel and compare the night cash count with your old method. Showing staff how to book, run a session and close the shift is enough.',
          },
          {
            q: 'How much does Heselo cost?',
            a: 'The Small plan for gaming / PS clubs starts from {gaming} {currency} per month. Medium and Large plans unlock as station and booking volume grows, and annual billing includes two months free. In a demo you can test all four flows with your own stations.',
          },
        ],
        ctaTitle: 'Demo for your game hall',
        ctaBody:
          'Tell us your station count. We will show how bookings, live sessions, payments and shift close would look in your hall.',
      },
      ru: {
        shortTitle: 'Автоматизация игрового зала',
        h1: 'Что автоматизировать в игровом зале: бронь, сеанс, касса',
        seoTitle: 'Что автоматизировать в игровом зале: бронь, сеанс, касса | Heselo',
        seoDescription:
          'Что автоматизировать в PS- и игровом зале: бронь, таймер сеанса, оплату и закрытие смены. Не путать с ежедневным управлением сменами — об этом отдельная статья.',
        keywords: [
          'автоматизация игрового зала',
          'автоматизация игрового клуба',
          'автоматизация ps клуба',
          'что автоматизировать в клубе',
          'таймер сеанса клуб',
        ],
        intro:
          'Автоматизация игрового зала — не роботы, а четыре повторяющихся задачи: бронь, таймер сеанса, оплата и закрытие смены. Здесь — что вынести из WhatsApp и Excel в одну запись. Как управлять сменами и тарифами день за днём — в статье «Как управлять PS-клубом»; сравнение программ — отдельно.',
        sections: [
          {
            id: 'heselo',
            title: 'Что Heselo даёт игровому залу?',
            paragraphs: [
              'В Heselo станция — одна и та же единица в расписании и в живом зале: бронь превращается в сеанс, сумму считает система, продажи попадают в тот же счёт, отчёт по смене готов к закрытию. PS- и PC-станции могут быть в одной панели.',
              'Тариф «Малый» для игровых клубов — от {low} {currency} в месяц. Попробуйте переход за одну смену: ведите брони в панели и сравните ночную кассу с прежним способом.',
            ],
          },

          {
            id: 'manual-pain',
            title: 'Что теряется при ручном учёте?',
            paragraphs: [
              'В зале с ручным учётом информация живёт в нескольких местах: бронь — в WhatsApp, время — на часах, продление — в тетради, наличные — в коробке. На каждом переходе что-то теряется.',
            ],
            bullets: [
              'Две брони на одну станцию',
              'Продлённые 30 минут не попадают в счёт',
              'Продажа снеков идёт отдельно от сеанса',
              'Ночная касса не сходится, и причину не найти',
              'Владелец узнаёт выручку только в конце месяца и приблизительно',
            ],
          },

          {
            id: 'four-flows',
            title: 'Четыре процесса для автоматизации',
            paragraphs: ['Проверьте каждый процесс отдельно: где теряется больше всего времени и денег?'],
            bullets: [
              'Бронь: станция и время в расписании, пересечения видны сразу, имя и телефон гостя сохранены',
              'Таймер: бронь превращается в живой сеанс, время считается автоматически, продление — в один клик',
              'Оплата: сумма считается по тарифу и времени, снеки в том же счёте, наличные и карта разделены',
              'Смена: открытие и закрытие, ожидаемая и фактическая касса, отчёт по сотруднику',
            ],
          },

          {
            id: 'tools-whatsapp-excel-vs-panel',
            title: 'WhatsApp и Excel или панель?',
            paragraphs: [
              'WhatsApp и Excel бесплатны и на старте могут справляться. Проблема в том, что они не связаны: бронь в WhatsApp ничего не знает о кассе в Excel, а Excel не считает живое время.',
              'Панель хранит всё это в одной записи. Для зала на 2–3 станции таблицы достаточно; когда станций больше пяти, есть сменный персонал и продажа снеков, абонентская плата обычно меньше потерянных часов.',
            ],
            bullets: [
              'WhatsApp: хорош для общения с гостями, но не для расписания броней',
              'Excel: хорош для отчётов, но не для живых сеансов',
              'Панель: бронь, сеанс, касса и склад в одном месте',
            ],
          },

          {
            id: 'metrics',
            title: 'Какие показатели отслеживать?',
            paragraphs: ['Польза от автоматизации должна быть видна в цифрах. Следите за ними еженедельно:'],
            bullets: [
              'Загрузка станции: проданные часы / часы работы',
              'Загрузка по часам: какие часы пустуют',
              'Средний чек: время и снеки вместе',
              'Доля продлений: какой процент сеансов продлевают',
              'Расхождение кассы: ожидаемая и фактическая сумма',
              'Повторные гости',
            ],
          },
            ],
        faq: [
          {
            q: 'Что такое автоматизация игрового зала?',
            a: 'Это ведение повторяющихся задач — брони, таймера сеанса, оплаты и закрытия смены — в одной системе. Цель — меньше ручных записей, меньше ошибок и выручка в реальном времени для владельца. Дорогое оборудование не нужно: достаточно панели в браузере.',
          },
          {
            q: 'Нужно ли автоматически выключать консоли?',
            a: 'Не обязательно. Во многих PS-клубах время считается в панели: когда сеанс заканчивается, сотрудник видит это и предлагает гостю продление. Управление самой консолью требует отдельного оборудования. Heselo управляет временем и счётом станции, но не выключает консоль удалённо.',
          },
          {
            q: 'Есть ли смысл для небольшого зала?',
            a: 'Если станций 2–3 и за стойкой сам владелец, таблица может справляться. Когда появляются сменные сотрудники, вечерние пики и продажа снеков, ручной учёт начинает давать ошибки. В этот момент абонентская плата за панель обычно меньше одного-двух потерянных часов.',
          },
          {
            q: 'Что делать с бронями из WhatsApp?',
            a: 'Гости могут и дальше писать в WhatsApp — это канал общения. Разница в том, что сотрудник сразу вносит бронь в расписание панели: пересечения видны, а когда гость приходит, бронь в один клик становится сеансом. Больше не нужно искать нужное сообщение в переписке.',
          },
          {
            q: 'Сколько времени занимает переход?',
            a: 'Создать станции, тарифы и товары обычно занимает час-два. Лучший способ — провести одну смену полностью в панели и сравнить ночную кассу с прежним способом. Сотрудникам достаточно показать бронь, сеанс и закрытие смены.',
          },
          {
            q: 'Сколько стоит Heselo?',
            a: 'Тариф «Малый» для игровых / PS-клубов — от {gaming} {currency} в месяц. «Средний» и «Большой» открываются по мере роста числа станций и бронирований, а при оплате за год два месяца в подарок. На демо можно проверить все четыре процесса на своих станциях.',
          },
        ],
        ctaTitle: 'Демо для игрового зала',
        ctaBody:
          'Напишите количество станций — покажем, как бронь, живой сеанс, оплата и закрытие смены будут выглядеть в вашем зале.',
      },
    },
  },
  {
    slug: 'karaoke-club-business-plan',
    relatedSolutions: ['karaoke', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'Karaoke biznes planı',
        h1: 'Karaoke klubu biznes planı: otaq, xərc, gəlir modeli',
        seoTitle: 'Karaoke klubu biznes planı: otaq, xərc, gəlir | Heselo',
        seoDescription:
          'Karaoke klubu biznes planı: mövqeləndirmə, otaq sayı və tariflər, xərc kateqoriyaları, gəlir fərziyyələri və risklər. Nümunə rəqəmlər zəmanət deyil.',
        keywords: [
          'karaoke klubu biznes planı',
          'karaoke biznesi',
          'karaoke klubu açmaq',
          'karaoke otaq tarifi',
          'karaoke gəlir hesablama',
        ],
        intro:
          'Karaoke klubu otaq vaxtı satır, üstəlik içki və qəlyanaltı. Ona görə biznes planı əsas suala cavab verməlidir: neçə otaq, hansı doluluqla və hansı tariflə? Aşağıdakı rəqəmlər yalnız nümunədir, zəmanət deyil — öz şəhəriniz, məkanınız və qiymətlərinizlə yenidən hesablayın.',
        sections: [
          {
            id: 'heselo',
            title: 'Heselo karaoke üçün nə verir?',
            paragraphs: [
              'Heselo otaq bronunu canlı sessiyaya çevirir, uzatma və bar satışını eyni otaq hesabında saxlayır, günü kassa növbəsi ilə bağlayır. Biznes plandakı doluluq və orta çek yalnız belə uçotla real ölçülür.',
            ],
            bullets: [
              'Otaq cədvəli və rezervasiya',
              'Canlı sessiya və uzatma',
              'Sessiyaya bağlı bar satışı',
              'Kiçik plan {karaoke} {currency}/aydan',
            ],
          },
          {
            id: 'positioning',
            title: 'Mövqeləndirmə: kimə satırsınız?',
            paragraphs: [
              'Karaoke auditoriyası müxtəlifdir: ad günü qrupları, korporativ komandalar, tələbələr, cütlüklər. Hər biri otaq ölçüsünə, qiymətə və menyuya fərqli baxır. Hamıya satmağa çalışan klub adətən heç kimin yadında qalmır.',
              'Bir əsas seqment seçin və qalanını ona uyğunlaşdırın: məsələn, həftəiçi korporativ paketlər, həftəsonu isə ad günü qrupları.',
            ],
          },
          {
            id: 'rooms-rates',
            title: 'Otaqlar və tariflər',
            paragraphs: [
              'Otaq qarışığı gəlirin əsasıdır. Kiçik otaqlar (4–6 nəfər) tez dolur; böyük otaqlar (10–15 nəfər) yüksək saat tarifi ilə satılır, amma həftəiçi boş qalma riski daşıyır.',
            ],
            bullets: [
              'Başlanğıc üçün 3–5 otaq: 2 kiçik, 1–2 orta, 1 böyük',
              'Otaq ölçüsünə görə saat tarifi, axşam və həftəsonu üçün ayrıca',
              'Minimum bron müddəti — məsələn, 2 saat',
              'Paketlər: ad günü, korporativ, saat + içki',
              'Bron üçün depozit — gəlməyən qrupların riskini azaldır',
            ],
          },
          {
            id: 'cost-categories',
            title: 'Xərc kateqoriyaları',
            paragraphs: [
              'Xərcləri birdəfəlik və aylıq olaraq ayırın. Karaokedə səs izolyasiyası və akustika çox vaxt gözləniləndən baha başa gəlir.',
            ],
            bullets: [
              'Birdəfəlik: təmir, səs izolyasiyası, akustika, mebel',
              'Birdəfəlik: səs sistemi, mikrofonlar, ekranlar, karaoke avadanlığı',
              'Aylıq: kirayə, əmək haqqı, kommunal',
              'Aylıq: musiqi kataloqu abunəsi və müəllif hüquqları ilə bağlı ödənişlər',
              'Aylıq: bar üçün mal, marketinq, proqram təminatı',
              'Ehtiyat: mikrofon və kabel dəyişimi, kiçik təmirlər',
            ],
          },
          {
            id: 'revenue-assumptions',
            title: 'Gəlir fərziyyələri (nümunə)',
            paragraphs: [
              'Yalnız metodu göstərmək üçün nümunə: 4 otaq, gündə 8 iş saatı, orta saat tarifi 20 AZN, orta doluluq 35%. Otaq gəliri: 4 × 8 × 0,35 × 20 = 224 AZN/gün, ayda təxminən 6 700 AZN.',
              'Bar satışı bunun üzərinə gəlir, amma onun da mayası var — dövriyyəni yox, marjanı hesablayın. Doluluğu 25% və 45% ilə də hesablayın: pis və yaxşı ssenari arasındakı fərq planın nə qədər dayanıqlı olduğunu göstərir.',
              'Bu rəqəmlər zəmanət deyil. Real doluluq məkandan, qiymətdən, mövsümdən və rəqiblərdən asılıdır.',
            ],
          },
          {
            id: 'ops-stack',
            title: 'Əməliyyat alətləri',
            paragraphs: [
              'Karaoke klubunda gündəlik iş belədir: otaq bronu, qonaq gələndə sessiyanın başlanması, uzatma, bar sifarişinin otağın hesabına yazılması və gecə kassanın bağlanması. Bunlar ayrı dəftərlərdə olanda uzatma və içki itir.',
            ],
            bullets: [
              'Otaq cədvəli və rezervasiya',
              'Canlı sessiya: vaxt, uzatma, otaq hesabı',
              'Sessiyaya bağlı bar satışı',
              'Anbar: içki və qəlyanaltı qalığı',
              'Kassa növbəsi və gündəlik hesabat',
            ],
          },
          {
            id: 'risks',
            title: 'Risklər',
            paragraphs: ['Planı yalnız yaxşı ssenari ilə yazmayın. Karaokenin tipik riskləri:'],
            bullets: [
              'Həftəiçi aşağı doluluq — gündüz və korporativ paketlər lazımdır',
              'Qonşulardan səs şikayəti — izolyasiyaya qənaət etməyin',
              'Gəlməyən bronlar — depozit və təsdiq zəngi',
              'Müəllif hüquqları — kataloq və lisenziya məsələsini əvvəlcədən həll edin',
              'Bar itkisi — qalığı həftəlik sayın',
            ],
          },
          {
            id: 'soft-cta',
            title: 'Növbəti addım',
            paragraphs: [
              'Planı otaq sayı və tariflərlə hazırlayandan sonra gündəlik işi necə aparacağınızı da sınayın. Heselo-da karaoke üçün Kiçik plan {karaoke} {currency}/aydan başlayır: otaq cədvəli, sessiya, bar satışı və növbə bir paneldə.',
            ],
          },
        ],
        faq: [
          {
            q: 'Karaoke klubu üçün neçə otaq lazımdır?',
            a: 'Başlanğıc üçün 3–5 otaq real rəqəmdir: bir neçə kiçik otaq tez dolur, bir böyük otaq isə ad günü və korporativ qruplar üçündür. Otaq sayını kirayə sahəsinə və gözlənilən axşam axınına görə seçin. İlk aylarda hansı ölçünün daha çox satıldığına baxıb genişlənin.',
          },
          {
            q: 'Nümunə rəqəmlərə güvənmək olarmı?',
            a: 'Xeyr, onlar yalnız hesablama metodunu göstərir. Real doluluq, tarif və bar marjası şəhərdən, məkandan, mövsümdən və rəqiblərdən asılıdır. Öz rəqəmlərinizlə üç ssenari — pis, orta, yaxşı — hesablayın və planı pis ssenaridə də dayanıqlı qurun.',
          },
          {
            q: 'Ən böyük xərc hansıdır?',
            a: 'Birdəfəlik xərclərdə adətən təmir, səs izolyasiyası və səs sistemi, aylıq xərclərdə isə kirayə və əmək haqqı. Səs izolyasiyasına qənaət sonradan şikayətə və yenidən təmirə çevrilə bilər. Musiqi kataloqu və müəllif hüquqları ilə bağlı ödənişləri də aylıq xərcə daxil edin.',
          },
          {
            q: 'Musiqi üçün lisenziya lazımdırmı?',
            a: 'Kommersiya məkanında musiqinin ifası ümumi olaraq müəllif hüquqları ilə bağlıdır, kataloq təminatçısının da öz şərtləri var. Bu, hüquqi məsləhət deyil — tələbləri açılışdan əvvəl hüquqşünasla və ya müvafiq dövlət qurumu ilə dəqiqləşdirin.',
          },
          {
            q: 'Gəliri necə artırmaq olar?',
            a: 'Otaq tarifini qaldırmazdan əvvəl boş saatlara baxın: həftəiçi gündüz paketləri, korporativ təkliflər, ad günü paketi (saat + içki). Minimum bron müddəti və depozit gəlməyən qrupların itkisini azaldır. Bar satışını otağın hesabına bağlamaq da orta çeki qaldırır.',
          },
          {
            q: 'Heselo karaoke üçün neçəyədir?',
            a: 'Karaoke üçün Kiçik plan {karaoke} {currency}/aydan başlayır — otaq cədvəli və sessiya işinə görə PS planından yüksəkdir. Orta və Böyük plan, illik ödəniş (2 ay hədiyyə) qiymətlər səhifəsindədir. Demoda öz otaqlarınızla sınaya bilərsiniz.',
          },
        ],
        ctaTitle: 'Karaoke klubu üçün demo',
        ctaBody:
          'Otaq sayınızı və ölçülərini yazın — otaq cədvəli, sessiya, bar satışı və gecə kassasını sizin planınızla göstəririk.',
      },
      en: {
        shortTitle: 'Karaoke business plan',
        h1: 'Karaoke club business plan: rooms, costs, revenue model',
        seoTitle: 'Karaoke Club Business Plan: Rooms, Costs, Revenue | Heselo',
        seoDescription:
          'A karaoke club business plan: positioning, room count and rates, cost categories, revenue assumptions and risks. Example figures are illustrative, not guarantees.',
        keywords: [
          'karaoke club business plan',
          'karaoke business',
          'open a karaoke club',
          'karaoke room rates',
          'karaoke revenue calculation',
        ],
        intro:
          'A karaoke club sells room time, plus drinks and snacks. So the business plan has to answer one core question: how many rooms, at what occupancy and at what rate? The figures below are illustrative only, not guarantees. Recalculate them with your own city, venue and prices.',
        sections: [
          {
            id: 'heselo',
            title: 'What does Heselo give karaoke?',
            paragraphs: [
              'Heselo turns room bookings into live sessions, keeps extensions and bar sales on the same room bill, and closes the day with a cash shift. Occupancy and average check in a business plan only become real with that kind of ledger.',
            ],
            bullets: [
              'Room schedule and bookings',
              'Live session and extensions',
              'Bar sales on the session',
              'Small plan from {karaoke} {currency}/month',
            ],
          },
          {
            id: 'positioning',
            title: 'Positioning: who are you selling to?',
            paragraphs: [
              'Karaoke audiences vary: birthday groups, corporate teams, students, couples. Each looks at room size, price and menu differently. A club that tries to sell to everyone usually ends up memorable to no one.',
              'Pick one core segment and shape the rest around it, for example corporate packages on weekdays and birthday groups at weekends.',
            ],
          },
          {
            id: 'rooms-rates',
            title: 'Rooms and rates',
            paragraphs: [
              'Your room mix drives revenue. Small rooms (4–6 people) fill quickly; large rooms (10–15 people) sell at a higher hourly rate but risk sitting empty on weekdays.',
            ],
            bullets: [
              '3–5 rooms to start: 2 small, 1–2 medium, 1 large',
              'Hourly rates by room size, with separate evening and weekend rates',
              'A minimum booking length, for example 2 hours',
              'Packages: birthday, corporate, hours plus drinks',
              'A booking deposit to reduce the risk of no-shows',
            ],
          },
          {
            id: 'cost-categories',
            title: 'Cost categories',
            paragraphs: [
              'Split costs into one-off and monthly. In karaoke, soundproofing and acoustics often cost more than expected.',
            ],
            bullets: [
              'One-off: fit-out, soundproofing, acoustics, furniture',
              'One-off: sound system, microphones, screens, karaoke equipment',
              'Monthly: rent, wages, utilities',
              'Monthly: music catalogue subscription and copyright-related fees',
              'Monthly: bar stock, marketing, software',
              'Reserve: replacement microphones and cables, minor repairs',
            ],
          },
          {
            id: 'revenue-assumptions',
            title: 'Revenue assumptions (example)',
            paragraphs: [
              'An example that only shows the method: 4 rooms, 8 open hours a day, an average rate of 20 AZN per hour and 35% average occupancy. Room revenue: 4 × 8 × 0.35 × 20 = 224 AZN per day, or roughly 6,700 AZN a month.',
              'Bar sales come on top, but they have a cost of goods, so model margin rather than turnover. Run the numbers at 25% and 45% occupancy too: the gap between the bad and good scenarios shows how resilient your plan is.',
              'These figures are not guarantees. Real occupancy depends on location, pricing, season and competition.',
            ],
          },
          {
            id: 'ops-stack',
            title: 'Operations stack',
            paragraphs: [
              'A karaoke club day looks like this: room bookings, starting the session when guests arrive, extensions, bar orders added to the room bill and closing the cash at night. When these live in separate notebooks, extensions and drinks go missing.',
            ],
            bullets: [
              'Room schedule and bookings',
              'Live session: time, extensions, room bill',
              'Bar sales linked to the session',
              'Inventory: drink and snack stock',
              'Cash shift and daily report',
            ],
          },
          {
            id: 'risks',
            title: 'Risks',
            paragraphs: ['Do not write the plan around the best case only. Typical karaoke risks:'],
            bullets: [
              'Low weekday occupancy: you need daytime and corporate packages',
              'Noise complaints from neighbours: do not skimp on soundproofing',
              'No-show bookings: take a deposit and make a confirmation call',
              'Copyright: settle catalogue and licensing questions before opening',
              'Bar shrinkage: count stock weekly',
            ],
          },
          {
            id: 'soft-cta',
            title: 'Next step',
            paragraphs: [
              'Once your plan has room counts and rates, test how you will run the day-to-day. Heselo’s Small plan for karaoke starts from {karaoke} {currency} per month, with the room schedule, sessions, bar sales and shifts in one panel.',
            ],
          },
        ],
        faq: [
          {
            q: 'How many rooms does a karaoke club need?',
            a: '3–5 rooms is a realistic start: a few small rooms fill quickly, and one large room serves birthdays and corporate groups. Choose the count based on your floor area and expected evening traffic. Watch which room size sells best in the first months before you expand.',
          },
          {
            q: 'Can I rely on the example figures?',
            a: 'No. They only illustrate the method. Real occupancy, rates and bar margin depend on your city, venue, season and competitors. Build three scenarios with your own numbers (bad, average and good) and make sure the plan still holds up in the bad one.',
          },
          {
            q: 'What is the biggest cost?',
            a: 'Among one-off costs, usually fit-out, soundproofing and the sound system; among monthly costs, rent and wages. Cutting corners on soundproofing can turn into complaints and a second renovation. Include the music catalogue and copyright-related fees in your monthly costs as well.',
          },
          {
            q: 'Do I need a music licence?',
            a: 'Playing music in a commercial venue is generally subject to copyright, and catalogue providers have their own terms. This is not legal advice. Confirm the requirements with a lawyer or the relevant government body before you open.',
          },
          {
            q: 'How can I increase revenue?',
            a: 'Before raising room rates, look at your empty hours: weekday daytime packages, corporate offers, a birthday package with hours plus drinks. A minimum booking length and a deposit reduce no-show losses. Linking bar sales to the room bill also lifts the average check.',
          },
          {
            q: 'How much does Heselo cost for karaoke?',
            a: 'The Small plan for karaoke starts from {karaoke} {currency} per month. It is higher than the PS plan because of the room schedule and session workload. Medium and Large plans and annual billing (two months free) are on the pricing page, and a demo lets you test with your own rooms.',
          },
        ],
        ctaTitle: 'Demo for your karaoke club',
        ctaBody:
          'Tell us how many rooms you have and their sizes. We will show the room schedule, sessions, bar sales and night cash close based on your plan.',
      },
      ru: {
        shortTitle: 'Бизнес-план караоке',
        h1: 'Бизнес-план караоке-клуба: комнаты, расходы, модель дохода',
        seoTitle: 'Бизнес-план караоке-клуба: комнаты, расходы, доход | Heselo',
        seoDescription:
          'Бизнес-план караоке-клуба: позиционирование, число комнат и тарифы, статьи расходов, допущения по выручке и риски. Цифры в примере — не гарантия.',
        keywords: [
          'бизнес план караоке клуба',
          'караоке бизнес',
          'открыть караоке клуб',
          'тарифы караоке комнат',
          'расчёт выручки караоке',
        ],
        intro:
          'Караоке-клуб продаёт время в комнате, а также напитки и закуски. Поэтому бизнес-план должен отвечать на главный вопрос: сколько комнат, с какой загрузкой и по какому тарифу? Цифры ниже — только пример, а не гарантия. Пересчитайте их для своего города, помещения и цен.',
        sections: [
          {
            id: 'heselo',
            title: 'Что Heselo даёт караоке?',
            paragraphs: [
              'Heselo переводит бронь комнаты в живой сеанс, держит продление и бар в одном счёте комнаты и закрывает день кассовой сменой. Загрузка и средний чек из бизнес-плана становятся реальными только при таком учёте.',
            ],
            bullets: [
              'Расписание комнат и бронирование',
              'Живой сеанс и продление',
              'Бар в счёте сеанса',
              'Тариф «Малый» от {karaoke} {currency}/мес.',
            ],
          },
          {
            id: 'positioning',
            title: 'Позиционирование: для кого вы работаете?',
            paragraphs: [
              'Аудитория караоке разная: компании на день рождения, корпоративные команды, студенты, пары. Каждая по-своему смотрит на размер комнаты, цену и меню. Клуб, который пытается понравиться всем, обычно не запоминается никому.',
              'Выберите один основной сегмент и подстройте под него остальное: например, корпоративные пакеты в будни и дни рождения по выходным.',
            ],
          },
          {
            id: 'rooms-rates',
            title: 'Комнаты и тарифы',
            paragraphs: [
              'Структура комнат — основа выручки. Маленькие комнаты (4–6 человек) заполняются быстро; большие (10–15 человек) продаются по более высокому тарифу, но в будни рискуют простаивать.',
            ],
            bullets: [
              'Для старта 3–5 комнат: 2 маленькие, 1–2 средние, 1 большая',
              'Почасовой тариф по размеру комнаты, отдельно — вечер и выходные',
              'Минимальное время брони — например, 2 часа',
              'Пакеты: день рождения, корпоратив, часы + напитки',
              'Депозит за бронь снижает риск неявки',
            ],
          },
          {
            id: 'cost-categories',
            title: 'Статьи расходов',
            paragraphs: [
              'Разделите расходы на разовые и ежемесячные. В караоке звукоизоляция и акустика часто обходятся дороже, чем ожидалось.',
            ],
            bullets: [
              'Разовые: ремонт, звукоизоляция, акустика, мебель',
              'Разовые: звуковая система, микрофоны, экраны, караоке-оборудование',
              'Ежемесячные: аренда, зарплаты, коммунальные платежи',
              'Ежемесячные: подписка на музыкальный каталог и платежи, связанные с авторскими правами',
              'Ежемесячные: закупка для бара, маркетинг, программное обеспечение',
              'Резерв: замена микрофонов и кабелей, мелкий ремонт',
            ],
          },
          {
            id: 'revenue-assumptions',
            title: 'Допущения по выручке (пример)',
            paragraphs: [
              'Пример только для демонстрации метода: 4 комнаты, 8 рабочих часов в день, средний тариф 20 AZN в час, средняя загрузка 35%. Выручка с комнат: 4 × 8 × 0,35 × 20 = 224 AZN в день, около 6 700 AZN в месяц.',
              'Бар добавляется сверху, но у него есть себестоимость — считайте маржу, а не оборот. Посчитайте также загрузку 25% и 45%: разница между плохим и хорошим сценарием показывает, насколько устойчив план.',
              'Эти цифры не являются гарантией. Реальная загрузка зависит от места, цен, сезона и конкурентов.',
            ],
          },
          {
            id: 'ops-stack',
            title: 'Инструменты для работы',
            paragraphs: [
              'Рабочий день караоке-клуба выглядит так: бронь комнаты, запуск сеанса при приходе гостей, продление, заказы из бара на счёт комнаты и закрытие кассы ночью. Когда всё это в разных тетрадях, продления и напитки теряются.',
            ],
            bullets: [
              'Расписание комнат и бронирование',
              'Живой сеанс: время, продление, счёт комнаты',
              'Продажи бара, привязанные к сеансу',
              'Склад: остатки напитков и закусок',
              'Кассовая смена и ежедневный отчёт',
            ],
          },
          {
            id: 'risks',
            title: 'Риски',
            paragraphs: ['Не стройте план только на лучшем сценарии. Типичные риски караоке:'],
            bullets: [
              'Низкая загрузка в будни — нужны дневные и корпоративные пакеты',
              'Жалобы соседей на шум — не экономьте на звукоизоляции',
              'Неявки по броням — депозит и звонок-подтверждение',
              'Авторские права — решите вопрос каталога и лицензий заранее',
              'Потери в баре — пересчитывайте остатки еженедельно',
            ],
          },
          {
            id: 'soft-cta',
            title: 'Следующий шаг',
            paragraphs: [
              'Когда в плане уже есть число комнат и тарифы, проверьте, как вы будете вести ежедневную работу. В Heselo тариф «Малый» для караоке — от {karaoke} {currency} в месяц: расписание комнат, сеансы, продажи бара и смены в одной панели.',
            ],
          },
        ],
        faq: [
          {
            q: 'Сколько комнат нужно караоке-клубу?',
            a: 'Для старта реалистично 3–5 комнат: несколько маленьких заполняются быстро, а одна большая — для дней рождения и корпоративов. Выбирайте количество по площади помещения и ожидаемому вечернему потоку. В первые месяцы посмотрите, какой размер продаётся лучше, и только потом расширяйтесь.',
          },
          {
            q: 'Можно ли опираться на цифры из примера?',
            a: 'Нет, они лишь показывают метод расчёта. Реальная загрузка, тарифы и маржа бара зависят от города, помещения, сезона и конкурентов. Посчитайте три сценария на своих цифрах — плохой, средний и хороший — и убедитесь, что план выдерживает плохой.',
          },
          {
            q: 'Какая статья расходов самая большая?',
            a: 'Из разовых — обычно ремонт, звукоизоляция и звуковая система, из ежемесячных — аренда и зарплаты. Экономия на звукоизоляции может обернуться жалобами и повторным ремонтом. Платежи за музыкальный каталог и авторские права тоже включите в ежемесячные расходы.',
          },
          {
            q: 'Нужна ли лицензия на музыку?',
            a: 'Исполнение музыки в коммерческом заведении, как правило, связано с авторскими правами, а у поставщиков каталога есть свои условия. Это не юридическая консультация — уточните требования у юриста или в профильном государственном органе до открытия.',
          },
          {
            q: 'Как увеличить выручку?',
            a: 'Прежде чем поднимать тариф, посмотрите на пустые часы: дневные пакеты в будни, корпоративные предложения, пакет на день рождения (часы + напитки). Минимальное время брони и депозит снижают потери от неявок. Привязка бара к счёту комнаты тоже поднимает средний чек.',
          },
          {
            q: 'Сколько стоит Heselo для караоке?',
            a: 'Тариф «Малый» для караоке — от {karaoke} {currency} в месяц; он выше PS-тарифа из-за расписания комнат и работы с сеансами. «Средний» и «Большой» тарифы и оплата за год (два месяца в подарок) — на странице цен. На демо можно проверить систему на своих комнатах.',
          },
        ],
        ctaTitle: 'Демо для караоке-клуба',
        ctaBody:
          'Напишите число комнат и их вместимость — покажем расписание, сеансы, продажи бара и закрытие ночной кассы на вашем примере.',
      },
    },
  },
  {
    slug: 'anticafe-rent-cost-calculation',
    relatedSolutions: ['antikafe', 'pos'],
    copy: {
      az: {
        shortTitle: 'Antikafe icarə hesablama',
        h1: 'Antikafe icarə / kirayə haqqını necə hesab etmək olar?',
        seoTitle: 'Antikafe icarə və saat haqqı hesablama — sadə düstur | Heselo',
        seoDescription:
          'Antikafe xərclərini necə toplamaq, saatlıq qiyməti necə qurmaq və zərərsizlik nöqtəsini sadə düsturla necə hesablamaq olar. Maliyyə və ya hüquqi məsləhət deyil.',
        keywords: [
          'antikafe icarə haqqı hesablama',
          'antikafe icarə',
          'antikafe kirayə',
          'antikafe saat qiyməti',
          'antikafe xərcləri',
          'antikafe zərərsizlik nöqtəsi',
        ],
        intro:
          'Antikafedə qonaq içkiyə yox, vaxta görə ödəyir. Deməli, saatlıq və ya dəqiqəlik haqq kirayəni, maaşı, kommunalı və “pulsuz” çay-peçenyeni örtməlidir. Bu bələdçi hesablamanı addım-addım göstərir. Maliyyə və ya hüquqi məsləhət deyil — rəqəmləri öz məkanınızla və mühasibinizlə yoxlayın.',
        sections: [
          {
            id: 'heselo',
            title: 'Heselo antikafe üçün nə verir?',
            paragraphs: [
              'Düstur yalnız real rəqəmlərlə işləyir. Dəftərlə uçotda satılan qonaq-saatı, endirimlərin təsirini və saatlar üzrə yükü bilmək çətindir.',
              'Heselo antikafedə hər qonağın vaxtını sayır, məbləği tarif qaydalarına görə hesablayır, satışı eyni hesaba yazır və növbə hesabatını çıxarır. Antikafe üçün Kiçik plan {antikafe} {currency}/aydan başlayır — bu da sabit xərclər siyahısına daxil edilməlidir.',
            ],
          },

          {
            id: 'cost-stack',
            title: 'Xərcləri toplayın',
            paragraphs: [
              'Əvvəlcə aylıq sabit xərcləri bir siyahıya yığın — qonaq gəlsə də, gəlməsə də ödənilənləri. Sonra bir qonaq-saata düşən dəyişən xərci ayrıca hesablayın.',
            ],
            bullets: [
              'Kirayə (icarə) — adətən ən böyük sabit xərc',
              'Əmək haqqı və vergi-sosial ödənişlər',
              'Kommunal: işıq, istilik, su, internet',
              'Proqram təminatı, oyun və kitabların yenilənməsi, təmizlik',
              'Dəyişən xərc: çay, qəhvə, peçenye, birdəfəlik qablar — qonaq-saat üzrə',
              'Amortizasiya: mebel, konsollar, stolüstü oyunlar',
            ],
          },

          {
            id: 'hourly-revenue-model',
            title: 'Saatlıq gəlir modeli',
            paragraphs: [
              'Antikafe adətən üç modeldən birini seçir: dəqiqəlik haqq, saatlıq haqq və ya “stop-çek” — müəyyən saatdan sonra məbləğ artmır. Stop-çek uzun qalan qonaqları cəlb edir, amma saat başına gəliri azaldır.',
              'Hansı modeli seçsəniz də, bir qonaq-saatın orta gəlirini bilməlisiniz: vaxtdan gələn ümumi gəlir / satılan qonaq-saat. Stop-çek və endirimlər bu rəqəmi aşağı salır.',
            ],
            bullets: [
              'Dəqiqəlik: ədalətli görünür, qısa vizitlər üçün uyğundur',
              'Saatlıq: sadədir, hesablamaq asandır',
              'Stop-çek: uzun qalmanı həvəsləndirir',
              'Gündüz, axşam və tələbə tarifləri ayrıca',
            ],
          },

          {
            id: 'break-even-simple-formula',
            title: 'Zərərsizlik nöqtəsi: sadə düstur',
            paragraphs: [
              'Düstur: lazım olan qonaq-saat = aylıq sabit xərc / (bir qonaq-saatın orta gəliri − bir qonaq-saatın dəyişən xərci).',
              'Nümunə (zəmanət deyil): kirayə 1 500, maaş 1 800, kommunal 400, digər 300 — cəmi 4 000 AZN/ay. Orta saat gəliri 4 AZN, dəyişən xərc 0,8 AZN. 4 000 / 3,2 = 1 250 qonaq-saat ayda, yəni gündə təxminən 42 qonaq-saat. Gündə 10 saat açıqsınızsa, bu, orta hesabla eyni anda 4–5 qonaq deməkdir.',
              'Rəqəm çox görünürsə, üç rıçaq var: kirayəni azaltmaq, orta saat gəlirini qaldırmaq və ya boş saatları doldurmaq.',
            ],
          },

          {
            id: 'next-steps',
            title: 'Növbəti addımlar',
            paragraphs: [
              'Hesablamanı bir dəfə edib unutmayın — ilk üç ay hər ay real rəqəmlərlə yeniləyin.',
            ],
            bullets: [
              'Aylıq sabit xərcləri bir cədvələ yazın',
              'Bir qonaq-saatın dəyişən xərcini hesablayın',
              'Seçdiyiniz model üzrə orta saat gəlirini təxmin edin',
              'Zərərsizlik nöqtəsini hesablayıb gündəlik qonaq sayına çevirin',
              'Pis ssenarini (20–30% az qonaq) ayrıca yoxlayın',
              'Rəqəmləri mühasibinizlə dəqiqləşdirin',
            ],
          },
            ],
        faq: [
          {
            q: 'Antikafe icarə haqqını necə hesablayım?',
            a: 'Aylıq kirayəni digər sabit xərclərlə — maaş, kommunal, proqram — birlikdə toplayın. Sonra bu cəmi bir qonaq-saatın xalis gəlirinə, yəni saat haqqından çay-peçenye xərci çıxılmış məbləğə bölün. Nəticə ayda neçə qonaq-saat satmalı olduğunuzu göstərir. Rəqəmləri mühasiblə yoxlayın.',
          },
          {
            q: 'Kirayə gəlirin neçə faizi olmalıdır?',
            a: 'Universal norma yoxdur və bu, maliyyə məsləhəti deyil. Praktikada kirayə nə qədər böyük pay tutursa, zəif ayda bir o qədər az ehtiyat qalır. Kirayəni pis ssenari üzrə gəlirlə müqayisə edin: 20–30% az qonaqla da ödəyə bilirsinizsə, plan daha dayanıqlıdır.',
          },
          {
            q: 'Dəqiqəlik, yoxsa saatlıq haqq?',
            a: 'Dəqiqəlik haqq qısa vizitlər üçün ədalətli görünür və qonağı tez-tez gəlməyə həvəsləndirir. Saatlıq haqq sadədir, hesablamaq asandır. Stop-çek uzun qalmanı həvəsləndirir, amma saat başına gəliri azaldır. Hansı model seçilsə də, orta saat gəlirini real məlumatla izləyin.',
          },
          {
            q: '“Pulsuz” çay və peçenye xərcini necə nəzərə almaq olar?',
            a: 'Bir ay ərzində alınan çay, qəhvə, şəkər, peçenye və birdəfəlik qabların cəmini həmin ay satılan qonaq-saata bölün. Bu, bir qonaq-saatın dəyişən xərcidir. Onu saat haqqından çıxmadan hesablanan zərərsizlik nöqtəsi vəziyyəti olduğundan yaxşı göstərir.',
          },
          {
            q: 'Zərərsizlik nöqtəsinə nə vaxt çatmaq olar?',
            a: 'Bu, məkandan, qiymətdən və marketinqdən asılıdır — zəmanətli rəqəm yoxdur. Planı ilk aylar üçün aşağı doluluqla qurun və ən azı üç aylıq sabit xərc qədər ehtiyat saxlayın. Hər ay hesabı real qonaq-saatla yeniləyin.',
          },
          {
            q: 'Heselo antikafe üçün neçəyədir?',
            a: 'Antikafe üçün Kiçik plan {antikafe} {currency}/aydan başlayır. Sistem qonaq vaxtını sayır, məbləği tarif qaydalarına görə hesablayır və növbə hesabatını verir — zərərsizlik hesabı üçün lazım olan qonaq-saatı real görürsünüz. Orta və Böyük plan qiymətlər səhifəsindədir.',
          },
        ],
        ctaTitle: 'Antikafe üçün demo',
        ctaBody:
          'Masa və zona sayınızı, tarif modelinizi yazın — qonaq vaxtının necə sayıldığını və növbə hesabatını göstəririk.',
      },
      en: {
        shortTitle: 'Anticafe rent calculation',
        h1: 'How to calculate anticafe rent and time fees',
        seoTitle: 'Anticafe Rent and Hourly Fee Calculation — Simple Formula | Heselo',
        seoDescription:
          'How to add up anticafe costs, set an hourly price and work out break-even with a simple formula. Not financial or legal advice.',
        keywords: [
          'anticafe rent calculation',
          'anticafe rent',
          'anticafe time fee calculation',
          'anticafe hourly price',
          'anticafe costs',
          'anticafe break-even',
        ],
        intro:
          'In an anticafe, guests pay for time, not for drinks. That means your per-minute or hourly fee has to cover rent, wages, utilities and the “free” tea and biscuits. This guide walks through the calculation step by step. It is not financial or legal advice; check the numbers against your own venue and with your accountant.',
        sections: [
          {
            id: 'heselo',
            title: 'What does Heselo give an anti-café?',
            paragraphs: [
              'The formula only works with real numbers. With paper records it is hard to know how many guest-hours you actually sold, how much discounts cost you and how busy each hour is.',
              'In an anticafe, Heselo tracks each guest’s time, calculates the amount according to your rate rules, puts sales on the same bill and produces a shift report. The Small plan for anticafes starts from {antikafe} {currency} per month, and that belongs on your fixed-cost list too.',
            ],
          },
          {
            id: 'cost-stack',
            title: 'Add up your costs',
            paragraphs: [
              'Start by listing your fixed monthly costs: everything you pay whether guests come or not. Then work out the variable cost per guest-hour separately.',
            ],
            bullets: [
              'Rent: usually the largest fixed cost',
              'Wages plus tax and social contributions',
              'Utilities: electricity, heating, water, internet',
              'Software, refreshing games and books, cleaning',
              'Variable: tea, coffee, biscuits, disposables, per guest-hour',
              'Depreciation: furniture, consoles, board games',
            ],
          },
          {
            id: 'hourly-revenue-model',
            title: 'Hourly revenue model',
            paragraphs: [
              'Anticafes usually choose one of three models: per-minute, hourly, or a price cap (a “stop-check”), after which the bill stops growing. A cap attracts guests who stay long, but lowers revenue per hour.',
              'Whichever model you pick, you need your average revenue per guest-hour: total time revenue / guest-hours sold. Caps and discounts pull this number down.',
            ],
            bullets: [
              'Per-minute: feels fair and suits short visits',
              'Hourly: simple and easy to calculate',
              'Price cap: encourages long stays',
              'Separate daytime, evening and student rates',
            ],
          },
          {
            id: 'break-even-simple-formula',
            title: 'Break-even: a simple formula',
            paragraphs: [
              'Formula: guest-hours needed = fixed monthly costs / (average revenue per guest-hour − variable cost per guest-hour).',
              'Example (not a guarantee): rent 1,500, wages 1,800, utilities 400, other 300, for a total of 4,000 AZN a month. Average revenue per hour is 4 AZN and variable cost 0.8 AZN. 4,000 / 3.2 = 1,250 guest-hours a month, or about 42 guest-hours a day. If you are open 10 hours a day, that means 4–5 guests in the room at any one time on average.',
              'If that looks like a lot, you have three levers: lower the rent, raise average revenue per hour, or fill the quiet hours.',
            ],
          },
          {
            id: 'next-steps',
            title: 'Next steps',
            paragraphs: [
              'Do not calculate once and forget it. For the first three months, update the numbers monthly with real data.',
            ],
            bullets: [
              'List your fixed monthly costs in one table',
              'Work out the variable cost per guest-hour',
              'Estimate average revenue per hour for your chosen model',
              'Calculate break-even and convert it into guests per day',
              'Test a bad scenario separately (20–30% fewer guests)',
              'Confirm the figures with your accountant',
            ],
          },
        ],
        faq: [
          {
            q: 'How do I calculate rent coverage for an anticafe?',
            a: 'Add your monthly rent to your other fixed costs: wages, utilities and software. Then divide the total by your net revenue per guest-hour, meaning the hourly fee minus the tea and biscuit cost. The result shows how many guest-hours you need to sell each month. Check the figures with an accountant.',
          },
          {
            q: 'What share of revenue should rent be?',
            a: 'There is no universal rule, and this is not financial advice. In practice, the bigger the share rent takes, the less cushion you have in a weak month. Compare rent with revenue in a bad scenario: if you can still pay it with 20–30% fewer guests, the plan is more resilient.',
          },
          {
            q: 'Per-minute or hourly pricing?',
            a: 'Per-minute pricing feels fair for short visits and encourages guests to drop in more often. Hourly pricing is simple and easy to calculate. A price cap encourages long stays but lowers revenue per hour. Whatever you choose, track average revenue per hour with real data.',
          },
          {
            q: 'How do I account for the “free” tea and biscuits?',
            a: 'Add up everything you bought in a month (tea, coffee, sugar, biscuits, disposables) and divide it by the guest-hours sold that month. That is your variable cost per guest-hour. A break-even calculated without subtracting it from the hourly fee makes things look better than they are.',
          },
          {
            q: 'When can I expect to break even?',
            a: 'It depends on location, pricing and marketing, and there is no guaranteed figure. Plan the first months around low occupancy and keep a reserve of at least three months of fixed costs. Update the calculation monthly with real guest-hours.',
          },
          {
            q: 'How much does Heselo cost for an anticafe?',
            a: 'The Small plan for anticafes starts from {antikafe} {currency} per month. The system tracks guest time, calculates the amount according to your rate rules and produces a shift report, so you see the real guest-hours your break-even depends on. Medium and Large plans are on the pricing page.',
          },
        ],
        ctaTitle: 'Demo for your anticafe',
        ctaBody:
          'Tell us your table and zone count and your pricing model. We will show how guest time is tracked and what the shift report looks like.',
      },
      ru: {
        shortTitle: 'Тарифы антикафе',
        h1: 'Как рассчитать тарифы антикафе: цена минуты и стоп-чек',
        seoTitle: 'Как рассчитать тарифы антикафе: цена минуты и стоп-чек | Heselo',
        seoDescription:
          'Формула цены минуты антикафе: аренда, персонал, загрузка. Пример расчёта, стоп-чек и пакеты. Шаблон для своих цифр. Не финансовая консультация.',
        keywords: [
          'как рассчитать тарифы антикафе',
          'цена минуты антикафе',
          'стоп-чек антикафе',
          'тарификация тайм-кафе',
          'точка безубыточности антикафе',
          'поминутная оплата антикафе',
        ],
        intro:
          'Тариф антикафе должен покрывать аренду, персонал, коммуналку и «бесплатный» чай. Ниже — формула цены минуты, стоп-чек, пакеты и условный пример. Это не финансовая консультация: подставьте свои цифры и уточните их с бухгалтером. Прикинуть загрузку можно и в /ru/tools/tariff-calculator/.',
        sections: [
          {
            id: 'heselo',
            title: 'Зачем цифры из смены, а не из тетради',
            paragraphs: [
              'Формула работает только на реальных гостечасах. В тетради сложно увидеть скидки и пустые часы.',
              'Heselo считает время гостя, сумму по правилам тарифа, снеки в том же счёте и отчёт по смене. План «Старт» для антикафе — от {antikafe} {currency}/мес; заложите его в постоянные расходы. ККТ Heselo не заменяет.',
            ],
          },
          {
            id: 'cost-stack',
            title: 'Из чего складываются расходы',
            paragraphs: [
              'Сначала постоянные ежемесячные расходы, затем переменные на один гостечас.',
            ],
            bullets: [
              'Аренда — обычно крупнейшая постоянная статья',
              'Зарплаты и налоги',
              'Коммуналка и интернет',
              'Программа учёта, уборка, обновление игр/книг',
              'Переменные: чай, кофе, печенье, посуда — на гостечас',
              'Амортизация мебели и техники',
            ],
          },
          {
            id: 'minute-formula',
            title: 'Формула цены минуты',
            paragraphs: [
              'Чистая выручка с гостечаса = цена часа (или 60×цена минуты) − переменные на гостечас.',
              'Нужные гостечасы в месяц = постоянные расходы / чистая выручка с гостечаса. Отсюда — минимальная цена минуты при вашей целевой загрузке.',
            ],
            bullets: [
              'Не считайте «как у соседей» без своей аренды',
              'Стоп-чек и пакеты снижают среднюю выручку с часа — заложите это',
              'Обновляйте расчёт каждый месяц по факту',
            ],
          },
          {
            id: 'load-break-even',
            title: 'Загрузка и точка безубыточности',
            paragraphs: [
              'Пример (условные цифры, не смета): постоянные 4 000 {currency}/мес, средняя выручка с часа 4 {currency}, переменные 0,8 {currency}. Нужно 4 000 / 3,2 ≈ 1 250 гостечасов/мес (~42 в день). При 10 часах работы — в среднем 4–5 гостей одновременно.',
              'Рычаги: аренда, цена минуты/часа, заполнение дневных «дыр» пакетами.',
            ],
          },
          {
            id: 'stop-check-packages',
            title: 'Стоп-чек и пакеты',
            paragraphs: [
              'Стоп-чек ограничивает рост суммы после порога — гости остаются дольше, но средняя выручка с часа падает. Пакеты (2–3 часа) заполняют день. Считайте оба эффекта отдельно от «чистой» поминутной модели.',
            ],
            bullets: [
              'Поминутно — честно для коротких визитов',
              'Почасово — проще считать на стойке',
              'Стоп-чек — для долгих сеансов',
              'День / вечер / студенческий тариф',
            ],
          },
          {
            id: 'mistakes',
            title: 'Частые ошибки',
            paragraphs: [
              'Игнорировать переменные на чай; ставить стоп-чек без пересчёта безубыточности; менять цены каждую неделю; не закрывать смену — тогда формула расходится с кассой.',
            ],
          },
          {
            id: 'next-steps',
            title: 'Шаблон на свои цифры',
            paragraphs: ['Первые три месяца обновляйте расчёт ежемесячно.'],
            bullets: [
              'Таблица постоянных расходов',
              'Переменные на гостечас',
              'Средняя выручка с часа по модели',
              'Точка безубыточности → гости в день',
              'Плохой сценарий (−20–30% гостей)',
              'Проверка с бухгалтером',
            ],
          },
        ],
        faq: [
          {
            q: 'Как рассчитать цену минуты антикафе?',
            a: 'Сложите постоянные расходы, вычтите переменные из выручки с часа и разделите. Получите нужные гостечасы, затем переведите в цену минуты при вашей целевой загрузке. Проверьте с бухгалтером.',
          },
          {
            q: 'Что такое стоп-чек?',
            a: 'Порог, после которого сумма за время больше не растёт. Удобно гостям надолго, но снижает среднюю выручку с часа — заложите это в формулу.',
          },
          {
            q: 'Поминутная или почасовая?',
            a: 'Поминутная честнее для коротких визитов; почасовая проще на стойке. Смотрите среднюю выручку с часа по факту, а не только «как принято».',
          },
          {
            q: 'Как учесть чай и печенье?',
            a: 'Сложите закупки за месяц и разделите на проданные гостечасы — это переменные на гостечас. Без вычета безубыточность выглядит завышенной.',
          },
          {
            q: 'Есть ли калькулятор?',
            a: 'Да — /ru/tools/tariff-calculator/ для прикидки загрузки и часа. Формула выше — для себестоимости минуты и стоп-чека.',
          },
          {
            q: 'Сколько стоит Heselo для антикафе?',
            a: 'План «Старт» — от {antikafe} {currency}/мес. «Стандарт» и «Про» — на странице цен. Heselo не заменяет ККТ.',
          },
        ],
        ctaTitle: 'Демо для антикафе',
        ctaBody:
          'Напишите число столов и зон и модель оплаты — покажем учёт времени и отчёт по смене.',
      },
    },
  },
]

export function gapEducationalGuides(locale: Locale): GuideCopy[] {
  return catalog.map((entry) => ({
    slug: entry.slug as GuideCopy['slug'],
    ...entry.copy[locale],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    relatedSolutions: entry.relatedSolutions,
  }))
}
