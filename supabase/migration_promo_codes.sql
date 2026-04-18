-- ============================================================
-- RadStack — Promo Codes Migration
-- ============================================================
--
-- HOW TO APPLY:
--   Supabase Dashboard → SQL Editor → New Query → paste & run
--
-- SAFETY: Additive — does NOT touch existing tables.
--
-- SECURITY NOTE:
--   No RLS policies allow client access to this table.
--   All reads and writes happen server-side via the service_role
--   key in the API functions. Codes are never exposed to the browser.
-- ============================================================

-- ── Table: promo_codes ────────────────────────────────────────
-- Each row is one promo code that grants free access.
-- Codes are stored and compared in uppercase.

CREATE TABLE IF NOT EXISTS promo_codes (
  code        TEXT        PRIMARY KEY,  -- e.g. 'FRIEND2024', stored uppercase
  plan_type   TEXT        NOT NULL CHECK (plan_type IN ('3month','12month','lifetime')),
  max_uses    INT         NOT NULL DEFAULT 1,   -- how many people can redeem it
  uses        INT         NOT NULL DEFAULT 0,   -- how many have redeemed so far
  expires_at  TIMESTAMPTZ,                      -- null = never expires
  active      BOOLEAN     NOT NULL DEFAULT true,
  note        TEXT,                             -- your internal note (e.g. "for conference attendees")
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enforce: uses can never exceed max_uses
ALTER TABLE promo_codes ADD CONSTRAINT uses_le_max CHECK (uses <= max_uses);

-- Enable RLS — lock out all client access
ALTER TABLE promo_codes ENABLE ROW LEVEL SECURITY;

-- No policies = no client access at all (service_role bypasses RLS)

-- ── Index ─────────────────────────────────────────────────────
CREATE INDEX IF NOT EXISTS promo_codes_active_idx
  ON promo_codes (active, uses, max_uses);

-- ── Atomic claim function ─────────────────────────────────────
-- Called by api/redeem-code.js to atomically validate and
-- increment the use count in a single transaction.
-- Returns the promo row if claimed, empty set if invalid/used/expired.

CREATE OR REPLACE FUNCTION claim_promo_code(p_code TEXT)
RETURNS SETOF promo_codes
LANGUAGE plpgsql
SECURITY DEFINER  -- runs with owner privileges (service_role calls this)
AS $$
DECLARE
  v_row promo_codes;
BEGIN
  -- Lock the row, check all validity conditions
  SELECT * INTO v_row
  FROM promo_codes
  WHERE code = UPPER(p_code)
    AND active = true
    AND uses < max_uses
    AND (expires_at IS NULL OR expires_at > NOW())
  FOR UPDATE;

  IF NOT FOUND THEN
    RETURN;  -- return empty set → caller treats as invalid
  END IF;

  -- Atomically increment
  UPDATE promo_codes
  SET uses = uses + 1
  WHERE code = v_row.code;

  -- Return the row (with original uses count — caller doesn't need the updated count)
  RETURN NEXT v_row;
END;
$$;

-- ── Rollback function ────────────────────────────────────────
-- Called if the subscription write fails after a code was claimed,
-- to restore the use slot so the code can be retried.

CREATE OR REPLACE FUNCTION rollback_promo_claim(p_code TEXT)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  UPDATE promo_codes
  SET uses = GREATEST(0, uses - 1)
  WHERE code = UPPER(p_code);
END;
$$;

-- ── Expected result ───────────────────────────────────────────
-- Table Editor should now show 4 tables:
--   card_progress, user_meta, subscriptions, promo_codes
-- Plus one new DB function: claim_promo_code(text)
