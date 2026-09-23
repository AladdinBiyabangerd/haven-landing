import type { GuideCopy, GuidesHubCopy } from './types'
import { comparisonGuides } from './comparisonGuides'
import { gapEducationalGuides } from './gapEducationalGuides'

export const guidesHubEn: GuidesHubCopy = {
  eyebrow: 'Guides',
  h1: 'How club and room operations actually work',
  intro:
    'Practical answers to everyday questions about running gaming clubs, billiards halls, karaoke, room lounges, and anti-cafés. The goal is not to praise a product, but to show clearly which tool fits which part of the job.',
  seoTitle: 'Guides — club operations, choosing software, and POS alternatives | Heselo',
  seoDescription:
    'Running gaming clubs, karaoke, billiards, lounges, and anti-cafés: bookings, live sessions, and cash — plus practical guides on iiko, Clopos, Dine, and Excel alternatives.',
  keywords: [
    'what is a gaming club management system',
    'playstation club software',
    'karaoke booking system',
    'billiards table booking',
    'anti-cafe software',
    'club cash register software',
    'iiko alternative',
    'clopos alternative',
    'dine alternative',
  ],
  cardCta: 'Read',
  comparisonTitle: 'Alternatives and comparisons',
  comparisonIntro:
    'Comparing iiko, Clopos, Dine, MinuPOS, or other systems for a club or room-time venue? These guides cover features, daily workflow, and what to look for when choosing.',
}

