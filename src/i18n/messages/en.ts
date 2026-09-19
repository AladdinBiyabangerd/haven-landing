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
    solutions: 'Solutions',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    about: 'About',
    rights: 'All rights reserved.',
    tagline: 'Tables · Rooms · Live floor · Cash',
    credit: 'Founded by',
  },
  hero: {
    brandHint: 'Heselo · venue management',
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
      'From 25 AZN a month',
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
    title: 'Everything a shift needs,',
    titleAccent: 'in one panel.',
    intro:
      'Bookings, live sessions, cash, stock, and customers — all working in the product today.',
    items: [
      {
        title: 'Live tracking',
        desc: 'Active sessions, add products, pause/stop, receipts, and payment — the real floor state.',
      },
      {
        title: 'Schedule & reservations',
        desc: 'Tables and rooms on one schedule. Reservation list, transfer, cancel, and history.',
      },
      {
        title: 'Cash',
        desc: 'Open/close shift, transactions, cash report, and cash count — day and shift stay separate.',
      },
      {
        title: 'Products, stock, sale',
        desc: 'Product catalog, inventory counts, and walk-in quick sale on the same list.',
      },
      {
        title: 'Customers',
        desc: 'Customer cards, history, and import — tied to reservations and live sessions.',
      },
      {
        title: 'Stats & settings',
        desc: 'Payment, customer, and inventory statistics; staff, permissions, protection code, and price calculator.',
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
  faq: {
    eyebrow: 'Questions',
    title: 'People ask us this often',
    items: [
      {
        q: 'What is Heselo and who is it for?',
        a: 'Heselo is a web panel for gaming clubs (PlayStation), karaoke, billiards, anti-cafés, and room lounges in Azerbaijan: booking, live sessions, cash, and inventory in one place. Built for venues that sell room or station time — not a kitchen restaurant POS.',
        href: '/solutions',
        linkLabel: 'Venue types are listed here',
      },
      {
        q: 'Who created Heselo?',
        a: 'Heselo’s sole founder and creator is Aladdin Biyabangerd. He built the product from scratch in Baku — idea, software, and platform under his name. There is no co-founder team.',
        href: '/about',
        linkLabel: 'About page',
      },
      {
        q: 'Does Heselo replace iiko or Clopos?',
        a: 'No — if you need kitchen, KDS, and dining-room flow, choose iiko/Clopos. If room/PS time, bookings, and cash shifts are the core job, Heselo is the lighter club-panel alternative.',
        href: '/guides/iiko-alternative-clubs',
        linkLabel: 'Honest comparison guide',
      },
      {
        q: 'How much does it cost?',
        a: 'From about 25 AZN/month for PS/gaming clubs; billiards, karaoke, and lounges vary by type. Annual billing includes two months free. Free demo — no card required.',
        href: '/pricing',
        linkLabel: 'Open plans by venue type',
      },
      {
        q: 'Can I manage reservations with Heselo?',
        a: 'Yes. Schedule and reservations cover table and room booking, moves, cancels, and history. When guests arrive, the same booking becomes a live session.',
        href: '/solutions/reservations',
        linkLabel: 'It opens on the reservations solution',
      },
      {
        q: 'Does Heselo include a cash / POS flow?',
        a: 'Yes. Open/close shift, transactions, cash report, and cash count are in the same panel — no separate till app required.',
        href: '/solutions/pos',
        linkLabel: 'It opens on the cash solution',
      },
      {
        q: 'Is inventory management included?',
        a: 'Yes. Product catalog, stock levels, and count journals; quick sale works on the same list without a booking.',
        href: '/solutions/inventory',
        linkLabel: 'It opens on the inventory solution',
      },
      {
        q: 'Can I use it on mobile?',
        a: 'Heselo is a web panel — open it in a modern browser on desktop or mobile. The core flow stays the same.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Message us on WhatsApp or fill in the form — phone or email is enough. We walk through a 15-minute screen share and usually reply within two hours during working hours.',
        href: '/contact',
        linkLabel: 'You can also write via the form',
      },
    ],
  },
  seoOverview: {
    eyebrow: 'What is Heselo?',
    title: 'Business management software',
    titleAccent: 'for daily venue work.',
    paragraphs: [
      'Heselo is the Azerbaijan panel for gaming clubs, karaoke, billiards, anti-cafés, and room lounges: booking, live floor, cash, and inventory — for venues that sell table, room, or station time (from ~25 AZN/month).',
      'If you are comparing restaurant POS tools like iiko or Clopos — kitchen and KDS are their strength. For room/PS time, bookings and cash shifts, Heselo is the lighter club panel.',
      'Heselo was created solely by Aladdin Biyabangerd in Baku — more on the About page.',
    ],
  },
  audiences: {
    eyebrow: 'Who it is for',
    title: 'Built for your',
    titleAccent: 'kind of venue.',
    intro: 'Pick the closest match to see how Heselo runs that floor.',
    items: [
      {
        slug: 'gaming',
        title: 'Gaming club management',
        desc: 'PlayStation and console stations, live sessions, and sales.',
      },
      {
        slug: 'karaoke',
        title: 'Karaoke management system',
        desc: 'Room booking, sessions, and cash flow.',
      },
      {
        slug: 'billiards',
        title: 'Billiards club software',
        desc: 'Tables/rooms, time, and live play sessions.',
      },
      {
        slug: 'antikafe',
        title: 'Anti-café management',
        desc: 'Hourly payment, table/room booking, and cash.',
      },
      {
        slug: 'lounge',
        title: 'Room lounge management',
        desc: 'VIP room booking, sessions, and cash.',
      },
    ],
  },
  guidesTeaser: {
    eyebrow: 'Guides',
    title: 'Practical answers to',
    titleAccent: 'the usual questions.',
    intro: 'Short, specific explanations — no sign-up needed.',
    cta: 'All guides',
  },
  guidesPage: {
    updatedLabel: 'Last updated:',
    pricingCta: 'Club plans — from 25 AZN/month',
    demoCta: 'Request a 15-minute demo',
    relatedComparisonsTitle: 'More comparisons',
    altSeekingTitle: 'Looking at iiko, Clopos or Excel?',
    altSeekingBody:
      'If you need a room-time panel instead of a restaurant POS or spreadsheets, read the honest comparison guides. Keep a restaurant stack when kitchen/KDS is the core.',
  },
  productShot: {
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
    title: 'The screens',
    titleAccent: 'your team will use.',
    intro: 'Live floor, schedule, cash, stock, and reports.',
  },
  eeat: {
    eyebrow: 'Trust & transparency',
    title: 'No fake reviews —',
    titleAccent: 'verifiable facts.',
    intro:
      'Heselo is a young product, so you will not find invented testimonials or star ratings here. What we do show — prices, how money is counted, and our legal pages — you can check yourself.',
    items: [
      {
        title: 'Open pricing',
        desc: 'Plans and limits are on the pricing page — no hidden fees.',
        href: '/pricing',
      },
      {
        title: 'Totals that always match',
        desc: 'Balances and payments are worked out by the system, not typed in over the top.',
        href: '/features',
      },
      {
        title: 'Privacy & terms',
        desc: 'Public documents that match what the product actually does.',
        href: '/privacy',
      },
    ],
  },
  journey: {
    navLabel: 'Next step',
    insidePanel: {
      prompt: 'Every screen in detail',
      label: 'is on the features page',
    },
    priceForType: {
      prompt: 'The plan for this type',
      label: 'is on the pricing page',
    },
    stillLearning: {
      prompt: 'If you want to read first,',
      label: 'see the short guide',
    },
    howItLooks: {
      prompt: 'How it looks in Heselo',
      label: 'is on the solution page',
    },
    whichVenue: {
      prompt: 'To see which venue this is for,',
      label: 'pick a type here',
    },
    seePricing: {
      prompt: 'Monthly pricing',
      label: 'is on the pricing page',
    },
  },
  cta: {
    title: 'Start the next shift with Heselo.',
    subtitle: 'A 15-minute screen share — we usually reply within two hours during working hours.',
    button: 'Write via the form',
    whatsapp: 'WhatsApp — 15 min',
    pickTypeTitle: 'Pick your venue type first.',
    pickTypeSubtitle: 'Pricing and the demo open around how your floor runs —',
    pickTypeButton: 'pick a venue type',
    typedTitle: 'Next step for this venue type.',
    typedSubtitle: 'See the plan first — the demo opens with the same type.',
    nextForm: 'Write via the form for a demo',
    nextWhatsapp: 'In a hurry? Message on WhatsApp',
  },
  aboutPage: {
    eyebrow: 'About',
    title: 'Who created Heselo?',
    intro:
      'Heselo is a B2B SaaS panel for local clubs and room venues, built in Baku. It has a single creator.',
    founderJobTitle: 'Founder & creator',
    founderSchemaDescription:
      'Aladdin Biyabangerd is the sole founder and creator of the Heselo venue management platform. Based in Baku, Azerbaijan.',
    founderLabel: 'Founder',
    paragraphs: [
      'Heselo was created by Aladdin Biyabangerd. He built the idea, software, and cloud stack from scratch — there is no co-founder group or anonymous “MMC team” behind the product.',
      'The goal is simple: for time-based venues such as gaming clubs, karaoke, billiards, anti-cafés, and room lounges, put booking, live sessions, cash, and inventory in one panel.',
      'Heselo is not related to Hasleo Software (Windows backup tools). It is a separate Azerbaijan venue-management product.',
    ],
    portfolioCta: 'Aladdin Biyabangerd — portfolio',
    contactCta: 'Write for a demo or partnership',
    faq: [
      {
        q: 'Who is the creator of Heselo?',
        a: 'Aladdin Biyabangerd. He is the sole founder and creator of Heselo — the product is his.',
      },
      {
        q: 'Is Heselo a team product?',
        a: 'No. Heselo was created by one person — Aladdin Biyabangerd. Helpers or contractors may assist at times, but ownership and creation sit with him.',
      },
      {
        q: 'Is Heselo the same as Hasleo Software?',
        a: 'No. Hasleo makes Windows utilities. Heselo is a separate B2B panel for clubs and room venues in Azerbaijan.',
      },
    ],
  },
  featuresPage: {
    eyebrow: 'Features',
    title: 'Reservations, cash, and inventory — one panel',
    intro: 'Everything below is working in the product today — not a roadmap.',
    solutionLinkLabel: 'View solution page',
    modules: [
      {
        title: 'Live tracking',
        desc: 'Active floor sessions: add products or amounts, pause, stop, receipts, payment, and delete (behind a code).',
      },
      {
        title: 'Schedule',
        desc: 'Day and week views for tables, rooms, and other resources — the same data as reservations.',
      },
      {
        title: 'Reservations',
        desc: 'List and form: customer, time, labels, pre-order, collect payment, transfer, cancel, and history.',
        solutionSlug: 'reservations',
      },
      {
        title: 'Cash, report, reconciliation',
        desc: 'Open/close shift, transactions, closed-day history, cash report, and cash count.',
        solutionSlug: 'pos',
      },
      {
        title: 'Products, inventory, quick sale',
        desc: 'Catalog prices, stock balances and count logs; walk-in sale without a booking.',
        solutionSlug: 'inventory',
      },
      {
        title: 'Customers',
        desc: 'Customer cards, source/profile, and import — one database with reservations and sessions.',
      },
      {
        title: 'Statistics',
        desc: 'Payment, customer, and inventory statistics — overview, slices, and compare.',
      },
      {
        title: 'Price calculator',
        desc: 'Estimates from resource and tariff rules — the same rules as bookings and live sessions.',
      },
      {
        title: 'Settings & security',
        desc: 'Staff invites, page-and-button permissions, venue protection code, receipts, and other venue settings.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Pricing',
    title: 'Pick your venue type first',
    intro:
      'Every plan covers one venue. Pay monthly or annually and get two months included.',
    chooseType: 'Venue type',
    cta: 'Request a demo',
    periodMonthly: '/ month',
    periodAnnual: '/ year',
    periodOneTime: 'one-time',
    monthlyAlternative: 'or {price} / month',
    annualAlternative: 'or {price} / year — 2 months included',
    includedReservations: '{n} reservations included each month',
    overage: '{price} per reservation after the allowance',
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
    calculator: {
      eyebrow: 'Compare',
      title: 'Estimate cost by reservation volume',
      description:
        'Choose a reservation count and billing period. The table shows the base fee, usage above the allowance, and total.',
      reservationCount: 'Reservation count',
      billingPeriod: 'Billing period',
      monthly: 'Monthly',
      annual: 'Annual',
      plan: 'Plan',
      baseFee: 'Base fee',
      overageCost: 'Overage',
      total: 'Total',
      cheapest: 'Best price',
      crossoverTitle: 'Plan crossover points',
      crossoverHint: 'From {n} reservations, {to} costs less than {from}.',
      noCrossover: 'There is no plan crossover for this venue type.',
    },
    faq: [
      {
        q: 'Why aren’t all prices shown at once?',
        a: 'A PlayStation club and a karaoke room do not buy the same way. Pick the type first — then Small, Medium, and Large open by station or room count.',
      },
      {
        q: 'Why is karaoke more than PlayStation?',
        a: 'PlayStation starts at 25 AZN because station workflows are simpler. Billiards starts at 29 AZN; karaoke and lounges start at 39 AZN for room schedules, extensions, and cash workflows.',
      },
      {
        q: 'Cheaper than Dine or MinuPOS?',
        a: 'Those tools are mainly restaurant table/QR POS. Heselo is for room-time, live sessions and club cash — from 25 AZN/month. Need kitchen/KDS? Keep a restaurant POS. For club/karaoke rooms, Heselo is usually the simpler fit.',
      },
      {
        q: 'What do I get with annual billing?',
        a: 'Annual plans include two months free — twelve months of the same plan for the price of ten.',
      },
      {
        q: 'Can I change plan later?',
        a: 'Yes. When station or room count grows we move Small → Medium → Large. Several branches get a custom quote.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Message us on WhatsApp or use the form for a free demo — 15-minute screen share, no card. We usually reply within two hours during working hours.',
        href: '/contact',
        linkLabel: 'You can request a demo via the form',
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
        intro: 'A timer only counts time — here booking, session, and cash sit in one panel.',
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
        intro: 'Not a table timer — booking, session, and cash in one panel.',
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
        intro: 'One lost room booking costs more than a month — that is why rooms have their own plans.',
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
        intro: 'An open-floor tool does not run a closed room session.',
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
        intro: 'A timer alone does not close booking and cash.',
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
    whatsappPrefills: {
      gaming: "Hello, I'd like a Heselo demo for a gaming / PlayStation club.",
      karaoke: "Hello, I'd like a Heselo demo for a karaoke venue.",
      billiards: "Hello, I'd like a Heselo demo for a billiards club.",
      antikafe: "Hello, I'd like a Heselo demo for an anti-café.",
      lounge: "Hello, I'd like a Heselo demo for a room lounge.",
    },
    planConfirm: '{plan} · {type}',
    heardFrom: 'How did you hear about us?',
    heardFromPlaceholder: 'Optional',
    heardFromOptions: [
      { value: 'chatgpt', label: 'ChatGPT / AI assistant' },
      { value: 'perplexity', label: 'Perplexity' },
      { value: 'gemini', label: 'Gemini / Google AI' },
      { value: 'google', label: 'Google search' },
      { value: 'social', label: 'Instagram / Facebook / LinkedIn' },
      { value: 'friend', label: 'Friend or colleague' },
      { value: 'other', label: 'Other' },
    ],
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
        title: 'Heselo — club & room panel | alternative to iiko/Clopos',
        description:
          'Heselo is a room-time panel for PlayStation/gaming, karaoke, billiards, anti-cafés and lounges: booking, live sessions, cash. Club ops instead of restaurant POS (iiko, Clopos) — from 25 AZN/month. Free demo.',
        keywords: [
          'Heselo',
          'venue management system',
          'gaming club software',
          'iiko alternative',
          'clopos alternative',
          'playstation club software',
          'karaoke room booking',
        ],
      },
      features: {
        title: 'Panel features — live floor, cash, inventory | Heselo',
        description:
          'The same Heselo modules your team uses: live tracking, schedule, reservations, cash, inventory, quick sale, and stats — one flow for every venue type.',
        keywords: [
          'reservation system',
          'cash software',
          'inventory management',
          'live tracking',
          'Heselo features',
        ],
      },
      pricing: {
        title: 'Pricing — club panel from 25 AZN | Heselo',
        description:
          'Affordable club plans: PlayStation from 25 AZN, billiards from 29, karaoke/lounges from 39. Two months free on annual billing. Unlike MinuPOS/Dine-style restaurant POS — built for room-time and cash shifts.',
        keywords: [
          'Heselo pricing',
          'affordable club panel',
          'venue software from 25 AZN',
          'cheaper than minupos',
          'dine alternative pricing',
          'subscription plans',
        ],
      },
      contact: {
        title: 'Free demo & contact — Heselo',
        description:
          'Book a 15-minute demo. WhatsApp or the form — we usually reply within two hours during working hours. Venue type and table/room count is enough.',
        keywords: ['Heselo demo', 'venue software contact', 'reservation demo'],
      },
      about: {
        title: 'Who created Heselo? — Aladdin Biyabangerd',
        description:
          'Heselo’s sole founder and creator is Aladdin Biyabangerd. A venue-management SaaS panel built in Baku — not related to Hasleo Software.',
        keywords: [
          'Heselo founder',
          'Aladdin Biyabangerd',
          'who created Heselo',
          'Heselo creator',
          'Heselo Baku',
        ],
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
        title: 'Solutions by venue — gaming club, karaoke, billiards | Heselo',
        description:
          'One page per venue type: gaming / PlayStation clubs, karaoke, billiards, anti-cafés, room lounges — plus reservation, cash, and inventory. Pick your flow, request a demo.',
        keywords: [
          'gaming club software',
          'playstation club software',
          'karaoke room booking',
          'billiards club software',
          'anti-cafe software',
        ],
      },
      guides: {
        title: 'Guides — club panel and POS alternatives | Heselo',
        description:
          'Gaming, karaoke and billiards flows; honest alternatives to iiko, Clopos, Dine, MinuPOS and Excel.',
        keywords: [
          'what is a gaming club management system',
          'iiko alternative',
          'clopos alternative',
          'dine alternative',
          'how karaoke room booking works',
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
