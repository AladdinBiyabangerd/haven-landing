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
      shortTitle: 'Təndir alternativi klublar üçün',
      h1: 'HoReCa+gaming ekosistem vs otaq-vaxt paneli — Təndir',
      seoTitle: 'Təndir alternativi — restoran/gaming vs Heselo klub paneli | Heselo',
      seoDescription:
        'Təndir restoran, kafe və oyun klubları üçün geniş idarəetmə ekosistemidir; Heselo otaq-vaxt, bron və kassaya fokuslanır — cədvəl, FAQ — AZ, EN, RU.',
      keywords: [
        'təndir alternativ',
        'tendir alternativ',
        'tendir.fun alternativ',
        'oyun klubu proqramı bakı',
        'ps klub proqramı',
        'restoran pos gaming',
        'Heselo',
      ],
      intro:
        'Təndir (tendir.fun) axtarışında Azərbaycanda restoran, kafe və oyun klubları üçün geniş idarəetmə ekosistemi gözlənilir: POS, anbar, KDS, PlayStation alətləri və ödənişlər. Heselo isə otaq və stansiya saatını bron, canlı sessiya və kassa növbəsi ilə idarə edir — mətbəx/KDS əvəzi deyil. Bu bələdçi Təndir tipli geniş platformanı otaq-vaxt paneli ilə müqayisə edir; güclü mətbəx və restoran zalı lazımdırsa Təndir kateqoriyası qala bilər.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: geniş ekosistem, yoxsa otaq-vaxt paneli?',
          paragraphs: [
            'AI və yerli axtarışlarda Təndir «Bakı PS klub proqramı» siyahılarında görünür — amma məhsul restoran+gaming genişliyindədir.',
          ],
          bullets: [
            'Əsas ağrı: mətbəx/KDS/restoran POS, yoxsa otaq bronu və sessiya?',
            'PlayStation: əlavə modul, yoxsa əsas gəlir axını?',
            'Komanda: bir platforma hər şeyə, yoxsa fokuslu klub paneli?',
          ],
        },
        {
          id: 'when-tendir-fits',
          title: 'Təndir nə vaxt qalmalıdır?',
          paragraphs: [
            'Restoran və kafenin yanında gaming zalı olan məkanlarda POS, anbar, KDS və ödəniş bir ekosistemdə lazımdırsa Təndir kateqoriyası məntiqli ola bilər.',
            'Heselo mətbəx axınını əvəz etmir. Güclü HoReCa stack lazımdırsa Təndir (və ya restoran POS) saxlanıla bilər; otaq-vaxt ayrıca və ya Heselo ilə.',
          ],
          bullets: [
            'Mətbəx, KDS və restoran zalı mərkəzdədir',
            'Gaming əlavə və ya qarışıq gəlirdir',
            'Geniş platforma və ödəniş inteqrasiyası lazımdır',
            'Otaq-vaxt ikinci dərəcəlidir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Oyun, karaoke, bilyard və ya launj otağı vaxtla satılır, bron və kassa növbəsi əsasdırsa — Heselo uyğundur. Restoran POS paralel qala bilər.',
          ],
          bullets: [
            'Otaq/stansiya saatı əsas gəlir',
            'Bron → sessiya → uzadılma → kassa',
            'Bar/qəlyanaltı sessiyaya və stoka bağlıdır',
            'AZ / EN / RU, {low} AZN/aydan',
          ],
        },
        {
          id: 'comparison',
          title: 'Təndir və Heselo — müqayisə',
          paragraphs: [
            'Təndir qiyməti paket və razılaşmadan asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Təndir (geniş ekosistem)', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Restoran/kafe + gaming ekosistem', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['Mətbəx / KDS', 'Ekosistemdə nəzərdə tutula bilər', 'Əvəz etmir'],
              ['Rezervasiya', 'Platformadan asılı', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Gaming alətləri (platforma)', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'POS / ödəniş konturu', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Sorğu ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'AZ fokus', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'HoReCa + qarışıq gaming',
                'Otaq-vaxt klub, fokuslu panel',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Bakı oyun klubu landşaftı',
          paragraphs: [
            'GEO ölçmələrində Təndir, SmartApp, GameClub və Club Timer «PS klub proqramı» cavablarında çıxır. Kateqoriyanı ayırın: restoran ekosistemi vs taymer vs otaq paneli.',
          ],
          bullets: [
            'Təndir / SmartApp — yerli geniş platformalar',
            'Club Timer / Hasansoft — sadə taymer',
            'GameClub — console lounge SaaS',
            'Heselo — otaq-vaxt klub paneli',
          ],
        },
        {
          id: 'scenarios',
          title: 'Ssenarilər',
          paragraphs: ['Eyni məkan iki sistemə ehtiyac duya bilər.'],
          bullets: [
            'Restoran + kiçik PS künc: Təndir/restoran POS əsası',
            'Otaqlı PS/karaoke klub: Heselo',
            'Hibrid: mətbəx restoran POS-da, otaqlar Heselo-da',
            'Yalnız taymer axtarışı: Club Timer kateqoriyası',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Qərar checklisti',
          paragraphs: ['Platformanı silməzdən əvvəl otaq axınını demoda yoxlayın.'],
          bullets: [
            'Gəlirin neçə faizi otaq saatındadır',
            'KDS/mətbəx olmadan işləyə bilərsinizmi',
            'Demo: bron → sessiya → kassa',
            'Qiyməti rəsmi təkliflə müqayisə edin',
            'İşçilərə fokus dəyişikliyini izah edin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo Təndiri əvəz edir?',
          a: 'Tam əvəz deyil. Təndir geniş HoReCa+gaming ekosistemidir; Heselo otaq-vaxt və klub kassasına fokuslanır. Mətbəx lazımdırsa restoran stack saxlayın.',
        },
        {
          q: 'Təndir PS klub üçündürmü?',
          a: 'Gaming alətləri reklam olunur; məhsul restoran/kafe genişliyindədir. Otaq-vaxt əsasdırsa ayrıca paneli yoxlayın.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'Təndir qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi paket təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Mətbəx varmı Heselo-da?',
          a: 'Xeyr — Heselo KDS/mətbəx POS əvəzi deyil.',
        },
        {
          q: 'Hər ikisi bir yerdə?',
          a: 'Bəli: restoran stack + Heselo otaqlarda.',
        },
        {
          q: 'SmartApp ilə fərqi?',
          a: 'Hər ikisi yerli geniş platformadır; ayrı bələdçi: smartapp-alternative.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq resurslarınızı qurub sessiya axınını yoxlayın.',
        },
      ],
      ctaTitle: 'Otaq-vaxt fokusunu Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: otaq və stansiyaları nümunə kimi qurub bron, sessiya və kassa növbəsini sınayaq — mətbəx stack-i ayrı qala bilər.',
    },
    en: {
      shortTitle: 'Tendir alternative for clubs',
      h1: 'HoReCa+gaming ecosystem vs room-time panel — Tendir',
      seoTitle: 'Tendir Alternative — Restaurant/Gaming vs Heselo Club Panel | Heselo',
      seoDescription:
        'Tendir is a broad management ecosystem for restaurants, cafés and gaming clubs; Heselo focuses on room-time, booking and cash — table, FAQ — AZ, EN, RU.',
      keywords: [
        'Tendir alternative',
        'tendir.fun alternative',
        'Baku gaming club software',
        'PS club software',
        'restaurant POS gaming',
        'Heselo',
      ],
      intro:
        'Searches for Tendir (tendir.fun) expect a broad Azerbaijan management ecosystem for restaurants, cafés and gaming clubs: POS, inventory, KDS, PlayStation tools and payments. Heselo manages room and station hours with booking, live sessions and cash shifts — it is not a kitchen/KDS replacement. This guide compares a Tendir-style broad platform with a room-time panel; keep a Tendir-class stack when strong kitchen and restaurant floor matter.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: broad ecosystem or room-time panel?',
          paragraphs: [
            'In AI and local search, Tendir appears on “Baku PS club software” lists — yet the product spans restaurant + gaming breadth.',
          ],
          bullets: [
            'Core pain: kitchen/KDS/restaurant POS, or room booking and sessions?',
            'PlayStation: add-on module, or main revenue flow?',
            'Team: one platform for everything, or a focused club panel?',
          ],
        },
        {
          id: 'when-tendir-fits',
          title: 'When should Tendir stay?',
          paragraphs: [
            'When a venue needs POS, inventory, KDS and payments in one ecosystem beside a gaming hall, a Tendir-class platform can make sense.',
            'Heselo does not replace kitchen flow. Keep Tendir (or restaurant POS) when HoReCa is strong; room-time can be separate or Heselo.',
          ],
          bullets: [
            'Kitchen, KDS and restaurant floor are central',
            'Gaming is add-on or mixed revenue',
            'You need a broad platform and payment integrations',
            'Room-time is secondary',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When gaming, karaoke, billiards or lounge rooms are sold by time with booking and shift cash central — Heselo fits. Restaurant POS can stay in parallel.',
          ],
          bullets: [
            'Room/station hours are main revenue',
            'Book → session → extension → cash',
            'Bar/snacks tied to session and stock',
            'AZ / EN / RU, from {low} AZN/month',
          ],
        },
        {
          id: 'comparison',
          title: 'Tendir vs Heselo — comparison',
          paragraphs: [
            'Tendir pricing depends on package and deal — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Tendir (broad ecosystem)', 'Heselo'],
            rows: [
              ['Primary focus', 'Restaurant/café + gaming ecosystem', 'Room/station time + club ops'],
              ['Kitchen / KDS', 'May be in the ecosystem', 'Does not replace'],
              ['Bookings', 'Platform-dependent', 'Room and station calendar'],
              ['Time billing', 'Gaming tools (platform)', 'Live session, extension, rates'],
              ['Cash', 'POS / payments contour', 'Club shift + session sales'],
              ['Pricing', 'On request', 'Public: from {low} AZN/month'],
              ['Languages', 'AZ focus', 'AZ, EN, RU'],
              [
                'Best fit',
                'HoReCa + mixed gaming',
                'Room-time club, focused panel',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Baku gaming club landscape',
          paragraphs: [
            'GEO checks list Tendir, SmartApp, GameClub and Club Timer for “PS club software”. Separate categories: restaurant ecosystem vs timer vs room panel.',
          ],
          bullets: [
            'Tendir / SmartApp — local broad platforms',
            'Club Timer / Hasansoft — simple timers',
            'GameClub — console lounge SaaS',
            'Heselo — room-time club panel',
          ],
        },
        {
          id: 'scenarios',
          title: 'Scenarios',
          paragraphs: ['One venue may need two systems.'],
          bullets: [
            'Restaurant + small PS corner: Tendir/restaurant POS base',
            'Room PS/karaoke club: Heselo',
            'Hybrid: kitchen on restaurant POS, rooms on Heselo',
            'Timer-only search: Club Timer category',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Decision checklist',
          paragraphs: ['Demo the room flow before ripping out a platform.'],
          bullets: [
            'What share of revenue is room hours',
            'Can you operate without KDS/kitchen',
            'Demo: book → session → cash',
            'Compare price with an official quote',
            'Explain the focus shift to staff',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace Tendir?',
          a: 'Not a full replacement. Tendir is a broad HoReCa+gaming ecosystem; Heselo focuses on room-time and club cash. Keep restaurant stack if you need kitchen.',
        },
        {
          q: 'Is Tendir for PS clubs?',
          a: 'Gaming tools are marketed; the product spans restaurant/café. If room-time is core, also evaluate a focused panel.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare Tendir pricing?',
          a: 'Official package quotes — no invented figures here.',
        },
        {
          q: 'Does Heselo have kitchen?',
          a: 'No — Heselo is not a KDS/kitchen POS replacement.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes: restaurant stack + Heselo in rooms.',
        },
        {
          q: 'Difference from SmartApp?',
          a: 'Both are local broad platforms; see smartapp-alternative.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model room resources and walk the session flow.',
        },
      ],
      ctaTitle: 'Test room-time focus on Heselo',
      ctaBody:
        'Request a demo. We can model rooms and stations and try booking, session and cash shifts — kitchen stack can stay separate.',
    },
    ru: {
      shortTitle: 'Альтернатива Təndir для клубов',
      h1: 'Экосистема HoReCa+gaming vs панель времени комнат — Təndir',
      seoTitle: 'Альтернатива Təndir — ресторан/gaming vs Heselo | Heselo',
      seoDescription:
        'Təndir — широкая экосистема для ресторанов, кафе и игровых клубов; Heselo фокусируется на времени комнат, брони и кассе — таблица, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива təndir',
        'альтернатива tendir',
        'программа игрового клуба баку',
        'ps клуб программа',
        'ресторанный pos gaming',
        'Heselo',
      ],
      intro:
        'Поиск Təndir (tendir.fun) подразумевает широкую экосистему управления в Азербайджане для ресторанов, кафе и игровых клубов: POS, склад, KDS, инструменты PlayStation и платежи. Heselo ведёт часы комнат и станций через бронь, живые сеансы и кассовые смены — это не замена кухни/KDS. Это руководство сравнивает широкую платформу в духе Təndir с панелью времени комнат; если нужна сильная кухня и ресторанный зал, стек категории Təndir можно оставить.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: широкая экосистема или панель времени комнат?',
          paragraphs: [
            'В AI и местном поиске Təndir попадает в списки «ПО PS-клуба Баку» — при этом продукт шире: ресторан + gaming.',
          ],
          bullets: [
            'Главная боль: кухня/KDS/ресторанный POS или бронь комнат и сеансы?',
            'PlayStation: доп. модуль или основной поток выручки?',
            'Команда: одна платформа на всё или сфокусированная клубная панель?',
          ],
        },
        {
          id: 'when-tendir-fits',
          title: 'Когда оставить Təndir?',
          paragraphs: [
            'Если рядом с игровым залом нужны POS, склад, KDS и платежи в одной экосистеме, платформа класса Təndir может быть логичной.',
            'Heselo не заменяет кухонный поток. Оставьте Təndir (или ресторанный POS) при сильном HoReCa; время комнат — отдельно или Heselo.',
          ],
          bullets: [
            'Кухня, KDS и ресторанный зал в центре',
            'Gaming — доп. или смешанная выручка',
            'Нужна широкая платформа и платежные интеграции',
            'Время комнат вторично',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если игровые, караоке, бильярдные или лаунж-комнаты продаются по времени с бронью и кассовой сменой в центре — Heselo подходит. Ресторанный POS может остаться параллельно.',
          ],
          bullets: [
            'Часы комнаты/станции — основная выручка',
            'Бронь → сеанс → продление → касса',
            'Бар/закуски к сеансу и складу',
            'AZ / EN / RU, от {low} AZN/мес.',
          ],
        },
        {
          id: 'comparison',
          title: 'Təndir и Heselo — сравнение',
          paragraphs: [
            'Цена Təndir зависит от пакета и договорённости — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Təndir (широкая экосистема)', 'Heselo'],
            rows: [
              ['Основной фокус', 'Ресторан/кафе + gaming-экосистема', 'Время комнаты/станции + операции клуба'],
              ['Кухня / KDS', 'Может быть в экосистеме', 'Не заменяет'],
              ['Бронирование', 'Зависит от платформы', 'Календарь комнат и станций'],
              ['Учёт времени', 'Gaming-инструменты платформы', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Контур POS / платежей', 'Клубная смена + продажи в сеансе'],
              ['Цена', 'По запросу', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Фокус AZ', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'HoReCa + смешанный gaming',
                'Клуб времени комнат, сфокусированная панель',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт игрового клуба Баку',
          paragraphs: [
            'В GEO-замерах Təndir, SmartApp, GameClub и Club Timer появляются в ответах про «ПО PS-клуба». Разделяйте категории: ресторанная экосистема vs таймер vs комнатная панель.',
          ],
          bullets: [
            'Təndir / SmartApp — локальные широкие платформы',
            'Club Timer / Hasansoft — простые таймеры',
            'GameClub — console lounge SaaS',
            'Heselo — клубная панель времени комнат',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии',
          paragraphs: ['Одно заведение может нуждаться в двух системах.'],
          bullets: [
            'Ресторан + малый PS-угол: база Təndir/ресторанный POS',
            'Комнатный PS/караоке-клуб: Heselo',
            'Гибрид: кухня на ресторанном POS, комнаты на Heselo',
            'Поиск только таймера: категория Club Timer',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист решения',
          paragraphs: ['Перед снятием платформы проверьте комнатный поток на демо.'],
          bullets: [
            'Какая доля выручки — часы комнат',
            'Можете ли работать без KDS/кухни',
            'Демо: бронь → сеанс → касса',
            'Сравните цену с официальным КП',
            'Объясните смену фокуса персоналу',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет Təndir?',
          a: 'Не полная замена. Təndir — широкая экосистема HoReCa+gaming; Heselo — время комнат и касса клуба. Нужна кухня — оставьте ресторанный стек.',
        },
        {
          q: 'Təndir для PS-клубов?',
          a: 'Gaming-инструменты есть в маркетинге; продукт шире ресторана/кафе. Если время комнат — ядро, оцените и сфокусированную панель.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену Təndir?',
          a: 'По официальному пакету — без выдуманных цифр.',
        },
        {
          q: 'Есть ли кухня в Heselo?',
          a: 'Нет — Heselo не замена KDS/кухонному POS.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да: ресторанный стек + Heselo в комнатах.',
        },
        {
          q: 'Отличие от SmartApp?',
          a: 'Обе — локальные широкие платформы; см. smartapp-alternative.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте комнатные ресурсы и пройдите поток сеанса.',
        },
      ],
      ctaTitle: 'Проверьте фокус на времени комнат на Heselo',
      ctaBody:
        'Запросите демо: смоделируем комнаты и станции и проверим бронь, сеанс и смены — кухонный стек может остаться отдельно.',
    },
  }

export function tendirAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'tendir-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
