import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-19'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'reservations', 'pos']

/**
 * Sources checked 18 Oct 2026 (public vendor pages / Microsoft Store).
 * Competitor cells are paraphrased from those pages — not affiliate.
 * Heselo prices come from the public catalog API via {billiards}/{billiardsHigh}/{currency}.
 */
const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'Bilyard proqramları müqayisə',
    h1: 'Bilyard klubu proqramları — müqayisə',
    seoTitle: 'Bilyard klubu proqramı müqayisəsi | Heselo',
    seoDescription:
      'Heselo, CueDesk, BilliardPOS, BCMS və Biliardo.kz: masa taymeri, rezerv, bar, işıq relye, platforma və qiymət. Dürüst cədvəl — affiliate yox.',
    keywords: [
      'bilyard klubu proqramı',
      'bilyard proqramı müqayisə',
      'ən yaxşı bilyard proqramı',
      'bilyard idarəetmə sistemi',
      'CueDesk BilliardPOS',
    ],
    intro:
      'Bilyard klubu üçün proqram axtarışı adətən eyni suallara gətirir: masa taymeri varmı, gecə tarifi qurmaq olurmu, bar hesabı sessiyaya düşürmü, işıq relye lazımdırmı? Bu səhifə tez adı çəkilən beynəlxalq və regional həlləri bir cədvəldə toplayır. Affiliate link yoxdur; rəqiblərin güclü tərəflərini gizlətmirik. Heselo öz panellimizdir — boşluqlar (relye yox, QR üzvlük yox) açıq yazılıb.',
    sections: [
      {
        id: 'how-to-read',
        title: 'Cədvəli necə oxumaq',
        paragraphs: [
          '«Bəli» o deməkdir ki, vendorun açıq materiallarında funksiya təsdiqlənir. «Xeyr» Heselo üçün dürüst mənfi cavabdır (işıq relye). Rəqib qiymətləri onların saytındakı açıq rəqəmlərdir (yoxlanıb: 18.10.2026); Heselo qiyməti bu saytın katalog API-sindən gəlir. Marka adları müvafiq sahiblərinə aiddir — əlaqə və ya təsdiq yoxdur.',
        ],
      },
      {
        id: 'market',
        title: 'AZ və RU/CIS bazarında əlavə adlar',
        paragraphs: [
          'Cədvəldəki adlar (CueDesk, BilliardPOS, BCMS, Biliardo.kz) beynəlxalq və regional axtarışlarda tez çıxır. Azərbaycanda isə klublar çox vaxt Club Timer / Akinsoft quraşdırması, Menyum, Clopos və ya Excel ilə müqayisə edir — otaq-vaxt paneli vs restoran kassası. Rusiya/CIS-də SoftBilling, Smartbit, Paloma365, Smart BALL, Devpark və ClubSystem tez müzakirə olunur; onların paket hədlərini birbaşa vendor-dan yoxlayın. Bu hubda yalnız açıq mənbə ilə təsdiqlənən sətrlər var.',
        ],
      },
      {
        id: 'table',
        title: 'Əsas funksiyaların müqayisəsi',
        paragraphs: [
          'Mənbələr: cuedesk.app, billiardpos.net, biliardo.kz, Microsoft Store BCMS (yoxlama: 18.10.2026). Exact paket hədləri dəyişə bilər — son qərardan əvvəl vendor-u soruşun. Heselo Kiçik planı — 6 masa həddi; limitlər qiymətlər səhifəsindədir.',
        ],
        table: {
          headers: ['Xüsusiyyət', 'Heselo', 'CueDesk', 'BilliardPOS', 'BCMS', 'Biliardo.kz'],
          rows: [
            ['Masa taymeri / tarif', 'Bəli', 'Bəli', 'Bəli', 'Bəli', 'Bəli'],
            ['Rezervasiya + canlı sessiya', 'Bəli', 'Bəli*', 'Bəli*', 'Açıq siyahıda yox*', 'Bəli*'],
            ['Bar / kafe sessiya hesabına', 'Bəli', 'Bəli (tək plan)*', 'Bəli', 'Bəli*', 'Bəli'],
            ['Platforma', 'Web/bulud', 'Web + iOS/Android', 'Web/bulud', 'Windows', 'Windows + web kabinet'],
            ['İşıq relye', 'Xeyr', 'Xeyr*', 'Bəli (ESP32 IP)*', 'Xeyr*', 'Bəli (USB dəst)*'],
            [
              'Qiymət',
              '{billiards}–{billiardsHigh} {currency}',
              'Açıq tək plan, 7 gün trial*',
              '$39 / $69 / $99 (masa qrupu)*',
              'Pulsuz yükləmə + abunə*',
              '1000–2500 ₸/masa/ay*',
            ],
            ['AZ / RU dil', 'Bəli', 'Açıq deyil*', 'Vendor*', 'Vendor*', 'RU, KZ*'],
          ],
        },
      },
      {
        id: 'notes',
        title: 'Cədvəl qeydləri',
        paragraphs: [
          'Ulduz (*) — funksiya və ya qiymət açıq materialda göstərilib; paketdən asılı ola bilər. İşıq relye həm desktop, həm bulud məhsullarında olur: BilliardPOS ESP32 IP relay, Biliardo.kz USB işıq dəsti reklam edir. Heselo relye inteqrasiyası təklif etmir — lampa avtomatlaşdırması ayrıca avadanlıqdır. BCMS Store səhifəsində masa, işçi, qiymət, yemək-içki və gəlir yazılıb; ayrıca «bron» sözü yoxdur.',
        ],
        bullets: [
          'CueDesk — mobil app, QR üzvlük və tək açıq plan üçün ayrıca baxın',
          'BilliardPOS — ESP32 işıq, TV taymer və API/webhook üçün ayrıca baxın',
          'BCMS — tək Windows PC + Store abunə modeli üçün',
          'Biliardo.kz — KZ dəstək, oflayn Windows və açıq ₸ tariflər üçün',
          'Heselo — AZ/EN/RU interfeys, otaq+masa+bar+kassa bir bulud hesabında; qarışıq məkan (bilyard+PS+karaoke)',
        ],
      },
      {
        id: 'sources',
        title: 'Mənbələr',
        paragraphs: [
          'CueDesk: cuedesk.app (why-us, pricing). BilliardPOS: billiardpos.net/en. Biliardo.kz: biliardo.kz. BCMS: Microsoft Store «Billiards Club Management System». Heselo qiyməti: heselo.online qiymətlər səhifəsi / katalog API. Yoxlama tarixi: 18.10.2026.',
        ],
      },
      {
        id: 'choose',
        title: 'Necə seçmək',
        paragraphs: [
          'Əvvəl işıq relyesinin mütləq olub-olmadığına qərar verin — lazımdırsa BilliardPOS, Biliardo.kz və ya digər relye həllərinə baxın. Sonra platformanı (Windows oflayn vs bulud vs native mobil) seçin. Axırda dil və növbə axını: AZ/RU panel, rezervasiya → canlı sessiya → bar → kassa bir yerdə olmalıdırsa, Heselo bu boşluğu doldurur. «Açıq qiymət» tək fərq deyil — CueDesk, BilliardPOS və Biliardo.kz də tariflərini açıq yazır.',
        ],
      },
    ],
    faq: [
      {
        q: 'Hansı proqram «ən yaxşıdır»?',
        a: 'Universal qalib yoxdur. Kiçik AZ klubunda AZ/RU bulud panel kifayət edə bilər; relye və ya native mobil app başqa shortlist tələb edir. SoftBilling / Smartbit / Club Timer kimi yerli adları da eyni ssenari ilə müqayisə edin.',
      },
      {
        q: 'Heselo işıq relyesini dəstəkləyir?',
        a: 'Xeyr. Planşet/kompüter paneli kimi işləyir; lampa avtomatlaşdırması ayrıca avadanlıqdır. Relye lazımdırsa BilliardPOS və ya Biliardo.kz kateqoriyasına baxın.',
      },
      {
        q: 'Ətraflı müqayisələr haradadır?',
        a: 'CueDesk, BilliardPOS, BCMS və Biliardo.kz üçün ayrı bələdçilərimiz var. Saat tarifləri üçün «bilyard saat tarifi» bələdçisinə baxın.',
      },
    ],
    ctaTitle: 'Heselo-nu cədvəldəki öz sətirinizlə yoxlayın',
    ctaBody: 'Masa sayınızı yazın — bron, tarif və kassanı sizin ssenari ilə göstərək.',
  },
  en: {
    shortTitle: 'Billiards software comparison',
    h1: 'Billiards club software — comparison',
    seoTitle: 'Billiards Club Software Comparison | Heselo',
    seoDescription:
      'Heselo, CueDesk, BilliardPOS, BCMS and Biliardo.kz: timers, booking, bar, light relay, platform and price. Honest table — no affiliate links.',
    keywords: [
      'billiards club software',
      'billiards software comparison',
      'best billiards management software',
      'CueDesk BilliardPOS',
    ],
    intro:
      'Searching for billiards club software usually lands on the same questions: is there a table timer, can you set night rates, does the bar land on the session bill, and do you need a light relay? This page puts commonly named international and regional options in one table. No affiliate links; we do not hide competitor strengths. Heselo is our own panel — gaps (no relay, no QR membership) are stated openly.',
    sections: [
      {
        id: 'how-to-read',
        title: 'How to read the table',
        paragraphs: [
          '“Yes” means the feature is confirmed in the vendor’s public materials. “No” for Heselo is an honest negative (light relay). Competitor prices are the figures published on their sites (checked 18 Oct 2026); Heselo prices come from this site’s catalog API. Brand names belong to their owners — no affiliation.',
        ],
      },
      {
        id: 'market',
        title: 'Extra names in AZ and RU/CIS',
        paragraphs: [
          'Names in the table (CueDesk, BilliardPOS, BCMS, Biliardo.kz) show up often in global search. In Azerbaijan, clubs more often compare Club Timer / Akinsoft installs, Menyum, Clopos, or Excel — room-time panel vs restaurant till. In Russia/CIS, SoftBilling, Smartbit, Paloma365, Smart BALL, Devpark and ClubSystem are frequently discussed; confirm packages with each vendor. This hub only keeps rows we can source publicly.',
        ],
      },
      {
        id: 'table',
        title: 'Feature comparison',
        paragraphs: [
          'Sources: cuedesk.app, billiardpos.net, biliardo.kz, Microsoft Store BCMS (checked 18 Oct 2026). Package limits change — ask the vendor before you decide. Heselo Small plan caps at 6 tables; limits are on the pricing page.',
        ],
        table: {
          headers: ['Feature', 'Heselo', 'CueDesk', 'BilliardPOS', 'BCMS', 'Biliardo.kz'],
          rows: [
            ['Table timer / rates', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
            ['Booking + live session', 'Yes', 'Yes*', 'Yes*', 'Not listed*', 'Yes*'],
            ['Bar on session bill', 'Yes', 'Yes (single plan)*', 'Yes', 'Yes*', 'Yes'],
            ['Platform', 'Web/cloud', 'Web + iOS/Android', 'Web/cloud', 'Windows', 'Windows + web cabinet'],
            ['Light relay', 'No', 'No*', 'Yes (ESP32 IP)*', 'No*', 'Yes (USB kit)*'],
            [
              'Price',
              '{billiards}–{billiardsHigh} {currency}',
              'Public single plan, 7-day trial*',
              '$39 / $69 / $99 (table bands)*',
              'Free download + subscription*',
              '1000–2500 ₸/table/mo*',
            ],
            ['AZ / RU language', 'Yes', 'Not stated*', 'Vendor*', 'Vendor*', 'RU, KZ*'],
          ],
        },
      },
      {
        id: 'notes',
        title: 'Table notes',
        paragraphs: [
          'An asterisk (*) means the feature or price is stated in public materials and may depend on the package. Light relays exist in both cloud and desktop products: BilliardPOS advertises an ESP32 IP relay; Biliardo.kz sells a USB light kit. Heselo does not offer relay integration — lamp automation is separate hardware. The BCMS Store listing names tables, staff, prices, food and drinks, and revenue; it does not list booking as a named feature.',
        ],
        bullets: [
          'CueDesk — look closer for mobile apps, QR membership, and a single public plan',
          'BilliardPOS — look closer for ESP32 lights, TV timers, and API/webhooks',
          'BCMS — simple path for a single Windows PC with a Store subscription',
          'Biliardo.kz — for KZ support, offline Windows, and published ₸ pricing',
          'Heselo — AZ/EN/RU UI, room+table+bar+cash in one cloud account; mixed venues (billiards+PS+karaoke)',
        ],
      },
      {
        id: 'sources',
        title: 'Sources',
        paragraphs: [
          'CueDesk: cuedesk.app (why-us, pricing). BilliardPOS: billiardpos.net/en. Biliardo.kz: biliardo.kz. BCMS: Microsoft Store “Billiards Club Management System”. Heselo pricing: heselo.online pricing page / catalog API. Checked: 18 Oct 2026.',
        ],
      },
      {
        id: 'choose',
        title: 'How to choose',
        paragraphs: [
          'First decide whether a light relay is mandatory — if yes, look at BilliardPOS, Biliardo.kz, or other relay products. Then pick the platform (offline Windows vs cloud vs native mobile). Finally weigh language and shift flow: if you need AZ/RU UI and booking → live session → bar → cash in one place, Heselo fills that gap. “Open pricing” alone is not a differentiator — CueDesk, BilliardPOS, and Biliardo.kz also publish rates.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which software is “the best”?',
        a: 'There is no universal winner. A small AZ club may be fine with an AZ/RU cloud panel; a relay or native mobile app needs a different shortlist. Also compare local names such as SoftBilling, Smartbit, or Club Timer on the same scenario.',
      },
      {
        q: 'Does Heselo support light relays?',
        a: 'No. It runs as a tablet/computer panel; lamp automation is separate hardware. If a relay is mandatory, look at BilliardPOS or Biliardo.kz-class tools.',
      },
      {
        q: 'Where are deeper comparisons?',
        a: 'We publish separate guides for CueDesk, BilliardPOS, BCMS, and Biliardo.kz. For hourly rates, see the billiards hourly rates guide.',
      },
    ],
    ctaTitle: 'Validate Heselo against your row in the table',
    ctaBody: 'Share your table count — we will show booking, rates, and cash on your scenario.',
  },
  ru: {
    shortTitle: 'Сравнение программ для бильярда',
    h1: 'Программы для бильярдного клуба — сравнение',
    seoTitle: 'Сравнение программ для бильярда | Heselo',
    seoDescription:
      'Heselo, CueDesk, BilliardPOS, BCMS и Biliardo.kz: таймер, бронь, бар, реле света, платформа и цена. Честная таблица — без affiliate.',
    keywords: [
      'программа для бильярдного клуба',
      'сравнение программ для бильярда',
      'лучшая программа для бильярда',
      'CueDesk BilliardPOS',
    ],
    intro:
      'Поиск программы для бильярдного клуба обычно сводится к одним вопросам: есть ли таймер стола, можно ли задать ночной тариф, попадает ли бар в счёт сеанса, нужно ли реле света? На этой странице собраны часто называемые международные и региональные варианты. Affiliate-ссылок нет; сильные стороны конкурентов не прячем. Heselo — наша панель: ограничения (нет реле, нет QR-членства) указаны открыто.',
    sections: [
      {
        id: 'how-to-read',
        title: 'Как читать таблицу',
        paragraphs: [
          '«Да» — функция подтверждена в открытых материалах вендора. «Нет» у Heselo — честный отказ (реле света). Цены конкурентов — цифры с их сайтов (проверка 18.10.2026); цены Heselo берутся из каталожного API этого сайта. Товарные знаки принадлежат владельцам — аффилиации нет.',
        ],
      },
      {
        id: 'market',
        title: 'Другие имена на рынке AZ и RU/СНГ',
        paragraphs: [
          'Имена в таблице (CueDesk, BilliardPOS, BCMS, Biliardo.kz) часто встречаются в глобальном поиске. В Азербайджане клубы чаще сравнивают Club Timer / Akinsoft, Menyum, Clopos или Excel — панель времени vs ресторанная касса. В России/СНГ часто обсуждают SoftBilling, Smartbit, Paloma365, Smart BALL, Devpark и ClubSystem; пакеты уточняйте у вендоров. В этом хабе только строки с публичным источником.',
        ],
      },
      {
        id: 'table',
        title: 'Сравнение возможностей',
        paragraphs: [
          'Источники: cuedesk.app, billiardpos.net, biliardo.kz, Microsoft Store BCMS (проверка 18.10.2026). Лимиты пакетов меняются — перед решением спросите вендора. План «Старт» Heselo — до 6 столов; лимиты на странице цен.',
        ],
        table: {
          headers: ['Возможность', 'Heselo', 'CueDesk', 'BilliardPOS', 'BCMS', 'Biliardo.kz'],
          rows: [
            ['Таймер / тарифы', 'Да', 'Да', 'Да', 'Да', 'Да'],
            ['Бронь + живой сеанс', 'Да', 'Да*', 'Да*', 'Не указано*', 'Да*'],
            ['Бар в счёт сеанса', 'Да', 'Да (один план)*', 'Да', 'Да*', 'Да'],
            ['Платформа', 'Web/облако', 'Web + iOS/Android', 'Web/облако', 'Windows', 'Windows + web-кабинет'],
            ['Реле света', 'Нет', 'Нет*', 'Да (ESP32 IP)*', 'Нет*', 'Да (USB-комплект)*'],
            [
              'Цена',
              '{billiards}–{billiardsHigh} {currency}',
              'Открытый один план, trial 7 дней*',
              '$39 / $69 / $99 (по числу столов)*',
              'Бесплатная загрузка + подписка*',
              '1000–2500 ₸/стол/мес*',
            ],
            ['Языки AZ / RU', 'Да', 'Не указано*', 'Vendor*', 'Vendor*', 'RU, KZ*'],
          ],
        },
      },
      {
        id: 'notes',
        title: 'Пояснения к таблице',
        paragraphs: [
          'Звёздочка (*) — функция или цена заявлена в открытых материалах и может зависеть от пакета. Реле света бывает и в облаке, и в desktop: BilliardPOS заявляет ESP32 IP-реле; Biliardo.kz продаёт USB-комплект света. Heselo реле не интегрирует — автоматизация ламп отдельное оборудование. В карточке BCMS в Store указаны столы, персонал, цены, еда/напитки и выручка; отдельного пункта «бронь» нет.',
        ],
        bullets: [
          'CueDesk — отдельно смотрите мобильные приложения, QR-членство и один открытый план',
          'BilliardPOS — отдельно ESP32-свет, TV-таймеры и API/webhooks',
          'BCMS — простой путь для одного Windows-ПК с подпиской из Store',
          'Biliardo.kz — для поддержки KZ, офлайн Windows и открытых тарифов в ₸',
          'Heselo — интерфейс AZ/EN/RU, комната+стол+бар+касса в одном облачном аккаунте; смешанные заведения (бильярд+PS+караоке)',
        ],
      },
      {
        id: 'sources',
        title: 'Источники',
        paragraphs: [
          'CueDesk: cuedesk.app (why-us, pricing). BilliardPOS: billiardpos.net/en. Biliardo.kz: biliardo.kz. BCMS: Microsoft Store «Billiards Club Management System». Цены Heselo: страница цен heselo.online / каталожный API. Проверка: 18.10.2026.',
        ],
      },
      {
        id: 'choose',
        title: 'Как выбрать',
        paragraphs: [
          'Сначала решите, обязательно ли реле света — если да, смотрите BilliardPOS, Biliardo.kz и другие реле-решения. Затем выберите платформу (офлайн Windows, облако или нативное мобильное). В конце — язык и смена: если нужны AZ/RU и цепочка бронь → живой сеанс → бар → касса в одном месте, Heselo закрывает этот пробел. «Открытая цена» сама по себе не дифференциатор — CueDesk, BilliardPOS и Biliardo.kz тоже публикуют тарифы.',
        ],
      },
    ],
    faq: [
      {
        q: 'Какая программа «лучшая»?',
        a: 'Универсального победителя нет. Небольшому клубу в AZ может хватить облачной панели на AZ/RU; реле или нативное мобильное приложение требуют другого shortlist. Локальные имена вроде SoftBilling, Smartbit или Club Timer сравнивайте по тому же сценарию.',
      },
      {
        q: 'Поддерживает ли Heselo реле света?',
        a: 'Нет. Это панель на планшете/компьютере; автоматизация ламп — отдельное оборудование. Если реле обязательно — смотрите класс BilliardPOS или Biliardo.kz.',
      },
      {
        q: 'Где более подробные сравнения?',
        a: 'Отдельные статьи есть по CueDesk, BilliardPOS, BCMS и Biliardo.kz. По часовым тарифам — статья про почасовые ставки бильярда.',
      },
    ],
    ctaTitle: 'Проверьте Heselo по своей строке в таблице',
    ctaBody: 'Напишите число столов — покажем бронь, тарифы и кассу на вашем сценарии.',
  },
}

export function billiardsSoftwareComparisonGuide(locale: Locale): GuideCopy {
  return {
    slug: 'billiards-software-comparison',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
