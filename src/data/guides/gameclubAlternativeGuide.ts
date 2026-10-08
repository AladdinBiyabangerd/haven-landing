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
      shortTitle: 'GameClub alternativi',
      h1: 'Console lounge SaaS vs klub paneli — GameClub alternativi',
      seoTitle: 'GameClub alternativi — PS/Xbox lounge vs Heselo | Heselo',
      seoDescription:
        'GameClub console-first lounge SaaS-dir (seans, bron, bar, POS); Heselo otaq-vaxt klub paneli AZ fokuslu — dürüst müqayisə, FAQ — AZ, EN, RU.',
      keywords: [
        'gameclub alternativ',
        'gameclub.work alternativ',
        'playstation lounge proqramı',
        'xbox klub proqramı',
        'console lounge software',
        'oyun klubu saas',
        'Heselo',
      ],
      intro:
        'GameClub (gameclub.work) axtarışında console-first lounge SaaS gözlənilir: seanslar, bron, tariflər, bar, aksiyalar, növbə və POS — PlayStation/Xbox əsas ssenari. Heselo eyni otaq-vaxt kateqoriyasına yaxındır: bron, canlı sessiya, kassa və stok, Azərbaycan bazarı üçün AZ/EN/RU və açıq qiymət. Bu bələdçi iki yaxın rəqibi dürüst müqayisə edir; PC diskless softu (LANGAME/IZI) əvəzi deyil.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: console lounge SaaS hansı bazar üçün?',
          paragraphs: [
            'GameClub və Heselo hər ikisi otaq/stansiya vaxtı satır — fərq dil, bazar dəstəyi və fokus dərinliyindədir.',
          ],
          bullets: [
            'Komanda AZ/RU danışırmı, yoxsa yalnız EN?',
            'Qiymət açıq AZN abunə lazımdırmı?',
            'Yalnız konsol lounge, yoxsa karaoke/bilyard/antikafe də?',
          ],
        },
        {
          id: 'when-gameclub-fits',
          title: 'GameClub nə vaxt uyğundur?',
          paragraphs: [
            'Console-first UX, booth seansları, controller icarəsi və mixed PC+console (PC stack toxunulmaz) GameClub-un güclü tərəfidir. Beynəlxalq lounge operatorları üçün tanış SaaS modelidir.',
            'PC diskless klub üçün GameClub özü də PC-first softu tövsiyə etmir — LANGAME/IZI kateqoriyasıdır.',
          ],
          bullets: [
            'PS/Xbox lounge əsas ssenaridir',
            'EN SaaS və beynəlxalq ödəniş rahatdır',
            'PC stack ayrı qalmalıdır',
            'Karaoke/antikafe ikinci dərəcəlidir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Azərbaycan (və AZ/RU) klubunda otaq-vaxt, bron, kassa növbəsi və stok bir paneldə lazımdırsa — Heselo uyğundur. Gaming, karaoke, bilyard, antikafe və launj eyni konturda.',
          ],
          bullets: [
            'AZ / EN / RU interfeys və dəstək gözləntisi',
            'Açıq qiymət: {low} AZN/aydan',
            'Otaq-vaxt + bar/stok + növbə bir axında',
            'Yalnız PS deyil — karaoke/bilyard/antikafe də',
          ],
        },
        {
          id: 'comparison',
          title: 'GameClub və Heselo — müqayisə',
          paragraphs: [
            'GameClub qiyməti abunə modelindən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'GameClub', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Console-first lounge SaaS', 'Otaq-vaxt klub paneli (AZ)'],
              ['Rezervasiya', 'Onlayn bron / PWA', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Booth seans, tarif', 'Canlı sessiya, uzadılma, tarif'],
              ['Bar / POS', 'Seansa bağlı sifariş', 'Sessiya satışı + stok'],
              ['PC diskless', 'Əvəz etmir (özləri də deyir)', 'Əvəz etmir'],
              ['Qiymət', 'Abunə (sayt/sorğu)', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'EN fokus', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'PS/Xbox lounge, beynəlxalq',
                'AZ otaq-vaxt klubu, çox tip məkan',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Console lounge landşaftı',
          paragraphs: [
            'GameClub, CafeSynk və PsTally console lounge SaaS-ə yaxındır (PsTally — Kenya/M-Pesa fokus). Yerli taymerlər və Təndir/SmartApp ayrı kateqoriyadır.',
          ],
          bullets: [
            'GameClub — console-first SaaS',
            'CafeSynk — konsol lounge cloud',
            'PsTally — regional lounge (Afrika)',
            'Heselo — AZ otaq-vaxt paneli',
          ],
        },
        {
          id: 'scenarios',
          title: 'Ssenarilər',
          paragraphs: ['Yaxın kateqoriya — demo ilə seçin.'],
          bullets: [
            '3–12 PS5 booth lounge: GameClub və ya Heselo demosu',
            'PS + karaoke otaqları: Heselo (çox tip)',
            '50+ PC diskless: LANGAME/IZI, GameClub/Heselo əlavə',
            'Bakı klub, AZ dil: Heselo üstünlük',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Müqayisə checklisti',
          paragraphs: ['Eyni ssenarini hər iki demoda keçirin.'],
          bullets: [
            'Booth/otaq siyahısı və tariflər',
            'Bron → seans → bar → növbə bağlanışı',
            'Dil və dəstək kanalı',
            'Qiymət: rəsmi GameClub vs {low} AZN Heselo',
            'PC soft lazımdırmı — ayrıca qərar',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo GameClub-u əvəz edir?',
          a: 'Eyni geniş kateqoriyadadır (otaq/lounge vaxtı). Seçim bazar, dil və məkan tipindən asılıdır — hər ikisini demoda yoxlayın.',
        },
        {
          q: 'GameClub PC klub üçündürmü?',
          a: 'Console-first; böyük diskless PC üçün özləri ixtisaslaşmış PC soft tövsiyə edir (LANGAME/IZI sinfi).',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'GameClub qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi abunə təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Karaoke və bilyard?',
          a: 'Heselo bu tip otaqları eyni paneldə əhatə edir; GameClub console lounge-a fokuslanır.',
        },
        {
          q: 'CafeSynk / PsTally?',
          a: 'Oxşar lounge SaaS landşaftı; cafesynk-alternative və landşaft qeydlərinə baxın.',
        },
        {
          q: 'Hər ikisi bir yerdə?',
          a: 'Adətən lazım deyil — eyni kateqoriyada bir panel seçin.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Eyni booth siyahısı və həftəsonu axını ilə Heselo demosu istəyin.',
        },
      ],
      ctaTitle: 'Console lounge axınını Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: stansiya/otaqları nümunə kimi qurub bron, sessiya, bar və kassa növbəsini AZ/EN/RU-da sınayaq.',
    },
    en: {
      shortTitle: 'GameClub alternative',
      h1: 'Console lounge SaaS vs club panel — a GameClub alternative',
      seoTitle: 'GameClub Alternative — PS/Xbox Lounge vs Heselo | Heselo',
      seoDescription:
        'GameClub is console-first lounge SaaS (sessions, booking, bar, POS); Heselo is an AZ-focused room-time club panel — honest comparison, FAQ — AZ, EN, RU.',
      keywords: [
        'GameClub alternative',
        'gameclub.work alternative',
        'PlayStation lounge software',
        'Xbox club software',
        'console lounge software',
        'gaming club SaaS',
        'Heselo',
      ],
      intro:
        'Searches for GameClub (gameclub.work) expect console-first lounge SaaS: sessions, booking, tariffs, bar, promotions, shifts and POS — PlayStation/Xbox as the primary scenario. Heselo sits in the same room-time category: booking, live sessions, cash and stock, with AZ/EN/RU and public pricing for Azerbaijan. This guide compares two close peers honestly; neither replaces PC diskless software (LANGAME/IZI).',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: which market is the console lounge SaaS for?',
          paragraphs: [
            'GameClub and Heselo both sell room/station time — differences are language, market support and depth of venue types.',
          ],
          bullets: [
            'Does the team speak AZ/RU, or only EN?',
            'Do you need public AZN subscription pricing?',
            'Console lounge only, or karaoke/billiards/anticafe too?',
          ],
        },
        {
          id: 'when-gameclub-fits',
          title: 'When does GameClub fit?',
          paragraphs: [
            'Console-first UX, booth sessions, controller rentals and mixed PC+console (PC stack untouched) are GameClub’s strengths. Familiar SaaS model for international lounge operators.',
            'For diskless PC clubs, GameClub itself points away from console-first tools — that is LANGAME/IZI territory.',
          ],
          bullets: [
            'PS/Xbox lounge is the primary scenario',
            'EN SaaS and international billing are comfortable',
            'PC stack should stay separate',
            'Karaoke/anticafe is secondary',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When an Azerbaijan (and AZ/RU) club needs room-time, booking, cash shifts and stock in one panel — Heselo fits. Gaming, karaoke, billiards, anticafe and lounge share one contour.',
          ],
          bullets: [
            'Expectation of AZ / EN / RU UI and support',
            'Public pricing from {low} AZN/month',
            'Room-time + bar/stock + shift in one flow',
            'Not PS-only — karaoke/billiards/anticafe too',
          ],
        },
        {
          id: 'comparison',
          title: 'GameClub vs Heselo — comparison',
          paragraphs: [
            'GameClub pricing depends on subscription model — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'GameClub', 'Heselo'],
            rows: [
              ['Primary focus', 'Console-first lounge SaaS', 'Room-time club panel (AZ)'],
              ['Bookings', 'Online booking / PWA', 'Room and station calendar'],
              ['Time billing', 'Booth session, tariffs', 'Live session, extension, rates'],
              ['Bar / POS', 'Orders on sessions', 'Session sales + stock'],
              ['PC diskless', 'Does not replace (they say so)', 'Does not replace'],
              ['Pricing', 'Subscription (site/quote)', 'Public: from {low} AZN/month'],
              ['Languages', 'EN focus', 'AZ, EN, RU'],
              [
                'Best fit',
                'PS/Xbox lounge, international',
                'AZ room-time club, multi venue types',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Console lounge landscape',
          paragraphs: [
            'GameClub, CafeSynk and PsTally sit near console lounge SaaS (PsTally — Kenya/M-Pesa focus). Local timers and Tendir/SmartApp are separate categories.',
          ],
          bullets: [
            'GameClub — console-first SaaS',
            'CafeSynk — console lounge cloud',
            'PsTally — regional lounge (Africa)',
            'Heselo — AZ room-time panel',
          ],
        },
        {
          id: 'scenarios',
          title: 'Scenarios',
          paragraphs: ['Close category — choose with demos.'],
          bullets: [
            '3–12 PS5 booth lounge: demo GameClub and Heselo',
            'PS + karaoke rooms: Heselo (multi type)',
            '50+ PC diskless: LANGAME/IZI; GameClub/Heselo as add-on',
            'Baku club, AZ language: Heselo preferred',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Comparison checklist',
          paragraphs: ['Run the same scenario in both demos.'],
          bullets: [
            'Booth/room list and rates',
            'Book → session → bar → shift close',
            'Language and support channel',
            'Price: official GameClub vs {low} AZN Heselo',
            'Do you need PC software — separate decision',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace GameClub?',
          a: 'Same broad category (room/lounge time). Choice depends on market, language and venue types — demo both.',
        },
        {
          q: 'Is GameClub for PC clubs?',
          a: 'Console-first; for large diskless PC they recommend specialised PC software (LANGAME/IZI class).',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare GameClub pricing?',
          a: 'Official subscription quotes — no invented figures here.',
        },
        {
          q: 'Karaoke and billiards?',
          a: 'Heselo covers those room types in one panel; GameClub focuses on console lounges.',
        },
        {
          q: 'CafeSynk / PsTally?',
          a: 'Similar lounge SaaS landscape; see cafesynk-alternative and landscape notes.',
        },
        {
          q: 'Can both run together?',
          a: 'Usually not needed — pick one panel in the same category.',
        },
        {
          q: 'How does a demo work?',
          a: 'Request a Heselo demo with the same booth list and weekend flow.',
        },
      ],
      ctaTitle: 'Test console lounge flow on Heselo',
      ctaBody:
        'Request a demo. We can model stations/rooms and try booking, session, bar and cash shifts in AZ/EN/RU.',
    },
    ru: {
      shortTitle: 'Альтернатива GameClub',
      h1: 'Console lounge SaaS vs клубная панель — альтернатива GameClub',
      seoTitle: 'Альтернатива GameClub — PS/Xbox lounge vs Heselo | Heselo',
      seoDescription:
        'GameClub — console-first lounge SaaS (сеансы, бронь, бар, POS); Heselo — клубная панель времени комнат с фокусом на AZ — честное сравнение, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива gameclub',
        'альтернатива gameclub.work',
        'программа playstation lounge',
        'программа xbox клуба',
        'console lounge software',
        'saas игрового клуба',
        'Heselo',
      ],
      intro:
        'Поиск GameClub (gameclub.work) подразумевает console-first lounge SaaS: сеансы, бронь, тарифы, бар, акции, смены и POS — PlayStation/Xbox как основной сценарий. Heselo близок к той же категории времени комнат: бронь, живые сеансы, касса и склад, с AZ/EN/RU и открытой ценой для Азербайджана. Это руководство честно сравнивает двух близких конкурентов; ни один не заменяет PC diskless (LANGAME/IZI).',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: для какого рынка console lounge SaaS?',
          paragraphs: [
            'GameClub и Heselo оба продают время комнат/станций — разница в языке, поддержке рынка и глубине типов площадок.',
          ],
          bullets: [
            'Команда говорит на AZ/RU или только EN?',
            'Нужна ли открытая подписка в AZN?',
            'Только console lounge или ещё караоке/бильярд/антикафе?',
          ],
        },
        {
          id: 'when-gameclub-fits',
          title: 'Когда подходит GameClub?',
          paragraphs: [
            'Console-first UX, booth-сеансы, аренда геймпадов и mixed PC+console (PC-стек не трогают) — сила GameClub. Привычная SaaS-модель для международных lounge-операторов.',
            'Для diskless PC-клубов сам GameClub указывает на специализированный PC-софт — категория LANGAME/IZI.',
          ],
          bullets: [
            'PS/Xbox lounge — основной сценарий',
            'Удобны EN SaaS и международные платежи',
            'PC-стек должен остаться отдельно',
            'Караоке/антикафе вторичны',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если азербайджанскому (и AZ/RU) клубу нужны время комнат, бронь, кассовые смены и склад в одной панели — Heselo подходит. Гейминг, караоке, бильярд, антикафе и лаунж — один контур.',
          ],
          bullets: [
            'Ожидание UI и поддержки AZ / EN / RU',
            'Открытая цена от {low} AZN/мес.',
            'Время комнат + бар/склад + смена в одном потоке',
            'Не только PS — также караоке/бильярд/антикафе',
          ],
        },
        {
          id: 'comparison',
          title: 'GameClub и Heselo — сравнение',
          paragraphs: [
            'Цена GameClub зависит от модели подписки — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'GameClub', 'Heselo'],
            rows: [
              ['Основной фокус', 'Console-first lounge SaaS', 'Клубная панель времени комнат (AZ)'],
              ['Бронирование', 'Онлайн-бронь / PWA', 'Календарь комнат и станций'],
              ['Учёт времени', 'Booth-сеанс, тарифы', 'Живой сеанс, продление, тариф'],
              ['Бар / POS', 'Заказы к сеансу', 'Продажи в сеансе + склад'],
              ['PC diskless', 'Не заменяет (сами так пишут)', 'Не заменяет'],
              ['Цена', 'Подписка (сайт/КП)', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Фокус EN', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'PS/Xbox lounge, международный',
                'AZ клуб времени комнат, разные типы',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт console lounge',
          paragraphs: [
            'GameClub, CafeSynk и PsTally близки к console lounge SaaS (PsTally — фокус Kenya/M-Pesa). Локальные таймеры и Təndir/SmartApp — отдельные категории.',
          ],
          bullets: [
            'GameClub — console-first SaaS',
            'CafeSynk — облако console lounge',
            'PsTally — региональный lounge (Африка)',
            'Heselo — панель времени комнат AZ',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии',
          paragraphs: ['Близкая категория — выбирайте демо.'],
          bullets: [
            'Lounge на 3–12 PS5 booth: демо GameClub и Heselo',
            'PS + караоке-комнаты: Heselo (несколько типов)',
            '50+ PC diskless: LANGAME/IZI; GameClub/Heselo как дополнение',
            'Клуб в Баку, язык AZ: предпочтителен Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист сравнения',
          paragraphs: ['Прогоните один сценарий на обоих демо.'],
          bullets: [
            'Список booth/комнат и тарифов',
            'Бронь → сеанс → бар → закрытие смены',
            'Язык и канал поддержки',
            'Цена: официальный GameClub vs {low} AZN Heselo',
            'Нужен ли PC-софт — отдельное решение',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет GameClub?',
          a: 'Одна широкая категория (время комнат/lounge). Выбор зависит от рынка, языка и типов площадок — демо обоих.',
        },
        {
          q: 'GameClub для PC-клубов?',
          a: 'Console-first; для крупного diskless PC рекомендуют специализированный PC-софт (класс LANGAME/IZI).',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену GameClub?',
          a: 'По официальной подписке — без выдуманных цифр.',
        },
        {
          q: 'Караоке и бильярд?',
          a: 'Heselo покрывает эти типы комнат в одной панели; GameClub фокусируется на console lounge.',
        },
        {
          q: 'CafeSynk / PsTally?',
          a: 'Похожий ландшафт lounge SaaS; см. cafesynk-alternative и заметки ландшафта.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Обычно не нужно — выберите одну панель в той же категории.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Запросите демо Heselo с тем же списком booth и потоком выходных.',
        },
      ],
      ctaTitle: 'Проверьте поток console lounge на Heselo',
      ctaBody:
        'Запросите демо: смоделируем станции/комнаты и проверим бронь, сеанс, бар и кассовые смены на AZ/EN/RU.',
    },
  }

export function gameclubAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'gameclub-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
