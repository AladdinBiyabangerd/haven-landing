import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'

type ComparisonKind = 'restaurant' | 'timer' | 'pc-club' | 'appointments' | 'club-pos'

type Copy = {
  shortTitle: string
  h1: string
  seoTitle: string
  seoDescription: string
  intro: string
  competitorFit: string
  heseloFit: string
  priceAngle: string
  switchNote: string
}

type CatalogEntry = {
  slug: string
  name: string
  kind: ComparisonKind
  relatedSolutions: GuideCopy['relatedSolutions']
  copy: Record<Locale, Copy>
}

const catalog: CatalogEntry[] = [
  {
    slug: 'iiko-alternative-clubs',
    name: 'iiko',
    kind: 'restaurant',
    relatedSolutions: ['gaming', 'karaoke', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'Klublar üçün iiko alternativi',
        h1: 'Otaqlı əyləncə klubları üçün iiko alternativi',
        seoTitle: 'Klublar üçün iiko alternativi — Heselo',
        seoDescription:
          'iiko və Heselonu oyun, karaoke və bilyard məkanları üçün dürüst müqayisə edin. Vaxt sessiyası, rezervasiya, kassa və qiymət fərqlərini öyrənin.',
        intro:
          'iiko restoran idarəetməsində, mətbəx prosesində və çatdırılmada güclü sistemdir. Məkanınızın əsas xidməti otaq və ya masa vaxtıdırsa, Heselo həmin əməliyyat modelinə daha yaxın alternativ ola bilər.',
        competitorFit:
          'Restoran zalı, mətbəx ekranı, reseptura, QR menyu və çatdırılma bir prosesdə işləməlidirsə, iiko daha uyğun seçimdir. Heselo tam restoran mətbəx POS-unu əvəz etmək üçün nəzərdə tutulmayıb.',
        heseloFit:
          'PlayStation, karaoke otağı, bilyard masası, antikafe və launj vaxtla satılırsa, Heselo rezervasiyanı canlı sessiya, kassa növbəsi və stokla birləşdirir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır və əsasən klub əməliyyatlarına fokuslanır. iiko üzrə yekun xərc seçilən modullar, inteqrasiya və tərəfdaş şərtlərindən asılı olduğuna görə aktual təklifi ayrıca almaq lazımdır.',
        switchNote:
          'Əvvəlcə otaq, konsol və masaları yaradın, sonra tarif və işçi səlahiyyətlərini qurun. Menyu və mətbəx prosesiniz varsa, keçiddən əvvəl onların ayrıca sistemdə qalacağını planlaşdırın.',
      },
      en: {
        shortTitle: 'iiko alternative for clubs',
        h1: 'An iiko alternative for room-based entertainment clubs',
        seoTitle: 'iiko Alternative for Clubs — Heselo',
        seoDescription:
          'Compare iiko and Heselo honestly for gaming, karaoke and billiards venues. Review timed sessions, bookings, cash shifts and pricing.',
        intro:
          'iiko is strong in restaurant operations, kitchen workflows and delivery. If your core product is room or table time, Heselo may be the closer operational alternative.',
        competitorFit:
          'Choose iiko when dining-room service, kitchen screens, recipes, QR menus and delivery must work as one restaurant flow. Heselo is not intended to replace a full restaurant kitchen POS.',
        heseloFit:
          'When PlayStation stations, karaoke rooms, billiards tables, anticafe seats or lounges are sold by time, Heselo connects bookings with live sessions, cash shifts and stock.',
        priceAngle:
          'Heselo starts from 25 AZN per month and focuses on club operations. iiko pricing depends on modules, integrations and partner terms, so request a current quote before comparing totals.',
        switchNote:
          'Create rooms, consoles and tables first, then configure rates and staff permissions. If you run a kitchen or menu flow, decide which restaurant system will continue to handle it before switching.',
      },
      ru: {
        shortTitle: 'Альтернатива iiko для клубов',
        h1: 'Альтернатива iiko для клубов с комнатами и почасовой оплатой',
        seoTitle: 'Альтернатива iiko для клубов — Heselo',
        seoDescription:
          'Честное сравнение iiko и Heselo для игровых, караоке- и бильярдных клубов: сеансы, бронирования, кассовые смены и стоимость.',
        intro:
          'iiko сильна в ресторанном учёте, кухонных процессах и доставке. Если основной продукт заведения — время комнаты или стола, Heselo может точнее соответствовать такой модели работы.',
        competitorFit:
          'iiko лучше подходит, когда зал, кухонные экраны, техкарты, QR-меню и доставка должны работать в едином ресторанном контуре. Heselo не заменяет полноценную ресторанную POS-систему для кухни.',
        heseloFit:
          'Если время PlayStation, караоке-комнат, бильярдных столов, антикафе или лаунж-комнат продаётся по часам, Heselo связывает бронирование с живым сеансом, кассовой сменой и складом.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц и сосредоточена на клубных операциях. Цена iiko зависит от модулей, интеграций и условий партнёра, поэтому для точного сравнения нужен актуальный расчёт.',
        switchNote:
          'Сначала создайте комнаты, консоли и столы, затем настройте тарифы и права сотрудников. Если есть кухня или меню, заранее определите, какая ресторанная система продолжит обслуживать этот контур.',
      },
    },
  },
  {
    slug: 'clopos-alternative',
    name: 'Clopos',
    kind: 'restaurant',
    relatedSolutions: ['karaoke', 'lounge', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'Clopos alternativi',
        h1: 'Vaxtla işləyən klublar üçün Clopos alternativi',
        seoTitle: 'Clopos alternativi — klub üçün Heselo',
        seoDescription:
          'Clopos və Heselo müqayisəsi: restoran POS-u ilə otaq sessiyası idarəetməsinin fərqi, rezervasiya, kassa və stok imkanları.',
        intro:
          'Clopos restoran və kafelərdə sifariş, menyu və mətbəx proseslərinə uyğun qurulub. Karaoke, oyun və launj məkanında əsas hesab vaxtdan yaranırsa, Heselo daha məqsədli seçimdir.',
        competitorFit:
          'Ofisiant sifarişi, mətbəx, QR menyu və çatdırılma gündəlik işin mərkəzindədirsə, Clopos-un restoran yönümlü prosesi üstünlük verir. Heselo bu funksiyaların tam əvəzi deyil.',
        heseloFit:
          'Heselo otaq, masa və stansiya rezervasiyasını başlat-dayandır sessiyası, tarif, kassanın açılıb-bağlanması və məhsul qalığı ilə eyni iş prosesinə gətirir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. Clopos-un aktual paket və avadanlıq xərclərini rəsmi təkliflə dəqiqləşdirib, yalnız istifadə edəcəyiniz funksiyalar üzrə müqayisə edin.',
        switchNote:
          'Bir həftəlik rezervasiya və tarif nümunəsini Heselo demosunda sınaqdan keçirin. Restoran sifarişlərini köçürməyin; yalnız klubun otaq, masa və stansiyalarını, satış məhsullarını mərhələli qurun.',
      },
      en: {
        shortTitle: 'Clopos alternative',
        h1: 'A Clopos alternative for time-based clubs',
        seoTitle: 'Clopos Alternative for Clubs — Heselo',
        seoDescription:
          'Compare Clopos and Heselo: restaurant POS versus room-session management, with bookings, cash shifts and inventory.',
        intro:
          'Clopos is designed around restaurant and café ordering, menus and kitchen workflows. If time drives the bill in a karaoke, gaming or lounge venue, Heselo is a more focused option.',
        competitorFit:
          'Clopos fits when waiter orders, kitchen operations, QR menus and delivery sit at the centre of daily work. Heselo does not claim to replace that full restaurant workflow.',
        heseloFit:
          'Heselo brings room, table and station bookings, start-stop sessions, rates, cash-shift opening and closing, and product stock into one club workflow.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Confirm current Clopos package and hardware costs through an official quote, then compare only the capabilities you will actually use.',
        switchNote:
          'Test a representative week of bookings and rates in the Heselo demo. Keep restaurant orders in the appropriate system and migrate club rooms, tables, stations and sale items in stages.',
      },
      ru: {
        shortTitle: 'Альтернатива Clopos',
        h1: 'Альтернатива Clopos для клубов с почасовой оплатой',
        seoTitle: 'Альтернатива Clopos для клубов — Heselo',
        seoDescription:
          'Сравнение Clopos и Heselo: ресторанная POS-система или управление комнатами и сеансами, бронирования, касса и склад.',
        intro:
          'Clopos рассчитана на заказы, меню и кухонные процессы ресторанов и кафе. Если счёт в караоке, игровом клубе или лаунже зависит прежде всего от времени, Heselo предлагает более узкий и подходящий сценарий.',
        competitorFit:
          'Clopos уместнее, когда основа работы — заказы официантов, кухня, QR-меню и доставка. Heselo не позиционируется как полноценная замена этому ресторанному контуру.',
        heseloFit:
          'Heselo объединяет бронирование комнат, столов и станций, запуск сеанса, тарифы, открытие и закрытие кассовой смены и остатки товаров.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Уточните актуальную стоимость пакета и оборудования Clopos по официальному предложению и сравнивайте только нужные вам функции.',
        switchNote:
          'Проверьте в демо Heselo типичную неделю бронирований и тарифов. Ресторанные заказы оставьте в профильной системе, а клубные комнаты, столы, станции и товары переносите поэтапно.',
      },
    },
  },
  {
    slug: 'dine-alternative',
    name: 'Dine',
    kind: 'restaurant',
    relatedSolutions: ['billiards', 'karaoke', 'reservations', 'pos'],
    copy: {
      az: {
        shortTitle: 'Dine alternativi',
        h1: 'Əyləncə məkanları üçün Dine alternativi',
        seoTitle: 'Dine alternativi — Heselo klub sistemi',
        seoDescription:
          'Dine və Heselo arasında seçim: restoran sifarişi və mətbəx prosesinə qarşı otaq rezervasiyası, vaxt sessiyası və kassa idarəetməsi.',
        intro:
          'Dine restoran sifarişləri, masa xidməti və rəqəmsal menyu üçün məntiqli seçim ola bilər. Gəlirin əsas hissəsi otaq, konsol və ya bilyard vaxtından gəlirsə, Heselo fərqli ehtiyacı həll edir.',
        competitorFit:
          'Masa sifarişi, menyu, mətbəx və çatdırılma prosesləri əsasdırsa, Dine kimi restoran POS-u daha uyğundur. Heselo restoranın tam mətbəx idarəetməsini əvəz etmir.',
        heseloFit:
          'Heselo boş vaxtı rezervasiya edir, qonaq gələndə canlı sessiyanı başladır və həmin sessiyanı kassa növbəsi ilə stok satışına bağlayır.',
        priceAngle:
          'Heselo paketləri 25 AZN/aydan başlayır. Dine qiymətini modul, terminal və xidmət tərkibi ilə birlikdə öyrənmək, sonra ümumi aylıq xərci müqayisə etmək daha düzgündür.',
        switchNote:
          'Ən çox istifadə olunan otaqları və tarifləri demo mühitində qurun. Mətbəx funksiyaları vacibdirsə, onları saxlamaq üçün paralel restoran həllini əvvəlcədən müəyyənləşdirin.',
      },
      en: {
        shortTitle: 'Dine alternative',
        h1: 'A Dine alternative for entertainment venues',
        seoTitle: 'Dine Alternative — Heselo Club Software',
        seoDescription:
          'Choose between Dine and Heselo: restaurant ordering and kitchen workflows versus room bookings, timed sessions and cash management.',
        intro:
          'Dine can be a sensible choice for restaurant ordering, table service and digital menus. When most revenue comes from room, console or billiards time, Heselo addresses a different need.',
        competitorFit:
          'A restaurant POS such as Dine fits when table orders, menus, kitchen work and delivery are central. Heselo does not replace complete restaurant kitchen management.',
        heseloFit:
          'Heselo reserves available time, starts a live session when the guest arrives, and links that session to a cash shift and stock sales.',
        priceAngle:
          'Heselo plans start from 25 AZN per month. Ask for Dine pricing with modules, terminals and service included, then compare the complete monthly cost.',
        switchNote:
          'Set up your most-used rooms and rates in the demo. If kitchen capabilities are essential, identify the restaurant solution that will retain them before moving club operations.',
      },
      ru: {
        shortTitle: 'Альтернатива Dine',
        h1: 'Альтернатива Dine для развлекательных заведений',
        seoTitle: 'Альтернатива Dine — клубная система Heselo',
        seoDescription:
          'Dine или Heselo: ресторанные заказы и кухня либо бронирование комнат, почасовые сеансы и управление кассой.',
        intro:
          'Dine может быть разумным выбором для ресторанных заказов, обслуживания столиков и цифрового меню. Если основную выручку приносит время комнаты, консоли или бильярда, Heselo решает другую задачу.',
        competitorFit:
          'Ресторанная POS-система вроде Dine предпочтительнее, когда важны заказы за столом, меню, кухня и доставка. Heselo не заменяет полноценное управление ресторанной кухней.',
        heseloFit:
          'Heselo резервирует свободное время, запускает живой сеанс по приходу гостя и связывает его с кассовой сменой и продажей товаров со склада.',
        priceAngle:
          'Тарифы Heselo начинаются от 25 AZN в месяц. Запросите стоимость Dine с учётом модулей, терминалов и обслуживания, а затем сравните полный ежемесячный расход.',
        switchNote:
          'Настройте в демо самые востребованные комнаты и тарифы. Если кухня критична, заранее выберите ресторанную систему, в которой останутся эти процессы.',
      },
    },
  },
  {
    slug: 'restomas-alternative',
    name: 'Restomas',
    kind: 'restaurant',
    relatedSolutions: ['lounge', 'billiards', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'Restomas alternativi',
        h1: 'Klub və launj məkanları üçün Restomas alternativi',
        seoTitle: 'Restomas alternativi — Heselo',
        seoDescription:
          'Restomas və Heselonu klub, karaoke, bilyard və launj üçün müqayisə edin. Vaxt hesabı, rezervasiya, kassa növbəsi və stok.',
        intro:
          'Restomas restoran və kafe satışını, menyunu və xidmət prosesini idarə etmək üçün uyğun ola bilər. Otaq və masa vaxtı ayrıca rezervasiya və canlı sessiya tələb edirsə, Heselo daha birbaşa yanaşır.',
        competitorFit:
          'Mətbəx sifarişləri, masa xidməti, çek və restoran hesabatları əsas ehtiyacdırsa, Restomas tərəfi daha uyğun ola bilər. Heselo tam restoran POS-u deyil.',
        heseloFit:
          'Heselo vaxtla satılan otaq və masaların təqvimini, aktiv sessiyaları, kassa növbəsini və inventar satışını bir paneldə izləmək istəyən klublar üçündür.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. Restomas üzrə cari lisenziya, quraşdırma və avadanlıq şərtlərini ayrıca soruşun; müqayisəyə birdəfəlik xərcləri də daxil edin.',
        switchNote:
          'Otaq və masa siyahısını və tarifləri əvvəlcədən təmizləyin, sonra demo üzərindən tipik iş gününü sınaqdan keçirin. Restoran hissəsi qalırsa, iki sistemin məsuliyyətini aydın bölün.',
      },
      en: {
        shortTitle: 'Restomas alternative',
        h1: 'A Restomas alternative for clubs and lounges',
        seoTitle: 'Restomas Alternative for Clubs — Heselo',
        seoDescription:
          'Compare Restomas and Heselo for clubs, karaoke, billiards and lounges: time billing, bookings, cash shifts and inventory.',
        intro:
          'Restomas may suit restaurant and café sales, menus and service workflows. When rooms and tables need their own booking and live-session flow, Heselo takes a more direct approach.',
        competitorFit:
          'Restomas may fit better when kitchen orders, table service, receipts and restaurant reporting are the main requirements. Heselo is not a full restaurant POS.',
        heseloFit:
          'Heselo is for clubs that want calendars for rooms and tables sold by time, active sessions, cash shifts and inventory sales visible in one panel.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Ask separately about current Restomas licensing, setup and hardware terms, including one-off costs in the comparison.',
        switchNote:
          'Clean up the room and table list and rates first, then test a normal business day in the demo. If restaurant operations remain, define clearly which system owns each workflow.',
      },
      ru: {
        shortTitle: 'Альтернатива Restomas',
        h1: 'Альтернатива Restomas для клубов и лаунж-заведений',
        seoTitle: 'Альтернатива Restomas для клубов — Heselo',
        seoDescription:
          'Сравните Restomas и Heselo для клубов, караоке, бильярда и лаунжей: учёт времени, бронь, кассовые смены и склад.',
        intro:
          'Restomas может подойти для продаж, меню и обслуживания в ресторане или кафе. Когда комнатам и столам нужны отдельные бронирования и живые сеансы, Heselo предлагает более прямой сценарий.',
        competitorFit:
          'Restomas может быть уместнее, если главные задачи — кухонные заказы, обслуживание столиков, чеки и ресторанная отчётность. Heselo не является полноценной ресторанной POS-системой.',
        heseloFit:
          'Heselo подходит клубам, которым нужен единый экран для календаря комнат и столов, активных сеансов, кассовых смен и складских продаж.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Отдельно уточните актуальные условия лицензии, внедрения и оборудования Restomas и учтите разовые расходы.',
        switchNote:
          'Сначала приведите в порядок список комнат и столов и тарифы, затем проверьте обычный рабочий день в демо. Если ресторанный контур остаётся, чётко разделите ответственность двух систем.',
      },
    },
  },
  {
    slug: 'minupos-alternative',
    name: 'MinuPOS',
    kind: 'restaurant',
    relatedSolutions: ['gaming', 'billiards', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'MinuPOS alternativi',
        h1: 'Klublar üçün daha sərfəli MinuPOS alternativi',
        seoTitle: 'MinuPOS alternativi — 25 AZN-dan Heselo',
        seoDescription:
          'MinuPOS və Heselo qiymət və funksiya müqayisəsi. 99–799 AZN paketlərə qarşı klublar üçün 25 AZN/aydan otaq və sessiya idarəetməsi.',
        intro:
          'MinuPOS restoran və kafe satışına yönəlmiş paketlər təklif edir və açıq qiymətlər çox vaxt 99–799 AZN aralığında görünür. Klubunuz üçün mətbəx POS-u yox, vaxt sessiyası lazımdırsa, 25 AZN/aydan başlayan Heselo daha sərfəli ola bilər.',
        competitorFit:
          'Restoran sifarişi, mətbəx, menyu və uyğun avadanlıq paketi birlikdə lazımdırsa, MinuPOS-un ixtisaslaşmış təklifi daha məntiqlidir. Heselo tam restoran mətbəx həlli deyil.',
        heseloFit:
          'Heselo oyun, karaoke, bilyard, antikafe və launj məkanlarında rezervasiya, canlı vaxt hesabı, kassa növbəsi və stoku birləşdirir.',
        priceAngle:
          'MinuPOS paketləri tez-tez 99–799 AZN kimi təqdim olunur, Heselo isə 25 AZN/aydan başlayır. Kampaniya və paket tərkibi dəyişə bildiyi üçün yekun qərardan əvvəl hər iki aktual təklifi yoxlayın.',
        switchNote:
          'Əvvəlcə istifadə etmədiyiniz restoran modullarını müəyyən edin. Heselo demosunda otaq və masaları, tarifləri və kassa ssenarisini quraraq real aylıq qənaəti funksional fərqlərlə birlikdə ölçün.',
      },
      en: {
        shortTitle: 'MinuPOS alternative',
        h1: 'A more affordable MinuPOS alternative for clubs',
        seoTitle: 'MinuPOS Alternative — Heselo from 25 AZN',
        seoDescription:
          'Compare MinuPOS and Heselo on price and fit: commonly listed 99–799 AZN packages versus club session management from 25 AZN/month.',
        intro:
          'MinuPOS offers packages aimed at restaurant and café sales, with public pricing often shown around 99–799 AZN. If your club needs timed sessions rather than a kitchen POS, Heselo from 25 AZN per month may cost less.',
        competitorFit:
          'MinuPOS makes more sense when restaurant ordering, a kitchen, menus and a compatible hardware package are needed together. Heselo is not a complete restaurant kitchen solution.',
        heseloFit:
          'Heselo combines bookings, live time billing, cash shifts and stock for gaming, karaoke, billiards, anticafe and lounge venues.',
        priceAngle:
          'MinuPOS packages are often presented at 99–799 AZN, while Heselo starts from 25 AZN per month. Promotions and package contents can change, so verify both current offers before deciding.',
        switchNote:
          'Identify restaurant modules you do not use first. Set up your rooms, tables, rates and cash scenario in the Heselo demo, then assess real savings alongside functional differences.',
      },
      ru: {
        shortTitle: 'Альтернатива MinuPOS',
        h1: 'Более доступная альтернатива MinuPOS для клубов',
        seoTitle: 'Альтернатива MinuPOS — Heselo от 25 AZN',
        seoDescription:
          'Сравнение цен и возможностей MinuPOS и Heselo: пакеты примерно за 99–799 AZN и управление клубными сеансами от 25 AZN в месяц.',
        intro:
          'MinuPOS предлагает пакеты для продаж в ресторанах и кафе; открытые цены часто находятся в диапазоне 99–799 AZN. Если клубу нужны почасовые сеансы, а не кухонная POS-система, Heselo от 25 AZN в месяц может быть выгоднее.',
        competitorFit:
          'MinuPOS логичнее, когда ресторанные заказы, кухня, меню и совместимое оборудование нужны единым комплектом. Heselo не является полноценным решением для ресторанной кухни.',
        heseloFit:
          'Heselo объединяет бронирования, живой учёт времени, кассовые смены и склад для игровых, караоке-, бильярдных, антикафе- и лаунж-заведений.',
        priceAngle:
          'Пакеты MinuPOS часто предлагаются за 99–799 AZN, а Heselo начинается от 25 AZN в месяц. Акции и состав пакетов меняются, поэтому перед решением проверьте обе актуальные цены.',
        switchNote:
          'Сначала определите ресторанные модули, которыми вы не пользуетесь. В демо Heselo настройте комнаты и столы, тарифы и кассовый сценарий, затем оцените экономию вместе с разницей функций.',
      },
    },
  },
  {
    slug: 'robotpos-alternative',
    name: 'robotPOS',
    kind: 'restaurant',
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    copy: {
      az: {
        shortTitle: 'robotPOS alternativi',
        h1: 'Otaq və vaxt biznesi üçün robotPOS alternativi',
        seoTitle: 'robotPOS alternativi — Heselo',
        seoDescription:
          'robotPOS və Heselo müqayisəsi: restoran avtomatlaşdırması yoxsa karaoke, oyun, bilyard və launj üçün rezervasiya və sessiya sistemi.',
        intro:
          'robotPOS restoran və kafe avtomatlaşdırmasına uyğun seçimdir. Biznesinizdə məhsul sifarişindən çox otaq və masa vaxtını izləmək vacibdirsə, Heselo alternativ kimi nəzərdən keçirilə bilər.',
        competitorFit:
          'Mətbəxə sifariş ötürülməsi, menyu, ofisiant işi və restoran hesabatı əsasdırsa, robotPOS daha doğru kateqoriyadadır. Heselo tam restoran POS funksiyalarını əvəz etmir.',
        heseloFit:
          'Heselo rezervasiyadan canlı sessiyaya keçidi, vaxt tarifini, növbə kassasını və sessiyaya əlavə olunan stok məhsullarını klub iş qaydası ilə idarə edir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. robotPOS üçün lisenziya, quraşdırma, dəstək və avadanlıq daxil olmaqla aktual ümumi təklif istəyin.',
        switchNote:
          'Tipik rezervasiya, uzadılma və sessiya bağlanışı ssenarisini demoda yoxlayın. Mətbəx əməliyyatları varsa, onların hansı sistemdə qalacağını keçiddən əvvəl sənədləşdirin.',
      },
      en: {
        shortTitle: 'robotPOS alternative',
        h1: 'A robotPOS alternative for room and time businesses',
        seoTitle: 'robotPOS Alternative for Clubs — Heselo',
        seoDescription:
          'Compare robotPOS and Heselo: restaurant automation versus bookings and timed sessions for karaoke, gaming, billiards and lounges.',
        intro:
          'robotPOS belongs in restaurant and café automation. If tracking room and table time matters more than product ordering, Heselo is worth considering as an alternative.',
        competitorFit:
          'robotPOS sits in the right category when kitchen routing, menus, waiter work and restaurant reporting are primary. Heselo does not replace the complete restaurant POS feature set.',
        heseloFit:
          'Heselo manages the path from booking to live session, timed rates, shift cash and stock items added to a session using club-specific workflows.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Request a current total robotPOS quote that includes licensing, setup, support and hardware.',
        switchNote:
          'Test a normal booking, extension and session-closing scenario in the demo. If kitchen operations exist, document which system will retain them before switching.',
      },
      ru: {
        shortTitle: 'Альтернатива robotPOS',
        h1: 'Альтернатива robotPOS для бизнеса на комнатах и времени',
        seoTitle: 'Альтернатива robotPOS для клубов — Heselo',
        seoDescription:
          'Сравните robotPOS и Heselo: ресторанная автоматизация или бронирования и сеансы для караоке, игровых, бильярдных и лаунж-заведений.',
        intro:
          'robotPOS относится к автоматизации ресторанов и кафе. Если важнее учитывать время комнат и столов, а не товарные заказы, Heselo стоит рассмотреть как альтернативу.',
        competitorFit:
          'robotPOS находится в своей сильной категории, когда главные задачи — передача заказов на кухню, меню, работа официантов и ресторанная отчётность. Heselo не заменяет полный набор ресторанной POS-системы.',
        heseloFit:
          'Heselo ведёт гостя от бронирования к живому сеансу, применяет тариф времени и связывает кассовую смену и товары со счётом клуба.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Для robotPOS запросите актуальный полный расчёт с лицензией, внедрением, поддержкой и оборудованием.',
        switchNote:
          'Проверьте в демо обычную бронь, продление и закрытие сеанса. Если есть кухня, до перехода зафиксируйте, в какой системе останутся её процессы.',
      },
    },
  },
  {
    slug: 'affordable-club-pos',
    name: 'club POS',
    kind: 'club-pos',
    relatedSolutions: ['gaming', 'karaoke', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'Sərfəli klub POS sistemi',
        h1: 'Sərfəli klub POS alternativi necə seçilir?',
        seoTitle: 'Sərfəli klub POS alternativi — Heselo',
        seoDescription:
          'Oyun, karaoke, bilyard, antikafe və launj üçün sərfəli POS seçimi: vaxt sessiyası, rezervasiya, kassa və stok 25 AZN/aydan.',
        intro:
          'Ən ucuz POS həmişə ən sərfəli seçim deyil: klub vaxtını ayrıca cədvəldə izləmək əlavə iş yarada bilər. Heselo 25 AZN/aydan klub rezervasiyası, canlı sessiya, kassa növbəsi və stoku birləşdirir.',
        competitorFit:
          'Əsas fəaliyyət restoran sifarişi, mətbəx, QR menyu və çatdırılmadırsa, münasib qiymətli restoran POS-u seçmək daha düzgündür. Heselo tam mətbəx POS-una alternativ deyil.',
        heseloFit:
          'Otaq, konsol və masa vaxtı satırsınızsa, bir məqsədli sistem işçilərin rezervasiya ilə faktiki sessiyanı qarışdırmasının qarşısını alır.',
        priceAngle:
          'Aylıq qiymətlə yanaşı quraşdırma, avadanlıq, əlavə terminal, dəstək və istifadə olunmayan modulları hesablayın. Heselonun başlanğıc qiyməti 25 AZN/aydır.',
        switchNote:
          'Namizədləri eyni ssenari ilə sınayın: rezervasiya yaradın, sessiyanı başladın, məhsul əlavə edin və kassa növbəsini bağlayın. Sonra demo nəticəsinə əsasən seçim edin.',
      },
      en: {
        shortTitle: 'Affordable club POS',
        h1: 'How to choose an affordable club POS alternative',
        seoTitle: 'Affordable Club POS Alternative — Heselo',
        seoDescription:
          'Choose affordable POS software for gaming, karaoke, billiards, anticafe and lounges: timed sessions, bookings, cash and stock from 25 AZN/month.',
        intro:
          'The cheapest POS is not always the lowest-cost option if club time still lives in a separate spreadsheet. Heselo starts from 25 AZN per month and combines bookings, live sessions, cash shifts and inventory.',
        competitorFit:
          'If restaurant orders, a kitchen, QR menus and delivery are the main operation, an affordable restaurant POS is the better category. Heselo is not an alternative to a complete kitchen POS.',
        heseloFit:
          'When you sell room, console or table time, one purpose-built system helps staff keep bookings and actual sessions distinct.',
        priceAngle:
          'Count setup, hardware, extra terminals, support and unused modules alongside the monthly fee. Heselo starts from 25 AZN per month.',
        switchNote:
          'Test every candidate with the same scenario: create a booking, start the session, add an item and close the cash shift. Choose after reviewing the demo result.',
      },
      ru: {
        shortTitle: 'Доступная POS-система для клуба',
        h1: 'Как выбрать доступную альтернативу POS-системе для клуба',
        seoTitle: 'Доступная альтернатива клубной POS — Heselo',
        seoDescription:
          'Выбор доступной POS для игровых, караоке-, бильярдных, антикафе- и лаунж-заведений: сеансы, бронь, касса и склад от 25 AZN в месяц.',
        intro:
          'Самая дешёвая POS-система не всегда обходится дешевле, если клубное время приходится вести в отдельной таблице. Heselo от 25 AZN в месяц объединяет бронирования, живые сеансы, кассовые смены и склад.',
        competitorFit:
          'Если основа бизнеса — ресторанные заказы, кухня, QR-меню и доставка, лучше выбирать доступную ресторанную POS-систему. Heselo не служит альтернативой полноценной кухонной POS.',
        heseloFit:
          'При продаже времени комнаты, консоли или стола специализированная система помогает сотрудникам не путать бронь с фактическим сеансом.',
        priceAngle:
          'Учитывайте не только абонплату, но и внедрение, оборудование, дополнительные терминалы, поддержку и ненужные модули. Heselo начинается от 25 AZN в месяц.',
        switchNote:
          'Проверьте кандидатов на одном сценарии: создайте бронь, запустите сеанс, добавьте товар и закройте кассовую смену. Решение принимайте после демо.',
      },
    },
  },
  {
    slug: 'restaurant-pos-vs-karaoke-system',
    name: 'restaurant POS',
    kind: 'restaurant',
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    copy: {
      az: {
        shortTitle: 'Restoran POS-u və karaoke sistemi',
        h1: 'Restoran POS-u, yoxsa karaoke otaq sistemi?',
        seoTitle: 'Restoran POS-u vs karaoke sistemi — Heselo',
        seoDescription:
          'Restoran POS-u ilə karaoke idarəetmə sistemini müqayisə edin: mətbəx sifarişi, otaq rezervasiyası, vaxt sessiyası, kassa və stok.',
        intro:
          'Restoran POS-u və karaoke sistemi eyni satışı qeyd edə bilər, amma əsas əməliyyatları fərqlidir. Birincisi sifariş və mətbəxi, ikincisi isə otaq vaxtı, rezervasiya və canlı sessiyanı mərkəzə qoyur.',
        competitorFit:
          'Gəlirin əsas hissəsi yemək-içki sifarişindən gəlir, mətbəx və çatdırılma mürəkkəbdirsə, restoran POS-u əsas sistem olmalıdır. Heselo onu tam əvəz etmir.',
        heseloFit:
          'Karaoke otaqları əvvəlcədən bron edilir, qonaq gəldikdə sessiya başlayır və vaxt uzadıla bilirsə, Heselo həmin prosesi kassa və stokla birləşdirir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. İki sistem arasında qiyməti deyil, hansı əməliyyatı mərkəzləşdirdiyini müqayisə edin; bəzi böyük məkanlarda hər ikisi lazım ola bilər.',
        switchNote:
          'Bir həftə ərzində vaxt gəliri ilə mətbəx gəlirinin payını ölçün. Demo zamanı otaq bronu və sessiya bağlanışını sınaqdan keçirib əsas sistem qərarını bu nisbətə görə verin.',
      },
      en: {
        shortTitle: 'Restaurant POS vs karaoke system',
        h1: 'Restaurant POS or karaoke room system?',
        seoTitle: 'Restaurant POS vs Karaoke System — Heselo',
        seoDescription:
          'Compare a restaurant POS with karaoke management software: kitchen orders, room bookings, timed sessions, cash shifts and inventory.',
        intro:
          'A restaurant POS and karaoke system may record the same sale, but they centre different operations. One prioritises orders and kitchens; the other prioritises room time, bookings and live sessions.',
        competitorFit:
          'A restaurant POS should remain primary when food and drink drive most revenue and kitchen or delivery work is complex. Heselo does not fully replace it.',
        heseloFit:
          'When karaoke rooms are reserved ahead, started on arrival and extended during the visit, Heselo connects that flow to cash and stock.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Compare the operation each system centres, not price alone; larger venues may legitimately need both.',
        switchNote:
          'Measure the share of time revenue versus kitchen revenue for one week. Test room booking and session closeout in the demo, then choose the primary system from that evidence.',
      },
      ru: {
        shortTitle: 'Ресторанная POS или караоке-система',
        h1: 'Ресторанная POS-система или система для караоке-комнат?',
        seoTitle: 'Ресторанная POS или караоке-система — Heselo',
        seoDescription:
          'Сравните ресторанную POS и систему управления караоке: кухонные заказы, бронь комнат, сеансы, кассовые смены и склад.',
        intro:
          'Ресторанная POS и караоке-система могут учитывать одну продажу, но строятся вокруг разных процессов. Первая ставит в центр заказы и кухню, вторая — время комнаты, бронирование и живой сеанс.',
        competitorFit:
          'Ресторанная POS должна оставаться основной, если большую часть выручки дают еда и напитки, а кухня или доставка устроены сложно. Heselo не заменяет её полностью.',
        heseloFit:
          'Если караоке-комнаты бронируют заранее, запускают по приходу и продлевают во время визита, Heselo связывает этот процесс с кассой и складом.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Сравнивайте не только цену, но и центральный процесс; крупному заведению действительно могут понадобиться обе системы.',
        switchNote:
          'За неделю измерьте долю выручки от времени и от кухни. Проверьте в демо бронирование комнаты и закрытие сеанса, затем выберите основную систему по этим данным.',
      },
    },
  },
  {
    slug: 'playstation-cafe-software-alternative',
    name: 'Hasansoft-style PlayStation cafe software',
    kind: 'timer',
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'PlayStation kafe proqramı alternativi',
        h1: 'Sadə taymerə alternativ PlayStation klub proqramı',
        seoTitle: 'PlayStation kafe proqramı alternativi — Heselo',
        seoDescription:
          'Hasansoft tipli PlayStation taymer proqramına alternativ: rezervasiya, canlı sessiya, kassa növbəsi və stokla Heselo.',
        intro:
          'Hasansoft tipli PlayStation kafe proqramları çox vaxt konsol vaxtını başlatmaq və dayandırmaq üçün sadə taymer rolunu oynayır. Yalnız taymer kifayətdirsə, bu yanaşma praktikdir; rezervasiya, kassa və stok birləşməlidirsə, Heselo daha genişdir.',
        competitorFit:
          'Kiçik klubda yalnız cihaz vaxtını görmək və əl ilə ödəniş almaq lazımdırsa, sadə taymer tez öyrənilir və artıq funksiya yaratmır.',
        heseloFit:
          'Heselo taymerdən əlavə öncədən rezervasiya, canlı sessiya, tarif, kassa növbəsi, işçi səlahiyyəti və məhsul qalığını idarə edir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. Sadə taymerin qiyməti aşağı ola bilər, amma ayrıca rezervasiya dəftəri və stok cədvəlinə sərf olunan vaxtı da xərcə daxil edin.',
        switchNote:
          'Konsolları ayrı-ayrı stansiyalar kimi yaradın, mövcud tarifləri köçürün və əvvəlcə bir iş növbəsində paralel yoxlayın. Demo zamanı rezervasiyadan sessiyaya keçidi işçilərlə sınaqdan keçirin.',
      },
      en: {
        shortTitle: 'PlayStation café software alternative',
        h1: 'A PlayStation club alternative to timer-only software',
        seoTitle: 'PlayStation Café Software Alternative — Heselo',
        seoDescription:
          'An alternative to Hasansoft-style PlayStation timer software, adding bookings, live sessions, cash shifts and inventory with Heselo.',
        intro:
          'Hasansoft-style PlayStation café tools often act as a simple start-stop timer for consoles. That is practical when a timer is enough; Heselo goes further when bookings, cash and stock need to connect.',
        competitorFit:
          'A simple timer fits a small club that only needs device elapsed time and takes payments manually. It is quick to learn and avoids unnecessary scope.',
        heseloFit:
          'Beyond timing, Heselo manages advance bookings, live sessions, rates, cash shifts, staff permissions and product stock.',
        priceAngle:
          'Heselo starts from 25 AZN per month. A timer may cost less, but include the staff time spent maintaining separate booking and stock records.',
        switchNote:
          'Create each console as its own station, move current rates and run both systems for one representative shift. Let staff test the booking-to-session handoff in the demo.',
      },
      ru: {
        shortTitle: 'Альтернатива программе для PlayStation-кафе',
        h1: 'Альтернатива простому таймеру для PlayStation-клуба',
        seoTitle: 'Альтернатива ПО для PlayStation-кафе — Heselo',
        seoDescription:
          'Альтернатива таймерам для PlayStation-кафе в стиле Hasansoft: бронирования, живые сеансы, кассовые смены и склад в Heselo.',
        intro:
          'Программы для PlayStation-кафе в стиле Hasansoft часто работают как простой таймер запуска и остановки консоли. Когда нужен только таймер, это практично; Heselo шире, если необходимо связать бронь, кассу и склад.',
        competitorFit:
          'Простой таймер подходит небольшому клубу, где достаточно видеть время устройства и принимать оплату вручную. Его легко освоить, и он не перегружен лишними функциями.',
        heseloFit:
          'Помимо времени Heselo управляет предварительными бронированиями, живыми сеансами, тарифами, кассовыми сменами, правами сотрудников и остатками товаров.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Таймер может быть дешевле, но учтите время сотрудников на отдельные журналы брони и склада.',
        switchNote:
          'Создайте каждую консоль как отдельную станцию, перенесите действующие тарифы и одну типичную смену ведите параллельно. В демо дайте сотрудникам проверить переход от брони к сеансу.',
      },
    },
  },
  {
    slug: 'izi-alternative',
    name: 'IZI',
    kind: 'pc-club',
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'IZI alternativi',
        h1: 'Otaqlı oyun klubları üçün IZI alternativi',
        seoTitle: 'IZI alternativi — Heselo oyun klub sistemi',
        seoDescription:
          'IZI və Heselo müqayisəsi: MDB PC klubları üçün kompüter idarəetməsi yoxsa PlayStation otaqları, rezervasiya, sessiya, kassa və stok.',
        intro:
          'IZI MDB bazarında PC klublarına yönələn və kompüter parkının idarə edilməsini önə çıxaran həll kimi tanınır. PlayStation otaqları və vaxtla satılan digər yerlər əsasdırsa, Heselo daha uyğun alternativ ola bilər.',
        competitorFit:
          'Çoxsaylı Windows kompüterində müştəri girişi, iş stansiyalarına nəzarət və PC klub avtomatlaşdırması əsasdırsa, IZI-nin ixtisaslaşması üstünlükdür.',
        heseloFit:
          'Heselo otaq, konsol, bilyard və launj kimi yerlərdə rezervasiya, canlı sessiya, kassa növbəsi və stoku AZ, EN və RU interfeysdə birləşdirir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. IZI qiymətini kompüter sayı, modul və regional şərtlərlə birlikdə dəqiqləşdirin; iki sistemin idarə etdiyi yerlər və avadanlıq eyni deyil.',
        switchNote:
          'PC kilidləmə və iş stansiyalarına nəzarət sizə lazımdırsa, keçməyin. Əsasən otaq və konsol idarə edirsinizsə, həmin otaq və konsolları Heselo demosunda yaradıb rezervasiya-sessiya prosesini yoxlayın.',
      },
      en: {
        shortTitle: 'IZI alternative',
        h1: 'An IZI alternative for room-based gaming clubs',
        seoTitle: 'IZI Alternative — Heselo Gaming Club System',
        seoDescription:
          'Compare IZI and Heselo: CIS-focused PC workstation control versus PlayStation rooms, bookings, sessions, cash shifts and stock.',
        intro:
          'IZI is known as a CIS-focused PC-club platform with workstation management at its core. If PlayStation rooms and other timed resources are primary, Heselo may be a better-fit alternative.',
        competitorFit:
          'IZI has the advantage when customer login, workstation control and automation across many Windows PCs are essential.',
        heseloFit:
          'Heselo combines bookings, live sessions, cash shifts and stock for rooms, consoles, billiards and lounges, with AZ, EN and RU interfaces.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Confirm IZI pricing by PC count, modules and regional terms; the two systems do not manage exactly the same resources.',
        switchNote:
          'Do not switch if PC locking and workstation control are essential. If rooms and consoles dominate, create them in the Heselo demo and test the booking-to-session flow.',
      },
      ru: {
        shortTitle: 'Альтернатива IZI',
        h1: 'Альтернатива IZI для игровых клубов с комнатами',
        seoTitle: 'Альтернатива IZI — система Heselo',
        seoDescription:
          'Сравните IZI и Heselo: управление компьютерами в клубах СНГ или PlayStation-комнаты, бронь, сеансы, кассовые смены и склад.',
        intro:
          'IZI известна как платформа для компьютерных клубов СНГ, где в центре находится управление рабочими станциями. Если основа бизнеса — PlayStation-комнаты и другие почасовые ресурсы, Heselo может подойти лучше.',
        competitorFit:
          'Преимущество IZI заметно, когда критичны вход клиента, контроль рабочих станций и автоматизация большого парка Windows-компьютеров.',
        heseloFit:
          'Heselo объединяет бронь, живые сеансы, кассовые смены и склад для комнат, консолей, бильярда и лаунжей; интерфейс доступен на AZ, EN и RU.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Уточните цену IZI с учётом числа ПК, модулей и региональных условий: системы управляют не вполне одинаковыми ресурсами.',
        switchNote:
          'Не переходите, если необходимы блокировка ПК и контроль рабочих станций. Если преобладают комнаты и консоли, создайте их в демо Heselo и проверьте путь от брони к сеансу.',
      },
    },
  },
  {
    slug: 'kaktus-alternative',
    name: 'Kaktus',
    kind: 'appointments',
    relatedSolutions: ['reservations', 'lounge', 'antikafe'],
    copy: {
      az: {
        shortTitle: 'Kaktus alternativi',
        h1: 'Otaq sessiyaları üçün Kaktus alternativi',
        seoTitle: 'Kaktus alternativi — Heselo rezervasiya sistemi',
        seoDescription:
          'Kaktus və Heselo müqayisəsi: salon görüş cədvəli yoxsa karaoke, oyun, bilyard və launj üçün otaq rezervasiyası və canlı sessiya.',
        intro:
          'Kaktus salon və xidmət bizneslərində mütəxəssis üzrə görüş planlamağa uyğundur. Rezervasiya işçiyə yox, otaq, konsol və ya masaya bağlanır və sonra canlı sessiyaya çevrilirsə, Heselo fərqli proses təqdim edir.',
        competitorFit:
          'Müştəri konkret ustaya və xidmət müddətinə yazılırsa, təqvim salon işçilərinin qrafikini idarə etməlidirsə, Kaktus tipli appointment sistemi daha uyğundur.',
        heseloFit:
          'Heselo vaxtla satılan otağı və ya avadanlığı bron edir, qonaq gələndə sessiyanı başladır, uzadılmanı və tarif hesabını kassa növbəsi və stokla birləşdirir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. Qiymət müqayisəsində istifadəçi və filial sayından əlavə, canlı sessiya və kassa funksiyalarının ayrıca həll tələb edib-etmədiyini nəzərə alın.',
        switchNote:
          'Usta və xidmətləri deyil, otaq və avadanlığı sistem siyahısına əlavə edin. Demo zamanı gələcək rezervasiyanı başladıb uzadın və bağlayın; bu proses uyğun deyilsə, salon sistemində qalın.',
      },
      en: {
        shortTitle: 'Kaktus alternative',
        h1: 'A Kaktus alternative for room sessions',
        seoTitle: 'Kaktus Alternative — Heselo Booking System',
        seoDescription:
          'Compare Kaktus and Heselo: salon appointment scheduling versus room bookings and live sessions for karaoke, gaming, billiards and lounges.',
        intro:
          'Kaktus suits specialist-based appointments in salons and service businesses. Heselo offers a different flow when a booking belongs to a room, console or table and then becomes a live session.',
        competitorFit:
          'An appointment platform like Kaktus fits when customers book a named specialist and service duration, and the calendar must organise staff schedules.',
        heseloFit:
          'Heselo books a room or piece of equipment by time, starts the session on arrival, and connects extensions and rates with the cash shift and stock.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Beyond users and branches, ask whether live sessions and cash operations would require another tool.',
        switchNote:
          'Translate rooms and equipment—not specialists and services—into your resource list. Start, extend and close a future booking in the demo; remain with salon software if that flow does not fit.',
      },
      ru: {
        shortTitle: 'Альтернатива Kaktus',
        h1: 'Альтернатива Kaktus для сеансов в комнатах',
        seoTitle: 'Альтернатива Kaktus — система брони Heselo',
        seoDescription:
          'Сравните Kaktus и Heselo: запись к мастеру или бронь комнат и живые сеансы для караоке, игровых, бильярдных и лаунж-заведений.',
        intro:
          'Kaktus подходит для записи к специалистам в салонах и сервисном бизнесе. Heselo предлагает иной процесс, когда бронь относится к комнате, консоли или столу и затем превращается в живой сеанс.',
        competitorFit:
          'Система записи вроде Kaktus уместнее, когда клиент выбирает конкретного мастера и услугу, а календарь должен организовывать график сотрудников.',
        heseloFit:
          'Heselo бронирует комнату или оборудование по часам, запускает сеанс по приходу и связывает продление и тариф с кассовой сменой и складом.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Помимо пользователей и филиалов, учитывайте, потребуются ли отдельные инструменты для живых сеансов и кассы.',
        switchNote:
          'Перенесите в список ресурсов комнаты и оборудование, а не мастеров и услуги. В демо запустите, продлите и закройте будущую бронь; если сценарий не подходит, оставайтесь на салонной системе.',
      },
    },
  },
  {
    slug: 'resto-az-alternative',
    name: 'resto.az',
    kind: 'restaurant',
    relatedSolutions: ['billiards', 'lounge', 'pos', 'inventory'],
    copy: {
      az: {
        shortTitle: 'resto.az alternativi',
        h1: 'Vaxtla işləyən məkanlar üçün resto.az alternativi',
        seoTitle: 'resto.az alternativi — Heselo klub sistemi',
        seoDescription:
          'resto.az və Heselo müqayisəsi: restoran POS-u və menyu prosesinə qarşı oyun, karaoke, bilyard və launj sessiyaları.',
        intro:
          'resto.az yerli restoran və kafe əməliyyatlarına uyğun POS seçimi ola bilər. Məkanınızda əsas satış otaq və masa vaxtıdırsa, Heselo rezervasiya və sessiyanı mərkəzə qoyan alternativdir.',
        competitorFit:
          'Mətbəx sifarişləri, restoran menyusu, ofisiant xidməti və çatdırılma əsasdırsa, resto.az kimi restoran həlli daha uyğun ola bilər. Heselo tam restoran mətbəx POS-u deyil.',
        heseloFit:
          'Heselo oyun, karaoke, bilyard, antikafe və launj yerlərini bron edir, canlı sessiyanı hesablayır, kassa növbəsi və stoku izləyir.',
        priceAngle:
          'Heselo 25 AZN/aydan başlayır. resto.az üzrə aktual tarif, quraşdırma və avadanlıq qiymətlərini birbaşa dəqiqləşdirib eyni istifadə ssenarisi üzrə müqayisə edin.',
        switchNote:
          'Otaq və masa siyahısını, tarifləri və satılan məhsulları hazırlayın. Demo zamanı bir rezervasiyanı sessiyaya çevirin; mətbəx prosesi qalırsa, onun üçün ayrıca həlli saxlayın.',
      },
      en: {
        shortTitle: 'resto.az alternative',
        h1: 'A resto.az alternative for time-based venues',
        seoTitle: 'resto.az Alternative — Heselo Club System',
        seoDescription:
          'Compare resto.az and Heselo: restaurant POS and menu workflows versus gaming, karaoke, billiards and lounge sessions.',
        intro:
          'resto.az may fit local restaurant and café POS operations. If room and table time are the main sale, Heselo is an alternative built around bookings and sessions.',
        competitorFit:
          'A restaurant solution such as resto.az may fit better when kitchen orders, menus, waiter service and delivery are primary. Heselo is not a full restaurant kitchen POS.',
        heseloFit:
          'Heselo books gaming, karaoke, billiards, anticafe and lounge spaces, runs live sessions, and tracks cash shifts and stock.',
        priceAngle:
          'Heselo starts from 25 AZN per month. Confirm current resto.az plan, setup and hardware pricing directly, then compare the same operating scenario.',
        switchNote:
          'Prepare room and table lists, rates and sale items. Convert one booking into a session in the demo; retain a separate restaurant solution if the kitchen workflow remains.',
      },
      ru: {
        shortTitle: 'Альтернатива resto.az',
        h1: 'Альтернатива resto.az для заведений с почасовой оплатой',
        seoTitle: 'Альтернатива resto.az — система Heselo',
        seoDescription:
          'Сравните resto.az и Heselo: ресторанная POS и меню либо сеансы игровых, караоке-, бильярдных и лаунж-заведений.',
        intro:
          'resto.az может подойти для локальных ресторанных и кафе-POS процессов. Если основной товар — время комнаты или стола, Heselo строится вокруг бронирований и сеансов.',
        competitorFit:
          'Ресторанное решение вроде resto.az может быть уместнее, когда важны кухонные заказы, меню, официанты и доставка. Heselo не является полноценной кухонной POS-системой.',
        heseloFit:
          'Heselo бронирует комнаты и столы игровых, караоке-, бильярдных, антикафе- и лаунж-заведений, ведёт живые сеансы, кассовые смены и склад.',
        priceAngle:
          'Heselo стоит от 25 AZN в месяц. Напрямую уточните актуальную стоимость тарифа, внедрения и оборудования resto.az, затем сравните одинаковый рабочий сценарий.',
        switchNote:
          'Подготовьте список комнат и столов, тарифы и товары. В демо превратите одну бронь в сеанс; если кухня остаётся, сохраните для неё отдельное ресторанное решение.',
      },
    },
  },
]

