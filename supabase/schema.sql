-- ============================================================
-- RadStack — Supabase Schema
--
-- Run this in: Supabase Dashboard → SQL Editor → New Query
--
-- WARNING: This drops and recreates both tables.
-- All existing card progress and user metadata will be erased.
-- Only run this if you need to reset the database from scratch.
-- ============================================================


-- ── Tear down ─────────────────────────────────────────────────
DROP TABLE IF EXISTS card_progress CASCADE;
DROP TABLE IF EXISTS user_meta     CASCADE;
DROP FUNCTION IF EXISTS update_updated_at CASCADE;


-- ── Shared trigger function ───────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;


-- ── Table 1: card_progress ────────────────────────────────────
-- One row per card that a user has marked (got_it or flagged).
-- No row = unseen. Keeps the table small.
-- Composite PRIMARY KEY (user_id, card_id) is the UPSERT target.

CREATE TABLE card_progress (
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id    TEXT        NOT NULL,
  state      TEXT        NOT NULL CHECK (state IN ('got_it', 'flagged')),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, card_id)
);

CREATE INDEX card_progress_user_idx ON card_progress (user_id);

CREATE TRIGGER card_progress_updated_at
  BEFORE UPDATE ON card_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE card_progress ENABLE ROW LEVEL SECURITY;

-- Separate policies for each operation (required for UPSERT with RLS)
CREATE POLICY "card_progress_select" ON card_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "card_progress_insert" ON card_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "card_progress_update" ON card_progress
  FOR UPDATE
  USING     (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "card_progress_delete" ON card_progress
  FOR DELETE USING (auth.uid() = user_id);


-- ── Table 2: user_meta ────────────────────────────────────────
-- One row per user. Stores last-studied timestamps as JSONB.
-- Example: { "neuro": 1712345678000, "chest": 1712300000000 }

CREATE TABLE user_meta (
  user_id      UUID        PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  last_studied JSONB       NOT NULL DEFAULT '{}'::jsonb,
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER user_meta_updated_at
  BEFORE UPDATE ON user_meta
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE user_meta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "user_meta_select" ON user_meta
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "user_meta_insert" ON user_meta
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_meta_update" ON user_meta
  FOR UPDATE
  USING     (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_meta_delete" ON user_meta
  FOR DELETE USING (auth.uid() = user_id);


-- ── Done ──────────────────────────────────────────────────────
-- Expected result in Table Editor:
--   card_progress  (RLS enabled, 4 policies)
--   user_meta      (RLS enabled, 4 policies)
