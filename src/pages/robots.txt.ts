import type { APIRoute } from 'astro'
import { siteUrl } from '@/lib/site'

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /az/404/
Disallow: /en/404/
Disallow: /ru/404/

Sitemap: ${siteUrl()}/sitemap.xml
`
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
