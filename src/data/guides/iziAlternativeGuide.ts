import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
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
      shortTitle: 'IZI alternativi klublar üçün',
      h1: 'PC klub idarəetməsi vs otaq-vaxt — IZI alternativi',
      seoTitle: 'IZI alternativi — PC kilidləmə vs Heselo otaq-vaxt | Heselo',
      seoDescription:
        'IZI PC stansiya kilidləmə və klub idarəetməsidir; Heselo otaq-vaxt, bron və kassadır. Heselo PC kilidləməni əvəz etmir — cədvəl, landşaft, FAQ — AZ, EN, RU.',
      keywords: [
        'izi alternativ',
        'izi alternativi klub',
        'pc klub proqramı',
        'stansiya kilidləmə',
        'oyun klubu idarəetmə',
        'otaq vaxtı proqramı',
        'playstation klub',
        'Heselo',
      ],
      intro:
        'IZI axtarışında PC internet klubu və stansiya kilidləmə gözlənilir: istifadəçi girişi, vaxt balansı, oyun profili. Heselo isə otaq və stansiya saatını bron, canlı sessiya və kassa növbəsi ilə idarə edir. Bu bələdçi IZI tipli workstation idarəetməsini otaq-vaxt paneli ilə müqayisə edir — Heselo PC kilidləmə və stansiya agentini əvəz etmir.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: PC kilidləmə, yoxsa otaq-vaxt?',
          paragraphs: [
            'Eyni «oyun klubu» adı altında iki fərqli ehtiyac var: stansiyada PC nəzarəti və ayrıca otaq/stansiya saatı satışı.',
          ],
          bullets: [
            'Əsas problem: istifadəçi hesabı və PC bloklanması, yoxsa otaq bronu və kassa?',
            'Gəlir: balans/dəqiqə PC-də, yoxsa otaq sessiyası və bar satışı?',
            'Resurs: açıq stansiya zalı, yoxsa ayrı otaqlar və PlayStation stansiyaları?',
          ],
        },
        {
          id: 'when-izi-fits',
          title: 'IZI (PC klub idarəetməsi) nə vaxt qalmalıdır?',
          paragraphs: [
            'PC internet klubunda stansiya kilidləmə, müştəri balansı, tətbiq/qayda profili və agent IZI kateqoriyasının mərkəzidir. Bu funksiya olmadan klub texniki cəhətdən işləmir.',
            'Heselo bu konturu təqlid etmir və əvəz etməyə nəzərdə tutulmayıb. PC klubu IZI (və ya oxşar həll) saxlamalıdır; otaq-vaxt ehtiyacı ayrıca həll ola bilər.',
          ],
          bullets: [
            'PC stansiyalarında login və vaxt/balans idarəetməsi',
            'Oyun və tətbiq məhdudiyyətləri stansiya səviyyəsində',
            'Agent və server infrastrukturu mövcuddur',
            'Otaq saatı yoxdur və ya ikinci dərəcəlidir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'PlayStation otağı, karaoke, bilyard masası və ya launj otağı vaxtla satılır, bron və kassa növbəsi lazımdırsa — Heselo uyğundur. Açıq zaldakı PC stansiyaları IZI-də qala bilər; otaq-vaxt Heselo-da.',
            'Demo zamanı hansı resursların otaq modelində, hansılarının PC agent modelində qaldığını aydınlaşdırın.',
          ],
          bullets: [
            'Otaq və ya stansiya saatı əsas gəlir',
            'Bron → sessiya → uzadılma → kassa axını',
            'Bar/qəlyanaltı sessiyaya və stoka bağlıdır',
            'AZ / EN / RU və açıq qiymət ({low} AZN/aydan)',
          ],
        },
        {
          id: 'comparison',
          title: 'IZI tipli PC idarəetmə və Heselo — müqayisə',
          paragraphs: [
            'IZI qiyməti stansiya sayı və lisenziyadan asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'IZI tipli PC klub idarəetməsi', 'Heselo'],
            rows: [
              ['Əsas fokus', 'PC kilidləmə, balans, agent', 'Otaq/stansiya vaxtı, bron, kassa'],
              ['Stansiya agenti', 'Mərkəzi funksiya', 'Əvəz etmir'],
              ['Rezervasiya', 'Adətən yox və ya zəif', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'PC balans/dəqiqə', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'Balans satışı konturu', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Lisenziya/stansiya ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Tez-tez AZ/RU', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'PC internet klubu',
                'Otaqlı oyun, karaoke, launj, PS otaqları',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Oyun klubu landşaftı (qısa)',
          paragraphs: [
            'Azərbaycan PC klubunda IZI və oxşar həllər workstation nəzarətinə görə tanınır. Otaq-vaxt, karaoke və PlayStation otaqları üçün ayrıca klub paneli (Heselo) baxılır. Sadə stansiya taymeri (Hasansoft tipli) üçüncü kiçik kateqoriyadır — yalnız vaxt sayğacı.',
            '«IZI alternativi» axtarışı bəzən otaq proqramı gözlədir; kateqoriyanı ayırmaq səhv alış-verişin qarşısını alır.',
          ],
          bullets: [
            'IZI — PC kilidləmə və klub agenti',
            'Heselo — otaq-vaxt, bron, sessiya, kassa; PC kilidləmə deyil',
            'Stansiya taymeri — minimal PS kafe',
            'Hibrid klub: IZI (PC zalı) + Heselo (otaqlar)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: ['PC zalı və otaq-vaxt eyni brenddə paralel işləyə bilər.'],
          bullets: [
            'Yalnız PC klubu: IZI kifayət; Heselo lazım deyil',
            'PS otaqları + PC zalı: IZI PC-də, Heselo otaq saatında',
            'Karaoke otaqları: Heselo; PC idarəetməsi tələb olunmursa IZI yoxdur',
            'Keçid: IZI-ni saxlayın; yalnız otaq resurslarını Heselo-ya gətirin',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Qərar checklisti',
          paragraphs: [
            'Heselo alarkən PC agentini sökməyin — otaq-vaxt ehtiyacını ayrıca yoxlayın.',
          ],
          bullets: [
            'Hansı gəlir PC balansında, hansı otaq sessiyasındadır — faizlə yazın',
            'Otaq/stansiya siyahısı və tarifləri hazırlayın',
            'Demoda bron → sessiya → kassa; PC tərəfi IZI-də qalsın',
            'Satış və kassa: balans satışı vs otaq ödənişi harada qeyd olunur',
            'İşçilərə iki sistem rolunu izah edin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo IZI-ni əvəz edir?',
          a: 'Xeyr. IZI PC stansiya kilidləmə və klub agentinə fokuslanır. Heselo otaq-vaxt, bron və kassadır. PC klubu IZI (və ya ekvivalent) saxlamalıdır.',
        },
        {
          q: 'Heselo PC-də vaxt sayır?',
          a: 'Otaq və klub sessiyası modelində — bəli. PC istifadəçi balansı və agent kilidləməsi — IZI kateqoriyasıdır.',
        },
        {
          q: 'Hansı klublar üçün Heselo?',
          a: 'Otaqlı oyun, karaoke, bilyard, antikafe, launj — saat satışı və bron mərkəzdə.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'IZI qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi stansiya lisenziyası ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Hər ikisi bir yerdə olar?',
          a: 'Bəli — tipik hibrid: IZI PC zalında, Heselo otaqlarda.',
        },
        {
          q: 'Yalnız PlayStation stansiyası, PC yox?',
          a: 'PC agent lazım deyilsə IZI tələb olunmaya bilər; otaq/stansiya vaxtı üçün Heselo və ya sadə taymer baxın.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq resurslarınızı qurub sessiya axınını yoxlayın; PC kilidləmə demo mövzusu deyil.',
        },
      ],
      ctaTitle: 'Otaq-vaxt ehtiyacınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: otaq və stansiyalarınızı nümunə kimi qurub bron, sessiya və kassa növbəsini yoxlayaq — PC idarəetməsi IZI-də qala bilər.',
    },
    en: {
      shortTitle: 'IZI alternative for clubs',
      h1: 'PC club control vs room-time — an IZI alternative guide',
      seoTitle: 'IZI Alternative — PC Lock vs Heselo Room-Time | Heselo',
      seoDescription:
        'IZI is PC station lock and club control; Heselo is room-time, booking and cash. Heselo does not replace PC locking — table, landscape, FAQ — AZ, EN, RU.',
      keywords: [
        'IZI alternative',
        'IZI alternative club',
        'PC club software',
        'station lockdown',
        'gaming club management',
        'room time software',
        'PlayStation club',
        'Heselo',
      ],
      intro:
        'Searches for IZI expect PC internet café control: user login, time balance, game profiles. Heselo manages room and station hours with booking, live sessions and cash shifts. This guide compares IZI-style workstation control with a room-time panel — Heselo does not replace PC lock and station agents.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: PC lock or room-time?',
          paragraphs: [
            'Under “gaming club” there are two different needs: PC supervision on stations and separate room/station hour sales.',
          ],
          bullets: [
            'Core problem: user accounts and PC lock, or room booking and till?',
            'Revenue: balance/minutes on PC, or room session and bar sales?',
            'Resources: open station hall, or separate rooms and PlayStation stations?',
          ],
        },
        {
          id: 'when-izi-fits',
          title: 'When should IZI (PC club control) stay?',
          paragraphs: [
            'In a PC internet club, station lock, customer balance, app rules and the agent are central to IZI’s category. Without that stack the club does not run technically.',
            'Heselo does not mimic or replace that contour. PC clubs should keep IZI (or equivalent); room-time can be a separate tool.',
          ],
          bullets: [
            'Login and time/balance on PC stations',
            'Game and app restrictions at station level',
            'Agent and server infrastructure in place',
            'Room hours absent or secondary',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When PlayStation rooms, karaoke, billiards or lounge rooms are sold by time with booking and shift cash — Heselo fits. Open-hall PCs can stay on IZI; room-time on Heselo.',
            'In a demo, clarify which resources use room model vs PC agent model.',
          ],
          bullets: [
            'Room or station hours are main revenue',
            'Book → session → extension → cash flow',
            'Bar/snacks tied to session and stock',
            'AZ / EN / RU and public pricing (from {low} AZN/month)',
          ],
        },
        {
          id: 'comparison',
          title: 'IZI-style PC control vs Heselo — comparison',
          paragraphs: ['IZI pricing depends on stations and licence — no invented figures here.'],
          table: {
            headers: ['Aspect', 'IZI-style PC club control', 'Heselo'],
            rows: [
              ['Primary focus', 'PC lock, balance, agent', 'Room/station time, booking, cash'],
              ['Station agent', 'Core feature', 'Does not replace'],
              ['Bookings', 'Usually none or weak', 'Room and station calendar'],
              ['Time billing', 'PC balance/minutes', 'Live session, extension, rates'],
              ['Cash', 'Balance top-up contour', 'Club shift + session sales'],
              ['Pricing', 'Licence/stations', 'Public: from {low} AZN/month'],
              ['Languages', 'Often AZ/RU', 'AZ, EN, RU'],
              [
                'Best fit',
                'PC internet club',
                'Room-based gaming, karaoke, lounge, PS rooms',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Gaming club landscape (short)',
          paragraphs: [
            'In Azerbaijan, IZI and similar tools are known for workstation control. Room-time, karaoke and PlayStation rooms use a separate club panel (Heselo). Simple station timers (Hasansoft-style) are a third small category — countdown only.',
            '“IZI alternative” searches sometimes expect room software; separating categories avoids wrong purchases.',
          ],
          bullets: [
            'IZI — PC lock and club agent',
            'Heselo — room-time, booking, session, cash; not PC lock',
            'Station timer — minimal PS café',
            'Hybrid club: IZI (PC hall) + Heselo (rooms)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: ['PC hall and room-time can run in parallel under one brand.'],
          bullets: [
            'PC club only: IZI enough; Heselo not needed',
            'PS rooms + PC hall: IZI on PC, Heselo on room hours',
            'Karaoke rooms: Heselo; no IZI if no PC control needed',
            'Migration: keep IZI; move only room resources to Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Decision checklist',
          paragraphs: ['When buying Heselo, do not remove the PC agent — validate room-time need separately.'],
          bullets: [
            'Split revenue: PC balance vs room session — estimate shares',
            'Prepare room/station list and rates',
            'Demo book → session → cash; PC side stays on IZI',
            'Document where balance sales vs room payments are recorded',
            'Train staff on two-system roles',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace IZI?',
          a: 'No. IZI focuses on PC station lock and club agent. Heselo is room-time, booking and cash. PC clubs should keep IZI (or equivalent).',
        },
        {
          q: 'Does Heselo track time on PCs?',
          a: 'In room and club session model — yes. User balance and agent lock on PCs — IZI category.',
        },
        {
          q: 'Which clubs is Heselo for?',
          a: 'Room-based gaming, karaoke, billiards, anticafe, lounge — hourly sales and booking central.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare IZI pricing?',
          a: 'Official station licence quotes — no invented figures here.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes — typical hybrid: IZI in PC hall, Heselo in rooms.',
        },
        {
          q: 'PlayStation only, no PCs?',
          a: 'No PC agent needed — IZI may not apply; consider Heselo or a simple timer for station time.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model room resources and session flow; PC lock is not the demo topic.',
        },
      ],
      ctaTitle: 'Test your room-time need on Heselo',
      ctaBody:
        'Request a demo. We can model rooms and stations and walk booking, session and cash shifts — PC control can stay on IZI.',
    },
    ru: {
      shortTitle: 'Альтернатива IZI для клубов',
      h1: 'Управление PC-клубом vs время комнат — гид по альтернативе IZI',
      seoTitle: 'Альтернатива IZI — блокировка PC vs Heselo | Heselo',
      seoDescription:
        'IZI — блокировка PC-станций и управление клубом; Heselo — время комнат, бронь и касса. Heselo не заменяет блокировку PC — таблица, ландшафт, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива izi',
        'альтернатива izi клуб',
        'программа pc клуба',
        'блокировка станций',
        'управление игровым клубом',
        'учёт времени комнат',
        'playstation клуб',
        'Heselo',
      ],
      intro:
        'Поиск IZI подразумевает управление PC-клубом: вход пользователя, баланс времени, игровые профили. Heselo ведёт часы комнат и станций через бронь, живые сеансы и кассовые смены. Это руководство сравнивает управление рабочими местами в духе IZI с панелью времени комнат — Heselo не заменяет блокировку PC и агент на станциях.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: блокировка PC или время комнат?',
          paragraphs: [
            'Под «игровым клубом» скрываются две разные потребности: контроль PC на станциях и отдельная продажа часов комнат/станций.',
          ],
          bullets: [
            'Главная задача: учётки и блокировка PC или бронь комнат и касса?',
            'Выручка: баланс/минуты на PC или сеанс комнаты и бар?',
            'Ресурсы: открытый зал станций или отдельные комнаты и PlayStation?',
          ],
        },
        {
          id: 'when-izi-fits',
          title: 'Когда оставить IZI (управление PC-клубом)?',
          paragraphs: [
            'В PC-клубе блокировка станций, баланс клиента, правила приложений и агент — центр категории IZI. Без этого клуб технически не работает.',
            'Heselo не имитирует и не заменяет этот контур. PC-клубу нужен IZI (или аналог); время комнат — отдельный инструмент.',
          ],
          bullets: [
            'Логин и баланс/время на PC-станциях',
            'Ограничения игр и приложений на станции',
            'Есть агент и серверная инфраструктура',
            'Часов комнат нет или они вторичны',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если комнаты PlayStation, караоке, бильярд или лаунж продаются по времени с бронью и кассовой сменой — Heselo подходит. PC в зале могут остаться на IZI; время комнат — в Heselo.',
            'На демо разделите, какие ресурсы в модели комнаты, какие — в модели PC-агента.',
          ],
          bullets: [
            'Часы комнаты или станции — основная выручка',
            'Поток бронь → сеанс → продление → касса',
            'Бар/закуски к сеансу и складу',
            'AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Управление PC в духе IZI и Heselo — сравнение',
          paragraphs: [
            'Цена IZI зависит от станций и лицензии — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Управление PC-клубом (IZI)', 'Heselo'],
            rows: [
              ['Основной фокус', 'Блокировка PC, баланс, агент', 'Время комнаты/станции, бронь, касса'],
              ['Агент станции', 'Ключевая функция', 'Не заменяет'],
              ['Бронирование', 'Обычно нет или слабо', 'Календарь комнат и станций'],
              ['Учёт времени', 'Баланс/минуты на PC', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Пополнение баланса', 'Клубная смена + продажи в сеансе'],
              ['Цена', 'Лицензия/станции', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Часто AZ/RU', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'PC internet-клуб',
                'Комнатный гейминг, караоке, лаунж, PS-комнаты',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт игрового клуба (кратко)',
          paragraphs: [
            'В Азербайджане IZI и аналоги известны контролем рабочих мест. Время комнат, караоке и PS-комнаты — отдельная клубная панель (Heselo). Простой таймер станций (Hasansoft) — третья малая категория.',
            'Поиск «альтернатива IZI» иногда ждёт комнатное ПО — разделение категорий экономит ошибочные покупки.',
          ],
          bullets: [
            'IZI — блокировка PC и агент клуба',
            'Heselo — время комнат, бронь, сеанс, касса; не блокировка PC',
            'Таймер станций — минимальное PS-кафе',
            'Гибрид: IZI (PC-зал) + Heselo (комнаты)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: ['PC-зал и время комнат могут работать параллельно под одним брендом.'],
          bullets: [
            'Только PC-клуб: хватает IZI; Heselo не нужен',
            'PS-комнаты + PC-зал: IZI на PC, Heselo на часы комнат',
            'Караоке-комнаты: Heselo; без IZI, если не нужен контроль PC',
            'Переход: оставьте IZI; перенесите только комнатные ресурсы в Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист решения',
          paragraphs: [
            'Покупая Heselo, не снимайте PC-агент — отдельно проверьте потребность во времени комнат.',
          ],
          bullets: [
            'Доля выручки: баланс PC vs сеанс комнаты',
            'Список комнат/станций и тарифов',
            'На демо: бронь → сеанс → касса; PC остаётся на IZI',
            'Где учитываются пополнения баланса vs оплата комнаты',
            'Обучите персонал двум системам',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет IZI?',
          a: 'Нет. IZI — блокировка PC-станций и агент клуба. Heselo — время комнат, бронь и касса. PC-клубу нужен IZI (или эквивалент).',
        },
        {
          q: 'Heselo считает время на PC?',
          a: 'В модели сеанса комнаты/клуба — да. Баланс пользователя и блокировка агентом на PC — категория IZI.',
        },
        {
          q: 'Для каких клубов Heselo?',
          a: 'Комнатный гейминг, караоке, бильярд, антикафе, лаунж — продажа часов и бронь в центре.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену IZI?',
          a: 'По официальной лицензии на станции — без выдуманных цифр.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да — типичный гибрид: IZI в PC-зале, Heselo в комнатах.',
        },
        {
          q: 'Только PlayStation, без PC?',
          a: 'Агент PC не нужен — IZI может не требоваться; для времени станций — Heselo или простой таймер.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте комнаты и поток сеанса; блокировка PC не тема демо.',
        },
      ],
      ctaTitle: 'Проверьте потребность во времени комнат на Heselo',
      ctaBody:
        'Запросите демо: смоделируем комнаты и станции и проверим бронь, сеанс и смены — управление PC может остаться на IZI.',
    },
  }

export function iziAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'izi-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
