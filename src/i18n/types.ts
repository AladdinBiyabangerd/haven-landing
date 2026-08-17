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
  | 'schedule'
  | 'sessions'
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
    rights: string
    tagline: string
  }
  hero: {
    brandHint: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    visualAlt: string
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
    items: Array<{
      title: string
      desc: string
    }>
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
    items: FaqItem[]
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
    solutionLinkLabel: string
    modules: Array<{
      title: string
      desc: string
      /** Link to a feature-focused solution page */
      solutionSlug?: 'reservations' | 'pos' | 'inventory'
    }>
  }
  pricing: {
    eyebrow: string
    title: string
    intro: string
    chooseType: string
    note: string
    cta: string
    periodMonthly: string
    periodOneTime: string
    includedModules: string
    oneVenue: string
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
    planConfirm: string
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
    softwareOperatingSystem: string
    knowsAbout: string[]
    softwareFeatures: string[]
    pages: Record<
      | 'home'
      | 'features'
      | 'pricing'
      | 'contact'
      | 'privacy'
      | 'terms'
      | 'solutions'
      | 'guides',
      { title: string; description: string; keywords: string[] }
    >
    notFound: { title: string; description: string; keywords: string[] }
  }
}
