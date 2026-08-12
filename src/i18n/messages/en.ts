import type { Messages } from '../types'

export const en: Messages = {
  common: {
    linkArrow: ' →',
    truncatedEllipsis: '…',
  },
  site: {
    tagline: 'Tables, rooms, floor, and cash — in one place.',
    description:
      'Heselo brings table and room bookings, the live floor, cash, inventory, and customers into one admin panel for restaurants, lounges, coworking spaces, and similar venues.',
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
    title: 'Run reservations, the live floor, and cash in one panel.',
    subtitle:
      'Heselo connects table and room bookings, live sessions, cash, and inventory for restaurants, cafes, and similar venues. Reception and the floor follow the same day rules.',
    ctaPrimary: 'Free demo',
    ctaSecondary: 'See what you get',
    visualAlt: 'Heselo board showing table and room status, sessions, and payment',
  },
  trust: {
    items: [
      'Live tracking, schedule, and reservations',
      'Cash drawer, report, and reconciliation',
      'Products, inventory, and quick sale',
      'Permissions and a venue protection code',
    ],
  },
  pain: {
    eyebrow: 'Why change',
    title: 'Spreadsheets and chat apps',
    titleAccent: 'cannot run a floor.',
    intro:
      'When bookings live in one place, money in another, and stock on paper, closing the shift turns messy. Heselo ties it all to the same venue day.',
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
      { name: 'Table 3', status: 'Active', meta: '1h 24m · ₼ 38' },
      { name: 'Room 2', status: 'Paying', meta: 'Due ₼ 45' },
      { name: 'Table 7', status: 'Booked', meta: '19:30 · 4 guests' },
      { name: 'VIP Room', status: 'Free', meta: 'Ready' },
    ],
  },
  faq: {
    eyebrow: 'Questions',
    title: 'People ask us this often',
    items: [
      {
        q: 'Which businesses is Heselo for?',
        a: 'Restaurants, cafes, lounges, billiards, karaoke, gaming clubs, anti-cafés, and other venues that need table or room booking, live tracking, and cash.',
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
        a: 'Use the contact form or email heselo.online@gmail.com. Share your venue type and table/room count — we reply within one business day.',
      },
    ],
  },
  seoOverview: {
    eyebrow: 'What is Heselo?',
    title: 'Business management software',
    titleAccent: 'for daily venue work.',
    paragraphs: [
      'Heselo is a venue management system: reservations, live floor, cash, and inventory in one panel. The goal is to replace scattered spreadsheets, chats, and tools with one workday.',
      'If you are looking for restaurant software, tables, rooms, cash, and inventory stay in one flow. The same idea applies to cafes, billiards, karaoke, gaming clubs, and anti-cafés — resource schedule and live session stay connected.',
      'To start, set up the venue (tables, rooms, products, team), run the day with schedule and live tracking, and close with cash count and reports.',
    ],
  },
  audiences: {
    eyebrow: 'Who it is for',
    title: 'Solution pages',
    titleAccent: 'by business type.',
    intro:
      'These pages do not copy-paste the same text — each matches that business’s search intent and daily flow.',
    items: [
      {
        slug: 'restaurant',
        title: 'Restaurant management system',
        desc: 'Tables, live floor, restaurant cash, and inventory.',
        anchor: 'Learn more about restaurant management with Heselo',
      },
      {
        slug: 'cafe',
        title: 'Cafe management system',
        desc: 'Fast flow, walk-ins, and cafe software needs.',
        anchor: 'Read about cafe management with Heselo',
      },
      {
        slug: 'reservations',
        title: 'Table reservation system',
        desc: 'Schedule, booking list, and handoff to live session.',
        anchor: 'Learn more about the reservation system',
      },
      {
        slug: 'pos',
        title: 'Cash software',
        desc: 'Shifts, reports, and cash count.',
        anchor: 'Learn more about cash management',
      },
      {
        slug: 'inventory',
        title: 'Inventory management',
        desc: 'Catalog, stock levels, and restaurant inventory.',
        anchor: 'Learn more about inventory management',
      },
      {
        slug: 'billiards',
        title: 'Billiards club software',
        desc: 'Tables/rooms, time, and live play sessions.',
        anchor: 'Learn more about billiards club management',
      },
      {
        slug: 'karaoke',
        title: 'Karaoke management system',
        desc: 'Room booking, sessions, and cash flow.',
        anchor: 'Learn more about karaoke management',
      },
      {
        slug: 'gaming',
        title: 'Gaming club management',
        desc: 'Stations/tables, live sessions, and sales.',
        anchor: 'Learn more about gaming club management',
      },
      {
        slug: 'antikafe',
        title: 'Anti-café management',
        desc: 'Hourly payment, table/room booking, and cash.',
        anchor: 'Learn more about anti-café software',
      },
    ],
  },
  guidesTeaser: {
    eyebrow: 'Guides',
    title: 'Practical answers to',
    titleAccent: 'common searches.',
    intro:
      'Short, useful explanations for questions like “what is a restaurant management system?” and “how do reservations work?” — each links to the matching Heselo solution.',
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
    intro:
      'Screenshots from the Heselo admin panel: live floor, schedule, sessions, cash, inventory, products, analytics, and audit.',
  },
  eeat: {
    eyebrow: 'Trust & transparency',
    title: 'No fake reviews —',
    titleAccent: 'verifiable facts.',
    intro:
      'Heselo is a young product; we do not show invented testimonials or star ratings. Instead we keep pricing, contact, and how the product works easy to check.',
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
        title: 'AZ / EN / RU panel',
        desc: 'Team languages supported for daily operations.',
        href: '/features',
        linkLabel: 'Modules',
      },
      {
        title: 'Direct contact',
        desc: 'Email and contact form for demos — reply within one business day.',
        href: '/contact',
        linkLabel: 'Request demo',
      },
      {
        title: 'Privacy & terms',
        desc: 'Public legal pages aligned with the admin product.',
        href: '/privacy',
        linkLabel: 'Privacy',
      },
      {
        title: 'Venue-type solution pages',
        desc: 'Separate pages per business type — restaurant, anti-café, gaming club, and more.',
        href: '/solutions',
        linkLabel: 'Business solutions',
      },
    ],
  },
  cta: {
    title: 'Start the next shift with Heselo.',
    subtitle: 'A 15-minute walkthrough shaped around how your floor actually works.',
    button: 'Request a demo',
  },
  featuresPage: {
    eyebrow: 'Features',
    title: 'Reservations, cash, and inventory — one panel',
    intro:
      'This list matches the Heselo admin navigation. Reservation system, cash software, and inventory management for restaurants and similar venues are the same modules as in the product — not invented for marketing.',
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
    title: 'Monthly subscription plans',
    intro:
      'These prices match Monthly cost in the Heselo panel. Count: reservations that started a live session this month (walk-ins without a booking are not included).',
    note:
      'Each reservation above the plan limit is billed at that plan’s overage rate. Write to us for a demo and setup.',
    cta: 'Request a demo',
    period: '/ month',
    faq: [
      {
        q: 'What is included in a Heselo subscription?',
        a: 'Live tracking, schedule, reservations, cash desk, products, inventory, customers, statistics, and permissions — the same modules on every plan. Plans differ by venue count and monthly included reservations.',
      },
      {
        q: 'How is overage billed?',
        a: 'Each plan includes a monthly reservation allowance. Every started reservation above that limit is billed at the overage rate shown on the plan.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Request a free demo and setup walkthrough via the contact form — we reply within one business day.',
      },
    ],
    crosslinks: {
      features: 'All features',
      solutions: 'Business solutions',
      contact: 'Request a demo',
    },
    featureVenues: '{count} venues',
    featureIncluded: '{count} free reservations / month',
    featureOverage: '{amount} per reservation after the limit',
    featureRequests: '1 request for {count} new features per month',
    plans: {
      starter: {
        name: 'Starter',
        desc: '2 venues and 300 started reservations per month.',
      },
      pro: {
        name: 'Pro',
        desc: '2 venues with higher reservation volume.',
      },
      business: {
        name: 'Business',
        desc: '3 venues for larger operations.',
      },
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Ask for a demo or send a question',
    intro: 'Tell us your venue type and roughly how many tables and rooms you have — we reply within one business day.',
    name: 'Full name',
    email: 'Email',
    venue: 'Venue / business',
    message: 'Message',
    submit: 'Send',
    sending: 'Sending…',
    success: 'Got it. We will get in touch with you soon.',
    error: 'Could not send. Please email us directly.',
    alt: 'Or write to us at:',
    emailWrite: 'Email us',
    emailAria: 'Email Heselo',
    whatsapp: 'Message on WhatsApp',
    whatsappAria: 'Contact Heselo on WhatsApp',
    whatsappPrefill: "Hello, I'd like to learn more about Heselo.",
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
      'restaurant management system',
      'reservation system',
      'point of sale',
      'anti-café management',
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
          'Heselo venue management: table reservations, live floor, cash, and inventory in one panel. For restaurants, cafes, and clubs — free demo.',
        keywords: [
          'venue management system',
          'business management software',
          'table reservation system',
          'restaurant booking',
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
        title: 'Pricing — Heselo subscription plans',
        description:
          'Starter 29.99 AZN, Pro 49.99 AZN, Business 69.99 AZN. Same venue and reservation limits as in the app. Write for a demo.',
        keywords: ['Heselo pricing', 'subscription plans', 'venue management pricing'],
      },
      contact: {
        title: 'Demo & contact — Heselo',
        description:
          'Request a venue management demo. Share your venue type and table/room count — reply within one business day.',
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
        title: 'Business solutions — restaurant, cafe, clubs | Heselo',
        description:
          'Venue management for restaurants, cafes, billiards, karaoke, gaming clubs, and anti-cafés. Booking, cash, and inventory explained per business type.',
        keywords: [
          'restaurant management system',
          'cafe software',
          'anti-cafe software',
          'billiards club software',
          'venue management',
        ],
      },
      guides: {
        title: 'Guides — restaurant & venue management | Heselo',
        description:
          'What a restaurant management system is and how booking, cash, and inventory connect — practical guides.',
        keywords: [
          'what is restaurant management system',
          'venue management guide',
          'restaurant software explained',
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
