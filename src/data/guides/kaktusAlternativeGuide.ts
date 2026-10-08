import type { Locale } from '@/i18n/config'
import type { GuideCopy } from './types'

const PUBLISHED = '2026-09-17'
const MODIFIED = '2026-10-08'

const relatedSolutions: GuideCopy['relatedSolutions'] = [
  'reservations',
  'lounge',
  'antikafe',
]

const guides: Record<Locale, Omit<GuideCopy, 'slug' | 'datePublished' | 'dateModified' | 'relatedSolutions'>> =
  {
    az: {
      shortTitle: 'Kaktus alternativi — otaq vs salon',
      h1: 'Salon randevusu vs otaq sessiyası — Kaktus alternativi',
      seoTitle: 'Kaktus alternativi — salon rezervasiya vs Heselo otaq-vaxt | Heselo',
      seoDescription:
        'Kaktus salon/gözəllik randevusudur; Heselo otaq və launj sessiyasıdır. Heselo mütəxəssis cədvəlini əvəz etmir — müqayisə cədvəli, landşaft, FAQ — AZ, EN, RU.',
      keywords: [
        'kaktus alternativ',
        'kaktus alternativi',
        'salon rezervasiya proqramı',
        'otaq rezervasiya sistemi',
        'antikafe idarəetmə',
        'launj rezervasiya',
        'otaq saatı proqramı',
        'Heselo',
      ],
      intro:
        'Kaktus axtarışında salon, gözəllik və mütəxəssis randevusu gözlənilir: xidmət müddəti, usta cədvəli, müştəri kartı. Heselo otaq, launj və antikafe yerini vaxtla satır — bron, canlı sessiya və kassa növbəsi. Bu bələdçi Kaktus tipli salon planlaşdırmasını otaq-vaxt sistemi ilə müqayisə edir — Heselo mütəxəssis/qəbul cədvəlini əvəz etmir.',
      sections: [
        {
          id: 'decision',
          title: 'Əvvəlcə qərar: salon randevusu, yoxsa otaq saatı?',
          paragraphs: [
            'Eyni «rezervasiya proqramı» axtarışı salon biznesi və otaqlı launj/antikafe üçün fərqli kateqoriyalara aparır.',
          ],
          bullets: [
            'Satılan: xidmət (saç, dırnaq, masaj), yoxsa otaq/stol saatı?',
            'Resurs: mütəxəssis/usta, yoxsa otaq və masa?',
            'Axın: randevu → xidmət → ödəniş, yoxsa bron → sessiya → uzadılma → kassa?',
          ],
        },
        {
          id: 'when-kaktus-fits',
          title: 'Kaktus (salon randevusu) nə vaxt qalmalıdır?',
          paragraphs: [
            'Salon, spa və gözəllik mərkəzində mütəxəssis cədvəli, xidmət paketi və müştəri tarixçəsi Kaktus kateqoriyasının mərkəzidir. Bu biznesdə otaq-vaxt paneli mütəxəssis planlaşdırmasını əvəz etmir.',
            'Heselo salon usta cədvəlini, xidmət kataloqunu və tipik gözəllik axınını təqlid etmir — əvəz etməyə nəzərdə tutulmayıb.',
          ],
          bullets: [
            'Gəlir xidmət randevusundan gəlir (müddət usta üzrə)',
            'Müştəri kartı və xidmət tarixçəsi vacibdir',
            'Otaq yalnız xidmət otağıdır, saatla satılmır',
            'Launj/karaoke otaq saatı biznesi deyil',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Heselo nə vaxt uyğundur?',
          paragraphs: [
            'Antikafe yeri, launj otağı, karaoke otağı və ya oxşar məkan vaxtla satılır, sessiya uzadılır və kassa növbəsi lazımdırsa — Heselo uyğundur. Salon randevusu ehtiyacı varsa Kaktus (və ya salon kateqoriyası) ayrıca qalmalıdır.',
            'Eyni brend həm salon, həm otaqlı launj idarə edirsə — iki sistem paralel ola bilər; satış və rezervasiya harada aparılır, yazılı bölün.',
          ],
          bullets: [
            'Əsas məhsul: otaq, masa və ya antikafe yeri saatı',
            'Bron → canlı sessiya → tarif və uzadılma',
            'İçki/qəlyanaltı sessiyaya və klub kassasına',
            'AZ / EN / RU və açıq qiymət ({low} AZN/aydan)',
          ],
        },
        {
          id: 'comparison',
          title: 'Kaktus tipli salon və Heselo — müqayisə',
          paragraphs: [
            'Kaktus qiyməti salon paketindən asılıdır — burada uydurma rəqəm yoxdur.',
          ],
          table: {
            headers: ['Aspekt', 'Kaktus tipli salon randevusu', 'Heselo'],
            rows: [
              ['Əsas fokus', 'Mütəxəssis randevusu, xidmət', 'Otaq/masa vaxtı, klub sessiyası'],
              ['Rezervasiya', 'Usta/qəbul cədvəli', 'Otaq və stansiya təqvimi'],
              ['Vaxt hesabı', 'Xidmət müddəti', 'Canlı sessiya, uzadılma, tarif'],
              ['Müştəri kartı', 'Salon tarixçəsi, xidmətlər', 'Klub müştəri və sessiya konturu'],
              ['Kassa', 'Salon ödənişi', 'Klub növbəsi + sessiya satışı'],
              ['Qiymət', 'Salon paketi ilə', 'Açıq: {low} AZN/aydan'],
              ['Dillər', 'Tez-tez AZ', 'AZ, EN, RU'],
              [
                'Ən yaxşı uyğunluq',
                'Salon, spa, gözəllik',
                'Antikafe, launj, karaoke, otaqlı əyləncə',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Rezervasiya proqramları landşaftı (qısa)',
          paragraphs: [
            'Azərbaycanda «rezervasiya» axtarışı salon (Kaktus və oxşar), restoran masa (Clopos, iiko) və otaq-vaxt klubu (Heselo) kateqoriyalarına bölünür. Salon proqramı launj otaq saatını tam idarə etmir; klub paneli usta cədvəlini əvəz etmir.',
            'Antikafe və launj tez-tez salon proqramı ilə sınanır — otaq saatı mərkəzdədirsə kateqoriyanı düzgün seçin.',
          ],
          bullets: [
            'Kaktus — salon, mütəxəssis, xidmət randevusu',
            'Restoran POS — masa və mətbəx',
            'Heselo — otaq-vaxt, antikafe, launj, karaoke',
            'Hibrid biznes: salon + otaqlı zona — iki kateqoriya',
          ],
        },
        {
          id: 'scenarios',
          title: 'Ssenarilər',
          paragraphs: ['Eyni bina fərqli biznes modelləri daşıya bilər.'],
          bullets: [
            'Salon: Kaktus — usta randevusu, xidmət; Heselo lazım deyil',
            'Antikafe: yer/masa saatı — Heselo bron və sessiya',
            'Launj: otaq saatı və minimum bar — Heselo; ağır restoran ayrı POS',
            'Salon + launj otaqları: Kaktus salon zonasında, Heselo otaq saatında',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Qərar checklisti',
          paragraphs: [
            'Kaktus-dan Heselo-ya «keçid» yalnız biznes modeli otaq-vaxta dəyişəndə məna kəsb edir — salon randevusunu köçürməyin.',
          ],
          bullets: [
            'Gəlirin faizi: xidmət randevusu vs otaq saatı',
            'Otaq/masa siyahısı və tarif paketləri',
            'Demoda bron → sessiya → kassa (otaq modeli)',
            'Salon qalırsa Kaktus-u saxlayın; otaq resurslarını ayrıca idarə edin',
            'Front desk: hansı sistemdə hansı rezervasiya açılır — təlim verin',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo Kaktus-u əvəz edir?',
          a: 'Xeyr. Kaktus salon/mütəxəssis randevusuna fokuslanır. Heselo otaq-vaxt, launj, antikafe və klub sessiyasıdır. Salon cədvəli Kaktus (və ya salon kateqoriyası) qalmalıdır.',
        },
        {
          q: 'Antikafe üçün Kaktus olar?',
          a: 'Antikafe yer/masa saatı satırsa, salon randevu modeli uyğun gəlmir. Otaq-vaxt paneli (Heselo) daha yaxın kateqoriyadır.',
        },
        {
          q: 'Launj otaqları?',
          a: 'Otaq saatı və bron mərkəzdədirsə Heselo uyğundur; salon xidməti yoxdursa Kaktus tələb olunmur.',
        },
        {
          q: 'Heselo qiyməti?',
          a: '{low} AZN/aydan, AZ / EN / RU.',
        },
        {
          q: 'Kaktus qiymətini necə müqayisə etməliyəm?',
          a: 'Rəsmi salon paketi ilə — burada uydurma rəqəm yoxdur.',
        },
        {
          q: 'Hər ikisi bir yerdə?',
          a: 'Bəli — salon zonası Kaktus, otaqlı launj/antikafe Heselo.',
        },
        {
          q: 'Demo necə keçirilir?',
          a: 'Otaq/masa resurslarınızla sessiya axınını yoxlayın; salon usta cədvəli demo mövzusu deyil.',
        },
        {
          q: 'Karaoke otağı salon proqramı ilə?',
          a: 'Saatla satılan karaoke otağı salon randevusu deyil — otaq-vaxt sistemi (Heselo) uyğundur.',
        },
      ],
      ctaTitle: 'Otaq-vaxt launj/antikafe axınını yoxlayın',
      ctaBody:
        'Demo istəyin: otaq və masalarınızı nümunə kimi qurub bron, canlı sessiya və kassa növbəsini birlikdə sınayaq — salon randevusu Kaktus-da qala bilər.',
    },
    en: {
      shortTitle: 'Kaktus alternative — room vs salon',
      h1: 'Salon appointments vs room sessions — Kaktus alternative',
      seoTitle: 'Kaktus Alternative — Salon Booking vs Heselo Room-Time | Heselo',
      seoDescription:
        'Kaktus is salon/beauty appointments; Heselo is room and lounge sessions. Heselo does not replace specialist scheduling — comparison table, landscape, FAQ — AZ, EN, RU.',
      keywords: [
        'Kaktus alternative',
        'Kaktus alternative booking',
        'salon booking software',
        'room booking system',
        'anticafe management',
        'lounge booking',
        'room hourly software',
        'Heselo',
      ],
      intro:
        'Searches for Kaktus expect salon, beauty and specialist appointments: service duration, staff calendar, client card. Heselo sells anticafe seats, lounge and karaoke rooms by time — booking, live session and cash shifts. This guide compares Kaktus-style salon planning with room-time systems — Heselo does not replace specialist/reception scheduling.',
      sections: [
        {
          id: 'decision',
          title: 'Decide first: salon appointment or room hours?',
          paragraphs: [
            'The same “booking software” search leads salons and room-based lounge/anticafe to different categories.',
          ],
          bullets: [
            'Sold: service (hair, nails, massage) or room/table hours?',
            'Resource: specialist/stylist or room and table?',
            'Flow: appointment → service → pay, or book → session → extension → cash?',
          ],
        },
        {
          id: 'when-kaktus-fits',
          title: 'When should Kaktus (salon booking) stay?',
          paragraphs: [
            'In salon, spa and beauty, staff calendar, service catalogue and client history are central to Kaktus’s category. A room-time panel does not replace specialist planning there.',
            'Heselo does not mimic staff schedules, service catalogues or typical beauty flows — it is not meant to replace them.',
          ],
          bullets: [
            'Revenue from service appointments (duration per stylist)',
            'Client card and service history matter',
            'Rooms are service rooms, not sold by the hour',
            'Not a lounge/karaoke hourly business',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'When does Heselo fit?',
          paragraphs: [
            'When anticafe seats, lounge rooms, karaoke rooms or similar are sold by time with extensions and shift cash — Heselo fits. If salon appointments are needed, Kaktus (or salon category) stays separate.',
            'One brand running salon plus room lounge can use both systems in parallel — document where each booking lives.',
          ],
          bullets: [
            'Core product: room, table or anticafe seat hours',
            'Book → live session → rates and extensions',
            'Drinks/snacks on session and club till',
            'AZ / EN / RU and public pricing (from {low} AZN/month)',
          ],
        },
        {
          id: 'comparison',
          title: 'Kaktus-style salon vs Heselo — comparison',
          paragraphs: ['Kaktus pricing depends on salon package — no invented figures here.'],
          table: {
            headers: ['Aspect', 'Kaktus-style salon booking', 'Heselo'],
            rows: [
              ['Primary focus', 'Specialist appointment, service', 'Room/table time, club session'],
              ['Booking', 'Staff/reception calendar', 'Room and station calendar'],
              ['Time billing', 'Service duration', 'Live session, extension, rates'],
              ['Client card', 'Salon history, services', 'Club client and session contour'],
              ['Cash', 'Salon payment', 'Club shift + session sales'],
              ['Pricing', 'Salon package', 'Public: from {low} AZN/month'],
              ['Languages', 'Often AZ', 'AZ, EN, RU'],
              [
                'Best fit',
                'Salon, spa, beauty',
                'Anticafe, lounge, karaoke, room entertainment',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Booking software landscape (short)',
          paragraphs: [
            'In Azerbaijan, “booking” splits into salon (Kaktus and similar), restaurant tables (Clopos, iiko) and room-time clubs (Heselo). Salon tools do not fully run lounge room hours; club panels do not replace stylist calendars.',
            'Anticafe and lounge are often tried on salon software — if room hours are central, pick the right category.',
          ],
          bullets: [
            'Kaktus — salon, specialist, service appointment',
            'Restaurant POS — table and kitchen',
            'Heselo — room-time, anticafe, lounge, karaoke',
            'Hybrid business: salon + room zone — two categories',
          ],
        },
        {
          id: 'scenarios',
          title: 'Scenarios',
          paragraphs: ['One building can host different business models.'],
          bullets: [
            'Salon: Kaktus — staff appointment, services; Heselo not needed',
            'Anticafe: seat/table hours — Heselo booking and session',
            'Lounge: room hours and minimal bar — Heselo; heavy restaurant on separate POS',
            'Salon + lounge rooms: Kaktus in salon area, Heselo on room hours',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Decision checklist',
          paragraphs: [
            '“Switching” from Kaktus to Heselo only makes sense when the model moves to room-time — do not migrate salon appointments.',
          ],
          bullets: [
            'Revenue split: service appointments vs room hours',
            'Room/table list and rate packages',
            'Demo book → session → cash (room model)',
            'If salon remains, keep Kaktus; manage room resources separately',
            'Front desk: which system opens which booking — train staff',
          ],
        },
      ],
      faq: [
        {
          q: 'Does Heselo replace Kaktus?',
          a: 'No. Kaktus focuses on salon/specialist appointments. Heselo is room-time, lounge, anticafe and club sessions. Salon scheduling should stay on Kaktus (or salon category).',
        },
        {
          q: 'Kaktus for anticafe?',
          a: 'If anticafe sells seat/table hours, salon appointment model does not fit. Room-time panel (Heselo) is the closer category.',
        },
        {
          q: 'Lounge rooms?',
          a: 'When room hours and booking are central, Heselo fits; without salon services, Kaktus is not required.',
        },
        {
          q: 'Heselo pricing?',
          a: 'From {low} AZN/month, AZ / EN / RU.',
        },
        {
          q: 'How to compare Kaktus pricing?',
          a: 'Official salon package — no invented figures here.',
        },
        {
          q: 'Both together?',
          a: 'Yes — salon zone on Kaktus, room lounge/anticafe on Heselo.',
        },
        {
          q: 'How does a demo work?',
          a: 'Test session flow with your room/table resources; stylist calendar is not the demo topic.',
        },
        {
          q: 'Karaoke room on salon software?',
          a: 'Hourly karaoke rooms are not salon appointments — room-time system (Heselo) fits.',
        },
      ],
      ctaTitle: 'Test room-time lounge/anticafe flow',
      ctaBody:
        'Request a demo. We can model your rooms and tables and walk booking, live session and cash shifts — salon appointments can stay on Kaktus.',
    },
    ru: {
      shortTitle: 'Альтернатива Kaktus — комната vs салон',
      h1: 'Запись в салон vs сеанс комнаты — альтернатива Kaktus',
      seoTitle: 'Альтернатива Kaktus — салон vs Heselo время комнат | Heselo',
      seoDescription:
        'Kaktus — запись в салон/бьюти; Heselo — сеансы комнат и лаунжа. Heselo не заменяет расписание мастеров — таблица, ландшафт, FAQ — AZ, EN, RU.',
      keywords: [
        'альтернатива kaktus',
        'альтернатива kaktus запись',
        'программа записи салон',
        'бронирование комнат',
        'управление антикафе',
        'бронирование лаунж',
        'почасовые комнаты',
        'Heselo',
      ],
      intro:
        'Поиск Kaktus подразумевает салон, бьюти и запись к специалисту: длительность услуги, календарь мастера, карта клиента. Heselo продаёт места в антикафе, лаунж- и караоке-комнаты по времени — бронь, живой сеанс и кассовые смены. Это руководство сравнивает планирование салона в духе Kaktus с системами времени комнат — Heselo не заменяет расписание специалистов/ресепшена.',
      sections: [
        {
          id: 'decision',
          title: 'Сначала решение: запись в салон или часы комнаты?',
          paragraphs: [
            'Один поиск «программа бронирования» ведёт салон и лаунж/антикафе с комнатами в разные категории.',
          ],
          bullets: [
            'Продаётся: услуга (волосы, ногти, массаж) или часы комнаты/стола?',
            'Ресурс: специалист/мастер или комната и стол?',
            'Поток: запись → услуга → оплата или бронь → сеанс → продление → касса?',
          ],
        },
        {
          id: 'when-kaktus-fits',
          title: 'Когда оставить Kaktus (запись в салон)?',
          paragraphs: [
            'В салоне, spa и бьюти календарь мастеров, каталог услуг и история клиента — центр категории Kaktus. Панель времени комнат не заменяет планирование специалистов.',
            'Heselo не имитирует расписание мастеров, каталог услуг и типичный бьюти-поток — не для их замены.',
          ],
          bullets: [
            'Выручка от записи на услуги (длительность по мастеру)',
            'Важны карта клиента и история услуг',
            'Комнаты — процедурные, не продаются по часам',
            'Не бизнес лаунж/караоке по часам',
          ],
        },
        {
          id: 'when-heselo-fits',
          title: 'Когда подходит Heselo?',
          paragraphs: [
            'Если места антикафе, лаунж-комнаты, караоке и т.п. продаются по времени с продлениями и кассовой сменой — Heselo подходит. Если нужна запись в салон, Kaktus (или салонная категория) остаётся отдельно.',
            'Один бренд с салоном и комнатным лаунжем может использовать обе системы параллельно — зафиксируйте, где какая бронь.',
          ],
          bullets: [
            'Основной продукт: часы комнаты, стола или места в антикафе',
            'Бронь → живой сеанс → тариф и продления',
            'Напитки/закуски к сеансу и клубной кассе',
            'AZ / EN / RU и открытая цена (от {low} AZN/мес.)',
          ],
        },
        {
          id: 'comparison',
          title: 'Салон в духе Kaktus и Heselo — сравнение',
          paragraphs: ['Цена Kaktus зависит от салонного пакета — выдуманных цифр здесь нет.'],
          table: {
            headers: ['Аспект', 'Запись в салон (Kaktus)', 'Heselo'],
            rows: [
              ['Основной фокус', 'Запись к специалисту, услуга', 'Время комнаты/стола, клубный сеанс'],
              ['Бронирование', 'Календарь мастера/ресепшена', 'Календарь комнат и станций'],
              ['Учёт времени', 'Длительность услуги', 'Живой сеанс, продление, тариф'],
              ['Карта клиента', 'История салона, услуги', 'Клубный клиент и сеанс'],
              ['Касса', 'Оплата в салоне', 'Клубная смена + продажи в сеансе'],
              ['Цена', 'Салонный пакет', 'Открыто: от {low} AZN/мес.'],
              ['Языки', 'Часто AZ', 'AZ, EN, RU'],
              [
                'Лучшее соответствие',
                'Салон, spa, бьюти',
                'Антикафе, лаунж, караоке, комнатные развлечения',
              ],
            ],
          },
        },
        {
          id: 'landscape',
          title: 'Ландшафт программ бронирования (кратко)',
          paragraphs: [
            'В Азербайджане «бронирование» делится на салон (Kaktus и аналоги), ресторанные столы (Clopos, iiko) и клубы с временем комнат (Heselo). Салонное ПО не ведёт полностью часы лаунж-комнат; клубная панель не заменяет календарь мастеров.',
            'Антикафе и лаунж часто пробуют на салонном ПО — если часы комнат в центре, выберите верную категорию.',
          ],
          bullets: [
            'Kaktus — салон, специалист, запись на услугу',
            'Ресторанная POS — стол и кухня',
            'Heselo — время комнат, антикафе, лаунж, караоке',
            'Гибрид: салон + комнатная зона — две категории',
          ],
        },
        {
          id: 'scenarios',
          title: 'Сценарии',
          paragraphs: ['Одно здание может совмещать разные модели.'],
          bullets: [
            'Салон: Kaktus — запись к мастеру, услуги; Heselo не нужен',
            'Антикафе: часы места/стола — бронь и сеанс в Heselo',
            'Лаунж: часы комнат и минимальный бар — Heselo; тяжёлая кухня на отдельной POS',
            'Салон + лаунж-комнаты: Kaktus в салоне, Heselo на часы комнат',
          ],
        },
        {
          id: 'how-to-switch',
          title: 'Чеклист решения',
          paragraphs: [
            '«Переход» с Kaktus на Heselo имеет смысл только при смене модели на время комнат — не переносите салонные записи.',
          ],
          bullets: [
            'Доля выручки: запись на услуги vs часы комнат',
            'Список комнат/столов и пакеты тарифов',
            'На демо: бронь → сеанс → касса (модель комнаты)',
            'Если салон остаётся — Kaktus; комнатные ресурсы отдельно',
            'Ресепшен: в какой системе какая бронь — обучите персонал',
          ],
        },
      ],
      faq: [
        {
          q: 'Heselo заменяет Kaktus?',
          a: 'Нет. Kaktus — запись в салон/к специалисту. Heselo — время комнат, лаунж, антикафе и клубные сеансы. Расписание салона остаётся на Kaktus (или салонной категории).',
        },
        {
          q: 'Kaktus для антикафе?',
          a: 'Если антикафе продаёт часы места/стола, модель записи в салон не подходит. Ближе панель времени комнат (Heselo).',
        },
        {
          q: 'Лаунж-комнаты?',
          a: 'Когда часы комнат и бронь в центре — Heselo; без салонных услуг Kaktus не нужен.',
        },
        {
          q: 'Цена Heselo?',
          a: 'От {low} AZN/мес., AZ / EN / RU.',
        },
        {
          q: 'Как сравнить цену Kaktus?',
          a: 'По официальному салонному пакету — без выдуманных цифр.',
        },
        {
          q: 'Обе системы вместе?',
          a: 'Да — салонная зона на Kaktus, комнатный лаунж/антикафе на Heselo.',
        },
        {
          q: 'Как проходит демо?',
          a: 'Проверьте поток сеанса на ваших комнатах/столах; календарь мастеров не тема демо.',
        },
        {
          q: 'Караоке-комната на салонном ПО?',
          a: 'Почасовая караоке-комната — не запись в салон; подходит система времени комнат (Heselo).',
        },
      ],
      ctaTitle: 'Проверьте поток лаунж/антикафе по времени комнат',
      ctaBody:
        'Запросите демо: смоделируем комнаты и столы и проверим бронь, живой сеанс и кассовые смены — записи в салон могут остаться в Kaktus.',
    },
  }

export function kaktusAlternativeGuide(locale: Locale): GuideCopy {
  const copy = guides[locale]
  return {
    slug: 'kaktus-alternative',
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
    relatedSolutions,
    ...copy,
  }
}
