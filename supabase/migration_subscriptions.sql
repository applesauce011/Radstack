-- ============================================================
-- RadStack — Subscriptions Migration
-- ============================================================
--
-- HOW TO APPLY:
--   Supabase Dashboard → SQL Editor → New Query → paste & run
--
-- SAFETY: This is ADDITIVE — it does NOT touch the existing
--   card_progress or user_meta tables. All existing user data
--   is preserved. Safe to run on production.
--
-- NOTE: The update_updated_at() function is assumed to already
--   exist from the initial schema.sql setup.
-- ============================================================

-- ── Table: subscriptions ─────────────────────────────────────
-- One row per user. Written exclusively by the Stripe webhook
-- handler (api/stripe-webhook.js) using the service_role key.
-- Never written by client-side code.

CREATE TABLE IF NOT EXISTS subscriptions (
  user_id               UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id    TEXT        UNIQUE,
  stripe_subscription_id TEXT       UNIQUE,
  status                TEXT        NOT NULL DEFAULT 'none'
                                    CHECK (status IN ('none','active','past_due','canceled','lifetime')),
  plan_type             TEXT        CHECK (plan_type IN (NULL,'3month','12month','lifetime')),
  current_period_end    TIMESTAMPTZ,
  cancel_at_period_end  BOOLEAN     NOT NULL DEFAULT false,
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Auto-update updated_at on every change
CREATE TRIGGER subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Enable Row Level Security
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can only read their own row.
-- All writes come from the service_role key (webhook handler) —
-- no client-facing INSERT/UPDATE/DELETE policies are needed.
CREATE POLICY "subscriptions_select" ON subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Indexes for fast webhook lookups by Stripe IDs
CREATE INDEX IF NOT EXISTS subscriptions_stripe_customer_idx
  ON subscriptions (stripe_customer_id);

CREATE INDEX IF NOT EXISTS subscriptions_stripe_sub_idx
  ON subscriptions (stripe_subscription_id);

-- ── Expected result ───────────────────────────────────────────
-- Table Editor should now show 3 tables:
--   card_progress  (unchanged, RLS enabled)
--   user_meta      (unchanged, RLS enabled)
--   subscriptions  (new, RLS enabled, 1 select policy)