const labels: Record<
  Locale,
  {
    sectionTitles: [string, string, string, string, string]
    sectionNotes: [string, string, string, string, string]
    comparisonIntro: string
    ctaTitle: string
    ctaBody: string
    keywords: (name: string, kind: ComparisonKind) => string[]
    bullets: (name: string, kind: ComparisonKind) => string[]
    faq: (name: string, kind: ComparisonKind) => GuideCopy['faq']
  }
> = {
  az: {
    sectionTitles: [
      'Rəqib həll nə vaxt daha uyğundur?',
      'Heselo nə vaxt daha uyğundur?',
      'Qısa funksional müqayisə',
      'Qiymətə necə baxmalı?',
      'Keçidi necə yoxlamalı?',
    ],
    sectionNotes: [
      'Seçimi brend adına deyil, gündəlik əsas əməliyyatınıza görə edin.',
      'Uyğunluğu görmək üçün eyni ssenarini demo mühitində yoxlamaq vacibdir.',
      'Bunlar fərqli biznes modellərinə xidmət edən əsas fərqlərdir.',
      'Ümumi sahibolma xərcini eyni müddət və eyni sayda istifadəçi üzrə hesablayın.',
      'Tam keçiddən əvvəl bir növbəlik sınaq səhvləri erkən görməyə kömək edir.',
    ],
    comparisonIntro:
      'Aşağıdakı xülasə məhsulların əsas istiqamətini göstərir. Dəqiq modul və paket tərkibini satınalmadan əvvəl provayderlə təsdiqləyin.',
    ctaTitle: 'Heselonu öz iş gününüzlə yoxlayın',
    ctaBody:
      'Demo istəyin: otaq, masa və stansiyalarınızı nümunə kimi qurub rezervasiya, canlı sessiya, kassa növbəsi və stok izləməsini birlikdə yoxlayaq.',
    keywords: (name, kind) => [
      `${name} alternativ`,
      `${name} müqayisə`,
      kind === 'restaurant' ? 'restoran POS alternativi' : 'klub proqramı alternativi',
      'klub idarəetmə proqramı',
      'otaq rezervasiya sistemi',
      'vaxt sessiyası proqramı',
      'kassa növbəsi sistemi',
      'Heselo',
    ],
    bullets: (name, kind) => [
      `${name}: ${kind === 'restaurant' ? 'restoran sifarişi, menyu və mətbəx prosesi' : kind === 'timer' ? 'sadə cihaz taymeri' : kind === 'pc-club' ? 'PC iş stansiyalarının idarəetməsi' : kind === 'appointments' ? 'usta və xidmət üzrə görüş cədvəli' : 'ümumi satış və kassa funksiyaları'}`,
      'Heselo: otaq, masa və stansiya rezervasiyası + canlı vaxt sessiyası',
      'Heselo: kassa növbəsi + stok və sessiyaya məhsul satışı',
      'Heselo: Azərbaycan, ingilis və rus dilləri; 25 AZN/aydan',
    ],
    faq: (name, kind) => [
      {
        q: `Heselo ${name} sistemini tam əvəz edir?`,
        a:
          kind === 'restaurant'
            ? 'Xeyr. Tam restoran mətbəxi, reseptura və çatdırılma əsasdırsa, ixtisaslaşmış restoran POS-u qalmalıdır. Heselo otaq və vaxt sessiyalarına fokuslanır.'
            : kind === 'pc-club'
              ? 'PC kilidləmə və iş stansiyalarına nəzarəti tam əvəz etmir. Heselo otaq, konsol, masa, rezervasiya və canlı sessiya prosesinə fokuslanır.'
              : kind === 'appointments'
                ? 'Salonun usta və xidmət cədvəlini əvəz etmək məqsədi daşımır. Heselo otaq və avadanlıq kimi vaxtla satılan yerləri idarə edir.'
                : 'Sadə taymer funksiyasından daha genişdir, amma uyğunluq rezervasiya, kassa və stok ehtiyacınızdan asılıdır.',
      },
      {
        q: 'Heselo hansı məkanlar üçündür?',
        a: 'PlayStation və oyun klubları, karaoke otaqları, bilyard, antikafe və otaqlı launj məkanları üçün nəzərdə tutulub.',
      },
      {
        q: 'Heselo neçə dildə işləyir və qiyməti nədir?',
        a: 'İnterfeys Azərbaycan, ingilis və rus dillərindədir. Paketlər 25 AZN/aydan başlayır; uyğun planı demo zamanı dəqiqləşdirə bilərsiniz.',
      },
      {
        q: 'Keçməzdən əvvəl necə yoxlaya bilərəm?',
        a: 'Demo istəyin və öz real ssenarinizi — rezervasiya, sessiyanın başlaması, məhsul satışı və kassa bağlanışını — addım-addım sınaqdan keçirin.',
      },
    ],
  },
  en: {
    sectionTitles: [
      'When does the competing solution fit?',
      'When does Heselo fit?',
      'At-a-glance comparison',
      'How should you compare price?',
      'How to test a switch',
    ],
    sectionNotes: [
      'Base the choice on your main daily operation rather than the brand name.',
      'Test the same real scenario in a demo to confirm the fit.',
      'These are the core differences between tools serving different operating models.',
      'Calculate total ownership cost over the same period and user count.',
      'A one-shift pilot helps expose gaps before a full move.',
    ],
    comparisonIntro:
      'This summary shows the products’ primary focus. Confirm exact modules and package contents with each provider before purchasing.',
    ctaTitle: 'Test Heselo with your workflow',
    ctaBody:
      'Request a demo. We can model your rooms, tables and stations, then walk through bookings, live sessions, cash shifts and inventory together.',
    keywords: (name, kind) => [
      `${name} alternative`,
      `${name} comparison`,
      kind === 'restaurant' ? 'restaurant POS alternative' : 'club software alternative',
      'club management software',
      'room booking system',
      'timed session software',
      'cash shift software',
      'Heselo',
    ],
    bullets: (name, kind) => [
      `${name}: ${kind === 'restaurant' ? 'restaurant orders, menus and kitchen workflows' : kind === 'timer' ? 'basic device timing' : kind === 'pc-club' ? 'PC workstation control' : kind === 'appointments' ? 'specialist and service appointments' : 'general sales and till functions'}`,
      'Heselo: room, table and station bookings + live timed sessions',
      'Heselo: cash shifts + inventory and items sold into sessions',
      'Heselo: Azerbaijani, English and Russian; from 25 AZN/month',
    ],
    faq: (name, kind) => [
      {
        q: `Does Heselo fully replace ${name}?`,
        a:
          kind === 'restaurant'
            ? 'No. Keep a specialised restaurant POS when a full kitchen, recipes and delivery are central. Heselo focuses on room and timed-session operations.'
            : kind === 'pc-club'
              ? 'It does not fully replace PC locking and workstation control. Heselo focuses on rooms, consoles, tables, bookings and live sessions.'
              : kind === 'appointments'
                ? 'It is not intended to replace specialist and service scheduling for salons. Heselo manages timed resources such as rooms and equipment.'
                : 'It goes beyond a basic timer, but the right fit depends on whether you need bookings, cash shifts and inventory.',
      },
      {
        q: 'Which venues is Heselo built for?',
        a: 'It is built for PlayStation and gaming clubs, karaoke rooms, billiards, anticafes and room-based lounges.',
      },
      {
        q: 'Which languages does Heselo support and what does it cost?',
        a: 'The interface supports Azerbaijani, English and Russian. Plans start from 25 AZN per month; confirm the suitable plan during a demo.',
      },
      {
        q: 'How can I check the fit before switching?',
        a: 'Request a demo and test your real flow step by step: booking, session start, item sale and cash-shift close.',
      },
    ],
  },
  ru: {
    sectionTitles: [
      'Когда решение конкурента подходит лучше?',
      'Когда подходит Heselo?',
      'Краткое сравнение возможностей',
      'Как сравнивать стоимость?',
      'Как проверить переход',
    ],
    sectionNotes: [
      'Выбирайте по главному ежедневному процессу, а не по известности бренда.',
      'Проверьте один и тот же реальный сценарий в демо, чтобы оценить соответствие.',
      'Это основные различия решений, созданных для разных моделей работы.',
      'Считайте полную стоимость за одинаковый период и для одинакового числа пользователей.',
      'Пилот в течение одной смены помогает выявить пробелы до полного перехода.',
    ],
    comparisonIntro:
      'Краткое сравнение показывает основную направленность продуктов. Перед покупкой уточните у каждого поставщика точный состав модулей и пакета.',
    ctaTitle: 'Проверьте Heselo на своём сценарии',
    ctaBody:
      'Запросите демо: создадим пример ваших комнат, столов и станций и вместе проверим бронирования, живые сеансы, кассовые смены и склад.',
    keywords: (name, kind) => [
      `альтернатива ${name}`,
      `${name} сравнение`,
      kind === 'restaurant' ? 'альтернатива ресторанной POS' : 'альтернатива программе для клуба',
      'программа управления клубом',
      'система бронирования комнат',
      'учёт почасовых сеансов',
      'программа кассовых смен',
      'Heselo',
    ],
    bullets: (name, kind) => [
      `${name}: ${kind === 'restaurant' ? 'ресторанные заказы, меню и кухня' : kind === 'timer' ? 'простой таймер устройств' : kind === 'pc-club' ? 'контроль рабочих станций ПК' : kind === 'appointments' ? 'запись к специалистам и на услуги' : 'общие продажи и кассовые функции'}`,
      'Heselo: бронь комнат, столов и станций + живые почасовые сеансы',
      'Heselo: кассовые смены + склад и товары в счёте сеанса',
      'Heselo: азербайджанский, английский и русский; от 25 AZN в месяц',
    ],
    faq: (name, kind) => [
      {
        q: `Heselo полностью заменяет ${name}?`,
        a:
          kind === 'restaurant'
            ? 'Нет. Если в центре полноценная кухня, техкарты и доставка, нужна профильная ресторанная POS. Heselo сосредоточена на комнатах и почасовых сеансах.'
            : kind === 'pc-club'
              ? 'Она не заменяет полностью блокировку ПК и контроль рабочих станций. Heselo сосредоточена на комнатах, консолях, столах, брони и живых сеансах.'
              : kind === 'appointments'
                ? 'Она не предназначена для замены салонного расписания мастеров и услуг. Heselo управляет почасовыми ресурсами: комнатами и оборудованием.'
                : 'Она шире простого таймера, но выбор зависит от потребности в бронированиях, кассовых сменах и складе.',
      },
      {
        q: 'Для каких заведений создана Heselo?',
        a: 'Для PlayStation- и игровых клубов, караоке-комнат, бильярда, антикафе и лаунж-заведений с комнатами.',
      },
      {
        q: 'Какие языки поддерживает Heselo и сколько она стоит?',
        a: 'Интерфейс доступен на азербайджанском, английском и русском. Тарифы начинаются от 25 AZN в месяц; подходящий план уточняется на демо.',
      },
      {
        q: 'Как проверить систему до перехода?',
        a: 'Запросите демо и по шагам проверьте реальный сценарий: бронь, запуск сеанса, продажу товара и закрытие кассовой смены.',
      },
    ],
  },
}

