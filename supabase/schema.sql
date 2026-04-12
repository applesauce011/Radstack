-- ============================================================
-- RadStack — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
--
-- Safe to re-run: drops and recreates everything cleanly.
-- WARNING: drops existing card_progress and user_meta data.
-- ============================================================


-- ── Tear down ────────────────────────────────────────────────
DROP TABLE IF EXISTS card_progress CASCADE;
DROP TABLE IF EXISTS user_meta     CASCADE;
DROP FUNCTION IF EXISTS update_updated_at CASCADE;


-- ── Shared trigger function ──────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;


-- ── Table 1: card_progress ───────────────────────────────────
-- One row per card that has been marked (got_it or flagged).
-- Absent row = unseen. Keeps the table small.

CREATE TABLE card_progress (
  user_id    UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id    TEXT        NOT NULL,
  state      TEXT        NOT NULL CHECK (state IN ('got_it', 'flagged')),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, card_id)
);

CREATE INDEX card_progress_user_idx ON card_progress(user_id);

CREATE TRIGGER card_progress_updated_at
  BEFORE UPDATE ON card_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE card_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own progress"
  ON card_progress FOR ALL
  USING     (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- ── Table 2: user_meta ───────────────────────────────────────
-- One row per user. Stores last_studied timestamps as JSON.
-- e.g. { "neuro": 1712345678000, "chest": 1712300000000 }

CREATE TABLE user_meta (
  user_id      UUID  PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  last_studied JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER user_meta_updated_at
  BEFORE UPDATE ON user_meta
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE user_meta ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users manage own meta"
  ON user_meta FOR ALL
  USING     (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);


-- ── Done ─────────────────────────────────────────────────────
-- Expected result in Table Editor:
--   card_progress  (table, RLS on)
--   user_meta      (table, RLS on)
