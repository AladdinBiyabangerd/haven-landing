import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-13'
const MODIFIED = '2026-10-13'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'gaming',
  'reservations',
  'pos',
  'inventory',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'PanCafe alternativi',
      h1: 'İnternet/PS kafe proqramı vs klub paneli — PanCafe Pro',
      seoTitle: 'PanCafe alternativi — PanCafe Pro vs Heselo klub paneli | Heselo',
      seoDescription:
        'PanCafe Pro pulsuz internet və PlayStation kafe idarəetməsidir; Heselo bron, canlı sessiya və kassadır. Müqayisə cədvəli və FAQ Azərbaycan, ingilis və rus dillərindədir.',
      keywords: [
        'pancafe alternativ',
        'pancafe alternativi',
        'pan cafe pro alternativ',
        'pancafepro alternativ',
        'internet kafe proqramı',
        'playstation kafe proqramı',
        'ps klub proqramı',
        'Heselo',
      ],
      intro:
        'Bakıda «PanCafe işlədirəm» deyən klublar çoxalır. PanCafe Pro (pancafepro.com) pulsuz, Windows-da quraşdırılan internet və PlayStation kafe proqramıdır: stansiya vaxtı, tarif, kassa/qəlyanaltı və hesabat. Kiçik kafe və PS salonda bu kifayət edə bilər. Öncədən otaq/stansiya bronu, bulud paneli və çox tip məkan (karaoke, bilyard, launj) artanda yerli taymer boşluq buraxır. Bu bələdçi PanCafe Pro kateqoriyasını Heselo ilə müqayisə edir — pulsuz kafe proqramı kifayət edəndə onu saxlamağı tövsiyə edirik.',
      sections: [
        {
          id: 'when-heselo-fits',
          title: 'Heselo sizə nə verir?',
          paragraphs: [
            'Stansiya və otaq vaxtı bronla satılır, uzadılma tez-tez olur, kassa növbəsi və qəlyanaltı anbarı sessiyaya bağlanırsa — Heselo uyğundur. Bulud veb paneldir: kompüterə PanCafe tipli şəbəkə quraşdırması tələb olunmur.',
          ],
          bullets: [
            'Otaq/stansiya təqvimi və öncədən bron',
            'Canlı sessiya, uzadılma, tarif paketləri',
            'Klub növbəsi + sessiya satışı + anbar',
            'AZ / EN / RU, açıq: {low} AZN/aydan',
          ],
        },

        {
          id: 'decision',
          title: 'Əvvəlcə qərar: pulsuz kafe proqramı, yoxsa klub paneli?',
          paragraphs: [
            'PanCafe Pro yerli Windows şəbəkəsində stansiya vaxtı və salon kassasına fokuslanır; Heselo otaq/stansiya bronu və canlı sessiya axınıdır.',
          ],
          bullets: [
            'Gəlişdə boş stansiya, yoxsa öncədən bron lazımdır?',
            'Yalnız internet/PS kafe, yoxsa karaoke/otaq/launj da?',
            'Yerli quraşdırma rahatdır, yoxsa brauzerdə bulud panel?',
          ],
        },

        {
          id: 'when-pancafe-fits',
          title: 'PanCafe Pro nə vaxt qalmalıdır?',
          paragraphs: [
            'Kiçik internet kafedə və ya PlayStation salonda stansiya vaxtı, tarif, qəlyanaltı satışı və hesabat əsas ehtiyacdırsa, PanCafe Pro pulsuz və praktik qala bilər. Azərbaycanda şəbəkə quraşdırma elanlarında adı keçir.',
            'PanCafe-ni pisləmirik: yanlış yerdə abunə paneli almaq da boş xərc ola bilər. Tam PC agent/diskless (IZI/LANGAME) ayrı kateqoriyadır — PanCafe kafe idarəetməsidir, diskless əvəzi deyil.',
          ],
          bullets: [
            'Öncədən bron demək olar ki, yoxdur',
            'Büdcə sıfır / quraşdırma xidməti ilə yetər',
            'Yalnız PC + PS zalı, otaq təqvimi lazım deyil',
            'Operator yerli Windows şəbəkəsinə öyrəşib',
          ],
        },

        {
          id: 'comparison',
          title: 'PanCafe Pro və Heselo — müqayisə',
          paragraphs: [
            'PanCafe Pro rəsmi saytda pulsuz təqdim olunur; quraşdırma xidməti ayrı ola bilər — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'PanCafe Pro', 'Heselo'],
            rows: [
              ['Əsas fokus', 'İnternet/PS kafe stansiya vaxtı', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['Model', 'Windows, yerli şəbəkə (pulsuz)', 'Bulud veb panel (abunə)'],
              ['Rezervasiya', 'Adətən zəif / yox', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Sessiya / tarif stansiyada', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa / anbar', 'Salon kassa + qəlyanaltı', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Proqram pulsuz (quraşdırma ayrı)', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Çoxdil (TR/EN/AR…); AZ quraşdırma elanları', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Kiçik internet/PS kafe, walk-in',
                'Bronlu otaqlı klub, çox tip məkan',
              ],
            ],
          },
        },

        {
          id: 'landscape',
          title: 'PlayStation / internet kafe bazar mənzərəsi',
          paragraphs: [
            'Azərbaycanda PanCafe Pro, Club Timer, Akinsoft və Hasansoft eyni «PS/internet kafe proqramı» axtarışında görünür. PC diskless — IZI/LANGAME; otaq-vaxt paneli — Heselo.',
          ],
          bullets: [
            'PanCafe Pro — pulsuz internet/PS kafe proqramı',
            'Club Timer / Akinsoft / Hasansoft — oxşar taymer-kafe',
            'IZI / LANGAME — PC stansiya / diskless',
            'Heselo — bron, sessiya, kassa, anbar (AZ)',
          ],
        },

        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: ['Eyni «PS klub» adı fərqli sistem tələb edir.'],
          bullets: [
            'Kiçik internet/PS kafe: PanCafe Pro + walk-in — tez-tez kifayət edir',
            'WhatsApp bron + PanCafe: üst-üstə rezervasiya və axşam kassa fərqi',
            'Otaqlı launj / karaoke / bilyard: Heselo',
            'PC zalı + otaqlar: IZI/LANGAME + Heselo (və ya PanCafe yalnız PC/PS zal üçün)',
          ],
        },

        {
          id: 'how-to-switch',
          title: 'PanCafe-dən panelə keçid yoxlama siyahısı',
          paragraphs: [
            'PanCafe yetmirsə, dərhal silməyin — bir həftəsonu pilot paneli sınayın.',
          ],
          bullets: [
            'Stansiya/otaq siyahısı və tarifləri hazırlayın',
            'Bron və ödəniş indi harada qeyd olunur — yazın',
            'Demoda bron → sessiya → məhsul → kassa axınını keçin',
            'Kiçik PS/PC qrupunda PanCafe ehtiyat kimi qala bilər',
            'PC kilid/diskless lazımdırsa IZI/LANGAME ayrıca planlaşdırın',
          ],
        },
      ],
      faq: [
        {
          q: 'PanCafe və PanCafe Pro eyni şeydir?',
          a: 'Bəli — elanlarda və danışıqda «PanCafe» adətən PanCafe Pro internet/PS kafe proqramını bildirir.',
        },
        {
          q: 'Heselo PanCafe-ni əvəz edir?',
          a: 'Eyni kateqoriya deyil. PanCafe Pro yerli kafe/stansiya vaxtı proqramıdır; Heselo bron, canlı sessiya və klub növbəsidir. Pulsuz kafe proqramı kifayət edəndə saxlayın.',
        },
        {
          q: 'PanCafe pulsuzdur?',
          a: 'Rəsmi saytda proqram pulsuz təqdim olunur; Bakıda şəbəkə quraşdırma xidməti ayrı ödənişlə ola bilər — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, saytda açıq; AZ, EN, RU.',
        },
        {
          q: 'Heselo PC stansiyasını kilidləyir?',
          a: 'Xeyr. PC kilid/diskless IZI/LANGAME sahəsidir. Heselo otaq-vaxt və klub kassasına fokuslanır.',
        },
        {
          q: 'Hər ikisini birlikdə işlətmək olar?',
          a: 'Keçid dövründə bəli — qısa pilot üçün PanCafe stansiyada, bron/kassa paneldə qala bilər.',
        },
        {
          q: 'Club Timer / Hasansoft ilə fərqi nədir?',
          a: 'Eyni geniş «PS/internet kafe proqramı» kateqoriyasıdır. Ayrı bələdçilər: Club Timer və Hasansoft alternativləri.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Stansiya və otaqlarınızı nümunə kimi qurub tipik həftəsonu axınını addım-addım yoxlayın.',
        },
      ],
      ctaTitle: 'PlayStation klub axınınızı Heselo-da yoxlayın',
      ctaBody:
        'Demo istəyin: stansiya və otaqlarınızı nümunə kimi qurub rezervasiya, sessiya, kassa və anbarı birlikdə sınayaq.',
    },
    en: {
      shortTitle: 'PanCafe alternative',
      h1: 'Internet/PS café software vs club panel — PanCafe Pro',
      seoTitle: 'PanCafe Alternative — PanCafe Pro vs Heselo Club Panel | Heselo',
      seoDescription:
        'PanCafe Pro is free internet and PlayStation café software; Heselo is booking, live sessions and cash. Comparison table and FAQ in Azerbaijani, English and Russian.',
      keywords: [
        'PanCafe alternative',
        'PanCafe Pro alternative',
        'pancafepro alternative',
        'internet cafe software',
        'playstation cafe software',
        'PS club software',
        'Heselo',
      ],
      intro:
        'More club owners in Baku say they run PanCafe. PanCafe Pro (pancafepro.com) is free Windows software for internet and PlayStation cafés: station time, tariffs, cafeteria/cash and reports. At small scale that can be enough. When advance room/station booking, a cloud panel and multi-venue types (karaoke, billiards, lounge) matter, a local café timer leaves gaps. This guide compares the PanCafe Pro category with Heselo — when free café software is enough, we recommend keeping it.',
      sections: [
        {
          id: 'when-heselo-fits',
          title: 'What does Heselo give you?',
          paragraphs: [
            'If station and room time sell with bookings, extensions are frequent, and shift cash plus snack stock attach to sessions — Heselo fits. It is a cloud web panel: no PanCafe-style local network install is required.',
          ],
          bullets: [
            'Room/station calendar and advance booking',
            'Live sessions, extensions, tariff packages',
            'Club shift + session sales + inventory',
            'AZ / EN / RU, open from {low} AZN/month',
          ],
        },

        {
          id: 'decision',
          title: 'Decide first: free café software or club panel?',
          paragraphs: [
            'PanCafe Pro focuses on station time and floor cash on a local Windows network; Heselo is room/station booking and live session flow.',
          ],
          bullets: [
            'Walk-in empty stations, or advance booking?',
            'Internet/PS café only, or karaoke/rooms/lounge too?',
            'Local Windows install preferred, or browser cloud panel?',
          ],
        },

        {
          id: 'when-pancafe-fits',
          title: 'When should PanCafe Pro stay?',
          paragraphs: [
            'In a small internet café or PlayStation hall, if station time, tariffs, snack sales and reports are the core need, PanCafe Pro can stay free and practical. Install ads in Azerbaijan often mention it.',
            'We do not dismiss PanCafe: buying a subscription panel in the wrong place is wasted spend too. Full PC agent/diskless (IZI/LANGAME) is a separate category — PanCafe is café management, not a diskless replacement.',
          ],
          bullets: [
            'Almost no advance booking',
            'Zero software budget / install service is enough',
            'PC + PS floor only — no room calendar needed',
            'Operators are used to a local Windows network',
          ],
        },

        {
          id: 'comparison',
          title: 'PanCafe Pro vs Heselo — comparison',
          paragraphs: [
            'PanCafe Pro is presented as free on the official site; install services may be separate — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'PanCafe Pro', 'Heselo'],
            rows: [
              ['Core focus', 'Internet/PS café station time', 'Room/station time + club ops'],
              ['Model', 'Windows, local network (free)', 'Cloud web panel (subscription)'],
              ['Booking', 'Usually weak / none', 'Room and station calendar'],
              ['Time billing', 'Session / tariff on station', 'Live session, extension, tariff'],
              ['Cash / stock', 'Floor cash + cafeteria', 'Club shift + session sales'],
              ['Price', 'Software free (install may be paid)', 'Open from {low} AZN/month'],
              ['Languages', 'Multilingual (TR/EN/AR…); AZ install ads', 'AZ, EN, RU'],
              [
                'Best fit',
                'Small internet/PS café, walk-in',
                'Booked room club, multi-type venue',
              ],
            ],
          },
        },

        {
          id: 'landscape',
          title: 'PlayStation / internet café landscape',
          paragraphs: [
            'In Azerbaijan, PanCafe Pro, Club Timer, Akinsoft and Hasansoft appear in the same “PS/internet café software” searches. PC diskless — IZI/LANGAME; room-time panel — Heselo.',
          ],
          bullets: [
            'PanCafe Pro — free internet/PS café software',
            'Club Timer / Akinsoft / Hasansoft — similar timer-café class',
            'IZI / LANGAME — PC station / diskless',
            'Heselo — booking, session, cash, stock (AZ)',
          ],
        },

        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: ['The same “PS club” label needs different systems.'],
          bullets: [
            'Small internet/PS café: PanCafe Pro + walk-in — often enough',
            'WhatsApp booking + PanCafe: double-book and evening cash gaps',
            'Room lounge / karaoke / billiards: Heselo',
            'PC floor + rooms: IZI/LANGAME + Heselo (or PanCafe only for the PC/PS floor)',
          ],
        },

        {
          id: 'how-to-switch',
          title: 'Switch checklist from PanCafe to a panel',
          paragraphs: [
            'If PanCafe is not enough, do not delete it immediately — run a one-weekend panel pilot.',
          ],
          bullets: [
            'Prepare station/room list and tariffs',
            'Write down where bookings and payments are logged today',
            'In the demo: booking → session → product → cash',
            'PanCafe can stay as backup on a small PS/PC group',
            'If PC lock/diskless is needed, plan IZI/LANGAME separately',
          ],
        },
      ],
      faq: [
        {
          q: 'Are PanCafe and PanCafe Pro the same?',
          a: 'Yes — in ads and conversation “PanCafe” usually means PanCafe Pro internet/PS café software.',
        },
        {
          q: 'Does Heselo replace PanCafe?',
          a: 'Different category. PanCafe Pro is local café/station-time software; Heselo is booking, live sessions and club shifts. Keep free café software when it is enough.',
        },
        {
          q: 'Is PanCafe free?',
          a: 'The official site presents the software as free; network install in Baku may be a separate paid service — no invented figures here.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, open on the site; AZ, EN, RU.',
        },
        {
          q: 'Does Heselo lock PC stations?',
          a: 'No. PC lock/diskless is IZI/LANGAME territory. Heselo focuses on room-time and club cash.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes in a transition period — short pilot: PanCafe on stations, booking/cash on the panel.',
        },
        {
          q: 'How does it differ from Club Timer / Hasansoft?',
          a: 'Same broad “PS/internet café software” category. See the Club Timer and Hasansoft alternative guides.',
        },
        {
          q: 'How does the demo work?',
          a: 'Model your stations and rooms and walk through a typical weekend flow step by step.',
        },
      ],
      ctaTitle: 'Try your PlayStation club flow on Heselo',
      ctaBody:
        'Request a demo: we model your stations and rooms and try booking, sessions, cash and inventory together.',
    },
    ru: {
      shortTitle: 'Альтернатива PanCafe',
      h1: 'ПО интернет/PS-кафе vs клубная панель — PanCafe Pro',
      seoTitle: 'Альтернатива PanCafe — PanCafe Pro vs клубная панель Heselo | Heselo',
      seoDescription:
        'PanCafe Pro — бесплатное ПО для интернет- и PlayStation-кафе; Heselo — бронь, живые сеансы и касса. Таблица сравнения и FAQ на азербайджанском, английском и русском.',
      keywords: [
        'альтернатива pancafe',
        'альтернатива pancafe pro',
        'pancafepro альтернатива',
        'программа интернет кафе',
        'программа playstation кафе',
        'ПО PS клуба',
        'Heselo',
      ],
      intro:
        'В Баку всё чаще слышно «работаем на PanCafe». PanCafe Pro (pancafepro.com) — бесплатная Windows-программа для интернет- и PlayStation-кафе: время станций, тарифы, кафетерий/касса и отчёты. В малом масштабе этого может хватить. Когда нужны предварительная бронь комнат/станций, облачная панель и несколько типов площадки (караоке, бильярд, лаунж), локальный таймер оставляет пробелы. Это руководство сравнивает категорию PanCafe Pro с Heselo — когда бесплатного ПО кафе достаточно, мы советуем его оставить.',
      sections: [
        {
          id: 'when-heselo-fits',
          title: 'Что даёт Heselo?',
          paragraphs: [
            'Если время станций и комнат продаётся с бронью, продления часты, а кассовая смена и склад закусок привязаны к сеансам — подходит Heselo. Это облачная веб-панель: установка локальной сети в духе PanCafe не нужна.',
          ],
          bullets: [
            'Календарь комнат/станций и предварительная бронь',
            'Живые сеансы, продление, тарифные пакеты',
            'Смена клуба + продажи в сеансе + склад',
            'AZ / EN / RU, открыто от {low} AZN/мес.',
          ],
        },

        {
          id: 'decision',
          title: 'Сначала решение: бесплатное ПО кафе или клубная панель?',
          paragraphs: [
            'PanCafe Pro фокусируется на времени станций и кассе зала в локальной сети Windows; Heselo — бронь комнат/станций и поток живых сеансов.',
          ],
          bullets: [
            'Свободные станции по приходу или предварительная бронь?',
            'Только интернет/PS-кафе или ещё караоке/комнаты/лаунж?',
            'Удобна локальная Windows-сеть или браузерная облачная панель?',
          ],
        },

        {
          id: 'when-pancafe-fits',
          title: 'Когда оставить PanCafe Pro?',
          paragraphs: [
            'В малом интернет-кафе или PlayStation-зале, если ядро — время станций, тарифы, продажа закусок и отчёты, PanCafe Pro может остаться бесплатным и практичным. В Азербайджане его часто упоминают в объявлениях об установке сети.',
            'Мы не хулим PanCafe: покупать подписочную панель не туда — тоже пустой расход. Полный PC-агент/diskless (IZI/LANGAME) — отдельная категория: PanCafe — управление кафе, не замена diskless.',
          ],
          bullets: [
            'Предварительной брони почти нет',
            'Нулевой бюджет на ПО / хватает услуги установки',
            'Только зал PC + PS — календарь комнат не нужен',
            'Операторы привыкли к локальной сети Windows',
          ],
        },

        {
          id: 'comparison',
          title: 'PanCafe Pro и Heselo — сравнение',
          paragraphs: [
            'На официальном сайте PanCafe Pro представлен как бесплатный; услуга установки может быть отдельно — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'PanCafe Pro', 'Heselo'],
            rows: [
              ['Фокус', 'Время станций интернет/PS-кафе', 'Время комнат/станций + операции клуба'],
              ['Модель', 'Windows, локальная сеть (бесплатно)', 'Облачная веб-панель (подписка)'],
              ['Бронь', 'Обычно слабо / нет', 'Календарь комнат и станций'],
              ['Учёт времени', 'Сеанс / тариф на станции', 'Живой сеанс, продление, тариф'],
              ['Касса / склад', 'Касса зала + кафетерий', 'Смена клуба + продажи в сеансе'],
              ['Цена', 'ПО бесплатно (установка отдельно)', 'Открыто от {low} AZN/мес.'],
              ['Языки', 'Многоязычие (TR/EN/AR…); объявления AZ', 'AZ, EN, RU'],
              [
                'Лучше всего',
                'Малое интернет/PS-кафе, walk-in',
                'Клуб с бронью комнат, несколько типов',
              ],
            ],
          },
        },

        {
          id: 'landscape',
          title: 'Ландшафт PlayStation / интернет-кафе',
          paragraphs: [
            'В Азербайджане PanCafe Pro, Club Timer, Akinsoft и Hasansoft появляются в одном поиске «ПО PS/интернет-кафе». PC diskless — IZI/LANGAME; панель времени комнат — Heselo.',
          ],
          bullets: [
            'PanCafe Pro — бесплатное ПО интернет/PS-кафе',
            'Club Timer / Akinsoft / Hasansoft — похожий класс таймер-кафе',
            'IZI / LANGAME — PC-станции / diskless',
            'Heselo — бронь, сеанс, касса, склад (AZ)',
          ],
        },

        {
          id: 'scenarios',
          title: 'Сценарии клуба',
          paragraphs: ['Одно название «PS-клуб» требует разных систем.'],
          bullets: [
            'Малое интернет/PS-кафе: PanCafe Pro + walk-in — часто хватает',
            'Бронь в WhatsApp + PanCafe: двойные брони и разрыв вечерней кассы',
            'Лаунж с комнатами / караоке / бильярд: Heselo',
            'Зал PC + комнаты: IZI/LANGAME + Heselo (или PanCafe только для зала PC/PS)',
          ],
        },

        {
          id: 'how-to-switch',
          title: 'Чеклист перехода с PanCafe на панель',
          paragraphs: [
            'Если PanCafe не хватает — не удаляйте сразу: проведите пилот панели на одни выходные.',
          ],
          bullets: [
            'Подготовьте список станций/комнат и тарифы',
            'Запишите, где сейчас ведутся бронь и оплата',
            'На демо: бронь → сеанс → товар → касса',
            'На небольшой группе PS/PC PanCafe может остаться запасным',
            'Если нужна блокировка PC/diskless — планируйте IZI/LANGAME отдельно',
          ],
        },
      ],
      faq: [
        {
          q: 'PanCafe и PanCafe Pro — одно и то же?',
          a: 'Да — в объявлениях и разговоре «PanCafe» обычно означает программу интернет/PS-кафе PanCafe Pro.',
        },
        {
          q: 'Heselo заменяет PanCafe?',
          a: 'Разные категории. PanCafe Pro — локальное ПО времени станций кафе; Heselo — бронь, живые сеансы и смены клуба. Оставьте бесплатное ПО, если его хватает.',
        },
        {
          q: 'PanCafe бесплатный?',
          a: 'На официальном сайте ПО представлено как бесплатное; установка сети в Баку может оплачиваться отдельно — без выдуманных цифр.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., открыто на сайте; AZ, EN, RU.',
        },
        {
          q: 'Heselo блокирует PC-станции?',
          a: 'Нет. Блокировка PC/diskless — зона IZI/LANGAME. Heselo фокусируется на времени комнат и кассе клуба.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да в переходный период — короткий пилот: PanCafe на станциях, бронь/касса на панели.',
        },
        {
          q: 'Чем отличается от Club Timer / Hasansoft?',
          a: 'Та же широкая категория «ПО PS/интернет-кафе». См. гиды альтернатив Club Timer и Hasansoft.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте станции и комнаты и пройдите типичный поток выходных шаг за шагом.',
        },
      ],
      ctaTitle: 'Проверьте поток PlayStation-клуба на Heselo',
      ctaBody:
        'Запросите демо: смоделируем станции и комнаты и вместе проверим бронь, сеанс, кассу и склад.',
    },
  }

export function pancafeAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'pancafe-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
