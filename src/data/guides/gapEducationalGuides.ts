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
              'Açılışdan sistemlə başlamaq daha asandır: sonradan vərəqləri köçürmək və işçiləri yenidən öyrətmək lazım olmur. Heselo-da oyun klubu / PS üçün Kiçik plan 25 AZN/aydan başlayır.',
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
            a: 'Oyun klubu / PS üçün Kiçik plan 25 AZN/aydan başlayır. Stansiya və rezervasiya sayı artanda Orta və Böyük plan açılır; illik ödənişdə 2 ay hədiyyədir. Tam cədvəl qiymətlər səhifəsindədir, demoda isə öz stansiyalarınızla sınaya bilərsiniz.',
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
              'Starting with a system from day one is easier than migrating later: no spreadsheets to transfer and no staff to retrain. Heselo’s Small plan for gaming / PS clubs starts from 25 AZN per month.',
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
            a: 'The Small plan for gaming / PS clubs starts from 25 AZN per month. Medium and Large plans unlock as your station and booking volume grows, and annual billing includes two months free. The full table is on the pricing page, and a demo lets you test with your own stations.',
          },
        ],
        ctaTitle: 'Demo for your PS club',
        ctaBody:
          'Tell us how many consoles you are planning. We will show bookings, live sessions and cash shifts laid out for your floor plan.',
      },
      ru: {
        shortTitle: 'Открыть PS-клуб',
        h1: 'Как открыть клуб PlayStation: пошагово',
        seoTitle: 'Как открыть клуб PlayStation — пошаговое руководство | Heselo',
        seoDescription:
          'Хотите открыть клуб PlayStation? Помещение и планировка, оборудование, общие юридические шаги, ежедневная работа и чек-лист на первые 30 дней.',
        keywords: [
          'как открыть клуб playstation',
          'открыть ps клуб',
          'бизнес игровой клуб',
          'playstation клуб бизнес',
          'оборудование для ps клуба',
          'открыть игровой клуб',
        ],
        intro:
          'Клуб PlayStation можно запустить с небольшим капиталом, но он требует порядка. Купить консоли — самое простое; сложнее заполнить пустые часы, не терять брони и правильно закрывать кассу ночной смены. В этом руководстве — ключевые шаги до открытия и в первый месяц работы.',
        sections: [
          {
            id: 'who-for',
            title: 'Для кого это руководство?',
            paragraphs: [
              'Для тех, кто открывает первый PS-клуб, начинает с 2–3 консолей и планирует расти, а также для кафе и антикафе, которые добавляют игровую зону.',
              'Если клуб уже работает, разделы о ежедневной работе и первых 30 днях всё равно будут полезны.',
            ],
          },
          {
            id: 'location-layout',
            title: 'Помещение и планировка',
            paragraphs: [
              'Основная аудитория — студенты и молодёжь, поэтому близость к университетам, школам, жилым массивам и метро обычно важнее витрины на улицу. До подписания аренды уточните ограничения по шуму, часы работы и доступную электрическую мощность.',
              'Планируйте зал по станциям: для каждой PS — диван, экран и проход. Одна-две закрытые VIP-комнаты продаются по более высокому тарифу, чем общий зал.',
            ],
            bullets: [
              'Примерно 6–9 м² на станцию (диван, экран, проход)',
              'Отдельные электрические линии и достаточно розеток',
              'Звукоизоляция — особенно если рядом или сверху жилые квартиры',
              'Вентиляция и кондиционер: консоли и гости быстро нагревают зал',
              'Стойка администратора с обзором зала рядом со входом',
            ],
          },
          {
            id: 'equipment',
            title: 'Список оборудования',
            paragraphs: [
              'На старте не обязательно брать всё самое дорогое, но не экономьте на том, что гость держит в руках и видит перед собой: геймпады, экраны, сиденья. Неисправный геймпад — самый быстрый способ потерять постоянного клиента.',
            ],
            bullets: [
              'Консоли PS5: 4–6 станций — реалистичный старт',
              'Телевизор или монитор 55–65 дюймов на каждую станцию',
              'Минимум 2 геймпада на консоль и ещё 2–3 запасных',
              'Популярные игры: футбол, файтинги, гонки — в первый месяц смотрите, во что реально играют',
              'Стабильный интернет и роутер, по возможности кабельное подключение',
              'Зарядная станция для геймпадов и запасные кабели',
              'Ноутбук или планшет для администратора и платёжный терминал',
              'Холодильник и стеллаж для снеков и напитков',
            ],
          },
          {
            id: 'legal-tax-disclaimer',
            title: 'Регистрация, налоги и разрешения (общая информация)',
            paragraphs: [
              'Этот раздел не является юридической консультацией: требования меняются и зависят от вида деятельности. Перед открытием уточните детали у бухгалтера или юриста.',
              'Обычно проверяют следующее:',
            ],
            bullets: [
              'Правовая форма: ИП или ООО',
              'Налоговая регистрация и подходящий налоговый режим',
              'Требования к контрольно-кассовому аппарату для наличных и безналичных продаж',
              'Официальный договор аренды',
              'Пожарная безопасность и эвакуационный выход',
              'Условия коммерческого использования игр и подписок',
            ],
          },
          {
            id: 'daily-ops',
            title: 'Ежедневная работа: бронь → сеанс → касса',
            paragraphs: [
              'День в PS-клубе строится из трёх шагов. Гость звонит или пишет — станция бронируется. Когда он приходит, бронь превращается в живой сеанс: время считается, продление и снеки попадают в тот же счёт. По окончании сеанса принимается оплата и записывается в текущую кассовую смену.',
              'Когда эти шаги ведутся в разных местах — тетрадь, телефон, таймер, Excel, — ошибки неизбежны: две компании записаны на одну консоль, продление забыто, ночная касса не сходится.',
            ],
            bullets: [
              'Бронь: станция, время, имя и телефон гостя',
              'Сеанс: время начала, тариф, продление, допродажи',
              'Касса: наличные и карта, скидки, открытие и закрытие смены',
            ],
          },
          {
            id: 'when-software',
            title: 'Когда нужна программа?',
            paragraphs: [
              'С двумя консолями и владельцем за стойкой тетрадь справляется. Потребность в программе обычно появляется, когда станций больше четырёх, работают сменные сотрудники, вечером пик и регулярно звучит вопрос «почему касса не сходится?».',
              'Начать с системой сразу проще, чем переходить потом: не нужно переносить таблицы и переучивать персонал. В Heselo тариф «Малый» для игровых / PS-клубов стоит от 25 AZN в месяц.',
            ],
          },
          {
            id: 'first-30-days',
            title: 'Чек-лист на первые 30 дней',
            paragraphs: [
              'Первый месяц нужен, чтобы проверить цены, часы работы и график персонала. Каждую неделю смотрите на результат и меняйте что-то одно, а не всё сразу.',
            ],
            bullets: [
              'Опубликуйте тарифы и часы работы, фиксируйте каждую бронь в системе',
              'Закрывайте каждую смену пересчётом кассы',
              'Отмечайте, какие часы пустуют, и подумайте о дневном пакете',
              'Следите за самыми популярными играми и неисправными геймпадами',
              'Раз в неделю пересчитывайте остатки снеков и напитков',
              'Заведите профили в Instagram и Google Maps с реальными фото и часами работы',
              'На 30-й день сравните загрузку по станциям и средний чек',
            ],
          },
        ],
        faq: [
          {
            q: 'Со скольких консолей начинать PS-клуб?',
            a: 'Многие клубы открываются с 4–6 станциями: этого хватает на вечерний пик, а вложения остаются управляемыми. Расширяться безопаснее после того, как увидите реальную загрузку первого месяца. Если позволяет площадь, добавьте VIP-комнату — отдельный тариф поднимает средний чек.',
          },
          {
            q: 'Какая статья расходов самая большая?',
            a: 'Консоли — разовая покупка. Самый тяжёлый ежемесячный расход обычно аренда, за ней зарплаты и коммунальные платежи. Поэтому выбор помещения и часы работы напрямую влияют на выручку. До открытия разумно иметь запас минимум на три месяца аренды и зарплат.',
          },
          {
            q: 'Как установить почасовой тариф?',
            a: 'Ориентируйтесь на цены клубов поблизости, уровень своего заведения и собственные расходы. Отдельные дневной и вечерний тарифы, пакеты на 3 и 5 часов помогают заполнить пустые часы. Проверяйте тарифы в первый месяц, но не меняйте их слишком часто — постоянные гости путаются.',
          },
          {
            q: 'Что нужно сделать с юридической стороны?',
            a: 'В общем случае проверяют регистрацию бизнеса, налоговый учёт, требования к кассовому аппарату, договор аренды и пожарную безопасность. Это не юридическая консультация: требования могут меняться, поэтому до открытия уточните всё у бухгалтера или юриста.',
          },
          {
            q: 'Можно ли работать без программы?',
            a: 'С одной-двумя консолями и одним сотрудником — да. Когда станций становится больше, появляются смены и продажа снеков, тетради и таймера уже не хватает: брони теряются, продления забываются, касса не сходится. Программа держит бронь, сеанс и оплату в одной записи.',
          },
          {
            q: 'Сколько стоит Heselo для PS-клуба?',
            a: 'Тариф «Малый» для игровых / PS-клубов — от 25 AZN в месяц. «Средний» и «Большой» открываются по мере роста числа станций и бронирований, а при оплате за год два месяца в подарок. Полная таблица — на странице цен, а на демо можно проверить систему на своих станциях.',
          },
        ],
        ctaTitle: 'Демо для PS-клуба',
        ctaBody:
          'Напишите, сколько консолей планируете, — покажем брони, живые сеансы и кассовые смены на примере вашей планировки.',
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
            id: 'how-heselo-fits',
            title: 'Heselo bu sxemdə harada durur?',
            paragraphs: [
              'Heselo idarəetmə panelidir: rezervasiya, canlı sessiya, satış, endirim, kassa növbəsi və anbar. Ödəniləcək məbləği sistem hesablayır, işçi ödəniş üsulunu — nağd və ya kart — qeyd edir. Kart ödənişinin özü isə bankın terminalından keçir.',
              'Heselo terminal, kassa aparatı və ya printer satmır. Mövcud avadanlığınızla necə birgə işləyəcəyini demoda öz cihazlarınız üzrə yoxlayın.',
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
            a: 'Resepsiya üçün noutbuk və ya planşet, bankın kart terminalı, tələblərə uyğun kassa həlli və ehtiyatlı internet. Printer və pul qutusunu sonra əlavə etmək olar. Heselo paneli bu dəstlə işləyir; PS klub üçün 25, karaoke üçün 39 AZN/aydan başlayır.',
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
            id: 'how-heselo-fits',
            title: 'Where does Heselo fit in this setup?',
            paragraphs: [
              'Heselo is the management panel: bookings, live sessions, sales, discounts, cash shifts and inventory. The system calculates the amount due, and staff record the payment method, cash or card. The card payment itself goes through your bank terminal.',
              'Heselo does not sell terminals, cash registers or printers. Check how it works alongside your existing hardware during a demo with your actual devices.',
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
            a: 'A laptop or tablet for the front desk, a bank card terminal, a compliant cash register solution and internet with a backup. A printer and cash drawer can come later. Heselo works with this setup and starts from 25 AZN per month for PS clubs and 39 AZN for karaoke.',
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
          'Что проверить при выборе POS-терминала для клуба: разница между оборудованием и программой, принтер, интернет, кассовый аппарат и минимальный комплект для небольшого клуба.',
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
            id: 'how-heselo-fits',
            title: 'Где в этой схеме Heselo?',
            paragraphs: [
              'Heselo — панель управления: бронирования, живые сеансы, продажи, скидки, кассовая смена и склад. Сумму к оплате считает система, а сотрудник отмечает способ оплаты — наличные или карта. Сама оплата картой проходит через терминал банка.',
              'Heselo не продаёт терминалы, кассовые аппараты и принтеры. Как система работает вместе с вашим оборудованием, проверьте на демо на своих устройствах.',
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
            a: 'Ноутбук или планшет для стойки, банковский терминал, кассовое решение по требованиям и интернет с резервом. Принтер и денежный ящик можно добавить позже. Heselo работает с таким комплектом и стоит от 25 AZN в месяц для PS-клуба и от 39 AZN для караоке.',
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
          {
            id: 'heselo',
            title: 'Heselo bu işdə necə kömək edir?',
            paragraphs: [
              'Heselo-da stansiya cədvəldə və canlı zalda eyni vahiddir: bron sessiyaya çevrilir, məbləği sistem hesablayır, satış eyni hesaba düşür, növbə hesabatı sonda hazır olur. PS və PC stansiyaları eyni paneldə ola bilər.',
              'Oyun klubu üçün Kiçik plan 25 AZN/aydan başlayır. Keçidi bir növbədə sınayın: bronları paneldə aparın və gecə kassasını köhnə üsulla müqayisə edin.',
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
            a: 'Oyun klubu / PS üçün Kiçik plan 25 AZN/aydan başlayır. Stansiya və rezervasiya sayı artanda Orta və Böyük plan açılır; illik ödənişdə 2 ay hədiyyədir. Demoda dörd axını öz stansiyalarınızla sınaya bilərsiniz.',
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
          {
            id: 'heselo',
            title: 'How does Heselo help?',
            paragraphs: [
              'In Heselo, a station is the same unit on the schedule and in the live hall: a booking turns into a session, the system calculates the amount, sales land on the same bill, and the shift report is ready at close. PS and PC stations can share one panel.',
              'The Small plan for gaming clubs starts from 25 AZN per month. Try the switch over a single shift: run bookings in the panel and compare the night cash count with your old method.',
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
            a: 'The Small plan for gaming / PS clubs starts from 25 AZN per month. Medium and Large plans unlock as station and booking volume grows, and annual billing includes two months free. In a demo you can test all four flows with your own stations.',
          },
        ],
        ctaTitle: 'Demo for your game hall',
        ctaBody:
          'Tell us your station count. We will show how bookings, live sessions, payments and shift close would look in your hall.',
      },
      ru: {
        shortTitle: 'Автоматизация игрового зала',
        h1: 'Автоматизация игрового зала: бронь, сеанс, касса',
        seoTitle: 'Автоматизация игрового зала: бронь, сеанс, касса | Heselo',
        seoDescription:
          'Что автоматизировать в игровом зале: бронирование, таймер, оплату и смену. Сравнение WhatsApp и Excel с панелью управления и показатели, которые стоит отслеживать.',
        keywords: [
          'автоматизация игрового зала',
          'автоматизация игрового клуба',
          'автоматизация ps клуба',
          'программа для игрового зала',
          'управление игровым клубом',
        ],
        intro:
          'Автоматизация игрового зала — это не роботы и не дорогое оборудование. Речь о четырёх повторяющихся задачах: бронь, таймер сеанса, оплата и закрытие смены. Когда они собраны в одной записи, сотрудник пишет меньше, а владелец точнее видит выручку.',
        sections: [
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
          {
            id: 'heselo',
            title: 'Как помогает Heselo?',
            paragraphs: [
              'В Heselo станция — одна и та же единица в расписании и в живом зале: бронь превращается в сеанс, сумму считает система, продажи попадают в тот же счёт, отчёт по смене готов к закрытию. PS- и PC-станции могут быть в одной панели.',
              'Тариф «Малый» для игровых клубов — от 25 AZN в месяц. Попробуйте переход за одну смену: ведите брони в панели и сравните ночную кассу с прежним способом.',
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
            a: 'Тариф «Малый» для игровых / PS-клубов — от 25 AZN в месяц. «Средний» и «Большой» открываются по мере роста числа станций и бронирований, а при оплате за год два месяца в подарок. На демо можно проверить все четыре процесса на своих станциях.',
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
              'Planı otaq sayı və tariflərlə hazırlayandan sonra gündəlik işi necə aparacağınızı da sınayın. Heselo-da karaoke üçün Kiçik plan 39 AZN/aydan başlayır: otaq cədvəli, sessiya, bar satışı və növbə bir paneldə.',
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
            a: 'Karaoke üçün Kiçik plan 39 AZN/aydan başlayır — otaq cədvəli və sessiya işinə görə PS planından yüksəkdir. Orta və Böyük plan, illik ödəniş (2 ay hədiyyə) qiymətlər səhifəsindədir. Demoda öz otaqlarınızla sınaya bilərsiniz.',
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
              'Once your plan has room counts and rates, test how you will run the day-to-day. Heselo’s Small plan for karaoke starts from 39 AZN per month, with the room schedule, sessions, bar sales and shifts in one panel.',
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
            a: 'The Small plan for karaoke starts from 39 AZN per month. It is higher than the PS plan because of the room schedule and session workload. Medium and Large plans and annual billing (two months free) are on the pricing page, and a demo lets you test with your own rooms.',
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
              'Когда в плане уже есть число комнат и тарифы, проверьте, как вы будете вести ежедневную работу. В Heselo тариф «Малый» для караоке — от 39 AZN в месяц: расписание комнат, сеансы, продажи бара и смены в одной панели.',
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
            a: 'Тариф «Малый» для караоке — от 39 AZN в месяц; он выше PS-тарифа из-за расписания комнат и работы с сеансами. «Средний» и «Большой» тарифы и оплата за год (два месяца в подарок) — на странице цен. На демо можно проверить систему на своих комнатах.',
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
        h1: 'Antikafe menzil / icarə haqqını necə hesab etmək olar?',
        seoTitle: 'Antikafe icarə və saat haqqı hesablama — sadə düstur | Heselo',
        seoDescription:
          'Antikafe xərclərini necə toplamaq, saatlıq qiyməti necə qurmaq və zərərsizlik nöqtəsini sadə düsturla necə hesablamaq olar. Maliyyə və ya hüquqi məsləhət deyil.',
        keywords: [
          'antikafe menzil haqqı hesablama',
          'antikafe icarə',
          'antikafe icarə haqqı',
          'antikafe saat qiyməti',
          'antikafe xərcləri',
          'antikafe zərərsizlik nöqtəsi',
        ],
        intro:
          'Antikafedə qonaq içkiyə yox, vaxta görə ödəyir. Deməli, saatlıq və ya dəqiqəlik haqq kirayəni, maaşı, kommunalı və “pulsuz” çay-peçenyeni örtməlidir. Bu bələdçi hesablamanı addım-addım göstərir. Maliyyə və ya hüquqi məsləhət deyil — rəqəmləri öz məkanınızla və mühasibinizlə yoxlayın.',
        sections: [
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
            id: 'role-of-software',
            title: 'Proqramın rolu',
            paragraphs: [
              'Düstur yalnız real rəqəmlərlə işləyir. Dəftərlə uçotda satılan qonaq-saatı, endirimlərin təsirini və saatlar üzrə yükü bilmək çətindir.',
              'Heselo antikafedə hər qonağın vaxtını sayır, məbləği tarif qaydalarına görə hesablayır, satışı eyni hesaba yazır və növbə hesabatını çıxarır. Antikafe üçün Kiçik plan 32 AZN/aydan başlayır — bu da sabit xərclər siyahısına daxil edilməlidir.',
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
            a: 'Antikafe üçün Kiçik plan 32 AZN/aydan başlayır. Sistem qonaq vaxtını sayır, məbləği tarif qaydalarına görə hesablayır və növbə hesabatını verir — zərərsizlik hesabı üçün lazım olan qonaq-saatı real görürsünüz. Orta və Böyük plan qiymətlər səhifəsindədir.',
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
            id: 'role-of-software',
            title: 'The role of software',
            paragraphs: [
              'The formula only works with real numbers. With paper records it is hard to know how many guest-hours you actually sold, how much discounts cost you and how busy each hour is.',
              'In an anticafe, Heselo tracks each guest’s time, calculates the amount according to your rate rules, puts sales on the same bill and produces a shift report. The Small plan for anticafes starts from 32 AZN per month, and that belongs on your fixed-cost list too.',
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
            a: 'The Small plan for anticafes starts from 32 AZN per month. The system tracks guest time, calculates the amount according to your rate rules and produces a shift report, so you see the real guest-hours your break-even depends on. Medium and Large plans are on the pricing page.',
          },
        ],
        ctaTitle: 'Demo for your anticafe',
        ctaBody:
          'Tell us your table and zone count and your pricing model. We will show how guest time is tracked and what the shift report looks like.',
      },
      ru: {
        shortTitle: 'Расчёт аренды антикафе',
        h1: 'Как рассчитать аренду и плату за время в антикафе',
        seoTitle: 'Расчёт аренды и почасовой платы антикафе — простая формула | Heselo',
        seoDescription:
          'Как собрать расходы антикафе, выстроить почасовую цену и посчитать точку безубыточности по простой формуле. Не является финансовой или юридической консультацией.',
        keywords: [
          'расчёт аренды антикафе',
          'аренда антикафе',
          'расчёт платы за время антикафе',
          'стоимость часа в антикафе',
          'расходы антикафе',
          'точка безубыточности антикафе',
        ],
        intro:
          'В антикафе гость платит за время, а не за напитки. Значит, поминутная или почасовая плата должна покрывать аренду, зарплаты, коммунальные платежи и «бесплатные» чай с печеньем. Это руководство показывает расчёт по шагам. Это не финансовая и не юридическая консультация — проверьте цифры для своего помещения и с бухгалтером.',
        sections: [
          {
            id: 'cost-stack',
            title: 'Соберите расходы',
            paragraphs: [
              'Сначала составьте список постоянных ежемесячных расходов — всего, что вы платите независимо от числа гостей. Затем отдельно посчитайте переменные расходы на один гостечас.',
            ],
            bullets: [
              'Аренда — обычно самая крупная постоянная статья',
              'Зарплаты, налоги и социальные отчисления',
              'Коммунальные платежи: электричество, отопление, вода, интернет',
              'Программы, обновление игр и книг, уборка',
              'Переменные: чай, кофе, печенье, одноразовая посуда — на гостечас',
              'Амортизация: мебель, консоли, настольные игры',
            ],
          },
          {
            id: 'hourly-revenue-model',
            title: 'Модель почасовой выручки',
            paragraphs: [
              'Антикафе обычно выбирают одну из трёх моделей: поминутная оплата, почасовая или «стоп-чек» — после определённого времени сумма больше не растёт. Стоп-чек привлекает гостей, которые остаются надолго, но снижает выручку за час.',
              'Какую бы модель вы ни выбрали, нужно знать среднюю выручку с одного гостечаса: общая выручка за время / проданные гостечасы. Стоп-чек и скидки снижают эту цифру.',
            ],
            bullets: [
              'Поминутно: воспринимается честно, подходит для коротких визитов',
              'Почасово: просто и легко считать',
              'Стоп-чек: стимулирует оставаться дольше',
              'Отдельные дневной, вечерний и студенческий тарифы',
            ],
          },
          {
            id: 'break-even-simple-formula',
            title: 'Точка безубыточности: простая формула',
            paragraphs: [
              'Формула: нужные гостечасы = постоянные расходы в месяц / (средняя выручка с гостечаса − переменные расходы на гостечас).',
              'Пример (не гарантия): аренда 1 500, зарплаты 1 800, коммунальные 400, прочее 300 — итого 4 000 AZN в месяц. Средняя выручка с часа — 4 AZN, переменные расходы — 0,8 AZN. 4 000 / 3,2 = 1 250 гостечасов в месяц, то есть около 42 гостечасов в день. При 10 часах работы это в среднем 4–5 гостей одновременно.',
              'Если цифра кажется большой, есть три рычага: снизить аренду, поднять среднюю выручку с часа или заполнить пустые часы.',
            ],
          },
          {
            id: 'role-of-software',
            title: 'Роль программы',
            paragraphs: [
              'Формула работает только с реальными цифрами. При учёте в тетради трудно понять, сколько гостечасов продано, во что обходятся скидки и как распределяется загрузка по часам.',
              'Heselo считает время каждого гостя в антикафе, рассчитывает сумму по правилам тарифа, записывает продажи в тот же счёт и формирует отчёт по смене. Тариф «Малый» для антикафе — от 32 AZN в месяц; его тоже стоит включить в список постоянных расходов.',
            ],
          },
          {
            id: 'next-steps',
            title: 'Следующие шаги',
            paragraphs: [
              'Не считайте один раз и навсегда — первые три месяца обновляйте расчёт ежемесячно по реальным данным.',
            ],
            bullets: [
              'Сведите постоянные ежемесячные расходы в одну таблицу',
              'Посчитайте переменные расходы на гостечас',
              'Оцените среднюю выручку с часа для выбранной модели',
              'Рассчитайте точку безубыточности и переведите её в число гостей в день',
              'Отдельно проверьте плохой сценарий (на 20–30% меньше гостей)',
              'Уточните цифры у бухгалтера',
            ],
          },
        ],
        faq: [
          {
            q: 'Как рассчитать аренду для антикафе?',
            a: 'Сложите ежемесячную аренду с другими постоянными расходами — зарплатами, коммунальными платежами, программой. Затем разделите сумму на чистую выручку с гостечаса, то есть почасовую плату за вычетом расходов на чай и печенье. Результат покажет, сколько гостечасов нужно продать в месяц. Проверьте цифры с бухгалтером.',
          },
          {
            q: 'Какую долю выручки должна составлять аренда?',
            a: 'Универсальной нормы нет, и это не финансовая консультация. На практике чем больше доля аренды, тем меньше запаса остаётся в слабый месяц. Сравните аренду с выручкой в плохом сценарии: если вы можете её оплатить при потоке на 20–30% меньше, план устойчивее.',
          },
          {
            q: 'Поминутная или почасовая оплата?',
            a: 'Поминутная оплата кажется честной при коротких визитах и побуждает гостей заходить чаще. Почасовая проще, её легко считать. Стоп-чек стимулирует оставаться дольше, но снижает выручку за час. Какую бы модель вы ни выбрали, отслеживайте среднюю выручку с часа по реальным данным.',
          },
          {
            q: 'Как учесть «бесплатные» чай и печенье?',
            a: 'Сложите всё, что закупили за месяц — чай, кофе, сахар, печенье, одноразовую посуду, — и разделите на гостечасы, проданные в этом месяце. Это переменные расходы на гостечас. Если не вычесть их из почасовой платы, точка безубыточности будет выглядеть лучше, чем есть на самом деле.',
          },
          {
            q: 'Когда можно выйти на безубыточность?',
            a: 'Это зависит от места, цен и маркетинга — гарантированной цифры нет. Стройте план на первые месяцы с низкой загрузкой и держите запас минимум на три месяца постоянных расходов. Каждый месяц обновляйте расчёт по реальным гостечасам.',
          },
          {
            q: 'Сколько стоит Heselo для антикафе?',
            a: 'Тариф «Малый» для антикафе — от 32 AZN в месяц. Система считает время гостей, рассчитывает сумму по правилам тарифа и формирует отчёт по смене, поэтому вы видите реальные гостечасы для расчёта безубыточности. «Средний» и «Большой» тарифы — на странице цен.',
          },
        ],
        ctaTitle: 'Демо для антикафе',
        ctaBody:
          'Напишите количество столов и зон и вашу модель оплаты — покажем, как считается время гостей и как выглядит отчёт по смене.',
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
