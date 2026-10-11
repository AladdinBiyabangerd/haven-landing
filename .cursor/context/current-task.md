# Current task — GA4 action report (2026-10-11)

## Completed

Read Heselo GA4 (28d ≈ 90d traffic) and wrote action report canvas:
`canvases/ga4-heselo-action-report.canvas.tsx` (Cursor project canvases).

### Snapshot (13 Sep – 10 Oct)

| Metric | Value |
|--------|-------|
| Active users | 251 |
| Page views | 1 814 |
| Avg engagement | 17s |
| Key events (GA) | 0 (not marked) |
| generate_lead (raw) | 11 events / 5 users |
| form_start | 5 / 2 users |
| Scroll 90% | 87 users (~35%) |

Traffic: Direct ~150; social (LI/FB/IG) ~14 each; Google organic ~13; PH ~11.
Top page: AZ home 1 301 views / 93 users (14 view/user — investigate). Funnel: home → pricing 20 → contact 12.

## Decisions

1. **P0 ops:** Mark `generate_lead` as key event in GA4 Admin (code already fires).
2. **P0 code next:** Home → pricing/contact funnel (CTA + internal links), not new pages.
3. **P1:** Home view inflation + Clarity on Sept 19 spike; pricing title consolidation; verify `cta_click` in Realtime.
4. Keep SEO plan: deploy GSC CTR cila + index; don’t open new guides yet.

## Remaining

1. User: GA Admin key event + Clarity glance
2. Next chat/PR: home funnel + pricing title unify (+ cta_click fix if Realtime empty)
3. Deploy + GSC URL Inspection (6 EN/RU URLs from prior CTR pass)

## Relevant files

- `src/components/Analytics.astro`
- `src/components/ContactForm.astro` / Hero / PricingOffers
- `docs/seo-keyword-growth-plan.md`
- Canvas: project `canvases/ga4-heselo-action-report.canvas.tsx`
