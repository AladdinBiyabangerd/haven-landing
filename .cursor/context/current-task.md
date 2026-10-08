# Current task — GA-based measurement + conversion

## Completed

- `src/lib/campaign.ts` — first-touch UTM + heardFrom map (incl. producthunt)
- ContactForm + contactMail + az/en/ru `heardFromOptions`
- Analytics funnel: `generate_lead` (+ UTM), `cta_click`, `pricing_select`
- EN hero form-first (`Request a demo` → contact); AZ/RU WhatsApp primary
- Docs: social UTM hygiene, PH post-launch GA checklist, organic amplify (off-site-seo)
- Verified locally: PH UTM → sessionStorage → contact heardFrom=Product Hunt
- PH listing live; Visit website UTM correct; maker comment/reply blocked (PH Sign in)

## Current state

Code + docs done. Build OK. Commit when user asks.

## Decisions

- Site-wide measurement (not PH-only)
- EN form-first; AZ/RU WA primary
- No dedicated `/producthunt` LP

## Remaining work

1. User: GA4 Admin → mark `generate_lead` as key event
2. User: PH Sign in → reply to comments / maker update (agent cannot while logged out)
3. Deploy this branch + guide IndexNow after publish
4. Commit when asked

## Relevant files

- `src/lib/campaign.ts`, `src/lib/contactMail.ts`
- `src/components/{Analytics,ContactForm,Hero,Header,Footer,PricingOffers}.astro`
- `src/i18n/messages/{az,en,ru}.ts`
- `docs/{producthunt-playbook,social-posts-log,off-site-seo-az}.md`
