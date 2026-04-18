-- ============================================================
-- RadStack — Anatomy Access Migration
-- ============================================================
--
-- HOW TO APPLY:
--   Supabase Dashboard → SQL Editor → New Query → paste & run
--
-- SAFETY: Additive — does NOT touch existing data.
--
-- Adds admin-granted anatomy access to the subscriptions table
-- and a helper function for the admin panel to list users.
-- ============================================================

-- ── Add has_anatomy_access column ────────────────────────────
ALTER TABLE subscriptions
  ADD COLUMN IF NOT EXISTS has_anatomy_access BOOLEAN NOT NULL DEFAULT false;

-- ── DB function: list users with anatomy access ───────────────
-- Called by api/admin-anatomy.js (service_role only).
-- Joins auth.users so the admin panel can show emails.

CREATE OR REPLACE FUNCTION get_anatomy_access_users()
RETURNS TABLE(user_id UUID, email TEXT)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT s.user_id, u.email::text
  FROM subscriptions s
  JOIN auth.users u ON u.id = s.user_id
  WHERE s.has_anatomy_access = true
  ORDER BY u.email
$$;
