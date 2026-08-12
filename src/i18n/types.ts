export type Messages = {
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
    company: string
    solutions: string
    learn: string
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
      subtitle: string
      desc: string
      points: string[]
    }>
  }
  how: {
    eyebrow: string
    title: string
    titleAccent: string
    steps: Array<{ title: string; desc: string }>
  }
  showcase: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    liveLabel: string
    dueLabel: string
    shiftLabel: string
    tables: Array<{ name: string; status: string; meta: string }>
  }
  faq: {
    eyebrow: string
    title: string
    items: Array<{ q: string; a: string }>
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
      anchor: string
    }>
  }
  guidesTeaser: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    cta: string
  }
  eeat: {
    eyebrow: string
    title: string
    titleAccent: string
    intro: string
    auditIntro: string
    items: Array<{
      title: string
      desc: string
      href: string
      linkLabel: string
    }>
  }
  productShot: {
    chromeLabel: string
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
  }
  featuresPage: {
    eyebrow: string
    title: string
    intro: string
    solutionLinkLabel: string
    modules: Array<{
      title: string
      desc: string
      bullets: string[]
      /** Link to a feature-focused solution page */
      solutionSlug?: 'reservations' | 'pos' | 'inventory'
    }>
  }
  pricing: {
    eyebrow: string
    title: string
    intro: string
    note: string
    cta: string
    period: string
    featureVenues: string
    featureIncluded: string
    featureOverage: string
    featureRequests: string
    faq: Array<{ q: string; a: string }>
    crosslinks: {
      features: string
      solutions: string
      contact: string
    }
    plans: {
      starter: { name: string; desc: string }
      pro: { name: string; desc: string }
      business: { name: string; desc: string }
    }
  }
  contact: {
    eyebrow: string
    title: string
    intro: string
    name: string
    email: string
    venue: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
    alt: string
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
