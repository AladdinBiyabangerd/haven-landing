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
      shortTitle: 'Club Timer alternativi',
      h1: 'Stansiya taymeri vs klub paneli — Club Timer alternativi',
      seoTitle: 'Club Timer alternativi — taymer vs Heselo klub paneli | Heselo',
      seoDescription:
        'Club Timer internet və PlayStation klubları üçün stansiya vaxtı sayır; Heselo bron, sessiya və kassadır. Taymer yetəndə saxlayın — cədvəl, FAQ — AZ, EN, RU.',
      keywords: [
        'club timer alternativ',
        'club timer alternativi',
        'klub taymer',
        'klub timer proqramı',
        'playstation klub taymer',
        'internet klub proqramı',
        'ps klub proqramı',
        'Heselo',
      ],
      intro:
        'Bakıda Club Timer (Klub Taymer) axtarışı çox vaxt sadə stansiya vaxtı proqramına aparır: masa başlayır, qalan vaxt və ödəniş göstərilir. Kiçik PlayStation və internet klubunda bu kifayət edə bilər. Bron, növbə kassası, stok və otaq rezervasiyası artanda taymer boşluq buraxır. Bu bələdçi Club Timer kateqoriyasını Heselo ilə müqayisə edir — taymer yetəndə onu saxlamağı tövsiyə edirik.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: yalnız taymer, yoxsa klub axını?',
          paragraphs: [
            'Stansiya sayı və gündəlik işin mürəkkəbliyi Club Timer vs panel qərarını verir.',
          ],
          bullets: [
            'Rezervasiya: gəlişdə boş stansiya, yoxsa öncədən bron?',
            'Kassa: bir kassir, yoxsa növbə və sessiyaya bağlı satış?',
            'Otaq: yalnız açıq masa, yoxsa ayrıca otaq/stansiya təqvimi?',
          ],
        },
        {
          id: 'when-timer-fits',
          title: 'Club Timer nə vaxt qalmalıdır?',
          paragraphs: [
            'Kiçik PlayStation və ya internet klubunda 5–20 stansiya, növbə ilə oturma və ödəniş masada bitirsə, Club Timer effektiv və ucuz qala bilər. Azərbaycanda quraşdırma elanlarında tez-tez adı çəkilir.',
            'Taymeri pisləmirik: yanlış yerdə klub paneli almaq da boş xərc ola bilər. PC kilidləmə (IZI/LANGAME) ayrı kateqoriyadır.',
          ],
          bullets: [
            'Öncədən bron demək olar ki, yoxdur',
            'Stok və kassa növbəsi sadədir',
            'Uzadılma admin bir kliklə həll olunur',
            'Büdcə minimaldır və böyümə planı yoxdur',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Stansiya və ya otaq vaxtı bronla satılır, uzadılma tez-tez olur, kassa növbəsi və qəlyanaltı stoku sessiyaya bağlanırsa, klub paneli lazımdır. Heselo rezervasiyanı canlı sessiyaya, tarifə və kassa növbəsinə gətirir.',
            'Demo zamanı öz stansiya/otaq sayınız və həftəsonu pikini yoxlayın.',
          ],
          bullets: [
            'Öncədən bron və otaq/stansiya təqvimi',
            'Canlı sessiya, uzadılma və tarif paketləri',
            'Klub növbəsi və sessiyaya məhsul satışı',
            'AZ / EN / RU və açıq qiymət ({low} AZN/aydan)',
          ],
        },
        {
          id: 'comparison',
          title: 'Club Timer və Heselo — müqayisə',
          paragraphs: [
            'Club Timer qiyməti quraşdırma və lisenziya modelindən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Club Timer', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Stansiyada vaxt sayğacı', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['Rezervasiya', 'Adətən yox', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Taymer start/stop', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'Manual və ya minimal', 'Klub növbəsi + sessiya satışı'],
              ['Stok', 'Adətən yox', 'Sessiyaya bağlı satış və stok izləmə'],
              ['Qiymət', 'Quraşdırma/lisenziya ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Tez-tez AZ', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Kiçik PS / internet kafe, taymer kifayət',
                'Böyüyən klub, bron və kassa ehtiyacı',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'PlayStation / internet klub landşaftı',
          paragraphs: [
            'Azərbaycanda Club Timer və Akinsoft tipli həllər yerli elanlarda görünür; Hasansoft TR bazasından gəlir. PC kilidləmə üçün IZI/LANGAME; otaq-vaxt üçün Heselo.',
          ],
          bullets: [
            'Club Timer — sadə stansiya taymeri',
            'Akinsoft / Hasansoft — oxşar taymer/kafe kateqoriyası',
            'IZI / LANGAME — PC stansiya idarəetməsi',
            'Heselo — bron, sessiya, kassa, stok',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: ['Eyni stansiya sayı fərqli gündə fərqli sistem tələb edir.'],
          bullets: [
            'Kiçik kafe: Club Timer + kağız/Excel — işləyir, bron artanda risk',
            'Orta klub: WhatsApp bron + taymer — üst-üstə rezervasiya və kassa fərqi',
            'Heselo: stansiya bronu → sessiya → uzadılma → qəlyanaltı → növbə bağlanışı',
            'PC internet klubu: IZI/LANGAME qalır; otaq saatı ayrıca Heselo-da',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Taymerdən panelə keçid checklisti',
          paragraphs: [
            'Club Timer yetmirsə, tam silmədən bir həftəsonu pilot paneli sınayın.',
          ],
          bullets: [
            'Stansiya/otaq siyahısı və tarifləri hazırlayın',
            'Cari bron və ödəniş harada qeyd olunur — yazın',
            'Demoda bron → sessiya → məhsul → kassa axınını keçin',
            'Taymer kiçik stansiya qrupunda ehtiyat kimi qala bilər',
            'PC kilidləmə ehtiyacı varsa, ayrıca IZI/LANGAME planlaşdırın',
          ],
        },
      ],
      faq: [
        {
          q: 'Club Timer kifayət edirmi?',
          a: 'Kiçik PlayStation və ya internet klubunda, bron olmadan və sadə kassada — çox vaxt bəli. Bron, növbə kassası və stok kritikdirsə — klub paneli baxın.',
        },
        {
          q: 'Heselo Club Timer-i əvəz edir?',
          a: 'Eyni kateqoriya deyil. Club Timer vaxt sayır; Heselo bron, sessiya, kassa və stok konturunu aparır. Taymer yetəndə saxlayın.',
        },
        {
          q: 'Heselo PC stansiyasını kilidləyir?',
          a: 'Xeyr. PC kilidləməsi IZI/LANGAME sahəsidir. Heselo otaq-vaxt və klub kassasına fokuslanır.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, saytda açıq; AZ, EN, RU.',
        },
        {
          q: 'Club Timer qiymətini necə müqayisə etməliyəm?',
          a: 'Yerli quraşdırıcı və lisenziya təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Hər ikisini birlikdə işlətmək olar?',
          a: 'Keçid dövründə bəzi stansiyalar taymerdə, bron/kassa paneldə qala bilər; qısa müddətli pilot üçün məqbuldur.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Stansiya və otaqlarınızı nümunə kimi qurub tipik həftəsonu axınını addım-addım yoxlayın.',
        },
        {
          q: 'Klub Taymer və Club Timer eyni şeydir?',
          a: 'Bəli — elanlarda hər iki yazı eyni kateqoriya proqramı bildirir.',
        },
      ],
      ctaTitle: 'PlayStation klub axınınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: stansiya və otaqlarınızı nümunə kimi qurub rezervasiya, sessiya, kassa və stoku birlikdə sınayaq.',
    },
    en: {
      shortTitle: 'Club Timer alternative',
      h1: 'Station timer vs club panel — a Club Timer alternative',
      seoTitle: 'Club Timer Alternative — Timer vs Heselo Club Panel | Heselo',
      seoDescription:
        'Club Timer tracks station time for internet and PlayStation clubs; Heselo is booking, session and cash. Keep the timer when it is enough — table, FAQ — AZ, EN, RU.',
      keywords: [
        'Club Timer alternative',
        'club timer software',
        'PlayStation club timer',
        'internet cafe timer',
        'gaming club timer',
        'PS club software',
        'room booking',
        'Heselo',
      ],
      intro:
        'In Baku, Club Timer searches usually mean a simple station timer: a table starts, remaining time and payment show up. In a small PlayStation or internet club that can be enough. As bookings, shift cash, stock and room reservations grow, a timer leaves gaps. This guide compares the Club Timer category with Heselo — when the timer suffices, we recommend keeping it.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: timer only or full club flow?',
          paragraphs: [
            'Station count and daily complexity drive Club Timer vs panel.',
          ],
          bullets: [
            'Bookings: walk-in empty stations, or advance booking?',
            'Cash: one cashier, or shifts and session-linked sales?',
            'Rooms: open tables only, or a separate room/station calendar?',
          ],
        },
        {
          id: 'when-timer-fits',
          title: 'When should Club Timer stay?',
          paragraphs: [
            'With 5–20 stations, walk-in seating and payment finished at the table, Club Timer can stay effective and cheap. Install listings in Azerbaijan mention it often.',
            'We do not dismiss timers: buying a club panel in the wrong place is also wasted spend. PC lock (IZI/LANGAME) is a separate category.',
          ],
          bullets: [
            'Almost no advance booking',
            'Stock and cash shifts are simple',
            'Extensions are one admin click',
            'Budget is minimal and there is no growth plan',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When station or room time is sold with booking, extensions are frequent, and shift cash plus snacks attach to sessions — you need a club panel. Heselo turns booking into live sessions, rates and cash shifts.',
            'In a demo, check your station/room count and weekend peak.',
          ],
          bullets: [
            'Advance booking and room/station calendar',
            'Live session, extensions and rate packages',
            'Club shift and product sales on sessions',
            'AZ / EN / RU and public pricing (from {low} AZN/month)',
          ],
        },
        {
          id: 'comparison',
          title: 'Club Timer vs Heselo — comparison',
          paragraphs: [
            'Club Timer pricing depends on install and licence model — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Club Timer', 'Heselo'],
            rows: [
              ['Primary focus', 'Station countdown', 'Room/station time + club ops'],
              ['Bookings', 'Usually none', 'Room and station calendar'],
              ['Time billing', 'Timer start/stop', 'Live session, extension, rates'],
              ['Cash', 'Manual or minimal', 'Club shift + session sales'],
              ['Stock', 'Usually none', 'Session sales and stock tracking'],
              ['Pricing', 'Install/licence', 'Public: from {low} AZN/month'],
              ['Languages', 'Often AZ', 'AZ, EN, RU'],
              [
                'Best fit',
                'Small PS / internet café, timer enough',
                'Growing club needing booking and cash',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'PlayStation / internet club landscape',
          paragraphs: [
            'In Azerbaijan, Club Timer and Akinsoft-style tools show up in local ads; Hasansoft comes from TR. PC lock uses IZI/LANGAME; room-time uses Heselo.',
          ],
          bullets: [
            'Club Timer — simple station timer',
            'Akinsoft / Hasansoft — similar timer/café category',
            'IZI / LANGAME — PC station control',
            'Heselo — booking, session, cash, stock',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: ['The same station count can need different systems on different days.'],
          bullets: [
            'Small café: Club Timer + paper/Excel — works until bookings grow',
            'Mid club: WhatsApp booking + timer — double books and cash drift',
            'Heselo: station booking → session → extension → snacks → shift close',
            'PC internet club: keep IZI/LANGAME; room hours on Heselo separately',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Timer-to-panel checklist',
          paragraphs: [
            'If Club Timer is not enough, pilot a panel for one weekend without full removal.',
          ],
          bullets: [
            'Prepare station/room list and rates',
            'Document where bookings and payments are recorded today',
            'Demo book → session → product → cash',
            'Timer can stay as backup on a small station group',
            'If you need PC lock, plan IZI/LANGAME separately',
          ],
        },
      ],
      faq: [
        {
          q: 'Is Club Timer enough?',
          a: 'In a small PlayStation or internet club with no booking and simple cash — often yes. If booking, shift cash and stock matter — look at a club panel.',
        },
        {
          q: 'Does Heselo replace Club Timer?',
          a: 'Different category. Club Timer counts time; Heselo runs booking, session, cash and stock. Keep the timer when it is enough.',
        },
        {
          q: 'Does Heselo lock PC stations?',
          a: 'No. PC lock is IZI/LANGAME territory. Heselo focuses on room-time and club cash.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, public on the site; AZ, EN, RU.',
        },
        {
          q: 'How to compare Club Timer pricing?',
          a: 'Local installer and licence quotes — no invented figures here.',
        },
        {
          q: 'Can both run together?',
          a: 'During transition some stations can stay on the timer while booking/cash run on the panel — fine for a short pilot.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model your stations and rooms and walk a typical weekend flow step by step.',
        },
        {
          q: 'Are Klub Taymer and Club Timer the same?',
          a: 'Yes — ads use both spellings for the same timer category.',
        },
      ],
      ctaTitle: 'Test your PlayStation club flow on Heselo',
      ctaBody:
        'Request a demo. We can model stations and rooms and try booking, session, cash and stock together.',
    },
    ru: {
      shortTitle: 'Альтернатива Club Timer',
      h1: 'Таймер станций vs клубная панель — альтернатива Club Timer',
      seoTitle: 'Альтернатива Club Timer — таймер vs Heselo | Heselo',
      seoDescription:
        'Club Timer считает время станций в интернет- и PlayStation-клубах; Heselo — бронь, сеанс и касса. Оставьте таймер, если хватает — таблица, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива club timer',
        'клуб таймер',
        'таймер playstation клуба',
        'программа интернет клуба',
        'ps клуб программа',
        'бронирование комнат',
        'Heselo',
      ],
      intro:
        'В Баку поиск Club Timer (Klub Taymer) обычно ведёт к простому таймеру станций: стол запущен, остаток времени и оплата на экране. В маленьком PlayStation или интернет-клубе этого может хватить. Когда растут брони, кассовые смены, склад и резерв комнат, таймер оставляет пробелы. Это руководство сравнивает категорию Club Timer с Heselo — когда таймера достаточно, мы советуем его оставить.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: только таймер или клубной поток?',
          paragraphs: [
            'Число станций и сложность дня определяют выбор Club Timer vs панель.',
          ],
          bullets: [
            'Бронь: свободный стол по приходу или заранее?',
            'Касса: один кассир или смены и продажи к сеансу?',
            'Комнаты: только открытые столы или отдельный календарь?',
          ],
        },
        {
          id: 'when-timer-fits',
          title: 'Когда оставить Club Timer?',
          paragraphs: [
            'При 5–20 станциях, посадке без брони и оплате у стола Club Timer может оставаться эффективным и дешёвым. В Азербайджане его часто упоминают в объявлениях установки.',
            'Мы не ругаем таймеры: панель не на своём месте — тоже пустой расход. Блокировка PC (IZI/LANGAME) — отдельная категория.',
          ],
          bullets: [
            'Почти нет предварительной брони',
            'Склад и кассовые смены простые',
            'Продление — один клик админа',
            'Минимальный бюджет без плана роста',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если время станций или комнат продаётся с бронью, продления частые, а кассовая смена и закуски привязаны к сеансу — нужна клубная панель. Heselo переводит бронь в живой сеанс, тариф и кассовую смену.',
            'На демо проверьте число станций/комнат и пик выходных.',
          ],
          bullets: [
            'Предварительная бронь и календарь комнат/станций',
            'Живой сеанс, продление и пакеты тарифов',
            'Клубная смена и продажи товаров к сеансу',
            'AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Club Timer и Heselo — сравнение',
          paragraphs: [
            'Цена Club Timer зависит от установки и лицензии — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Club Timer', 'Heselo'],
            rows: [
              ['Основной фокус', 'Счётчик времени на станции', 'Время комнаты/станции + операции клуба'],
              ['Бронирование', 'Обычно нет', 'Календарь комнат и станций'],
              ['Учёт времени', 'Старт/стоп таймера', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Вручную или минимально', 'Клубная смена + продажи в сеансе'],
              ['Склад', 'Обычно нет', 'Продажи к сеансу и учёт склада'],
              ['Цена', 'Установка/лицензия', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Часто AZ', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Малое PS / интернет-кафе, хватает таймера',
                'Растущий клуб с бронью и кассой',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт PlayStation / интернет-клуба',
          paragraphs: [
            'В Азербайджане Club Timer и решения в духе Akinsoft видны в местных объявлениях; Hasansoft — из TR. Блокировка PC — IZI/LANGAME; время комнат — Heselo.',
          ],
          bullets: [
            'Club Timer — простой таймер станций',
            'Akinsoft / Hasansoft — похожая категория таймер/кафе',
            'IZI / LANGAME — управление PC-станциями',
            'Heselo — бронь, сеанс, касса, склад',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: ['Одно и то же число станций в разные дни требует разный стек.'],
          bullets: [
            'Малое кафе: Club Timer + бумага/Excel — работает, пока не растёт бронь',
            'Средний клуб: WhatsApp-бронь + таймер — наложения и кассовый разъезд',
            'Heselo: бронь станции → сеанс → продление → закуски → закрытие смены',
            'PC интернет-клуб: IZI/LANGAME остаются; часы комнат отдельно в Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода с таймера на панель',
          paragraphs: [
            'Если Club Timer не хватает, пилотируйте панель на одни выходные без полного снятия.',
          ],
          bullets: [
            'Список станций/комнат и тарифов',
            'Где сейчас фиксируются бронь и оплата',
            'На демо: бронь → сеанс → товар → касса',
            'Таймер может остаться резервом на малой группе станций',
            'Нужна блокировка PC — отдельно планируйте IZI/LANGAME',
          ],
        },
      ],
      faq: [
        {
          q: 'Хватает ли Club Timer?',
          a: 'В маленьком PlayStation или интернет-клубе без брони и с простой кассой — часто да. Если критичны бронь, смены и склад — смотрите клубную панель.',
        },
        {
          q: 'Heselo заменяет Club Timer?',
          a: 'Разные категории. Club Timer считает время; Heselo ведёт бронь, сеанс, кассу и склад. Оставьте таймер, если хватает.',
        },
        {
          q: 'Heselo блокирует PC-станции?',
          a: 'Нет. Блокировка PC — зона IZI/LANGAME. Heselo — время комнат и касса клуба.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., открыто на сайте; AZ, EN, RU.',
        },
        {
          q: 'Как сравнить цену Club Timer?',
          a: 'По местной установке и лицензии — без выдуманных цифр.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'В переходный период часть станций на таймере, бронь/касса на панели — нормально для короткого пилота.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте станции и комнаты и пройдите типичный поток выходных шаг за шагом.',
        },
        {
          q: 'Klub Taymer и Club Timer — одно и то же?',
          a: 'Да — в объявлениях оба написания обозначают одну категорию таймера.',
        },
      ],
      ctaTitle: 'Проверьте поток PlayStation-клуба на Heselo',
      ctaBody:
        'Запросите демо: смоделируем станции и комнаты и вместе проверим бронь, сеанс, кассу и склад.',
    },
  }

export function clubTimerAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'club-timer-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
