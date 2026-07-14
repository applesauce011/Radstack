-- ============================================================
-- RadStack — 4-Year Plan Migration
-- ============================================================
--
-- HOW TO APPLY:
--   Supabase Dashboard → SQL Editor → New Query → paste & run
--
-- SAFETY: Additive — widens two CHECK constraints to allow the
--   new '4year' plan_type value. Does NOT touch any existing rows.
--   The 'lifetime' value is intentionally kept (not removed) so
--   existing lifetime subscribers and future admin-granted promo
--   codes keep working exactly as before.
--
-- CONTEXT: Replacing the publicly-sold "Lifetime" plan with a
--   4-year plan ($349). Existing subscriptions/promo_codes rows
--   using plan_type='lifetime' are untouched by this migration.
--
-- NOTE: Constraint names below follow Postgres's default naming
--   for inline CHECK constraints (<table>_<column>_check). If the
--   DROP CONSTRAINT statement errors with "constraint does not
--   exist", look up the real name first:
--     SELECT conname FROM pg_constraint WHERE conrelid = 'subscriptions'::regclass;
--     SELECT conname FROM pg_constraint WHERE conrelid = 'promo_codes'::regclass;
-- ============================================================

ALTER TABLE subscriptions DROP CONSTRAINT IF EXISTS subscriptions_plan_type_check;
ALTER TABLE subscriptions ADD CONSTRAINT subscriptions_plan_type_check
  CHECK (plan_type IN (NULL,'3month','12month','lifetime','4year'));

ALTER TABLE promo_codes DROP CONSTRAINT IF EXISTS promo_codes_plan_type_check;
ALTER TABLE promo_codes ADD CONSTRAINT promo_codes_plan_type_check
  CHECK (plan_type IN ('3month','12month','lifetime','4year'));

-- ── Expected result ───────────────────────────────────────────
-- Both tables now accept plan_type = '4year' in addition to the
-- existing values. No existing rows are modified.
