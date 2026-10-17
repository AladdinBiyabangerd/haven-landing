import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-17'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'pos', 'reservations']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'Biliardo.kz alternativi',
    h1: 'Biliardo.kz alternativi — regional bilyard proqramı',
    seoTitle: 'Biliardo.kz alternativi — bilyard klubu proqramı | Heselo',
    seoDescription:
      'Biliardo.kz regional bilyard proqramıdır: gün/gecə tarif, masa taymeri, bar və çek. Heselo AZ mənşəli bulud paneldır — açıq qiymət və AZ/RU.',
    keywords: [
      'Biliardo.kz alternativ',
      'biliardo.kz',
      'bilyard proqramı Qazaxıstan',
      'bilyard klubu proqramı',
      'regional bilyard pos',
    ],
    intro:
      'Biliardo.kz regional səviyyədə bilyard salonları üçün proqram kimi tanınır: gün və gecə tarifləri, masa taymerləri, bar satışları və çek çapı tez-tez qeyd olunur. Bəzi materiallarda ilk bir neçə masa üçün pulsuz başlanğıc da yazılır — bunu birbaşa vendor-dan təsdiqləyin. Azərbaycan və CIS klubları üçün sual budur: regional həll, yoxsa AZ qiymətli bulud panel? Bu yazı dürüst müqayisədir.',
    sections: [
      {
        id: 'overlap',
        title: 'Ortaq funksiyalar',
        paragraphs: [
          'Hər iki kateqoriya masa vaxtı, tarif və bar satışına toxunur. Fərq çox vaxt dil, qiymət modeli, dəstək regionu və bulud təcrübəsindədir.',
        ],
      },
      {
        id: 'when-biliardo',
        title: 'Biliardo.kz nə vaxt qala bilər?',
        paragraphs: [
          'Klubunuz Qazaxıstan bazarında işləyir, vendor dəstəyi və yerli çek axını sizin üçün kritikdirsə, Biliardo.kz-i öz şərtləri ilə qiymətləndirin. Pulsuz masa limiti reklamı varsa, müqavilədə hədləri oxuyun.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'Heselo nə vaxt uyğundur?',
        paragraphs: [
          'Bakı və Azərbaycan klubları, AZ/RU panel, açıq aylıq qiymət və rezervasiya + canlı sessiya bir yerdə lazımdırsa, Heselo uyğundur. Bilyard {billiards} {currency}/aydan başlayır.',
        ],
        table: {
          headers: ['Aspekt', 'Biliardo.kz', 'Heselo'],
          rows: [
            ['Region fokus', 'Regional / KZ', 'AZ mənşəli, CIS uzaqdan'],
            ['Tariflər', 'Gün/gecə iddiası', 'Gün/gecə/həftəsonu qaydaları'],
            ['Rezervasiya + sessiya', 'Vendor funksiya dəsti', 'Bəli'],
            ['Qiymət', 'Vendor (bəzən pulsuz limit)', '{billiards} {currency}/aydan, açıq'],
            ['Dillər', 'Regional', 'AZ, EN, RU'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Heselo Qazaxıstanda işləyir?',
        a: 'Panel uzaqdan işləyir; əsas bazar Azərbaycandır. KZ üçün valyuta və dəstək gözləntilərini demoda danışın.',
      },
      {
        q: 'Biliardo.kz pulsuzdursa niyə Heselo?',
        a: 'Pulsuz limitlər adətən masa sayı və funksiya ilə məhdudlaşır. Böyüyən klubda rezervasiya, kassa və dil dəstəyi ayrıca dəyər ola bilər.',
      },
      {
        q: 'Demo?',
        a: 'Əlaqə formasında bilyard seçin — kart lazım deyil.',
      },
    ],
    ctaTitle: 'Regional alternativ kimi Heselo-nu yoxlayın',
    ctaBody: 'Masa sayınızı və ölkənizi yazın — uyğun axını göstərək.',
  },
  en: {
    shortTitle: 'Biliardo.kz alternative',
    h1: 'Biliardo.kz alternative — regional billiards software',
    seoTitle: 'Biliardo.kz Alternative — Billiards Club Software | Heselo',
    seoDescription:
      'Biliardo.kz is regional billiards software: day/night rates, table timers, bar and receipts. Heselo is an AZ-origin cloud panel with public pricing and AZ/RU.',
    keywords: [
      'Biliardo.kz alternative',
      'biliardo.kz',
      'billiards software Kazakhstan',
      'billiards club software',
    ],
    intro:
      'Biliardo.kz is known regionally for billiards halls: day and night rates, table timers, bar sales, and receipt printing are often mentioned. Some materials also mention a free start for the first few tables — confirm that with the vendor. For clubs in Azerbaijan and the CIS the question is regional tooling versus an AZ-priced cloud panel. This guide is an honest comparison.',
    sections: [
      {
        id: 'overlap',
        title: 'Shared ground',
        paragraphs: [
          'Both categories touch table time, rates, and bar sales. Differences usually sit in language, pricing model, support region, and cloud experience.',
        ],
      },
      {
        id: 'when-biliardo',
        title: 'When should Biliardo.kz stay?',
        paragraphs: [
          'If you operate in the Kazakhstan market and vendor support plus local receipt flows are critical, evaluate Biliardo.kz on its own terms. If a free table limit is advertised, read the contract caps.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'When does Heselo fit?',
        paragraphs: [
          'If you run a Baku or Azerbaijan club and need AZ/RU UI, public monthly pricing, and booking plus a live session together, Heselo fits. Billiards starts at {billiards} {currency}/month.',
        ],
        table: {
          headers: ['Aspect', 'Biliardo.kz', 'Heselo'],
          rows: [
            ['Regional focus', 'Regional / KZ', 'AZ-origin, CIS remote'],
            ['Rates', 'Day/night claim', 'Day/night/weekend rules'],
            ['Booking + session', 'Vendor feature set', 'Yes'],
            ['Price', 'Vendor (sometimes free cap)', 'From {billiards} {currency}/month, public'],
            ['Languages', 'Regional', 'AZ, EN, RU'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Does Heselo work in Kazakhstan?',
        a: 'The panel works remotely; the primary market is Azerbaijan. Discuss currency and support expectations on the demo.',
      },
      {
        q: 'If Biliardo.kz is free, why Heselo?',
        a: 'Free tiers usually cap tables and features. Growing clubs may value booking, cash, and language support separately.',
      },
      {
        q: 'Demo?',
        a: 'Choose billiards on the contact form — no card required.',
      },
    ],
    ctaTitle: 'Try Heselo as a regional alternative',
    ctaBody: 'Tell us your table count and country — we will show a fitting flow.',
  },
  ru: {
    shortTitle: 'Альтернатива Biliardo.kz',
    h1: 'Альтернатива Biliardo.kz — региональная программа для бильярда',
    seoTitle: 'Альтернатива Biliardo.kz — программа для бильярда | Heselo',
    seoDescription:
      'Biliardo.kz — региональная программа для бильярда: день/ночь, таймеры, бар и чек. Heselo — облачная панель из Азербайджана с открытой ценой и AZ/RU.',
    keywords: [
      'альтернатива Biliardo.kz',
      'biliardo.kz',
      'программа для бильярда Казахстан',
      'программа для бильярдного клуба',
    ],
    intro:
      'Biliardo.kz известен в регионе как программа для бильярдных залов: дневные и ночные тарифы, таймеры столов, бар и печать чеков часто упоминаются вместе. В части материалов пишут про бесплатный старт на первые столы — это нужно подтверждать у вендора. Для клубов Азербайджана и СНГ вопрос другой: региональное ПО или облачная панель с открытой ценой из AZ. Ниже — честное сравнение.',
    sections: [
      {
        id: 'overlap',
        title: 'Общее',
        paragraphs: [
          'Обе категории касаются времени стола, тарифов и барных продаж. Разница чаще в языке, модели цены, регионе поддержки и облачном опыте.',
        ],
      },
      {
        id: 'when-biliardo',
        title: 'Когда Biliardo.kz может остаться?',
        paragraphs: [
          'Если клуб в казахстанском рынке, а поддержка вендора и локальный чековый поток критичны — оценивайте Biliardo.kz на их условиях. Если рекламируют бесплатный лимит столов, читайте ограничения в договоре.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'Когда подходит Heselo?',
        paragraphs: [
          'Если клуб в Баку или Азербайджане и нужны AZ/RU, открытая месячная цена, бронь и живой сеанс вместе — Heselo уместен. Бильярд от {billiards} {currency}/мес.',
        ],
        table: {
          headers: ['Аспект', 'Biliardo.kz', 'Heselo'],
          rows: [
            ['Регион', 'Региональный / KZ', 'AZ, удалённо по СНГ'],
            ['Тарифы', 'День/ночь (заявка)', 'День/ночь/выходные'],
            ['Бронь + сеанс', 'Набор вендора', 'Да'],
            ['Цена', 'У вендора (иногда free cap)', 'от {billiards} {currency}/мес, открыто'],
            ['Языки', 'Региональные', 'AZ, EN, RU'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Heselo работает в Казахстане?',
        a: 'Панель работает удалённо; основной рынок — Азербайджан. Валюту и ожидания по поддержке обсудите на демо.',
      },
      {
        q: 'Если Biliardo.kz бесплатный, зачем Heselo?',
        a: 'Бесплатные лимиты обычно ограничивают столы и функции. Растущему клубу отдельно важны бронь, касса и языки.',
      },
      {
        q: 'Демо?',
        a: 'В форме выберите бильярд — карта не нужна.',
      },
    ],
    ctaTitle: 'Проверьте Heselo как региональную альтернативу',
    ctaBody: 'Напишите число столов и страну — покажем подходящий поток.',
  },
}

export function biliardoKzAlternativeGuide(locale: Locale): GuideCopy {
  return {
    slug: 'biliardo-kz-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
