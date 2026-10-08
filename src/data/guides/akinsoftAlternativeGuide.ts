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
      shortTitle: 'Akinsoft CafePlus alternativi',
      h1: 'Kafe/PS server vs otaq-vaxt — Akinsoft alternativi',
      seoTitle: 'Akinsoft alternativi — CafePlus vs Heselo klub paneli | Heselo',
      seoDescription:
        'Akinsoft CafePlus internet kafe və PlayStation salonu üçün masa/konsol izləmədir; Heselo otaq-vaxt, bron və kassadır — cədvəl, FAQ — AZ, EN, RU.',
      keywords: [
        'akinsoft alternativ',
        'akinsoft cafeplus alternativ',
        'cafeplus alternativ',
        'playstation kafe proqramı',
        'internet kafe proqramı',
        'ps klub proqramı',
        'Heselo',
      ],
      intro:
        'Akinsoft CafePlus axtarışında internet kafe, laboratoriya və PlayStation salonu üçün mərkəzi masa/konsol izləmə gözlənilir. Bakı elanlarında Akinsoft PlayStation klub proqramı kimi də adı çəkilir. Heselo otaq və stansiya saatını bron, canlı sessiya və kassa növbəsi ilə idarə edir. Bu bələdçi CafePlus tipli kafe/PS serverini otaq-vaxt paneli ilə müqayisə edir — kiçik zalda Akinsoft yetəndə onu saxlamağı tövsiyə edirik.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: kafe/PS server, yoxsa otaq paneli?',
          paragraphs: [
            'Eyni «PS klub proqramı» axtarışı masa sayğacı və otaq bronu üçün fərqli sistemlərə aparır.',
          ],
          bullets: [
            'Fokus: PC/masa/PS server izləmə, yoxsa otaq təqvimi və kassa növbəsi?',
            'Gəlir: stol vaxtı + kafe satışı, yoxsa otaq sessiyası + bar?',
            'Miqyas: bir zal, yoxsa otaqlı bron axını?',
          ],
        },
        {
          id: 'when-akinsoft-fits',
          title: 'Akinsoft CafePlus nə vaxt qalmalıdır?',
          paragraphs: [
            'Internet kafe və PlayStation salonunda kompüter, konsol və masa izləmə, filtr və modul serverlər CafePlus kateqoriyasının mərkəzidir. TR lisenziya modeli və modul paketlərlə işləyənlər üçün tanış stackdır.',
            'Heselo bu server/modul konturunu əvəz etmir. Sadə zal vaxtı kifayətdirsə Akinsoft qala bilər.',
          ],
          bullets: [
            'PC, masa və PS server izləmə lazımdır',
            'Modul lisenziya (Vision, mutfak və s.) mövcuddur',
            'Öncədən otaq bronu zəif və ya yoxdur',
            'TR/AZ quraşdırıcı dəstəyi artıq işləyir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Otaq və stansiya vaxtı bronla satılır, uzadılma və kassa növbəsi sessiyaya bağlanırsa — Heselo uyğundur. Açıq qiymət və AZ/EN/RU klub paneli üçün.',
          ],
          bullets: [
            'Öncədən bron və otaq/stansiya təqvimi',
            'Canlı sessiya, uzadılma, tarif paketləri',
            'Klub növbəsi və sessiyaya məhsul satışı',
            'Açıq: {low} AZN/aydan',
          ],
        },
        {
          id: 'comparison',
          title: 'Akinsoft CafePlus və Heselo — müqayisə',
          paragraphs: [
            'Akinsoft qiyməti modul və lisenziyadan asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Akinsoft CafePlus', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Kafe/PS masa və server izləmə', 'Otaq/stansiya vaxtı + klub əməliyyatı'],
              ['Rezervasiya', 'Zəif / modul asılı', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Masa/konsol server', 'Canlı sessiya, uzadılma, tarif'],
              ['Kassa', 'Kafe/modul konturu', 'Klub növbəsi + sessiya satışı'],
              ['Stok', 'Modul ilə mümkündür', 'Sessiyaya bağlı satış və stok'],
              ['Qiymət', 'Modul/lisenziya (sorğu)', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'TR fokus', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Internet kafe + PS salon izləmə',
                'Otaqlı klub, bron və kassa ehtiyacı',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landşaft (qısa)',
          paragraphs: [
            'Akinsoft və Club Timer yerli axtarışlarda yan-yana çıxır; Hasansoft TR PS cafe proqramıdır. PC kilidləmə — IZI/LANGAME; otaq-vaxt — Heselo.',
          ],
          bullets: [
            'Akinsoft CafePlus — kafe/PS server',
            'Club Timer / Hasansoft — sadə taymer kateqoriyası',
            'IZI / LANGAME — PC stansiya softu',
            'Heselo — bron, sessiya, kassa, stok',
          ],
        },
        {
          id: 'scenarios',
          title: 'Klub ssenariləri',
          paragraphs: ['Eyni «PS klub» adı fərqli stack tələb edir.'],
          bullets: [
            'Internet kafe + bir neçə PS: Akinsoft/CafePlus yetə bilər',
            'Otaqlı PS lounge + bron: Heselo',
            'PC zalı + otaqlar: IZI/LANGAME + Heselo hibrid',
            'Keçid: Akinsoft-u dərhal silməyin — otaq axınını demoda yoxlayın',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Qərar checklisti',
          paragraphs: ['Otaq-vaxt ehtiyacı ayrıca ölçülməlidir.'],
          bullets: [
            'Hansı gəlir masa/PS serverdə, hansı otaq sessiyasındadır',
            'Bron və növbə kassası lazımdırmı — yazın',
            'Demoda bron → sessiya → kassa',
            'Modul lisenziya vs açıq abunə müqayisəsi (rəsmi təkliflə)',
            'PC kilidləmə ayrıdırsa IZI/LANGAME saxlayın',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo Akinsoft-u əvəz edir?',
          a: 'Eyni kateqoriya deyil. CafePlus kafe/PS server izləmədir; Heselo otaq-vaxt, bron və kassadır. Zal izləmə yetəndə Akinsoft saxlayın.',
        },
        {
          q: 'CafePlus nədir?',
          a: 'Akinsoft-un internet kafe, laboratoriya və PlayStation salonu üçün mərkəzi izləmə məhsuludur.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'Akinsoft qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi modul və lisenziya təklifi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'PC kilidləmə varmı?',
          a: 'Heselo PC agentini əvəz etmir; IZI/LANGAME kateqoriyasına baxın.',
        },
        {
          q: 'Hansı klublar üçün Heselo?',
          a: 'Otaqlı oyun, karaoke, bilyard, antikafe, launj — saat və bron mərkəzdə.',
        },
        {
          q: 'Hər ikisi bir yerdə?',
          a: 'Keçid və ya hibriddə mümkündür: zal izləmə Akinsoft-da, otaq paneli Heselo-da.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq/stansiya siyahınızı qurub sessiya və kassa axınını yoxlayın.',
        },
      ],
      ctaTitle: 'Otaq-vaxt ehtiyacınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: otaq və stansiyaları nümunə kimi qurub bron, sessiya və kassa növbəsini sınayaq.',
    },
    en: {
      shortTitle: 'Akinsoft CafePlus alternative',
      h1: 'Café/PS server vs room-time — an Akinsoft alternative',
      seoTitle: 'Akinsoft Alternative — CafePlus vs Heselo Club Panel | Heselo',
      seoDescription:
        'Akinsoft CafePlus tracks tables/consoles for internet cafés and PlayStation halls; Heselo is room-time, booking and cash — table, FAQ — AZ, EN, RU.',
      keywords: [
        'Akinsoft alternative',
        'Akinsoft CafePlus alternative',
        'CafePlus alternative',
        'PlayStation café software',
        'internet café software',
        'PS club software',
        'Heselo',
      ],
      intro:
        'Searches for Akinsoft CafePlus expect central table/console tracking for internet cafés, labs and PlayStation halls. Baku listings also name Akinsoft as PlayStation club software. Heselo manages room and station hours with booking, live sessions and cash shifts. This guide compares CafePlus-style café/PS servers with a room-time panel — when Akinsoft is enough for a simple hall, we recommend keeping it.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: café/PS server or room panel?',
          paragraphs: [
            '“PS club software” can mean table counters or room booking — different systems.',
          ],
          bullets: [
            'Focus: PC/table/PS server tracking, or room calendar and cash shifts?',
            'Revenue: table time + café sales, or room session + bar?',
            'Scale: one hall, or a room booking flow?',
          ],
        },
        {
          id: 'when-akinsoft-fits',
          title: 'When should Akinsoft CafePlus stay?',
          paragraphs: [
            'In internet cafés and PlayStation halls, PC, console and table tracking plus filter and module servers sit at CafePlus’s centre. Operators used to TR licence modules know this stack.',
            'Heselo does not replace that server/module contour. Keep Akinsoft when simple hall time is enough.',
          ],
          bullets: [
            'You need PC, table and PS server tracking',
            'Module licences (Vision, kitchen, etc.) are in place',
            'Advance room booking is weak or absent',
            'TR/AZ installer support already works',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When room and station time is sold with booking, and extensions plus cash shifts attach to sessions — Heselo fits. Public pricing and AZ/EN/RU for a club panel.',
          ],
          bullets: [
            'Advance booking and room/station calendar',
            'Live session, extensions, rate packages',
            'Club shift and product sales on sessions',
            'Public: from {low} AZN/month',
          ],
        },
        {
          id: 'comparison',
          title: 'Akinsoft CafePlus vs Heselo — comparison',
          paragraphs: [
            'Akinsoft pricing depends on modules and licence — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Akinsoft CafePlus', 'Heselo'],
            rows: [
              ['Primary focus', 'Café/PS table and server tracking', 'Room/station time + club ops'],
              ['Bookings', 'Weak / module-dependent', 'Room and station calendar'],
              ['Time billing', 'Table/console server', 'Live session, extension, rates'],
              ['Cash', 'Café/module contour', 'Club shift + session sales'],
              ['Stock', 'Possible via modules', 'Session sales and stock'],
              ['Pricing', 'Modules/licence (quote)', 'Public: from {low} AZN/month'],
              ['Languages', 'TR focus', 'AZ, EN, RU'],
              [
                'Best fit',
                'Internet café + PS hall tracking',
                'Room club needing booking and cash',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Landscape (short)',
          paragraphs: [
            'Akinsoft and Club Timer appear together in local search; Hasansoft is TR PS café software. PC lock — IZI/LANGAME; room-time — Heselo.',
          ],
          bullets: [
            'Akinsoft CafePlus — café/PS server',
            'Club Timer / Hasansoft — simple timer category',
            'IZI / LANGAME — PC station software',
            'Heselo — booking, session, cash, stock',
          ],
        },
        {
          id: 'scenarios',
          title: 'Club scenarios',
          paragraphs: ['The same “PS club” label can need different stacks.'],
          bullets: [
            'Internet café + a few PS: Akinsoft/CafePlus may be enough',
            'Room PS lounge + booking: Heselo',
            'PC hall + rooms: IZI/LANGAME + Heselo hybrid',
            'Migration: do not rip out Akinsoft immediately — demo the room flow',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Decision checklist',
          paragraphs: ['Room-time need should be measured separately.'],
          bullets: [
            'Split revenue: table/PS server vs room session',
            'Do you need booking and shift cash — write it down',
            'Demo book → session → cash',
            'Compare module licence vs public subscription (official quotes)',
            'Keep IZI/LANGAME if PC lock is separate',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace Akinsoft?',
          a: 'Different category. CafePlus is café/PS server tracking; Heselo is room-time, booking and cash. Keep Akinsoft when hall tracking is enough.',
        },
        {
          q: 'What is CafePlus?',
          a: 'Akinsoft’s central tracking product for internet cafés, labs and PlayStation halls.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare Akinsoft pricing?',
          a: 'Official module and licence quotes — no invented figures here.',
        },
        {
          q: 'Does it lock PCs?',
          a: 'Heselo does not replace a PC agent; see IZI/LANGAME.',
        },
        {
          q: 'Which clubs is Heselo for?',
          a: 'Room-based gaming, karaoke, billiards, anticafe, lounge — hours and booking central.',
        },
        {
          q: 'Can both run together?',
          a: 'Yes in transition or hybrid: hall tracking on Akinsoft, room panel on Heselo.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model your rooms/stations and walk session and cash flow.',
        },
      ],
      ctaTitle: 'Test your room-time need on Heselo',
      ctaBody:
        'Request a demo. We can model rooms and stations and try booking, session and cash shifts.',
    },
    ru: {
      shortTitle: 'Альтернатива Akinsoft CafePlus',
      h1: 'Сервер кафе/PS vs время комнат — альтернатива Akinsoft',
      seoTitle: 'Альтернатива Akinsoft — CafePlus vs Heselo | Heselo',
      seoDescription:
        'Akinsoft CafePlus — учёт столов/консолей для интернет-кафе и PlayStation-залов; Heselo — время комнат, бронь и касса — таблица, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива akinsoft',
        'альтернатива cafeplus',
        'программа playstation кафе',
        'программа интернет кафе',
        'ps клуб программа',
        'Heselo',
      ],
      intro:
        'Поиск Akinsoft CafePlus подразумевает центральный учёт столов/консолей для интернет-кафе, лабораторий и PlayStation-залов. В бакинских объявлениях Akinsoft также называют ПО PlayStation-клуба. Heselo ведёт часы комнат и станций через бронь, живые сеансы и кассовые смены. Это руководство сравнивает сервер кафе/PS в духе CafePlus с панелью времени комнат — когда Akinsoft хватает для простого зала, мы советуем его оставить.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: сервер кафе/PS или комнатная панель?',
          paragraphs: [
            'Один запрос «ПО PS-клуба» ведёт к счётчику столов или к брони комнат — разным системам.',
          ],
          bullets: [
            'Фокус: учёт PC/стола/PS-сервера или календарь комнат и кассовые смены?',
            'Выручка: время стола + кафе или сеанс комнаты + бар?',
            'Масштаб: один зал или поток брони комнат?',
          ],
        },
        {
          id: 'when-akinsoft-fits',
          title: 'Когда оставить Akinsoft CafePlus?',
          paragraphs: [
            'В интернет-кафе и PlayStation-залах учёт PC, консолей и столов, фильтры и модульные серверы — центр CafePlus. Операторы на TR-лицензиях знакомы с этим стеком.',
            'Heselo не заменяет этот серверный/модульный контур. Оставьте Akinsoft, если хватает простого учёта зала.',
          ],
          bullets: [
            'Нужен учёт PC, столов и PS-сервера',
            'Есть модульные лицензии (Vision, кухня и т.д.)',
            'Предварительная бронь комнат слабая или отсутствует',
            'Уже работает поддержка установщика TR/AZ',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если время комнат и станций продаётся с бронью, а продления и кассовые смены привязаны к сеансу — Heselo подходит. Открытая цена и AZ/EN/RU для клубной панели.',
          ],
          bullets: [
            'Предварительная бронь и календарь комнат/станций',
            'Живой сеанс, продление, пакеты тарифов',
            'Клубная смена и продажи к сеансу',
            'Открыто: от {low} AZN/мес.',
          ],
        },
        {
          id: 'comparison',
          title: 'Akinsoft CafePlus и Heselo — сравнение',
          paragraphs: [
            'Цена Akinsoft зависит от модулей и лицензии — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Akinsoft CafePlus', 'Heselo'],
            rows: [
              ['Основной фокус', 'Учёт столов/серверов кафе и PS', 'Время комнаты/станции + операции клуба'],
              ['Бронирование', 'Слабо / зависит от модуля', 'Календарь комнат и станций'],
              ['Учёт времени', 'Сервер столов/консолей', 'Живой сеанс, продление, тариф'],
              ['Касса', 'Контур кафе/модулей', 'Клубная смена + продажи в сеансе'],
              ['Склад', 'Возможен через модули', 'Продажи к сеансу и склад'],
              ['Цена', 'Модули/лицензия (запрос)', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Фокус TR', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Интернет-кафе + учёт PS-зала',
                'Комнатный клуб с бронью и кассой',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт (кратко)',
          paragraphs: [
            'Akinsoft и Club Timer рядом в местном поиске; Hasansoft — TR ПО PS-кафе. Блокировка PC — IZI/LANGAME; время комнат — Heselo.',
          ],
          bullets: [
            'Akinsoft CafePlus — сервер кафе/PS',
            'Club Timer / Hasansoft — категория простого таймера',
            'IZI / LANGAME — ПО PC-станций',
            'Heselo — бронь, сеанс, касса, склад',
          ],
        },
        {
          id: 'scenarios',
          title: 'Клубные сценарии',
          paragraphs: ['Одна метка «PS-клуб» может требовать разный стек.'],
          bullets: [
            'Интернет-кафе + несколько PS: Akinsoft/CafePlus может хватить',
            'Комнатный PS-лаунж + бронь: Heselo',
            'PC-зал + комнаты: гибрид IZI/LANGAME + Heselo',
            'Переход: не снимайте Akinsoft сразу — проверьте комнатный поток на демо',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист решения',
          paragraphs: ['Потребность во времени комнат измеряется отдельно.'],
          bullets: [
            'Доля выручки: стол/PS-сервер vs сеанс комнаты',
            'Нужны ли бронь и кассовые смены — зафиксируйте',
            'На демо: бронь → сеанс → касса',
            'Сравните модульную лицензию и открытую подписку (официальные КП)',
            'Блокировка PC отдельно — оставьте IZI/LANGAME',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет Akinsoft?',
          a: 'Разные категории. CafePlus — учёт серверов кафе/PS; Heselo — время комнат, бронь и касса. Оставьте Akinsoft, если хватает учёта зала.',
        },
        {
          q: 'Что такое CafePlus?',
          a: 'Продукт Akinsoft для центрального учёта в интернет-кафе, лабораториях и PlayStation-залах.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену Akinsoft?',
          a: 'По официальным модулям и лицензии — без выдуманных цифр.',
        },
        {
          q: 'Есть ли блокировка PC?',
          a: 'Heselo не заменяет PC-агент; смотрите IZI/LANGAME.',
        },
        {
          q: 'Для каких клубов Heselo?',
          a: 'Комнатный гейминг, караоке, бильярд, антикафе, лаунж — часы и бронь в центре.',
        },
        {
          q: 'Можно ли совместить?',
          a: 'Да в переходе или гибриде: учёт зала на Akinsoft, комнатная панель на Heselo.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте комнаты/станции и пройдите сеанс и кассу.',
        },
      ],
      ctaTitle: 'Проверьте потребность во времени комнат на Heselo',
      ctaBody:
        'Запросите демо: смоделируем комнаты и станции и проверим бронь, сеанс и кассовые смены.',
    },
  }

export function akinsoftAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'akinsoft-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
