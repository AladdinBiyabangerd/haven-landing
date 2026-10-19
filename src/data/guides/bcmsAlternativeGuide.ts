import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-10-17'
const MODIFIED = '2026-10-19'
const relatedSolutions: GuideCopy['relatedSolutions'] = ['billiards', 'pos', 'reservations']

const guides: Record<
  Locale,
  Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>
> = {
  az: {
    shortTitle: 'BCMS alternativi',
    h1: 'BCMS alternativi — Windows vs bulud bilyard paneli',
    seoTitle: 'BCMS alternativi — bilyard klubu proqramı | Heselo',
    seoDescription:
      'BCMS Windows üçün bilyard klub idarəetmə proqramıdır. Heselo bulud paneldır: masa, rezerv, kassa — AZ/EN/RU, açıq qiymət.',
    keywords: [
      'BCMS alternativ',
      'BCMS bilyard',
      'Billiards Club Management System',
      'bilyard windows proqramı',
      'bilyard bulud proqramı',
    ],
    intro:
      'BCMS (Billiards Club Management System) Microsoft Store-da Windows 10/11 üçün sadə və funksional bilyard proqramı kimi təqdim olunur: işçilər, qiymətlər, masalar, menyu və gəlir hesabatları. Yerli kompüterə bağlı həll bəzi klublar üçün rahatdır. Digərləri isə brauzerdən, bir neçə cihazdan və dil dəstəyi ilə bulud istəyir. Bu bələdçi BCMS kateqoriyasını Heselo ilə müqayisə edir.',
    sections: [
      {
        id: 'desktop-vs-cloud',
        title: 'Desktop və bulud — əsas fərq',
        paragraphs: [
          'Windows proqramı adətən bir kompüterə və lokal ehtiyat nüsxəyə bağlıdır. Bulud panel isə planşet və noutbukdan eyni hesaba girişi verir; yeniləmələr serverdə gedir. Hansının düzgün olması klubunuzun növbə modelindən asılıdır.',
        ],
      },
      {
        id: 'when-bcms',
        title: 'BCMS nə vaxt qala bilər?',
        paragraphs: [
          'Tək Windows kompüter, oflayn iş və Store quraşdırması kifayətdirsə, BCMS kateqoriyasını saxlamaq məntiqli ola bilər. v1.3.0.0-dan sonra abunə tələb olunur (Microsoft Store) — yalnız «pulsuz yükləmə» demək deyil.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'Heselo nə vaxt seçilir?',
        paragraphs: [
          'Rezervasiya cədvəli, canlı sessiya, növbə kassası və AZ/RU dil lazımdırsa, Heselo uyğundur. Qiymət {billiards} {currency}/aydan açıqdır.',
        ],
        table: {
          headers: ['Aspekt', 'BCMS', 'Heselo'],
          rows: [
            ['Platforma', 'Windows 10/11', 'Web / bulud'],
            ['Quraşdırma', 'Desktop / Store', 'Brauzer hesabı'],
            ['Rezervasiya + canlı zal', 'Açıq siyahıda yox*', 'Bəli'],
            ['Dillər', 'Vendor-dan asılı', 'AZ, EN, RU'],
            ['Qiymət', 'Pulsuz yükləmə + abunə*', '{billiards} {currency}/aydan'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Heselo Windows proqramıdırmı?',
        a: 'Xeyr. Brauzerdə işləyən bulud paneldır — Windows, macOS və planşetdə açılır.',
      },
      {
        q: 'BCMS-dən keçmək üçün nə lazımdır?',
        a: 'Masa siyahısı, tariflər və bir həftəsonu demo kifayət edir. Oflayn mütləqdirsə, desktop həlli saxlayın.',
      },
      {
        q: 'Qiymət?',
        a: 'Bilyard {billiards} {currency}/aydan; detallar qiymətlər səhifəsindədir.',
      },
    ],
    ctaTitle: 'Bulud bilyard panelini yoxlayın',
    ctaBody: 'Masa sayınızı yazın — Windows-suz axını göstərək.',
  },
  en: {
    shortTitle: 'BCMS alternative',
    h1: 'BCMS alternative — Windows vs cloud billiards panel',
    seoTitle: 'BCMS Alternative — Billiards Club Software | Heselo',
    seoDescription:
      'BCMS is a Windows billiards club management app. Heselo is a cloud panel: tables, booking, cash — AZ/EN/RU with public pricing.',
    keywords: [
      'BCMS alternative',
      'Billiards Club Management System',
      'billiards Windows software',
      'billiards cloud software',
    ],
    intro:
      'BCMS (Billiards Club Management System) is listed on the Microsoft Store for Windows 10/11 as a simple functional billiards app: staff, prices, tables, menu, and revenue charts. A PC-bound tool suits some clubs. Others want a browser, several devices, and language support in the cloud. This guide compares the BCMS category with Heselo.',
    sections: [
      {
        id: 'desktop-vs-cloud',
        title: 'Desktop vs cloud — the real split',
        paragraphs: [
          'A Windows app usually ties to one PC and local backups. A cloud panel lets a tablet and a laptop share one account; updates ship on the server. Which is right depends on how your shifts work.',
        ],
      },
      {
        id: 'when-bcms',
        title: 'When should BCMS stay?',
        paragraphs: [
          'If one Windows PC, offline work, and a Store install are enough, keeping a BCMS-class tool can make sense. Since v1.3.0.0 a subscription is required (Microsoft Store) — free download alone is not the full cost.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'When do clubs pick Heselo?',
        paragraphs: [
          'If you need a booking schedule, live sessions, shift cash, and AZ/RU languages, Heselo fits. Pricing starts at {billiards} {currency}/month and is public.',
        ],
        table: {
          headers: ['Aspect', 'BCMS', 'Heselo'],
          rows: [
            ['Platform', 'Windows 10/11', 'Web / cloud'],
            ['Install', 'Desktop / Store', 'Browser account'],
            ['Booking + live floor', 'Not listed*', 'Yes'],
            ['Languages', 'Vendor-dependent', 'AZ, EN, RU'],
            ['Price', 'Free download + subscription*', 'From {billiards} {currency}/month'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Is Heselo a Windows app?',
        a: 'No. It is a cloud panel in the browser — it opens on Windows, macOS, and tablets.',
      },
      {
        q: 'What do we need to leave BCMS?',
        a: 'A table list, rates, and one weekend demo. If offline is mandatory, keep the desktop tool.',
      },
      {
        q: 'Price?',
        a: 'Billiards from {billiards} {currency}/month; details on the pricing page.',
      },
    ],
    ctaTitle: 'Try a cloud billiards panel',
    ctaBody: 'Share your table count — we will show the flow without a Windows install.',
  },
  ru: {
    shortTitle: 'Альтернатива BCMS',
    h1: 'Альтернатива BCMS — Windows или облачная панель для бильярда',
    seoTitle: 'Альтернатива BCMS — программа для бильярда | Heselo',
    seoDescription:
      'BCMS — программа для бильярда под Windows. Heselo — облачная панель: столы, бронь, касса — AZ/EN/RU и открытая цена.',
    keywords: [
      'альтернатива BCMS',
      'Billiards Club Management System',
      'программа бильярд Windows',
      'облачная программа для бильярда',
    ],
    intro:
      'BCMS (Billiards Club Management System) в Microsoft Store для Windows 10/11 описывают как простую функциональную программу для бильярда: персонал, цены, столы, меню и отчёты по выручке. Кому-то удобно ПО на одном ПК. Другим нужен браузер, несколько устройств и языки в облаке. Ниже — сравнение категории BCMS с Heselo.',
    sections: [
      {
        id: 'desktop-vs-cloud',
        title: 'Desktop и облако — в чём разница',
        paragraphs: [
          'Windows-программа обычно привязана к одному ПК и локальным бэкапам. Облачная панель даёт вход с планшета и ноутбука в один аккаунт; обновления идут на сервере. Что правильнее — зависит от модели смены.',
        ],
      },
      {
        id: 'when-bcms',
        title: 'Когда BCMS может остаться?',
        paragraphs: [
          'Если хватает одного Windows-ПК, офлайна и установки из Store, класс BCMS может быть уместен. С v1.3.0.0 нужна подписка (Microsoft Store) — «бесплатная загрузка» не равна полной стоимости.',
        ],
      },
      {
        id: 'when-heselo',
        title: 'Когда выбирают Heselo?',
        paragraphs: [
          'Если нужны расписание брони, живые сеансы, кассовая смена и языки AZ/RU — Heselo подходит. Цена от {billiards} {currency}/мес открыта.',
        ],
        table: {
          headers: ['Аспект', 'BCMS', 'Heselo'],
          rows: [
            ['Платформа', 'Windows 10/11', 'Web / облако'],
            ['Установка', 'Desktop / Store', 'Аккаунт в браузере'],
            ['Бронь + живой зал', 'Не указано*', 'Да'],
            ['Языки', 'Зависит от вендора', 'AZ, EN, RU'],
            ['Цена', 'Бесплатная загрузка + подписка*', 'от {billiards} {currency}/мес'],
          ],
        },
      },
    ],
    faq: [
      {
        q: 'Heselo — это программа для Windows?',
        a: 'Нет. Это облачная панель в браузере — открывается на Windows, macOS и планшетах.',
      },
      {
        q: 'Что нужно, чтобы уйти с BCMS?',
        a: 'Список столов, тарифы и демо на один уик-энд. Если офлайн обязателен — оставьте desktop.',
      },
      {
        q: 'Цена?',
        a: 'Бильярд от {billiards} {currency}/мес; детали на странице цен.',
      },
    ],
    ctaTitle: 'Проверьте облачную панель для бильярда',
    ctaBody: 'Напишите число столов — покажем поток без установки Windows-программы.',
  },
}

export function bcmsAlternativeGuide(locale: Locale): GuideCopy {
  return {
    slug: 'bcms-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...guides[locale],
  }
}
