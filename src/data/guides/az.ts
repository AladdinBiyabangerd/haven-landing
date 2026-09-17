import type { GuideCopy, GuidesHubCopy } from './types'
import { comparisonGuides } from './comparisonGuides'

export const guidesHubAz: GuidesHubCopy = {
  eyebrow: 'Bələdçilər',
  h1: 'Klub və otaq axını necə işləyir?',
  intro:
    'Bu bölmə məhsul reklamı deyil — axtarışda tez rast gəlinən suallara aydın cavab verir. Hər yazının sonunda uyğun Heselo həll səhifəsinə keçid var.',
  seoTitle: 'Bələdçilər — klub idarəetməsi və POS alternativləri | Heselo',
  seoDescription:
    'Oyun klubu, karaoke, bilyard və antikafe axını; iiko, Clopos, Dine və Excel alternativləri — dürüst müqayisə və seçim bələdçiləri.',
  keywords: [
    'oyun klubu idarəetmə sistemi nədir',
    'playstation klub proqramı',
    'iiko alternativ',
    'clopos alternativ',
    'dine alternativ',
    'karaoke rezervasiya sistemi',
  ],
  cardCta: 'Oxu',
  comparisonTitle: 'Alternativlər və müqayisələr',
  comparisonIntro:
    'iiko, Clopos, Dine, MinuPOS və digər sistemləri axtarırsınızsa — klub/otaq-vaxt üçün dürüst müqayisə yazıları.',
}

