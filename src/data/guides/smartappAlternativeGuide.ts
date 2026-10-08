import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-08'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'gaming',
  'reservations',
  'pos',
  'inventory',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'SmartApp.az alternativi',
      h1: 'Restoran+gaming platform vs otaq-vaxt — SmartApp alternativi',
      seoTitle: 'SmartApp.az alternativi — platform vs Heselo klub paneli | Heselo',
      seoDescription:
        'SmartApp.az restoran POS, QR menyu və gaming hall tarifləridir; Heselo otaq-vaxt, bron və kassaya fokuslanır — cədvəl, FAQ — AZ, EN, RU.',
      keywords: [
        'smartapp alternativ',
        'smartapp.az alternativ',
        'smart app az alternativ',
        'oyun zalı proqramı',
        'ps klub proqramı bakı',
        'restoran pos azərbaycan',
        'Heselo',
      ],
      intro:
        'SmartApp.az axtarışında bulud biznes platforması gözlənilir: POS, masa/sifariş, anbar, personal, QR menyu və analitika — həmçinin PC/Xbox/PlayStation otaq tarifləri, vaxt izləmə və depozit. Heselo otaq-vaxt klub paneli kimi bron, canlı sessiya və kassa növbəsinə fokuslanır; tam restoran+KDS əvəzi deyil. Bu bələdçi SmartApp tipli geniş platformanı otaq-vaxt paneli ilə müqayisə edir.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: all-in-one platform, yoxsa klub paneli?',
          paragraphs: [
            'SmartApp restoran və gaming hall-ı bir hesabda birləşdirir; Heselo otaq saatı satışına dar fokusdur.',
          ],
          bullets: [
            'Əsas ehtiyac: restoran POS + QR, yoxsa otaq bronu və sessiya?',
            'Gaming: modul, yoxsa əsas biznes modeli?',
            'Qiymət: paket abunə, yoxsa açıq klub tarifi?',
          ],
        },
        {
          id: 'when-smartapp-fits',
          title: 'SmartApp.az nə vaxt qalmalıdır?',
          paragraphs: [
            'Restoran/kafe əməliyyatı + gaming otaq tarifləri eyni platformada lazımdırsa SmartApp kateqoriyası uyğun ola bilər. QR menyu, loyalty və çoxfilial analitika mərkəzdədirsə geniş platforma qalır.',
            'Heselo mətbəx və tam restoran POS əvəzi deyil.',
          ],
          bullets: [
            'POS, QR menyu və restoran axını əsasdır',
            'Gaming hall tarifləri əlavə modul kimi işləyir',
            'Çoxfilial və loyalty lazımdır',
            'Otaq-vaxt ikinci dərəcəlidir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Oyun/karaoke/bilyard/launj otağı vaxtla satılır və bron+kassa növbəsi əsasdırsa — Heselo uyğundur. Restoran platforması paralel qala bilər.',
          ],
          bullets: [
            'Otaq/stansiya saatı əsas gəlir',
            'Bron → sessiya → uzadılma → kassa',
            'Bar sessiyaya və stoka bağlıdır',
            'AZ / EN / RU, {low} AZN/aydan',
          ],
        },
        {
          id: 'comparison',
          title: 'SmartApp.az və Heselo — müqayisə',
          paragraphs: [
            'SmartApp qiyməti paket müddətindən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'SmartApp.az', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Restoran platforması + gaming hall', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['QR / loyalty', 'Platformada güclü', 'Əsas fokus deyil'],
              ['Rezervasiya', 'Platforma asılı', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Gaming hall tarif/depozit', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'POS konturu', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Paket abunə (sayt)', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'AZ fokus', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Restoran + qarışıq gaming',
                'Fokuslu otaq-vaxt klubu',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landşaft (qısa)',
          paragraphs: [
            'SmartApp və Təndir yerli geniş platformalardır. Taymerlər (Club Timer, Hasansoft) və console SaaS (GameClub) ayrı kateqoriyadır.',
          ],
          bullets: [
            'SmartApp.az / Təndir — AZ all-in-one',
            'GameClub — console-first lounge',
            'Club Timer — sadə taymer',
            'Heselo — otaq-vaxt paneli',
          ],
        },
        {
          id: 'scenarios',
          title: 'Ssenarilər',
          paragraphs: ['Platforma seçimi gəlir modelindən asılıdır.'],
          bullets: [
            'Restoran + VIP otaq tarifləri: SmartApp kateqoriyası',
            'Yalnız otaqlı PS/karaoke: Heselo',
            'Hibrid: restoran SmartApp-da, otaq paneli Heselo-da',
            'PC kilidləmə: IZI/LANGAME ayrıca',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Qərar checklisti',
          paragraphs: ['Gaming modulunu otaq paneli ilə qarışdırmayın — ehtiyacı ölçün.'],
          bullets: [
            'Otaq saatı gəlirinin payı',
            'QR/loyalty olmadan işləyə bilərsinizmi',
            'Demo: bron → sessiya → kassa',
            'Rəsmi SmartApp paketi ilə qiymət müqayisəsi',
            'Personal: bir vs iki sistem',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo SmartApp-ı əvəz edir?',
          a: 'Tam əvəz deyil. SmartApp restoran+gaming platformasıdır; Heselo otaq-vaxt və klub kassasına fokuslanır.',
        },
        {
          q: 'SmartApp gaming hall dəstəkləyir?',
          a: 'Bəli — tarif, vaxt, depozit və QR sifariş reklam olunur. Otaq-vaxt əsas biznesdirsə fokuslu paneli də yoxlayın.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'SmartApp qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi paket səhifəsi və təkliflə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Mətbəx/KDS?',
          a: 'Heselo mətbəx POS əvəzi deyil.',
        },
        {
          q: 'Təndir ilə fərqi?',
          a: 'Hər ikisi yerli geniş platformadır; tendir-alternative bələdçisinə baxın.',
        },
        {
          q: 'Hər ikisi bir yerdə?',
          a: 'Bəli — restoran platforması + Heselo otaqlarda.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq resurslarını qurub sessiya axınını yoxlayın.',
        },
      ],
      ctaTitle: 'Otaq-vaxt fokusunu Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: otaq və stansiyaları nümunə kimi qurub bron, sessiya və kassa növbəsini sınayaq.',
    },
    en: {
      shortTitle: 'SmartApp.az alternative',
      h1: 'Restaurant+gaming platform vs room-time — SmartApp alternative',
      seoTitle: 'SmartApp.az Alternative — Platform vs Heselo Club Panel | Heselo',
      seoDescription:
        'SmartApp.az is restaurant POS, QR menu and gaming-hall tariffs; Heselo focuses on room-time, booking and cash — table, FAQ — AZ, EN, RU.',
      keywords: [
        'SmartApp alternative',
        'SmartApp.az alternative',
        'gaming hall software',
        'Baku PS club software',
        'restaurant POS Azerbaijan',
        'Heselo',
      ],
      intro:
        'Searches for SmartApp.az expect a cloud business platform: POS, tables/orders, inventory, staff, QR menu and analytics — plus PC/Xbox/PlayStation room tariffs, time tracking and deposits. Heselo is a room-time club panel focused on booking, live sessions and cash shifts; not a full restaurant+KDS replacement. This guide compares a SmartApp-style broad platform with a room-time panel.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: all-in-one platform or club panel?',
          paragraphs: [
            'SmartApp combines restaurant and gaming hall in one account; Heselo is a narrow focus on selling room hours.',
          ],
          bullets: [
            'Core need: restaurant POS + QR, or room booking and sessions?',
            'Gaming: a module, or the main business model?',
            'Pricing: package subscription, or public club rate?',
          ],
        },
        {
          id: 'when-smartapp-fits',
          title: 'When should SmartApp.az stay?',
          paragraphs: [
            'When restaurant/café ops and gaming-room tariffs belong in one platform, a SmartApp-class product can fit. Keep the broad platform when QR menu, loyalty and multi-branch analytics are central.',
            'Heselo is not a kitchen or full restaurant POS replacement.',
          ],
          bullets: [
            'POS, QR menu and restaurant flow are primary',
            'Gaming-hall tariffs run as an add-on module',
            'You need multi-branch and loyalty',
            'Room-time is secondary',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When gaming/karaoke/billiards/lounge rooms are sold by time with booking and shift cash central — Heselo fits. A restaurant platform can stay in parallel.',
          ],
          bullets: [
            'Room/station hours are main revenue',
            'Book → session → extension → cash',
            'Bar tied to session and stock',
            'AZ / EN / RU, from {low} AZN/month',
          ],
        },
        {
          id: 'comparison',
          title: 'SmartApp.az vs Heselo — comparison',
          paragraphs: [
            'SmartApp pricing depends on package term — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'SmartApp.az', 'Heselo'],
            rows: [
              ['Primary focus', 'Restaurant platform + gaming hall', 'Room/station time + club ops'],
              ['QR / loyalty', 'Strong on platform', 'Not the main focus'],
              ['Bookings', 'Platform-dependent', 'Room and station calendar'],
              ['Time billing', 'Gaming-hall tariff/deposit', 'Live session, extension, rates'],
              ['Cash', 'POS contour', 'Club shift + session sales'],
              ['Pricing', 'Package subscription (site)', 'Public: from {low} AZN/month'],
              ['Languages', 'AZ focus', 'AZ, EN, RU'],
              [
                'Best fit',
                'Restaurant + mixed gaming',
                'Focused room-time club',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landscape (short)',
          paragraphs: [
            'SmartApp and Tendir are local broad platforms. Timers (Club Timer, Hasansoft) and console SaaS (GameClub) are separate categories.',
          ],
          bullets: [
            'SmartApp.az / Tendir — AZ all-in-one',
            'GameClub — console-first lounge',
            'Club Timer — simple timer',
            'Heselo — room-time panel',
          ],
        },
        {
          id: 'scenarios',
          title: 'Scenarios',
          paragraphs: ['Platform choice follows the revenue model.'],
          bullets: [
            'Restaurant + VIP room tariffs: SmartApp category',
            'Room-only PS/karaoke: Heselo',
            'Hybrid: restaurant on SmartApp, rooms on Heselo',
            'PC lock: IZI/LANGAME separately',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Decision checklist',
          paragraphs: ['Do not confuse a gaming module with a room panel — measure the need.'],
          bullets: [
            'Share of revenue from room hours',
            'Can you operate without QR/loyalty',
            'Demo: book → session → cash',
            'Compare with official SmartApp package pricing',
            'Staff: one vs two systems',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace SmartApp?',
          a: 'Not a full replacement. SmartApp is a restaurant+gaming platform; Heselo focuses on room-time and club cash.',
        },
        {
          q: 'Does SmartApp support gaming halls?',
          a: 'Yes — tariffs, time, deposits and QR ordering are marketed. If room-time is the core business, also evaluate a focused panel.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare SmartApp pricing?',
          a: 'Official package page and quotes — no invented figures here.',
        },
        {
          q: 'Kitchen/KDS?',
          a: 'Heselo is not a kitchen POS replacement.',
        },
        {
          q: 'Difference from Tendir?',
          a: 'Both are local broad platforms; see tendir-alternative.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes — restaurant platform + Heselo in rooms.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model room resources and walk the session flow.',
        },
      ],
      ctaTitle: 'Test room-time focus on Heselo',
      ctaBody:
        'Request a demo. We can model rooms and stations and try booking, session and cash shifts.',
    },
    ru: {
      shortTitle: 'Альтернатива SmartApp.az',
      h1: 'Платформа ресторан+gaming vs время комнат — альтернатива SmartApp',
      seoTitle: 'Альтернатива SmartApp.az — платформа vs Heselo | Heselo',
      seoDescription:
        'SmartApp.az — ресторанный POS, QR-меню и тарифы gaming-зала; Heselo фокусируется на времени комнат, брони и кассе — таблица, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива smartapp',
        'альтернатива smartapp.az',
        'программа игрового зала',
        'ps клуб программа баку',
        'ресторанный pos азербайджан',
        'Heselo',
      ],
      intro:
        'Поиск SmartApp.az подразумевает облачную бизнес-платформу: POS, столы/заказы, склад, персонал, QR-меню и аналитика — плюс тарифы комнат PC/Xbox/PlayStation, учёт времени и депозиты. Heselo — клубная панель времени комнат с фокусом на бронь, живые сеансы и кассовые смены; не полная замена ресторана+KDS. Это руководство сравнивает широкую платформу в духе SmartApp с панелью времени комнат.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: all-in-one платформа или клубная панель?',
          paragraphs: [
            'SmartApp объединяет ресторан и gaming-зал в одном аккаунте; Heselo — узкий фокус на продаже часов комнат.',
          ],
          bullets: [
            'Главная потребность: ресторанный POS + QR или бронь комнат и сеансы?',
            'Gaming: модуль или основная модель бизнеса?',
            'Цена: пакетная подписка или открытый клубный тариф?',
          ],
        },
        {
          id: 'when-smartapp-fits',
          title: 'Когда оставить SmartApp.az?',
          paragraphs: [
            'Если операции ресторана/кафе и тарифы игровых комнат нужны на одной платформе, продукт класса SmartApp может подойти. Оставьте широкую платформу, если QR-меню, loyalty и аналитика филиалов в центре.',
            'Heselo не замена кухне и полному ресторанному POS.',
          ],
          bullets: [
            'POS, QR-меню и ресторанный поток первичны',
            'Тарифы gaming-зала работают как доп. модуль',
            'Нужны филиалы и loyalty',
            'Время комнат вторично',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если игровые/караоке/бильярд/лаунж-комнаты продаются по времени с бронью и кассовой сменой в центре — Heselo подходит. Ресторанная платформа может остаться параллельно.',
          ],
          bullets: [
            'Часы комнаты/станции — основная выручка',
            'Бронь → сеанс → продление → касса',
            'Бар привязан к сеансу и складу',
            'AZ / EN / RU, от {low} AZN/мес.',
          ],
        },
        {
          id: 'comparison',
          title: 'SmartApp.az и Heselo — сравнение',
          paragraphs: [
            'Цена SmartApp зависит от срока пакета — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'SmartApp.az', 'Heselo'],
            rows: [
              ['Основной фокус', 'Ресторанная платформа + gaming-зал', 'Время комнаты/станции + операции клуба'],
              ['QR / loyalty', 'Сильно на платформе', 'Не главный фокус'],
              ['Бронирование', 'Зависит от платформы', 'Календарь комнат и станций'],
              ['Учёт времени', 'Тариф/депозит gaming-зала', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Контур POS', 'Клубная смена + продажи в сеансе'],
              ['Цена', 'Пакетная подписка (сайт)', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Фокус AZ', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Ресторан + смешанный gaming',
                'Сфокусированный клуб времени комнат',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт (кратко)',
          paragraphs: [
            'SmartApp и Təndir — локальные широкие платформы. Таймеры (Club Timer, Hasansoft) и console SaaS (GameClub) — отдельные категории.',
          ],
          bullets: [
            'SmartApp.az / Təndir — AZ all-in-one',
            'GameClub — console-first lounge',
            'Club Timer — простой таймер',
            'Heselo — панель времени комнат',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии',
          paragraphs: ['Выбор платформы следует модели выручки.'],
          bullets: [
            'Ресторан + VIP-тарифы комнат: категория SmartApp',
            'Только комнатный PS/караоке: Heselo',
            'Гибрид: ресторан на SmartApp, комнаты на Heselo',
            'Блокировка PC: отдельно IZI/LANGAME',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист решения',
          paragraphs: ['Не путайте gaming-модуль с комнатной панелью — измерьте потребность.'],
          bullets: [
            'Доля выручки от часов комнат',
            'Можете ли работать без QR/loyalty',
            'Демо: бронь → сеанс → касса',
            'Сравните с официальной ценой пакета SmartApp',
            'Персонал: одна vs две системы',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет SmartApp?',
          a: 'Не полная замена. SmartApp — платформа ресторан+gaming; Heselo — время комнат и касса клуба.',
        },
        {
          q: 'SmartApp поддерживает gaming-залы?',
          a: 'Да — тарифы, время, депозиты и QR-заказ в маркетинге. Если время комнат — ядро бизнеса, оцените и сфокусированную панель.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену SmartApp?',
          a: 'По официальной странице пакетов и КП — без выдуманных цифр.',
        },
        {
          q: 'Кухня/KDS?',
          a: 'Heselo не замена кухонному POS.',
        },
        {
          q: 'Отличие от Təndir?',
          a: 'Обе — локальные широкие платформы; см. tendir-alternative.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да — ресторанная платформа + Heselo в комнатах.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте комнатные ресурсы и пройдите поток сеанса.',
        },
      ],
      ctaTitle: 'Проверьте фокус на времени комнат на Heselo',
      ctaBody:
        'Запросите демо: смоделируем комнаты и станции и проверим бронь, сеанс и кассовые смены.',
    },
  }

export function smartappAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'smartapp-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
