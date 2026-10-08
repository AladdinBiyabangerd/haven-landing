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
      shortTitle: 'LANGAME alternativi klublar üçün',
      h1: 'PC klub softu vs otaq-vaxt — LANGAME alternativi',
      seoTitle: 'LANGAME alternativi — PC klub soft vs Heselo otaq-vaxt | Heselo',
      seoDescription:
        'LANGAME PC/oyun klubu stansiya idarəetməsidir; Heselo otaq-vaxt, bron və kassadır. Heselo LANGAME-i əvəz etmir — cədvəl, landşaft, FAQ — AZ, EN, RU.',
      keywords: [
        'langame alternativ',
        'langame alternativi',
        'lan game alternativ',
        'pc klub proqramı',
        'oyun klubu idarəetmə',
        'stansiya idarəetmə soft',
        'playstation klub',
        'Heselo',
      ],
      intro:
        'LANGAME (Lan Game) axtarışında PC və oyun klubu stansiya idarəetməsi gözlənilir: diskless/server, stansiya nəzarəti, tarif və şəbəkə bronu. Heselo otaq və stansiya saatını bron, canlı sessiya və kassa növbəsi ilə idarə edir. Bu bələdçi LANGAME tipli PC klub softunu otaq-vaxt paneli ilə müqayisə edir — Heselo PC stansiya agentini və diskless konturunu əvəz etmir.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: PC stansiya softu, yoxsa otaq-vaxt?',
          paragraphs: [
            'Eyni «oyun klubu proqramı» axtarışı iki fərqli ehtiyaca aparır: PC zalında stansiya/nəzarət softu və ayrıca otaq/konsol saatı satışı.',
          ],
          bullets: [
            'Əsas problem: PC stansiya kilidi, diskless və balans, yoxsa otaq bronu və kassa?',
            'Gəlir: dəqiqə/balans PC-də, yoxsa otaq sessiyası və bar?',
            'Resurs: açıq PC zalı, yoxsa PlayStation/karaoke otaqları?',
          ],
        },
        {
          id: 'when-langame-fits',
          title: 'LANGAME nə vaxt qalmalıdır?',
          paragraphs: [
            'Böyük PC və esports klubunda stansiya idarəetməsi, diskless/hybrid boot, şəbəkə tarifləri və mobil bron LANGAME kateqoriyasının mərkəzidir. Rusiya və MDB bazarında bu stack geniş yayılıb.',
            'Heselo bu konturu təqlid etmir. PC zalı LANGAME (və ya IZI tipli ekvivalent) saxlamalıdır; otaq-vaxt ehtiyacı ayrıca həll ola bilər.',
          ],
          bullets: [
            'PC stansiyalarında agent, boot və vaxt/balans',
            'Diskless və ya hybrid infrastruktur',
            'Şəbəkə klubları və idarəetmə şirkəti modulları',
            'Otaq saatı yoxdur və ya ikinci dərəcəlidir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'PlayStation otağı, karaoke, bilyard və ya launj otağı vaxtla satılır, bron və kassa növbəsi lazımdırsa — Heselo uyğundur. PC zalı LANGAME-də qala bilər; otaq-vaxt Heselo-da.',
            'Demo zamanı hansı resursların otaq modelində, hansılarının PC soft modelində qaldığını aydınlaşdırın.',
          ],
          bullets: [
            'Otaq və ya konsol stansiyası saatı əsas gəlir',
            'Bron → sessiya → uzadılma → kassa axını',
            'Bar/qəlyanaltı sessiyaya və stoka bağlıdır',
            'AZ / EN / RU və açıq qiymət ({low} AZN/aydan)',
          ],
        },
        {
          id: 'comparison',
          title: 'LANGAME tipli PC soft və Heselo — müqayisə',
          paragraphs: [
            'LANGAME qiyməti abunə və stansiya sayından asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'LANGAME tipli PC klub softu', 'Heselo'],
            rows: [
              ['Əsas fokus', 'PC stansiya, diskless, şəbəkə', 'Otaq/stansiya vaxtı, bron, kassa'],
              ['Stansiya agenti / boot', 'Mərkəzi funksiya', 'Əvəz etmir'],
              ['Rezervasiya', 'Mobil/şəbəkə bron (PC fokus)', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'PC balans/dəqiqə', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'Klub balans və satış konturu', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Abunə/stansiya ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Əsasən RU', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'PC / esports klub şəbəkəsi',
                'Otaqlı oyun, karaoke, launj, PS otaqları',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Oyun klubu landşaftı (qısa)',
          paragraphs: [
            'PC klub softunda LANGAME və IZI eyni geniş kateqoriyadadır: stansiya nəzarəti. Otaq-vaxt üçün Heselo; sadə PS taymeri (Club Timer, Hasansoft) üçüncü kiçik kateqoriyadır.',
            '«LANGAME alternativ» axtarışı bəzən otaq paneli gözlədir — kateqoriyanı ayırmaq səhv alışın qarşısını alır.',
          ],
          bullets: [
            'LANGAME / IZI — PC stansiya və klub softu',
            'Heselo — otaq-vaxt, bron, sessiya, kassa; PC agent deyil',
            'Club Timer / Hasansoft — minimal stansiya taymeri',
            'Hibrid: LANGAME (PC zalı) + Heselo (otaqlar)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: ['PC zalı və otaq-vaxt eyni brenddə paralel işləyə bilər.'],
          bullets: [
            'Yalnız PC klubu: LANGAME kifayət; Heselo lazım deyil',
            'PS otaqları + PC zalı: LANGAME PC-də, Heselo otaq saatında',
            'Karaoke otaqları: Heselo; PC soft tələb olunmursa LANGAME yoxdur',
            'Keçid: LANGAME-i saxlayın; yalnız otaq resurslarını Heselo-ya gətirin',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Qərar checklisti',
          paragraphs: [
            'Heselo alarkən PC softunu sökməyin — otaq-vaxt ehtiyacını ayrıca yoxlayın.',
          ],
          bullets: [
            'Hansı gəlir PC balansında, hansı otaq sessiyasındadır — faizlə yazın',
            'Otaq/stansiya siyahısı və tarifləri hazırlayın',
            'Demoda bron → sessiya → kassa; PC tərəfi LANGAME-də qalsın',
            'Satış və kassa: balans satışı vs otaq ödənişi harada qeyd olunur',
            'İşçilərə iki sistem rolunu izah edin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo LANGAME-i əvəz edir?',
          a: 'Xeyr. LANGAME PC stansiya və klub softuna fokuslanır. Heselo otaq-vaxt, bron və kassadır. PC klubu LANGAME (və ya ekvivalent) saxlamalıdır.',
        },
        {
          q: 'Lan Game və LANGAME eyni şeydir?',
          a: 'Bəli — klublar tez-tez «Lan Game» deyir; rəsmi brend LANGAME Software-dir.',
        },
        {
          q: 'Heselo PC-də vaxt sayır?',
          a: 'Otaq və klub sessiyası modelində — bəli. PC istifadəçi balansı və agent — LANGAME/IZI kateqoriyasıdır.',
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
          q: 'LANGAME qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi abunə və stansiya təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Hər ikisi bir yerdə olar?',
          a: 'Bəli — tipik hibrid: LANGAME PC zalında, Heselo otaqlarda.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq resurslarınızı qurub sessiya axınını yoxlayın; PC soft demo mövzusu deyil.',
        },
      ],
      ctaTitle: 'Otaq-vaxt ehtiyacınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: otaq və stansiyalarınızı nümunə kimi qurub bron, sessiya və kassa növbəsini yoxlayaq — PC idarəetməsi LANGAME-də qala bilər.',
    },
    en: {
      shortTitle: 'LANGAME alternative for clubs',
      h1: 'PC club software vs room-time — a LANGAME alternative',
      seoTitle: 'LANGAME Alternative — PC Club Soft vs Heselo Room-Time | Heselo',
      seoDescription:
        'LANGAME is PC/gaming club station software; Heselo is room-time, booking and cash. Heselo does not replace LANGAME — table, landscape, FAQ — AZ, EN, RU.',
      keywords: [
        'LANGAME alternative',
        'Lan Game alternative',
        'PC club software',
        'gaming club management',
        'station management software',
        'room time software',
        'PlayStation club',
        'Heselo',
      ],
      intro:
        'Searches for LANGAME (Lan Game) expect PC and gaming club station software: diskless/server, station control, tariffs and network booking. Heselo manages room and station hours with booking, live sessions and cash shifts. This guide compares LANGAME-style PC club software with a room-time panel — Heselo does not replace the PC station agent or diskless stack.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: PC station software or room-time?',
          paragraphs: [
            '“Gaming club software” covers two needs: station control in a PC hall and separate room/console hour sales.',
          ],
          bullets: [
            'Core problem: PC lock, diskless and balance, or room booking and till?',
            'Revenue: minutes/balance on PC, or room session and bar?',
            'Resources: open PC hall, or PlayStation/karaoke rooms?',
          ],
        },
        {
          id: 'when-langame-fits',
          title: 'When should LANGAME stay?',
          paragraphs: [
            'In large PC and esports clubs, station control, diskless/hybrid boot, network tariffs and mobile booking sit at the centre of LANGAME’s category. The stack is widely used in Russia and the CIS.',
            'Heselo does not mimic that contour. Keep LANGAME (or an IZI-class equivalent) for the PC hall; room-time can be a separate tool.',
          ],
          bullets: [
            'Agent, boot and time/balance on PC stations',
            'Diskless or hybrid infrastructure',
            'Network clubs and management-company modules',
            'Room hours absent or secondary',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When PlayStation rooms, karaoke, billiards or lounge rooms are sold by time with booking and shift cash — Heselo fits. The PC hall can stay on LANGAME; room-time on Heselo.',
            'In a demo, clarify which resources use a room model vs a PC software model.',
          ],
          bullets: [
            'Room or console station hours are main revenue',
            'Book → session → extension → cash flow',
            'Bar/snacks tied to session and stock',
            'AZ / EN / RU and public pricing (from {low} AZN/month)',
          ],
        },
        {
          id: 'comparison',
          title: 'LANGAME-style PC software vs Heselo — comparison',
          paragraphs: [
            'LANGAME pricing depends on subscription and station count — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'LANGAME-style PC club software', 'Heselo'],
            rows: [
              ['Primary focus', 'PC stations, diskless, network', 'Room/station time, booking, cash'],
              ['Station agent / boot', 'Core feature', 'Does not replace'],
              ['Bookings', 'Mobile/network booking (PC focus)', 'Room and station calendar'],
              ['Time billing', 'PC balance/minutes', 'Live session, extension, rates'],
              ['Cash', 'Club balance and sales contour', 'Club shift + session sales'],
              ['Pricing', 'Subscription/stations', 'Public: from {low} AZN/month'],
              ['Languages', 'Primarily RU', 'AZ, EN, RU'],
              [
                'Best fit',
                'PC / esports club networks',
                'Room-based gaming, karaoke, lounge, PS rooms',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Gaming club landscape (short)',
          paragraphs: [
            'LANGAME and IZI sit in the same broad PC club software category: station control. Room-time uses Heselo; simple PS timers (Club Timer, Hasansoft) are a third small category.',
            '“LANGAME alternative” searches sometimes expect a room panel — separating categories avoids wrong purchases.',
          ],
          bullets: [
            'LANGAME / IZI — PC station and club software',
            'Heselo — room-time, booking, session, cash; not a PC agent',
            'Club Timer / Hasansoft — minimal station timer',
            'Hybrid: LANGAME (PC hall) + Heselo (rooms)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: ['PC hall and room-time can run in parallel under one brand.'],
          bullets: [
            'PC club only: LANGAME enough; Heselo not needed',
            'PS rooms + PC hall: LANGAME on PC, Heselo on room hours',
            'Karaoke rooms: Heselo; no LANGAME if no PC stack needed',
            'Migration: keep LANGAME; move only room resources to Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Decision checklist',
          paragraphs: [
            'When buying Heselo, do not remove PC software — validate room-time need separately.',
          ],
          bullets: [
            'Split revenue: PC balance vs room session — estimate shares',
            'Prepare room/station list and rates',
            'Demo book → session → cash; PC side stays on LANGAME',
            'Document where balance sales vs room payments are recorded',
            'Train staff on two-system roles',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace LANGAME?',
          a: 'No. LANGAME focuses on PC station and club software. Heselo is room-time, booking and cash. PC clubs should keep LANGAME (or equivalent).',
        },
        {
          q: 'Are Lan Game and LANGAME the same?',
          a: 'Yes — clubs often say “Lan Game”; the official brand is LANGAME Software.',
        },
        {
          q: 'Does Heselo track time on PCs?',
          a: 'In room and club session model — yes. User balance and agent on PCs — LANGAME/IZI category.',
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
          q: 'How to compare LANGAME pricing?',
          a: 'Official subscription and station quotes — no invented figures here.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes — typical hybrid: LANGAME in the PC hall, Heselo in rooms.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model room resources and session flow; PC software is not the demo topic.',
        },
      ],
      ctaTitle: 'Test your room-time need on Heselo',
      ctaBody:
        'Request a demo. We can model rooms and stations and walk booking, session and cash shifts — PC control can stay on LANGAME.',
    },
    ru: {
      shortTitle: 'Альтернатива LANGAME для клубов',
      h1: 'ПО PC-клуба vs время комнат — гид по альтернативе LANGAME',
      seoTitle: 'Альтернатива LANGAME — ПО PC-клуба vs Heselo | Heselo',
      seoDescription:
        'LANGAME — ПО станций PC/игрового клуба; Heselo — время комнат, бронь и касса. Heselo не заменяет LANGAME — таблица, ландшафт, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива langame',
        'альтернатива lan game',
        'программа pc клуба',
        'управление игровым клубом',
        'софт станций',
        'учёт времени комнат',
        'playstation клуб',
        'Heselo',
      ],
      intro:
        'Поиск LANGAME (Lan Game) подразумевает ПО станций PC и игрового клуба: diskless/сервер, контроль станций, тарифы и сетевое бронирование. Heselo ведёт часы комнат и станций через бронь, живые сеансы и кассовые смены. Это руководство сравнивает ПО PC-клуба в духе LANGAME с панелью времени комнат — Heselo не заменяет агент станций и diskless-контур.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: ПО PC-станций или время комнат?',
          paragraphs: [
            'Под «программой игрового клуба» скрываются две потребности: контроль станций в PC-зале и отдельная продажа часов комнат/консолей.',
          ],
          bullets: [
            'Главная задача: блокировка PC, diskless и баланс или бронь комнат и касса?',
            'Выручка: минуты/баланс на PC или сеанс комнаты и бар?',
            'Ресурсы: открытый PC-зал или комнаты PlayStation/караоке?',
          ],
        },
        {
          id: 'when-langame-fits',
          title: 'Когда оставить LANGAME?',
          paragraphs: [
            'В крупных PC и киберспортивных клубах контроль станций, diskless/hybrid boot, сетевые тарифы и мобильная бронь — центр категории LANGAME. Стек широко распространён в России и СНГ.',
            'Heselo не имитирует этот контур. PC-зал оставляйте на LANGAME (или аналоге класса IZI); время комнат — отдельный инструмент.',
          ],
          bullets: [
            'Агент, boot и баланс/время на PC-станциях',
            'Diskless или hybrid-инфраструктура',
            'Сетевые клубы и модули управляющих компаний',
            'Часов комнат нет или они вторичны',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если комнаты PlayStation, караоке, бильярд или лаунж продаются по времени с бронью и кассовой сменой — Heselo подходит. PC-зал может остаться на LANGAME; время комнат — в Heselo.',
            'На демо разделите, какие ресурсы в модели комнаты, какие — в модели PC-софта.',
          ],
          bullets: [
            'Часы комнаты или консольной станции — основная выручка',
            'Поток бронь → сеанс → продление → касса',
            'Бар/закуски к сеансу и складу',
            'AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'ПО PC в духе LANGAME и Heselo — сравнение',
          paragraphs: [
            'Цена LANGAME зависит от подписки и числа станций — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'ПО PC-клуба (LANGAME)', 'Heselo'],
            rows: [
              ['Основной фокус', 'PC-станции, diskless, сеть', 'Время комнаты/станции, бронь, касса'],
              ['Агент / boot', 'Ключевая функция', 'Не заменяет'],
              ['Бронирование', 'Мобильная/сетевая бронь (PC)', 'Календарь комнат и станций'],
              ['Учёт времени', 'Баланс/минуты на PC', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Баланс и продажи клуба', 'Клубная смена + продажи в сеансе'],
              ['Цена', 'Подписка/станции', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'В основном RU', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Сети PC / киберспорт-клубов',
                'Комнатный гейминг, караоке, лаунж, PS-комнаты',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт игрового клуба (кратко)',
          paragraphs: [
            'LANGAME и IZI — одна широкая категория ПО PC-клуба: контроль станций. Время комнат — Heselo; простой PS-таймер (Club Timer, Hasansoft) — третья малая категория.',
            'Поиск «альтернатива LANGAME» иногда ждёт комнатную панель — разделение категорий экономит ошибочные покупки.',
          ],
          bullets: [
            'LANGAME / IZI — ПО PC-станций и клуба',
            'Heselo — время комнат, бронь, сеанс, касса; не PC-агент',
            'Club Timer / Hasansoft — минимальный таймер станций',
            'Гибрид: LANGAME (PC-зал) + Heselo (комнаты)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: ['PC-зал и время комнат могут работать параллельно под одним брендом.'],
          bullets: [
            'Только PC-клуб: хватает LANGAME; Heselo не нужен',
            'PS-комнаты + PC-зал: LANGAME на PC, Heselo на часы комнат',
            'Караоке-комнаты: Heselo; без LANGAME, если не нужен PC-стек',
            'Переход: оставьте LANGAME; перенесите только комнатные ресурсы в Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист решения',
          paragraphs: [
            'Покупая Heselo, не снимайте PC-софт — отдельно проверьте потребность во времени комнат.',
          ],
          bullets: [
            'Доля выручки: баланс PC vs сеанс комнаты',
            'Список комнат/станций и тарифов',
            'На демо: бронь → сеанс → касса; PC остаётся на LANGAME',
            'Где учитываются пополнения баланса vs оплата комнаты',
            'Обучите персонал двум системам',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет LANGAME?',
          a: 'Нет. LANGAME — ПО PC-станций и клуба. Heselo — время комнат, бронь и касса. PC-клубу нужен LANGAME (или эквивалент).',
        },
        {
          q: 'Lan Game и LANGAME — одно и то же?',
          a: 'Да — клубы часто говорят «Lan Game»; официальный бренд — LANGAME Software.',
        },
        {
          q: 'Heselo считает время на PC?',
          a: 'В модели сеанса комнаты/клуба — да. Баланс пользователя и агент на PC — категория LANGAME/IZI.',
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
          q: 'Как сравнить цену LANGAME?',
          a: 'По официальной подписке и станциям — без выдуманных цифр.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да — типичный гибрид: LANGAME в PC-зале, Heselo в комнатах.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте комнаты и поток сеанса; PC-софт не тема демо.',
        },
      ],
      ctaTitle: 'Проверьте потребность во времени комнат на Heselo',
      ctaBody:
        'Запросите демо: смоделируем комнаты и станции и проверим бронь, сеанс и смены — управление PC может остаться на LANGAME.',
    },
  }

export function langameAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'langame-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
