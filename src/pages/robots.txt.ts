import type { APIRoute } from 'astro'
import { siteUrl } from '@/lib/site'

/** Explicit AI crawler allow-list — same rules as `*` (marketing pages only). */
const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'PerplexityBot',
  'Google-Extended',
  'GoogleOther',
  'ClaudeBot',
  'anthropic-ai',
  'Applebot-Extended',
  'Bytespider',
  'CCBot',
] as const

function botBlock(agent: string): string {
  return `User-agent: ${agent}
Allow: /
Disallow: /api/
Disallow: /az/404/
Disallow: /en/404/
Disallow: /ru/404/
`
}

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /az/404/',
    'Disallow: /en/404/',
    'Disallow: /ru/404/',
    '',
    ...AI_BOTS.flatMap((agent) => [botBlock(agent).trimEnd(), '']),
    `Sitemap: ${siteUrl()}/sitemap.xml`,
    '',
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
