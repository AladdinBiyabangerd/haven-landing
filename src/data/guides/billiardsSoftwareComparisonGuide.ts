import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-17'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'reservations', 'pos']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'Bilyard proqramları 2026',
    h1: 'Bilyard klubu proqramları — 2026 müqayisəsi',
    seoTitle: 'Bilyard klubu proqramı müqayisəsi 2026 | Heselo',
    seoDescription:
      'Heselo, CueDesk, BilliardPOS, BCMS və Biliardo.kz: masa taymeri, rezerv, bar, platforma və qiymət. Dürüst cədvəl — affiliate yox.',
    keywords: [
      'bilyard klubu proqramı',
      'bilyard proqramı müqayisə',
      'ən yaxşı bilyard proqramı',
      'bilyard idarəetmə sistemi',
      'CueDesk BilliardPOS',
    ],
    intro:
      'Bilyard klubu üçün proqram axtarışı adətən eyni suallara gətirir: masa taymeri varmı, gecə tarifi qurmaq olurmu, bar hesabı sessiyaya düşürmü, işıq relye lazımdırmı? Bu səhifə 2026-cı ildə tez adı çəkilən həlləri bir cədvəldə toplayır. Affiliate link yoxdur; rəqiblərin güclü tərəflərini gizlətmirik. Heselo öz panellimizdir — qiymət və boşluqlar açıq yazılıb.',
    sections: [
      {
        id: 'how-to-read',
        title: 'Cədvəli necə oxumaq',
        paragraphs: [
          '«Bəli» o deməkdir ki, kateqoriya və ya açıq materiallarda funksiya təsdiqlənir. «Vendor» — qiymət və paket onların saytından yoxlanmalıdır. «Xeyr» Heselo üçün dürüst mənfi cavabdır (relye, QR üzvlük).',
        ],
      },
      {
        id: 'table',
        title: 'Əsas funksiyaların müqayisəsi',
        paragraphs: [
          'Mənbələr: ictimai saytlar və mağaza səhifələri (2026). Exact paket hədləri dəyişə bilər — son qərardan əvvəl vendor-u soruşun.',
        ],
        table: {
          headers: ['Xüsusiyyət', 'Heselo', 'CueDesk', 'BilliardPOS', 'BCMS', 'Biliardo.kz'],
          rows: [
            ['Masa taymeri / tarif', 'Bəli', 'Bəli', 'Bəli', 'Bəli', 'Bəli'],
            ['Rezervasiya + canlı sessiya', 'Bəli', 'Bəli*', 'Bəli*', 'Bəli*', 'Bəli*'],
            ['Bar / kafe sessiya hesabına', 'Bəli', 'Bəli*', 'Bəli', 'Bəli*', 'Bəli'],
            ['Platforma', 'Web/bulud', 'iOS/Android', 'Web/bulud', 'Windows', 'Regional'],
            ['QR üzvlük', 'Xeyr', 'Bəli*', 'Xeyr*', 'Xeyr*', 'Xeyr*'],
            ['İşıq relye', 'Xeyr', 'Xeyr*', 'Xeyr*', 'Xeyr*', 'Xeyr*'],
            ['Qiymət', '{billiards}–59 AZN', 'Vendor', 'Vendor', 'Store/lisenziya', 'Vendor'],
            ['AZ / RU dil', 'Bəli', 'Vendor', 'Vendor', 'Vendor', 'Regional'],
          ],
        },
      },
      {
        id: 'notes',
        title: 'Cədvəl qeydləri',
        paragraphs: [
          'Ulduz (*) — funksiya açıq materiallarda və ya kateqoriyada iddia olunur; paketdən asılı ola bilər. İşıq relye ayrıca ClubSystem tipli avadanlıq həllərində olur; bu cədvəldəki heç bir sətir «relye var» demir, çünki əksər bulud panellər onu daxil etmir.',
        ],
        bullets: [
          'CueDesk — QR və mobil idarəetmə üçün ayrıca baxın',
          'BilliardPOS — anbar və printer stack üçün ayrıca baxın',
          'BCMS — tək Windows PC üçün sadə yol',
          'Biliardo.kz — KZ/regional dəstək üçün',
          'Heselo — AZ açıq qiymət, bulud, otaq+masa+kassa',
        ],
      },
      {
        id: 'choose',
        title: 'Necə seçmək',
        paragraphs: [
          'Əvvəl relye və QR-nin mütləq olub-olmadığına qərar verin. Sonra platformanı (Windows vs bulud vs mobil) seçin. Axırda qiymət şəffaflığı və dil — gündəlik növbə üçün vacibdir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Hansı proqram «ən yaxşıdır»?',
        a: 'Universal qalib yoxdur. Kiçik AZ klubunda açıq qiymətli bulud panel kifayət edə bilər; çoxfilial QR üzvlük və ya relye başqa seçim tələb edir.',
      },
      {
        q: 'Heselo işıq relyesini dəstəkləyir?',
        a: 'Xeyr. Planşet/kompüter paneli kimi işləyir; lampa avtomatlaşdırması ayrıca avadanlıqdır.',
      },
      {
        q: 'Ətraflı müqayisələr haradadır?',
        a: 'CueDesk, BilliardPOS, BCMS və Biliardo.kz üçün ayrı bələdçilərimiz var.',
      },
    ],
    ctaTitle: 'Heselo-nu cədvəldəki öz sətirinizlə yoxlayın',
    ctaBody: 'Masa sayınızı yazın — bron, tarif və kassanı sizin ssenari ilə göstərək.',
  },
  en: {
    shortTitle: 'Billiards software 2026',
    h1: 'Billiards club software — 2026 comparison',
    seoTitle: 'Billiards Club Software Comparison 2026 | Heselo',
    seoDescription:
      'Heselo, CueDesk, BilliardPOS, BCMS and Biliardo.kz: timers, booking, bar, platform and price. Honest table — no affiliate links.',
    keywords: [
      'billiards club software',
      'billiards software comparison',
      'best billiards management software',
      'CueDesk BilliardPOS',
    ],
    intro:
      'Searching for billiards club software usually lands on the same questions: is there a table timer, can you set night rates, does the bar land on the session bill, and do you need a light relay? This page puts commonly named 2026 options in one table. No affiliate links; we do not hide competitor strengths. Heselo is our own panel — price and gaps are stated openly.',
    sections: [
      {
        id: 'how-to-read',
        title: 'How to read the table',
        paragraphs: [
          '“Yes” means the feature is confirmed in the category or public materials. “Vendor” means price and packages must be checked on their site. “No” for Heselo is an honest negative (relay, QR membership).',
        ],
      },
      {
        id: 'table',
        title: 'Feature comparison',
        paragraphs: [
          'Sources: public sites and store pages (2026). Exact package limits change — ask the vendor before you decide.',
        ],
        table: {
          headers: ['Feature', 'Heselo', 'CueDesk', 'BilliardPOS', 'BCMS', 'Biliardo.kz'],
          rows: [
            ['Table timer / rates', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
            ['Booking + live session', 'Yes', 'Yes*', 'Yes*', 'Yes*', 'Yes*'],
            ['Bar on session bill', 'Yes', 'Yes*', 'Yes', 'Yes*', 'Yes'],
            ['Platform', 'Web/cloud', 'iOS/Android', 'Web/cloud', 'Windows', 'Regional'],
            ['QR membership', 'No', 'Yes*', 'No*', 'No*', 'No*'],
            ['Light relay', 'No', 'No*', 'No*', 'No*', 'No*'],
            ['Price', '{billiards}–59 AZN', 'Vendor', 'Vendor', 'Store/license', 'Vendor'],
            ['AZ / RU language', 'Yes', 'Vendor', 'Vendor', 'Vendor', 'Regional'],
          ],
        },
      },
      {
        id: 'notes',
        title: 'Table notes',
        paragraphs: [
          'An asterisk (*) means the feature is claimed in public materials or the category and may depend on the package. Light relays appear in hardware-focused systems such as ClubSystem-class tools; none of the rows here claim a built-in relay, because most cloud panels do not include one.',
        ],
        bullets: [
          'CueDesk — look closer for QR and mobile control',
          'BilliardPOS — look closer for stock and printers',
          'BCMS — simple path for a single Windows PC',
          'Biliardo.kz — for KZ/regional support',
          'Heselo — public AZ pricing, cloud, room+table+cash',
        ],
      },
      {
        id: 'choose',
        title: 'How to choose',
        paragraphs: [
          'First decide whether a relay and QR are mandatory. Then pick the platform (Windows vs cloud vs mobile). Finally weigh price transparency and language — both matter for daily shifts.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which software is “the best”?',
        a: 'There is no universal winner. A small AZ club may be fine with a public-priced cloud panel; multi-site QR membership or a relay needs a different shortlist.',
      },
      {
        q: 'Does Heselo support light relays?',
        a: 'No. It runs as a tablet/computer panel; lamp automation is separate hardware.',
      },
      {
        q: 'Where are deeper comparisons?',
        a: 'We publish separate guides for CueDesk, BilliardPOS, BCMS, and Biliardo.kz.',
      },
    ],
    ctaTitle: 'Validate Heselo against your row in the table',
    ctaBody: 'Share your table count — we will show booking, rates, and cash on your scenario.',
  },
  ru: {
    shortTitle: 'Программы для бильярда 2026',
    h1: 'Программы для бильярдного клуба — сравнение 2026',
    seoTitle: 'Сравнение программ для бильярда 2026 | Heselo',
    seoDescription:
      'Heselo, CueDesk, BilliardPOS, BCMS и Biliardo.kz: таймер, бронь, бар, платформа и цена. Честная таблица — без affiliate.',
    keywords: [
      'программа для бильярдного клуба',
      'сравнение программ для бильярда',
      'лучшая программа для бильярда',
      'CueDesk BilliardPOS',
    ],
    intro:
      'Поиск программы для бильярдного клуба обычно сводится к одним вопросам: есть ли таймер стола, можно ли задать ночной тариф, попадает ли бар в счёт сеанса, нужно ли реле света? На этой странице собраны часто называемые в 2026 варианты. Affiliate-ссылок нет; сильные стороны конкурентов не прячем. Heselo — наша панель: цена и ограничения указаны открыто.',
    sections: [
      {
        id: 'how-to-read',
        title: 'Как читать таблицу',
        paragraphs: [
          '«Да» — функция подтверждена в категории или открытых материалах. «Vendor» — цену и пакеты нужно смотреть на их сайте. «Нет» у Heselo — честный отказ (реле, QR-членство).',
        ],
      },
      {
        id: 'table',
        title: 'Сравнение возможностей',
        paragraphs: [
          'Источники: публичные сайты и страницы магазинов (2026). Точные лимиты пакетов меняются — перед решением спросите вендора.',
        ],
        table: {
          headers: ['Возможность', 'Heselo', 'CueDesk', 'BilliardPOS', 'BCMS', 'Biliardo.kz'],
          rows: [
            ['Таймер / тарифы', 'Да', 'Да', 'Да', 'Да', 'Да'],
            ['Бронь + живой сеанс', 'Да', 'Да*', 'Да*', 'Да*', 'Да*'],
            ['Бар в счёт сеанса', 'Да', 'Да*', 'Да', 'Да*', 'Да'],
            ['Платформа', 'Web/облако', 'iOS/Android', 'Web/облако', 'Windows', 'Региональная'],
            ['QR-членство', 'Нет', 'Да*', 'Нет*', 'Нет*', 'Нет*'],
            ['Реле света', 'Нет', 'Нет*', 'Нет*', 'Нет*', 'Нет*'],
            ['Цена', '{billiards}–59 AZN', 'Vendor', 'Vendor', 'Store/лицензия', 'Vendor'],
            ['Языки AZ / RU', 'Да', 'Vendor', 'Vendor', 'Vendor', 'Региональные'],
          ],
        },
      },
      {
        id: 'notes',
        title: 'Пояснения к таблице',
        paragraphs: [
          'Звёздочка (*) — функция заявлена в открытых материалах или категории и может зависеть от пакета. Реле света бывает в аппаратных решениях класса ClubSystem; ни одна строка здесь не утверждает встроенное реле — большинство облачных панелей его не включают.',
        ],
        bullets: [
          'CueDesk — отдельно смотрите QR и мобильное управление',
          'BilliardPOS — отдельно склад и принтеры',
          'BCMS — простой путь для одного Windows-ПК',
          'Biliardo.kz — для KZ/региональной поддержки',
          'Heselo — открытая цена AZ, облако, комната+стол+касса',
        ],
      },
      {
        id: 'choose',
        title: 'Как выбрать',
        paragraphs: [
          'Сначала решите, обязательны ли реле и QR. Затем выберите платформу (Windows, облако или мобильное). В конце — прозрачность цены и язык: для ежедневной смены это важно.',
        ],
      },
    ],
    faq: [
      {
        q: 'Какая программа «лучшая»?',
        a: 'Универсального победителя нет. Небольшому клубу в AZ может хватить облачной панели с открытой ценой; мультифилиал с QR или реле требует другого shortlist.',
      },
      {
        q: 'Поддерживает ли Heselo реле света?',
        a: 'Нет. Это панель на планшете/компьютере; автоматизация ламп — отдельное оборудование.',
      },
      {
        q: 'Где более подробные сравнения?',
        a: 'Отдельные статьи есть по CueDesk, BilliardPOS, BCMS и Biliardo.kz.',
      },
    ],
    ctaTitle: 'Проверьте Heselo по своей строке в таблице',
    ctaBody: 'Напишите число столов — покажем бронь, тарифы и кассу на вашем сценарии.',
  },
}

export function billiardsSoftwareComparisonGuide(locale: Locale): GuideCopy {
  return {
    slug: 'billiards-software-comparison-2026',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
