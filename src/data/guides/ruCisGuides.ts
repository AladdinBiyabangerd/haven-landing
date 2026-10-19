import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-16'

type LocalizedGuide = Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>

type CatalogEntry = {
  slug: string
  relatedSolutions: GuideCopy['relatedSolutions']
  copy: Record<Locale, LocalizedGuide>
}

const catalog: CatalogEntry[] = [
  {
    slug: "ps-club-software-comparison",
    relatedSolutions: ["gaming", "pos", "reservations"],
    copy: {
      az: {
        shortTitle: "PS proqram müqayisəsi",
        h1: "PS klubu proqramları: 2026 müqayisəsi",
        seoTitle: "PS klubu proqramı: 2026 müqayisəsi | Heselo",
        seoDescription: "PS klubu proqramlarını müqayisə edirik: qiymət modeli, bron, bar, növbə, avadanlıq. Cədvəl — açıq mənbələr, oktyabr 2026.",
        keywords: [
          "ps klub proqramı müqayisə",
          "playstation klub proqramı",
          "gameclub müqayisə",
          "smarttimer ps klub",
          "senet ps klub",
          "oyun klubu proqramı",
        ],
        intro: "PS klubu üçün proqram seçərkən yalnız aylıq abunəyə baxmaq azdır: qiymət konsol başına mı, klub üzrə mi, bron və bar sessiyaya bağlanırmı, TV pultu tələb olunurmu — bunlar gündəlik işi dəyişir. Bu bələdçi oktyabr 2026 tarixinə görə açıq mənbələrlə müqayisə metodologiyasını və Heselonun harada uyğun olub-olmadığını izah edir.",
        sections: [
          {
            id: "methodology",
            title: "Metodologiya və mənbələr",
            paragraphs: [
              "Müqayisə tarixi: 2026-10-16. Rəqiblərin rəsmi saytları və ictimai sənədləri oxunub; burada uydurma qiymət yoxdur — yalniz model və funksiya.",
              "Mənbələr: gmclb.ru, smarttimer.ru, senet.cloud, smartshell.gg. Heselo: heselo.online və /ru/solutions/gaming/.",
            ],
            table: {
              headers: ["Mənbə", "Nə yoxlanılıb", "Tarix"],
              rows: [
                ["gmclb.ru", "Qiymət modeli, funksiyalar", "2026-10"],
                ["smarttimer.ru", "Tariflər səhifəsi, modul təsviri", "2026-10"],
                ["senet.cloud / smartshell.gg", "PS klub modulu, abunə", "2026-10"],
                ["Heselo", "Oyun klubu həlli, açıq planlar", "2026-10"],
              ],
            },
          },
          {
            id: "summary",
            title: "Qısa müqayisə cədvəli",
            paragraphs: [
              "Aşağıdakı cədvəl ssenarini sadələşdirir; demo və müqavilə şərtləri fərqli ola bilər.",
            ],
            table: {
              headers: ["", "GameClub", "SmartTimer", "SENET / SmartShell", "Heselo"],
              rows: [
                ["Qiymət modeli", "Saytda abunə (detallar sorğu ilə)", "Konsol/klub modeli saytda", "Klub üzrə paketlər", "Açıq: {gaming} {currency}/ay «Kiçik»"],
                ["Pult / TV idarəetmə", "Launj SaaS, pult icarəsi ssenarisi", "Taymer + POS, avadanlıq ayrıca", "Konsol klubu fokusu", "TV pultu satmırıq — admin panel"],
                ["Bron", "Onlayn bron", "Rezervasiya modulu", "Bron + sessiya", "Stansiya təqvimi, telefon bronu"],
                ["Bar", "Sessiyaya bağlı sifariş", "POS inteqrasiyası", "Bar / kassa", "Bar sessiya hesabına"],
                ["Növbə", "Kassa hesabatı", "Növbə / kassa", "Shift hesabatı", "Kassa növbəsi açılış/bağlanış"],
              ],
            },
          },
          {
            id: "price-model",
            title: "Konsol başına vs klub üzrə qiymət",
            paragraphs: [
              "Bəzi proqramlar hər aktiv konsol üçün aylıq ödəniş götürür; digərləri stansiya sayına görə plan satır. Eyni klubda 5 və 10 konsol olduqda ümumi xərc modeldən asılı olaraq fərqli artır — rəqiblərin dəqiq rəqəmlərini saytlarından yoxlayın.",
              "Nümunə (illustrativ, vendor qiyməti deyil): konsol başına 500 ₽/ay modelində 5 konsol ≈ 2 500 ₽/ay, 10 konsol ≈ 5 000 ₽/ay; klub üzrə sabit plan 10 konsola qədər eyni qala bilər. Heseloda plan stansiya sayına görə «Kiçik / Orta / Böyük» — {gaming} {currency}/aydan.",
            ],
            table: {
              headers: ["Model", "5 konsol (illustrativ)", "10 konsol (illustrativ)", "Nə vaxt seçilir"],
              rows: [
                ["Konsol başına", "5 × birim", "10 × birim", "Stansiya sayı tez-tez dəyişəndə"],
                ["Klub paketi", "Sabit plan", "Plan yüksəlişi və ya əlavə", "Stabil say, proqnozlaşdırılan büdcə"],
                ["Heselo plan", "«Kiçik» + stansiya limiti", "«Orta» / «Böyük»", "AZ və CIS, çox tip klub"],
              ],
            },
          },
          {
            id: "heselo-fit",
            title: "Heselo nə verir?",
            paragraphs: [
              "Heselo Bakıda yaradılıb, panel AZ/EN/RU-dadır; CIS-dən uzaqdan idarəetmə üçün uyğundur. Bron → canlı sessiya → bar → kassa növbəsi bir axında.",
              "TV pultu və ya konsol kilidi avadanlığı təklif etmirik — admin planşet/noutbukdan işləyir. Azərbaycan və ya CIS vergi/KKT tələbləri üçün hüquqi məsləhət deyil; yerli mühasibinizlə yoxlayın.",
            ],
            bullets: [
              "Stansiya cədvəli və rezervasiya",
              "Canlı sessiya, uzatma, bar satışı",
              "Kassa növbəsi və gün sonu",
              "Oyun klubu / PS: {gaming} {currency}/aydan",
            ],
          },
          {
            id: "when-not-heselo",
            title: "Heselo uyğun olmaya bilər",
            paragraphs: [
              "50+ diskless PC klub, RF üçün SmartShell ekosistemi ilə tam inteqrasiya və ya yalnız ingilisdilli GameClub SaaS — bu hallarda ixtisaslaşmış həll yoxlayın.",
              "Yalnız taymer lazımdırsa və POS ayrıca qalsın — SmartTimer kimi yüngül variant baxıla bilər.",
            ],
          },
          {
            id: "checklist",
            title: "Seçim yoxlama siyahısı",
            paragraphs: [
              "Eyni ssenarini demoda keçirin: bron, sessiya, bar, növbə bağlanışı.",
            ],
            bullets: [
              "5 və 10 stansiya üçün rəsmi qiymət sorğusu",
              "Bron itirməmə və uzatma",
              "Bar sessiya hesabına düşürmü",
              "Gecə növbəsi kassa tuturmu",
              "Dil və dəstək kanalı",
            ],
          },
        ],
        faq: [
          {
            q: "Hansı proqram PS klubu üçün ən ucuzdur?",
            a: "Qiymət konsol sayından, POS ehtiyacından və regiondan asılıdır; burada rəqib qiyməti uydurmuruq. gmclb.ru, smarttimer.ru və senet.cloud saytlarından oktyabr 2026 tarixinə görə sorğu edin və Heselo {gaming} {currency}/ay planı ilə müqayisə edin.",
          },
          {
            q: "TV pultu və ya konsol kilidi lazımdır?",
            a: "Bəzi launj proqramları avadanlıq + pult idarəetməsi ilə gəlir. Heselo admin paneldən işləyir — TV pultu satmırıq. Avadanlıq seçimi ayrıca biznes qərarıdır.",
          },
          {
            q: "GameClub və Heselo eyni şeydirmi?",
            a: "Eyni geniş kateqoriyadadır (konsol launj vaxtı), amma bazar və dil fərqlidir. GameClub beynəlxalq launj SaaS; Heselo AZ mənşəli, karaoke/bilyard/antikafe də dəstəkləyir.",
          },
          {
            q: "SmartTimer yalnız taymerdirmi?",
            a: "SmartTimer PS klub üçün taymer + POS ekosistemi kimi təqdim olunur; funksiya dərinliyi saytda moduldan asılıdır. Tam klub paneli lazımdırsa demoda bron və növbəni yoxlayın.",
          },
          {
            q: "SENET və SmartShell fərqi nədir?",
            a: "SENET (senet.cloud) və SmartShell (smartshell.gg) CIS-də oyun klubu operatorları arasında tanınır; interfeys və qiymət paketləri saytda. Heselo ilə müqayisədə dil, bazar və çoxtip klub dəstəyinə baxın.",
          },
          {
            q: "Heselo neçəyədir?",
            a: "Oyun klubu / PS üçün Kiçik plan {gaming} {currency}/aydan; Orta və Böyük stansiya sayına görə. İllik ödənişdə 2 ay hədiyyə — qiymətlər səhifəsində.",
          },
        ],
        ctaTitle: "PS klub üçün demo",
        ctaBody: "Stansiya sayını və bron modelinizi yazın — sessiya, bar və kassa növbəsini göstəririk.",
      },
      en: {
        shortTitle: "PS software comparison",
        h1: "PS club software: 2026 comparison",
        seoTitle: "PS Club Software: 2026 Comparison | Heselo",
        seoDescription: "Compare PS club software: pricing model, booking, bar on the session bill, shifts and hardware. Table from public sources, October 2026.",
        keywords: [
          "ps club software comparison",
          "playstation club software",
          "gameclub comparison",
          "smarttimer ps club",
          "senet gaming club",
          "console lounge software",
        ],
        intro: "Choosing software for a PS club is not just about the monthly fee: per-console vs per-venue pricing, whether booking and bar sales tie to the live session, and whether you need TV controllers all change daily work. This guide explains our October 2026 methodology from public sources and where Heselo fits — or does not.",
        sections: [
          {
            id: "methodology",
            title: "Methodology and sources",
            paragraphs: [
              "Comparison date: 2026-10-16. We read vendors’ public sites; no invented competitor prices — only models and features.",
              "Sources: gmclb.ru, smarttimer.ru, senet.cloud, smartshell.gg. Heselo: heselo.online and /ru/solutions/gaming/.",
            ],
            table: {
              headers: ["Source", "What we checked", "Date"],
              rows: [
                ["gmclb.ru", "Pricing model, features", "2026-10"],
                ["smarttimer.ru", "Rates page, modules", "2026-10"],
                ["senet.cloud / smartshell.gg", "PS club module, subscription", "2026-10"],
                ["Heselo", "Gaming solution, public plans", "2026-10"],
              ],
            },
          },
          {
            id: "summary",
            title: "Summary comparison table",
            paragraphs: [
              "The table simplifies scenarios; demo and contract terms may differ.",
            ],
            table: {
              headers: ["", "GameClub", "SmartTimer", "SENET / SmartShell", "Heselo"],
              rows: [
                ["Price model", "Subscription on site (details on request)", "Per-console/club on site", "Venue packages", "Public: {gaming} {currency}/mo Start"],
                ["Controller / TV", "Lounge SaaS, pad rental scenarios", "Timer + POS, hardware separate", "Console club focus", "No TV controllers — admin panel"],
                ["Booking", "Online booking", "Reservation module", "Booking + session", "Station calendar, phone bookings"],
                ["Bar", "Orders on session", "POS integration", "Bar / till", "Bar on session bill"],
                ["Shift", "Cash reports", "Shift / till", "Shift reports", "Cash shift open/close"],
              ],
            },
          },
          {
            id: "price-model",
            title: "Per console vs per venue",
            paragraphs: [
              "Some products charge per active console per month; others sell plans by station count. With 5 vs 10 consoles total cost scales differently — confirm numbers on each vendor site.",
              "Illustrative only (not vendor prices): at 500 ₽/console/month, 5 consoles ≈ 2,500 ₽/month and 10 ≈ 5,000 ₽/month; a flat venue plan may stay the same until you upgrade. Heselo uses Start / Standard / Pro by station count from {gaming} {currency}/month.",
            ],
            table: {
              headers: ["Model", "5 consoles (illustrative)", "10 consoles (illustrative)", "When it fits"],
              rows: [
                ["Per console", "5 × unit", "10 × unit", "Station count changes often"],
                ["Venue package", "Flat plan", "Upgrade or add-on", "Stable count, predictable budget"],
                ["Heselo plan", "Start + station limit", "Standard / Pro", "AZ & CIS, multi-type venues"],
              ],
            },
          },
          {
            id: "heselo-fit",
            title: "What Heselo offers",
            paragraphs: [
              "Built in Baku with AZ/EN/RU panel; works for remote CIS operators. Booking → live session → bar → cash shift in one flow.",
              "We do not sell TV controllers or console lock hardware — staff use a tablet or laptop. Not legal/tax advice for RF KKT or 54-FZ; check local requirements.",
            ],
            bullets: [
              "Station schedule and bookings",
              "Live session, extensions, bar sales",
              "Cash shift and end-of-day",
              "Gaming / PS from {gaming} {currency}/month",
            ],
          },
          {
            id: "when-not-heselo",
            title: "When Heselo may not fit",
            paragraphs: [
              "Large diskless PC venues, deep SmartShell-only RF stack, or English-only GameClub SaaS may be better served elsewhere.",
              "If you only need a timer and keep POS separate, a lighter tool like SmartTimer may be enough.",
            ],
          },
          {
            id: "checklist",
            title: "Selection checklist",
            paragraphs: [
              "Run the same scenario in a demo: booking, session, bar, shift close.",
            ],
            bullets: [
              "Official quote for 5 and 10 stations",
              "No lost bookings or extensions",
              "Bar lands on session bill",
              "Night shift cash matches",
              "Language and support channel",
            ],
          },
        ],
        faq: [
          {
            q: "Which PS club software is cheapest?",
            a: "Depends on console count, POS needs and region; we do not invent competitor prices. Request quotes from gmclb.ru, smarttimer.ru and senet.cloud as of October 2026 and compare with Heselo from {gaming} {currency}/month.",
          },
          {
            q: "Do I need TV controllers or locks?",
            a: "Some lounge products bundle hardware control. Heselo is admin-panel based — we do not sell TV controllers. Hardware is a separate decision.",
          },
          {
            q: "Are GameClub and Heselo the same?",
            a: "Same broad category (console lounge time) but different market and language focus. GameClub is international lounge SaaS; Heselo is AZ-origin and also covers karaoke, billiards and anticafe.",
          },
          {
            q: "Is SmartTimer only a timer?",
            a: "SmartTimer is marketed as timer + POS ecosystem for PS clubs; depth depends on modules on their site. If you need full club panel, test booking and shifts in a demo.",
          },
          {
            q: "SENET vs SmartShell?",
            a: "Both are known in CIS for gaming clubs; packages and UI are on senet.cloud and smartshell.gg. Compare language, market and multi-venue support vs Heselo.",
          },
          {
            q: "How much is Heselo?",
            a: "Gaming / PS Start plan from {gaming} {currency}/month; Standard and Pro by station count. Two months free on annual billing — see pricing page.",
          },
        ],
        ctaTitle: "Demo for your PS club",
        ctaBody: "Tell us station count and booking model — we show session, bar and cash shift flow.",
      },
      ru: {
        shortTitle: "Сравнение программ PS",
        h1: "Программы для PS-клуба: сравнение 2026",
        seoTitle: "Программы для PS-клуба: сравнение 2026 | Heselo",
        seoDescription: "Сравнение программ для PS-клуба: модель оплаты, бронь, бар в счёт сеанса, смены. Таблица 2026 — GameClub, СмартТаймер, SENET и Heselo.",
        keywords: [
          "программа для ps клуба сравнение",
          "программа для playstation клуба",
          "gameclub сравнение",
          "смарттаймер ps клуб",
          "senet ps клуб",
          "система управления ps клубом",
        ],
        intro: "Выбор программы для PS-клуба — не только абонентская плата. Важны тарификация за консоль или за клуб, связка брони и бара с сеансом, учёт смены и нужно ли отдельное «железо» на TV. Материал актуален на 16.10.2026; цены конкурентов не выдумываем — смотрим публичные страницы. Чек-лист функций — в отдельной статье; страница продукта Heselo — /ru/solutions/gaming/. Heselo создан в Баку, панель на русском, подходит и для удалённого управления в СНГ.",
        sections: [
          {
            id: "methodology",
            title: "Методология и источники",
            paragraphs: [
              "Дата среза: 16 октября 2026. Сверяли описание функций и модель оплаты на сайтах вендоров; в таблицах нет «утёкших» прайсов — только то, что заявлено публично.",
              "Источники: https://gmclb.ru, https://smarttimer.ru, https://senet.cloud, https://smartshell.gg. Heselo: heselo.online и /ru/solutions/gaming/.",
            ],
            table: {
              headers: ["Источник", "Что смотрели", "Дата"],
              rows: [
                ["gmclb.ru", "Модель подписки, модули", "2026-10"],
                ["smarttimer.ru", "Тарифы, POS/таймер", "2026-10"],
                ["senet.cloud / smartshell.gg", "PS-клуб, пакеты", "2026-10"],
                ["Heselo", "Игровой клуб, тарифы «Старт»", "2026-10"],
              ],
            },
          },
          {
            id: "summary",
            title: "Сводная таблица",
            paragraphs: [
              "Упрощённый срез для первичного отбора; детали — в демо и договоре.",
            ],
            table: {
              headers: ["", "GameClub", "СмартТаймер", "SENET / SmartShell", "Heselo"],
              rows: [
                ["Модель цены", "SaaS, детали на сайте", "За консоль / клуб на сайте", "Пакеты под клуб", "Открыто: {gaming} {currency}, «Старт»"],
                ["Пульт / TV", "Launj SaaS, сценарии с пультами", "Таймер + касса, железо отдельно", "Фокус на консольный клуб", "Без TV-пультов — панель администратора"],
                ["Бронирование", "Онлайн-бронь", "Модуль записи", "Бронь + сеанс", "Карта станций, запись по телефону"],
                ["Бар", "Заказ в счёт сеанса", "Интеграция с POS", "Бар / касса", "Бар в счёт сеанса"],
                ["Смена", "Отчёты по кассе", "Смена / Z-отчёт", "Смена", "Открытие и закрытие кассы"],
              ],
            },
          },
          {
            id: "price-model",
            title: "Оплата за консоль vs за клуб",
            paragraphs: [
              "При оплате за каждую активную консоль сумма растёт линейно; при пакете «на клуб» до лимита станций цена стабильнее. Точные цифры — только у вендора на дату запроса.",
              "Иллюстрация (не прайс вендоров): если бы модель была «500 ₽ × консоль», то 5 консолей ≈ 2 500 ₽/мес, 10 ≈ 5 000 ₽/мес; у Heselo тарифы «Старт» / «Стандарт» / «Про» по числу станций от {gaming} {currency}/мес.",
            ],
            table: {
              headers: ["Модель", "5 консолей (иллюстрация)", "10 консолей (иллюстрация)", "Когда уместно"],
              rows: [
                ["За консоль", "5 × единица", "10 × единица", "Состав зала часто меняется"],
                ["Пакет на клуб", "Фикс", "Апгрейд тарифа", "Предсказуемый бюджет"],
                ["Heselo", "«Старт» + лимит", "«Стандарт» / «Про»", "СНГ, несколько форматов"],
              ],
            },
          },
          {
            id: "heselo-fit",
            title: "Что даёт Heselo",
            paragraphs: [
              "Создан в Баку · работает удалённо · панель на русском. Бронь → сеанс → бар в счёт сеанса → закрытие смены в одном потоке.",
              "Мы не продаём TV-пульты и блокировки консолей — администратор работает с планшета или ноутбука. Это не юридическая консультация: в РФ мы не позиционируемся как ККТ / 54-ФЗ; требования уточняйте локально.",
            ],
            bullets: [
              "Карта станций и предварительное бронирование",
              "Живой сеанс, продление, бар в счёт сеанса",
              "Касса и отчёт по смене",
              "Игровой клуб / PS от {gaming} {currency}/мес",
            ],
          },
          {
            id: "when-not-heselo",
            title: "Когда Heselo не лучший выбор",
            paragraphs: [
              "Крупный diskless PC-зал, стек только под SmartShell в РФ или нужен исключительно англоязычный GameClub — имеет смысл сравнить специализированные продукты.",
              "Если нужен только таймер, а касса уже есть — посмотрите облегчённые решения вроде СмартТаймера.",
            ],
          },
          {
            id: "checklist",
            title: "Чек-лист перед выбором",
            paragraphs: [
              "Прогоните один сценарий в демо у каждого финалиста.",
            ],
            bullets: [
              "Коммерческое предложение на 5 и 10 станций",
              "Бронь не теряется, продление учитывается",
              "Бар попадает в счёт сеанса",
              "Ночная смена сходится по кассе",
              "Язык интерфейса и поддержки",
            ],
          },
        ],
        faq: [
          {
            q: "Какая программа для PS-клуба дешевле?",
            a: "Зависит от числа консолей, кассы и региона; мы не публикуем выдуманные цены конкурентов. Запросите расчёт на gmclb.ru, smarttimer.ru и senet.cloud на октябрь 2026 и сравните с Heselo от {gaming} {currency}/мес.",
          },
          {
            q: "Нужны ли TV-пульты или блокировка консолей?",
            a: "Часть launj-решений продаёт сценарий с пультами и железом. Heselo — панель администратора; TV-пульты мы не поставляем.",
          },
          {
            q: "GameClub и Heselo — одно и то же?",
            a: "Близкая категория (время у консоли), но разный рынок и язык. GameClub — международный launj SaaS; Heselo — из Баку, также караоке, бильярд, антикафе.",
          },
          {
            q: "СмартТаймер — только таймер?",
            a: "На сайте позиционируется как таймер и POS для PS-клуба; глубина зависит от подключённых модулей. Если нужны бронь и смена — проверьте в демо.",
          },
          {
            q: "Чем отличаются SENET и SmartShell?",
            a: "Оба известны в СНГ для игровых клубов; пакеты и интерфейс — на senet.cloud и smartshell.gg. Сравнивайте язык, поддержку и мультиформатность с Heselo.",
          },
          {
            q: "Сколько стоит Heselo?",
            a: "Тариф «Старт» для игрового клуба / PS от {gaming} {currency}/мес; «Стандарт» и «Про» — по числу станций. При годовой оплате 2 месяца в подарок — на странице цен.",
          },
        ],
        ctaTitle: "Демо для PS-клуба",
        ctaBody:
          "Напишите число станций и как принимаете бронь — покажем сеанс, бар и закрытие смены на /ru/solutions/gaming/.",
      },
    },
  },  {
    slug: "how-to-open-billiards-club",
    relatedSolutions: ["billiards", "reservations", "pos"],
    copy: {
      az: {
        shortTitle: "Bilyard klub açmaq",
        h1: "Bilyard klubu necə açılır: xərclər, masalar, tariflər",
        seoTitle: "Bilyard klubu necə açılır — xərclər, masalar, tariflər | Heselo",
        seoDescription: "Bilyard klubu açmaq: format (pul/rus/snuker), sahə, avadanlıq, büdcə, saatlıq tarif və pik saatlar, masa bronu, bar, vaxt uçotu və növbə.",
        keywords: [
          "bilyard klub açmaq",
          "bilyard klubu xərcləri",
          "bilyard masası qiyməti",
          "bilyard saat tarifi",
          "bilyard klub biznesi",
        ],
        intro: "Bilyard klubu investisiyası masalar və işıqlandırmadan başlayır, amma gəlir masa-saat satışından gəlir. Düzgün format seçimi, pik saat tarifi və bron itirməmək gündəlik gəlirə birbaşa təsir edir. Bu bələdçi açılış büdcəsi və əməliyyat addımlarını sıralayır.",
        sections: [
          {
            id: "format",
            title: "Format: pul, rus, snuker",
            paragraphs: [
              "Pool masaları geniş auditoriya üçün standartdır; rus bilyardı və snuker ayrı auditoriya və peşəkar oyunçu tələb edir. Bir zalda hamısını qarışdırmaq olar, amma hər format üçün ayrı zona və tarif məntiqlidir.",
            ],
            bullets: [
              "Pool (8/9 top) — ən kütləvi format",
              "Rus bilyardı — daha böyük masa, fərqli oyun",
              "Snuker — uzun masa, az sayda, yüksək tarif",
            ],
          },
          {
            id: "space",
            title: "Sahə və masa yerləşdirmə",
            paragraphs: [
              "Hər masanın ətrafında oynayanın hərəkəti və keş üçün boşluq lazımdır. Adətən bir pool masası 25–35 m² sahə tutur (masa + keçid).",
            ],
            bullets: [
              "Masa arası minimum 1,2–1,5 m keçid",
              "Asma işıq — masaya, ümumi işıq zəif",
              "Səs: zal aşağıda və ya yana mənzil varsa izolyasiya",
            ],
          },
          {
            id: "equipment",
            title: "Avadanlıq və açılış büdcəsi",
            paragraphs: [
              "Masa keyfiyyəti müştərini saxlayır; tay, top dəsti və kondisioner ehtiyatda olmalıdır. Büdcəni masa sayına görə planlayın — 4–6 masa çox klub üçün real başlanğıcdır.",
            ],
            bullets: [
              "Pool masaları, işıq, top dəstləri, taylar",
              "Marker lövhə və ya rəqəmsal vaxt ekranı",
              "Bar üçün soyuducu, qəhvə avadanlığı",
              "Resepsiya: planşet, terminal",
            ],
          },
          {
            id: "pricing",
            title: "Saatlıq tarif və pik saatlar",
            paragraphs: [
              "Tarif yaxınlıqdakı klublar, masa keyfiyyəti və kirayəyə görə qurulur. Axşam və həftə sonu pikdir — gündüz endirim boş masaları doldurur.",
            ],
            bullets: [
              "Gündüz / axşam tarif fərqi",
              "Həftə sonu əlavəsi",
              "Saatlıq və 2–3 saat paket",
              "Turnir günü ayrıca qiymət",
            ],
          },
          {
            id: "booking",
            title: "Masa bronu",
            paragraphs: [
              "Telefon bronu itiriləndə masa boş qalır. Sistemdə masa, saat və ad qeyd olunmalı; gələndə bron canlı sessiyaya çevrilir.",
            ],
          },
          {
            id: "bar-shifts",
            title: "Bar, vaxt uçotu və növbə",
            paragraphs: [
              "Bar satışı masa vaxtı ilə eyni hesabda olarsa, kassa tutur. Növbə açılışı/bağlanışı və hər masanın vaxtı ayrıca izlənməlidir.",
              "Heselo bilyard üçün {billiards} {currency}/aydan — masa cədvəli, sessiya, bar və kassa növbəsi.",
            ],
          },
          {
            id: "faq-section",
            title: "Tez-tez verilən suallar (icmal)",
            paragraphs: [
              "Ətraflı cavablar aşağıda.",
            ],
          },
        ],
        faq: [
          {
            q: "Neçə masadan başlamaq olar?",
            a: "4–6 pool masası bir zal üçün balanslı başlanğıcdır: pik saatda növbə, gündüz boşluq idarəolunan qalır. Snuker ayrıca 1–2 masa ilə pilot kimi açıla bilər.",
          },
          {
            q: "Saatlıq tarif neçə olmalıdır?",
            a: "Yerli bazar, masa keyfiyyəti və aylıq sabit xərclərə baxın. İlk ay gündüz/axşam tarifini sınayın; tez-tez dəyişmək daimi oyunçunu çaşdırır.",
          },
          {
            q: "Bron telefonsuz olarmı?",
            a: "Kiçik klubda olar; masa sayı artanda telefon bronu itir. Təqvim və xatırlatma proqramda olmalıdır.",
          },
          {
            q: "Bar məcburidirmi?",
            a: "Məcburi deyil, amma orta çeki qaldırır. İçki sessiya hesabına yazılırsa, kassa gecə sürpriz vermir.",
          },
          {
            q: "Proqram nə vaxt lazımdır?",
            a: "2 masa və tək işçi — dəftər. 4+ masa, növbəli admin, bar — sessiya və növbə sistemi lazımdır.",
          },
          {
            q: "Heselo bilyard üçün neçəyədir?",
            a: "Bilyard üçün Kiçik plan {billiards} {currency}/aydan; masa və rezervasiya artanda Orta/Böyük. Demoda masa bronu → sessiya → bar axınını göstəririk.",
          },
        ],
        ctaTitle: "Bilyard klubu üçün demo",
        ctaBody: "Masa sayını və iş saatlarını yazın — bron, sessiya və kassa növbəsini göstəririk.",
      },
      en: {
        shortTitle: "Open a billiards club",
        h1: "How to open a billiards club: costs, tables, rates",
        seoTitle: "How to Open a Billiards Club — Costs, Tables, Rates | Heselo",
        seoDescription: "Opening a billiards club: pool/russian/snooker format, space per table, equipment, budget, hourly rates and peak hours, table booking, bar, time tracking and shifts.",
        keywords: [
          "how to open a billiards club",
          "billiards club costs",
          "pool hall business",
          "billiards table hourly rate",
          "snooker club opening",
        ],
        intro: "A billiards club starts with tables and lighting, but revenue is table-hours sold. Format choice, peak pricing and never losing a booking drive daily income. This guide covers opening budget and day-to-day operations.",
        sections: [
          {
            id: "format",
            title: "Format: pool, russian, snooker",
            paragraphs: [
              "Pool tables suit the widest audience; russian billiards and snooker need dedicated space and often higher rates.",
            ],
            bullets: [
              "Pool (8/9 ball) — mainstream",
              "Russian billiards — larger table",
              "Snooker — long table, fewer units, premium rate",
            ],
          },
          {
            id: "space",
            title: "Space and layout",
            paragraphs: [
              "Each table needs cue swing room and walk paths — often 25–35 m² per pool table including circulation.",
            ],
            bullets: [
              "1.2–1.5 m clearance between tables",
              "Pendant lights over beds",
              "Sound control if residential neighbours",
            ],
          },
          {
            id: "equipment",
            title: "Equipment and budget",
            paragraphs: [
              "Table quality retains players; spare cues and ball sets matter. Many clubs start with 4–6 pool tables.",
            ],
            bullets: [
              "Tables, lights, balls, cues",
              "Scoreboard or digital timer display",
              "Bar fridge and coffee setup",
              "Front desk tablet and terminal",
            ],
          },
          {
            id: "pricing",
            title: "Hourly rates and peak hours",
            paragraphs: [
              "Price against local clubs, table tier and rent. Evenings and weekends peak; daytime discounts fill gaps.",
            ],
            bullets: [
              "Day vs evening rate",
              "Weekend surcharge",
              "Hourly and 2–3 hour packages",
              "Event nights",
            ],
          },
          {
            id: "booking",
            title: "Table booking",
            paragraphs: [
              "Lost phone bookings leave tables empty. Log table, time and name; convert booking to live session on arrival.",
            ],
          },
          {
            id: "bar-shifts",
            title: "Bar, time tracking and shifts",
            paragraphs: [
              "Bar on the same bill as table time keeps the till honest. Track each table and cash shift open/close.",
              "Heselo billiards from {billiards} {currency}/month — table schedule, session, bar and cash shift.",
            ],
          },
          {
            id: "faq-section",
            title: "FAQ overview",
            paragraphs: [
              "Detailed answers below.",
            ],
          },
        ],
        faq: [
          {
            q: "How many tables to start?",
            a: "4–6 pool tables is a balanced start: queues at peak, manageable daytime gaps. Snooker can pilot as 1–2 tables.",
          },
          {
            q: "What hourly rate?",
            a: "Benchmark locally against table quality and fixed costs. Test day/evening split in month one; avoid constant price churn.",
          },
          {
            q: "Can we skip formal booking?",
            a: "Possible for tiny venues; with more tables phone bookings get lost — use a calendar in software.",
          },
          {
            q: "Is a bar required?",
            a: "No, but it raises average check. Drinks on the session bill prevent night-shift surprises.",
          },
          {
            q: "When is software needed?",
            a: "Two tables, one owner — paper works. Four+ tables, shifts and bar — you need session and shift tracking.",
          },
          {
            q: "Heselo pricing for billiards?",
            a: "Start plan from {billiards} {currency}/month; Standard/Pro as tables and bookings grow. Demo shows booking → session → bar.",
          },
        ],
        ctaTitle: "Demo for your billiards club",
        ctaBody: "Share table count and hours — we show booking, session and cash shift.",
      },
      ru: {
        shortTitle: "Открыть бильярдный клуб",
        h1: "Как открыть бильярдный клуб: расходы, столы, тарифы",
        seoTitle: "Как открыть бильярдный клуб: расходы, столы, тарифы | Heselo",
        seoDescription: "Открытие бильярдного клуба: формат pool/русский/snooker, площадь на стол, оборудование, бюджет, почасовая тарификация и пик, бронь стола, бар, учёт времени и смена.",
        keywords: [
          "как открыть бильярдный клуб",
          "расходы бильярдного клуба",
          "тариф бильярд час",
          "бильярдный клуб бизнес план",
          "бронь бильярдного стола",
        ],
        intro: "Бильярдный клуб начинается с столов и света, а зарабатывает на проданных столо-часах. Формат, тарификация в пик и бронь без потерь напрямую влияют на выручку. Материал для планирования открытия в Баку или другом городе СНГ; юридические нюансы уточняйте локально.",
        sections: [
          {
            id: "format",
            title: "Формат: pool, русский бильярд, snooker",
            paragraphs: [
              "Pool — самый массовый формат; русский бильярд и snooker требуют отдельной зоны и часто более высокого тарифа за столо-час.",
            ],
            bullets: [
              "Pool (8/9 шар) — широкая аудитория",
              "Русский бильярд — крупный стол",
              "Snooker — длинный стол, мало мест, премиум-тариф",
            ],
          },
          {
            id: "space",
            title: "Площадь на стол",
            paragraphs: [
              "Нужен замах кия и проходы — для pool часто закладывают 25–35 м² на стол с учётом проходов.",
            ],
            bullets: [
              "Между столами 1,2–1,5 м прохода",
              "Свет над игровым полем",
              "Шумоизоляция при жилых соседях",
            ],
          },
          {
            id: "equipment",
            title: "Оборудование и бюджет",
            paragraphs: [
              "Качество сукна и шаров удерживает игроков; запасные ки и наборы шаров обязательны. Типичный старт — 4–6 столов pool.",
            ],
            bullets: [
              "Столы, свет, шары, ки",
              "Табло или экран учёта времени",
              "Бар: холодильник, кофе",
              "Ресепшн: планшет, терминал",
            ],
          },
          {
            id: "pricing",
            title: "Почасовой тариф и пик",
            paragraphs: [
              "Сверяйтесь с клубами района, уровнем столов и арендой. Вечер и выходные — пик; дневная скидка заполняет простой.",
            ],
            bullets: [
              "День / вечер",
              "Наценка в выходные",
              "Пакеты 2–3 часа",
              "Турнирные вечера",
            ],
          },
          {
            id: "booking",
            title: "Бронь стола",
            paragraphs: [
              "Потерянная телефонная запись — пустой стол. В системе: стол, время, имя; по приходу бронь переходит в сеанс.",
            ],
          },
          {
            id: "bar-shifts",
            title: "Бар, учёт времени и смена",
            paragraphs: [
              "Бар в счёт сеанса за столом — касса сходится. Открытие/закрытие смены и время каждого стола фиксируются отдельно.",
              "Heselo для бильярда от {billiards} {currency}/мес — карта столов, сеанс, бар, касса.",
            ],
          },
          {
            id: "faq-section",
            title: "Кратко о частых вопросах",
            paragraphs: [
              "Подробные ответы в блоке FAQ ниже.",
            ],
          },
        ],
        faq: [
          {
            q: "С скольких столов начать?",
            a: "4–6 столов pool — сбалансированный старт: очередь в пик, дневные дыры управляемы. Snooker можно как 1–2 стола пилотом.",
          },
          {
            q: "Какой тариф за час?",
            a: "Ориентир — локальный рынок, класс стола и фиксированные расходы. Первый месяц проверьте день/вечер; не меняйте цены каждую неделю.",
          },
          {
            q: "Можно без брони?",
            a: "На 1–2 столах иногда да; при росте зала телефонные записи теряются — нужен календарь в программе.",
          },
          {
            q: "Бар обязателен?",
            a: "Нет, но поднимает средний чек. Напитки в счёт сеанса — меньше сюрпризов на закрытии смены.",
          },
          {
            q: "Когда нужна программа?",
            a: "Два стола и один владелец — блокнот. Четыре+ стола, смены, бар — нужны сеанс и смена в одной системе.",
          },
          {
            q: "Сколько стоит Heselo для бильярда?",
            a: "Тариф «Старт» от {billiards} {currency}/мес; «Стандарт» и «Про» при росте столов и брони. В демо — бронь → сеанс → бар.",
          },
        ],
        ctaTitle: "Демо для бильярдного клуба",
        ctaBody: "Напишите число столов и график — покажем бронь, сеанс и закрытие смены.",
      },
    },
  },  {
    slug: "club-revenue-control",
    relatedSolutions: ["gaming", "pos", "karaoke", "billiards"],
    copy: {
      az: {
        shortTitle: "Gəlir nəzarəti",
        h1: "Oyun klubunda gəlir və administratoru necə nəzarət etmək olar",
        seoTitle: "Oyun klubunda gəlir və administrator nəzarəti | Heselo",
        seoDescription: "Praktik bələdçi: itki ssenariləri, növbə açılışı/bağlanışı, əməliyyat jurnalı, endirim hüquqları, sahibkar hesabatları — itkiyə yox, prosesə fokus.",
        keywords: [
          "oyun klubu gəlir nəzarəti",
          "administrator kassa",
          "klub itkiləri",
          "növbə hesabatı",
          "kassa nəzarəti klub",
        ],
        intro: "Gəlir fərqi həmişə oğurluq demək deyil: səhv endirim, bağlanmamış sessiya və barın ayrı qeydə düşməsi də kassanı salır. Məqsəd işçini günahlandırmaq yox, şəffaf proses qurmaqdır.",
        sections: [
          {
            id: "loss-patterns",
            title: "Tipik itki ssenariləri",
            paragraphs: [
              "Çox hallar qəsdən yox, boşluqlardan yaranır: bron sistemdə yoxdur, uzatma pulsuz qalır, dost endirimi qeyd olunmur, bar nağd ayrıca cibə gedir.",
            ],
            bullets: [
              "Başlamayan / bitməyən sessiya",
              "Qeydsiz endirim və pulsuz uzatma",
              "Bar satışı sessiyadan kənar",
              "Növbə bağlanmadan nağd çıxış",
            ],
          },
          {
            id: "shift",
            title: "Növbənin açılışı və bağlanışı",
            paragraphs: [
              "Hər növbə açılış nağdı, kart dönüşü və bağlanış sayımı ilə bitməlidir. Fərq izah edilmirsə, səbəb prosesdədir.",
            ],
            bullets: [
              "Açılış nağdı və məsul şəxs",
              "Gün ərzində nağd çıxış qaydası",
              "Bağlanış: nağd + terminal + fərq",
            ],
          },
          {
            id: "action-log",
            title: "Əməliyyat jurnalı",
            paragraphs: [
              "Endirim, sessiya ləğvi, vaxt düzəlişi, kassa açma — hamısı jurnalda görünməlidir. Sahibkar həftəlik nəzarət edir, gündəlik mikro-idarəetmə deyil.",
            ],
          },
          {
            id: "bar-session",
            title: "Bar sessiya hesabında",
            paragraphs: [
              "İçki və qəlyanaltı eyni sessiyaya yazılanda orta çek və kassa uyğun gəlir. Ayrı qeyd — admin üçün cazibə yaradır.",
            ],
          },
          {
            id: "discounts-rights",
            title: "Endirimlər və hüquqlar",
            paragraphs: [
              "Endirim faizi rollar üzrə məhdudlaşdırın; səbəb sahəsi məcburi olsun. “Dost endirimi” limitsiz olmamalıdır.",
            ],
          },
          {
            id: "owner-reports",
            title: "Sahibkar hesabatları",
            paragraphs: [
              "Stansiya/otaq doluluğu, orta sessiya müddəti, bar payı, endirim həcmi — həftəlik trend. Anomaliya: bir admin həmişə yüksək endirim, gecə növbəsində kassa fərqi.",
            ],
          },
          {
            id: "heselo",
            title: "Heselo nə kömək edir?",
            paragraphs: [
              "Bron → sessiya → bar → növbə bir axında; jurnal və hesabat sahibkar panelində. Oyun klubu {gaming} {currency}/aydan.",
            ],
          },
        ],
        faq: [
          {
            q: "Kassa niyə həmişə az gəlir?",
            a: "Sessiya bitməyib, bar ayrıca, endirim qeydsiz və ya terminal gec yazılıb — əvvəl proses yoxlayın, sonra insan faktoru.",
          },
          {
            q: "Gecə növbəsi risklidirmi?",
            a: "Yüksək nağd və yorğunluq səhv artırır; gecə eyni qaydalar: jurnal, bağlanış sayımı, kamera (hüquqi cəhətdən yerli qaydalar).",
          },
          {
            q: "Endirim limiti neçə faiz?",
            a: "Siz təyin edin; məsələn 10% admin, 20% menecer. Limiti sistemdə saxlayın.",
          },
          {
            q: "Oğurluq nümunələrini necə görək?",
            a: "Təkrarlanan gecə fərqi, eyni müştəriyə limitsiz endirim, sessiya olmadan bar satışı — hesabatda pattern axtarın.",
          },
          {
            q: "Excel kifayət edirmi?",
            a: "Kiçik həcmdə bəli; sessiya sayı artanda Excel səhvə meyillidir və jurnal yoxdur.",
          },
          {
            q: "Heselo jurnal verirmi?",
            a: "Bəli — endirim, sessiya və kassa əməliyyatları izlənir; demo ilə göstəririk.",
          },
        ],
        ctaTitle: "Gəlir nəzarəti demo",
        ctaBody: "Klub tipinizi və növbə modelinizi yazın — jurnal və hesabatı göstəririk.",
      },
      en: {
        shortTitle: "Revenue control",
        h1: "How to control revenue and front-desk staff in a gaming club",
        seoTitle: "Revenue and Admin Control in a Gaming Club | Heselo",
        seoDescription: "Practical guide: common loss patterns, shift open/close, action log, bar on session bill, discount rights, owner reports — process, not blame.",
        keywords: [
          "gaming club revenue control",
          "cash shift gaming lounge",
          "club shrinkage",
          "admin discount audit",
          "session bar billing",
        ],
        intro: "A cash gap is not always theft: unrecorded discounts, open sessions and bar rung up separately all drag revenue down. The goal is transparent process, not accusing staff.",
        sections: [
          {
            id: "loss-patterns",
            title: "Typical loss patterns",
            paragraphs: [
              "Often gaps, not malice: booking not in system, free extension, mate discount without note, bar cash on the side.",
            ],
            bullets: [
              "Sessions never started or closed",
              "Unlogged discounts and free time",
              "Bar off session bill",
              "Cash out before shift close",
            ],
          },
          {
            id: "shift",
            title: "Shift open and close",
            paragraphs: [
              "Every shift starts with opening float and ends with counted cash, card turnover and explained variance.",
            ],
            bullets: [
              "Opening float and responsible person",
              "Rules for cash payouts",
              "Close: cash + terminal + variance",
            ],
          },
          {
            id: "action-log",
            title: "Action log",
            paragraphs: [
              "Discounts, voids, time edits, drawer opens should appear in a log. Owners review weekly trends, not micromanage hourly.",
            ],
          },
          {
            id: "bar-session",
            title: "Bar on the session bill",
            paragraphs: [
              "When drinks and snacks sit on the same session, average check and till align. Separate tickets tempt shortcuts.",
            ],
          },
          {
            id: "discounts-rights",
            title: "Discounts and permissions",
            paragraphs: [
              "Cap discount by role; require a reason field. “Friends rate” should not be unlimited.",
            ],
          },
          {
            id: "owner-reports",
            title: "Owner reports",
            paragraphs: [
              "Utilisation, average session length, bar share, discount volume — weekly. Anomalies: one admin always high discount, night shift variance.",
            ],
          },
          {
            id: "heselo",
            title: "How Heselo helps",
            paragraphs: [
              "Booking → session → bar → shift in one flow; log and reports in owner view. Gaming from {gaming} {currency}/month.",
            ],
          },
        ],
        faq: [
          {
            q: "Why is the till always short?",
            a: "Check open sessions, bar rung separately, unlogged discounts and delayed card batches before assuming theft.",
          },
          {
            q: "Is night shift riskier?",
            a: "More cash and fatigue increase mistakes; same rules: log, close count, CCTV per local law.",
          },
          {
            q: "What discount cap?",
            a: "You set it — e.g. 10% front desk, 20% manager — enforce in software.",
          },
          {
            q: "How to spot theft patterns?",
            a: "Repeating night variance, unlimited discounts to same name, bar sales without session — look for patterns in reports.",
          },
          {
            q: "Is Excel enough?",
            a: "For tiny volume maybe; as sessions grow Excel errors and no audit trail hurt.",
          },
          {
            q: "Does Heselo log actions?",
            a: "Yes — discounts, sessions and till events are tracked; we show this in demo.",
          },
        ],
        ctaTitle: "Revenue control demo",
        ctaBody: "Tell us venue type and shift model — we show log and reports.",
      },
      ru: {
        shortTitle: "Контроль выручки",
        h1: "Как контролировать выручку и администратора в игровом клубе",
        seoTitle: "Как контролировать выручку и администратора в игровом клубе | Heselo",
        seoDescription: "Практично и без обвинений: типичные схемы потерь, открытие/закрытие смены, журнал действий, бар в счёт сеанса, права на скидки, отчёты владельца.",
        keywords: [
          "контроль выручки игровой клуб",
          "касса администратора",
          "смена игровой клуб",
          "бар в счёт сеанса",
          "скидки администратора",
        ],
        intro: "Разрыв по кассе — не всегда хищение: незакрытый сеанс, скидка без причины и бар отдельным чеком тоже «съедают» выручку. Задача — прозрачный процесс, а не поиск виноватого.",
        sections: [
          {
            id: "loss-patterns",
            title: "Типичные схемы потерь",
            paragraphs: [
              "Чаще это дыры в процессе: брони нет в системе, продление «за дружбу», скидка без записи, бар мимо сеанса.",
            ],
            bullets: [
              "Сеанс не начат или не закрыт",
              "Скидки и бесплатное время без журнала",
              "Бар не в счёт сеанса",
              "Выдача наличных до закрытия смены",
            ],
          },
          {
            id: "shift",
            title: "Открытие и закрытие смены",
            paragraphs: [
              "Смена начинается с размена и ответственного, заканчивается пересчётом наличных, эквайринга и объяснимым расхождением.",
            ],
            bullets: [
              "Размен и кассир смены",
              "Правила выдачи из кассы",
              "Z-сводка: нал + терминал + разница",
            ],
          },
          {
            id: "action-log",
            title: "Журнал действий",
            paragraphs: [
              "Скидка, отмена сеанса, правка времени, вскрытие кассы — в журнале. Владелец смотрит тренды раз в неделю, не стоит над душой каждый час.",
            ],
          },
          {
            id: "bar-session",
            title: "Бар в счёт сеанса",
            paragraphs: [
              "Когда напитки и снеки идут в тот же сеанс, средний чек и касса сходятся. Отдельный чек — соблазн для серых схем.",
            ],
          },
          {
            id: "discounts-rights",
            title: "Скидки и права",
            paragraphs: [
              "Лимит скидки по ролям; поле «причина» обязательно. «Скидка друзьям» без потолка — плохая идея.",
            ],
          },
          {
            id: "owner-reports",
            title: "Отчёты владельца",
            paragraphs: [
              "Загрузка станций, длина сеанса, доля бара, объём скидок — по неделям. Аномалия: один админ всегда с большими скидками, ночная смена с расхождением.",
            ],
          },
          {
            id: "heselo",
            title: "Как помогает Heselo",
            paragraphs: [
              "Бронь → сеанс → бар в счёт сеанса → закрытие смены; журнал в панели. Игровой клуб от {gaming} {currency}/мес.",
            ],
          },
        ],
        faq: [
          {
            q: "Почему касса постоянно не сходится?",
            a: "Сначала проверьте незакрытые сеансы, бар отдельным чеком, скидки без причины и задержку эквайринга — потом человеческий фактор.",
          },
          {
            q: "Ночная смена опаснее?",
            a: "Больше наличных и усталость — больше ошибок; те же правила: журнал, закрытие, камеры по местным нормам.",
          },
          {
            q: "Какой лимит скидки?",
            a: "Задаёте вы: например 10% админ, 20% менеджер — закрепите в программе.",
          },
          {
            q: "Как заметить схемы хищений?",
            a: "Повторяющееся расхождение в одну смену, одно и то же имя со скидками, бар без сеанса — ищите паттерны в отчётах.",
          },
          {
            q: "Хватит Excel?",
            a: "На малом объёме иногда да; при росте сеансов Excel ошибается и нет аудита.",
          },
          {
            q: "Есть ли журнал в Heselo?",
            a: "Да — скидки, сеансы и касса; покажем на демо.",
          },
        ],
        ctaTitle: "Демо контроля выручки",
        ctaBody: "Напишите тип клуба и модель смен — покажем журнал и отчёты.",
      },
    },
  },  {
    slug: "ps-club-tariffs",
    relatedSolutions: ["gaming", "pos"],
    copy: {
      az: {
        shortTitle: "PS klub tarifləri",
        h1: "PS klub tariflərini necə qurmaq olar: saat, paket, gecə",
        seoTitle: "PS klub tarifləri — saat, paket, gecə | Heselo",
        seoDescription: "Saatlıq vs paket, pik / qeyri-pik, gecə tarifi, VIP kabin, doluluq və zərərsizlik, ümumi səhvlər; tarif kalkulyator linki.",
        keywords: [
          "ps klub tarifi",
          "playstation saat qiyməti",
          "ps klub gecə tarifi",
          "oyun klubu paket tarif",
          "ps klub qiymət",
        ],
        intro: "Tarif PS klubunun gəlirini birbaşa müəyyən edir: çox ucuz — doluluq artır, amma saat başına gəlir düşür; çox bahalı — boş stansiya. Saat, paket və gecə tarifini eyni sistemdə saxlamaq vacibdir.",
        sections: [
          {
            id: "hourly-vs-packages",
            title: "Saatlıq vs paket",
            paragraphs: [
              "Saatlıq sadədir; 3 və 5 saatlıq paket boş gündüz saatlarını doldurur. Paket qiyməti saatlıqdan aşağı olmalı, amma orta sessiya müddətini artırmalıdır.",
            ],
          },
          {
            id: "peak-offpeak",
            title: "Pik və qeyri-pik",
            paragraphs: [
              "Axşam və həftə sonu pikdir. Gündüz endirim tələbə auditoriyasını cəlb edir; tarifləri paneldə ayrıca saxlayın.",
            ],
            bullets: [
              "B.e.–cümə gündüz / axşam",
              "Şənbə–bazar",
              "Bayram günləri",
            ],
          },
          {
            id: "night",
            title: "Gecə tarifi",
            paragraphs: [
              "Gecə paketi (məs. 00:00–08:00) uzun sessiya satır; admin yorğunluğu və təhlükəsizlik qaydalarını nəzərə alın.",
            ],
          },
          {
            id: "vip",
            title: "VIP kabin",
            paragraphs: [
              "Qapalı otaq və ya premium stansiya ümumi zaldan 20–40% yüksək tarif ala bilər; ayrıca bron cədvəli lazımdır.",
            ],
          },
          {
            id: "load-breakeven",
            title: "Doluluq və zərərsizlik",
            paragraphs: [
              "Stansiya-saat satışını aylıq sabit xərclərə bölün — hədəf doluluq faizini görün. Tarif kalkulyator: /ru/tools/tariff-calculator/ (öz rəqəmlərinizlə).",
            ],
          },
          {
            id: "mistakes",
            title: "Ümumi səhvlər",
            paragraphs: [
              "Hər həftə qiymət dəyişmək, paketi sistemdə yaratmamaq, endirimi qeydsiz vermək, VIP-i eyni tarifdə saxlamaq.",
            ],
          },
          {
            id: "software",
            title: "Tarifləri sistemdə saxlamaq",
            paragraphs: [
              "Admin əllə hesablamaq əvəzinə tarif qaydaları proqramda olmalıdır. Heselo {gaming} {currency}/aydan — seans, paket və gecə tarifi.",
            ],
          },
        ],
        faq: [
          {
            q: "Saatlıq tarif neçə qoyum?",
            a: "Yerli bazar + xərclər; ilk ay A/B sınayın. Kalkulyatorla sabit xərci stansiya-saatə bölün.",
          },
          {
            q: "Paket endirimi neçə faiz?",
            a: "Adətən saatlıqdan 10–25% aşağı; çox agresiv paket orta gəliri salır.",
          },
          {
            q: "Gecə paketi təhlükəsizdirmi?",
            a: "Qaydalar, kamera və minimum yaş limiti ilə; uzun sessiyaları sistemdə izləyin.",
          },
          {
            q: "VIP nə qədər bahalı?",
            a: "Bazar reaksiyasına görə; 20–40% premium tipik sınama diapazonudur.",
          },
          {
            q: "Tarif kalkulyator haradadır?",
            a: "/ru/tools/tariff-calculator/ — kirayə, maaş və doluluqla sınaq.",
          },
          {
            q: "Heselo neçə tarif saxlayır?",
            a: "Saat, paket, gecə, VIP — rol və stansiya üzrə; demoda göstəririk.",
          },
        ],
        ctaTitle: "PS tarif demo",
        ctaBody: "Stansiya sayını və mövcud qiymətlərinizi yazın — tarif qaydalarını paneldə qururuq.",
      },
      en: {
        shortTitle: "PS club pricing",
        h1: "How to set PS club rates: hourly, packages, night",
        seoTitle: "PS Club Rates — Hourly, Packages, Night | Heselo",
        seoDescription: "Hourly vs packages, peak/off-peak, night rate, VIP booths, load and break-even, common mistakes; link to tariff calculator.",
        keywords: [
          "ps club pricing",
          "playstation hourly rate",
          "gaming lounge night package",
          "console club tariffs",
          "ps club break even",
        ],
        intro: "Pricing defines PS club revenue: too cheap fills seats but cuts hourly yield; too expensive leaves stations idle. Keep hourly, packages and night rules in one system.",
        sections: [
          {
            id: "hourly-vs-packages",
            title: "Hourly vs packages",
            paragraphs: [
              "Hourly is simple; 3- and 5-hour packs fill quiet daytime slots. Pack price should be below hourly but extend average session length.",
            ],
          },
          {
            id: "peak-offpeak",
            title: "Peak and off-peak",
            paragraphs: [
              "Evenings and weekends peak. Daytime discounts attract students — store rules separately in the panel.",
            ],
            bullets: [
              "Weekday day / evening",
              "Weekend",
              "Holiday overrides",
            ],
          },
          {
            id: "night",
            title: "Night rate",
            paragraphs: [
              "Overnight blocks (e.g. 00:00–08:00) sell long sessions; plan staff fatigue and safety rules.",
            ],
          },
          {
            id: "vip",
            title: "VIP booths",
            paragraphs: [
              "Private room or premium station often carries 20–40% premium; needs its own booking grid.",
            ],
          },
          {
            id: "load-breakeven",
            title: "Load and break-even",
            paragraphs: [
              "Divide fixed costs by station-hours sold — target utilisation. Try /ru/tools/tariff-calculator/ with your numbers.",
            ],
          },
          {
            id: "mistakes",
            title: "Common mistakes",
            paragraphs: [
              "Weekly price churn, packages not in POS, unlogged discounts, VIP at hall rate.",
            ],
          },
          {
            id: "software",
            title: "Rates in software",
            paragraphs: [
              "Rules should live in the system, not in admin mental math. Heselo from {gaming} {currency}/month — session, pack and night tariffs.",
            ],
          },
        ],
        faq: [
          {
            q: "What hourly rate?",
            a: "Local market plus costs; test month one. Use calculator to split fixed cost per station-hour.",
          },
          {
            q: "Package discount percent?",
            a: "Often 10–25% below hourly; too deep cuts yield.",
          },
          {
            q: "Is overnight safe?",
            a: "With house rules, CCTV and age limits; track long sessions in software.",
          },
          {
            q: "VIP premium?",
            a: "Market reaction; 20–40% trial band is common.",
          },
          {
            q: "Where is the calculator?",
            a: "/ru/tools/tariff-calculator/",
          },
          {
            q: "How many tiers in Heselo?",
            a: "Hourly, packs, night, VIP by station/role — shown in demo.",
          },
        ],
        ctaTitle: "PS pricing demo",
        ctaBody: "Share station count and current prices — we configure rules in the panel.",
      },
      ru: {
        shortTitle: "Тарифы PS-клуба",
        h1: "Как настроить тарифы PS-клуба: час, пакеты, ночь",
        seoTitle: "Как настроить тарифы PS-клуба: час, пакеты, ночь | Heselo",
        seoDescription: "Почасовая тарификация и пакеты, пик/непик, ночной тариф, VIP-кабинки, загрузка и безубыточность, типичные ошибки; калькулятор /ru/tools/tariff-calculator/.",
        keywords: [
          "тарифы ps клуба",
          "цена час playstation клуб",
          "ночной тариф ps клуб",
          "пакет ps клуб",
          "тарификация игровой клуб",
        ],
        intro: "Тарификация задаёт выручку PS-клуба: слишком дёшево — загрузка есть, но падает выручка с часа; слишком дорого — пустые станции. Час, пакеты и ночь должны жить в одной системе учёта сеансов — иначе администратор считает вручную, а владелец не видит, какой тариф реально продаётся.",
        sections: [
          {
            id: "hourly-vs-packages",
            title: "Час vs пакеты",
            paragraphs: [
              "Почасовой тариф прост для гостя; пакеты 3 и 5 часов заполняют дневной простой. Цена пакета ниже часа, но удлиняет средний сеанс.",
              "На демо проверьте, что пакет списывается одним правилом и что при досрочном уходе сумма не «ломается» в Excel. Гость должен понимать цену до старта; администратор — видеть тот же тариф в активном сеансе.",
            ],
          },
          {
            id: "peak-offpeak",
            title: "Пик и непик",
            paragraphs: [
              "Вечер и выходные — пик. Дневная скидка тянет студентов; правила храните отдельно в панели.",
              "Не смешивайте пик и непик в одной «средней» цене: отчёт по выручке с часа станет нечитаемым. Лучше две–три сетки с понятными окнами времени.",
            ],
            bullets: [
              "Будни день / вечер",
              "Выходные",
              "Праздники",
            ],
          },
          {
            id: "night",
            title: "Ночной тариф",
            paragraphs: [
              "Ночной блок (например 00:00–08:00) продаёт длинный сеанс; учитывайте усталость смены и правила безопасности.",
              "Фиксируйте в панели, с какого часа действует ночь и нужен ли депозит. Иначе смена спорит о цене в 00:30, а гость ссылается на переписку в мессенджере.",
            ],
          },
          {
            id: "vip",
            title: "VIP-кабинки",
            paragraphs: [
              "Отдельная кабинка или премиум-станция — часто +20–40% к залу; нужна отдельная сетка бронирования.",
              "VIP без отдельного ресурса в расписании быстро «съедает» обычные станции: бронь ставят устно, а в зале путаница. Держите VIP как отдельную станцию или комнату.",
            ],
          },
          {
            id: "load-breakeven",
            title: "Загрузка и безубыточность",
            paragraphs: [
              "Делите фиксированные расходы на проданные станко-часы — видите целевую загрузку. Калькулятор: /ru/tools/tariff-calculator/.",
              "Считайте не только пик пятницы: среднее по месяцу ближе к реальности. Если безубыточность требует 80% загрузки 30 дней подряд — тариф или расходы стоит пересмотреть до расширения зала.",
            ],
          },
          {
            id: "mistakes",
            title: "Частые ошибки",
            paragraphs: [
              "Менять цены каждую неделю, не завести пакет в кассе, скидка без причины, VIP по цене зала.",
              "Ещё одна ошибка — тарификация только в голове старшего администратора. При смене сотрудника правила теряются; гости получают разные цены на одну и ту же кабинку.",
            ],
          },
          {
            id: "software",
            title: "Тарификация в программе",
            paragraphs: [
              "Правила — в системе, не в голове админа. Heselo от {gaming} {currency}/мес: сеанс, пакет, ночь.",
              "Сравнение моделей абонентской платы «за консоль» и «за клуб» — в инструменте /ru/tools/pricing-model/; чек-лист функций программы — в статье про выбор софта для PS-клуба.",
            ],
          },
        ],
        faq: [
          {
            q: "С какой почасовой цены начать?",
            a: "Ориентир — локальный рынок и расходы; первый месяц тест. Калькулятор поможет разложить фикс на станко-час.",
          },
          {
            q: "Скидка в пакете?",
            a: "Обычно 10–25% к часу; слишком глубокий пакет бьёт по выручке с часа.",
          },
          {
            q: "Ночь безопасна?",
            a: "С правилами, камерами и возрастным контролем; длинные сеансы видны в системе.",
          },
          {
            q: "Наценка VIP?",
            a: "По реакции рынка; часто пробуют +20–40%.",
          },
          {
            q: "Где калькулятор тарифов?",
            a: "/ru/tools/tariff-calculator/",
          },
          {
            q: "Сколько тарифов в Heselo?",
            a: "Час, пакеты, ночь, VIP по станциям — покажем на демо.",
          },
        ],
        ctaTitle: "Демо тарификации PS",
        ctaBody: "Напишите число станций и текущие цены — настроим правила в панели.",
      },
    },
  },  {
    slug: "how-to-open-anticafe",
    relatedSolutions: ["antikafe", "reservations", "pos"],
    copy: {
      az: {
        shortTitle: "Antikafe açmaq",
        h1: "Antikafe necə açılır: məkan, tariflər, vaxt uçotu",
        seoTitle: "Antikafe necə açılır — məkan, tariflər, vaxt uçotu | Heselo",
        seoDescription: "Format, lokasiya, mebel, dəqiqə/saat/stop-çek tarifləri, qəlyanaltı, proqram ilk gündən, 30 günlük checklist; icarə hesablaması linki.",
        keywords: [
          "antikafe açmaq",
          "antikafe tarifi",
          "antikafe biznesi",
          "antikafe vaxt uçotu",
          "antikafe mebel",
        ],
        intro: "Antikafedə qonaq vaxta görə ödəyir — tarif və uçot biznesin mərkəzidir. Açılışda mebel və atmosfer vacibdir, amma səhv tarif və dəftər uçotu gəliri tez əriyir.",
        sections: [
          {
            id: "format",
            title: "Format və atmosfer",
            paragraphs: [
              "Oyun masası, konsol küncü, iş masası, kitab rəfi — auditoriyanı seçin. Tələbə zonası səssiz, oyun zonası ayrı ola bilər.",
            ],
          },
          {
            id: "location",
            title: "Lokasiya",
            paragraphs: [
              "Universitet və metro yaxınlığı, 2–3-cü mərtəbə qəbul oluna bilər — lift və yanğın yolu yoxlayın.",
            ],
          },
          {
            id: "furniture",
            title: "Mebel və avadanlıq",
            paragraphs: [
              "Rahat oturacaq, rozetkalar, Wi‑Fi, printer/ skaner istəyə görə. Qəlyanaltı üçün kiçik mətbəx zonası.",
            ],
          },
          {
            id: "tariffs",
            title: "Dəqiqə, saat, stop-çek",
            paragraphs: [
              "Dəqiqəlik qısa vizit üçün; saatlıq sadədir; stop-çek uzun qalmanı həvəsləndirir. Tarif qaydaları proqramda olmalıdır.",
            ],
            bullets: [
              "Dəqiqəlik",
              "Saatlıq",
              "Stop-çek (maks. məbləğ)",
              "Tələbə / gündüz tarifi",
            ],
          },
          {
            id: "snacks",
            title: "Qəlyanaltı",
            paragraphs: [
              "Çay və peçenye daxil modelində dəyişən xərci qonaq-saata bölün — anticafe-rent-cost-calculation bələdçisinə baxın.",
            ],
          },
          {
            id: "software-day-one",
            title: "Proqram ilk gündən",
            paragraphs: [
              "Qonaq vaxtını əllə saymaq səhv gətirir. Heselo antikafe {antikafe} {currency}/aydan — vaxt, tarif, növbə; /ru/solutions/antikafe/.",
            ],
          },
          {
            id: "checklist-30",
            title: "30 günlük checklist",
            paragraphs: [
              "Tarif elan et, hər qonağı sistemdə aç, həftəlik qonaq-saat hesabla, Instagram/Google profil, 30-cu gün tarif düzəlişi.",
            ],
            bullets: [
              "Tarif cədvəli görünən yerdə",
              "Növbə bağlanışı hər gün",
              "Boş saatları qeyd et",
              "Qəlyanaltı qalığı həftəlik",
            ],
          },
        ],
        faq: [
          {
            q: "Dəqiqəlik yoxsa saatlıq?",
            a: "Qısa vizitlər çoxdursa dəqiqəlik; sadəlik istəyirsinizsə saatlıq. Stop-çek uzun oturacaqlar üçün.",
          },
          {
            q: "Neçə kvadrat metr?",
            a: "20–40 oturacaq üçün adətən 80–150 m²; zonaları ayırın.",
          },
          {
            q: "İcarə hesablaması haradadır?",
            a: "anticafe-rent-cost-calculation bələdçisi — sabit xərc və qonaq-saat.",
          },
          {
            q: "Proqramsız olarmı?",
            a: "İlk həftə bəlkə; qonaq sayı artanda vaxt uçotu səhv olur.",
          },
          {
            q: "Heselo antikafe üçün?",
            a: "{antikafe} {currency}/aydan — vaxt, tarif, kassa növbəsi.",
          },
          {
            q: "Stop-çek nədir?",
            a: "Müəyyən müddətdən sonra məbləğ artmır — uzun qalma üçün marketinq aləti.",
          },
        ],
        ctaTitle: "Antikafe demo",
        ctaBody: "Oturacaq sayını və tarif modelinizi yazın — vaxt uçotu və növbəni göstəririk.",
      },
      en: {
        shortTitle: "Open an anticafe",
        h1: "How to open an anticafe: space, rates, time tracking",
        seoTitle: "How to Open an Anticafe — Space, Rates, Time Tracking | Heselo",
        seoDescription: "Format, location, furniture, minute/hour/stop-check rates, snacks, software from day one, 30-day checklist; rent calculation guide link.",
        keywords: [
          "how to open anticafe",
          "anticafe pricing",
          "time based cafe business",
          "anticafe furniture",
          "anticafe software",
        ],
        intro: "In an anticafe guests pay for time — pricing and tracking are the core. Atmosphere matters at opening, but wrong rates and paper logs erode revenue fast.",
        sections: [
          {
            id: "format",
            title: "Format and vibe",
            paragraphs: [
              "Board games, console corner, work desks, books — pick an audience. Quiet study vs loud play zones help.",
            ],
          },
          {
            id: "location",
            title: "Location",
            paragraphs: [
              "Near campus and metro; upper floors OK if lift and fire exits work.",
            ],
          },
          {
            id: "furniture",
            title: "Furniture and gear",
            paragraphs: [
              "Comfortable seats, power outlets, Wi‑Fi; small pantry for snacks.",
            ],
          },
          {
            id: "tariffs",
            title: "Minute, hour, stop-check",
            paragraphs: [
              "Per minute for short visits; hourly for simplicity; stop-check caps spend for long stays — rules belong in software.",
            ],
            bullets: [
              "Per minute",
              "Hourly",
              "Stop-check cap",
              "Student / daytime",
            ],
          },
          {
            id: "snacks",
            title: "Snacks",
            paragraphs: [
              "If tea and cookies are included, split variable cost per guest-hour — see anticafe-rent-cost-calculation guide.",
            ],
          },
          {
            id: "software-day-one",
            title: "Software from day one",
            paragraphs: [
              "Manual timers drift. Heselo anticafe from {antikafe} {currency}/month — time, rates, shift; /ru/solutions/antikafe/.",
            ],
          },
          {
            id: "checklist-30",
            title: "30-day checklist",
            paragraphs: [
              "Publish rates, open every guest in system, weekly guest-hours, social profiles, day-30 rate tweak.",
            ],
            bullets: [
              "Visible rate board",
              "Daily shift close",
              "Log quiet hours",
              "Weekly snack stocktake",
            ],
          },
        ],
        faq: [
          {
            q: "Minute or hourly?",
            a: "Minute if many short visits; hourly for simplicity; stop-check for long stays.",
          },
          {
            q: "How much space?",
            a: "Often 80–150 m² for 20–40 seats; zone by noise.",
          },
          {
            q: "Rent calculation guide?",
            a: "Guide slug anticafe-rent-cost-calculation — fixed costs and guest-hours.",
          },
          {
            q: "Without software?",
            a: "Maybe week one; errors grow with guest count.",
          },
          {
            q: "Heselo for anticafe?",
            a: "From {antikafe} {currency}/month — time, tariffs, cash shift.",
          },
          {
            q: "What is stop-check?",
            a: "Charge stops growing after a set time — marketing for long stays.",
          },
        ],
        ctaTitle: "Anticafe demo",
        ctaBody: "Share seat count and pricing model — we show time tracking and shift.",
      },
      ru: {
        shortTitle: "Открыть антикафе",
        h1: "Как открыть антикафе: помещение, тарифы, учёт времени",
        seoTitle: "Как открыть антикафе: помещение, тарифы, учёт времени | Heselo",
        seoDescription: "Формат, локация, мебель, тарификация поминутно/почасово/stop-check, снеки, программа с первого дня и чек-лист на 30 дней. Расчёт аренды — в отдельной статье.",
        keywords: [
          "как открыть антикафе",
          "тариф антикафе",
          "антикафе бизнес",
          "учёт времени антикафе",
          "программа для антикафе",
        ],
        intro: "В антикафе гость платит за время — тарификация и учёт в центре модели. Атмосфера важна при открытии, но неверные тарифы и блокнот быстро съедают выручку. Ниже — формат, локация, сетка тарифов и почему учёт времени лучше запускать с первого дня, а не «когда вырастем». Heselo создан в Баку, подходит для удалённого управления в СНГ.",
        sections: [
          {
            id: "format",
            title: "Формат",
            paragraphs: [
              "Настольные игры, консольный уголок, coworking-столы, книги — выберите аудиторию. Тихая зона и игровая зона раздельно.",
              "Смешанный формат работает, если ресурсы в расписании разные: стол coworking и консольная станция не должны считаться одной «средней» минутой. Иначе отчёт по выручке с места становится бессмысленным.",
            ],
          },
          {
            id: "location",
            title: "Локация",
            paragraphs: [
              "У кампуса и метро; верхние этажи возможны при лифте и путях эвакуации.",
              "Проверьте шум для соседей и режим работы: ночные сеансы без вентиляции и туалета быстро портят отзывы, даже если тариф «вкусный».",
            ],
          },
          {
            id: "furniture",
            title: "Мебель",
            paragraphs: [
              "Удобные кресла, розетки, Wi‑Fi; маленькая зона для чая и снеков.",
              "Розетки и Wi‑Fi — часть продукта: гость с ноутбуком платит за время только если может работать. Заложите запас розеток в план зала до открытия.",
            ],
          },
          {
            id: "tariffs",
            title: "Поминутно, почасово, stop-check",
            paragraphs: [
              "Поминутно — для коротких визитов; почасово — проще; stop-check ограничивает сумму за длинное пребывание. Правила — в программе.",
              "Вывесите тарифы так же, как они заведены в панели. Расхождение «на сайте одно, в зале другое» ломает доверие быстрее, чем высокая цена.",
            ],
            bullets: [
              "Поминутная тарификация",
              "Почасовая",
              "Stop-check",
              "Студенческий / дневной",
            ],
          },
          {
            id: "snacks",
            title: "Снеки",
            paragraphs: [
              "Если чай и печенье «включены», делите переменную cost на госте-час — см. гайд anticafe-rent-cost-calculation.",
              "Отдельная продажа снеков удобнее для маржи, но тогда бар должен попадать в тот же счёт, что и время — иначе касса и склад расходятся.",
            ],
          },
          {
            id: "software-day-one",
            title: "Программа с первого дня",
            paragraphs: [
              "Ручной таймер ошибается. Heselo для антикафе от {antikafe} {currency}/мес — время, тарификация, смена; /ru/solutions/antikafe/.",
              "С первого дня фиксируйте вход гостя как активный сеанс: так вы сразу видите загрузку и безубыточность, а не восстанавливаете историю из блокнота через месяц.",
            ],
          },
          {
            id: "checklist-30",
            title: "Чек-лист 30 дней",
            paragraphs: [
              "Объявите тарифы, открывайте каждого гостя в системе, считайте госте-часы еженедельно, профили в картах, на 30-й день — правка тарифа.",
              "На 30-й день сравните факт с прогнозом аренды и персонала. Если загрузка ниже плана — сначала правка тарифа и часов работы, потом расширение площади.",
            ],
            bullets: [
              "Тарифы на видном месте",
              "Закрытие смены ежедневно",
              "Учёт пустых часов",
              "Снеки — инвентаризация раз в неделю",
            ],
          },
        ],
        faq: [
          {
            q: "Поминутно или почасово?",
            a: "Поминутно при частых коротких визитах; почасово для простоты; stop-check для длинного stay.",
          },
          {
            q: "Сколько квадратных метров?",
            a: "Часто 80–150 м² на 20–40 мест; разделите по шуму.",
          },
          {
            q: "Где расчёт аренды?",
            a: "Статья anticafe-rent-cost-calculation — фиксированные расходы и госте-часы.",
          },
          {
            q: "Можно без программы?",
            a: "На старте иногда; с ростом потока учёт времени даёт ошибки.",
          },
          {
            q: "Сколько стоит Heselo для антикафе?",
            a: "Тариф «Старт» от {antikafe} {currency}/мес — время, тарификация, касса и смена.",
          },
          {
            q: "Что такое stop-check?",
            a: "После порога времени сумма не растёт — инструмент для длинных визитов.",
          },
        ],
        ctaTitle: "Демо для антикафе",
        ctaBody: "Напишите число мест и модель оплаты — покажем учёт времени и закрытие смены.",
      },
    },
  },
]

export function ruCisGuides(locale: Locale): GuideCopy[] {
  return catalog.map((entry) => ({
    slug: entry.slug as GuideCopy['slug'],
    ...entry.copy[locale],
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    relatedSolutions: entry.relatedSolutions,
  }))
}
