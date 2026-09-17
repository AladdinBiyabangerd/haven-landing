import type { SolutionCopy, SolutionsHubCopy } from './types'

export const solutionsHubAz: SolutionsHubCopy = {
  eyebrow: 'Biznes həlləri',
  h1: 'Hansı məkan tipinə uyğunsunuz?',
  intro:
    'Heselo otaq, stansiya və masa rezervasiyasını, canlı sessiyanı və kassanı bir paneldə birləşdirir. Aşağıdakı səhifələr oyun/PS klubu, karaoke, bilyard, antikafe və otaqlı launj axınına görə yazılıb — tipinizi seçin.',
  seoTitle: 'Məkan tiplərinə görə həllər — PS, karaoke, bilyard | Heselo',
  seoDescription:
    'Hər tipə ayrı səhifə: oyun/PS klubu, karaoke, bilyard, antikafe, otaqlı launj — rezervasiya, kassa və anbar. Pulsuz demo.',
  keywords: [
    'oyun klubu proqramı',
    'ps klub proqramı',
    'karaoke otaq rezervasiya',
    'bilyard klubu proqramı',
    'antikafe proqramı',
  ],
  cardCta: 'Ətraflı oxu',
  primaryTitle: 'Əsas məkan tipləri',
  featuresTitle: 'Funksiyalar',
}

