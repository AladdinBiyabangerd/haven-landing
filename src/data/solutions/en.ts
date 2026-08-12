import type { SolutionCopy, SolutionsHubCopy } from './types'

export const solutionsHubEn: SolutionsHubCopy = {
  eyebrow: 'Business solutions',
  h1: 'Which businesses is Heselo built for?',
  intro:
    'Heselo is a venue management system: reservations, live floor, cash, and inventory in one panel. The pages below explain how that fits each business type — without copy-paste fluff.',
  seoTitle: 'Business solutions — restaurant, cafe, clubs & booking | Heselo',
  seoDescription:
    'Venue management for restaurants, cafes, billiards, karaoke, gaming clubs, and anti-cafés: table booking, cash, and inventory. Request a free demo.',
  keywords: [
    'venue management system',
    'business management software',
    'restaurant management system',
    'cafe software',
    'reservation system',
  ],
  cardCta: 'Read more',
}

export const solutionsEn: SolutionCopy[] = [
  {
    slug: 'restaurant',
    shortTitle: 'Restaurant',
    h1: 'Restaurant management system',
    seoTitle: 'Restaurant management system & restaurant software | Heselo',
    seoDescription:
      'Restaurant software for table booking, live floor, cash, and inventory in one panel. Built for venues in Azerbaijan — request a demo.',
    keywords: [
      'restaurant management system',
      'restaurant software',
      'restaurant POS',
      'restaurant inventory',
    ],
    intro:
      'When bookings live in chat, the floor lives on paper, and cash closes in another sheet, the day ends in confusion. Heselo brings restaurant operations into one flow: table and room reservations, live sessions, payments, and stock.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Restaurants and lounge-style venues that take table or room bookings and want cash and inventory in the same panel as the floor.',
    problemsTitle: 'Common restaurant problems',
    problems: [
      'Phone and messenger bookings never land on one schedule',
      'Live floor and reservation list do not match',
      'Cash, card, and POS blur when a shift closes',
      'Stock counts happen outside the workday',
    ],
    howTitle: 'How Heselo works in a restaurant',
    howBody:
      'Reception books a table or room on the schedule. When guests arrive, a live session opens; products and payments stay in that flow. Cash handles shifts, reports, and reconciliation. Inventory stays on the same catalog — no separate spreadsheet required.',
    featuresTitle: 'Core restaurant capabilities',
    features: [
      {
        title: 'Table and room booking',
        desc: 'Day and week schedule, list view, move, cancel, and history.',
      },
      {
        title: 'Live floor',
        desc: 'Active sessions, add products, pause, receipt, and payment.',
      },
      {
        title: 'Restaurant cash / POS flow',
        desc: 'Open/close shift, transactions, cash report, and count.',
      },
      {
        title: 'Restaurant inventory',
        desc: 'Catalog, stock levels, count journals, and quick sale without a booking.',
      },
    ],
    differTitle: 'How it differs',
    differBody:
      'Heselo is not only a booking widget or only a till. Reservations, live sessions, cash, and inventory share the same venue rules. Balances are calculated on the server — the screen shows results, not guesses. The panel works in Azerbaijani, English, and Russian. If you want the informational answer to “what is a restaurant management system?”, see our guide.',
    faq: [
      {
        q: 'What does Heselo cover as restaurant software?',
        a: 'Table/room booking, live tracking, cash (shift, report, count), products, inventory, customers, and statistics.',
      },
      {
        q: 'Is POS sold separately?',
        a: 'No. Cash modules are part of the Heselo panel and subscription.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Use the contact form or email us with your venue type and table/room count.',
      },
    ],
    related: ['reservations', 'pos', 'inventory', 'cafe'],
    ctaTitle: 'Request a restaurant demo',
    ctaBody: 'We walk through your flow — from booking to cash close.',
  },
  {
    slug: 'cafe',
    shortTitle: 'Cafe',
    h1: 'Cafe management system',
    seoTitle: 'Cafe management system & cafe software | Heselo',
    seoDescription:
      'Cafe software for table booking, live sessions, cash, and inventory. Built for small and mid-size cafes — free demo.',
    keywords: ['cafe management system', 'cafe software', 'cafe booking', 'cafe POS'],
    intro:
      'Cafe traffic moves fast: short stays, walk-ins, and frequent product adds. A cafe management system should keep booking, live tables, and cash on one screen — that is what Heselo is built for.',
    whoTitle: 'Which cafes?',
    whoBody:
      'Cafes and coffee shops that take table bookings (sometimes rooms) and want product sales and cash in one place.',
    problemsTitle: 'Typical cafe friction',
    problems: [
      'Walk-ins collide with reserved tables',
      'Short sessions slow down when payment is elsewhere',
      'Cash and stock disagree at day end',
      'Shift changes hide who sold what',
    ],
    howTitle: 'How the cafe software works',
    howBody:
      'Book on the schedule; open a live session when guests arrive. Products and payments stay in flow. Use quick sale for walk-ins without a booking. Close the day with cash shift and count.',
    featuresTitle: 'What matters for cafes',
    features: [
      {
        title: 'Fast table flow',
        desc: 'Status, products, and payment without long forms.',
      },
      {
        title: 'Booking and walk-in',
        desc: 'Same catalog and cash rules either way.',
      },
      {
        title: 'Cash and count',
        desc: 'Cash, card, and POS by shift — clear day close.',
      },
      {
        title: 'Products and stock',
        desc: 'Prices and levels without a separate stock file.',
      },
    ],
    differTitle: 'Why people search for cafe software',
    differBody:
      'Cafe pacing is shorter than a full restaurant, but the needs are the same: tables, payment, products. Heselo is not a heavy ERP — it is built for daily floor work while still covering cash and inventory.',
    faq: [
      {
        q: 'Is Heselo too heavy for a small cafe?',
        a: 'No. Starter plans fit smaller venues; you can focus on the modules you need.',
      },
      {
        q: 'Is booking a separate product?',
        a: 'No. Schedule and reservation list are part of the same panel.',
      },
    ],
    related: ['restaurant', 'reservations', 'pos'],
    ctaTitle: 'Cafe demo',
    ctaBody: 'Tell us your table count and typical flow — we tailor the walkthrough.',
  },
  {
    slug: 'billiards',
    shortTitle: 'Billiards',
    h1: 'Billiards club management system',
    seoTitle: 'Billiards club software & management system | Heselo',
    seoDescription:
      'Billiards management: table/room booking, live sessions, time-based play, and cash. Request a demo for your club.',
    keywords: ['billiards club software', 'billiards management system', 'pool hall booking'],
    intro:
      'In a billiards club, tables run on time: booking, live play, pause, and payment are linked. A billiards management system should not split the schedule from the live session — Heselo treats tables as resources in one panel.',
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
      'Book tables and rooms on the schedule. Start a live session when play begins; add products and take payment there. Pricing follows resource and duration rules. Cash closes the shift.',
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
        desc: 'Estimates from the same tariff rules as the panel.',
      },
      {
        title: 'Cash and customers',
        desc: 'Shift, report, and visit history.',
      },
    ],
    differTitle: 'More than a timer',
    differBody:
      'Timers alone do not solve booking history, inventory, or cash count. Heselo ties billiards play into the same day rules as the rest of the venue.',
    faq: [
      {
        q: 'Are billiard tables set up as resources?',
        a: 'Yes. Each table or room is a resource shared by schedule and live tracking.',
      },
      {
        q: 'Can rooms and tables coexist?',
        a: 'Yes. VIP rooms and regular tables share schedule and cash flow.',
      },
    ],
    related: ['gaming', 'karaoke', 'reservations', 'pos'],
    ctaTitle: 'Billiards club demo',
    ctaBody: 'Share table count and typical shifts — we show the live flow.',
  },
  {
    slug: 'karaoke',
    shortTitle: 'Karaoke',
    h1: 'Karaoke management system',
    seoTitle: 'Karaoke management system & room booking | Heselo',
    seoDescription:
      'Karaoke management: room booking, live sessions, cash, and product sales. Demo for karaoke venues.',
    keywords: ['karaoke management system', 'karaoke room booking', 'karaoke software'],
    intro:
      'In karaoke, the room is the unit: booking, session length, extras, and payment. A karaoke management system should connect room schedule to live session and cash.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Room-based karaoke clubs, restaurant + karaoke venues, and places running several rooms in one flow.',
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
        desc: 'Shift close and payment cuts.',
      },
    ],
    differTitle: 'A booking form is not enough',
    differBody:
      'An online booking page does not run the room once guests arrive. Heselo keeps booking through payment in one panel so floor and cash share the same day rules.',
    faq: [
      {
        q: 'Are karaoke rooms configured like tables?',
        a: 'Rooms are separate resources; schedule and live tracking show room status.',
      },
      {
        q: 'Is pre-order supported?',
        a: 'Reservation forms include labels and pre-order fields — same logic as the panel.',
      },
    ],
    related: ['reservations', 'billiards', 'restaurant', 'pos'],
    ctaTitle: 'Karaoke venue demo',
    ctaBody: 'Tell us your room count — we show booking and live flow.',
  },
  {
    slug: 'gaming',
    shortTitle: 'Gaming club',
    h1: 'Gaming club management system',
    seoTitle: 'Gaming club management system & club software | Heselo',
    seoDescription:
      'Gaming club management: station/table booking, live sessions, cash, and inventory. Demo for PC and console clubs.',
    keywords: ['gaming club management', 'PC club software', 'gaming lounge booking'],
    intro:
      'Gaming clubs fill stations by the hour; booking, live play, and cash run together. A gaming club management system should join the resource schedule to live sessions.',
    whoTitle: 'Who is it for?',
    whoBody:
      'PC clubs, console lounges, and mixed gaming venues that need station/table booking, live sessions, and cash.',
    problemsTitle: 'Typical club problems',
    problems: [
      'It is unclear which station is free',
      'Extensions and payments are logged apart',
      'Snacks and drinks do not match cash',
      'Night shifts stretch reconciliation',
    ],
    howTitle: 'How Heselo works in a gaming club',
    howBody:
      'Set stations or tables as resources. Book on the schedule; open a live session when play starts. Product sales and payments stay in flow. Cash closes the shift; inventory tracks snacks and drinks.',
    featuresTitle: 'Gaming club capabilities',
    features: [
      {
        title: 'Resource schedule',
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
      'A timer alone does not give booking history, customer cards, inventory, or cash count. Heselo runs the club day as one venue panel.',
    faq: [
      {
        q: 'Can PC and console share one system?',
        a: 'Yes. Different resources share schedule and cash flow.',
      },
      {
        q: 'How do permissions work?',
        a: 'Staff get page- and action-level permissions; sensitive actions can require a protection code.',
      },
    ],
    related: ['billiards', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'Gaming club demo',
    ctaBody: 'Share station count — we show booking and live flow.',
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
      'In an anti-café, guests pay by the hour: table or room booking, snacks and drinks, and payment should run in one flow. An anti-café management system connects the schedule to live sessions and cash — replacing whiteboards and paper notes.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Hourly table and room venues, PC or board-game zones, tea and snack sales — anti-cafés, time cafés, and similar lounges. Multiple halls or rooms in one panel.',
    problemsTitle: 'Typical anti-café friction',
    problems: [
      'Which table or room is free — front desk loses time',
      'Extensions and payment logged separately when time ends',
      'Walk-ins clash with reservations on the same resource',
      'Cash count does not match snack sales at day close',
    ],
    howTitle: 'How Heselo works in an anti-café',
    howBody:
      'Set up tables, rooms, or stations as resources. Bookings live on the schedule; when guests arrive, a live session opens. Product add-ons and payment stay in the same flow. Cash closes the shift; inventory tracks snacks and drinks.',
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
        desc: 'Walk-in snack and drink sales from the same catalog.',
      },
      {
        title: 'Cash & inventory',
        desc: 'Shift, report, count, and stock tracking.',
      },
    ],
    differTitle: 'Beyond a simple timer or spreadsheet',
    differBody:
      'A timer alone does not give booking history, customer records, inventory, or cash count. Heselo runs the day as one venue panel — same logic as gaming clubs and billiards. See our guide for “what is an anti-café management system?”',
    faq: [
      {
        q: 'Can anti-café and gaming club run in one system?',
        a: 'Yes. Different resource types (table, room, PC station) can share one schedule and cash flow.',
      },
      {
        q: 'How does hourly payment work?',
        a: 'Live sessions collect time and product lines; payment is calculated on the server and posted to the shift.',
      },
      {
        q: 'How do we get a demo?',
        a: 'Use the contact form — share table/room count and your daily workflow.',
      },
    ],
    related: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Anti-café demo',
    ctaBody: 'Tell us your table and room count — we walk through booking to cash close.',
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
      'Restaurants, cafes, karaoke, billiards, and other venues that want professional table or room booking.',
    problemsTitle: 'Limits of standalone booking tools',
    problems: [
      'Schedule and live floor do not see each other',
      'Move/cancel history disappears',
      'Pre-order and deposits live elsewhere',
      'Past days are hard to audit',
    ],
    howTitle: 'How reservations work in Heselo',
    howBody:
      'The schedule shows resources by day and week. The reservations list covers guest, time, labels, pre-order, payment collection, move, and cancel. When guests arrive, the same booking becomes a live session.',
    featuresTitle: 'Reservation features',
    features: [
      {
        title: 'Schedule',
        desc: 'Tables, rooms, and other resources in one view.',
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
        a: 'Yes. Both are resources on the schedule and reservation list.',
      },
      {
        q: 'Are past days protected?',
        a: 'Yes. Changes to past days follow venue protection rules.',
      },
    ],
    related: ['restaurant', 'cafe', 'karaoke', 'pos'],
    ctaTitle: 'Reservation demo',
    ctaBody: 'We show schedule and booking flow for your venue type.',
  },
  {
    slug: 'pos',
    shortTitle: 'Cash / POS',
    h1: 'Cash management system',
    seoTitle: 'Cash software & restaurant POS flow | Heselo',
    seoDescription:
      'Cash software: shifts, transactions, cash report, and count. Restaurant POS flow in the same panel as booking and live floor.',
    keywords: ['cash software', 'restaurant POS', 'cash management', 'cash reconciliation'],
    intro:
      'Cash software is more than a pay button. Shift open, transactions, report, and count should answer the owner at day end. In Heselo, cash is tied to the same workday as reservations and live sessions.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Restaurants, cafes, and clubs that track cash/card/POS by shift, close the day, and reconcile counts.',
    problemsTitle: 'When cash tracking is weak',
    problems: [
      'Totals disagree at shift close',
      'Cash and card blur together',
      'It is hard to find which session was paid',
      'Counts stay on paper',
    ],
    howTitle: 'How Heselo cash works',
    howBody:
      'Open a shift, record transactions, review the cash report, and close with a count. Payments from live tracking follow the same day and shift logic. Closed-day history is kept.',
    featuresTitle: 'Cash capabilities',
    features: [
      {
        title: 'Open/close shift',
        desc: 'Day and shift stay distinct.',
      },
      {
        title: 'Transactions',
        desc: 'Cash, bank, and POS flow.',
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
      'Many venues book in one tool and cash in another. Heselo puts restaurant cash flow in the same panel — so “where did this total come from?” gets rarer at close.',
    faq: [
      {
        q: 'Where are payment amounts calculated?',
        a: 'Balances and status are calculated on the server. The screen shows results only.',
      },
      {
        q: 'Is there a cash count?',
        a: 'Yes. Cash count is part of shift/day close.',
      },
    ],
    related: ['restaurant', 'inventory', 'reservations'],
    ctaTitle: 'Cash flow demo',
    ctaBody: 'We walk through shift and count with a realistic scenario.',
  },
  {
    slug: 'inventory',
    shortTitle: 'Inventory',
    h1: 'Inventory management system',
    seoTitle: 'Inventory management & restaurant stock software | Heselo',
    seoDescription:
      'Inventory management: product catalog, stock levels, and counts. Restaurant stock software in the same panel as cash and live sales.',
    keywords: [
      'inventory management system',
      'restaurant inventory software',
      'stock count',
      'product catalog',
    ],
    intro:
      'When inventory sits apart from sales, levels look fine on paper and wrong on the shelf. In Heselo, products, inventory, and quick sale share one catalog — linked to live sessions and cash.',
    whoTitle: 'Who is it for?',
    whoBody:
      'Restaurants, cafes, and clubs that track product stock, run counts, and sell without a booking.',
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
        desc: 'Levels aligned with sales flow.',
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
      'Spreadsheets get filled at night; Heselo uses the same data at sale time. It works as restaurant inventory software without splitting from booking and cash.',
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
    related: ['pos', 'restaurant', 'cafe'],
    ctaTitle: 'Inventory and catalog demo',
    ctaBody: 'We show product and count flow for your venue.',
  },
]
