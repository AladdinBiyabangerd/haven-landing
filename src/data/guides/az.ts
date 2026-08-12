import type { GuideCopy, GuidesHubCopy } from './types'

export const guidesHubAz: GuidesHubCopy = {
  eyebrow: 'Bələdçilər',
  h1: 'Məkan idarəetməsi haqqında faydalı izahlar',
  intro:
    'Bu bölmə məhsul reklamı deyil — axtarışda tez rast gəlinən suallara aydın cavab verir. Hər yazının sonunda Heselo-nun müvafiq həll səhifələrinə keçid var.',
  seoTitle: 'Bələdçilər — restoran və məkan idarəetməsi | Heselo',
  seoDescription:
    'Restoran idarəetmə sistemi nədir, rezervasiya, kassa və anbar necə işləyir — Azərbaycan dilində praktiki bələdçilər.',
  keywords: [
    'restoran idarəetmə sistemi nədir',
    'kafe idarəetmə sistemi nədir',
    'antikafe proqramı',
    'masa rezervasiya necə idarə olunur',
    'restoran kassa sistemi',
    'restoran anbar uçotu',
  ],
  cardCta: 'Oxu',
}

export const guidesAz: GuideCopy[] = [
  {
    slug: 'restaurant-management-system',
    shortTitle: 'Restoran idarəetmə sistemi',
    h1: 'Restoran idarəetmə sistemi nədir?',
    seoTitle: 'Restoran idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Restoran idarəetmə sistemi nədir, hansı problemləri həll edir, rezervasiya, kassa və anbar necə birləşir — praktiki izah. Pulsuz demo.',
    keywords: [
      'restoran idarəetmə sistemi nədir',
      'restoran proqramı nədir',
      'restoran idarəetmə proqramı',
      'restoran POS',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Restoran idarəetmə sistemi (RMS) restoranın gündəlik işini — masa rezervasiyası, zal axını, ödənişlər, məhsul və anbar, bəzən isə müştəri tarixçəsi — bir paneldə aparmaq üçündür. Bu, yalnız “onlayn bron forması” və ya yalnız kassa deyil; məqsəd Excel, messencer və ayrı alətləri eyni iş gününə bağlamaqdır.',
    sections: [
      {
        id: 'why',
        title: 'Niyə restoranlar belə sistem axtarır?',
        paragraphs: [
          'Kiçik və orta restoranlarda tipik mənzərə belə olur: rezerv telefon və WhatsApp-da, masa statusu personalın yaddaşında, ödəniş ayrı cədvəldə, anbar isə həftənin sonunda kağızda. Gün bağlananda “kim nə dəyişib?” sualı uzanır.',
          'Restoran idarəetmə proqramı bu parçaları eyni qaydalara bağlayır: rezerv canlı sessiyaya keçir, ödəniş növbəyə düşür, məhsul eyni kataloqdan gəlir.',
        ],
      },
      {
        id: 'modules',
        title: 'Adətən hansı hissələrdən ibarət olur?',
        paragraphs: [
          'Sistemlər fərqli adlanır, amma praktiki ehtiyaclar oxşardır. Aşağıdakılar əksər restoran proqramlarında axtarılır:',
        ],
        bullets: [
          'Masa və otaq rezervasiyası (cədvəl, köçürmə, ləğv)',
          'Canlı zal / sessiya (aktiv masa, məhsul, ödəniş)',
          'Kassa və ya POS axını (növbə, hesabat, sayım)',
          'Məhsul kataloqu və anbar qalıqları',
          'Müştəri kartları və sadə hesabatlar',
          'İşçi icazələri (kim nəyi görə və dəyişə bilər)',
        ],
      },
      {
        id: 'reservations',
        title: 'Rezervasiya necə idarə olunmalıdır?',
        paragraphs: [
          'Yaxşı rezervasiya axını yalnız “boş saat seçmək” deyil. Rezerv masa və ya otağa bağlı olmalıdır; qonaq gələndə eyni qeyd canlı sessiyaya çevrilməlidir. Köçürmə, ləğv və tarixçə saxlanmalıdır — əks halda cədvəl ilə zal bir-birini görmür.',
          'Otaq əsaslı məkanlarda (məsələn karaoke və ya VIP) eyni məntiq otaq resursuna tətbiq olunur.',
        ],
      },
      {
        id: 'pos',
        title: 'Kassa / POS restoran idarəetməsinə necə bağlanır?',
        paragraphs: [
          'Ayrı kassa proqramı bron alətindən kəsiləndə günün sonunda məbləğlərin mənbəyi itir. Ideal axında canlı sessiyadakı ödəniş eyni növbə və gün qaydalarına düşür: nağd, bank və POS ayrı qalır, sayım bağlanışı dəstəkləyir.',
        ],
      },
      {
        id: 'inventory',
        title: 'Anbar niyə ayrıca Excel-də qalmamalıdır?',
        paragraphs: [
          'Satış anında eyni məhsul siyahısı işləməsə, qalıqlar “kağızda düz, rəfdə səhv” olur. Restoran anbar proqramı kimi işləyən modul kataloq, qalıq və sayımı satış axını ilə birləşdirir — rezervsiz (sürətli) satış da eyni siyahıdan gedir.',
        ],
      },
      {
        id: 'choose',
        title: 'Sistem seçərkən nəyə baxmaq lazımdır?',
        paragraphs: [
          'Marketinq siyahısından çox real iş gününü yoxlayın: rezervdən ödənişə qədər bir axın varmı? Keçmiş gün qorunurmu? İcazələr səhifə səviyyəsindədirmi? Dil və yerli dəstək varmı? Qiymət şəffafdırmı?',
          'Azərbaycan bazarında bir çox komanda AZ / EN / RU dillərində işləyir — panelin bu dilləri dəstəkləməsi gündəlik xətanı azaldır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo bu ehtiyacları necə qarşılayır?',
        paragraphs: [
          'Heselo məkan idarəetmə sistemidir: cədvəl və rezervasiyalar, canlı izləmə, kassa (növbə, hesabat, sayım), məhsullar, anbar, müştərilər və statistika eyni paneldədir. Ödəniş qalıqları serverdə hesablanır — ekranda təxmini rəqəm yoxdur.',
          'Restoran yönümlü izah üçün ayrıca səhifəmiz var; aşağıda rezervasiya, kassa və anbar səhifələrinə də keçə bilərsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Restoran idarəetmə sistemi ilə sadəcə rezervasiya saytı eynidirmi?',
        a: 'Xeyr. Onlayn bron forması qonağı yazır, amma zal, kassa və anbarı aparmır. Tam sistem rezervdən gün bağlanışına qədər eyni axını saxlayır.',
      },
      {
        q: 'Kiçik restoran üçün belə sistem lazımdırmı?',
        a: 'Masa sayı az olsa belə, rezerv və ödəniş qarışırsa, mərkəzləşdirilmiş panel vaxt itkisini azaldır. Əvvəl ehtiyacı (bron, kassa, anbar) dəqiqləşdirin, sonra plan seçin.',
      },
      {
        q: 'POS ayrıca alınmalıdır?',
        a: 'Bəzi həllərdə bəli. Heselo-da kassa axını panelin bir hissəsidir — abunə planına daxildir.',
      },
    ],
    relatedSolutions: ['restaurant', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'Restoran axınınızı demo-da görün',
    ctaBody: '15 dəqiqədə rezervasiyadan kassa bağlanışına qədər göstəririk — məkan tipinizə uyğun.',
  },
  {
    slug: 'manage-restaurant-reservations',
    shortTitle: 'Rezervasiya idarəetməsi',
    h1: 'Restoranda rezervasiya necə idarə olunur?',
    seoTitle: 'Restoranda rezervasiya necə idarə olunur? | Heselo bələdçisi',
    seoDescription:
      'Masa rezervasiya sistemi praktik olaraq necə işləməlidir: cədvəl, rezerv siyahısı, köçürmə, ləğv və canlı zala keçid — addım-addım izah.',
    keywords: [
      'masa rezervasiya sistemi',
      'rezervasiya necə idarə olunur',
      'restoranda rezervasiya',
      'otaq rezervasiyası',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Restoranda rezervasiya idarəetməsi telefon qeydlərindən çoxdur. Düzgün masa rezervasiya sistemi cədvəli, rezerv siyahısını və qonaq gələndə canlı sessiyanı eyni məlumat üzərində saxlayır. Bu bələdçi praktiki axını izah edir — marketinq sözü yox, real iş günü.',
    sections: [
      {
        id: 'problem',
        title: 'Telefon və messencer rezervi niyə yetmir?',
        paragraphs: [
          'Rezerv bir yerdə, masa statusu başqa yerdə qalanda “19:30 rezervi var, amma masa boşdur” və ya əksinə “masa doludur, rezerv yoxdur” halları tez-tez olur. Köçürmə və ləğv tarixçəsi itəndə resepsiya gün ərzində eyni sualı bir neçə dəfə cavablandırır.',
          'Masa rezervasiya sistemi məqsədi budur: bir resurs (masa və ya otaq), bir cədvəl, bir rezerv siyahısı — hamısı eyni gün qaydaları ilə.',
        ],
      },
      {
        id: 'flow',
        title: 'Gün ərzində tipik rezervasiya axını',
        paragraphs: [
          'Səhər: cədvəldə günün rezervlərini yoxlayın — masa, otaq, vaxt, nəfər sayı. Gün ərzində: yeni rezerv qəbul edin, mövcud rezervi köçürün və ya ləğv edin; siyahı ilə cədvəl eyni qalmalıdır. Qonaq gələndə: eyni rezerv canlı sessiyaya açılır — ayrıca “yenidən yazmaq” lazım deyil.',
          'Otaq rezervasiyası (karaoke, VIP) eyni məntiqlə işləyir; fərq yalnız resurs tipindədir.',
        ],
      },
      {
        id: 'fields',
        title: 'Rezerv qeydində nə olmalıdır?',
        paragraphs: ['Minimum praktiki set:'],
        bullets: [
          'Müştəri adı və əlaqə',
          'Vaxt və müddət (və ya təxmini oturma)',
          'Masa / otaq / resurs',
          'Nəfər sayı və qeyd (etiket)',
          'Əvvəlcədən sifariş və ya depozit (varsa)',
          'Status: gözləyir, gəldi, ləğv, no-show',
        ],
      },
      {
        id: 'mistakes',
        title: 'Tez-tez edilən səhvlər',
        paragraphs: [
          'Rezervi cədvəldə göstərməmək — zal “boş” görünür, amma masa artıq bron olunub.',
          'Köçürməni telefonla etmək, sistemdə qeyd etməmək — növbəti növbə bilmir.',
          'Rezervsiz qonaq ilə rezervi eyni masada toqquşdurmaq — cədvəl real vaxtda yenilənməlidir.',
          'Keçmiş günü sərbəst redaktə — audit və hesabat pozulur; qoruma qaydaları lazımdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo-da rezervasiya necə işləyir?',
        paragraphs: [
          'Heselo-da cədvəl və rezervasiya siyahısı eyni paneldədir. Rezerv formasında müştəri, vaxt, etiket, əvvəlcədən sifariş və ödəniş toplama var; köçürmə, ləğv və tarixçə saxlanılır. Qonaq gələndə eyni rezerv canlı izləmədə sessiyaya keçir.',
          'Ətraflı məlumat üçün masa rezervasiya sistemi səhifəmizə baxın; aşağıdakı linkdən demo da istəyə bilərsiniz.',
        ],
      },
    ],
    faq: [
      {
        q: 'Masa və otaq eyni rezervasiya sistemində olmalıdır?',
        a: 'Bəli. Hər ikisi resurs kimi cədvəldə görünür — fərqli alətlər eyni günü parçalamamalıdır.',
      },
      {
        q: 'Rezervasiya saytı kifayət edirmi?',
        a: 'Onlayn bron qonağı yazır, amma zal axınını aparmır. Tam sistem rezervdən ödənişə qədər eyni paneldə qalır.',
      },
      {
        q: 'No-show necə qeyd olunur?',
        a: 'Status və tarixçə ilə; gələcək rezervlər üçün müştəri kartında da görünə bilər.',
      },
    ],
    relatedSolutions: ['reservations', 'restaurant', 'cafe', 'karaoke'],
    ctaTitle: 'Rezervasiya axınını demo-da görün',
    ctaBody: 'Cədvəl və rezerv siyahısını məkanınıza uyğun göstəririk.',
  },
  {
    slug: 'restaurant-pos-system',
    shortTitle: 'Restoran kassa sistemi',
    h1: 'Restoran kassa sistemi necə işləyir?',
    seoTitle: 'Restoran kassa sistemi necə işləyir? | Heselo bələdçisi',
    seoDescription:
      'Restoran kassa proqramı və POS axını: növbə, nağd/bank/POS, kassa hesabatı və gün bağlanışı — praktiki izah.',
    keywords: [
      'restoran kassa proqramı',
      'kassa proqramı',
      'restoran POS',
      'kassa sayımı',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Restoran kassa sistemi yalnız “ödəniş düyməsi” deyil. Növbə açılışı, əməliyyatlar, hesabat və sayım sahibə günün sonunda aydın cavab verməlidir. Bu bələdçi restoran kassa proqramının praktik hissələrini izah edir və onu rezervasiya ilə necə birləşdirmək lazım olduğunu göstərir.',
    sections: [
      {
        id: 'parts',
        title: 'Kassa sisteminin əsas hissələri',
        paragraphs: ['Restoran POS axını adətən bunları əhatə edir:'],
        bullets: [
          'Növbə aç/bağla (shift)',
          'Ödəniş əməliyyatları (nağd, bank, terminal)',
          'Canlı sessiyadan və ya sürətli satışdan gələn ödənişlər',
          'Kassa hesabatı (gün/növbə üzrə)',
          'Kassa sayımı (bağlanışda faktiki vs sistem)',
        ],
      },
      {
        id: 'shift',
        title: 'Növbə niyə vacibdir?',
        paragraphs: [
          'Növbə olmadan “bu gün nə qədər nağd gəldi?” sualı cavabsız qalır. Növbə açılanda başlanğıc, bağlananda isə sayım və hesabat eyni dövrə aid olur. Resepsiya və zal fərqli növbələrdə işləyirsə, hər növbənin nəticəsi ayrı görünməlidir.',
        ],
      },
      {
        id: 'connect',
        title: 'Rezervasiya və kassa necə birləşməlidir?',
        paragraphs: [
          'Ayrı kassa proqramı + ayrı rezerv aləti istifadə edəndə günün sonunda “bu məbləğ hansı masadan gəldi?” sualı uzanır. Ideal axında canlı sessiyadakı ödəniş eyni gün və növbə məntiqi ilə kassaya düşür — ayrıca köçürmə və ya təxmini rəqəm olmur.',
          'Əvvəlcədən sifariş və ya depozit toplanmış rezervlər də eyni müştəri və sessiya axınında qalmalıdır.',
        ],
      },
      {
        id: 'close',
        title: 'Gün bağlanışı (kassa sayımı)',
        paragraphs: [
          'Bağlanışda kassa sayımı aparılır: faktiki nağd vs sistemdəki nağd. Kiçik fərqlər tez-tez olur; vacib olan fərqin harada yaranması barədə iz qalmasıdır. Bağlanmış gün tarixçəsi sonradan audit üçün saxlanmalıdır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo-da kassa necə işləyir?',
        paragraphs: [
          'Heselo-da kassa modulu növbə, əməliyyatlar, kassa hesabatı və kassa sayımını eyni paneldə verir. Canlı izləmədəki ödənişlər eyni axınla gedir; qalıq serverdə hesablanır. Ayrıca restoran kassa proqramı almaq lazım deyil.',
        ],
      },
    ],
    faq: [
      {
        q: 'Terminal (POS) inteqrasiyası varmı?',
        a: 'Heselo nağd, bank və POS əməliyyatlarını növbə üzrə qeyd edir; konkret terminal inteqrasiyası məkan tələbinə görə müzakirə olunur.',
      },
      {
        q: 'Kassa sayımı məcburidirmi?',
        a: 'Günü düzgün bağlamaq üçün praktikada bəli — sayım fərqi aşkar edir və hesabatı tamamlayır.',
      },
      {
        q: 'Ödəniş məbləği harada hesablanır?',
        a: 'Heselo-da qalıq və status serverdə hesablanır; ekran yalnız nəticəni göstərir.',
      },
    ],
    relatedSolutions: ['pos', 'restaurant', 'reservations', 'cafe'],
    ctaTitle: 'Kassa axını üçün demo',
    ctaBody: 'Növbə açmaqdan sayıma qədər real ssenari ilə göstəririk.',
  },
  {
    slug: 'restaurant-inventory-basics',
    shortTitle: 'Restoran anbar uçotu',
    h1: 'Restoran anbar uçotu necə aparılır?',
    seoTitle: 'Restoran anbar uçotu necə aparılır? | Heselo bələdçisi',
    seoDescription:
      'Restoran anbar proqramı və uçot: kataloq, qalıq, sayım jurnalları və satışla əlaqə — praktiki bələdçi.',
    keywords: [
      'restoran anbar proqramı',
      'anbar idarəetmə sistemi',
      'restoran anbar uçotu',
      'anbar sayımı',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Restoran anbar uçotu “həftənin sonunda Excel doldurmaq” deyil. Satış anında eyni məhsul siyahısı işləməsə, qalıqlar kağızda düz, rəfdə səhv olur. Bu bələdçi restoran anbar proqramının praktik prinsiplərini və onu kassa ilə necə birləşdirmək lazım olduğunu izah edir.',
    sections: [
      {
        id: 'why',
        title: 'Anbar uçotu niyə lazımdır?',
        paragraphs: [
          'Anbar olmadan “nə qədər satdıq?” sualı cavablanır, amma “nə qaldı?” sualı gecikir. Bu gecikmə itki, artıq sifariş və ya çatışmazlığa gətirir. Kiçik restoranlarda belə, xüsusilə içki və quru ərzaqda, qalıq izləmə faydalıdır.',
        ],
      },
      {
        id: 'catalog',
        title: 'Kataloq — hər şeyin başlanğıcı',
        paragraphs: [
          'Məhsul kataloqu qiymət, ad və vahid saxlayır. Canlı sessiyada əlavə olunan məhsul, sürətli satış və hesabat eyni kataloqdan istifadə etməlidir. Bir neçə Excel və ya kağız siyahı qalmamalıdır.',
        ],
      },
      {
        id: 'count',
        title: 'Sayım jurnalları',
        paragraphs: [
          'Periodik sayım (gün, həftə) qalığı real həyata uyğunlaşdırır. Sayım jurnalı kim, nə vaxt, nə saydı — bunu saxlamalıdır. Keçmiş sayımlar trend görməyə kömək edir: hansı məhsul tez bitir, harada fərq yaranır.',
        ],
      },
      {
        id: 'sales',
        title: 'Satış ilə anbarın əlaqəsi',
        paragraphs: [
          'Rezervsiz satış (bron olmadan) da eyni kataloqdan getməlidir — əks halda anbar “sessiya satışını” görür, kənar satışı yox. Canlı zalda əlavə olunan içki və yemək eyni prinsiplə qeyd olunur.',
          'Anbar statistikası ayrıca kəsmlər verə bilər: hansı kateqoriya daha çox gedir, hansı gün sayım fərqi yaranır.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo-da anbar necə işləyir?',
        paragraphs: [
          'Heselo-da məhsullar, anbar və sürətli satış eyni kataloq üzərindədir. Anbar qalıqları və sayım jurnalları paneldə saxlanılır; canlı sessiya və kassa ilə eyni gün axını paylaşır. Restoran anbar proqramı ayrıca alınmadan eyni abunə daxilində işləyir.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kiçik kafedə anbar modulu lazımdırmı?',
        a: 'Məhsul satışı varsa, sadə kataloq və sayım belə faydalıdır — miqyas kiçik olsa belə.',
      },
      {
        q: 'Anbar Excel-dən köçürülə bilərmi?',
        a: 'Başlanğıc siyahı idxal edilə bilər; davamda satış eyni kataloqdan getməlidir ki, qalıq düz qalsın.',
      },
      {
        q: 'Anbar rezervasiyadan ayrıdır?',
        a: 'Modul ayrıdır, amma məlumat eyni paneldədir — sessiya satışı və anbar bir-birini tamamlayır.',
      },
    ],
    relatedSolutions: ['inventory', 'restaurant', 'pos', 'cafe'],
    ctaTitle: 'Anbar və kataloq demo-su',
    ctaBody: 'Məhsul siyahısı və sayım axınını göstəririk.',
  },
  {
    slug: 'cafe-management-system',
    shortTitle: 'Kafe idarəetmə sistemi',
    h1: 'Kafe idarəetmə sistemi nədir?',
    seoTitle: 'Kafe idarəetmə sistemi nədir? | Heselo bələdçisi',
    seoDescription:
      'Kafe idarəetmə sistemi nədir, walk-in axını, rezervasiya, kassa və anbar necə birləşir — kiçik və orta kafelər üçün praktiki izah.',
    keywords: [
      'kafe idarəetmə sistemi nədir',
      'kafe proqramı',
      'kafe idarəetmə proqramı',
      'kafe rezervasiya',
      'kafe kassa proqramı',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-08-12',
    intro:
      'Kafe idarəetmə sistemi kafenin gündəlik işini — masa rezervasiyası, walk-in qonaqlar, canlı zal, ödənişlər, məhsul satışı və bəzən anbar — bir paneldə aparmaq üçündür. Restoran proqramından fərqli olaraq axın daha sürətlidir; sistem eyni gün ərzində tez-tez dəyişən masaları və qısa oturumları itirməməlidir.',
    sections: [
      {
        id: 'vs-restaurant',
        title: 'Kafe ilə restoran ehtiyacı eynidirmi?',
        paragraphs: [
          'Hər ikində rezerv, kassa və məhsul var, amma kafedə walk-in payı adətən daha yüksəkdir, oturma müddəti qısa ola bilər, masa dövriyyəsi sürətlidir. Restoran proqramı bəzən “axşam rezervi” üçün optimallaşır; kafe proqramı isə eyni gün ərzində boş masanı, aktiv sessiyanı və sürətli satışı eyni ekranda göstərməlidir.',
          'Ona görə kafe idarəetmə proqramı seçərkən “yalnız rezerv forması” və ya yalnız kassa kifayət edirmi sualını real növbənizlə yoxlayın.',
        ],
      },
      {
        id: 'modules',
        title: 'Kafe üçün hansı modullar lazımdır?',
        paragraphs: ['Praktik minimum adətən bunlardan ibarət olur:'],
        bullets: [
          'Canlı zal — hansı masa aktivdir, nə qədərdir',
          'Rezervasiya və cədvəl — telefon rezervi cədvəldə görünsün',
          'Kassa axını — nağd, bank, POS gün üzrə aydın olsun',
          'Məhsul kataloqu və sürətli satış — rezervsiz qonaq üçün',
          'Anbar (kiçik miqyasda belə) — çay, qəhvə, desert qalıqları',
          'Sadə statistika — günün gəlirini başa düşmək üçün',
        ],
      },
      {
        id: 'walk-in',
        title: 'Walk-in və rezerv eyni masada necə idarə olunur?',
        paragraphs: [
          'Kafedə tipik problem: rezerv cədvəldə var, amma zal “boş” görünür — və ya rezervsiz qonaq artıq bron olunmuş masaya oturur. Düzgün axında hər masa resurs kimi cədvəldə və canlı izləmədə eyni statusda qalır.',
          'Rezervsiz qonaq gələndə birbaşa canlı sessiya açılır; telefon rezervi gələndə eyni qeyd sessiyaya keçir. Köçürmə və ləğv tarixçəsi saxlanılır — növbəti növbə eyni sualı təkrarlamır.',
        ],
      },
      {
        id: 'pos-inventory',
        title: 'Kassa və anbar kafedə niyə ayrılmamalıdır?',
        paragraphs: [
          'Kafelərdə satış tez-tez sessiya ilə bağlıdır: içki masaya, desert walk-in-dən. Məhsul siyahısı sessiya, kassa və anbar üçün eyni olmalıdır — əks halda günün sonunda “satdıq, amma qalıq düz deyil” problemi yaranır.',
          'Kiçik kafedə belə anbar sadə qala bilər (sayım həftəlik), amma eyni kataloq üzərindən getməsi vacibdir.',
        ],
      },
      {
        id: 'choose',
        title: 'Kafe proqramı seçərkən nəyə baxmaq lazımdır?',
        paragraphs: [
          'Rezervdən ödənişə qədər bir axın varmı? Walk-in və rezerv eyni masada toqquşmurmu? Keçmiş gün qorunurmu? Panel mobil brauzerdən işləyirmi? AZ / EN / RU dilləri komanda üçün lazımdırmı?',
          'Qiymət şəffaf olmalıdır — gizli komissiya və ya “hər modul ayrıca” modeli kiçik kafe üçün baha çıxa bilər.',
        ],
      },
      {
        id: 'heselo',
        title: 'Heselo kafe üçün necə uyğundur?',
        paragraphs: [
          'Heselo məkan idarəetmə sistemidir: canlı izləmə, cədvəl, rezervasiyalar, kassa, məhsullar, anbar və müştərilər eyni paneldədir. Kafe, restoran və lounge eyni resurs məntiqində qurula bilər — fərq yalnız iş axınınızın sürətindədir.',
          'Kafe yönümlü kommersiya səhifəmizə və aşağıdakı rezervasiya, kassa həllərinə keçid var.',
        ],
      },
    ],
    faq: [
      {
        q: 'Kiçik kafe üçün tam sistem lazımdırmı?',
        a: 'Masa sayı az olsa belə, rezerv və ödəniş qarışırsa mərkəzləşdirilmiş panel vaxt itkisini azaldır. Əvvəl ehtiyacı (bron, kassa, anbar) dəqiqləşdirin.',
      },
      {
        q: 'Kafe proqramı ilə restoran proqramı eynidirmi?',
        a: 'Texniki modullar oxşar ola bilər, amma kafe axını daha sürətlidir. Heselo hər ikisini eyni paneldə idarə edir — ayrıca “kafe versiyası” almaq lazım deyil.',
      },
      {
        q: 'Rezervsiz qonaq necə qeyd olunur?',
        a: 'Bron olmadan canlı sessiya və ya sürətli satış açılır — eyni məhsul kataloqu və kassa axını istifadə olunur.',
      },
    ],
    relatedSolutions: ['cafe', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'Kafe axınınız üçün demo',
    ctaBody: 'Walk-in və rezerv ehtiyacınıza uyğun qısa demo göstəririk.',
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
]