export const solutionsAz: SolutionCopy[] = [
  {
    slug: 'billiards',
    shortTitle: 'Bilyard',
    h1: 'Bilyard klubu idarəetmə sistemi',
    seoTitle: 'Bilyard klubu proqramı — masa rezervasiyası və cədvəl | Heselo',
    seoDescription:
      'Bilyard masa və otaq rezervasiyası, cədvəl, canlı oyun sessiyası və kassa bir paneldə. Bilyard klubu proqramı — demo istəyin.',
    keywords: [
      'bilyard klubu proqramı',
      'bilyard masa rezervasiya',
      'bilyard cədvəl sistemi',
      'bilyard idarəetmə sistemi',
    ],
    intro:
      'Bilyard klubunda masa saatla işləyir: rezerv, cədvəl, canlı oyun, pauza və ödəniş bir-birinə bağlıdır. Bilyard idarəetmə sistemi cədvəli və canlı sessiyanı ayırmamalıdır — Heselo masaları resurs kimi eyni paneldə idarə edir.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Bilyard salonları, qarışıq lounge + bilyard məkanları və masa/otaq rezervasiyası ilə vaxt üzrə ödəniş aparan klublar üçün.',
    problemsTitle: 'Bilyard klublarında tez rast gəlinən problemlər',
    problems: [
      'Hansı masa boşdur — lövhə və telefon uyğun gəlmir',
      'Oyun vaxtı və əlavə məhsul ayrı qeyd olunur',
      'Gecə növbəsində kassa qarışır',
      'VIP otaq və adi masa eyni cədvəldə görünmür',
    ],
    howTitle: 'Bilyard klubu proqramı kimi necə işləyir?',
    howBody:
      'Masaları və otaqları cədvəldə rezerv edirsiniz. Oyun başlayanda canlı izləmədə sessiya açılır; məhsul və ödəniş eyni yerdədir. Qiymət hesablama resurs və müddət qaydalarına görə işləyir. Kassa növbəni bağlayır.',
    featuresTitle: 'Bilyard üçün uyğun funksiyalar',
    features: [
      {
        title: 'Masa və otaq cədvəli',
        desc: 'Bütün masalar eyni cədvəldə — rezerv, köçürmə və ləğv.',
      },
      {
        title: 'Canlı oyun sessiyası',
        desc: 'Aktiv masa statusu, əlavə satış və ödəniş.',
      },
      {
        title: 'Vaxta uyğun qiymət',
        desc: 'Tarif və resurs qaydaları ilə qiymət təxmini — panel ilə eyni məntiq.',
      },
      {
        title: 'Kassa və müştərilər',
        desc: 'Növbə, hesabat və müştəri tarixçəsi.',
      },
    ],
    differTitle: 'Sadəcə “saat sayğacı” deyil',
    differBody:
      'Yalnız vaxt sayan alətlər rezervasiya, anbar və kassa sayımını həll etmir. Heselo bilyard axınını məkanın digər satışları ilə eyni gün qaydalarına bağlayır.',
    faq: [
      {
        q: 'Bilyard masaları ayrıca resurs kimi qurulur?',
        a: 'Bəli. Hər masa və ya otaq resurs kimi təyin olunur; cədvəl və canlı izləmə eyni məlumatı paylaşır.',
      },
      {
        q: 'Otaq və masa eyni sistemdə ola bilər?',
        a: 'Bəli. VIP otaq və adi masa eyni cədvəl və kassa axınındadır.',
      },
    ],
    related: ['gaming', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Bilyard klubu üçün demo',
    ctaBody: 'Masa sayınızı və tipik növbənizi bizə yazın — canlı axını göstəririk.',
  },
  {
    slug: 'karaoke',
    shortTitle: 'Karaoke',
    h1: 'Karaoke idarəetmə sistemi',
    seoTitle: 'Karaoke otaq rezervasiyası və idarəetmə sistemi | Heselo',
    seoDescription:
      'Karaoke otaq rezervasiyası, canlı sessiya, kassa və əlavə satış bir axında. Karaoke məkanı üçün proqram — pulsuz demo.',
    keywords: [
      'karaoke otaq rezervasiya',
      'karaoke idarəetmə sistemi',
      'karaoke proqramı',
      'restoran pos karaoke',
      'dine alternativ karaoke',
    ],
    intro:
      'Karaoke məkanında əsas vahid otaqdır: rezervasiya, sessiya müddəti, əlavə içki/yemək və ödəniş. Karaoke idarəetmə sistemi otaq cədvəlini canlı sessiya və kassa ilə birləşdirməlidir. Restoran POS (Dine, Clopos) masa/QR üçündür — otaq-vaxt üçün bu axın daha uyğundur.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Otaq əsaslı karaoke klubları, launj + karaoke və bir neçə otağı eyni axında idarə edən məkanlar üçün.',
    problemsTitle: 'Karaoke məkanlarında tipik problemlər',
    problems: [
      'Otaq rezervləri telefon qeydlərində itir',
      'Sessiya uzandıqda əlavə vaxt və məhsul ayrı yazılır',
      'Bir neçə otağın eyni vaxtda statusu qarışır',
      'Günün sonunda kassa ilə otaq doluluğu uyğun gəlmir',
    ],
    howTitle: 'Heselo karaoke-də necə kömək edir?',
    howBody:
      'Otaqları cədvəldə rezerv edirsiniz. Qonaq gələndə sessiya canlı izləmədə açılır; məhsul və ödəniş eyni axındadır. Bir neçə otaq eyni lövhədə görünür. Kassa növbə və hesabat ilə günü bağlayır.',
    featuresTitle: 'Karaoke üçün əsas funksiyalar',
    features: [
      {
        title: 'Otaq rezervasiyası',
        desc: 'Cədvəl, rezerv siyahısı, köçürmə və ləğv.',
      },
      {
        title: 'Canlı otaq sessiyası',
        desc: 'Status, məhsul əlavəsi, qəbz və ödəniş.',
      },
      {
        title: 'Müştəri tarixçəsi',
        desc: 'Təkrar gələn qonaqlar üçün kart və ziyarət tarixçəsi.',
      },
      {
        title: 'Kassa və statistika',
        desc: 'Növbə bağlanışı və ödəniş kəsmləri.',
      },
    ],
    differTitle: 'Yalnız bron forması kifayət etmir',
    differBody:
      'Onlayn bron səhifəsi otağın içindəki axını idarə etmir. Heselo rezervdən ödənişə qədər eyni paneldə saxlayır — ofisiant və kassa eyni gün qaydaları ilə işləyir.',
    faq: [
      {
        q: 'Karaoke otaqları masa kimi qurulur?',
        a: 'Otaqlar ayrı resurs kimi təyin olunur; cədvəl və canlı izləmə otaq statusunu göstərir.',
      },
      {
        q: 'Əvvəlcədən sifariş dəstəklənirmi?',
        a: 'Rezervasiya formasında etiket və əvvəlcədən sifariş sahələri var — panel ilə eyni məntiq.',
      },
    ],
    related: ['reservations', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Karaoke məkanı üçün demo',
    ctaBody: 'Otaq sayınızı bizə yazın — rezervasiya və canlı axını göstəririk.',
  },
  {
    slug: 'gaming',
    shortTitle: 'Oyun klubu',
    h1: 'Oyun klubu (PS) idarəetmə sistemi',
    seoTitle: 'Oyun klubu proqramı və PS klub idarəetmə sistemi | Heselo',
    seoDescription:
      'PS, konsol və PC stansiya rezervasiyası, canlı sessiya, kassa və anbar — oyun klubu proqramı bir paneldə. Pulsuz demo.',
    keywords: [
      'oyun klubu proqramı',
      'ps klub proqramı',
      'playstation klub idarəetmə',
      'konsol klub proqramı',
      'iiko alternativ klub',
      'playstation kafe proqramı',
    ],
    intro:
      'Oyun və PS klublarında stansiya və ya masa saatla dolur; rezerv, canlı oyun və kassa eyni vaxtda işləyir. Oyun klubu idarəetmə sistemi resurs cədvəlini canlı sessiya ilə birləşdirməlidir — lövhə və taymer kifayət etmir. iiko və ya sadə PS taymer axtaranlar üçün də otaq-vaxt axını burada birləşir.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'PlayStation klubları, konsol lounge-lar, PC club və qarışıq oyun məkanları — stansiya/masa rezervasiyası, canlı sessiya və kassa lazım olan yerlər üçün.',
    problemsTitle: 'Oyun klublarında tipik problemlər',
    problems: [
      'Hansı stansiya boşdur — lövhə gecikir',
      'Vaxt bitəndə ödəniş və uzatma ayrı qeyd olunur',
      'Snack və içki satışı kassa ilə uyğun gəlmir',
      'Gecə növbəsində hesab-kitab uzanır',
    ],
    howTitle: 'Heselo oyun klubunda necə işləyir?',
    howBody:
      'Stansiya və ya masaları resurs kimi qurursunuz. Rezerv cədvəldədir; oyun başlayanda canlı sessiya açılır. Məhsul satışı və ödəniş eyni axındadır. Kassa növbəni bağlayır; anbar snack/içki qalıqlarını saxlayır.',
    featuresTitle: 'Oyun klubu üçün funksiyalar',
    features: [
      {
        title: 'Resurs cədvəli',
        desc: 'Stansiya/masa rezervasiyası, köçürmə və ləğv.',
      },
      {
        title: 'Canlı sessiya',
        desc: 'Aktiv yerlər, status və ödəniş.',
      },
      {
        title: 'Sürətli satış',
        desc: 'Bron olmadan snack/içki satışı.',
      },
      {
        title: 'Kassa və anbar',
        desc: 'Növbə, hesabat və qalıq izləmə.',
      },
    ],
    differTitle: 'Yalnız “timer” proqramından fərqi',
    differBody:
      'Sadə timer rezervasiya tarixçəsi, müştəri kartı, anbar və kassa sayımını vermir. Heselo klubun gününü bir məkan paneli kimi aparır.',
    faq: [
      {
        q: 'PC və konsol eyni sistemdə ola bilər?',
        a: 'Bəli. Fərqli resurslar eyni cədvəl və kassa axınında idarə olunur.',
      },
      {
        q: 'İcazələr necədir?',
        a: 'İşçilərə səhifə və düymə səviyyəsində icazə verilir; vacib əməliyyatlarda qoruma kodu ola bilər.',
      },
    ],
    related: ['billiards', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Oyun klubu üçün demo',
    ctaBody: 'Stansiya və PS sayınızı bizə yazın — rezervasiya və canlı axını göstəririk.',
  },
  {
    slug: 'antikafe',
    shortTitle: 'Antikafe',
    h1: 'Antikafe idarəetmə sistemi',
    seoTitle: 'Antikafe idarəetmə sistemi və antikafe proqramı | Heselo',
    seoDescription:
      'Antikafe proqramı: masa/otaq rezervasiyası, saatla ödəniş, canlı sessiya, kassa və anbar. Saat əsaslı məkanlar üçün — pulsuz demo.',
    keywords: [
      'antikafe idarəetmə sistemi',
      'antikafe proqramı',
      'antikafe rezervasiya',
      'saatla ödəniş sistemi',
      'antikafe kassa proqramı',
    ],
    intro:
      'Antikafelərdə qonaq saatla oturur: masa, otaq və ya stansiya rezervi, çay/qəlyanaltı satışı və ödəniş eyni axında olmalıdır. Antikafe idarəetmə sistemi cədvəli canlı sessiya və kassa ilə birləşdirir — lövhə və kağız qeydləri əvəz edir.',
    whoTitle: 'Hansı antikafelər üçün?',
    whoBody:
      'Saatla ödənişli masa və otaq, PC/stol oyunu zonası, çay və qəlyanaltı satışı olan antikafe, time-cafe və oxşar lounge məkanları üçün. Bir neçə zal və ya otaq eyni paneldə idarə olunur.',
    problemsTitle: 'Antikafelərdə tipik problemlər',
    problems: [
      'Hansı masa/otaq boşdur — resepsiya gecikir',
      'Saat bitəndə uzatma və ödəniş ayrı qeyd olunur',
      'Rezervsiz qonaq ilə rezerv eyni resursda toqquşur',
      'Günün sonunda kassa ilə satış uyğun gəlmir',
    ],
    howTitle: 'Heselo antikafedə necə işləyir?',
    howBody:
      'Masa, otaq və ya stansiyaları resurs kimi qurursunuz. Rezerv cədvəldədir; qonaq gələndə canlı sessiya açılır. Məhsul (çay, qəlyanaltı) əlavəsi və ödəniş eyni axındadır. Kassa növbəni bağlayır; anbar qalıqları izlənir.',
    featuresTitle: 'Antikafe üçün funksiyalar',
    features: [
      {
        title: 'Saatla rezervasiya',
        desc: 'Masa və otaq cədvəli, köçürmə, ləğv və tarixçə.',
      },
      {
        title: 'Canlı sessiya',
        desc: 'Aktiv yerlər, status, məhsul əlavəsi və ödəniş.',
      },
      {
        title: 'Sürətli satış',
        desc: 'Rezervsiz çay/qəlyanaltı satışı eyni katalogdan.',
      },
      {
        title: 'Kassa və anbar',
        desc: 'Növbə, hesabat, sayım və qalıq izləmə.',
      },
    ],
    differTitle: 'Sadə timer və ya Excel-dən fərqi',
    differBody:
      'Yalnız saat sayan proqram rezervasiya tarixçəsi, müştəri kartı, anbar və kassa sayımını vermir. Heselo antikafenin gününü bir məkan paneli kimi aparır — gaming club və bilyard axınları ilə eyni məntiqdə. “Antikafe idarəetmə sistemi nədir?” sualına bələdçimizdə cavab var.',
    faq: [
      {
        q: 'Antikafe ilə gaming club eyni sistemdə idarə oluna bilər?',
        a: 'Bəli. Fərqli resurs tipləri (masa, otaq, PC stansiyası) eyni cədvəl və kassa axınında qurula bilər.',
      },
      {
        q: 'Saatla ödəniş necə aparılır?',
        a: 'Canlı sessiyada vaxt və məhsul əlavələri toplanır; ödəniş serverdə hesablanır və növbəyə düşür.',
      },
      {
        q: 'Demo necə əldə edilir?',
        a: 'Əlaqə formasını doldurun — masa/otaq sayını və iş axınınızı qeyd edin.',
      },
    ],
    related: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Antikafe üçün demo istəyin',
    ctaBody: 'Masa və otaq sayınızı bizə yazın — rezervasiyadan kassa bağlanışına qədər göstəririk.',
  },
  {
    slug: 'lounge',
    shortTitle: 'Otaqlı launj',
    h1: 'Otaqlı launj idarəetmə sistemi',
    seoTitle: 'Otaqlı launj proqramı və otaq rezervasiyası | Heselo',
    seoDescription:
      'Otaqlı launj üçün proqram: VIP otaq rezervasiyası, canlı sessiya, kassa və əlavə satış. Otaq əsaslı launj — pulsuz demo.',
    keywords: [
      'otaqlı launj proqramı',
      'launj otaq rezervasiya',
      'launj idarəetmə sistemi',
      'vip otaq rezervasiya',
    ],
    intro:
      'Otaqlı launjda əsas vahid otaqdır: rezervasiya, sessiya müddəti, içki/qəlyanaltı və ödəniş. Launj idarəetmə sistemi otaq cədvəlini canlı sessiya və kassa ilə birləşdirməlidir — telefon qeydləri və lövhə kifayət etmir.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'VIP otaqlı launjlar, otaq kirayəsi olan klub-launjlar və karaoke/bilyard ilə qarışıq otaq məkanları üçün. Açıq zal yox, otaq axını olan yerlər.',
    problemsTitle: 'Otaqlı launjlarda tipik problemlər',
    problems: [
      'Otaq rezervləri mesajlarda itir',
      'Sessiya uzandıqda əlavə vaxt və məhsul ayrı yazılır',
      'Bir neçə VIP otağın eyni vaxtda statusu qarışır',
      'Günün sonunda kassa ilə otaq doluluğu uyğun gəlmir',
    ],
    howTitle: 'Heselo otaqlı launjda necə işləyir?',
    howBody:
      'Otaqları cədvəldə rezerv edirsiniz. Qonaq gələndə sessiya canlı izləmədə açılır; məhsul və ödəniş eyni axındadır. Bir neçə otaq eyni lövhədə görünür. Kassa növbə və hesabat ilə günü bağlayır.',
    featuresTitle: 'Otaqlı launj üçün əsas funksiyalar',
    features: [
      {
        title: 'Otaq rezervasiyası',
        desc: 'Cədvəl, rezerv siyahısı, köçürmə və ləğv.',
      },
      {
        title: 'Canlı otaq sessiyası',
        desc: 'Status, məhsul əlavəsi, qəbz və ödəniş.',
      },
      {
        title: 'Müştəri tarixçəsi',
        desc: 'Təkrar gələn qonaqlar üçün kart və ziyarət tarixçəsi.',
      },
      {
        title: 'Kassa və statistika',
        desc: 'Növbə bağlanışı və ödəniş kəsmləri.',
      },
    ],
    differTitle: 'Açıq zal proqramından fərqi',
    differBody:
      'Açıq masa axını otağın qapalı sessiya məntiqini vermir. Heselo otağı resurs kimi saxlayır — karaoke və antikafe ilə eyni qaydalar, launj atmosferinə uyğun.',
    faq: [
      {
        q: 'Launj otaqları karaoke otağı kimi qurulur?',
        a: 'Bəli. Hər otaq ayrı resursdur; cədvəl və canlı izləmə otaq statusunu göstərir.',
      },
      {
        q: 'Açıq zal və otaq eyni sistemdə ola bilər?',
        a: 'Bəli. Masa, otaq və stansiya eyni cədvəl və kassa axınında idarə olunur.',
      },
    ],
    related: ['karaoke', 'antikafe', 'billiards', 'reservations'],
    ctaTitle: 'Otaqlı launj üçün demo',
    ctaBody: 'Otaq sayınızı bizə yazın — rezervasiya və canlı axını göstəririk.',
  },
  {
    slug: 'reservations',
    shortTitle: 'Rezervasiya',
    h1: 'Masa və otaq rezervasiya sistemi',
    seoTitle: 'Rezervasiya sistemi və masa rezervasiya sistemi | Heselo',
    seoDescription:
      'Masa rezervasiya sistemi və otaq rezervasiyası: cədvəl, rezerv siyahısı, köçürmə, ləğv və canlı sessiya ilə əlaqə. Pulsuz demo.',
    keywords: [
      'rezervasiya sistemi',
      'masa rezervasiya sistemi',
      'otaq rezervasiya sistemi',
      'masa bron sistemi',
    ],
    intro:
      'Rezervasiya sistemi yalnız “boş vaxt seçmək” deyil. Masaya və ya otağa yazılan rezerv canlı sessiya, ödəniş və tarixçə ilə bağlı olmalıdır. Heselo cədvəl və rezervasiya siyahısını eyni məlumat üzərində saxlayır.',
    whoTitle: 'Kimlər üçün?',
    whoBody:
      'Oyun klubu, karaoke, bilyard, antikafe və otaqlı launjda masa, otaq və stansiya rezervasiyasını peşəkar şəkildə aparmaq istəyənlər üçün.',
    problemsTitle: 'Ayrı rezervasiya alətlərinin çatışmazlığı',
    problems: [
      'Cədvəl ilə canlı zal bir-birini görmür',
      'Köçürmə və ləğv tarixçəsi itir',
      'Əvvəlcədən sifariş və ödəniş toplanması ayrı yerdə qalır',
      'Keçmiş günlərdə kim nə dəyişib — bilinmir',
    ],
    howTitle: 'Heselo-da rezervasiya necə idarə olunur?',
    howBody:
      'Cədvəl modulunda gün və həftə üzrə resursları görürsünüz. Rezervasiyalar siyahısında müştəri, vaxt, etiket, əvvəlcədən sifariş, ödəniş toplama, köçürmə və ləğv var. Qonaq gələndə eyni rezerv canlı sessiyaya keçir.',
    featuresTitle: 'Rezervasiya funksiyaları',
    features: [
      {
        title: 'Cədvəl',
        desc: 'Masa, otaq və digər resurslar eyni görünüşdə.',
      },
      {
        title: 'Rezervasiya siyahısı',
        desc: 'Filtr, status, tarixçə və əməliyyatlar.',
      },
      {
        title: 'Canlı keçid',
        desc: 'Rezervdən aktiv sessiyaya bir yol.',
      },
      {
        title: 'Müştəri bağlantısı',
        desc: 'Rezerv müştəri kartı və ziyarət tarixçəsi ilə bağlıdır.',
      },
    ],
    differTitle: 'Niyə “sadəcə bron” kifayət etmir?',
    differBody:
      'Bron aləti kassa və anbarı həll etmir. Heselo rezervasiyanı məkanın günlük işinə bağlayır — ona görə “rezervasiya sistemi” axtarışı ilə “məkan idarəetməsi” eyni məhsulda qarşılanır.',
    faq: [
      {
        q: 'Masa və otaq eyni rezervasiya sistemindədir?',
        a: 'Bəli. Hər ikisi resurs kimi cədvəldə və rezerv siyahısındadır.',
      },
      {
        q: 'Keçmiş gün qorunurmu?',
        a: 'Bəli. Keçmiş günə aid dəyişikliklər məkan qaydalarına görə qorunur.',
      },
    ],
    related: ['karaoke', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Rezervasiya demo-su',
    ctaBody: 'Cədvəl və rezerv axınını məkanınıza uyğun göstəririk.',
  },
  {
    slug: 'pos',
    shortTitle: 'Kassa',
    h1: 'Kassa idarəetmə sistemi',
    seoTitle: 'Kassa proqramı və klub kassa sistemi | Heselo',
    seoDescription:
      'Kassa proqramı: növbə, əməliyyatlar, kassa hesabatı və sayım. Klub kassa sistemi rezervasiya və canlı zal ilə eyni paneldə.',
    keywords: [
      'kassa proqramı',
      'klub kassa proqramı',
      'kassa idarəetmə sistemi',
      'kassa sayımı',
      'excel kassa əvəzinə',
      'ucuz klub paneli',
    ],
    intro:
      'Kassa proqramı yalnız “ödəniş düyməsi” deyil. Növbə açılışı, əməliyyatlar, hesabat və sayım günün sonunda sahibə aydın cavab verməlidir. Heselo-da kassa rezervasiya və canlı sessiya ilə eyni iş gününə bağlıdır — Excel və WhatsApp əvəzinə.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Oyun klubu, karaoke, bilyard, antikafe və otaqlı launjda növbə üzrə nağd/bank/POS izləmək, günü bağlamaq və sayım aparmaq istəyənlər üçün.',
    problemsTitle: 'Zəif kassa uçotunun nəticəsi',
    problems: [
      'Növbə bağlananda məbləğlər uyğun gəlmir',
      'Nağd və kart qarışır',
      'Hansı sessiya ödənilib — axtarmaq lazım gəlir',
      'Sayım ayrıca kağızda qalır',
    ],
    howTitle: 'Heselo kassa necə işləyir?',
    howBody:
      'Növbəni açır, əməliyyatları yazır, kassa hesabatına baxır və kassa sayımı ilə bağlayırsınız. Canlı izləmədəki ödənişlər eyni gün və növbə məntiqi ilə gedir. Bağlanmış gün tarixçəsi saxlanılır.',
    featuresTitle: 'Kassa funksiyaları',
    features: [
      {
        title: 'Növbə aç/bağla',
        desc: 'Gün və növbə ayrı qalır.',
      },
      {
        title: 'Əməliyyatlar',
        desc: 'Nağd, bank və POS axını.',
      },
      {
        title: 'Kassa hesabatı',
        desc: 'Dövr üzrə icmal.',
      },
      {
        title: 'Kassa sayımı',
        desc: 'Bağlanışda sayım və uyğunsuzluğun aşkarlanması.',
      },
    ],
    differTitle: 'Ayrı kassa + ayrı rezervasiya yoxdur',
    differBody:
      'Bir çox məkan bir alətdə bron, digərində kassa aparır. Heselo kassanı eyni panelə gətirir — ona görə günün sonunda “haradan gəldi bu məbləğ?” sualı azalır.',
    faq: [
      {
        q: 'Ödəniş məbləğləri harada hesablanır?',
        a: 'Qalıq və status serverdə hesablanır. Ekran yalnız nəticəni göstərir.',
      },
      {
        q: 'Kassa sayımı varmı?',
        a: 'Bəli. Kassa sayımı növbə/gün bağlanışı üçün nəzərdə tutulub.',
      },
    ],
    related: ['gaming', 'inventory', 'reservations'],
    ctaTitle: 'Kassa axını üçün demo',
    ctaBody: 'Növbə və sayım prosesini real ssenari ilə göstəririk.',
  },
  {
    slug: 'inventory',
    shortTitle: 'Anbar',
    h1: 'Anbar idarəetmə sistemi',
    seoTitle: 'Anbar idarəetmə sistemi və klub anbar proqramı | Heselo',
    seoDescription:
      'Anbar idarəetmə sistemi: məhsul kataloqu, qalıq və sayım. Klub anbar proqramı kassa və canlı satış ilə eyni paneldə.',
    keywords: [
      'anbar idarəetmə sistemi',
      'klub anbar proqramı',
      'anbar sayımı',
      'məhsul kataloqu',
    ],
    intro:
      'Anbar idarəetmə sistemi satışdan ayrı qalanda qalıqlar “kağızda düz, rəfdə səhv” olur. Heselo-da məhsullar, anbar və sürətli satış eyni kataloq üzərindədir — canlı sessiya və kassa ilə bağlı.',
    whoTitle: 'Kimlər üçündür?',
    whoBody:
      'Oyun klubu, karaoke, bilyard, antikafe və otaqlı launjda qəlyanaltı/içki qalığını izləmək, sayım aparmaq və bron olmadan satış etmək istəyənlər üçün.',
    problemsTitle: 'Anbar uçotu zəif olanda',
    problems: [
      'Satış var, qalıq yenilənmir',
      'Sayım jurnalları itir',
      'Qiymət və məhsul siyahısı bir neçə yerdədir',
      'Rezervsiz satış anbara düşmür',
    ],
    howTitle: 'Heselo-da anbar necə idarə olunur?',
    howBody:
      'Məhsul kataloqu qiymətləri saxlayır. Anbar qalıqları və sayım jurnalları eyni siyahıdadır. Canlı sessiyada və sürətli satışda məhsul əlavə olunanda eyni kataloq işləyir. Statistika anbar kəsmlərini göstərir.',
    featuresTitle: 'Anbar funksiyaları',
    features: [
      {
        title: 'Məhsul kataloqu',
        desc: 'Qiymət və siyahı bir yerdə.',
      },
      {
        title: 'Qalıq izləmə',
        desc: 'Anbar qalıqları satış axını ilə uyğun.',
      },
      {
        title: 'Sayım jurnalları',
        desc: 'Sayım tarixçəsi saxlanılır.',
      },
      {
        title: 'Sürətli satış',
        desc: 'Bron olmadan satış — eyni məhsul siyahısı.',
      },
    ],
    differTitle: 'Ayrı anbar Excel-indən fərqi',
    differBody:
      'Excel günün axşamı doldurulur; Heselo satış anında eyni məlumatı istifadə edir. Anbar rezervasiya və kassadan ayrılmır.',
    faq: [
      {
        q: 'Anbar ayrıca moduldu?',
        a: 'Bəli, amma məhsullar və sürətli satış ilə eyni kataloqa bağlıdır.',
      },
      {
        q: 'Statistikada anbar varmı?',
        a: 'Bəli. Anbar statistikası icmal və kəsmlər üçün mövcuddur.',
      },
    ],
    related: ['pos', 'gaming', 'antikafe'],
    ctaTitle: 'Anbar və kataloq demo-su',
    ctaBody: 'Məhsul və sayım axınını məkanınıza uyğun göstəririk.',
  },
]
