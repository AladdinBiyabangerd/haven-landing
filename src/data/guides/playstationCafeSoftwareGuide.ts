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
      shortTitle: 'PlayStation kafe proqramı alternativi',
      h1: 'Sadə taymer vs klub paneli — PlayStation kafe proqramı',
      seoTitle: 'PlayStation kafe proqramı alternativi — taymer vs Heselo | Heselo',
      seoDescription:
        'Hasansoft tipli stansiya taymeri vs Heselo klub paneli. Sadə taymer nə vaxt kifayətdir, nə vaxt bron və kassa lazımdır — cədvəl, FAQ — AZ, EN, RU.',
      keywords: [
        'playstation kafe proqramı',
        'playstation klub proqramı',
        'oyun klubu taymer',
        'hasansoft alternativ',
        'stansiya vaxtı proqramı',
        'klub idarəetmə',
        'otaq rezervasiya',
        'Heselo',
      ],
      intro:
        'PlayStation kafe və oyun klubunda tez-tez sadə stansiya taymeri (Hasansoft tipli həllər) işləyir: vaxt başlayır, bitəndə xəbərdarlıq. Kiçik həcmdə bu kifayət edə bilər. Bron, bir neçə növbə kassası, stok və otaq rezervasiyası artanda taymer boşluq buraxır. Bu bələdçi sadə taymer kateqoriyasını Heselo ilə müqayisə edir — sadə taymer yetəndə onu saxlamağı tövsiyə edirik.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: yalnız taymer, yoxsa klub axını?',
          paragraphs: [
            'Stansiya sayı və gündəlik işin mürəkkəbliyi taymer vs panel qərarını verir.',
          ],
          bullets: [
            'Rezervasiya: gəlişdə boş stansiya, yoxsa öncədən bron?',
            'Kassa: bir kassir, yoxsa növbə və sessiyaya bağlı satış?',
            'Otaq: yalnız açıq stansiya, yoxsa ayrıca otaq/stansiya təqvimi?',
          ],
        },
        {
          id: 'when-timer-fits',
          title: 'Sadə taymer (Hasansoft tipli) nə vaxt qalmalıdır?',
          paragraphs: [
            'Kiçik PlayStation kafesində 5–15 stansiya, növbə ilə oturma və nağd/kart ödənişi masada bitirsə, stansiya taymeri effektiv və ucuz qala bilər. Proqram yalnız vaxtı izləyir — bu, bəzən kifayət edən minimal ehtiyacdır.',
            'Taymeri pisləmirik: yanlış yerdə klub paneli almaq da boş xərc ola bilər. Stansiya kilidləmə və PC idarəetməsi ayrı kateqoriyadır (məs. IZI); Heselo otaq-vaxt və kassaya fokuslanır.',
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
          title: 'Sadə stansiya taymeri və Heselo — müqayisə',
          paragraphs: [
            'Hasansoft və oxşar taymerlərin qiyməti lisenziya və stansiya sayından asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Sadə stansiya taymeri', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Stansiyada vaxt sayğacı', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['Rezervasiya', 'Adətən yox', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Taymer start/stop', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'Manual və ya minimal', 'Klub növbəsi + sessiya satışı'],
              ['Stok', 'Adətən yox', 'Sessiyaya bağlı satış və stok izləmə'],
              ['Qiymət', 'Lisenziya/stansiya ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Tez-tez AZ', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Kiçik PS kafe, taymer kifayət',
                'Böyüyən klub, bron və kassa ehtiyacı',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'PlayStation kafe proqramı landşaftı (qısa)',
          paragraphs: [
            'Azərbaycan oyun klubunda tez-tez üç ayrı ehtiyac görünür: (1) stansiya taymeri — Club Timer, Hasansoft, Akinsoft; (2) PC kilidləmə — IZI/LANGAME; (3) otaq-vaxt, bron və kassa — Heselo (və console lounge SaaS: GameClub). Bir proqram hamısını əvəz etmir.',
            'Sadə taymer axtarışında Club Timer, Hasansoft və Akinsoft ad çəkilir; qiymət və funksiyanı birbaşa yoxlayın.',
          ],
          bullets: [
            'Stansiya taymeri (Club Timer / Hasansoft / Akinsoft) — kiçik kafe',
            'PC klub idarəetməsi (IZI / LANGAME) — kilidləmə; otaq-vaxt deyil',
            'Heselo / GameClub — bron, sessiya, kassa; PC kilidləmə əvəzi deyil',
            'Böyüyəndə: taymer + panel və ya panelə keçid',
          ],
        },
        {
          id: 'scenarios',
          title: 'PlayStation klub ssenariləri',
          paragraphs: ['Eyni stansiya sayı fərqli gündə fərqli sistem tələb edir.'],
          bullets: [
            'Kiçik kafe: taymer + kağız/Excel — işləyir, bron artanda risk',
            'Orta klub: WhatsApp bron + taymer — üst-üstə rezervasiya və kassa fərqi',
            'Heselo: stansiya bronu → sessiya → uzadılma → qəlyanaltı → növbə bağlanışı',
            'PC internet klubu: IZI tipli kilidləmə qalır; otaq saatı ayrıca Heselo-da',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Taymerdən panelə keçid checklisti',
          paragraphs: [
            'Taymer yetmirsə, tam silmədən bir həftəsonu pilot paneli sınayın.',
          ],
          bullets: [
            'Stansiya/otaq siyahısı və tarifləri hazırlayın',
            'Cari bron və ödəniş harada qeyd olunur — yazın',
            'Demoda bron → sessiya → məhsul → kassa axınını keçin',
            'Taymer kiçik stansiya qrupunda ehtiyat kimi qala bilər — razılaşdırın',
            'PC kilidləmə ehtiyacı varsa, ayrıca IZI tipli həll planlaşdırın',
          ],
        },
      ],
      faq: [
        {
          q: 'Sadə taymer kifayət edirmi?',
          a: 'Kiçik PlayStation kafesində, bron olmadan və sadə kassada — çox vaxt bəli. Bron, növbə kassası və stok kritikdirsə — klub paneli baxın.',
        },
        {
          q: 'Heselo Hasansoft-u əvəz edir?',
          a: 'Eyni kateqoriya deyil. Hasansoft tipli taymer vaxt sayır; Heselo bron, sessiya, kassa və stok konturunu aparır. Taymer yetəndə saxlayın.',
        },
        {
          q: 'Heselo PC stansiyasını kilidləyir?',
          a: 'Xeyr. PC workstation kilidləməsi IZI və oxşar klub idarəetmə proqramlarının sahəsidir. Heselo otaq-vaxt və klub kassasına fokuslanır.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, saytda açıq; AZ, EN, RU.',
        },
        {
          q: 'Hasansoft qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi lisenziya və stansiya sayı təklifi ilə — burada uydurma rəqəm yoxdur.',
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
          q: 'Yalnız otaqlı PS klub?',
          a: 'Otaq saatı və bron mərkəzdədirsə Heselo uyğundur; açıq zal stansiyaları üçün taymer paralel qala bilər.',
        },
      ],
      ctaTitle: 'PlayStation klub axınınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: stansiya və otaqlarınızı nümunə kimi qurub rezervasiya, sessiya, kassa və stoku birlikdə sınayaq.',
    },
    en: {
      shortTitle: 'PlayStation café software alternative',
      h1: 'Simple timer vs club panel — PlayStation café software',
      seoTitle: 'PlayStation Café Software Alternative — Timer vs Heselo | Heselo',
      seoDescription:
        'Hasansoft-style station timer vs Heselo club panel. When a simple timer is enough and when you need booking and cash — table, FAQ — AZ, EN, RU.',
      keywords: [
        'PlayStation café software',
        'PlayStation club software',
        'gaming club timer',
        'Hasansoft alternative',
        'station time software',
        'club management',
        'room booking',
        'Heselo',
      ],
      intro:
        'PlayStation cafés and gaming clubs often run a simple station timer (Hasansoft-style tools): time starts, alert at end. At small scale that can be enough. As bookings, shift cash, stock and room reservations grow, a timer leaves gaps. This guide compares the simple timer category with Heselo — when a simple timer suffices, we recommend keeping it.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: timer only or full club flow?',
          paragraphs: ['Station count and daily complexity drive timer vs panel.'],
          bullets: [
            'Booking: walk-in free stations, or advance reservation?',
            'Cash: one cashier, or shifts and session-linked sales?',
            'Rooms: open floor only, or separate room/station calendar?',
          ],
        },
        {
          id: 'when-timer-fits',
          title: 'When should a simple timer (Hasansoft-style) stay?',
          paragraphs: [
            'In a small PlayStation café with 5–15 stations, queue seating and payment at the desk, a station timer stays effective and cheap. It only tracks time — sometimes that is the right minimum.',
            'We are not dismissing timers: buying a club panel in the wrong place wastes budget. PC lockdown and workstation control are a separate category (e.g. IZI); Heselo focuses on room-time and club cash.',
          ],
          bullets: [
            'Little or no advance booking',
            'Stock and cash shifts are simple',
            'Extensions handled with one admin click',
            'Minimal budget and no growth plan',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When station or room time is sold with bookings, extensions are frequent, and shift cash plus snack stock tie to sessions, you need a club panel. Heselo connects bookings to live sessions, rates and cash shifts.',
            'Test your station/room count and weekend peak in a demo.',
          ],
          bullets: [
            'Advance booking and room/station calendar',
            'Live session, extensions and rate packages',
            'Club shifts and product sales on sessions',
            'AZ / EN / RU and public pricing (from {low} AZN/month)',
          ],
        },
        {
          id: 'comparison',
          title: 'Simple station timer vs Heselo — comparison',
          paragraphs: [
            'Hasansoft and similar timers price by licence and station count — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Simple station timer', 'Heselo'],
            rows: [
              ['Primary focus', 'Countdown on station', 'Room/station time + club ops'],
              ['Bookings', 'Usually none', 'Room and station calendar'],
              ['Time billing', 'Timer start/stop', 'Live session, extension, rates'],
              ['Cash', 'Manual or minimal', 'Club shift + session sales'],
              ['Stock', 'Usually none', 'Session-linked sales and inventory'],
              ['Pricing', 'Licence/stations', 'Public: from {low} AZN/month'],
              ['Languages', 'Often AZ only', 'AZ, EN, RU'],
              [
                'Best fit',
                'Small PS café, timer enough',
                'Growing club, booking and cash needs',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'PlayStation café software landscape (short)',
          paragraphs: [
            'Azerbaijan gaming clubs often have three separate needs: (1) station timer — Club Timer, Hasansoft, Akinsoft; (2) PC lock — IZI/LANGAME; (3) room-time, booking and cash — Heselo (and console lounge SaaS: GameClub). One product does not replace all.',
            'Timer searches mention Club Timer, Hasansoft and Akinsoft; verify price and features directly.',
          ],
          bullets: [
            'Station timer (Club Timer / Hasansoft / Akinsoft) — small café',
            'PC club control (IZI / LANGAME) — lockdown; not room-time',
            'Heselo / GameClub — booking, session, cash; not PC lock replacement',
            'As you grow: timer + panel or move to panel',
          ],
        },
        {
          id: 'scenarios',
          title: 'PlayStation club scenarios',
          paragraphs: ['Same station count can need different systems on busy days.'],
          bullets: [
            'Small café: timer + paper/Excel — works until bookings grow',
            'Mid club: WhatsApp booking + timer — double bookings and cash gaps',
            'Heselo: station book → session → extension → snacks → shift close',
            'PC internet club: IZI-style lock stays; room hours separately on Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Timer-to-panel switch checklist',
          paragraphs: ['If the timer is not enough, pilot the panel for one weekend before removing the timer.'],
          bullets: [
            'Prepare station/room list and rates',
            'Document where bookings and payments are recorded today',
            'In demo, walk book → session → item → cash close',
            'Timer may stay as backup on a small group — agree rules',
            'If PC lockdown is needed, plan IZI-style tools separately',
          ],
        },
      ],
      faq: [
        {
          q: 'Is a simple timer enough?',
          a: 'Often yes for a small PlayStation café without booking and with simple cash. If booking, shift cash and stock are critical, look at a club panel.',
        },
        {
          q: 'Does Heselo replace Hasansoft?',
          a: 'Different category. Hasansoft-style timers count time; Heselo runs booking, session, cash and stock. Keep the timer when it is enough.',
        },
        {
          q: 'Does Heselo lock PC stations?',
          a: 'No. Workstation lockdown is IZI and similar club control software. Heselo focuses on room-time and club till.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, public on this site; AZ, EN, RU.',
        },
        {
          q: 'How to compare Hasansoft pricing?',
          a: 'Use official licence and station-count quotes — no invented figures here.',
        },
        {
          q: 'Can both run together?',
          a: 'During migration some stations can stay on timer while booking/cash use the panel — fine for a short pilot.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model your stations and rooms and walk a typical weekend flow step by step.',
        },
        {
          q: 'Room-only PS club?',
          a: 'If room hours and booking are central, Heselo fits; open-floor stations may keep a timer in parallel.',
        },
      ],
      ctaTitle: 'Test your PlayStation club flow on Heselo',
      ctaBody:
        'Request a demo. We can model your stations and rooms, then try bookings, sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Альтернатива ПО для PS-кафе',
      h1: 'Простой таймер vs клубная панель — ПО для PlayStation-кафе',
      seoTitle: 'Альтернатива ПО PlayStation-кафе — таймер vs Heselo | Heselo',
      seoDescription:
        'Таймер станций в стиле Hasansoft vs клубная панель Heselo. Когда хватает простого таймера и когда нужны бронь и касса — таблица, FAQ — AZ, EN, RU.',
      keywords: [
        'программа playstation кафе',
        'программа playstation клуба',
        'таймер игрового клуба',
        'альтернатива hasansoft',
        'учёт времени станции',
        'управление клубом',
        'бронирование комнат',
        'Heselo',
      ],
      intro:
        'В PlayStation-кафе и игровых клубах часто работает простой таймер станций (решения в духе Hasansoft): время пошло, сигнал в конце. При малом масштабе этого может хватить. Когда растут брони, кассовые смены, склад и резерв комнат, таймер оставляет пробелы. Это руководство сравнивает категорию простого таймера с Heselo — когда таймера достаточно, мы советуем его оставить.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: только таймер или полный клубный поток?',
          paragraphs: ['Число станций и сложность дня определяют таймер vs панель.'],
          bullets: [
            'Бронирование: свободные станции по приходу или предварительная бронь?',
            'Касса: один кассир или смены и продажи к сеансу?',
            'Комнаты: только открытый зал или отдельный календарь комнат/станций?',
          ],
        },
        {
          id: 'when-timer-fits',
          title: 'Когда оставить простой таймер (в духе Hasansoft)?',
          paragraphs: [
            'В малом PS-кафе на 5–15 станций с очередью и оплатой на ресепшене таймер остаётся эффективным и дешёвым. Он только считает время — иногда это правильный минимум.',
            'Мы не против таймеров: клубная панель не там — лишние траты. Блокировка PC и управление рабочими местами — отдельная категория (например IZI); Heselo — время комнат и клубная касса.',
          ],
          bullets: [
            'Предварительной брони почти нет',
            'Склад и смены простые',
            'Продления — одним кликом админа',
            'Минимальный бюджет и нет планов роста',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если время станции или комнаты продаётся с бронью, продления часты, смены и закуски привязаны к сеансу — нужна клубная панель. Heselo связывает бронь с живым сеансом, тарифом и кассовой сменой.',
            'На демо проверьте число станций/комнат и пик выходных.',
          ],
          bullets: [
            'Предварительная бронь и календарь комнат/станций',
            'Живой сеанс, продления и пакеты тарифов',
            'Клубные смены и продажи товаров к сеансу',
            'AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Простой таймер станций и Heselo — сравнение',
          paragraphs: [
            'Hasansoft и похожие таймеры ценятся по лицензии и числу станций — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Простой таймер станций', 'Heselo'],
            rows: [
              ['Основной фокус', 'Отсчёт на станции', 'Время комнаты/станции + клубные операции'],
              ['Бронирование', 'Обычно нет', 'Календарь комнат и станций'],
              ['Учёт времени', 'Старт/стоп таймера', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Вручную или минимально', 'Клубная смена + продажи в сеансе'],
              ['Склад', 'Обычно нет', 'Продажи к сеансу и учёт склада'],
              ['Цена', 'Лицензия/станции', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Часто только AZ', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Малое PS-кафе, таймера хватает',
                'Растущий клуб, нужны бронь и касса',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт ПО для PS-кафе (кратко)',
          paragraphs: [
            'В азербайджанских клубах часто три отдельные потребности: (1) таймер станций — Club Timer, Hasansoft, Akinsoft; (2) блокировка PC — IZI/LANGAME; (3) время комнат, бронь и касса — Heselo (и console lounge SaaS: GameClub). Один продукт не заменяет всё.',
            'В поиске таймеров упоминают Club Timer, Hasansoft и Akinsoft — цену и функции уточняйте напрямую.',
          ],
          bullets: [
            'Таймер станций (Club Timer / Hasansoft / Akinsoft) — малое кафе',
            'Управление PC-клубом (IZI / LANGAME) — блокировка; не время комнат',
            'Heselo / GameClub — бронь, сеанс, касса; не замена блокировки PC',
            'При росте: таймер + панель или переход на панель',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии PlayStation-клуба',
          paragraphs: ['То же число станций в busy-день требует разных систем.'],
          bullets: [
            'Малое кафе: таймер + бумага/Excel — работает, пока не растут брони',
            'Средний клуб: бронь в WhatsApp + таймер — двойные брони и касса',
            'Heselo: бронь станции → сеанс → продление → закуски → закрытие смены',
            'PC-клуб: блокировка IZI остаётся; часы комнат отдельно в Heselo',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода с таймера на панель',
          paragraphs: [
            'Если таймера мало — пилот панели на выходные до полного отказа от таймера.',
          ],
          bullets: [
            'Список станций/комнат и тарифов',
            'Зафиксируйте, где сейчас брони и оплаты',
            'На демо: бронь → сеанс → товар → закрытие кассы',
            'Таймер может остаться резервом на части станций',
            'Если нужна блокировка PC — планируйте IZI отдельно',
          ],
        },
      ],
      faq: [
        {
          q: 'Хватит ли простого таймера?',
          a: 'Часто да для малого PS-кафе без брони и с простой кассой. Если критичны бронь, смены и склад — смотрите клубную панель.',
        },
        {
          q: 'Heselo заменяет Hasansoft?',
          a: 'Разные категории. Таймеры в духе Hasansoft считают время; Heselo ведёт бронь, сеанс, кассу и склад. Оставьте таймер, если хватает.',
        },
        {
          q: 'Heselo блокирует PC-станции?',
          a: 'Нет. Блокировка рабочих мест — IZI и аналоги. Heselo — время комнат и клубная касса.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., открыто на сайте; AZ, EN, RU.',
        },
        {
          q: 'Как сравнить цену Hasansoft?',
          a: 'По официальной лицензии и числу станций — без выдуманных цифр.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'При миграции часть станций на таймере, бронь/касса на панели — нормально для короткого пилота.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте станции и комнаты и пройдите типичный выходной по шагам.',
        },
        {
          q: 'Клуб только с комнатами?',
          a: 'Если часы комнат и бронь в центре — Heselo подходит; станции в зале могут остаться на таймере.',
        },
      ],
      ctaTitle: 'Проверьте поток PS-клуба на Heselo',
      ctaBody:
        'Запросите демо: смоделируем станции и комнаты и вместе проверим бронирования, сеансы, смены и склад.',
    },
  }

export function playstationCafeSoftwareGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'playstation-cafe-software-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
