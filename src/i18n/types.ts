export type FaqItem = {
  q: string
  a: string
  /** Locale-relative slug, e.g. `/solutions/pos` */
  href?: string
  linkLabel?: string
}

export type JourneyDoorCopy = {
  prompt: string
  label: string
}

export type ProductShotAltKey =
  | 'live-floor'
  | 'sessions'
  | 'schedule'
  | 'cash'
  | 'inventory'
  | 'products'
  | 'room-analytics'
  | 'audit'

export type Messages = {
  common: {
    linkArrow: string
    truncatedEllipsis: string
  }
  site: {
    tagline: string
    description: string
  }
  nav: {
    home: string
    features: string
    solutions: string
    guides: string
    pricing: string
    contact: string
    demo: string
    toggleMenu: string
    openMenu: string
    closeMenu: string
    /** Short visible label on the mobile menu button. */
    menu: string
    skipToContent: string
    breadcrumbs: string
    primaryNav: string
    languageNav: string
  }
  footer: {
    product: string
    solutions: string
    legal: string
    privacy: string
    terms: string
    about: string
    rights: string
    tagline: string
    /** Prefixed to the founder name in the footer credit line. */
    credit: string
    /** Link labels for orphan-prevention tool pages (SEO F3). */
    toolTariffCalculator: string
    toolPricingModel: string
  }
  hero: {
    brandHint: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  /** Sparse HTML vignette replacing the hero live-floor marketing image. */
  liveFloorMock: {
    title: string
    legendActive: string
    legendEmpty: string
    badgeActive: string
    badgeEmpty: string
    hint: string
    /** Accessible name for the mock panel. */
    ariaLabel: string
    /** Accessible name template for a station card button; `{name}` = station. */
    toggleStation: string
  }
  /** Sparse HTML vignette replacing the cash product marketing image. */
  cashMock: {
    title: string
    shiftOpen: string
    cashLabel: string
    cardLabel: string
    totalLabel: string
    txTitle: string
    txToday: string
    payCash: string
    payCard: string
    hint: string
    ariaLabel: string
  }
  /** Sparse HTML vignette replacing the sessions product marketing image. */
  sessionsMock: {
    title: string
    roomLabel: string
    statusActive: string
    statusPaused: string
    statusEnded: string
    elapsedLabel: string
    dueLabel: string
    extendChip: string
    pauseChip: string
    resumeChip: string
    stopChip: string
    hint: string
    ariaLabel: string
  }
  /** Sparse HTML vignette replacing the inventory product marketing image. */
  inventoryMock: {
    title: string
    subtitle: string
    summaryLabel: string
    summaryValue: string
    stockPill: string
    colProduct: string
    colQty: string
    colStatus: string
    statusOk: string
    statusLow: string
    unit: string
    typeDrink: string
    typeSnack: string
    products: {
      cola: string
      chips: string
      water: string
      energy: string
    }
    hint: string
    ariaLabel: string
  }
  /** Sparse HTML vignette replacing the products catalog marketing image. */
  productsMock: {
    title: string
    subtitle: string
    catalogPill: string
    typeDrink: string
    typeSnack: string
    products: {
      cola: string
      chips: string
      water: string
      energy: string
    }
    hint: string
    ariaLabel: string
  }
  /** Sparse HTML vignette replacing the room-analytics marketing image. */
  roomAnalyticsMock: {
    title: string
    subtitle: string
    weekPill: string
    revenueLabel: string
    occupancyLabel: string
    roomsTitle: string
    barLabel: string
    shareLabel: string
    hint: string
    ariaLabel: string
  }
  /** Sparse HTML vignette replacing the audit log marketing image. */
  auditMock: {
    title: string
    journalPill: string
    actions: {
      tariff: string
      discount: string
      shiftClose: string
      stockFix: string
    }
    actors: {
      aysel: string
      rashad: string
      admin: string
    }
    hint: string
    ariaLabel: string
  }
  /** Sparse HTML vignette for the booking schedule marketing shot. */
  scheduleMock: {
    title: string
    dayPill: string
    statusBooked: string
    statusFree: string
    rooms: {
      vip1: string
      karaoke2: string
      vip2: string
    }
    slots: {
      vip1: string
      karaoke2: string
      vip2: string
    }
    guests: {
      aysel: string
      rashad: string
    }
    moveChip: string
    cancelChip: string
    selectRow: string
    hint: string
    ariaLabel: string
  }
  trust: {
    items: string[]
  }
  demoPromise: {
    eyebrow: string
    title: string
    titleAccent: string
    items: Array<{ title: string; desc: string }>
  }
  pain: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    withoutLabel: string
    withLabel: string
    before: string[]
    after: string[]
  }
  pillars: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    /** Link label to /features under the three product proofs. */
    featuresLink: string
    items: Array<{
      title: string
      desc: string
    }>
  }
  homePricing: {
    eyebrow: string
    title: string
    titleAccent: string
    /** May include {low} — filled by loadPricedMessages. */
    lead: string
    ctaPricing: string
    ctaDemo: string
  }
  how: {
    eyebrow: string
    title: string
    titleAccent: string
    steps: Array<{ title: string; desc: string }>
  }
  faq: {
    eyebrow: string
    title: string
    /** “All questions” link when home shows a limited FAQ. */
    moreLabel: string
    items: FaqItem[]
  }
  /** Dedicated /faq/ page: groups reuse faq / pricing.faq / aboutPage.faq / contact.faq. */
  faqPage: {
    navLabel: string
    eyebrow: string
    title: string
    intro: string
    groups: {
      general: string
      pricing: string
      about: string
      demo: string
    }
  }
  journey: {
    navLabel: string
    insidePanel: JourneyDoorCopy
    priceForType: JourneyDoorCopy
    stillLearning: JourneyDoorCopy
    howItLooks: JourneyDoorCopy
    whichVenue: JourneyDoorCopy
    seePricing: JourneyDoorCopy
  }
  seoOverview: {
    eyebrow: string
    title: string
    titleAccent: string
    paragraphs: string[]
  }
  audiences: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    items: Array<{
      slug: string
      title: string
      desc: string
    }>
  }
  guidesTeaser: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    cta: string
  }
  guidesPage: {
    updatedLabel: string
    pricingCta: string
    demoCta: string
    relatedComparisonsTitle: string
    altSeekingTitle: string
    altSeekingBody: string
  }
  eeat: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    items: Array<{
      title: string
      desc: string
      href: string
    }>
  }
  productShot: {
    alts: Record<ProductShotAltKey, string>
  }
  pwa: {
    description: string
  }
  productGallery: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
  }
  cta: {
    title: string
    subtitle: string
    button: string
    whatsapp: string
    pickTypeTitle: string
    pickTypeSubtitle: string
    pickTypeButton: string
    typedTitle: string
    typedSubtitle: string
    nextForm: string
    nextWhatsapp: string
  }
  featuresPage: {
    eyebrow: string
    title: string
    intro: string
    /** Optional prose below intro (SEO depth; omit on thin locales) */
    body?: string[]
    solutionLinkLabel: string
    modules: Array<{
      title: string
      desc: string
      /** Extra paragraph under the card (RU SEO); omit elsewhere */
      detail?: string
      /** Link to a feature-focused solution page */
      solutionSlug?: 'reservations' | 'pos' | 'inventory'
    }>
  }
  aboutPage: {
    eyebrow: string
    title: string
    intro: string
    whatTitle: string
    whatBody: string[]
    whoTitle: string
    whoBody: string[]
    founderSectionTitle: string
    /** Schema.org jobTitle — sole founder */
    founderJobTitle: string
    /** Short Person.description for JSON-LD */
    founderSchemaDescription: string
    founderLabel: string
    paragraphs: string[]
    portfolioCta: string
    contactCta: string
    faq: FaqItem[]
  }
  pricing: {
    eyebrow: string
    title: string
    intro: string
    /** Above the venue tabs — always-visible published from-prices */
    summaryEyebrow: string
    summaryTitle: string
    summaryLead: string
    summaryHint: string
    summaryCustom: string
    summaryCustomLink: string
    /** Template: "{price}-dən / ay" for summary rows and solution chips */
    fromMonthly: string
    chooseType: string
    cta: string
    periodMonthly: string
    periodAnnual: string
    periodOneTime: string
    monthlyAlternative: string
    annualAlternative: string
    includedReservations: string
    overage: string
    includedModules: string
    oneVenue: string
    staffPerVenue: string
    dataRetentionMonths: string
    noCard: string
    bestFor: string
    popular: string
    capacity: {
      stations: string
      tables: string
      rooms: string
      zones: string
    }
    planNames: {
      starter: string
      plus: string
      pro: string
    }
    /** Carousel controls for switching plan cards. */
    planPrev: string
    planNext: string
    /** Expand / collapse truncated plan feature list. */
    planFeaturesMore: string
    planFeaturesLess: string
    calculator: {
      eyebrow: string
      title: string
      description: string
      /** Summary label when the calculator is collapsed behind <details>. */
      revealLabel: string
      reservationCount: string
      billingPeriod: string
      monthly: string
      annual: string
      plan: string
      baseFee: string
      overageCost: string
      total: string
      cheapest: string
      crossoverTitle: string
      crossoverHint: string
      noCrossover: string
    }
    faq: FaqItem[]
    crosslinks: {
      features: string
      solutions: string
      contact: string
    }
    offers: {
      gaming: {
        name: string
        intro: string
        plans: {
          starter: { forWhom: string; desc: string; features: string[] }
          plus: { forWhom: string; desc: string; features: string[] }
          pro: { forWhom: string; desc: string; features: string[] }
        }
      }
      billiards: {
        name: string
        intro: string
        plans: {
          starter: { forWhom: string; desc: string; features: string[] }
          plus: { forWhom: string; desc: string; features: string[] }
          pro: { forWhom: string; desc: string; features: string[] }
        }
      }
      karaoke: {
        name: string
        intro: string
        plans: {
          starter: { forWhom: string; desc: string; features: string[] }
          plus: { forWhom: string; desc: string; features: string[] }
          pro: { forWhom: string; desc: string; features: string[] }
        }
      }
      lounge: {
        name: string
        intro: string
        plans: {
          starter: { forWhom: string; desc: string; features: string[] }
          plus: { forWhom: string; desc: string; features: string[] }
          pro: { forWhom: string; desc: string; features: string[] }
        }
      }
      antikafe: {
        name: string
        intro: string
        plans: {
          starter: { forWhom: string; desc: string; features: string[] }
          plus: { forWhom: string; desc: string; features: string[] }
          pro: { forWhom: string; desc: string; features: string[] }
        }
      }
    }
    custom: {
      name: string
      desc: string
      price: string
      cta: string
      features: string[]
    }
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    reachTitle: string
    reachBody: string[]
    customTitle: string
    customIntro: string
    customNotice: string
    customSubmit: string
    name: string
    phone: string
    email: string
    phoneOrEmailHint: string
    waLead: string
    venue: string
    venueType: string
    venueTypePlaceholder: string
    venueTypes: Array<{ value: string; label: string }>
    venuesCount: string
    staffCount: string
    reservationsPerMonth: string
    criteriaHint: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
    alt: string
    emailWrite: string
    emailAria: string
    whatsapp: string
    whatsappAria: string
    whatsappPrefill: string
    whatsappPrefills: Record<'gaming' | 'karaoke' | 'billiards' | 'antikafe' | 'lounge', string>
    telegram: string
    telegramAria: string
    planConfirm: string
    heardFrom: string
    heardFromPlaceholder: string
    heardFromOptions: Array<{ value: string; label: string }>
    faq: FaqItem[]
  }
  privacy: {
    title: string
    updated: string
  }
  terms: {
    title: string
    updated: string
  }
  notFound: {
    title: string
    body: string
    back: string
  }
  seo: {
    ogImageAlt: string
    geoPlacename: string
    countryName: string
    knowsAbout: string[]
    softwareFeatures: string[]
    /** AggregateOffer.description — {low} = lowest published monthly AZN */
    aggregateOfferDescription: string
    pages: Record<
      | 'home'
      | 'features'
      | 'pricing'
      | 'contact'
      | 'about'
      | 'faq'
      | 'privacy'
      | 'terms'
      | 'solutions'
      | 'guides',
      { title: string; description: string; keywords: string[] }
    >
    notFound: { title: string; description: string; keywords: string[] }
  }
}