export const guidesEn: GuideCopy[] = [
  {
    slug: 'gaming-club-management',
    shortTitle: 'Gaming club management',
    h1: 'What is a gaming club management system?',
    seoTitle: 'What is a gaming club management system? | Heselo',
    seoDescription:
      'How do PS, console, and PC gaming clubs handle bookings, live sessions, sales, and cash? A practical explanation and the key criteria for choosing software.',
    keywords: [
      'what is a gaming club management system',
      'ps club software',
      'playstation club management',
      'how to run a console club',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'Running a gaming club is not just about counting time. Which station is free, which booking is arriving, when a session started, and how extra sales and payment are closed are all part of the same workflow.',
    sections: [
      {
        id: 'why',
        title: 'Why does a gaming club need its own system?',
        paragraphs: [
          'PS and PC clubs work by the hour. Over a day you get phone bookings, free stations, extensions, and extra sales. When these live in a notebook, WhatsApp, and Excel, information can get lost between shifts.',
          'In a centralised system, stations, bookings, and live sessions are linked. Staff see from one place which station is active, free, or booked right now.',
        ],
      },
      {
        id: 'modules',
        title: 'What features should gaming club software have?',
        paragraphs: [
          'It depends on the size of the venue, but the core day-to-day needs are usually these:',
        ],
        bullets: [
          'Managing PS, console, and PC stations',
          'Bookings and schedule',
          'Live sessions and time extensions',
          'Drink and snack sales',
          'Cash shift and end-of-day report',
          'Customer history and staff permissions',
        ],
      },
      {
        id: 'timer',
        title: 'How is it different from a simple timer app?',
        paragraphs: [
          'A timer mostly shows time. You still have to track separately who a booking belongs to, how the shift is closed, which products were sold, and how much the day brought in.',
          'As a club grows, it becomes easier to keep this in one process instead of collecting it from different places.',
        ],
      },
      {
        id: 'heselo',
        title: 'How does Heselo work in a gaming club?',
        paragraphs: [
          'In Heselo, PS, console, and PC stations can sit on the same schedule. A booking turns into an active session, time can be extended, extra sales are added to the session, and the final amount shows up in the cash shift.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is it only for PS clubs, or does it work for PCs too?',
        a: 'Both work. Station types are set up separately, but the booking, session, and cash process stays the same.',
      },
      {
        q: 'Can a session be extended?',
        a: 'Yes. The active session is extended, and the extra time is added to that session’s bill.',
      },
      {
        q: 'Can snacks and drinks be added to a session?',
        a: 'Yes. Extra sales are recorded on the active session and appear together with the final payment.',
      },
      {
        q: 'Can the owner see what is going on without being at the club?',
        a: 'Yes. The schedule, active stations, and cash shift can be followed from the panel. Staff permissions let you give reception and the owner different access levels.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose gaming club / PS in the contact form and add your station count.',
      },
    ],
    relatedSolutions: ['gaming', 'billiards', 'reservations', 'pos'],
    ctaTitle: 'Demo for a gaming club',
    ctaBody: 'Tell us your station count — we’ll walk through bookings, live sessions, and cash on a real scenario.',
  },

  {
    slug: 'karaoke-room-booking',
    shortTitle: 'Karaoke room booking',
    h1: 'How are karaoke rooms booked?',
    seoTitle: 'How does karaoke room booking work? | Heselo',
    seoDescription:
      'How do the schedule, sessions, extra sales, and cash connect when booking karaoke rooms? A practical operations guide.',
    keywords: [
      'karaoke room booking',
      'karaoke management system',
      'book a karaoke room',
      'karaoke software',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'In a karaoke venue, a booking doesn’t end with marking a free slot for a room. Once guests arrive, the booking becomes a live session, and extra time and orders continue on the same bill.',
    sections: [
      {
        id: 'why',
        title: 'Why do room bookings get mixed up?',
        paragraphs: [
          'When phone, WhatsApp, and a paper schedule are used in parallel, not everyone sees the same room status at the same time. Especially when several rooms fill up at once, reception ends up double-checking.',
        ],
      },
      {
        id: 'flow',
        title: 'What does a sound karaoke booking flow look like?',
        paragraphs: [
          'First a room and time are chosen. When guests arrive, the booking becomes an active session. During the session, extra time and products are added to the bill, and payment is closed at the end of the shift.',
        ],
        bullets: [
          'Room schedule',
          'Booking',
          'Live session',
          'Extra sales',
          'Cash shift',
        ],
      },
      {
        id: 'form',
        title: 'Is an online booking form enough?',
        paragraphs: [
          'A booking form is useful for collecting requests, but it doesn’t run what happens inside the venue. Starting the session when a room opens, adding orders, and taking the final payment need a separate process.',
        ],
      },
      {
        id: 'heselo',
        title: 'What does Heselo offer for karaoke?',
        paragraphs: [
          'Each room is set up on the schedule, and active sessions are visible live. Because bookings, sessions, and cash sit in one panel, reception doesn’t have to jump between sources during the day.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can several rooms be shown on one schedule?',
        a: 'Yes. All rooms can be managed on the same schedule and live view.',
      },
      {
        q: 'Can pre-orders be added?',
        a: 'Yes. You can attach pre-orders and other notes to a booking.',
      },
      {
        q: 'What if a group wants to stay longer?',
        a: 'The active session is extended. Extra time and orders continue on that room’s bill.',
      },
      {
        q: 'How do you avoid giving the same room to two groups?',
        a: 'When all bookings live on one schedule, you can see in one place whether the room is free, booked, or active for that hour.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose karaoke in the contact form and add your room count.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Demo for karaoke',
    ctaBody: 'Tell us your room count — we’ll show the booking and live session flow.',
  },

  {
    slug: 'billiards-club-management',
    shortTitle: 'Billiards club management',
    h1: 'How is a billiards club run?',
    seoTitle: 'What is a billiards club management system? | Heselo',
    seoDescription:
      'How do table bookings, live games, time, extra sales, and cash come together in a billiards club? A practical operations guide.',
    keywords: [
      'what is a billiards club management system',
      'how to book a billiards table',
      'billiards schedule',
      'billiards table timer',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'In a billiards club, the basic unit of work is the table. Whether a table is free or booked, when a game started, how long it runs, and which bill extra orders belong to all need to be tracked together through the day.',
    sections: [
      {
        id: 'why',
        title: 'Why do a whiteboard and a phone cause trouble?',
        paragraphs: [
          'A whiteboard can fall behind, and a booking taken by phone may not be visible to other staff straight away. When VIP rooms and regular tables are kept on separate lists, checking the current status gets even harder.',
        ],
      },
      {
        id: 'time',
        title: 'How are time and payment linked?',
        paragraphs: [
          'When a game starts, a session opens. Pauses, extensions, and extra products are tied to that session. The rate is calculated from the table type and time rules, and the final amount goes into the cash shift.',
        ],
      },
      {
        id: 'mix',
        title: 'Can billiards, karaoke, and a lounge run together?',
        paragraphs: [
          'Yes. Mixed venues can keep different table and room types in the same management panel. That way you don’t have to pull booking and sales data together from different systems.',
        ],
      },
      {
        id: 'heselo',
        title: 'How does Heselo work for billiards?',
        paragraphs: [
          'Tables and rooms are set up individually. Bookings, live games, and cash continue in one workflow. Separate rates can also be set for different table types.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can VIP rooms and regular tables coexist?',
        a: 'Yes. Each is set up as its own resource and can be managed on the same schedule.',
      },
      {
        q: 'Isn’t a timer enough?',
        a: 'If you only need to track time, a timer may be enough. If bookings, sales, and cash also need to be in the same process, you need a broader management system.',
      },
      {
        q: 'Can different tables have different prices?',
        a: 'Yes. Table types are set up separately, and each can have its own rate.',
      },
      {
        q: 'Can a game be paused?',
        a: 'The session can be paused and resumed later. Extra sales stay on that session’s bill.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose billiards in the contact form and add your table count.',
      },
    ],
    relatedSolutions: ['billiards', 'gaming', 'karaoke', 'pos'],
    ctaTitle: 'Demo for billiards',
    ctaBody: 'Tell us your table count — we’ll show bookings, live games, and cash.',
  },

  {
    slug: 'room-lounge-management',
    shortTitle: 'Room lounge management',
    h1: 'How is a room lounge run?',
    seoTitle: 'What is a room lounge management system? | Heselo',
    seoDescription:
      'How are VIP room bookings, sessions, extra sales, and cash handled in a room lounge? A practical guide.',
    keywords: [
      'room lounge software',
      'lounge room booking',
      'vip room booking',
      'lounge management system',
    ],
    datePublished: '2026-08-13',
    dateModified: '2026-09-23',
    intro:
      'In a room lounge, guests take a room for a set time. When the booking, session start, extra time, and orders are recorded separately, reconciling the bills at the end of the day gets hard.',
    sections: [
      {
        id: 'unit',
        title: 'Why is the room the basic unit?',
        paragraphs: [
          'In a room-based venue, the main resource is the room itself. The schedule should show clearly when a room is free, which guest it is held for, and whether a session is active right now.',
        ],
      },
      {
        id: 'flow',
        title: 'How is the daily workflow set up?',
        paragraphs: [
          'The booking is assigned to a room. When guests arrive, the session starts. Extra time and products are added to that session. Once payment is closed, it shows up in the cash shift.',
        ],
      },
      {
        id: 'mix',
        title: 'Can a lounge, karaoke, and billiards share one venue?',
        paragraphs: [
          'Mixed venues can manage rooms, tables, and other resources in one system. The main benefit is that all bookings and sales are visible in a single workflow.',
        ],
      },
      {
        id: 'heselo',
        title: 'What does Heselo do for a room lounge?',
        paragraphs: [
          'Rooms are set up as separate resources. Bookings, live sessions, sales, and cash continue in one panel. The workflow can be set up much like karaoke rooms.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can an open hall be in the same system?',
        a: 'Yes. Tables and rooms can be managed on the same schedule and cash process.',
      },
      {
        q: 'Is this coworking software?',
        a: 'No. The focus is entertainment venues that run on hours and sessions: PS clubs, karaoke, billiards, anti-cafés, and lounges.',
      },
      {
        q: 'I’m looking for lounge bar software. Does this fit?',
        a: 'This guide explains how a room lounge operates. If you’re looking for lounge bar management software itself, see the room lounge solution page: VIP room bookings, live sessions, bar sales, and cash in one panel, with the Small plan from 39 AZN/month.',
      },
      {
        q: 'Can bar sales outside the rooms go through the same cash register?',
        a: 'Yes. Direct bar sales and room bills can be tracked in the same cash shift.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose room lounge in the contact form and add your room count.',
      },
    ],
    relatedSolutions: ['lounge', 'karaoke', 'antikafe', 'reservations'],
    ctaTitle: 'Demo for a room lounge',
    ctaBody: 'Tell us your room count — we’ll show the booking and live session flow.',
  },

  {
    slug: 'antikafe-management-system',
    shortTitle: 'Anti-café management',
    h1: 'What is an anti-café management system?',
    seoTitle: 'What is an anti-café management system? | Heselo',
    seoDescription:
      'How are hourly billing, table and room bookings, product sales, and cash handled in an anti-café? A practical guide to choosing software.',
    keywords: [
      'what is an anti-cafe management system',
      'anti-cafe software',
      'how to take anti-cafe bookings',
      'hourly billing system',
    ],
    datePublished: '2026-08-12',
    dateModified: '2026-09-23',
    intro:
      'In an anti-café, guests mainly pay for the time they spend. On top of that come table and room bookings, drink and snack sales, cash, and sometimes stock. That’s why software that only counts time may not cover the whole process.',
    sections: [
      {
        id: 'what',
        title: 'How does the anti-café model work?',
        paragraphs: [
          'A guest picks a table, sofa, room, or another zone and stays for a while. Drink and snack orders can come up during that time.',
          'The key is to manage time, space, and extra sales without splitting them apart.',
        ],
      },
      {
        id: 'modules',
        title: 'Which features matter in anti-café software?',
        paragraphs: [
          'Depending on the venue’s model, the core features can include:',
        ],
        bullets: [
          'Table and room bookings',
          'Live sessions and time tracking',
          'Extra product sales',
          'Cash shift and count',
          'Product catalogue and stock',
          'Customer notes',
          'Staff permissions',
        ],
      },
      {
        id: 'hourly',
        title: 'How is hourly billing calculated?',
        paragraphs: [
          'A booking or walk-in turns into a live session. When the session is extended, the extra time is added to the bill. Product sales can sit on the same bill. That way staff don’t have to add up time and products separately.',
        ],
      },
      {
        id: 'vs-gaming',
        title: 'How is an anti-café different from a gaming club?',
        paragraphs: [
          'In a gaming club, the main resource is usually a PS, console, or PC station. In an anti-café, tables, rooms, and other zones come first. Even so, both share similar processes: bookings, live sessions, and cash.',
        ],
      },
      {
        id: 'choose',
        title: 'What to look for when choosing anti-café software',
        paragraphs: [
          'Do bookings and live sessions work in the same system? Can product sales be added to a session? Is the cash shift closed separately? Can tables and rooms have different rates?',
          'The best test is to replay a real working day in the system: booking, check-in, extension, sale, and end-of-day close.',
        ],
      },
      {
        id: 'heselo',
        title: 'How is Heselo used in an anti-café?',
        paragraphs: [
          'In Heselo, tables and rooms, live sessions, products, and cash can be managed in one panel. You can create resources and rates that match your venue’s layout.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a simple timer app enough for an anti-café?',
        a: 'If you only need to track time, a timer may be enough. If bookings, sales, and cash are also managed, you need more features.',
      },
      {
        q: 'Can rooms be booked?',
        a: 'Yes. A room can be set up as its own resource and managed on the schedule.',
      },
      {
        q: 'How is the hourly charge calculated?',
        a: 'A rate is set for the table or room, and the amount is based on the session length. Extra sales can be added to the same bill.',
      },
      {
        q: 'How much does anti-café software cost?',
        a: 'In Heselo, the Small plan for anti-cafés starts at 32 AZN/month. Other plans and annual billing options are listed on the pricing page.',
      },
      {
        q: 'How do I get a demo?',
        a: 'In the contact form, note your table or room count and how your venue works.',
      },
    ],
    relatedSolutions: ['antikafe', 'gaming', 'reservations', 'pos'],
    ctaTitle: 'Demo for an anti-café',
    ctaBody: 'We’ll walk through the workflow from booking to closing the cash shift.',
  },

  {
    slug: 'playstation-club-software',
    shortTitle: 'PS club software',
    h1: 'What to look for in PlayStation club software',
    seoTitle: 'PlayStation club software — key features | Heselo',
    seoDescription:
      'How should station bookings, live sessions, sales, and cash work in PS and console club software? A practical checklist.',
    keywords: [
      'playstation club software',
      'ps club software',
      'console club management',
      'playstation club management system',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'PlayStation club software is more than a timer. When choosing, look at how bookings, station status, live sessions, extra sales, and cash connect to each other.',
    sections: [
      {
        id: 'why',
        title: 'What should PS club software solve?',
        paragraphs: [
          'During the day a club gets phone bookings, walk-ins, free stations, and session extensions. When information is kept in different places, staff have to re-check the same status at every shift change.',
          'In software, each station’s status and its session can be seen in one place.',
        ],
      },
      {
        id: 'must-have',
        title: 'Which features are the minimum?',
        paragraphs: ['This checklist is useful when choosing software:'],
        bullets: [
          'Separate setup for PS, console, and PC stations',
          'Booking, moving, and cancelling',
          'Live sessions and time extensions',
          'Drink and snack sales',
          'Cash shift',
          'Different permissions for staff and owner',
        ],
      },
      {
        id: 'console',
        title: 'Is there a difference between a PS club and a console club?',
        paragraphs: [
          'People search with different words, but the need is usually the same: booking console stations and managing active sessions. What matters is less the specific device and more how the software handles different stations.',
        ],
      },
      {
        id: 'timer',
        title: 'Is a timer alone enough?',
        paragraphs: [
          'If the goal is only to track play time, yes. But if you also need bookings, sales, customer history, and cash, a timer won’t handle those for you.',
        ],
      },
      {
        id: 'heselo',
        title: 'How does Heselo fit this process?',
        paragraphs: [
          'PS, console, and PC stations can sit on the same schedule. Active sessions, extra sales, and cash data continue in the same workflow.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can it be used for PlayStation only?',
        a: 'Yes. Other consoles and PC stations can also be set up as separate resources.',
      },
      {
        q: 'Can PC stations be in the same software?',
        a: 'Yes. Different station types can be managed on the same schedule and cash process.',
      },
      {
        q: 'How much does PS club software cost?',
        a: 'In Heselo, the Small plan for gaming clubs starts at 25 AZN/month. Medium and Large plans are available for more stations.',
      },
      {
        q: 'What should I check during a demo?',
        a: 'Try a real working scenario: a booking, a walk-in, starting a session, extending time, an extra sale, and closing the shift.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose gaming club / PS in the contact form and add your station count.',
      },
    ],
    relatedSolutions: ['gaming', 'reservations', 'pos', 'inventory'],
    ctaTitle: 'Demo for a PS club',
    ctaBody: 'Tell us your station count — we’ll show the booking and live session flow.',
  },

  {
    slug: 'billiards-table-booking',
    shortTitle: 'Billiards table booking',
    h1: 'How should billiards table booking and scheduling work?',
    seoTitle: 'Billiards table booking and scheduling system | Heselo',
    seoDescription:
      'How do table bookings, the schedule, live games, and cash come together? A practical guide to online and phone bookings.',
    keywords: [
      'billiards table booking',
      'book a billiards table online',
      'billiards scheduling system',
      'billiards booking system',
      'billiards scheduling',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'Booking a billiards table is more than writing down a name and a time. The table, time, duration, and customer details later need to connect to the live game and the payment.',
    sections: [
      {
        id: 'booking',
        title: 'What details should a table booking include?',
        paragraphs: [
          'The essentials are date, time, table or VIP room, duration, and contact details. If a booking is changed or cancelled, it also helps to keep a history of the change.',
        ],
      },
      {
        id: 'schedule',
        title: 'Why shouldn’t the schedule be separate from bookings?',
        paragraphs: [
          'The schedule shows the status of every table. If bookings are kept in one place and active games in another, staff have to combine the data just to find a free table.',
        ],
      },
      {
        id: 'online',
        title: 'How can a billiards table be booked online?',
        paragraphs: [
          'A guest can choose a date, time, and table type and send their contact details. Once the request lands on reception’s shared schedule, staff can confirm, change, or decline it.',
          'The key is that online requests don’t sit apart from phone bookings. Otherwise an online booking can cause the same confusion as any other scattered note.',
        ],
      },
      {
        id: 'live',
        title: 'How does a booking turn into a live game?',
        paragraphs: [
          'When guests arrive, the booking becomes an active session. Pauses and extensions are recorded on that session, and extra orders can be added to the same bill.',
        ],
      },
      {
        id: 'mistakes',
        title: 'The most common problems',
        paragraphs: ['When setting up table bookings, watch out for these:'],
        bullets: [
          'Phone notes kept apart from the schedule',
          'Relying on a timer alone',
          'VIP rooms kept on a separate list',
          'Play time and payment recorded separately',
        ],
      },
      {
        id: 'heselo',
        title: 'How does table booking work in Heselo?',
        paragraphs: [
          'Tables and rooms are set up as separate resources. Bookings appear on the schedule, turn into a live session when guests arrive, and the final payment shows up in the cash shift.',
        ],
      },
    ],
    faq: [
      {
        q: 'Are a booking and a schedule the same thing?',
        a: 'No. A booking is a specific reservation; the schedule is the overall view of all tables and times.',
      },
      {
        q: 'Can rooms and tables be in the same system?',
        a: 'Yes. Different resources can be managed on the same schedule.',
      },
      {
        q: 'Does online booking replace phone booking?',
        a: 'Not necessarily. Both channels can be used. What matters is that all bookings appear on the same schedule.',
      },
      {
        q: 'Can same-day bookings be accepted?',
        a: 'Yes, if the chosen time is free. Reception should see active games and existing bookings together at that moment.',
      },
      {
        q: 'Is a deposit needed for a table booking?',
        a: 'That depends on the venue’s own policy. If a deposit is required, it helps to record it together with the booking.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose billiards in the contact form and add your table count.',
      },
    ],
    relatedSolutions: ['billiards', 'reservations', 'gaming', 'pos'],
    ctaTitle: 'Demo for billiards booking',
    ctaBody: 'Tell us your table count — we’ll show the schedule and live game flow.',
  },

  {
    slug: 'karaoke-booking-system',
    shortTitle: 'Karaoke booking system',
    h1: 'What to look for in a karaoke booking system',
    seoTitle: 'Karaoke booking system — how to choose | Heselo',
    seoDescription:
      'How should room bookings, live sessions, extra sales, and cash work in a karaoke booking system? A practical checklist.',
    keywords: [
      'karaoke booking system',
      'karaoke reservation system',
      'karaoke room booking software',
      'choosing karaoke management software',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'When choosing a karaoke booking system, looking only at the online booking form isn’t enough. Check how a room is handled from booking to session, and from session to payment.',
    sections: [
      {
        id: 'form-vs-system',
        title: 'What is the difference between a booking form and a management system?',
        paragraphs: [
          'A booking form collects the guest’s request. A management system links that booking to the room’s daily work: the session starts, orders are added, and payment is closed.',
        ],
      },
      {
        id: 'checklist',
        title: 'What should you check when choosing?',
        paragraphs: ['Try these during a demo:'],
        bullets: [
          'Are all rooms shown on the same schedule?',
          'Does the bill update when a session is extended?',
          'Can pre-orders be added?',
          'Is the cash shift closed separately?',
          'Can different room and venue types work in the same panel?',
        ],
      },
      {
        id: 'peak',
        title: 'What should be tested at peak hours?',
        paragraphs: [
          'It helps to test a Friday or Saturday evening scenario where several rooms change at once: moving a room, cancelling a booking, a late group, and extending a session.',
        ],
      },
      {
        id: 'heselo',
        title: 'What does Heselo offer for karaoke?',
        paragraphs: [
          'Rooms are managed on the schedule and in a live view. A booking becomes an active session, extra products are added to the bill, and the final amount shows up in the cash shift.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is a booking website alone enough?',
        a: 'It can be enough just for collecting bookings. If sessions, sales, and cash also need managing, you need extra management features.',
      },
      {
        q: 'Can VIP and regular rooms be told apart?',
        a: 'Yes. Rooms are set up individually and can have different rates.',
      },
      {
        q: 'How much does a karaoke booking system cost?',
        a: 'In Heselo, the Small plan for karaoke starts at 39 AZN/month. Prices for the other plans are published too.',
      },
      {
        q: 'Can drinks be linked to a booking in advance?',
        a: 'Yes. A pre-order can be linked to the booking, and new orders after the session starts can be added to the same bill.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Choose karaoke in the contact form and add your room count.',
      },
    ],
    relatedSolutions: ['karaoke', 'lounge', 'reservations', 'pos'],
    ctaTitle: 'Karaoke booking demo',
    ctaBody: 'Tell us your room count — we’ll show the booking and live session flow.',
  },

  {
    slug: 'club-pos-vs-excel',
    shortTitle: 'A panel instead of Excel',
    h1: 'When do Excel and WhatsApp stop being enough for a club?',
    seoTitle: 'A club management panel instead of Excel and WhatsApp | Heselo',
    seoDescription:
      'When do WhatsApp bookings, Excel sheets, and notebooks start causing problems in a club? A practical guide to judging whether to move to a management panel.',
    keywords: [
      'club management in excel',
      'whatsapp booking problems',
      'alternative to whatsapp bookings',
      'excel cash register alternative',
      'software instead of a notebook',
      'club cash register software',
      'venue management panel',
    ],
    datePublished: '2026-09-07',
    dateModified: '2026-09-23',
    intro:
      'Excel, WhatsApp, and a notebook can work in a small club for a while. The trouble usually starts as the venue grows: with more bookings, more staff, and more sales, keeping the same information in several places gets hard.',
    sections: [
      {
        id: 'pain',
        title: 'Where do Excel and WhatsApp cause trouble?',
        paragraphs: [
          'When a booking sits in a WhatsApp message, table status on a whiteboard, and payment on another sheet, staff have to piece the picture together themselves. At a shift change, it can be unclear which information is current.',
          'WhatsApp is convenient for taking bookings, but it doesn’t put them on a shared schedule, and it doesn’t manage sessions or cash.',
        ],
      },
      {
        id: 'signals',
        title: 'What signals suggest it’s time to consider a panel?',
        paragraphs: ['For example:'],
        bullets: [
          'Bookings are becoming hard to track by hand',
          'Several staff members look after the same tables and rooms',
          'Sales and cash figures often need reconciling',
          'The owner builds the end-of-day report separately in Excel',
        ],
      },
      {
        id: 'panel',
        title: 'What does a management panel bring together?',
        paragraphs: [
          'Bookings, live sessions, sales, and cash are kept in one workflow. The goal isn’t to turn everything into a heavy ERP; it’s to gather daily operational data in one place.',
        ],
      },
      {
        id: 'not-erp',
        title: 'This doesn’t have to mean a heavy ERP',
        paragraphs: [
          'A club’s needs are not the same as a restaurant’s or a large company’s ERP. The core needs are usually bookings, live resource status, sessions, sales, and cash.',
        ],
      },
      {
        id: 'heselo',
        title: 'How does Heselo set this up?',
        paragraphs: [
          'Heselo brings bookings, the live floor, sales, cash, and inventory together in one panel. You can pick a plan that matches the size of your venue.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do we have to stop using Excel entirely?',
        a: 'Not necessarily. A separate panel can handle daily bookings and cash, while Excel stays for other reports and analysis.',
      },
      {
        q: 'Can’t WhatsApp be used for bookings?',
        a: 'It can. What matters is that bookings coming from WhatsApp are then entered on the shared schedule.',
      },
      {
        q: 'Is a panel too early for a small club?',
        a: 'That depends on how the venue works. If bookings and cash are still easy to manage, there may be no rush to switch. As staff and active spots grow, the need can change.',
      },
      {
        q: 'How do you move from Excel to a panel?',
        a: 'Usually tables, rooms, or stations are set up first, then rates and products. Old Excel files can be kept as an archive.',
      },
      {
        q: 'How do I get a demo?',
        a: 'Tell us your venue type and your table, room, or station count.',
      },
    ],
    relatedSolutions: ['pos', 'reservations', 'gaming', 'inventory'],
    ctaTitle: 'Try the club panel',
    ctaBody: 'Tell us your venue type — we’ll show a scenario that fits your daily workflow.',
  },

  {
    slug: 'heselo-pricing',
    shortTitle: 'Heselo pricing',
    h1: 'How much does Heselo cost? Published plans explained',
    seoTitle: 'Heselo pricing — published plans by venue type',
    seoDescription:
      'Heselo plans: PS 25, billiards 29, anti-café 32, karaoke and lounge 39 AZN/month. Plans, annual billing, custom quotes, and a free trial/demo.',
    keywords: [
      'Heselo pricing',
      'Heselo plans',
      'how much is Heselo',
      'club panel pricing',
      '25 AZN venue software',
      'free club software trial',
      'club software free demo',
    ],
    datePublished: '2026-09-19',
    dateModified: '2026-09-23',
    intro:
      'Heselo’s standard plans are published openly. The starting price depends on the venue type and how that venue works. This guide briefly explains how the plans are structured.',
    sections: [
      {
        id: 'published',
        title: 'What are the starting prices?',
        paragraphs: [
          'Starting monthly fees for the Small plan are: gaming club / PS — 25 AZN, billiards — 29 AZN, anti-café — 32 AZN, karaoke and room lounge — 39 AZN.',
          'Prices, limits, and annual billing options for the Medium and Large plans are in the table on the pricing page.',
        ],
      },
      {
        id: 'why-differ',
        title: 'Why does the price depend on venue type?',
        paragraphs: [
          'A PS station, a billiards table, and a karaoke room don’t share the same workflow. Resource count, booking model, and session handling differ, so plans are split by category.',
        ],
      },
      {
        id: 'annual',
        title: 'How does annual billing work?',
        paragraphs: [
          'Annual plans include 2 months free — you pay for 10 months and use it for 12. Other plan details are on the pricing page.',
        ],
      },
      {
        id: 'custom',
        title: 'When do you need a custom quote?',
        paragraphs: [
          'Standard plans are published for most venues. If you have several branches or needs beyond the standard limits, you can request a separate quote.',
        ],
      },
    ],
    faq: [
      {
        q: 'Where are Heselo’s official prices?',
        a: 'All standard plans and venue categories are on the pricing page: https://heselo.online/en/pricing/',
      },
      {
        q: 'Is pricing only by negotiation?',
        a: 'No. Standard plan prices are public. Custom quotes are meant for special needs.',
      },
      {
        q: 'What is the minimum plan for a PS club?',
        a: 'The Small plan starts at 25 AZN/month.',
      },
      {
        q: 'What is the minimum plan for karaoke?',
        a: 'The Small plan starts at 39 AZN/month.',
      },
      {
        q: 'What does it cost for an anti-café?',
        a: 'The Small plan starts at 32 AZN/month.',
      },
      {
        q: 'Is there a free trial or demo of the club software?',
        a: 'Yes — a free demo. Send your venue type and table, room, or station count through the contact form or WhatsApp, and we’ll walk you through the panel on a scenario in about 15 minutes. No card is needed, and there’s no obligation to subscribe after the demo.',
      },
    ],
    relatedSolutions: ['gaming', 'karaoke', 'billiards', 'antikafe', 'lounge'],
    ctaTitle: 'See the plans',
    ctaBody: 'Pick your venue type and compare the plans that fit.',
  },

  ...gapEducationalGuides('en'),
  ...comparisonGuides('en'),
]
