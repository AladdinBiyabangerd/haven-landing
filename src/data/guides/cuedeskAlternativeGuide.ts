import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-19'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'reservations', 'pos']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'CueDesk alternativi',
    h1: 'CueDesk alternativi — bilyard klubu paneli',
    seoTitle: 'CueDesk alternativi — bilyard klubu proqramı | Heselo',
    seoDescription:
      'CueDesk snuker və bilyard salonları üçün mobil idarəetmə və QR üzvlük təklif edir. Heselo isə AZ qiymətli bulud panelidir: masa, tarif, kassa.',
    keywords: [
      'CueDesk alternativ',
      'CueDesk alternativi',
      'bilyard klubu proqramı',
      'snuker klubu proqramı',
      'bilyard idarəetmə sistemi',
    ],
    intro:
      'CueDesk beynəlxalq bazarda snuker və bilyard klubları üçün tanınır: dəqiqəlik hesab, QR üzvlük və çoxfilial maliyyə izolyasiyası tez-tez qeyd olunur. Azərbaycanda klub sahibi çox vaxt başqa sual verir — açıq qiymət, AZ/RU dil və bulud panel planşetdə işləyirmi? Bu bələdçi CueDesk kateqoriyasını Heselo ilə dürüst müqayisə edir.',
    sections: [
      {
        id: 'when-heselo',
        title: 'Heselo nə vaxt uyğundur?',
        paragraphs: [
          'Masa və otaq vaxtı satırsınız, rezervasiya və canlı sessiya lazımdır, bar satışını eyni hesaba yazmaq istəyirsinizsə, Heselo uyğun gəlir. Qiymət bilyard üçün {billiards} {currency}/aydan açıq göstərilir; demo pulsuzdur.',
        ],
        bullets: [
          'Masa bronu və canlı oyun bir paneldə',
          'Gecə və həftəsonu tarif qaydaları',
          'Bar satışı sessiya hesabına',
          'AZ, EN, RU dilləri',
        ],
      },
      {
        id: 'when-cuedesk',
        title: 'CueDesk nə vaxt qala bilər?',
        paragraphs: [
          'Çoxmərkəzli şəbəkə, QR üzvlük check-in/check-out və iOS/Android idarəetmə paneli sizin üçün mütləqdirsə, CueDesk kateqoriyasını ayrıca qiymətləndirin. Heselo hazırda QR üzvlük check-in təklif etmir — bunu gizlətmirik.',
        ],
      },
      {
        id: 'comparison',
        title: 'CueDesk və Heselo — müqayisə',
        paragraphs: [
          'CueDesk açıq tək plan və 7 gün trial göstərir (cuedesk.app/pricing, 18.10.2026); məbləği onların saytında yoxlayın. Heselo qiyməti katalog API-dən gəlir.',
        ],
        table: {
          headers: ['Aspekt', 'CueDesk', 'Heselo'],
          rows: [
            ['Əsas fokus', 'Snuker/bilyard, mobil, QR üzvlük', 'Otaq/masa vaxtı + klub kassası'],
            ['Platforma', 'Web + iOS/Android', 'Web / bulud'],
            ['QR üzvlük', 'Tez-tez bəli', 'Xeyr'],
            ['Rezervasiya + canlı sessiya', 'Kateqoriyada var', 'Bəli'],
            ['Bar / sessiya hesabı', 'Bəli (tək plan)*', 'Bəli'],
            ['Qiymət', 'Açıq tək plan, 7 gün trial*', '{billiards} {currency}/aydan'],
            ['Dillər', 'Açıq deyil*', 'AZ, EN, RU'],
            ['Ən yaxşı uyğunluq', 'Çoxfilial + QR üzvlük', 'AZ/CIS klub, AZ/EN/RU + qarışıq məkan'],
          ],
        },
      },
      {
        id: 'switch',
        title: 'Keçid yoxlama siyahısı',
        paragraphs: ['CueDesk-dən və ya Excel-dən panellə keçməzdən əvvəl bir həftəsonu sınağı kifayət edir.'],
        bullets: [
          'Masa sayı, tipləri və tarifləri yazın',
          'QR üzvlük sizin üçün mütləqdirmi — qərar verin',
          'Demoda bron → oyun → pauza → bar → kassa axınını keçin',
          'İşçi səlahiyyətlərini yoxlayın',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo CueDesk-i tam əvəz edir?',
        a: 'Eyni kateqoriyaya yaxındır — hər ikisi bilyard/snuker klub idarəetməsinə aiddir. Amma QR üzvlük və native mobil app Heselo-da yoxdur. Bron, sessiya və kassa üçün Heselo kifayət edə bilər.',
      },
      {
        q: 'CueDesk qiymətini necə müqayisə edim?',
        a: 'CueDesk pricing səhifəsinə baxın (tək plan, 7 gün trial). Heselo bilyard planları katalog API / qiymətlər səhifəsindədir.',
      },
      {
        q: 'Heselo qiyməti?',
        a: 'Bilyard üçün {billiards} {currency}/aydan; Orta, Böyük və illik ödəniş qiymətlər səhifəsindədir.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında bilyard seçib masa sayını yazın — kart lazım deyil.',
      },
    ],
    ctaTitle: 'Bilyard axınınızı Heselo-da yoxlayın',
    ctaBody: 'Masa sayınızı yazın — rezervasiya, canlı oyun və kassanı birlikdə göstərək.',
  },
  en: {
    shortTitle: 'CueDesk alternative',
    h1: 'CueDesk alternative — billiards club panel',
    seoTitle: 'CueDesk Alternative — Billiards Club Software | Heselo',
    seoDescription:
      'CueDesk targets snooker and billiards clubs with mobile control and QR membership. Heselo is a cloud panel with public AZ pricing: tables, rates, cash.',
    keywords: [
      'CueDesk alternative',
      'billiards club software',
      'snooker club management',
      'billiards management software',
    ],
    intro:
      'CueDesk is known internationally for snooker and billiards clubs: per-minute billing, QR membership, and multi-site finance isolation are often mentioned. Club owners in Azerbaijan usually ask a different set of questions — public pricing, AZ/RU languages, and whether a cloud panel works on a tablet. This guide compares the CueDesk category with Heselo honestly.',
    sections: [
      {
        id: 'when-heselo',
        title: 'When does Heselo fit?',
        paragraphs: [
          'If you sell table and room time, need booking plus a live session, and want bar sales on the same bill, Heselo fits. Billiards pricing starts at {billiards} {currency}/month and is published; demos are free.',
        ],
        bullets: [
          'Table booking and live play in one panel',
          'Night and weekend rate rules',
          'Bar sales on the session bill',
          'AZ, EN, and RU',
        ],
      },
      {
        id: 'when-cuedesk',
        title: 'When should CueDesk stay?',
        paragraphs: [
          'If a multi-site network, QR membership check-in/out, and a native iOS/Android control app are mandatory, evaluate CueDesk on its own terms. Heselo does not offer QR membership check-in today — we say so openly.',
        ],
      },
      {
        id: 'comparison',
        title: 'CueDesk vs Heselo',
        paragraphs: [
          'CueDesk publishes a single plan with a 7-day trial (cuedesk.app/pricing, 18 Oct 2026); confirm the amount on their site. Heselo prices come from the catalog API.',
        ],
        table: {
          headers: ['Aspect', 'CueDesk', 'Heselo'],
          rows: [
            ['Main focus', 'Snooker/billiards, mobile, QR membership', 'Room/table time + club cash'],
            ['Platform', 'Web + iOS/Android', 'Web / cloud'],
            ['QR membership', 'Often yes', 'No'],
            ['Booking + live session', 'In category', 'Yes'],
            ['Bar on session bill', 'Yes (single plan)*', 'Yes'],
            ['Price', 'Public single plan, 7-day trial*', 'From {billiards} {currency}/month'],
            ['Languages', 'Not stated*', 'AZ, EN, RU'],
            ['Best fit', 'Multi-site + QR membership', 'AZ/CIS club, AZ/EN/RU + mixed venues'],
          ],
        },
      },
      {
        id: 'switch',
        title: 'Switch checklist',
        paragraphs: ['Before leaving CueDesk or Excel for a panel, one weekend pilot is enough.'],
        bullets: [
          'List table count, types, and rates',
          'Decide if QR membership is mandatory',
          'On the demo: book → play → pause → bar → cash',
          'Review staff permissions',
        ],
      },
    ],
    faq: [
      {
        q: 'Does Heselo fully replace CueDesk?',
        a: 'They sit in a similar category — both serve billiards/snooker club operations. Heselo does not have QR membership or a native mobile app. For booking, sessions, and cash, Heselo can be enough.',
      },
      {
        q: 'How do I compare CueDesk pricing?',
        a: 'Check CueDesk’s pricing page (single plan, 7-day trial). Heselo billiards plans are on our pricing page / catalog API.',
      },
      {
        q: 'What does Heselo cost?',
        a: 'Billiards from {billiards} {currency}/month; Medium, Large, and annual billing are on the pricing page.',
      },
      {
        q: 'How do we get a demo?',
        a: 'Pick billiards on the contact form and write your table count — no card required.',
      },
    ],
    ctaTitle: 'Try your billiards flow on Heselo',
    ctaBody: 'Tell us your table count — we will walk through booking, live play, and cash together.',
  },
  ru: {
    shortTitle: 'Альтернатива CueDesk',
    h1: 'Альтернатива CueDesk — панель для бильярдного клуба',
    seoTitle: 'Альтернатива CueDesk — программа для бильярда | Heselo',
    seoDescription:
      'CueDesk ориентирован на снукер и бильярд с мобильной панелью и QR-членством. Heselo — облачная панель с открытой ценой: столы, тарифы, касса.',
    keywords: [
      'альтернатива CueDesk',
      'программа для бильярдного клуба',
      'управление снукер клубом',
      'система управления бильярдом',
    ],
    intro:
      'CueDesk на международном рынке известен снукерными и бильярдными клубами: поминутный расчёт, QR-членство и финансовая изоляция филиалов часто упоминаются вместе. Владелец клуба в Азербайджане обычно спрашивает другое — открытая цена, языки AZ/RU и работает ли облачная панель на планшете. Ниже — честное сравнение категории CueDesk с Heselo.',
    sections: [
      {
        id: 'when-heselo',
        title: 'Когда подходит Heselo?',
        paragraphs: [
          'Если вы продаёте время стола и комнаты, нужны бронь и живой сеанс, а бар должен попадать в тот же счёт — Heselo уместен. Цена для бильярда от {billiards} {currency}/мес открыта; демо бесплатное.',
        ],
        bullets: [
          'Бронь стола и живая игра в одной панели',
          'Ночные и выходные тарифы',
          'Бар в счёт сеанса',
          'Языки AZ, EN, RU',
        ],
      },
      {
        id: 'when-cuedesk',
        title: 'Когда CueDesk может остаться?',
        paragraphs: [
          'Если сеть из нескольких центров, QR check-in/out для членов и нативное iOS/Android-приложение обязательны — оценивайте CueDesk отдельно. QR-членства в Heselo сейчас нет; мы это не скрываем.',
        ],
      },
      {
        id: 'comparison',
        title: 'CueDesk и Heselo — сравнение',
        paragraphs: [
          'CueDesk публикует один план и trial 7 дней (cuedesk.app/pricing, 18.10.2026); сумму смотрите у них. Цены Heselo — из каталожного API.',
        ],
        table: {
          headers: ['Аспект', 'CueDesk', 'Heselo'],
          rows: [
            ['Фокус', 'Снукер/бильярд, мобильное, QR', 'Время стола/комнаты + касса'],
            ['Платформа', 'Web + iOS/Android', 'Web / облако'],
            ['QR-членство', 'Часто да', 'Нет'],
            ['Бронь + живой сеанс', 'В категории', 'Да'],
            ['Бар в счёт сеанса', 'Да (один план)*', 'Да'],
            ['Цена', 'Открытый один план, trial 7 дней*', 'от {billiards} {currency}/мес'],
            ['Языки', 'Не указано*', 'AZ, EN, RU'],
            ['Лучше всего', 'Мультифилиал + QR', 'Клуб AZ/СНГ, AZ/EN/RU + смешанное заведение'],
          ],
        },
      },
      {
        id: 'switch',
        title: 'Чеклист перехода',
        paragraphs: ['Перед сменой CueDesk или Excel на панель хватит одного уик-энда пилота.'],
        bullets: [
          'Запишите число столов, типы и тарифы',
          'Решите, обязательно ли QR-членство',
          'На демо: бронь → игра → пауза → бар → касса',
          'Проверьте права сотрудников',
        ],
      },
    ],
    faq: [
      {
        q: 'Heselo полностью заменяет CueDesk?',
        a: 'Категории близки — оба про бильярд/снукер. У Heselo нет QR-членства и нативного мобильного приложения. Для брони, сеанса и кассы Heselo может хватить.',
      },
      {
        q: 'Как сравнить цену CueDesk?',
        a: 'Смотрите страницу цен CueDesk (один план, trial 7 дней). Планы Heselo — на странице цен / каталожный API.',
      },
      {
        q: 'Сколько стоит Heselo?',
        a: 'Бильярд от {billiards} {currency}/мес; «Стандарт», «Про» и год — на странице цен.',
      },
      {
        q: 'Как получить демо?',
        a: 'В форме связи выберите бильярд и укажите число столов — карта не нужна.',
      },
    ],
    ctaTitle: 'Проверьте поток бильярда на Heselo',
    ctaBody: 'Напишите число столов — вместе пройдём бронь, живую игру и кассу.',
  },
}

export function cuedeskAlternativeGuide(locale: Locale): GuideCopy {
  return {
    slug: 'cuedesk-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
