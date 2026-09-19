import type { APIRoute } from 'astro'
import { LOCALES, HTML_LANG } from '@/i18n/config'
import { SOLUTION_SLUGS } from '@/data/solutions'
import { getGuide, GUIDE_SLUGS } from '@/data/guides'
import { siteUrl } from '@/lib/site'

type RouteEntry = {
  path: string
  priority: string
  changefreq: 'weekly' | 'monthly' | 'yearly'
  lastmod?: string
}

const buildDate = new Date().toISOString().slice(0, 10)

const ROUTES: RouteEntry[] = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'features/', priority: '0.9', changefreq: 'monthly' },
  { path: 'solutions/', priority: '0.9', changefreq: 'weekly' },
  ...SOLUTION_SLUGS.map((slug) => ({
    path: `solutions/${slug}/`,
    priority: '0.85',
    changefreq: 'monthly' as const,
  })),
  { path: 'guides/', priority: '0.8', changefreq: 'weekly' },
  ...GUIDE_SLUGS.map((slug) => {
    const guide = getGuide('az', slug)
    return {
      path: `guides/${slug}/`,
      priority: '0.8',
      changefreq: 'monthly' as const,
      lastmod: guide?.dateModified || buildDate,
    }
  }),
  { path: 'pricing/', priority: '0.8', changefreq: 'monthly' },
  { path: 'about/', priority: '0.7', changefreq: 'monthly' },
  { path: 'contact/', priority: '0.8', changefreq: 'monthly' },
  { path: 'privacy/', priority: '0.3', changefreq: 'yearly' },
  { path: 'terms/', priority: '0.3', changefreq: 'yearly' },
]

export const GET: APIRoute = () => {
  const origin = siteUrl()

  const urls = ROUTES.flatMap((route) => {
    const lastmod = route.lastmod || buildDate
    const alternates = LOCALES.map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[locale]}" href="${origin}/${locale}/${route.path}" />`,
    ).join('\n')
    const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}/az/${route.path}" />`

    return LOCALES.map((locale) => {
      const loc = `${origin}/${locale}/${route.path}`
      const entryLastmod =
        route.path.startsWith('guides/') && route.path !== 'guides/'
          ? getGuide(locale, route.path.replace(/^guides\/|\/$/g, ''))?.dateModified || lastmod
          : lastmod
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${entryLastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
${alternates}
${xDefault}
  </url>`
    })
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
