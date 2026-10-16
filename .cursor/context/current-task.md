# Current task — /ru SEO audit v3 (2026-10-16)

## Completed

1. Heselo `plan_marketing_seed.json`: RU «сессия» → «сеанс» / «Активный сеанс» (matches landing lexicon).
2. Alembic `0070_sync_plan_marketing_seans`: force-overwrites DB `marketing_copy` from seed on migrate (empty-only ensure would not fix live).
3. Pushed Heselo `main` @ `470bb52`.

## Current state

After Heselo backend deploy + migrate, public catalog returns «Активный сеанс». Landing `/ru/pricing/` picks that up on next build/fetch — redeploy landing if catalog is build-time.

## Remaining (landing audit v3)

1. Domain email `info@heselo.online` — only when mailbox exists (still Gmail).
2. Thin pages &lt;400 words (6 pages).
3. playstation-cafe-software-alternative desc 166 → ≤160.
4. IndexNow ping after landing deploy.
5. PSI when quota available.

## Relevant files

- `Heselo/backend/app/services/plan_marketing_seed.json`
- `Heselo/backend/alembic/versions/0070_sync_plan_marketing_seans.py`
- `heselo-landing/docs/seo-ru-audit-2026-10-16-v3.md`
