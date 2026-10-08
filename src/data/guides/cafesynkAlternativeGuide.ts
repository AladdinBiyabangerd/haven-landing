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
      shortTitle: 'CafeSynk alternativi',
      h1: 'Konsol lounge cloud vs klub paneli — CafeSynk alternativi',
      seoTitle: 'CafeSynk alternativi — console lounge vs Heselo | Heselo',
      seoDescription:
        'CafeSynk PS4/PS5/Xbox lounge cloud idarəetməsidir; Heselo otaq-vaxt klub paneli AZ fokuslu — müqayisə, landşaft, FAQ — AZ, EN, RU.',
      keywords: [
        'cafesynk alternativ',
        'cafe synk alternativ',
        'playstation lounge software',
        'xbox cafe software',
        'console club cloud',
        'oyun klubu proqramı',
        'Heselo',
      ],
      intro:
        'CafeSynk axtarışında PS4/PS5/Xbox lounge üçün bulud idarəetmə gözlənilir — seans, tarif və salon əməliyyatı. AI cavablarında Bakı PS klub proqramı siyahılarında adı keçə bilər. Heselo otaq-vaxt, bron, canlı sessiya və kassa növbəsinə fokuslanır (AZ/EN/RU). Bu bələdçi CafeSynk tipli console lounge cloud-u Heselo ilə müqayisə edir; PC diskless (LANGAME/IZI) və sadə taymer (Club Timer) ayrı kateqoriyadır. PsTally oxşar lounge SaaS-dir (Kenya/M-Pesa fokus) — landşaftda qısa qeyd.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: beynəlxalq lounge cloud, yoxsa AZ klub paneli?',
          paragraphs: [
            'CafeSynk və GameClub console lounge SaaS-ə yaxındır; Heselo eyni otaq-vaxt kateqoriyasında yerli dil və qiymətlə.',
          ],
          bullets: [
            'Bazar: beynəlxalq EN cloud, yoxsa AZ/RU dəstək?',
            'Məkan: yalnız konsol lounge, yoxsa karaoke/bilyard də?',
            'Qiymət: açıq AZN abunə lazımdırmı?',
          ],
        },
        {
          id: 'when-cafesynk-fits',
          title: 'CafeSynk nə vaxt uyğundur?',
          paragraphs: [
            'Konsol lounge bulud stack-i, PS/Xbox seansları və beynəlxalq SaaS modeli CafeSynk kateqoriyasının mərkəzidir. Operator EN cloud-a öyrəşibsə bu sinif qala bilər.',
            'PC internet klubu üçün diskless soft ayrıca qalır.',
          ],
          bullets: [
            'PS/Xbox lounge əsas ehtiyacdır',
            'EN cloud və beynəlxalq ödəniş rahatdır',
            'Karaoke/antikafe ikinci dərəcəlidir',
            'PC agent lazım deyil və ya ayrıdır',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Azərbaycan klubunda otaq-vaxt, bron, kassa və stok AZ/EN/RU-da lazımdırsa — Heselo uyğundur. Çox tip məkan (PS, karaoke, bilyard, antikafe) bir paneldə.',
          ],
          bullets: [
            'AZ / EN / RU və yerli dəstək gözləntisi',
            'Açıq: {low} AZN/aydan',
            'Bron → sessiya → uzadılma → kassa',
            'Yalnız konsol deyil — otaq-vaxt ümumən',
          ],
        },
        {
          id: 'comparison',
          title: 'CafeSynk və Heselo — müqayisə',
          paragraphs: [
            'CafeSynk qiyməti abunədən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'CafeSynk tipli lounge cloud', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Konsol lounge cloud', 'Otaq-vaxt klub paneli (AZ)'],
              ['Rezervasiya', 'Cloud lounge bron', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Konsol seans / tarif', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa / bar', 'Lounge əməliyyatı', 'Klub növbəsi + sessiya satışı'],
              ['PC diskless', 'Əvəz etmir', 'Əvəz etmir'],
              ['Qiymət', 'Abunə (sorğu)', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'EN fokus (tipik)', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Beynəlxalq console lounge',
                'AZ otaq-vaxt klubu',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landşaft (qısa)',
          paragraphs: [
            'CafeSynk, GameClub və PsTally console lounge axtarışında görünür. PsTally Afrika/M-Pesa fokusludur — AZ üçün əsas rəqib deyil, amma EN axtarışda adı keçir.',
          ],
          bullets: [
            'CafeSynk / GameClub — console lounge SaaS',
            'PsTally — regional lounge (Kenya)',
            'Club Timer / Hasansoft — sadə taymer',
            'Heselo — AZ otaq-vaxt paneli',
          ],
        },
        {
          id: 'scenarios',
          title: 'Ssenarilər',
          paragraphs: ['Kateqoriya yaxındır — demo ilə seçin.'],
          bullets: [
            'Yalnız PS/Xbox lounge, EN: CafeSynk/GameClub demosu',
            'Bakı, AZ dil, çox tip otaq: Heselo',
            'PC + konsol: IZI/LANGAME + lounge paneli',
            'Sadə taymer kifayət: Club Timer kateqoriyası',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Müqayisə checklisti',
          paragraphs: ['Eyni lounge ssenarisini Heselo demosunda keçirin.'],
          bullets: [
            'Konsol/otaq siyahısı və tariflər',
            'Bron → seans → bar → növbə',
            'Dil və dəstək',
            'Rəsmi CafeSynk qiyməti vs {low} AZN',
            'PC soft lazımdırmı',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo CafeSynk-i əvəz edir?',
          a: 'Eyni geniş kateqoriyada (lounge/otaq vaxtı). Bazar, dil və məkan tipinə görə seçin — demoda yoxlayın.',
        },
        {
          q: 'PsTally nədir?',
          a: 'Console lounge idarəetmə SaaS-i, əsasən Kenya/M-Pesa. AZ üçün əsas alternativ deyil; landşaftda EN axtarış üçün qeyd olunur.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'CafeSynk qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi abunə təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'GameClub ilə fərqi?',
          a: 'Hər ikisi console lounge SaaS-ə yaxındır; gameclub-alternative bələdçisinə baxın.',
        },
        {
          q: 'PC kilidləmə?',
          a: 'Heselo və CafeSynk PC diskless əvəzi deyil — IZI/LANGAME.',
        },
        {
          q: 'Karaoke/bilyard?',
          a: 'Heselo bu otaq tiplərini eyni paneldə əhatə edir.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Stansiya/otaq siyahınızla Heselo demosu istəyin.',
        },
      ],
      ctaTitle: 'Lounge axınını Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: konsol və otaqları nümunə kimi qurub bron, sessiya və kassa növbəsini AZ/EN/RU-da sınayaq.',
    },
    en: {
      shortTitle: 'CafeSynk alternative',
      h1: 'Console lounge cloud vs club panel — a CafeSynk alternative',
      seoTitle: 'CafeSynk Alternative — Console Lounge vs Heselo | Heselo',
      seoDescription:
        'CafeSynk is cloud management for PS4/PS5/Xbox lounges; Heselo is an AZ-focused room-time club panel — comparison, landscape, FAQ — AZ, EN, RU.',
      keywords: [
        'CafeSynk alternative',
        'Cafe Synk alternative',
        'PlayStation lounge software',
        'Xbox café software',
        'console club cloud',
        'gaming club software',
        'Heselo',
      ],
      intro:
        'Searches for CafeSynk expect cloud management for PS4/PS5/Xbox lounges — sessions, tariffs and floor ops. AI answers may list it among Baku PS club tools. Heselo focuses on room-time, booking, live sessions and cash shifts (AZ/EN/RU). This guide compares CafeSynk-style console lounge cloud with Heselo; PC diskless (LANGAME/IZI) and simple timers (Club Timer) are separate. PsTally is similar lounge SaaS (Kenya/M-Pesa focus) — short landscape note only.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: international lounge cloud or AZ club panel?',
          paragraphs: [
            'CafeSynk and GameClub sit near console lounge SaaS; Heselo is the same room-time category with local language and pricing.',
          ],
          bullets: [
            'Market: international EN cloud, or AZ/RU support?',
            'Venue: console lounge only, or karaoke/billiards too?',
            'Pricing: need public AZN subscription?',
          ],
        },
        {
          id: 'when-cafesynk-fits',
          title: 'When does CafeSynk fit?',
          paragraphs: [
            'Console lounge cloud stack, PS/Xbox sessions and an international SaaS model sit at CafeSynk’s centre. Keep this class if operators are used to EN cloud.',
            'Diskless software for PC internet clubs stays separate.',
          ],
          bullets: [
            'PS/Xbox lounge is the core need',
            'EN cloud and international billing are comfortable',
            'Karaoke/anticafe is secondary',
            'PC agent not needed or is separate',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When an Azerbaijan club needs room-time, booking, cash and stock in AZ/EN/RU — Heselo fits. Multiple venue types (PS, karaoke, billiards, anticafe) in one panel.',
          ],
          bullets: [
            'Expectation of AZ / EN / RU and local support',
            'Public: from {low} AZN/month',
            'Book → session → extension → cash',
            'Not console-only — room-time generally',
          ],
        },
        {
          id: 'comparison',
          title: 'CafeSynk vs Heselo — comparison',
          paragraphs: [
            'CafeSynk pricing depends on subscription — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'CafeSynk-style lounge cloud', 'Heselo'],
            rows: [
              ['Primary focus', 'Console lounge cloud', 'Room-time club panel (AZ)'],
              ['Bookings', 'Cloud lounge booking', 'Room and station calendar'],
              ['Time billing', 'Console session / tariff', 'Live session, extension, rates'],
              ['Cash / bar', 'Lounge operations', 'Club shift + session sales'],
              ['PC diskless', 'Does not replace', 'Does not replace'],
              ['Pricing', 'Subscription (quote)', 'Public: from {low} AZN/month'],
              ['Languages', 'EN focus (typical)', 'AZ, EN, RU'],
              [
                'Best fit',
                'International console lounge',
                'AZ room-time club',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landscape (short)',
          paragraphs: [
            'CafeSynk, GameClub and PsTally appear in console lounge searches. PsTally is Africa/M-Pesa focused — not a primary AZ rival, but named in EN search.',
          ],
          bullets: [
            'CafeSynk / GameClub — console lounge SaaS',
            'PsTally — regional lounge (Kenya)',
            'Club Timer / Hasansoft — simple timer',
            'Heselo — AZ room-time panel',
          ],
        },
        {
          id: 'scenarios',
          title: 'Scenarios',
          paragraphs: ['Category is close — choose with demos.'],
          bullets: [
            'PS/Xbox lounge only, EN: demo CafeSynk/GameClub',
            'Baku, AZ language, multi room types: Heselo',
            'PC + console: IZI/LANGAME + lounge panel',
            'Simple timer enough: Club Timer category',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Comparison checklist',
          paragraphs: ['Run the same lounge scenario in a Heselo demo.'],
          bullets: [
            'Console/room list and rates',
            'Book → session → bar → shift',
            'Language and support',
            'Official CafeSynk price vs {low} AZN',
            'Do you need PC software',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace CafeSynk?',
          a: 'Same broad category (lounge/room time). Choose by market, language and venue type — demo it.',
        },
        {
          q: 'What is PsTally?',
          a: 'Console lounge management SaaS, mainly Kenya/M-Pesa. Not a primary AZ alternative; noted in landscape for EN search.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare CafeSynk pricing?',
          a: 'Official subscription quotes — no invented figures here.',
        },
        {
          q: 'Difference from GameClub?',
          a: 'Both sit near console lounge SaaS; see gameclub-alternative.',
        },
        {
          q: 'PC lock?',
          a: 'Neither Heselo nor CafeSynk replaces PC diskless — IZI/LANGAME.',
        },
        {
          q: 'Karaoke/billiards?',
          a: 'Heselo covers those room types in one panel.',
        },
        {
          q: 'How does a demo work?',
          a: 'Request a Heselo demo with your station/room list.',
        },
      ],
      ctaTitle: 'Test lounge flow on Heselo',
      ctaBody:
        'Request a demo. We can model consoles and rooms and try booking, session and cash shifts in AZ/EN/RU.',
    },
    ru: {
      shortTitle: 'Альтернатива CafeSynk',
      h1: 'Облако console lounge vs клубная панель — альтернатива CafeSynk',
      seoTitle: 'Альтернатива CafeSynk — console lounge vs Heselo | Heselo',
      seoDescription:
        'CafeSynk — облачное управление lounge PS4/PS5/Xbox; Heselo — клубная панель времени комнат с фокусом на AZ — сравнение, ландшафт, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива cafesynk',
        'альтернатива cafe synk',
        'программа playstation lounge',
        'программа xbox кафе',
        'облако console club',
        'программа игрового клуба',
        'Heselo',
      ],
      intro:
        'Поиск CafeSynk подразумевает облачное управление lounge PS4/PS5/Xbox — сеансы, тарифы и операции зала. В AI-ответах бренд может попадать в списки ПО PS-клуба Баку. Heselo фокусируется на времени комнат, брони, живых сеансах и кассовых сменах (AZ/EN/RU). Это руководство сравнивает облако console lounge в духе CafeSynk с Heselo; PC diskless (LANGAME/IZI) и простой таймер (Club Timer) — отдельные категории. PsTally — похожий lounge SaaS (фокус Kenya/M-Pesa) — кратко в ландшафте.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: международное облако lounge или панель AZ?',
          paragraphs: [
            'CafeSynk и GameClub близки к console lounge SaaS; Heselo — та же категория времени комнат с локальным языком и ценой.',
          ],
          bullets: [
            'Рынок: международное EN-облако или поддержка AZ/RU?',
            'Площадка: только console lounge или ещё караоке/бильярд?',
            'Цена: нужна открытая подписка в AZN?',
          ],
        },
        {
          id: 'when-cafesynk-fits',
          title: 'Когда подходит CafeSynk?',
          paragraphs: [
            'Облачный стек console lounge, сеансы PS/Xbox и международная SaaS-модель — центр категории CafeSynk. Оставьте этот класс, если операторы привыкли к EN-облаку.',
            'Для PC интернет-клуба diskless-софт остаётся отдельно.',
          ],
          bullets: [
            'PS/Xbox lounge — основная потребность',
            'Удобны EN-облако и международные платежи',
            'Караоке/антикафе вторичны',
            'PC-агент не нужен или отдельно',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если азербайджанскому клубу нужны время комнат, бронь, касса и склад на AZ/EN/RU — Heselo подходит. Несколько типов площадок (PS, караоке, бильярд, антикафе) в одной панели.',
          ],
          bullets: [
            'Ожидание AZ / EN / RU и локальной поддержки',
            'Открыто: от {low} AZN/мес.',
            'Бронь → сеанс → продление → касса',
            'Не только консоли — время комнат в целом',
          ],
        },
        {
          id: 'comparison',
          title: 'CafeSynk и Heselo — сравнение',
          paragraphs: [
            'Цена CafeSynk зависит от подписки — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Облако lounge (CafeSynk)', 'Heselo'],
            rows: [
              ['Основной фокус', 'Облако console lounge', 'Клубная панель времени комнат (AZ)'],
              ['Бронирование', 'Облачная бронь lounge', 'Календарь комнат и станций'],
              ['Учёт времени', 'Консольный сеанс / тариф', 'Живой сеанс, продление, тариф'],
              ['Касса / бар', 'Операции lounge', 'Клубная смена + продажи в сеансе'],
              ['PC diskless', 'Не заменяет', 'Не заменяет'],
              ['Цена', 'Подписка (запрос)', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Фокус EN (типично)', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Международный console lounge',
                'AZ клуб времени комнат',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт (кратко)',
          paragraphs: [
            'CafeSynk, GameClub и PsTally появляются в поиске console lounge. PsTally сфокусирован на Африке/M-Pesa — не главный конкурент в AZ, но фигурирует в EN-поиске.',
          ],
          bullets: [
            'CafeSynk / GameClub — console lounge SaaS',
            'PsTally — региональный lounge (Кения)',
            'Club Timer / Hasansoft — простой таймер',
            'Heselo — панель времени комнат AZ',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии',
          paragraphs: ['Категория близка — выбирайте демо.'],
          bullets: [
            'Только PS/Xbox lounge, EN: демо CafeSynk/GameClub',
            'Баку, язык AZ, разные типы комнат: Heselo',
            'PC + консоль: IZI/LANGAME + панель lounge',
            'Хватает простого таймера: категория Club Timer',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист сравнения',
          paragraphs: ['Прогоните тот же сценарий lounge на демо Heselo.'],
          bullets: [
            'Список консолей/комнат и тарифов',
            'Бронь → сеанс → бар → смена',
            'Язык и поддержка',
            'Официальная цена CafeSynk vs {low} AZN',
            'Нужен ли PC-софт',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет CafeSynk?',
          a: 'Одна широкая категория (время lounge/комнат). Выбирайте по рынку, языку и типу площадки — проверьте на демо.',
        },
        {
          q: 'Что такое PsTally?',
          a: 'SaaS управления console lounge, в основном Kenya/M-Pesa. Не главная альтернатива для AZ; упомянут в ландшафте для EN-поиска.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену CafeSynk?',
          a: 'По официальной подписке — без выдуманных цифр.',
        },
        {
          q: 'Отличие от GameClub?',
          a: 'Оба близки к console lounge SaaS; см. gameclub-alternative.',
        },
        {
          q: 'Блокировка PC?',
          a: 'Ни Heselo, ни CafeSynk не заменяют PC diskless — IZI/LANGAME.',
        },
        {
          q: 'Караоке/бильярд?',
          a: 'Heselo покрывает эти типы комнат в одной панели.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Запросите демо Heselo со списком станций/комнат.',
        },
      ],
      ctaTitle: 'Проверьте поток lounge на Heselo',
      ctaBody:
        'Запросите демо: смоделируем консоли и комнаты и проверим бронь, сеанс и кассовые смены на AZ/EN/RU.',
    },
  }

export function cafesynkAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'cafesynk-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