export const guidesAz: GuideCopy[] = [
  {
    slug: 'gaming-club-management',
    shortTitle: 'Oyun klubu idarəetməsi',
    h1: 'Oyun klubu idarəetmə sistemi nədir?',
    seoTitle: 'Oyun klubu idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'PS, konsol və oyun klubu necə idarə olunur: stansiya rezervasiyası, canlı sessiya, kassa və anbar. PlayStation klub proqramı izahı — satış səhifəsi deyil.',
    keywords: [
      'oyun klubu idarəetmə sistemi nədir',
      'ps klub proqramı',
      'playstation klub idarəetmə',
      'konsol klub necə idarə olunur',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-07',
    intro:
      'Oyun klubu idarəetmə sistemi PS, konsol və ya PC stansiyalarının rezervini, canlı oyunu və kassanı bir paneldə aparmaq üçündür. Sadə taymer stansiyanın boş olub-olmadığını göstərə bilər, amma rezerv tarixçəsi, uzatma, qəlyanaltı satışı və növbə bağlanışını vermir.',
    sections: [
      {
        id: 'why',
        title: 'Niyə PS klublar belə sistem axtarır?',
        paragraphs: [
          'PlayStation klubunda axın saatladır: telefonla rezerv, “hansı konsol boşdur?”, oyun bitəndə uzatma və qəlyanaltı. Bunlar ayrı vərəqlərdə qalanda gecə növbəsi qarışır.',
          'Yaxşı sistem stansiyanı resurs kimi saxlayır — rezerv canlı sessiyaya keçir, ödəniş eyni növbəyə düşür.',
        ],
      },
      {
        id: 'modules',
        title: 'Adətən hansı hissələrdən ibarət olur?',
        paragraphs: ['Praktiki ehtiyaclar oxşardır:'],
        bullets: [
          'Stansiya rezervasiyası (PS, konsol, PC)',
          'Canlı sessiya (vaxt, uzatma, ödəniş)',
          'Sürətli satış (qəlyanaltı/içki)',
          'Kassa növbəsi və sayım',
          'Müştəri tarixçəsi',
        ],
      },
      {
        id: 'timer',
        title: 'Taymer proqramından fərqi nədir?',
        paragraphs: [
          'Taymer yalnız müddəti sayır. Rezerv siyahısı, köçürmə, kassa sayımı və anbar qalığı ayrı qalır. Klub günü bağlananda “kim nə oynayıb, nə satılıb?” sualı Excel-ə qayıdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo oyun klubunda necə kömək edir?',
        paragraphs: [
          'Heselo stansiyanı cədvəldə və canlı izləmədə eyni resurs kimi saxlayır. PS və PC eyni paneldə ola bilər. Ödəniş qalıqları serverdə hesablanır.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız PS klub üçündür, yoxsa PC də olar?',
        a: 'Hər ikisi. Fərqli stansiya tipləri eyni cədvəl və kassa axınında qurulur.',
      },
      {
        q: 'Saat bitəndə uzatma necə qeyd olunur?',
        a: 'Canlı sessiyada vaxt uzadılır; ödəniş eyni qeydə düşür — ayrı vərəq lazım deyil.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasında məkan tipi olaraq oyun klubu / PS seçin və stansiya sayını qeyd edin.',
      },
    ],
    relatedSolutions: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Oyun klubu üçün demo',
    ctaBody: 'PS və stansiya sayınızı yazın — rezervasiya və canlı axını göstəririk.',
  },
  {
    slug: 'karaoke-room-booking',
    shortTitle: 'Karaoke otaq rezervasiyası',
    h1: 'Karaoke otaqları necə rezerv edilir?',
    seoTitle: 'Karaoke otaq rezervasiyası necə işləyir? | Heselo bələdçisi',
    seoDescription:
      'Karaoke otaq rezervasiyası: cədvəl, sessiya müddəti, əlavə satış və kassa. Karaoke idarəetmə sistemi izahı.',
    keywords: [
      'karaoke otaq rezervasiya',
      'karaoke idarəetmə sistemi',
      'karaoke otaq bron',
      'karaoke proqramı',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'Karaoke məkanında vahid otaqdır. Rezerv yalnız “boş saat seçmək” deyil: qonaq gələndə eyni qeyd canlı sessiyaya çevrilməli, uzatma və içki eyni axında qalmalıdır.',
    sections: [
      {
        id: 'why',
        title: 'Otaq rezervi niyə itir?',
        paragraphs: [
          'Telefon, WhatsApp və kağız cədvəl eyni otağa iki qrupu yaza bilər. Bir neçə otaq eyni vaxtda dolanda resepsiya statusu gec görür.',
        ],
      },
      {
        id: 'flow',
        title: 'Yaxşı karaoke axını necə görünür?',
        paragraphs: [
          'Cədvəldə otaq rezerv olunur. Qonaq gələndə sessiya açılır. Müddət bitəndə uzatma və ya ödəniş eyni qeyddədir. Kassa növbəni bağlayır.',
        ],
        bullets: ['Otaq cədvəli', 'Canlı sessiya', 'Əlavə satış', 'Növbə bağlanışı'],
      },
      {
        id: 'form',
        title: 'Yalnız onlayn bron forması kifayətdirmi?',
        paragraphs: [
          'Bron səhifəsi otağın içindəki axını idarə etmir. Ofisiant məhsul əlavə edəndə və kassa bağlananda eyni məlumat lazımdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo karaoke-də nə verir?',
        paragraphs: [
          'Otaqlar ayrı resursdur. Cədvəl, canlı izləmə və kassa eyni paneldədir. Karaoke + launj otaqları birlikdə qurula bilər.',
        ],
      },
    ],
    faq: [
      {
        q: 'Bir neçə otaq eyni lövhədə görünürmü?',
        a: 'Bəli. Bütün otaqlar eyni cədvəl və canlı izləmədədir.',
      },
      {
        q: 'Əvvəlcədən sifariş varmı?',
        a: 'Rezerv formasında etiket və əvvəlcədən sifariş sahələri var.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında karaoke seçin və otaq sayını yazın.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke üçün demo',
    ctaBody: 'Otaq sayınızı yazın — rezerv və canlı axını göstəririk.',
  },
  {
    slug: 'billiards-club-management',
    shortTitle: 'Bilyard klubu idarəetməsi',
    h1: 'Bilyard klubu necə idarə olunur?',
    seoTitle: 'Bilyard klubu idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Bilyard masa rezervasiyası və cədvəl, canlı oyun, vaxt və kassa necə birləşir — izah. Satış səhifəsi üçün həll bölməsinə keçin.',
    keywords: [
      'bilyard klubu idarəetmə sistemi nədir',
      'bilyard masa rezervasiya necə',
      'bilyard cədvəl',
      'bilyard vaxt sayğacı',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-07',
    intro:
      'Bilyard klubunda masa saatla işləyir. Hansı masa boşdur, oyun nə vaxt başlayıb, əlavə içki yazılıb, yoxsa yox — bunlar ayrı qalanda gecə kassası uzanır.',
    sections: [
      {
        id: 'why',
        title: 'Lövhə və telefon niyə kifayət etmir?',
        paragraphs: [
          'Lövhə real vaxtda yenilənməyə bilər; telefon rezervi masanın canlı statusunu görmür. VIP otaq və adi masa ayrı cədvəldə qalanda toqquşma olur.',
        ],
      },
      {
        id: 'time',
        title: 'Vaxt və ödəniş necə bağlanmalıdır?',
        paragraphs: [
          'Oyun başlayanda sessiya açılır. Pauza, uzatma və məhsul eyni qeyddə qalır. Qiymət resurs və müddət qaydalarına görə hesablanır; kassa növbəni bağlayır.',
        ],
      },
      {
        id: 'mix',
        title: 'Bilyard + karaoke və ya launj?',
        paragraphs: [
          'Qarışıq məkanlarda masa və otaq eyni paneldə olmalıdır. Əks halda kassa iki alətdən yığılır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bilyardda necə işləyir?',
        paragraphs: [
          'Hər masa və otaq resursdur. Cədvəl, canlı oyun və kassa eyni gün qaydalarındadır. Sadə saat sayğacından fərqli olaraq rezerv tarixçəsi və sayım da var.',
        ],
      },
    ],
    faq: [
      {
        q: 'VIP otaq və adi masa birlikdə ola bilər?',
        a: 'Bəli. Hər ikisi eyni cədvəl və kassa axınındadır.',
      },
      {
        q: 'Yalnız taymer kifayətdirmi?',
        a: 'Kiçik zalda bəlkə; rezerv, anbar və növbə bağlanışı lazımdırsa, tam panel daha az xəta verir.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında bilyard seçin və masa sayını yazın.',
      },
    ],
    relatedSolutions: ['billiards', 'gaming', 'karaoke', 'pos'],
    ctaTitle: 'Bilyard üçün demo',
    ctaBody: 'Masa sayınızı yazın — canlı oyun axını göstəririk.',
  },
  {
    slug: 'room-lounge-management',
    shortTitle: 'Otaqlı launj idarəetməsi',
    h1: 'Otaqlı launj necə idarə olunur?',
    seoTitle: 'Otaqlı launj idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Otaqlı launj: VIP otaq rezervasiyası, sessiya, əlavə satış və kassa. Launj otaq proqramı izahı.',
    keywords: [
      'otaqlı launj proqramı',
      'launj otaq rezervasiya',
      'vip otaq rezervasiya',
      'launj idarəetmə sistemi',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-08-13',
    intro:
      'Otaqlı launj açıq kafe deyil: qonaq otaq götürür, sessiya uzana bilər, içki və qəlyanaltı əlavə olunur. İdarəetmə otaq cədvəlini canlı sessiya və kassa ilə birləşdirməlidir.',
    sections: [
      {
        id: 'unit',
        title: 'Niyə vahid otaqdır?',
        paragraphs: [
          'Açıq masa axını otağın qapalı sessiyasını vermir. Bir otaq eyni vaxtda iki qrupa verilməməlidir; status lövhədə yox, cədvəldə görünməlidir.',
        ],
      },
      {
        id: 'flow',
        title: 'Gündəlik axın necədir?',
        paragraphs: [
          'Rezerv otağa yazılır. Qonaq gələndə sessiya açılır. Əlavə vaxt və məhsul eyni qeyddə qalır. Günün sonunda kassa otaq doluluğu ilə uyğun gəlməlidir.',
        ],
      },
      {
        id: 'mix',
        title: 'Launj + karaoke və ya bilyard',
        paragraphs: [
          'Çox məkan qarışıqdır. Eyni panel otaq, masa və stansiyanı bir kassada saxlayır — iki proqram yığmaq lazım olmur.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo otaqlı launj üçün nə edir?',
        paragraphs: [
          'Otaq karaoke ilə eyni resurs məntiqində qurulur. Cədvəl, canlı izləmə, kassa və müştəri tarixçəsi bir paneldədir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Açıq zal da eyni sistemdə ola bilər?',
        a: 'Bəli. Masa və otaq eyni cədvəl və kassadadır.',
      },
      {
        q: 'Bu, kouorkinq proqramıdır?',
        a: 'Xeyr. Fokus saatla/sessiya ilə işləyən otaqlı əyləncə məkanlarıdır — PS, karaoke, bilyard, antikafe, launj.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında otaqlı launj seçin və otaq sayını yazın.',
      },
    ],
    relatedSolutions: ['lounge', 'karaoke', 'antikafe', 'reservations'],
    ctaTitle: 'Otaqlı launj üçün demo',
    ctaBody: 'Otaq sayınızı yazın — rezervasiya və canlı axını göstəririk.',
  },
{
    slug: 'antikafe-management-system',
    shortTitle: 'Antikafe idarəetməsi',
    h1: 'Antikafe idarəetmə sistemi nədir?',
    seoTitle: 'Antikafe idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Antikafe idarəetmə sistemi nədir, saatla ödəniş, rezervasiya və kassa necə birləşir — praktiki izah. Antikafe proqramı seçimi.',
    keywords: [
      'antikafe idarəetmə sistemi nədir',
      'antikafe proqramı',
      'antikafe rezervasiya necə aparılır',
      'saatla ödəniş sistemi',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Antikafe idarəetmə sistemi saatla ödənişli məkanın gündəlik işini — masa və otaq rezervasiyası, canlı sessiya, məhsul satışı, kassa və bəzən anbar — bir paneldə aparmaq üçündür. Bu, yalnız saat sayan timer və ya yalnız kassa deyil; məqsəd lövhə, messencer və Excel-i eyni iş gününə bağlamaqdır.',
    sections: [
      {
        id: 'what',
        title: 'Antikafe biznes modeli nədir?',
        paragraphs: [
          'Antikafelərdə qonaq adətən vaxt üçün ödəyir: masa, divan küncü, otaq və ya bəzən PC stansiyası. Çay, qəlyanaltı və içkilər əlavə gəlir gətirir. Axın tez dəyişir — rezervsiz qonaq, telefon rezervi və gecə saatları eyni resurslarda toqquşur.',
          'Ona görə antikafe proqramı yalnız “neçə saat oturdu?” sualını deyil, hansı masa boşdur, rezerv nə vaxtdır və gün necə bağlanır suallarını da cavablamalıdır.',
        ],
      },
      {
        id: 'modules',
        title: 'Sistem adətən nəyi əhatə edir?',
        paragraphs: ['Praktik ehtiyaclar oxşar modullardan ibarət olur:'],
        bullets: [
          'Masa və otaq rezervasiyası (cədvəl, köçürmə, ləğv)',
          'Canlı sessiya (aktiv yer, vaxt, məhsul, ödəniş)',
          'Kassa axını (növbə, hesabat, sayım)',
          'Məhsul kataloqu və anbar (çay, qəlyanaltı)',
          'Müştəri qeydləri və sadə statistika',
          'İşçi icazələri',
        ],
      },
      {
        id: 'hourly',
        title: 'Saatla ödəniş necə idarə olunmalıdır?',
        paragraphs: [
          'Saat sayan ayrı proqram rezervasiya tarixçəsi və kassa sayımını verməyə bilər. Yaxşı axında rezerv canlı sessiyaya keçir; vaxt bitəndə uzatma və ödəniş eyni qeyddə qalır. Nağd, bank və POS ayrı izlənir — gecə növbəsində qarışıqlıq azalır.',
        ],
      },
      {
        id: 'vs-gaming',
        title: 'Antikafe ilə gaming club fərqi nədir?',
        paragraphs: [
          'Gaming club-da fokus tez-tez PC/console stansiyasındadır; antikafedə masa, otaq və lounge atmosferi ön plandadır. Amma texniki ehtiyac eynidir: resurs cədvəli + canlı sessiya + kassa. Bir panel hər iki tip zonanı idarə edə bilər.',
        ],
      },
      {
        id: 'choose',
        title: 'Antikafe proqramı seçərkən nəyə baxmaq lazımdır?',
        paragraphs: [
          'Rezervdən ödənişə qədər bir axın varmı? Rezervsiz satış eyni kataloqdan gedirmi? Keçmiş gün və sayım saxlanırmı? Panel AZ / EN / RU dillərindədirmi? Qiymət şəffafdırmı?',
          'Marketinq siyahısından çox real gecə növbənizi yoxlayın — xüsusilə masa/otaq sayı artanda.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo antikafe üçün necə uyğundur?',
        paragraphs: [
          'Heselo məkan idarəetmə sistemidir: cədvəl, canlı izləmə, kassa, məhsullar və anbar eyni paneldədir. Antikafe, gaming club və bilyard eyni resurs məntiqində qurula bilər. Ödəniş qalıqları serverdə hesablanır.',
          'Antikafe yönümlü kommersiya səhifəmiz və aşağıdakı rezervasiya/kassa həllərinə keçid var.',
        ],
      },
    ],
    faq: [
      {
        q: 'Antikafe üçün ayrıca “timer proqramı” kifayət edirmi?',
        a: 'Kiçik miqyasda bəlkə; amma rezerv, anbar və kassa sayımı lazımdırsa, tam məkan sistemi daha az xəta verir.',
      },
      {
        q: 'Otaq rezervasiyası dəstəklənirmi?',
        a: 'Bəli. Otaq resurs kimi cədvəldə idarə oluna bilər — karaoke VIP otaqları ilə eyni məntiq.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasını doldurun — masa/otaq sayını və tipik gün axınınızı qeyd edin.',
      },
    ],
    relatedSolutions: ['antikafe', 'gaming', 'reservations', 'pos'],
    ctaTitle: 'Antikafe axını üçün demo',
    ctaBody: 'Rezervasiyadan kassa bağlanışına qədər göstəririk.',
  },
  {
    slug: 'playstation-club-software',
    shortTitle: 'PS klub proqramı',
    h1: 'PlayStation klub proqramı seçərkən nəyə baxmaq lazımdır?',
    seoTitle: 'PlayStation klub proqramı — nə olmalıdır? | Heselo bələdçisi',
    seoDescription:
      'PS və konsol klub proqramı: stansiya rezervasiyası, canlı sessiya, kassa. PlayStation klub software seçimi — praktiki checklist.',
    keywords: [
      'playstation klub proqramı',
      'ps klub proqramı',
      'konsol klub idarəetmə',
      'playstation club software',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'PlayStation klub proqramı yalnız taymer deyil. Telefon rezervi, “hansı PS boşdur?”, oyun bitəndə uzatma, qəlyanaltı və gecə kassası eyni axında olmalıdır. Bu yazı satış səhifəsi deyil — seçim meyarlarıdır.',
    sections: [
      {
        id: 'why',
        title: 'PS klubda proqram niyə lazımdır?',
        paragraphs: [
          'Konsol klubunda axın saatladır. Lövhə gecikir, WhatsApp rezervi canlı statusu görmür, uzatma ayrı vərəqdə yazılır. Növbə bağlananda “kim nə oynayıb?” sualı Excel-ə qayıdır.',
          'Yaxşı proqram stansiyanı resurs kimi saxlayır: rezerv → canlı sessiya → ödəniş eyni qeyddə.',
        ],
      },
      {
        id: 'must-have',
        title: 'Minimum nə olmalıdır?',
        paragraphs: ['Praktik checklist:'],
        bullets: [
          'PS / konsol / PC stansiyalarını ayrı resurs kimi qurmaq',
          'Cədvəldə rezerv, köçürmə və ləğv',
          'Canlı sessiya: vaxt, uzatma, ödəniş',
          'Sürətli satış (snack/içki) eyni kataloqdan',
          'Kassa növbəsi və sayım',
          'İşçi icazələri (resepsiya vs sahib)',
        ],
      },
      {
        id: 'console',
        title: 'Konsol klub (console club) fərqi varmı?',
        paragraphs: [
          'Axtarışda “console club” və “PS klub” çox vaxt eyni ehtiyacı göstərir. Fərq brenddə deyil — stansiya tipindədir. Sistem PS5, digər konsol və PC-ni eyni cədvəldə idarə edə bilməlidir.',
          'Ümumi “oyun klubu idarəetmə sistemi nədir?” izahı ayrıca bələdçidədir; burada fokus proqram seçiminədir.',
        ],
      },
      {
        id: 'timer',
        title: 'Yalnız taymer kifayət edirmi?',
        paragraphs: [
          'Kiçik zalda bəlkə. Amma rezerv tarixçəsi, müştəri kartı, anbar və kassa sayımı lazımdırsa, taymer gecə növbəsini həll etmir.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bu checklist-ə necə oturur?',
        paragraphs: [
          'Heselo stansiyanı cədvəl və canlı izləmədə eyni resurs kimi saxlayır. PS, konsol və PC bir paneldə ola bilər. Kommersiya səhifəsi: oyun/PS klub həlli.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız PlayStation, yoxsa digər konsol da?',
        a: 'Hər ikisi. Stansiya tipi fərqli ola bilər; cədvəl və kassa eynidir.',
      },
      {
        q: 'PC stansiyaları eyni proqramda ola bilər?',
        a: 'Bəli. Fərqli resurslar eyni növbəyə düşür.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında oyun klubu / PS seçin və stansiya sayını yazın.',
      },
    ],
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'PS klub axını üçün demo',
    ctaBody: 'Stansiya və konsol sayınızı yazın — rezerv və canlı sessiyanı göstəririk.',
  },
  {
    slug: 'billiards-table-booking',
    shortTitle: 'Bilyard masa bronu',
    h1: 'Bilyard masa rezervasiyası və cədvəl necə işləməlidir?',
    seoTitle: 'Bilyard masa rezervasiyası və cədvəl sistemi | Heselo bələdçisi',
    seoDescription:
      'Bilyard booking və scheduling: masa bronu, cədvəl, canlı oyun və kassa. Bilyard masa rezervasiyası praktiki izah.',
    keywords: [
      'bilyard masa rezervasiya',
      'bilyard cədvəl sistemi',
      'billiards booking system',
      'billiards scheduling',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'Bilyard booking sistemi yalnız “masa yazıldı” demək deyil. Cədvəl (scheduling), canlı oyun və ödəniş ayrılıbsa, lövhə ilə telefon toqquşur. Bu yazı bron + cədvəl axınını izah edir — ümumi “klub necə idarə olunur” bələdçisindən daradır.',
    sections: [
      {
        id: 'booking',
        title: 'Masa rezervasiyası nəyi əhatə etməlidir?',
        paragraphs: [
          'Rezerv: tarix/saat, masa və ya VIP otaq, müddət, müştəri əlaqəsi. Köçürmə və ləğv tarixçədə qalmalıdır — əks halda gecə növbəsi “kim yazıb?” sualında ilişir.',
        ],
      },
      {
        id: 'schedule',
        title: 'Cədvəl (scheduling) niyə ayrı alət olmamalıdır?',
        paragraphs: [
          'Bir cədvəl bütün masaları göstərməlidir. VIP otaq ayrıca Excel-dədirsə, eyni vaxta iki bron düşür. Scheduling və booking eyni paneldə olduqda boş masa real vaxtda görünür.',
        ],
      },
      {
        id: 'live',
        title: 'Bron canlı oyuna necə keçir?',
        paragraphs: [
          'Qonaq gələndə sessiya açılır. Pauza, uzatma və əlavə içki eyni qeyddədir. Qiymət masa tipi və müddətə görə hesablanır; kassa növbəni bağlayır.',
        ],
      },
      {
        id: 'mistakes',
        title: 'Tez rast gəlinən səhvlər',
        paragraphs: ['Bunlardan qaçın:'],
        bullets: [
          'Telefon qeydi + lövhə (iki mənbə)',
          'Yalnız taymer, rezerv yox',
          'VIP otaq ayrı “sistem”',
          'Ödəniş və oyun vaxtı ayrı vərəq',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo-da masa bronu necə görünür?',
        paragraphs: [
          'Hər masa və otaq resursdur. Cədvəl, canlı oyun və kassa eyni gün qaydalarındadır. Kommersiya səhifəsi: bilyard klubu həlli.',
        ],
      },
    ],
    faq: [
      {
        q: 'Booking ilə scheduling eyni şeydir?',
        a: 'Booking konkret rezervdir; scheduling cədvəlin ümumi görünüşüdür. İkisi bir paneldə olmalıdır.',
      },
      {
        q: 'Otaq və masa birlikdə ola bilər?',
        a: 'Bəli. Hər ikisi eyni cədvəl və kassadadır.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında bilyard seçin və masa sayını yazın.',
      },
    ],
    relatedSolutions: ['billiards', 'reservations', 'gaming', 'pos'],
    ctaTitle: 'Bilyard bron axını üçün demo',
    ctaBody: 'Masa sayınızı yazın — cədvəl və canlı oyunu göstəririk.',
  },
  {
    slug: 'karaoke-booking-system',
    shortTitle: 'Karaoke bron sistemi',
    h1: 'Karaoke rezervasiya sistemi seçərkən nəyə baxmaq lazımdır?',
    seoTitle: 'Karaoke rezervasiya sistemi — seçim meyarları | Heselo bələdçisi',
    seoDescription:
      'Karaoke booking system: otaq bronu, sessiya, əlavə satış və kassa. Karaoke rezervasiya sistemi checklist — satış səhifəsi deyil.',
    keywords: [
      'karaoke rezervasiya sistemi',
      'karaoke booking system',
      'karaoke otaq bron proqramı',
      'karaoke idarəetmə seçimi',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-07',
    intro:
      'Karaoke rezervasiya sistemi yalnız onlayn forma deyil. Otaq dolanda sessiya, içki sifarişi və ödəniş eyni axında qalmalıdır. “Otaqlar necə rezerv edilir?” bələdçisi axını izah edir; burada fokus — sistemi seçərkən nə yoxlamaqdır.',
    sections: [
      {
        id: 'form-vs-system',
        title: 'Bron forması ilə idarəetmə sistemi fərqi',
        paragraphs: [
          'Veb forma rezerv toplaya bilər, amma ofisiant otağın içindəki axını görmür. İdarəetmə sistemi rezerv → canlı otaq sessiyası → kassa zəncirini saxlayır.',
        ],
      },
      {
        id: 'checklist',
        title: 'Seçim checklist',
        paragraphs: ['Soruşun:'],
        bullets: [
          'Bir neçə otaq eyni cədvəldə görünürmü?',
          'Sessiya uzadılsa ödəniş eyni qeydə düşürmü?',
          'Əvvəlcədən sifariş / etiket varmı?',
          'Kassa növbə bağlanışı varmı?',
          'Launj və ya bilyard otaqları eyni paneldə ola bilərmi?',
        ],
      },
      {
        id: 'peak',
        title: 'Pik saatlarda nə sınanmalıdır?',
        paragraphs: [
          'Cümə-şənbə axşamı bir neçə otaq eyni anda dəyişir. Demo-da pik ssenarini göstərin: köçürmə, ləğv, gecikən qonaq, əlavə saat.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo karaoke üçün nə verir?',
        paragraphs: [
          'Otaq resurs kimi cədvəl və canlı izləmədədir. Məhsul və ödəniş eyni sessiyadadır. Kommersiya səhifəsi: karaoke həlli.',
        ],
      },
    ],
    faq: [
      {
        q: 'Yalnız bron saytı kifayət edirmi?',
        a: 'Rezerv toplamaq üçün bəlkə; otaq sessiyası və kassa lazımdırsa, tam panel lazımdır.',
      },
      {
        q: 'VIP və adi otaq fərqlənə bilərmi?',
        a: 'Bəli. Hər otaq ayrı resurs və tarifi ola bilər.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Əlaqə formasında karaoke seçin və otaq sayını yazın.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke rezervasiya demo',
    ctaBody: 'Otaq sayınızı yazın — bron və canlı otaq axını göstəririk.',
  },
  {
    slug: 'club-pos-vs-excel',
    shortTitle: 'Excel əvəzinə panel',
    h1: 'Klubda Excel və WhatsApp niyə kifayət etmir?',
    seoTitle: 'Excel və WhatsApp əvəzinə klub paneli | Heselo',
    seoDescription:
      'WhatsApp bron, Excel kassa və dəftər niyə qarışır — ucuz klub paneli nə verir. Excel əvəzinə idarəetmə bələdçisi.',
    keywords: [
      'klub excel idarəetmə',
      'whatsapp rezervasiya problemi',
      'whatsapp bron əvəzinə',
      'excel kassa əvəzinə',
      'dəftər əvəzinə proqram',
      'ucuz klub paneli',
      'klub kassa proqramı',
      'məkan idarəetmə paneli',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-17',
    intro:
      'Bir çox klub günü Excel cədvəli, WhatsApp qrupu və dəftərlə başlayır. Kiçik miqyasda işləyir; masa/otaq sayı və növbə sayı artanda rezerv itir, kassa uzanır. Bu yazı ağrı nöqtələrini, “ucuz alternativ” axtarışını və panelin nəyi dəyişdiyini izah edir.',
    sections: [
      {
        id: 'pain',
        title: 'Excel, WhatsApp və dəftər harada sınır?',
        paragraphs: [
          'Rezerv mesajda qalır, lövhə gecikir, ödəniş vərəqi ayrıdır. Eyni masa iki dəfə yazılır. Gecə növbəsi “kim nə satıb?” sualında 30–40 dəqiqə itirir.',
          'WhatsApp bron “ucuz” görünür, amma axtarış, təsdiq və no-show izləmə yoxdur — növbə sonunda hesabat yenə Excel-ə qayıdır.',
        ],
      },
      {
        id: 'signals',
        title: 'Panelə keçmək üçün siqnallar',
        paragraphs: ['Bunlardan ikisi varsa, vərəq kifayət etmir:'],
        bullets: [
          'Gündə 10+ rezerv və ya eyni anda 5+ aktiv yer',
          'İki növbə / iki işçi eyni resurslara toxunur',
          'Snack/içki satışı kassa ilə uyğun gəlmir',
          'Sahib ertəsi gün hesabatı Excel-dən yığır',
        ],
      },
      {
        id: 'panel',
        title: 'Panel nəyi birləşdirir?',
        paragraphs: [
          'Cədvəl, canlı sessiya, sürətli satış və kassa eyni gün qaydalarındadır. Ödəniş qalıqları serverdə hesablanır — “özünüz cəmləyin” yoxdur.',
        ],
      },
      {
        id: 'not-erp',
        title: 'Bu, ağır ERP və ya restoran POS demək deyil',
        paragraphs: [
          'Klub paneli iiko/Clopos tipli restoran şəbəkəsi ERP-si deyil. Məqsəd sadədir: bron itməsin, masa/otaq statusu doğru olsun, növbə bağlansın. Mətbəx/KDS lazımdırsa, restoran POS seçin.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bu boşluğu necə doldurur?',
        paragraphs: [
          'Heselo məkan paneli kimi qurulub: rezervasiya, canlı zal, kassa və anbar. 25 AZN/aydan başlayan klub tarifləri Excel/WhatsApp-dan bahadır, amma itən rezerv və gecə hesabatından ucuz başa gəlir. Qiymət və digər alternativ bələdçilərinə keçid aşağıdadır.',
        ],
      },
    ],
    faq: [
      {
        q: 'Excel-i tam atmaq lazımdır?',
        a: 'Gündəlik rezerv və kassa üçün bəli. Aylıq maliyyə Excel-də qala bilər.',
      },
      {
        q: 'WhatsApp bron ucuz deyilmi?',
        a: 'Mesaj pulsuzdur; itən bron, qarışıq ödəniş və 40 dəqiqəlik növbə hesabatı isə bahadır. Panel bunu bağlayır.',
      },
      {
        q: 'Kiçik klub üçün erkəndir?',
        a: 'Bir masa/iki otaqda bəlkə; böyümə planı varsa, erkən keçid daha ucuz başa gəlir.',
      },
      {
        q: 'Demo necə alınır?',
        a: 'Məkan tipini yazın — sizin axına uyğun ekranı göstəririk.',
      },
    ],
    relatedSolutions: ['pos', 'reservations', 'gaming', 'inventory'],
    ctaTitle: 'Excel-siz axın üçün demo',
    ctaBody: 'Məkan tipi və masa/otaq sayını yazın — paneli 15 dəqiqədə göstəririk.',
  },
  ...comparisonGuides('az'),
]
