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
      shortTitle: 'Hasansoft alternativi',
      h1: 'PlayStation cafe proqramı vs klub paneli — Hasansoft',
      seoTitle: 'Hasansoft alternativi — PS cafe proqramı vs Heselo | Heselo',
      seoDescription:
        'Hasansoft ClubPlaystation PS4/PS5 vaxt, kassa və hesabatdır; Heselo bron, canlı sessiya və klub növbəsidir — cədvəl, FAQ — AZ, EN, RU.',
      keywords: [
        'hasansoft alternativ',
        'hasansoft alternativi',
        'clubplaystation alternativ',
        'playstation cafe proqramı',
        'ps cafe programı',
        'oyun salonu proqramı',
        'Heselo',
      ],
      intro:
        'Hasansoft ClubPlaystation axtarışında PS4/PS5 salonları üçün vaxt izləmə, hesab açma-bağlama, kassa və hesabat gözlənilir. Bu, sadə stansiya/kafe proqramı kateqoriyasıdır — kiçik həcmdə effektiv ola bilər. Bron təqvimi, çoxnövbəli kassa və stok sessiyaya bağlananda boşluq yaranır. Bu bələdçi Hasansoft-u Heselo ilə müqayisə edir; taymer yetəndə Hasansoft saxlamağı tövsiyə edirik. Kateqoriya bələdçisi: playstation-cafe-software-alternative.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: PS cafe proqramı, yoxsa klub paneli?',
          paragraphs: [
            'Hasansoft stansiya vaxtı və salon kassasına fokuslanır; Heselo otaq/stansiya bronu və canlı sessiya axınıdır.',
          ],
          bullets: [
            'Öncədən bron lazımdırmı?',
            'Kassa növbəsi və sessiyaya məhsul satışı varmı?',
            'Yalnız açıq zal, yoxsa otaqlı təqvim?',
          ],
        },
        {
          id: 'when-hasansoft-fits',
          title: 'Hasansoft nə vaxt qalmalıdır?',
          paragraphs: [
            'Kiçik və orta PlayStation salonunda PS4/PS5 vaxt izləmə, avtomatik ödəniş hesablaması, müştəri və kassa hesabatı Hasansoft-un güclü tərəfidir. TR bazasında uzun illərdir istifadə olunur.',
            'Bron və otaq paneli lazım deyilsə, Hasansoft saxlanıla bilər.',
          ],
          bullets: [
            'PS4/PS5 müddət izləmə əsas ehtiyacdır',
            'Öncədən bron demək olar ki, yoxdur',
            'Kassa və hesabat salon səviyyəsində kifayətdir',
            'Büdcə lisenziya modelinə uyğundur',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Stansiya və otaq vaxtı bronla satılır, uzadılma tez-tez olur, kassa növbəsi və qəlyanaltı stoku sessiyaya bağlanırsa — Heselo uyğundur.',
          ],
          bullets: [
            'Otaq/stansiya təqvimi və bron',
            'Canlı sessiya, uzadılma, tarif paketləri',
            'Klub növbəsi + sessiya satışı + stok',
            'AZ / EN / RU, {low} AZN/aydan',
          ],
        },
        {
          id: 'comparison',
          title: 'Hasansoft və Heselo — müqayisə',
          paragraphs: [
            'Hasansoft qiyməti paket və lisenziyadan asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Hasansoft ClubPlaystation', 'Heselo'],
            rows: [
              ['Əsas fokus', 'PS cafe vaxt + salon kassa', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['Rezervasiya', 'Adətən zəif / yox', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'PS seans start/stop', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'Salon kassa və hesabat', 'Klub növbəsi + sessiya satışı'],
              ['Stok', 'Sürətli satış (məhdud)', 'Sessiyaya bağlı satış və stok'],
              ['Qiymət', 'Lisenziya/paket (sorğu)', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'TR fokus', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'PS salon, taymer + kassa kifayət',
                'Bronlu otaqlı klub, böyümə',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landşaft (qısa)',
          paragraphs: [
            'Hasansoft, Club Timer və Akinsoft eyni geniş «PS cafe proqramı» axtarışında görünür. PC soft — IZI/LANGAME; otaq paneli — Heselo. GameClub konsol lounge SaaS-dir.',
          ],
          bullets: [
            'Hasansoft — TR PS cafe proqramı',
            'Club Timer / Akinsoft — yerli/oxşar taymer-kafe',
            'GameClub — console-first lounge SaaS',
            'Heselo — otaq-vaxt klub paneli (AZ)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Ssenarilər',
          paragraphs: ['PS salon ölçüsü qərarı dəyişir.'],
          bullets: [
            'Kiçik PS cafe: Hasansoft kifayət edə bilər',
            'WhatsApp bron + Hasansoft: üst-üstə rezervasiya riski',
            'Otaqlı lounge: Heselo',
            'PC + PS: IZI/LANGAME + Heselo və ya Hasansoft (yalnız PS)',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Keçid checklisti',
          paragraphs: ['Hasansoft-u dərhal silməyin — bir həftəsonu pilot.'],
          bullets: [
            'Stansiya/otaq və tarif siyahısı',
            'Bron harada qeyd olunur — yazın',
            'Demo: bron → sessiya → məhsul → kassa',
            'Kiçik PS qrupunda Hasansoft ehtiyat qala bilər',
            'PC ehtiyacı varsa IZI/LANGAME ayrı planlaşdırın',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo Hasansoft-u əvəz edir?',
          a: 'Eyni kateqoriya deyil. Hasansoft PS cafe vaxt və salon kassasıdır; Heselo bron, sessiya və klub növbəsidir. Taymer yetəndə saxlayın.',
        },
        {
          q: 'ClubPlaystation nədir?',
          a: 'Hasansoft-un PlayStation salonları üçün vaxt, kassa və hesabat proqramıdır.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'Hasansoft qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi paket və lisenziya təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'PC kilidləmə varmı?',
          a: 'Heselo PC agentini əvəz etmir.',
        },
        {
          q: 'Kateqoriya bələdçisi haradadır?',
          a: 'Ümumi taymer vs panel: playstation-cafe-software-alternative səhifəsi.',
        },
        {
          q: 'Hər ikisi bir yerdə?',
          a: 'Keçid dövründə bəli — qısa pilot üçün.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Stansiya və otaqlarınızı qurub həftəsonu axınını yoxlayın.',
        },
      ],
      ctaTitle: 'PS klub axınınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: stansiya və otaqları nümunə kimi qurub bron, sessiya, kassa və stoku sınayaq.',
    },
    en: {
      shortTitle: 'Hasansoft alternative',
      h1: 'PlayStation café software vs club panel — Hasansoft',
      seoTitle: 'Hasansoft Alternative — PS Café Software vs Heselo | Heselo',
      seoDescription:
        'Hasansoft ClubPlaystation tracks PS4/PS5 time, cash and reports; Heselo is booking, live session and club shifts — table, FAQ — AZ, EN, RU.',
      keywords: [
        'Hasansoft alternative',
        'ClubPlaystation alternative',
        'PlayStation café software',
        'PS café program',
        'gaming hall software',
        'Heselo',
      ],
      intro:
        'Searches for Hasansoft ClubPlaystation expect time tracking, open/close accounts, cash and reports for PS4/PS5 halls. That is a simple station/café software category — effective at small scale. Gaps appear when booking calendars, multi-shift cash and stock attach to sessions. This guide compares Hasansoft with Heselo; keep Hasansoft when a timer is enough. Category guide: playstation-cafe-software-alternative.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: PS café software or club panel?',
          paragraphs: [
            'Hasansoft focuses on station time and hall cash; Heselo is room/station booking and live session flow.',
          ],
          bullets: [
            'Do you need advance booking?',
            'Shift cash and product sales on sessions?',
            'Open hall only, or a room calendar?',
          ],
        },
        {
          id: 'when-hasansoft-fits',
          title: 'When should Hasansoft stay?',
          paragraphs: [
            'In small and mid PlayStation halls, PS4/PS5 time tracking, auto billing, customers and cash reports are Hasansoft’s strength. It has been used for years in the TR market.',
            'If you do not need booking and a room panel, keep Hasansoft.',
          ],
          bullets: [
            'PS4/PS5 duration tracking is the core need',
            'Almost no advance booking',
            'Hall-level cash and reports are enough',
            'Budget fits a licence model',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When station and room time is sold with booking, extensions are frequent, and shift cash plus snacks attach to sessions — Heselo fits.',
          ],
          bullets: [
            'Room/station calendar and booking',
            'Live session, extensions, rate packages',
            'Club shift + session sales + stock',
            'AZ / EN / RU, from {low} AZN/month',
          ],
        },
        {
          id: 'comparison',
          title: 'Hasansoft vs Heselo — comparison',
          paragraphs: [
            'Hasansoft pricing depends on package and licence — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Hasansoft ClubPlaystation', 'Heselo'],
            rows: [
              ['Primary focus', 'PS café time + hall cash', 'Room/station time + club ops'],
              ['Bookings', 'Usually weak / none', 'Room and station calendar'],
              ['Time billing', 'PS session start/stop', 'Live session, extension, rates'],
              ['Cash', 'Hall cash and reports', 'Club shift + session sales'],
              ['Stock', 'Quick sales (limited)', 'Session sales and stock'],
              ['Pricing', 'Licence/package (quote)', 'Public: from {low} AZN/month'],
              ['Languages', 'TR focus', 'AZ, EN, RU'],
              [
                'Best fit',
                'PS hall, timer + cash enough',
                'Booked room club, growth',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landscape (short)',
          paragraphs: [
            'Hasansoft, Club Timer and Akinsoft appear in the same broad “PS café software” search. PC software — IZI/LANGAME; room panel — Heselo. GameClub is console lounge SaaS.',
          ],
          bullets: [
            'Hasansoft — TR PS café software',
            'Club Timer / Akinsoft — local/similar timer-café',
            'GameClub — console-first lounge SaaS',
            'Heselo — room-time club panel (AZ)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Scenarios',
          paragraphs: ['PS hall size changes the decision.'],
          bullets: [
            'Small PS café: Hasansoft may be enough',
            'WhatsApp booking + Hasansoft: double-book risk',
            'Room lounge: Heselo',
            'PC + PS: IZI/LANGAME + Heselo, or Hasansoft for PS only',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Migration checklist',
          paragraphs: ['Do not remove Hasansoft immediately — pilot one weekend.'],
          bullets: [
            'Station/room and rate list',
            'Where bookings are recorded today',
            'Demo: book → session → product → cash',
            'Hasansoft can stay as backup on a small PS group',
            'Plan IZI/LANGAME separately if you need PC lock',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace Hasansoft?',
          a: 'Different category. Hasansoft is PS café time and hall cash; Heselo is booking, session and club shifts. Keep the timer when it is enough.',
        },
        {
          q: 'What is ClubPlaystation?',
          a: 'Hasansoft’s time, cash and reporting software for PlayStation halls.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare Hasansoft pricing?',
          a: 'Official package and licence quotes — no invented figures here.',
        },
        {
          q: 'PC lock?',
          a: 'Heselo does not replace a PC agent.',
        },
        {
          q: 'Where is the category guide?',
          a: 'Timer vs panel overview: playstation-cafe-software-alternative.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes during transition — fine for a short pilot.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model stations and rooms and walk a weekend flow.',
        },
      ],
      ctaTitle: 'Test your PS club flow on Heselo',
      ctaBody:
        'Request a demo. We can model stations and rooms and try booking, session, cash and stock.',
    },
    ru: {
      shortTitle: 'Альтернатива Hasansoft',
      h1: 'ПО PlayStation-кафе vs клубная панель — Hasansoft',
      seoTitle: 'Альтернатива Hasansoft — ПО PS-кафе vs Heselo | Heselo',
      seoDescription:
        'Hasansoft ClubPlaystation — время PS4/PS5, касса и отчёты; Heselo — бронь, живой сеанс и клубные смены — таблица, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива hasansoft',
        'альтернатива clubplaystation',
        'программа playstation кафе',
        'ps cafe программа',
        'программа игрового зала',
        'Heselo',
      ],
      intro:
        'Поиск Hasansoft ClubPlaystation подразумевает учёт времени, открытие/закрытие счетов, кассу и отчёты для залов PS4/PS5. Это категория простого ПО станций/кафе — на малом масштабе эффективна. Пробелы появляются, когда календарь брони, многосменная касса и склад привязаны к сеансам. Это руководство сравнивает Hasansoft с Heselo; оставьте Hasansoft, если хватает таймера. Категорийный гид: playstation-cafe-software-alternative.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: ПО PS-кафе или клубная панель?',
          paragraphs: [
            'Hasansoft фокусируется на времени станций и кассе зала; Heselo — бронь комнат/станций и живой поток сеанса.',
          ],
          bullets: [
            'Нужна ли предварительная бронь?',
            'Кассовые смены и продажи товаров к сеансу?',
            'Только открытый зал или календарь комнат?',
          ],
        },
        {
          id: 'when-hasansoft-fits',
          title: 'Когда оставить Hasansoft?',
          paragraphs: [
            'В малых и средних PlayStation-залах учёт времени PS4/PS5, авторасчёт оплаты, клиенты и кассовые отчёты — сила Hasansoft. На рынке TR продукт используют годы.',
            'Если не нужны бронь и комнатная панель — оставьте Hasansoft.',
          ],
          bullets: [
            'Учёт длительности PS4/PS5 — основная потребность',
            'Почти нет предварительной брони',
            'Кассы и отчётов уровня зала достаточно',
            'Бюджет подходит под лицензионную модель',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если время станций и комнат продаётся с бронью, продления частые, а кассовая смена и закуски привязаны к сеансу — Heselo подходит.',
          ],
          bullets: [
            'Календарь и бронь комнат/станций',
            'Живой сеанс, продление, пакеты тарифов',
            'Клубная смена + продажи в сеансе + склад',
            'AZ / EN / RU, от {low} AZN/мес.',
          ],
        },
        {
          id: 'comparison',
          title: 'Hasansoft и Heselo — сравнение',
          paragraphs: [
            'Цена Hasansoft зависит от пакета и лицензии — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Hasansoft ClubPlaystation', 'Heselo'],
            rows: [
              ['Основной фокус', 'Время PS-кафе + касса зала', 'Время комнаты/станции + операции клуба'],
              ['Бронирование', 'Обычно слабо / нет', 'Календарь комнат и станций'],
              ['Учёт времени', 'Старт/стоп PS-сеанса', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Касса и отчёты зала', 'Клубная смена + продажи в сеансе'],
              ['Склад', 'Быстрые продажи (ограничено)', 'Продажи к сеансу и склад'],
              ['Цена', 'Лицензия/пакет (запрос)', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Фокус TR', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'PS-зал, хватает таймера + кассы',
                'Комнатный клуб с бронью, рост',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт (кратко)',
          paragraphs: [
            'Hasansoft, Club Timer и Akinsoft попадают в один широкий поиск «ПО PS-кафе». PC-софт — IZI/LANGAME; комнатная панель — Heselo. GameClub — console lounge SaaS.',
          ],
          bullets: [
            'Hasansoft — TR ПО PS-кафе',
            'Club Timer / Akinsoft — локальный/похожий таймер-кафе',
            'GameClub — console-first lounge SaaS',
            'Heselo — клубная панель времени комнат (AZ)',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии',
          paragraphs: ['Размер PS-зала меняет решение.'],
          bullets: [
            'Малое PS-кафе: Hasansoft может хватить',
            'WhatsApp-бронь + Hasansoft: риск наложений',
            'Комнатный лаунж: Heselo',
            'PC + PS: IZI/LANGAME + Heselo, или Hasansoft только для PS',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист перехода',
          paragraphs: ['Не снимайте Hasansoft сразу — пилот на одни выходные.'],
          bullets: [
            'Список станций/комнат и тарифов',
            'Где сейчас фиксируется бронь',
            'Демо: бронь → сеанс → товар → касса',
            'Hasansoft может остаться резервом на малой группе PS',
            'Нужна блокировка PC — отдельно IZI/LANGAME',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет Hasansoft?',
          a: 'Разные категории. Hasansoft — время PS-кафе и касса зала; Heselo — бронь, сеанс и клубные смены. Оставьте таймер, если хватает.',
        },
        {
          q: 'Что такое ClubPlaystation?',
          a: 'ПО Hasansoft для времени, кассы и отчётов в PlayStation-залах.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену Hasansoft?',
          a: 'По официальному пакету и лицензии — без выдуманных цифр.',
        },
        {
          q: 'Блокировка PC?',
          a: 'Heselo не заменяет PC-агент.',
        },
        {
          q: 'Где категорийный гид?',
          a: 'Таймер vs панель: playstation-cafe-software-alternative.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да в переходный период — для короткого пилота.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте станции и комнаты и пройдите поток выходных.',
        },
      ],
      ctaTitle: 'Проверьте поток PS-клуба на Heselo',
      ctaBody:
        'Запросите демо: смоделируем станции и комнаты и проверим бронь, сеанс, кассу и склад.',
    },
  }

export function hasansoftAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'hasansoft-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
