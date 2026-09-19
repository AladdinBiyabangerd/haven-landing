import type { SolutionCopy, SolutionsHubCopy } from './types'

export const solutionsHubEn: SolutionsHubCopy = {
  eyebrow: 'Business solutions',
  h1: 'Which venue type matches your floor?',
  intro:
    'Heselo connects room, station, and table booking with live sessions and cash in one panel. The pages below are written for gaming / PlayStation clubs, karaoke, billiards, anti-cafés, and room lounges — pick your venue type.',
  seoTitle: 'Solutions by venue — gaming club, karaoke, billiards | Heselo',
  seoDescription:
    'One page per venue: gaming club software (PlayStation / console), karaoke, billiards booking, anti-cafés, and room lounges. Free demo.',
  keywords: [
    'gaming club software',
    'playstation club software',
    'karaoke room booking',
    'billiards club software',
    'anti-cafe software',
  ],
  cardCta: 'Read more',
  primaryTitle: 'Core venue types',
  featuresTitle: 'Features',
}

export const solutionsEn: SolutionCopy[] = [
  {
    slug: 'billiards',
    shortTitle: 'Billiards',
    h1: 'Billiards club management system',
    seoTitle: 'Billiards booking & scheduling software | Heselo',
    seoDescription:
      'Billiards booking system with table scheduling, live play sessions, time-based pricing, and cash. Demo for pool halls and billiards clubs.',
    keywords: [
      'billiards booking system',
      'billiards scheduling system',
      'billiards club software',
      'pool hall booking',
    ],
    intro:
      'In a billiards club, tables run on time: booking, scheduling, live play, pause, and payment are linked. A billiards management system should not split the schedule from the live session — Heselo sets up each table individually and runs them in one panel.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Billiards halls, lounge + billiards venues, and clubs that book tables or rooms with time-based payment.',
    problemsTitle: 'Common club problems',
    problems: [
      'Board and phone disagree on which table is free',
      'Play time and extras are logged separately',
      'Night shifts scramble cash',
      'VIP rooms and regular tables are not on one schedule',
    ],
    howTitle: 'How it works for billiards',
    howBody:
      'Book tables and rooms on the schedule. Start a live session when play begins; add products and take payment there. Pricing follows table type and duration rules. Cash closes the shift.',
    featuresTitle: 'Fit for billiards',
    features: [
      {
        title: 'Table and room schedule',
        desc: 'All tables on one calendar — book, move, cancel.',
      },
      {
        title: 'Live play session',
        desc: 'Active table status, extras, and payment.',
      },
      {
        title: 'Time-aware pricing',
        desc: 'Price is calculated automatically from table type and play duration.',
      },
      {
        title: 'Cash and customers',
        desc: 'Shift, report, and visit history.',
      },
    ],
    differTitle: 'More than a timer',
    differBody:
      'Timers alone do not solve booking history, inventory, or cash count. Heselo combines billiards sales and settlements with the venue’s other sales in the same shift.',
    faq: [
      {
        q: 'Are billiard tables set up individually?',
        a: 'Yes. Each table or room is set up on its own; schedule and live tracking share the same data.',
      },
      {
        q: 'Can rooms and tables coexist?',
        a: 'Yes. VIP rooms and regular tables follow the same schedule, session, and cash rules.',
      },
    ],
    related: ['gaming', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Billiards club demo',
    ctaBody: 'Share table count and typical shifts — we show the schedule and a live session.',
  },
  {
    slug: 'karaoke',
    shortTitle: 'Karaoke',
    h1: 'Karaoke management system',
    seoTitle: 'Karaoke management system & room booking | Heselo',
    seoDescription:
      'Karaoke management: room booking, live sessions, cash, and product sales. Demo for karaoke venues.',
    keywords: [
      'karaoke management system',
      'karaoke room booking',
      'karaoke software',
      'restaurant pos for karaoke',
      'dine alternative karaoke',
    ],
    intro:
      'In karaoke, the main unit is the room: booking, session length, extras, and payment. A karaoke management system should connect room schedule to live session and cash. Restaurant POS (Dine, Clopos) targets tables/QR — this workflow fits room-time venues better.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Room-based karaoke clubs, lounge + karaoke venues, and places running several rooms on one schedule.',
    problemsTitle: 'Typical karaoke friction',
    problems: [
      'Room bookings get lost in phone notes',
      'Extensions and extras are written elsewhere',
      'Several rooms’ status collide at peak time',
      'Cash and room occupancy disagree at close',
    ],
    howTitle: 'How Heselo helps karaoke venues',
    howBody:
      'Book rooms on the schedule. Open a live session on arrival; add products and take payment there. Several rooms appear on one board. Cash closes with shift and report.',
    featuresTitle: 'Karaoke essentials',
    features: [
      {
        title: 'Room booking',
        desc: 'Schedule, list, move, and cancel.',
      },
      {
        title: 'Live room session',
        desc: 'Status, products, receipt, and payment.',
      },
      {
        title: 'Customer history',
        desc: 'Cards and visits for returning guests.',
      },
      {
        title: 'Cash and stats',
        desc: 'Shift close and reports by payment method.',
      },
    ],
    differTitle: 'A booking form is not enough',
    differBody:
      'An online booking page does not run the room once guests arrive. Heselo keeps booking through payment in one panel so floor and cash share the same shift and cash rules.',
    faq: [
      {
        q: 'Are karaoke rooms configured like tables?',
        a: 'Rooms are set up individually; schedule and live tracking show room status.',
      },
      {
        q: 'Is pre-order supported?',
        a: 'Reservation forms include labels and pre-order fields — the same fields as in the panel booking form.',
      },
    ],
    related: ['reservations', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Karaoke venue demo',
    ctaBody: 'Tell us your room count — we show the schedule and a live session.',
  },
  {
    slug: 'gaming',
    shortTitle: 'Gaming club',
    h1: 'Gaming club management system',
    seoTitle: 'Gaming club software for PS & console clubs | Heselo',
    seoDescription:
      'Gaming club software for PlayStation, console, and PC clubs: station booking, live sessions, cash, and inventory. Gaming management in one panel — free demo.',
    keywords: [
      'gaming club software',
      'gaming management',
      'console club software',
      'playstation club software',
      'PC club software',
      'iiko alternative clubs',
      'playstation cafe software',
    ],
    intro:
      'Gaming and console clubs fill stations by the hour; booking, live play, and cash run together. Gaming club software should join the station schedule to live sessions — a timer alone is not enough. Note for iiko shoppers: Heselo is not a kitchen POS. For simple PS timer shoppers, room and station time sales live here in one place.',
    whoTitle: 'Who is it for?',
    whoBody:
      'PlayStation clubs, console lounges, PC clubs, and mixed gaming venues that need station/table booking, live sessions, and cash.',
    problemsTitle: 'Typical club problems',
    problems: [
      'It is unclear which station is free',
      'Extensions and payments are logged apart',
      'Snacks and drinks do not match cash',
      'Night shifts stretch reconciliation',
    ],
    howTitle: 'How Heselo works in a gaming club',
    howBody:
      'Set up stations or tables. Book on the schedule; open a live session when play starts. Product sales and payments stay on the same record. Cash closes the shift; inventory tracks snack and drink stock levels.',
    featuresTitle: 'Gaming club capabilities',
    features: [
      {
        title: 'Station and table schedule',
        desc: 'Station/table booking, move, and cancel.',
      },
      {
        title: 'Live session',
        desc: 'Active places, status, and payment.',
      },
      {
        title: 'Quick sale',
        desc: 'Snacks and drinks without a booking.',
      },
      {
        title: 'Cash and inventory',
        desc: 'Shift, report, and stock levels.',
      },
    ],
    differTitle: 'Beyond a simple timer',
    differBody:
      'A timer alone does not give booking history, customer cards, inventory, or cash count. Heselo helps run the club’s daily bookings, sales, and cash work in one panel.',
    faq: [
      {
        q: 'Can PC and console share one system?',
        a: 'Yes. Different station types follow the same schedule, session, and cash rules.',
      },
      {
        q: 'How do permissions work?',
        a: 'Staff get page- and action-level permissions; sensitive actions can require a protection code.',
      },
    ],
    related: ['billiards', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Gaming club demo',
    ctaBody: 'Share station and console count — we show the schedule and a live session.',
  },
  {
    slug: 'antikafe',
    shortTitle: 'Anti-café',
    h1: 'Anti-café management system',
    seoTitle: 'Anti-café management system & hourly venue software | Heselo',
    seoDescription:
      'Anti-café software: table/room booking, hourly sessions, live floor, cash, and inventory. Built for time-based lounges — free demo.',
    keywords: [
      'anti-cafe management system',
      'anti-cafe software',
      'hourly venue booking',
      'time-based cafe POS',
      'anti-cafe reservation',
    ],
    intro:
      'In an anti-café, guests pay by the hour: table or room booking, snacks and drinks, and payment should run as one process. An anti-café management system connects the schedule to live sessions and cash — replacing whiteboards and paper notes.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Hourly table and room venues, PC or board-game zones, tea and snack sales — anti-cafés, time cafés, and similar lounges. Multiple halls or rooms in one panel.',
    problemsTitle: 'Typical anti-café friction',
    problems: [
      'Which table or room is free — front desk loses time',
      'Extensions and payment logged separately when time ends',
      'Walk-ins clash with reservations on the same table or room',
      'Cash count does not match snack sales at day close',
    ],
    howTitle: 'How Heselo works in an anti-café',
    howBody:
      'Set up tables, rooms, or stations individually. Bookings live on the schedule; when guests arrive, a live session opens. Product add-ons and payment stay in the same session. Cash closes the shift; inventory tracks snacks and drinks.',
    featuresTitle: 'Features for anti-cafés',
    features: [
      {
        title: 'Hourly booking',
        desc: 'Table and room schedule, move, cancel, and history.',
      },
      {
        title: 'Live session',
        desc: 'Active seats, status, product add-ons, and payment.',
      },
      {
        title: 'Quick sale',
        desc: 'Tea and snack sales without a booking also use the same product list.',
      },
      {
        title: 'Cash & inventory',
        desc: 'Shift, report, count, and stock tracking.',
      },
    ],
    differTitle: 'Beyond a simple timer or spreadsheet',
    differBody:
      'A timer alone does not give booking history, customer records, inventory, or cash count. Heselo helps run the anti-café’s daily bookings, sales, and cash work in one panel — the same way as gaming clubs and billiards. See our guide for “what is an anti-café management system?”',
    faq: [
      {
        q: 'Can anti-café and gaming club run in one system?',
        a: 'Yes. Different place types (table, room, PC station) can follow the same schedule, session, and cash rules.',
      },
      {
        q: 'How does hourly payment work?',
        a: 'Live sessions collect time and product lines; the amount due is calculated automatically and posted to the shift.',
      },
      {
        q: 'How do we get a demo?',
        a: 'Use the contact form — share table/room count and your typical working day.',
      },
    ],
    related: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Anti-café demo',
    ctaBody: 'Tell us your table and room count — we walk through booking to cash close.',
  },
  {
    slug: 'lounge',
    shortTitle: 'Room lounge',
    h1: 'Room lounge management system',
    seoTitle: 'Room lounge software & private room booking | Heselo',
    seoDescription:
      'Room lounge software: VIP room booking, live sessions, cash, and extras. Built for room-based lounges — free demo.',
    keywords: [
      'room lounge software',
      'lounge room booking',
      'lounge management system',
      'VIP room reservation',
    ],
    intro:
      'In a room lounge the main unit is the room: booking, session length, drinks and snacks, and payment. Lounge software should connect the room schedule to live sessions and cash — phone notes and a whiteboard are not enough.',
    whoTitle: 'Who is it for?',
    whoBody:
      'VIP room lounges, club-lounges that rent rooms, and mixed karaoke/billiards venues with private rooms. Places that run rooms, not an open floor.',
    problemsTitle: 'Typical lounge friction',
    problems: [
      'Room bookings get lost in messenger threads',
      'Extensions and extras are written elsewhere',
      'Several VIP rooms collide at peak time',
      'Cash and room occupancy disagree at close',
    ],
    howTitle: 'How Heselo works in a room lounge',
    howBody:
      'Book rooms on the schedule. Open a live session on arrival; add products and take payment there. Several rooms appear on one board. Cash closes with shift and report.',
    featuresTitle: 'Lounge essentials',
    features: [
      {
        title: 'Room booking',
        desc: 'Schedule, list, move, and cancel.',
      },
      {
        title: 'Live room session',
        desc: 'Status, products, receipt, and payment.',
      },
      {
        title: 'Customer history',
        desc: 'Cards and visits for returning guests.',
      },
      {
        title: 'Cash and stats',
        desc: 'Shift close and reports by payment method.',
      },
    ],
    differTitle: 'Not an open-floor cafe tool',
    differBody:
      'An open-table tool does not run a closed room session. Heselo keeps each room separately — the same rules as karaoke and anti-cafés.',
    faq: [
      {
        q: 'Are lounge rooms set up like karaoke rooms?',
        a: 'Yes. Each room is set up individually; schedule and live tracking show room status.',
      },
      {
        q: 'Can an open hall and rooms share one system?',
        a: 'Yes. Tables, rooms, and stations follow the same schedule, session, and cash rules.',
      },
    ],
    related: ['karaoke', 'antikafe', 'billiards', 'reservations'],
    ctaTitle: 'Room lounge demo',
    ctaBody: 'Tell us your room count — we show the schedule and a live session.',
  },
  {
    slug: 'reservations',
    shortTitle: 'Reservations',
    h1: 'Table and room reservation system',
    seoTitle: 'Reservation system & table reservation software | Heselo',
    seoDescription:
      'Table and room reservation system: schedule, booking list, move, cancel, and handoff to live session. Free demo.',
    keywords: [
      'reservation system',
      'table reservation system',
      'room reservation system',
      'table booking software',
    ],
    intro:
      'A reservation system is more than picking a free slot. A booking for a table or room must connect to the live session, payment, and history. Heselo keeps schedule and reservation list on the same data.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Gaming clubs, karaoke, billiards, anti-cafés, and room lounges that want professional table, room, or station booking.',
    problemsTitle: 'Limits of standalone booking tools',
    problems: [
      'Schedule and live floor do not see each other',
      'Move/cancel history disappears',
      'Pre-order and deposits live elsewhere',
      'Past days are hard to audit',
    ],
    howTitle: 'How reservations work in Heselo',
    howBody:
      'The schedule shows tables, rooms, and stations by day and week. The reservations list covers guest, time, labels, pre-order, payment collection, move, and cancel. When guests arrive, the same booking becomes a live session.',
    featuresTitle: 'Reservation features',
    features: [
      {
        title: 'Schedule',
        desc: 'Tables, rooms, and stations in one view.',
      },
      {
        title: 'Reservation list',
        desc: 'Filters, status, history, and actions.',
      },
      {
        title: 'Live handoff',
        desc: 'One path from booking to active session.',
      },
      {
        title: 'Customer link',
        desc: 'Bookings connect to customer cards and visit history.',
      },
    ],
    differTitle: 'Why “just booking” is not enough',
    differBody:
      'A booking tool does not close cash or track inventory. Heselo ties reservations into daily venue work — so “reservation system” and “venue management” meet in one product.',
    faq: [
      {
        q: 'Are tables and rooms in the same system?',
        a: 'Yes. Both are set up individually and appear on the schedule and reservation list.',
      },
      {
        q: 'Are past days protected?',
        a: 'Yes. Changes to past days follow venue protection rules.',
      },
    ],
    related: ['karaoke', 'lounge', 'gaming', 'pos'],
    ctaTitle: 'Reservation demo',
    ctaBody: 'We show the schedule and booking process for your venue type.',
  },
  {
    slug: 'pos',
    shortTitle: 'Cash / POS',
    h1: 'Cash management system',
    seoTitle: 'Cash software & club POS system | Heselo',
    seoDescription:
      'Cash software: shifts, transactions, cash report, and count. Club POS in the same panel as booking and live floor.',
    keywords: [
      'cash software',
      'club POS',
      'cash management',
      'cash reconciliation',
      'instead of excel cash',
      'affordable club panel',
    ],
    intro:
      'Cash software is more than a pay button. Shift open, transactions, report, and count should answer the owner at day end. In Heselo, cash is tied to the same workday as reservations and live sessions — instead of Excel and WhatsApp.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Gaming clubs, karaoke, billiards, anti-cafés, and room lounges that track cash/card/POS by shift, close the day, and reconcile counts.',
    problemsTitle: 'When cash tracking is weak',
    problems: [
      'Totals disagree at shift close',
      'Cash and card blur together',
      'It is hard to find which session was paid',
      'Counts stay on paper',
    ],
    howTitle: 'How Heselo cash works',
    howBody:
      'Open a shift, record transactions, review the cash report, and close with a count. Payments from live tracking follow the same day and shift rules. Closed-day history is kept.',
    featuresTitle: 'Cash capabilities',
    features: [
      {
        title: 'Open/close shift',
        desc: 'Day and shift stay distinct.',
      },
      {
        title: 'Transactions',
        desc: 'Cash, bank, and POS payments.',
      },
      {
        title: 'Cash report',
        desc: 'Period summaries.',
      },
      {
        title: 'Cash count',
        desc: 'Reconciliation at close.',
      },
    ],
    differTitle: 'Not a separate till + separate booking',
    differBody:
      'Many venues book in one tool and cash in another. Heselo puts cash in the same panel — so “where did this total come from?” gets rarer at close.',
    faq: [
      {
        q: 'Where are payment amounts calculated?',
        a: 'The system calculates balances and status automatically. The screen shows results only.',
      },
      {
        q: 'Is there a cash count?',
        a: 'Yes. Cash count is part of shift/day close.',
      },
    ],
    related: ['gaming', 'inventory', 'reservations'],
    ctaTitle: 'Cash shift demo',
    ctaBody: 'We walk through shift and count with a realistic scenario.',
  },
  {
    slug: 'inventory',
    shortTitle: 'Inventory',
    h1: 'Inventory management system',
    seoTitle: 'Inventory management & club stock software | Heselo',
    seoDescription:
      'Inventory management: product catalog, stock levels, and counts. Club stock software in the same panel as cash and live sales.',
    keywords: [
      'inventory management system',
      'club inventory software',
      'stock count',
      'product catalog',
    ],
    intro:
      'When inventory sits apart from sales, levels look fine on paper and wrong on the shelf. In Heselo, products, inventory, and quick sale share one catalog — linked to live sessions and cash.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Gaming clubs, karaoke, billiards, anti-cafés, and room lounges that track snack and drink stock, run counts, and sell without a booking.',
    problemsTitle: 'When stock tracking is weak',
    problems: [
      'Sales happen but levels do not update',
      'Count journals get lost',
      'Prices and lists live in several places',
      'Walk-in sales never hit inventory',
    ],
    howTitle: 'How inventory works in Heselo',
    howBody:
      'The product catalog holds prices. Stock levels and count journals share the same list. Adding products in live sessions or quick sale uses that catalog. Statistics show inventory cuts.',
    featuresTitle: 'Inventory capabilities',
    features: [
      {
        title: 'Product catalog',
        desc: 'Prices and list in one place.',
      },
      {
        title: 'Stock levels',
        desc: 'Levels aligned with sales.',
      },
      {
        title: 'Count journals',
        desc: 'Count history kept.',
      },
      {
        title: 'Quick sale',
        desc: 'Sell without a booking on the same product list.',
      },
    ],
    differTitle: 'Unlike a separate stock spreadsheet',
    differBody:
      'Spreadsheets get filled at night; Heselo uses the same data at sale time. Inventory stays tied to booking and cash.',
    faq: [
      {
        q: 'Is inventory a separate module?',
        a: 'Yes, but it shares the catalog with products and quick sale.',
      },
      {
        q: 'Is inventory in statistics?',
        a: 'Yes. Inventory statistics cover summaries and cuts.',
      },
    ],
    related: ['pos', 'gaming', 'antikafe'],
    ctaTitle: 'Inventory and catalog demo',
    ctaBody: 'We show the product and count process for your venue.',
  },
]
