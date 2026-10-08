import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'karaoke',
  'lounge',
  'reservations',
  'pos',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Restoran POS vs karaoke sistemi',
      h1: 'Restoran POS vs karaoke otaq sistemi — hansını seçmək olar?',
      seoTitle: 'Restoran POS vs karaoke sistemi — otaq, sessiya | Heselo',
      seoDescription:
        'Karaoke klubu restoran kassası ilə idarə olunurmu? Restoran POS və otaq-vaxt/karaoke sistemi müqayisəsi, cədvəl, landşaft — AZ, EN, RU.',
      keywords: [
        'restoran POS karaoke',
        'karaoke rezervasiya sistemi',
        'karaoke otaq proqramı',
        'restoran kassa karaoke',
        'otaq saatı sistemi',
        'launj rezervasiya',
        'klub idarəetmə',
        'Heselo',
      ],
      intro:
        'Karaoke və otaqlı launj bəzən restoran POS ilə açılır — menyu, içki və çek eyni kassada. Əsas gəlir otaq saatı və sessiya uzadılmasıdırsa, restoran POS otaq təqvimi, canlı sessiya və saat tarifini tam əhatə etmir. Bu bələdçi restoran POS kateqoriyasını karaoke/otaq-vaxt sistemi ilə müqayisə edir; Heselo tam restoran mətbəx əvəzi deyil.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: zal restoranı, yoxsa otaq saatı?',
          paragraphs: [
            'Karaoke biznesində gəlirin hansı hissəsi otaq vaxtından, hansı hissəsi yemək-içkidən gəlir — cavab sistem seçimini müəyyən edir.',
          ],
          bullets: [
            'Əsas gəlir: otaq saatı və minimum xidmət, yoxsa tam restoran zalı və mətbəx?',
            'Rezervasiya: masa, yoxsa karaoke otağı və saat blokları?',
            'Kritik axın: ofisiant sifarişi, yoxsa bron → sessiya → uzadılma → kassa?',
          ],
        },
        {
          id: 'when-restaurant-pos-fits',
          title: 'Restoran POS nə vaxt kifayətdir?',
          paragraphs: [
            'Karaoke restoran formatındadırsa — böyük zal, mətbəx, ofisiant sifarişi — restoran POS (Clopos, iiko, Dine və s.) düzgün kateqoriyadır. Otaq vaxtı kiçik əlavədirsə və manual idarə olunursa, eyni kassa bəzən yetər.',
            'Tam karaoke-only klubda (otaq saatı mərkəzdə) restoran POS otaq üst-üstə düşməsi və unudulmuş uzadılma riskini artırır.',
          ],
          bullets: [
            'Mətbəx və zal sifarişi gündəlik işin əsas hissəsidir',
            'Karaoke otaqları sayı azdır və vaxt kağız/taymerlə idarə olunur',
            'Fiscal çek və menyu restoran konturuna uyğun olmalıdır',
            'Otaq rezervasiyası ikinci dərəcəlidir',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Karaoke/otaq-vaxt paneli (Heselo) nə vaxt uyğundur?',
          paragraphs: [
            'Otaqlar saatla satılır, öncədən bron tələb olunur və gəlişdə sessiya başlamalıdırsa, karaoke otaq sistemi restoran POS-dan fərqlidir. Heselo otaq təqvimini canlı sessiyaya, tarifə və kassa növbəsinə bağlayır.',
            'İçki satışı sessiyaya əlavə olunur; ağır mətbəx axını Heselo-nun hədəfi deyil. Demo zamanı tipik cümə axşamı bron → sessiya → uzadılma ssenarisini yoxlayın.',
          ],
          bullets: [
            'Əsas məhsul: karaoke/launj otağı saatı',
            'Otaq təqvimi və üst-üstə bronun qarşısı vacibdir',
            'Uzatma, tarif paketi və növbə kassası bir yerdə olmalıdır',
            'AZ / EN / RU və açıq qiymət ({low} AZN/aydan)',
          ],
        },
        {
          id: 'comparison',
          title: 'Restoran POS və karaoke/otaq sistemi — müqayisə',
          paragraphs: [
            'Cədvəl əsas istiqaməti göstərir. Restoran POS qiyməti provayder və paketdən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Restoran POS', 'Karaoke / otaq-vaxt (Heselo)'],
            rows: [
              ['Əsas fokus', 'Zal, mətbəx, sifariş', 'Otaq saatı və sessiya'],
              ['Rezervasiya', 'Masa və restoran axını', 'Karaoke/launj otaq təqvimi'],
              ['Vaxt hesabı', 'Sifariş mərkəzdə', 'Canlı sessiya, uzadılma, tarif'],
              ['Menyu / mətbəx', 'Güclü restoran konturu', 'Sessiyaya əlavə satış; tam mətbəx POS deyil'],
              ['Kassa', 'Restoran növbəsi', 'Klub növbəsi + otaq satışı'],
              ['Qiymət', 'Paket və təkliflə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Paketdən asılı', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Karaoke restoran, mətbəxli launj',
                'Otaq saatı mərkəzdə olan karaoke və launj',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Qısa landşaft: restoran vs otaq-vaxt',
          paragraphs: [
            'Azərbaycanda karaoke biznesi tez-tez hər iki ehtiyacı daşıyır: zalda yemək-içki və ayrı otaqlarda saat. Restoran POS adları: Clopos, iiko, Dine, MinuPOS. Otaq-vaxt üçün ixtisaslaşmış klub paneli (məsələn Heselo) ayrı kateqoriyadır.',
            'Yalnız bir sistem seçmək məcburi deyil — paralel ssenari tez-tez ən təmiz həlldir; satışların harada qeyd olunduğunu yazılı bölün.',
          ],
          bullets: [
            'Restoran POS — mətbəx, zal, çatdırılma',
            'Karaoke otaq sistemi — bron, sessiya, saat tarifi',
            'Heselo — otaq-vaxt klubları; restoran mətbəx əvəzi deyil',
            'Hibrid karaoke: restoran POS + otaq paneli',
          ],
        },
        {
          id: 'scenarios',
          title: 'Karaoke ssenariləri',
          paragraphs: ['Eyni brend fərqli formatlarda fərqli rol oynayır.'],
          bullets: [
            'Karaoke restoran: zal sifarişi restoran POS-da; bir neçə otaq taymerdə — böyüyəndə otaq paneli əlavə olunur',
            'Otaq mərkəzli karaoke: bron → gəlişdə sessiya → saat tarifi → içki sessiyaya → kassa',
            'Launj: otaq təqvimi + minimum bar; ağır mətbəx ayrı POS-da qala bilər',
            'Həftəsonu pik: otaq təqvimi olmadan restoran POS ilə üst-üstə bron riski',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Seçim və keçid checklisti',
          paragraphs: [
            'Restoran POS-dan tam imtina etmədən otaq funksiyasını əlavə etmək — tipik karaoke yolu.',
          ],
          bullets: [
            'Otaq sayını, tarif paketlərini və orta sessiya müddətini yazın',
            'Bir axşam bron/sessiya/uzadılma addımlarını kağızda izləyin — harada səhv olur?',
            'Mətbəx qalırsa restoran POS-u saxlayın; otaq vaxtını klub panelinə gətirin',
            'Demoda eyni həftəsonu ssenarisini keçin',
            'Kassada: otaq ödənişi və bar satışının hansı sistemdə qeyd olunduğunu razılaşdırın',
          ],
        },
      ],
      faq: [
        {
          q: 'Karaoke üçün restoran POS kifayət edirmi?',
          a: 'Karaoke restoran formatında zal və mətbəx mərkəzdədirsə — bəli. Otaq saatı əsas gəlirdirsə və bron/sessiya kritikdirsə, restoran POS otaq-vaxt boşluqlarını buraxır; otaq sistemi və ya Heselo kimi klub paneli baxın.',
        },
        {
          q: 'Heselo karaoke restoranın mətbəxini əvəz edir?',
          a: 'Xeyr. Tam mətbəx və ofisiant sifarişi restoran POS-da qalmalıdır. Heselo otaq saatı, bron və sessiyaya fokuslanır.',
        },
        {
          q: 'Hər iki sistem bir yerdə olar?',
          a: 'Bəli. Çox karaoke biznesi restoran POS (zal/mətbəx) və otaq paneli (saat/bron) paralel işlədir.',
        },
        {
          q: 'Heselo qiyməti və dilləri?',
          a: '{low} AZN/aydan, AZ / EN / RU, saytda açıq.',
        },
        {
          q: 'Restoran POS qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi paket və avadanlıq təklifi ilə — burada uydurma rəqəm yoxdur. Yalnız istifadə edəcəyiniz modulları Heselo ilə müqayisə edin.',
        },
        {
          q: 'Yalnız 2–3 karaoke otağı var — panel lazımdır?',
          a: 'Bron həcmi və üst-üstə rezervasiya riski artırsa, panel faydalıdır. Kiçik həcmdə taymer + WhatsApp işləyə bilər; böyümə planını nəzərə alın.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq tiplərinizi nümunə kimi qurub bron → sessiya → uzadılma → kassa axınını addım-addım yoxlayın.',
        },
        {
          q: 'Launj və karaoke eyni sistemdə?',
          a: 'Otaq saatı eyni modeldirsə — eyni otaq-vaxt paneli uyğundur. Launjda ağır restoran konturu varsa, restoran POS paralel qala bilər.',
        },
      ],
      ctaTitle: 'Karaoke otaq axınınızı Heseloda yoxlayın',
      ctaBody:
        'Demo istəyin: otaqlarınızı və tariflərinizi nümunə kimi qurub rezervasiya, canlı sessiya və kassa növbəsini birlikdə sınayaq.',
    },
    en: {
      shortTitle: 'Restaurant POS vs karaoke system',
      h1: 'Restaurant POS vs karaoke room system — which do you need?',
      seoTitle: 'Restaurant POS vs Karaoke System — Rooms, Sessions | Heselo',
      seoDescription:
        'Can a karaoke club run on restaurant till software? Comparison of restaurant POS vs room-time/karaoke systems, table, landscape — AZ, EN, RU.',
      keywords: [
        'restaurant POS karaoke',
        'karaoke booking system',
        'karaoke room software',
        'restaurant till karaoke',
        'room hourly system',
        'lounge booking',
        'club management',
        'Heselo',
      ],
      intro:
        'Karaoke and room lounges are sometimes opened on restaurant POS — menus, drinks and receipts on one till. If main revenue is room hours and session extensions, restaurant POS does not fully cover room calendars, live sessions and hourly rates. This guide compares restaurant POS with karaoke/room-time systems; Heselo is not a full restaurant kitchen replacement.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: dining restaurant or room hours?',
          paragraphs: [
            'In karaoke businesses, how much revenue comes from room time vs food and drink drives the system choice.',
          ],
          bullets: [
            'Main revenue: room hours and minimum spend, or full dining room and kitchen?',
            'Bookings: tables, or karaoke rooms and hour blocks?',
            'Critical flow: waiter orders, or book → session → extension → cash?',
          ],
        },
        {
          id: 'when-restaurant-pos-fits',
          title: 'When is restaurant POS enough?',
          paragraphs: [
            'If the venue is karaoke-restaurant format — large hall, kitchen, waiter orders — restaurant POS (Clopos, iiko, Dine, etc.) is the right category. When room time is a small add-on managed manually, one till can suffice.',
            'In karaoke-only clubs (room hours central), restaurant POS increases double-booking and missed extension risk.',
          ],
          bullets: [
            'Kitchen and hall orders are most of daily work',
            'Few karaoke rooms, time on paper/timer',
            'Fiscal receipts and menus must match restaurant stack',
            'Room booking is secondary',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does a karaoke/room-time panel (Heselo) fit?',
          paragraphs: [
            'When rooms are sold by the hour, advance booking matters and sessions start on arrival, a karaoke room system differs from restaurant POS. Heselo links room calendars to live sessions, rates and cash shifts.',
            'Drinks attach to a session; heavy kitchen flow is not Heselo’s target. In a demo, run a typical Friday book → session → extension flow.',
          ],
          bullets: [
            'Core product: karaoke/lounge room hours',
            'Room calendar and avoiding double bookings matter',
            'Extensions, rate packages and shift cash in one place',
            'AZ / EN / RU and public pricing (from {low} AZN/month)',
          ],
        },
        {
          id: 'comparison',
          title: 'Restaurant POS vs karaoke/room system — comparison',
          paragraphs: [
            'The table shows primary focus. Restaurant POS pricing depends on provider and package — no invented figures here.',
          ],
          table: {
            headers: ['Aspect', 'Restaurant POS', 'Karaoke / room-time (Heselo)'],
            rows: [
              ['Primary focus', 'Hall, kitchen, orders', 'Room hours and sessions'],
              ['Bookings', 'Tables and restaurant flow', 'Karaoke/lounge room calendar'],
              ['Time billing', 'Orders centred', 'Live session, extension, rates'],
              ['Menus / kitchen', 'Strong restaurant stack', 'Session add-on sales; not full kitchen POS'],
              ['Cash', 'Restaurant shifts', 'Club shift + room sales'],
              ['Pricing', 'Via package and quote', 'Public: from {low} AZN/month'],
              ['Languages', 'Package-dependent', 'AZ, EN, RU'],
              [
                'Best fit',
                'Karaoke restaurant, kitchen lounge',
                'Karaoke and lounge where room hours are central',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Short landscape: restaurant vs room-time',
          paragraphs: [
            'In Azerbaijan, karaoke often needs both: hall F&B and hourly rooms. Restaurant POS names include Clopos, iiko, Dine, MinuPOS. Room-time uses specialised club panels (e.g. Heselo) as a separate category.',
            'You do not have to pick one system — parallel setup is often cleanest; document where each sale is recorded.',
          ],
          bullets: [
            'Restaurant POS — kitchen, hall, delivery',
            'Karaoke room system — booking, session, hourly rate',
            'Heselo — room-time clubs; not restaurant kitchen replacement',
            'Hybrid karaoke: restaurant POS + room panel',
          ],
        },
        {
          id: 'scenarios',
          title: 'Karaoke scenarios',
          paragraphs: ['The same brand plays different roles in different formats.'],
          bullets: [
            'Karaoke restaurant: hall orders on restaurant POS; few rooms on timers — add room panel as you grow',
            'Room-centric karaoke: book → session on arrival → hourly rate → drinks on session → cash',
            'Lounge: room calendar + minimal bar; heavy kitchen may stay on separate POS',
            'Weekend peak: double-booking risk without room calendar on restaurant POS alone',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Choice and switch checklist',
          paragraphs: [
            'Adding room functions without dropping restaurant POS — typical karaoke path.',
          ],
          bullets: [
            'List room count, rate packages and average session length',
            'Track one evening book/session/extension on paper — where do errors happen?',
            'Keep restaurant POS if kitchen remains; move room time to club panel',
            'Run the same weekend scenario in a demo',
            'Agree whether room payment and bar sales land on which system',
          ],
        },
      ],
      faq: [
        {
          q: 'Is restaurant POS enough for karaoke?',
          a: 'Yes when hall and kitchen are central (karaoke-restaurant). When room hours are main revenue and booking/sessions are critical, restaurant POS leaves room-time gaps — consider a room system or Heselo.',
        },
        {
          q: 'Does Heselo replace a karaoke restaurant kitchen?',
          a: 'No. Keep restaurant POS for full kitchen and waiter orders. Heselo focuses on room hours, bookings and sessions.',
        },
        {
          q: 'Can both systems run together?',
          a: 'Yes. Many karaoke businesses run restaurant POS (hall/kitchen) and room panel (hours/booking) in parallel.',
        },
        {
          q: 'Heselo pricing and languages?',
          a: 'From {low} AZN/month, AZ / EN / RU, listed publicly.',
        },
        {
          q: 'How to compare restaurant POS pricing?',
          a: 'Use official package and hardware quotes — no invented figures here. Compare only modules you will use against Heselo.',
        },
        {
          q: 'Only 2–3 karaoke rooms — need a panel?',
          a: 'As booking volume and double-booking risk grow, a panel helps. At tiny volume timers and WhatsApp may work; plan for growth.',
        },
        {
          q: 'How does a demo work?',
          a: 'Model your room types and walk book → session → extension → shift close step by step.',
        },
        {
          q: 'Lounge and karaoke on one system?',
          a: 'Same hourly room model — same room-time panel fits. If lounge has heavy restaurant stack, restaurant POS can stay parallel.',
        },
      ],
      ctaTitle: 'Test your karaoke room flow on Heselo',
      ctaBody:
        'Request a demo. We can model your rooms and rates, then try bookings, live sessions and cash shifts together.',
    },
    ru: {
      shortTitle: 'Ресторанная POS vs караоке',
      h1: 'Ресторанная POS vs система караоке-комнат — что выбрать?',
      seoTitle: 'Ресторанная POS vs караоке — комнаты, сеансы | Heselo',
      seoDescription:
        'Можно ли вести караоке-клуб на ресторанной кассе? Сравнение ресторанной POS и систем почасовых/караоке-комнат, таблица, ландшафт — AZ, EN, RU.',
      keywords: [
        'ресторанная POS караоке',
        'система бронирования караоке',
        'программа караоке комнат',
        'ресторанная касса караоке',
        'почасовая система комнат',
        'бронирование лаунж',
        'управление клубом',
        'Heselo',
      ],
      intro:
        'Караоке и лаунж с комнатами иногда открывают на ресторанной POS — меню, напитки и чеки на одной кассе. Если основная выручка — часы комнат и продления сеансов, ресторанная POS не закрывает календарь комнат, живые сеансы и почасовые тарифы. Это руководство сравнивает ресторанную POS с системами караоке/времени комнат; Heselo не заменяет полноценную ресторанную кухню.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: ресторанный зал или часы комнат?',
          paragraphs: [
            'В караоке-бизнесе доля выручки от времени комнат vs еды и напитков определяет выбор системы.',
          ],
          bullets: [
            'Основная выручка: часы комнат и минимальный чек или полноценный зал и кухня?',
            'Бронирование: столы или караоке-комнаты и часовые блоки?',
            'Критичный поток: заказы официантов или бронь → сеанс → продление → касса?',
          ],
        },
        {
          id: 'when-restaurant-pos-fits',
          title: 'Когда хватает ресторанной POS?',
          paragraphs: [
            'Формат «караоке-ресторан» — большой зал, кухня, заказы официантов — ресторанная POS (Clopos, iiko, Dine и т.д.) верная категория. Если время комнат — небольшая добавка вручную, одной кассы может хватить.',
            'В караоке-only клубах (часы комнат в центре) ресторанная POS повышает риск двойных броней и забытых продлений.',
          ],
          bullets: [
            'Кухня и заказы зала — основная ежедневная работа',
            'Мало комнат, время на бумаге/таймере',
            'Фискальные чеки и меню под ресторанный контур',
            'Бронь комнат вторична',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит панель караоке/времени комнат (Heselo)?',
          paragraphs: [
            'Если комнаты продаются по часам, нужна предварительная бронь и сеанс стартует по приходу — это другая категория, не ресторанная POS. Heselo связывает календарь комнат с живым сеансом, тарифом и кассовой сменой.',
            'Напитки добавляются к сеансу; тяжёлый кухонный поток — не цель Heselo. На демо прогоните типичную пятницу: бронь → сеанс → продление.',
          ],
          bullets: [
            'Основной продукт: часы караоке/лаунж-комнаты',
            'Календарь комнат и защита от двойных броней',
            'Продления, пакеты тарифов и касса смены в одном месте',
            'AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Ресторанная POS и караоке/комнаты — сравнение',
          paragraphs: [
            'Таблица показывает основной фокус. Цена ресторанной POS зависит от поставщика и пакета — выдуманных цифр здесь нет.',
          ],
          table: {
            headers: ['Аспект', 'Ресторанная POS', 'Караоке / время комнат (Heselo)'],
            rows: [
              ['Основной фокус', 'Зал, кухня, заказы', 'Часы комнат и сеансы'],
              ['Бронирование', 'Столы и ресторанный поток', 'Календарь караоке/лаунж-комнат'],
              ['Учёт времени', 'Заказы в центре', 'Живой сеанс, продление, тариф'],
              ['Меню / кухня', 'Сильный ресторанный стек', 'Допродажи к сеансу; не полная кухонная POS'],
              ['Касса', 'Ресторанные смены', 'Клубная смена + продажи комнат'],
              ['Цена', 'По пакету и предложению', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Зависит от пакета', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Караоке-ресторан, лаунж с кухней',
                'Караоке и лаунж, где часы комнат в центре',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Краткий ландшафт: ресторан vs время комнат',
          paragraphs: [
            'В Азербайджане караоке часто требует и зал F&B, и почасовые комнаты. Ресторанные POS: Clopos, iiko, Dine, MinuPOS. Время комнат — отдельная категория клубных панелей (например Heselo).',
            'Не обязательно выбирать одну систему — параллельный контур часто чище; зафиксируйте, где какие продажи.',
          ],
          bullets: [
            'Ресторанная POS — кухня, зал, доставка',
            'Система караоке-комнат — бронь, сеанс, почасовой тариф',
            'Heselo — клубы с временем комнат; не замена ресторанной кухни',
            'Гибрид: ресторанная POS + панель комнат',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии караоке',
          paragraphs: ['Один бренд в разных форматах играет разную роль.'],
          bullets: [
            'Караоке-ресторан: заказы зала в ресторанной POS; комнаты на таймерах — при росте добавьте панель комнат',
            'Караоке с фокусом на комнаты: бронь → сеанс → тариф → напитки к сеансу → касса',
            'Лаунж: календарь комнат + минимальный бар; тяжёлая кухня может остаться на отдельной POS',
            'Пик выходных: риск двойных броней без календаря комнат на одной ресторанной POS',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист выбора и перехода',
          paragraphs: [
            'Добавить функции комнат, не отказываясь от ресторанной POS — типичный путь караоке.',
          ],
          bullets: [
            'Число комнат, пакеты тарифов и средняя длительность сеанса',
            'Один вечер отследите бронь/сеанс/продление на бумаге — где ошибки?',
            'Оставьте ресторанную POS при кухне; время комнат — в клубную панель',
            'На демо прогоните тот же выходной сценарий',
            'Договоритесь, где учитывается оплата комнаты и бар',
          ],
        },
      ],
      faq: [
        {
          q: 'Хватит ли ресторанной POS для караоке?',
          a: 'Да, если зал и кухня в центре (караоке-ресторан). Если основная выручка — часы комнат и критичны бронь/сеансы, ресторанная POS оставляет пробелы — смотрите систему комнат или Heselo.',
        },
        {
          q: 'Heselo заменяет кухню караоке-ресторана?',
          a: 'Нет. Ресторанная POS для полной кухни и заказов официантов. Heselo — часы комнат, бронь и сеансы.',
        },
        {
          q: 'Можно ли совместить обе системы?',
          a: 'Да. Многие ведут ресторанную POS (зал/кухня) и панель комнат (часы/бронь) параллельно.',
        },
        {
          q: 'Цена и языки Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU, открыто на сайте.',
        },
        {
          q: 'Как сравнивать цену ресторанной POS?',
          a: 'По официальному пакету и оборудованию — без выдуманных цифр. Сравнивайте только нужные модули с Heselo.',
        },
        {
          q: 'Всего 2–3 комнаты — нужна панель?',
          a: 'При росте броней и риска двойных броней панель полезна. При крошечном потоке таймер и WhatsApp могут хватить; учитывайте рост.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Смоделируйте типы комнат и пройдите бронь → сеанс → продление → закрытие смены.',
        },
        {
          q: 'Лаунж и караоке на одной системе?',
          a: 'Та же модель почасовых комнат — подходит одна панель времени комнат. При тяжёлом ресторанном контуре ресторанная POS может остаться параллельно.',
        },
      ],
      ctaTitle: 'Проверьте караоке-поток комнат на Heselo',
      ctaBody:
        'Запросите демо: смоделируем комнаты и тарифы и вместе проверим бронирования, живые сеансы и кассовые смены.',
    },
  }

export function restaurantPosVsKaraokeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'restaurant-pos-vs-karaoke-system',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
