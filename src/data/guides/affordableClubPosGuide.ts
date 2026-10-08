import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'gaming',
  'karaoke',
  'pos',
  'inventory',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Sərfəli klub POS sistemi',
      h1: 'Sərfəli klub POS alternativi necə seçilir?',
      seoTitle: 'Sərfəli klub POS alternativi — otaq, sessiya, kassa | Heselo',
      seoDescription:
        'Oyun, karaoke, bilyard, antikafe və launj üçün sərfəli POS: qərar meyarları, müqayisə cədvəli və {low} AZN/aydan Heselo — AZ, EN, RU.',
      keywords: [
        'sərfəli klub POS',
        'ucuz klub POS',
        'klub POS alternativi',
        'otaq rezervasiya sistemi',
        'vaxt sessiyası proqramı',
        'playstation klub proqramı',
        'Heselo',
      ],
      intro:
        'Ən ucuz POS həmişə ən sərfəli seçim deyil: klub vaxtını ayrıca cədvəldə izləmək əlavə iş yarada bilər. Bu bələdçi sərfəli klub POS seçimini otaq-vaxt nishi ilə izah edir — Heselo {low} AZN/aydan rezervasiya, canlı sessiya, kassa və stoku birləşdirir.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: ucuz restoran POS, yoxsa klub paneli?',
          paragraphs: [
            'Qiymətə baxmazdan əvvəl əsas əməliyyatı müəyyən edin.',
          ],
          bullets: [
            'Əsas gəlir otaq/stansiya saatındandır, yoxsa yemək-içki sifarişindən?',
            'Vaxt hələ Excel və WhatsApp-dadırsa, “ucuz POS” əlavə iş yarada bilər',
            'Aylıq abunə + quraşdırma + istifadə olunmayan modullar = real TCO',
          ],
        },
        {
          id: 'when-cheap-restaurant-fits',
          title: 'Ucuz restoran POS nə vaxt kifayətdir?',
          paragraphs: [
            'Əsas fəaliyyət restoran sifarişi, mətbəx, QR menyu və çatdırılmadırsa, münasib qiymətli restoran POS düzgün kateqoriyadır. Heselo tam mətbəx POS-una alternativ deyil.',
          ],
          bullets: [
            'Mətbəx və menyu mərkəzdədir',
            'Otaq vaxtı yoxdur və ya nadirdir',
            'Yalnız çek və məhsul satışı lazımdır',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt daha sərfəlidir?',
          paragraphs: [
            'Otaq, konsol və masa vaxtı satırsınızsa, bir məqsədli sistem işçilərin rezervasiya ilə faktiki sessiyanı qarışdırmasının qarşısını alır və ayrıca cədvəl xərcini azaldır.',
          ],
          bullets: [
            'Əsas məhsul: otaq, konsol və ya masa saatı',
            'Öncədən bron və gəlişdə sessiya başlaması lazımdır',
            'Uzatma, tarif və növbə kassası bir paneldə olmalıdır',
            'AZ / EN / RU interfeys və açıq qiymət ({low} AZN/aydan) vacibdir',
          ],
        },
        {
          id: 'comparison',
          title: 'Ucuz restoran POS vs Heselo',
          paragraphs: [
            'Cədvəl “ucuz”un nə demək olduğunu göstərir: yalnız abunə yox, əməliyyat uyğunluğu.',
          ],
          table: {
            headers: ['Aspekt', 'Ucuz restoran/satış POS', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Sifariş, menyu, çek', 'Otaq / stansiya / masa vaxtı'],
              ['Vaxt hesabı', 'Əlavə cədvəl və ya taymer', 'Canlı sessiya, uzadılma, tarif'],
              ['Rezervasiya', 'Masa/restoran axını', 'Otaq və stansiya təqvimi'],
              ['Gizli xərc', 'İstifadə olunmayan modul + əl işi', 'Açıq paket: {low} AZN/aydan'],
              ['Ən yaxşı uyğunluq', 'Kiçik restoran/kafe', 'Oyun, karaoke, bilyard, antikafe, launj'],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Qısa landşaft',
          paragraphs: [
            'Restoran istiqamətində Dine, Clopos, MinuPOS və oxşarlar müzakirə olunur. Klub vaxtı üçün isə Heselo ayrı kateqoriyadır.',
          ],
          bullets: [
            'Restoran POS — mətbəx və sifariş',
            'Heselo — otaq-vaxt və canlı sessiya',
            'Hər ikisi lazımdırsa paralel istifadə',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Seçimi necə yoxlamalı?',
          paragraphs: [
            'Namizədləri eyni ssenari ilə sınayın.',
          ],
          bullets: [
            'Rezervasiya yaradın, sessiyanı başladın, məhsul əlavə edin, kassanı bağlayın',
            'Quraşdırma, terminal və istifadə olunmayan modulları TCO-ya daxil edin',
            'Demo nəticəsinə əsasən seçin',
          ],
        }
      ],
      faq: [
        {
          q: 'Ən ucuz POS həmişə sərfəlidirmi?',
          a: 'Xeyr. Klub vaxtı ayrıca cədvəldə qalırsa, ucuz POS əlavə iş və səhv riski yaradır. Funksiya uyğunluğu ilə TCO-nu birlikdə ölçün.',
        },
        {
          q: 'Heselo neçədən başlayır?',
          a: 'Paketlər {low} AZN/aydan başlayır və saytda açıq göstərilir.',
        },
        {
          q: 'Heselo hansı məkanlar üçündür?',
          a: 'PlayStation və oyun klubları, karaoke, bilyard, antikafe və otaqlı launj.',
        },
        {
          q: 'Restoran POS-u saxlayıb Heselo əlavə etmək olarmı?',
          a: 'Bəli, mətbəx güclüdürsə restoran POS qalsın; otaq vaxtı Heselo-da. Satışların harada yazıldığını bölün.',
        },
        {
          q: 'Keçməzdən əvvəl necə yoxlayım?',
          a: 'Demo istəyin: bron → sessiya → məhsul → kassa bağlanışı.',
        }
      ],
      ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
      ctaBody:
        'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    },
    en: {
      shortTitle: 'Affordable club POS',
      h1: 'How to choose an affordable club POS alternative',
      seoTitle: 'Affordable Club POS Alternative — Rooms, Sessions | Heselo',
      seoDescription:
        'Choose affordable POS for gaming, karaoke, billiards, anticafe and lounges: decision criteria, comparison table, Heselo from {low} AZN/month — AZ, EN, RU.',
      keywords: [
        'affordable club POS',
        'cheap club POS',
        'club POS alternative',
        'room booking system',
        'timed session software',
        'PlayStation club software',
        'Heselo',
      ],
      intro:
        'The cheapest POS is not always the lowest-cost option if club time still lives in a spreadsheet. This guide explains affordable club POS choice for the room-time niche — Heselo from {low} AZN/month combines bookings, live sessions, cash and stock.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: cheap restaurant POS or club panel?',
          paragraphs: [
            'Define the main operation before comparing price.',
          ],
          bullets: [
            'Does main revenue come from room/station hours or food & drink orders?',
            'If time still lives in Excel and WhatsApp, a cheap POS can create more work',
            'Monthly fee + setup + unused modules = real TCO',
          ],
        },
        {
          id: 'when-cheap-restaurant-fits',
          title: 'When is a cheap restaurant POS enough?',
          paragraphs: [
            'If restaurant orders, a kitchen, QR menus and delivery are the main operation, an affordable restaurant POS is the right category. Heselo is not an alternative to a complete kitchen POS.',
          ],
          bullets: [
            'Kitchen and menus are central',
            'Room time is absent or rare',
            'You only need receipts and product sales',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When is Heselo more affordable in practice?',
          paragraphs: [
            'When you sell room, console or table time, one purpose-built system helps staff keep bookings and sessions distinct and reduces spreadsheet overhead.',
          ],
          bullets: [
            'Core product: room, console or table hours',
            'Advance booking and session start on arrival are required',
            'Extensions, rates and shift cash should live in one panel',
            'AZ / EN / RU UI and public pricing (from {low} AZN/month) matter',
          ],
        },
        {
          id: 'comparison',
          title: 'Cheap restaurant POS vs Heselo',
          paragraphs: [
            'The table shows what “affordable” means: fit, not just the subscription fee.',
          ],
          table: {
            headers: ['Aspect', 'Cheap restaurant/sales POS', 'Heselo'],
            rows: [
              ['Primary focus', 'Orders, menus, receipts', 'Room / station / table time'],
              ['Time billing', 'Extra spreadsheet or timer', 'Live session, extension, rates'],
              ['Bookings', 'Table/restaurant flow', 'Room and station calendar'],
              ['Hidden cost', 'Unused modules + manual work', 'Public plan: from {low} AZN/month'],
              [
                'Best fit',
                'Small restaurant/café',
                'Gaming, karaoke, billiards, anticafe, lounge',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Short landscape',
          paragraphs: [
            'In the restaurant direction, Dine, Clopos, MinuPOS and similar tools are discussed. For club time, Heselo is a separate category.',
          ],
          bullets: [
            'Restaurant POS — kitchen and orders',
            'Heselo — room-time and live sessions',
            'Need both: run in parallel',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'How to test the choice',
          paragraphs: [
            'Test every candidate with the same scenario.',
          ],
          bullets: [
            'Create a booking, start the session, add an item, close cash',
            'Include setup, terminals and unused modules in TCO',
            'Choose after the demo',
          ],
        }
      ],
      faq: [
        {
          q: 'Is the cheapest POS always the most affordable?',
          a: 'No. If club time stays in a spreadsheet, a cheap POS adds work and error risk. Measure fit together with TCO.',
        },
        {
          q: 'What does Heselo cost?',
          a: 'Plans start from {low} AZN per month and are listed publicly.',
        },
        {
          q: 'Which venues is Heselo for?',
          a: 'PlayStation and gaming clubs, karaoke, billiards, anticafes and room-based lounges.',
        },
        {
          q: 'Can I keep a restaurant POS and add Heselo?',
          a: 'Yes — keep restaurant POS for the kitchen; use Heselo for room time. Split which sales each records.',
        },
        {
          q: 'How do I check before switching?',
          a: 'Request a demo: book → session → item → cash close.',
        }
      ],
      ctaTitle: 'Test Heselo with your workflow',
      ctaBody:
        'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    },
    ru: {
      shortTitle: 'Доступная POS-система для клуба',
      h1: 'Как выбрать доступную альтернативу POS-системе для клуба',
      seoTitle: 'Доступная клубная POS — комнаты, сеансы | Heselo',
      seoDescription:
        'Выбор доступной POS для игровых, караоке-, бильярдных, антикафе- и лаунж-заведений: критерии, таблица, Heselo от {low} AZN/мес. — AZ, EN, RU.',
      keywords: [
        'доступная клубная POS',
        'дешёвая клубная POS',
        'альтернатива клубной POS',
        'система бронирования комнат',
        'учёт почасовых сеансов',
        'Heselo',
      ],
      intro:
        'Самая дешёвая POS не всегда обходится дешевле, если клубное время ведётся в таблице. Это руководство объясняет выбор доступной клубной POS для почасовой ниши — Heselo от {low} AZN в месяц объединяет бронь, живые сеансы, кассу и склад.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: дешёвая ресторанная POS или клубная панель?',
          paragraphs: [
            'Определите основной процесс до сравнения цены.',
          ],
          bullets: [
            'Основная выручка — часы комнаты/станции или заказы еды и напитков?',
            'Если время всё ещё в Excel и WhatsApp, «дешёвая POS» может добавить работы',
            'Абонплата + внедрение + ненужные модули = реальный TCO',
          ],
        },
        {
          id: 'when-cheap-restaurant-fits',
          title: 'Когда достаточно дешёвой ресторанной POS?',
          paragraphs: [
            'Если основа — ресторанные заказы, кухня, QR-меню и доставка, доступная ресторанная POS — верная категория. Heselo не альтернатива полноценной кухонной POS.',
          ],
          bullets: [
            'Кухня и меню в центре',
            'Времени комнат нет или оно редко',
            'Нужны только чеки и продажа товаров',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда Heselo выгоднее на практике?',
          paragraphs: [
            'При продаже времени комнаты, консоли или стола специализированная система снижает путаницу брони и сеанса и затраты на отдельные таблицы.',
          ],
          bullets: [
            'Основной продукт: часы комнаты, консоли или стола',
            'Нужны предварительная бронь и запуск сеанса по приходу',
            'Продления, тарифы и касса смены должны быть в одной панели',
            'Важны интерфейс AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Дешёвая ресторанная POS и Heselo',
          paragraphs: [
            'Таблица показывает, что значит «доступно»: соответствие процессу, а не только абонплата.',
          ],
          table: {
            headers: ['Аспект', 'Дешёвая ресторанная/торговая POS', 'Heselo'],
            rows: [
              ['Основной фокус', 'Заказы, меню, чеки', 'Время комнаты / станции / стола'],
              ['Учёт времени', 'Отдельная таблица или таймер', 'Живой сеанс, продление, тариф'],
              ['Бронирование', 'Поток зала/ресторана', 'Календарь комнат и станций'],
              ['Скрытые затраты', 'Ненужные модули + ручная работа', 'Открытый тариф: от {low} AZN/мес.'],
              [
                'Лучшее соответствие',
                'Небольшой ресторан/кафе',
                'Игровые, караоке, бильярд, антикафе, лаунж',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Короткий ландшафт',
          paragraphs: [
            'В ресторанном направлении обсуждают Dine, Clopos, MinuPOS и аналоги. Для клубного времени Heselo — отдельная категория.',
          ],
          bullets: [
            'Ресторанная POS — кухня и заказы',
            'Heselo — время комнат и живые сеансы',
            'Нужны оба — параллельно',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Как проверить выбор',
          paragraphs: [
            'Проверьте кандидатов на одном сценарии.',
          ],
          bullets: [
            'Создайте бронь, запустите сеанс, добавьте товар, закройте кассу',
            'Учтите внедрение, терминалы и ненужные модули в TCO',
            'Решайте после демо',
          ],
        }
      ],
      faq: [
        {
          q: 'Самая дешёвая POS всегда выгоднее?',
          a: 'Нет. Если клубное время остаётся в таблице, дешёвая POS добавляет работу и риск ошибок. Считайте соответствие вместе с TCO.',
        },
        {
          q: 'Сколько стоит Heselo?',
          a: 'Тарифы от {low} AZN в месяц и открыто указаны на сайте.',
        },
        {
          q: 'Для каких заведений Heselo?',
          a: 'PlayStation- и игровые клубы, караоке, бильярд, антикафе и лаунж с комнатами.',
        },
        {
          q: 'Можно оставить ресторанную POS и добавить Heselo?',
          a: 'Да — кухню в ресторанной POS, время комнат в Heselo. Разделите, какие продажи где учитываются.',
        },
        {
          q: 'Как проверить до перехода?',
          a: 'Запросите демо: бронь → сеанс → товар → закрытие кассы.',
        }
      ],
      ctaTitle: 'Проверьте Heselo на своём сценарии',
      ctaBody:
        'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    },
  }

export function affordableClubPosGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'affordable-club-pos',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