export function comparisonGuides(locale: Locale): GuideCopy[] {
  const localeLabels = labels[locale]

  return catalog.map((entry) => {
    const copy = entry.copy[locale]

    return {
      slug: entry.slug as GuideCopy['slug'],
      shortTitle: copy.shortTitle,
      h1: copy.h1,
      seoTitle: copy.seoTitle,
      seoDescription: copy.seoDescription,
      keywords: localeLabels.keywords(entry.name, entry.kind),
      datePublished: PUBLISHED,
      dateModified: PUBLISHED,
      intro: copy.intro,
      sections: [
        {
          id: 'when-competitor-fits',
          title: localeLabels.sectionTitles[0],
          paragraphs: [`${copy.competitorFit} ${localeLabels.sectionNotes[0]}`],
        },
        {
          id: 'when-heselo-fits',
          title: localeLabels.sectionTitles[1],
          paragraphs: [`${copy.heseloFit} ${localeLabels.sectionNotes[1]}`],
        },
        {
          id: 'comparison',
          title: localeLabels.sectionTitles[2],
          paragraphs: [
            `${localeLabels.comparisonIntro} ${localeLabels.sectionNotes[2]}`,
          ],
          bullets: localeLabels.bullets(entry.name, entry.kind),
        },
        {
          id: 'price-angle',
          title: localeLabels.sectionTitles[3],
          paragraphs: [`${copy.priceAngle} ${localeLabels.sectionNotes[3]}`],
        },
        {
          id: 'how-to-switch',
          title: localeLabels.sectionTitles[4],
          paragraphs: [`${copy.switchNote} ${localeLabels.sectionNotes[4]}`],
        },
      ],
      faq: localeLabels.faq(entry.name, entry.kind),
      relatedSolutions: entry.relatedSolutions,
      ctaTitle: localeLabels.ctaTitle,
      ctaBody: localeLabels.ctaBody,
    }
  })
}
