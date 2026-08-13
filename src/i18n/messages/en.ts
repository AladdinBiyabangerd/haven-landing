import type { Messages } from '../types'

export const en: Messages = {
  common: {
    linkArrow: ' →',
    truncatedEllipsis: '…',
  },
  site: {
    tagline: 'Tables, rooms, floor, and cash — in one place.',
    description:
      'Heselo brings room, station, and table bookings, the live floor, cash, inventory, and customers into one admin panel for gaming clubs (PlayStation), karaoke rooms, billiards, anti-cafés, and room lounges.',
  },
  nav: {
    home: 'Home',
    features: 'Features',
    solutions: 'Solutions',
    guides: 'Guides',
    pricing: 'Pricing',
    contact: 'Contact',
    demo: 'Request a demo',
    toggleMenu: 'Open or close menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to content',
    breadcrumbs: 'Breadcrumb',
    primaryNav: 'Primary',
    languageNav: 'Language',
  },
  footer: {
    product: 'Product',
    company: 'Company',
    solutions: 'Solutions',
    learn: 'Learn',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    rights: 'All rights reserved.',
    tagline: 'Tables · Rooms · Live floor · Cash',
  },
  hero: {
    brandHint: 'Venue management system',
    title: 'A booking lost in WhatsApp wrecks the shift.',
    subtitle:
      'Heselo keeps the room and PlayStation schedule, live session, and cash on one screen.',
    ctaPrimary: 'WhatsApp — 15 min',
    ctaSecondary: 'Write via the form',
    visualAlt: 'Heselo board showing table and room status, sessions, and payment',
  },
  trust: {
    items: [
      '15-minute demo, no card',
      'PlayStation, karaoke, billiards, anti-café',
      'PS from 9 AZN/month · rooms from 15 AZN/month',
      'AZ / RU / EN panel',
    ],
  },
  demoPromise: {
    eyebrow: 'Demo',
    title: 'What we show',
    titleAccent: 'in 15 minutes.',
    items: [
      {
        title: 'Your tables and rooms',
        desc: 'PlayStation stations, karaoke rooms, or billiard tables — we open the schedule around your layout.',
      },
      {
        title: 'Live session and cash',
        desc: 'From walk-in to payment on one screen: time, extras, balance due.',
      },
      {
        title: 'Closing the shift',
        desc: 'Cash count and report at the end of the day — who changed what is visible.',
      },
    ],
  },
  pain: {
    eyebrow: 'Why change',
    title: 'Spreadsheets and chat apps',
    titleAccent: 'cannot run a floor.',
    intro:
      'When bookings live in one place, money in another, and stock on paper, closing the shift turns messy.',
    withoutLabel: 'Before',
    withLabel: 'With Heselo',
    before: [
      'The schedule and live floor fall out of sync',
      'Payments blur when the shift closes',
      'Stock counts sit outside day-to-day work',
      'Past edits happen with no clear gate',
    ],
    after: [
      'A straight path from booking to live session',
      'Cash, card, and bank stay clear by day and shift',
      'Products and stock share one list',
      'Sensitive actions need a protection code',
    ],
  },
  pillars: {
    eyebrow: 'What you get',
    title: 'The same modules',
    titleAccent: 'as the Heselo panel.',
    intro:
      'What you see in the admin nav is what we describe here: live floor, schedule, cash, catalog, customers, and stats.',
    items: [
      {
        title: 'Live tracking',
        subtitle: 'Floor',
        desc: 'Active sessions, add products, pause/stop, receipts, and payment — the real floor state.',
        points: ['Add products', 'Pay / close', 'Delete behind a code'],
      },
      {
        title: 'Schedule & reservations',
        subtitle: 'Bookings',
        desc: 'Tables and rooms on one schedule. Reservation list, transfer, cancel, and history.',
        points: ['Schedule', 'Reservations', 'Past days protected'],
      },
      {
        title: 'Cash',
        subtitle: 'Money',
        desc: 'Open/close shift, transactions, cash report, and cash count — day and shift stay separate.',
        points: ['Cash drawer', 'Cash report', 'Cash reconciliation'],
      },
      {
        title: 'Products, stock, sale',
        subtitle: 'Catalog',
        desc: 'Product catalog, inventory counts, and walk-in quick sale on the same list.',
        points: ['Products', 'Inventory', 'Quick sale'],
      },
      {
        title: 'Customers',
        subtitle: 'CRM',
        desc: 'Customer cards, history, and import — tied to reservations and live sessions.',
        points: ['Customers', 'Import', 'Visit history'],
      },
      {
        title: 'Stats & settings',
        subtitle: 'Control',
        desc: 'Payment, customer, and inventory statistics; staff, permissions, protection code, and price calculator.',
        points: ['Statistics', 'Permissions', 'Protection code'],
      },
    ],
  },
  how: {
    eyebrow: 'Getting started',
    title: 'Three steps',
    titleAccent: 'and you are live.',
    steps: [
      {
        title: 'Set up the venue',
        desc: 'Add tables and rooms, products, your team, permissions, and the protection code.',
      },
      {
        title: 'Run the day',
        desc: 'Take bookings on the schedule, manage sessions in live tracking, post payments to cash.',
      },
      {
        title: 'Close the day',
        desc: 'Cash count, report, and statistics — owners see a clear end-of-day picture.',
      },
    ],
  },
  showcase: {
    eyebrow: 'In the product',
    title: 'Tables and rooms',
    titleAccent: 'on one board.',
    intro:
      'Status and balances in floor language, aligned with how owners keep the books.',
    liveLabel: 'Live',
    dueLabel: 'Due',
    shiftLabel: 'Shift open',
    tables: [
      { name: 'PS-1', status: 'Active', meta: '1h 24m · ₼ 38' },
      { name: 'Karaoke 2', status: 'Paying', meta: 'Due ₼ 45' },
      { name: 'Billiards 3', status: 'Booked', meta: '19:30 · 4 guests' },
      { name: 'VIP room', status: 'Free', meta: 'Ready' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'People ask us this often',
    items: [
      {
        q: 'Which businesses is Heselo for?',
        a: 'Gaming clubs (PlayStation and console), karaoke rooms, billiards, anti-cafés, and room lounges — venues that need room, station, or table booking, live tracking, and cash.',
      },
      {
        q: 'Can I manage reservations with Heselo?',
        a: 'Yes. Schedule and reservations cover table and room booking, moves, cancels, and history. When guests arrive, the same booking becomes a live session.',
      },
      {
        q: 'Does Heselo include a cash / POS flow?',
        a: 'Yes. Open/close shift, transactions, cash report, and cash count are in the same panel — no separate till app required.',
      },
      {
        q: 'Is inventory management included?',
        a: 'Yes. Product catalog, stock levels, and count journals; quick sale works on the same list without a booking.',
      },
      {
        q: 'Can I use it on mobile?',
        a: 'Heselo is a web panel — open it in a modern browser on desktop or mobile. The core flow stays the same.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Message us on WhatsApp or fill in the form — phone or email is enough. We walk through a 15-minute screen share and usually reply within two hours during working hours.',
      },
    ],
  },
  seoOverview: {
    eyebrow: 'What is Heselo?',
    title: 'Business management software',
    titleAccent: 'for daily venue work.',
    paragraphs: [
      'Heselo is a venue management system: reservations, live floor, cash, and inventory in one panel. The goal is to replace scattered spreadsheets, chats, and tools with one workday.',
    ],
  },
  audiences: {
    eyebrow: 'Who it is for',
    title: 'Solution pages',
    titleAccent: 'by business type.',
    intro: 'Each page matches that business’s search intent and daily flow.',
    items: [
      {
        slug: 'gaming',
        title: 'Gaming club management',
        desc: 'PlayStation and console stations, live sessions, and sales.',
        anchor: 'Gaming club solution',
      },
      {
        slug: 'karaoke',
        title: 'Karaoke management system',
        desc: 'Room booking, sessions, and cash flow.',
        anchor: 'Karaoke solution',
      },
      {
        slug: 'billiards',
        title: 'Billiards club software',
        desc: 'Tables/rooms, time, and live play sessions.',
        anchor: 'Billiards solution',
      },
      {
        slug: 'antikafe',
        title: 'Anti-café management',
        desc: 'Hourly payment, table/room booking, and cash.',
        anchor: 'Anti-café solution',
      },
      {
        slug: 'lounge',
        title: 'Room lounge management',
        desc: 'VIP room booking, sessions, and cash.',
        anchor: 'Room lounge solution',
      },
    ],
  },
  guidesTeaser: {
    eyebrow: 'Guides',
    title: 'Practical answers to',
    titleAccent: 'common searches.',
    intro:
      'Short explanations for common search questions — each links to the matching solution page.',
    cta: 'All guides',
  },
  guidesPage: {
    updatedLabel: 'Last updated:',
  },
  productShot: {
    chromeLabel: 'Heselo · Panel',
    alts: {
      'live-floor': 'Heselo live floor — active room sessions and payment',
      schedule: 'Heselo schedule — room and table booking timeline',
      sessions: 'Heselo sessions list — active and closed sessions',
      cash: 'Heselo cash desk — daily transactions and balance',
      inventory: 'Heselo inventory — stock levels and counts',
      products: 'Heselo product catalog — sale prices',
      'room-analytics': 'Heselo room analytics — revenue and peak hours',
      audit: 'Heselo audit log — operation history',
    },
  },
  pwa: {
    description: 'Venue management — reservations, live floor, cash, and inventory',
  },
  productGallery: {
    eyebrow: 'Product screens',
    title: 'Real interface —',
    titleAccent: 'not a mockup.',
    intro: 'Screenshots from the Heselo admin panel.',
  },
  eeat: {
    eyebrow: 'Trust & transparency',
    title: 'No fake reviews —',
    titleAccent: 'verifiable facts.',
    intro:
      'Heselo is a young product; we do not show invented testimonials or star ratings. Pricing, payment logic, and legal pages are easy to check.',
    auditIntro:
      'The audit log records who performed each booking, session, and product action — for accountability at day close.',
    items: [
      {
        title: 'Open pricing',
        desc: 'Plans and limits are on the pricing page — no hidden fees.',
        href: '/pricing',
        linkLabel: 'See pricing',
      },
      {
        title: 'Server-side payment math',
        desc: 'Balances and payments are calculated on the server — not guessed in the UI.',
        href: '/features',
        linkLabel: 'Features',
      },
      {
        title: 'Privacy & terms',
        desc: 'Public legal pages aligned with the admin product.',
        href: '/privacy',
        linkLabel: 'Privacy',
      },
    ],
  },
  cta: {
    title: 'Start the next shift with Heselo.',
    subtitle: 'A 15-minute screen share — we usually reply within two hours during working hours.',
    button: 'Write via the form',
    whatsapp: 'WhatsApp — 15 min',
  },
  featuresPage: {
    eyebrow: 'Features',
    title: 'Reservations, cash, and inventory — one panel',
    intro:
      'This list matches the Heselo admin navigation — the same modules as in the product, not invented for marketing.',
    solutionLinkLabel: 'View solution page',
    modules: [
      {
        title: 'Live tracking',
        desc: 'Active floor sessions: add products or amounts, pause, stop, receipts, payment, and delete (behind a code).',
        bullets: ['Session status', 'Products / amounts', 'Receipt print'],
      },
      {
        title: 'Schedule',
        desc: 'Day and week views for tables, rooms, and other resources — the same data as reservations.',
        bullets: ['Tables', 'Rooms', 'Resource pick'],
      },
      {
        title: 'Reservations',
        desc: 'List and form: customer, time, labels, pre-order, collect payment, transfer, cancel, and history.',
        bullets: ['New booking', 'Payment', 'History'],
        solutionSlug: 'reservations',
      },
      {
        title: 'Cash, report, reconciliation',
        desc: 'Open/close shift, transactions, closed-day history, cash report, and cash count.',
        bullets: ['Shift', 'Cash / bank / POS', 'Period close'],
        solutionSlug: 'pos',
      },
      {
        title: 'Products, inventory, quick sale',
        desc: 'Catalog prices, stock balances and count logs; walk-in sale without a booking.',
        bullets: ['Catalog', 'Counts', 'Quick sale'],
        solutionSlug: 'inventory',
      },
      {
        title: 'Customers',
        desc: 'Customer cards, source/profile, and import — one database with reservations and sessions.',
        bullets: ['Cards', 'Import', 'History'],
      },
      {
        title: 'Statistics',
        desc: 'Payment, customer, and inventory statistics — overview, slices, and compare.',
        bullets: ['Payments', 'Customers', 'Inventory'],
      },
      {
        title: 'Price calculator',
        desc: 'Estimates from resource and tariff rules — the same rules as bookings and live sessions.',
        bullets: ['Tariffs', 'Resource', 'Duration'],
      },
      {
        title: 'Settings & security',
        desc: 'Staff invites, page-and-button permissions, venue protection code, receipts, and other venue settings.',
        bullets: ['Permissions', 'Protection code', 'Staff'],
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Pick your venue type first',
    intro:
      'Everything is monthly. PlayStation and billiards from 9 AZN, anti-cafés from 15, karaoke and lounges from 19. Pick a type first — plans then open by station, table, or room count.',
    chooseType: 'Venue type',
    note: 'Price is for one venue. Larger capacity or several branches — custom quote.',
    cta: 'Request a demo',
    periodMonthly: '/ month',
    periodOneTime: 'one-time',
    includedModules: 'All panel modules',
    oneVenue: '1 venue',
    noCard: 'No card required',
    bestFor: 'Best for',
    popular: 'Most chosen',
    capacity: {
      stations: 'Up to {n} stations',
      tables: 'Up to {n} tables',
      rooms: 'Up to {n} rooms',
      zones: 'Up to {n} zones',
    },
    planNames: {
      starter: 'Small',
      plus: 'Medium',
      pro: 'Large',
    },
    faq: [
      {
        q: 'Why aren’t all prices shown at once?',
        a: 'A PlayStation club and a karaoke room do not buy the same way. Pick the type first — then Small, Medium, and Large open by station or room count.',
      },
      {
        q: 'Why is karaoke more than PlayStation?',
        a: 'PlayStation and billiards start at 9 AZN — station and table flow is simple. Karaoke and lounges run room schedules, extensions, and cash, so they start at 19 AZN.',
      },
      {
        q: 'Can I change plan later?',
        a: 'Yes. When station or room count grows we move Small → Medium → Large. Several branches get a custom quote.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Message us on WhatsApp or use the form for a free demo — 15-minute screen share, no card. We usually reply within two hours during working hours.',
      },
    ],
    crosslinks: {
      features: 'All features',
      solutions: 'Business solutions',
      contact: 'Request a demo',
    },
    offers: {
      gaming: {
        name: 'Gaming club / PlayStation',
        intro: 'Monthly. 9 / 15 / 25 AZN by station count. A timer only counts time — here booking, session, and cash sit in one panel.',
        plans: {
          starter: {
            forWhom: 'Small PS club: one floor, one shift',
            desc: 'Replace phone notes and a whiteboard with a schedule and live session. Cash closes the day.',
            features: [
              'Up to {n} PS/PC stations',
              'Booking: schedule, move, cancel',
              'Live session: time, extend, pay',
              'Cash shift and day close',
              'Snacks and drinks',
            ],
          },
          plus: {
            forWhom: 'A club that fills up in the evening',
            desc: 'Several sessions at once, stock levels, and customer history — the shift stays clear.',
            features: [
              'Up to {n} stations',
              'Several live sessions at once',
              'Cash + inventory levels',
              'Customer cards and visit history',
              'Shift count',
            ],
          },
          pro: {
            forWhom: 'Large or mixed PS+PC club',
            desc: 'Statistics, staff permissions, and past-day protection — the night shift closes the same way.',
            features: [
              'Up to {n} stations',
              'PS and PC on one schedule',
              'Stock counts and statistics',
              'Staff permissions',
              'Past-day protection',
            ],
          },
        },
      },
      billiards: {
        name: 'Billiards',
        intro: 'Monthly. 9 / 15 / 25 AZN by table count. Not a table timer — booking, session, and cash in one panel.',
        plans: {
          starter: {
            forWhom: 'Small billiards hall: a few tables',
            desc: 'Bookings leave the whiteboard; if a session extends, payment stays on the same record.',
            features: [
              'Up to {n} tables',
              'Table booking and move',
              'Live session and extend',
              'Cash shift',
              'Snacks and drinks',
            ],
          },
          plus: {
            forWhom: 'Billiards club that also has VIP rooms',
            desc: 'Tables and rooms on one schedule; inventory and customer history open.',
            features: [
              'Up to {n} tables',
              'Tables and VIP rooms on one schedule',
              'Several sessions at once',
              'Cash + inventory',
              'Customer history',
            ],
          },
          pro: {
            forWhom: 'Large hall or mixed tables + rooms',
            desc: 'Statistics and staff permissions — you see which table earned what.',
            features: [
              'Up to {n} tables',
              'Hall and rooms on one till',
              'Stock counts and statistics',
              'Staff permissions',
              'Past-day protection',
            ],
          },
        },
      },
      karaoke: {
        name: 'Karaoke',
        intro: 'Monthly. 19 / 29 / 39 AZN by room count. One lost room booking costs more than a month — that is why rooms have their own plans.',
        plans: {
          starter: {
            forWhom: 'Small karaoke: a few rooms',
            desc: 'Room bookings stop disappearing in chats. On arrival a session opens; extra time and drinks stay on the same bill.',
            features: [
              'Up to {n} karaoke rooms',
              'Room schedule: book, move, cancel',
              'Live room session',
              'Extra time and products on one receipt',
              'Cash shift',
            ],
          },
          plus: {
            forWhom: 'Karaoke that fills on weekends',
            desc: 'Several room statuses on one board; inventory and customer history included.',
            features: [
              'Up to {n} rooms',
              'Several room sessions at once',
              'Cash + inventory levels',
              'Customer cards and repeats',
              'Shift count',
            ],
          },
          pro: {
            forWhom: 'Large karaoke or karaoke + lounge mix',
            desc: 'Statistics show which rooms stayed full; staff permissions split the night shift.',
            features: [
              'Up to {n} rooms',
              'Room occupancy statistics',
              'Stock counts',
              'Staff permissions',
              'Past-day protection',
            ],
          },
        },
      },
      lounge: {
        name: 'Room lounge',
        intro: 'Monthly. 19 / 29 / 39 AZN by VIP room count. An open-floor tool does not run a closed room session.',
        plans: {
          starter: {
            forWhom: 'Small lounge: a few VIP rooms',
            desc: 'Room booking and session in one place. Drinks and snacks attach to the room record; cash closes the day.',
            features: [
              'Up to {n} VIP rooms',
              'Room booking and move',
              'Live room session',
              'Products added to the same record',
              'Cash shift',
            ],
          },
          plus: {
            forWhom: 'Lounge running several VIP rooms at once',
            desc: 'Statuses do not collide; inventory and customer history open.',
            features: [
              'Up to {n} rooms',
              'Several room statuses at once',
              'Cash + inventory',
              'Customer history',
              'Shift count',
            ],
          },
          pro: {
            forWhom: 'Large lounge or lounge + karaoke mix',
            desc: 'Statistics and permissions — you see which room earned what.',
            features: [
              'Up to {n} rooms',
              'Room + cash statistics',
              'Stock counts',
              'Staff permissions',
              'Past-day protection',
            ],
          },
        },
      },
      antikafe: {
        name: 'Anti-café',
        intro: 'Monthly. 15 / 25 / 35 AZN by hourly zone count. A timer alone does not close booking and cash.',
        plans: {
          starter: {
            forWhom: 'Small anti-café: a few tables or zones',
            desc: 'Hourly pay ties to the booking; tea and snacks sell on the same session.',
            features: [
              'Up to {n} hourly zones',
              'Table/zone booking',
              'Hourly live session',
              'Tea and snack sales',
              'Cash shift',
            ],
          },
          plus: {
            forWhom: 'Anti-café that also has rooms',
            desc: 'Tables and rooms on one schedule; stock levels are tracked.',
            features: [
              'Up to {n} zones',
              'Tables and rooms on one schedule',
              'Several sessions at once',
              'Cash + inventory',
              'Customer history',
            ],
          },
          pro: {
            forWhom: 'Large anti-café or mixed zones',
            desc: 'Statistics show which hours stayed full.',
            features: [
              'Up to {n} zones',
              'Hourly occupancy statistics',
              'Stock counts',
              'Staff permissions',
              'Past-day protection',
            ],
          },
        },
      },
    },
    custom: {
      name: 'Custom',
      desc: 'Several branches or volume that does not fit the standard offers.',
      price: 'On request',
      cta: 'Request a quote',
      features: [
        'All panel modules',
        'Price matched to venue count',
        'Terms set together',
        'Setup discussed with you',
      ],
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ask for a demo or send a question',
    intro:
      'Tell us your venue type and roughly how many rooms or stations you have — we usually reply within two hours during working hours.',
    customTitle: 'Write to us for a custom price',
    customIntro:
      'Tell us how many venues, staff, and reservations you run each month — we quote from those numbers.',
    customNotice:
      'The fields below are required — the quote is based on these figures.',
    customSubmit: 'Send quote request',
    name: 'Full name',
    phone: 'Phone',
    email: 'Email',
    phoneOrEmailHint: 'Enter a phone number or an email — at least one is required.',
    waLead: 'Faster: message us on WhatsApp — 15-minute screen share, no card.',
    venue: 'Venue name',
    venueType: 'Venue type',
    venueTypePlaceholder: 'Select a type',
    venueTypes: [
      { value: 'gaming', label: 'Gaming club / PlayStation' },
      { value: 'karaoke', label: 'Karaoke' },
      { value: 'billiards', label: 'Billiards' },
      { value: 'antikafe', label: 'Anti-café' },
      { value: 'lounge', label: 'Room lounge' },
      { value: 'other', label: 'Other' },
    ],
    venuesCount: 'Number of venues',
    staffCount: 'Number of staff',
    reservationsPerMonth: 'Reservations per month (approx.)',
    criteriaHint: 'Numbers only. An estimate is fine.',
    message: 'Message',
    submit: 'Send',
    sending: 'Sending…',
    success: 'Got it. We will get in touch with you soon.',
    error: 'Could not send. Message us on WhatsApp or email instead.',
    alt: 'Or write to us at:',
    emailWrite: 'Email us',
    emailAria: 'Email Heselo',
    whatsapp: 'Message on WhatsApp',
    whatsappAria: 'Contact Heselo on WhatsApp',
    whatsappPrefill: "Hello, I'd like to learn more about Heselo for a PlayStation club / karaoke / billiards venue.",
  },
  privacy: {
    title: 'Privacy policy',
    updated: 'Last updated: 3 August 2026 · version 1.1',
  },
  terms: {
    title: 'Terms of use',
    updated: 'Last updated: 28 July 2026 · version 1.0',
  },
  notFound: {
    title: 'Page not found',
    body: 'This address does not exist or has moved.',
    back: 'Back to home',
  },
  seo: {
    ogImageAlt: 'Heselo — venue management: reservations, live floor, and cash',
    geoPlacename: 'Azerbaijan',
    countryName: 'Azerbaijan',
    softwareOperatingSystem: 'Web browser',
    knowsAbout: [
      'venue management software',
      'gaming club management',
      'karaoke room booking',
      'billiards club software',
      'anti-café management',
      'room lounge software',
    ],
    softwareFeatures: [
      'Live tracking',
      'Schedule and reservations',
      'Cash, report, and reconciliation',
      'Products, inventory, quick sale',
      'Customers',
      'Statistics',
      'Price calculator',
      'Azerbaijani / English / Russian',
    ],
    pages: {
      home: {
        title: 'Venue management system — booking, cash & inventory | Heselo',
        description:
          'Heselo venue management: room and station booking, live floor, cash, and inventory in one panel. For gaming clubs (PlayStation), karaoke, billiards, anti-cafés, and room lounges — free demo.',
        keywords: [
          'venue management system',
          'gaming club software',
          'playstation club software',
          'karaoke room booking',
          'Heselo',
        ],
      },
      features: {
        title: 'Reservation, cash & inventory features | Heselo',
        description:
          'Live tracking, schedule, reservations, cash software, inventory, quick sale, and statistics — the same modules as the Heselo panel.',
        keywords: [
          'reservation system',
          'cash software',
          'inventory management',
          'live tracking',
          'Heselo features',
        ],
      },
      pricing: {
        title: 'Pricing — Heselo plans',
        description:
          'Choose a venue type: PlayStation and billiards from 9 AZN/month, anti-cafés from 15, karaoke and lounges from 19. Small, Medium, Large by size. Free demo.',
        keywords: ['Heselo pricing', 'subscription plans', 'venue management pricing'],
      },
      contact: {
        title: 'Demo & contact — Heselo',
        description:
          'Request a venue management demo. WhatsApp or the form — we usually reply within two hours during working hours.',
        keywords: ['Heselo demo', 'venue software contact', 'reservation demo'],
      },
      privacy: {
        title: 'Privacy policy — Heselo',
        description:
          'How personal data is processed, stored, and protected — the same text as System → Documents in the app.',
        keywords: ['privacy', 'Heselo privacy', 'personal data'],
      },
      terms: {
        title: 'Terms of use — Heselo',
        description:
          'Accounts, permissions, protection code, and platform rules — the same text as System → Documents.',
        keywords: ['terms', 'Heselo terms', 'terms of use'],
      },
      solutions: {
        title: 'Business solutions — gaming club, karaoke, billiards | Heselo',
        description:
          'Venue management for gaming clubs (PlayStation), karaoke rooms, billiards, anti-cafés, and room lounges. Booking, cash, and inventory explained per venue type.',
        keywords: [
          'gaming club software',
          'playstation club software',
          'karaoke room booking',
          'billiards club software',
          'anti-cafe software',
        ],
      },
      guides: {
        title: 'Guides — club and room venue management | Heselo',
        description:
          'How gaming clubs, karaoke rooms, billiards, and anti-cafés run hourly booking, sessions, and cash — practical guides.',
        keywords: [
          'what is a gaming club management system',
          'karaoke room booking',
          'anti-cafe software explained',
        ],
      },
    },
    notFound: {
      title: '404 — Heselo',
      description: 'Page not found.',
      keywords: [],
    },
  },
}
