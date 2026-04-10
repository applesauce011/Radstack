-- ============================================================
-- RadStack — Supabase Schema
-- Run this once in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================


-- ── Table 1: card_progress ───────────────────────────────────
-- One row per card that has been marked (got_it or flagged).
-- Absent row = unseen. This keeps the table small.

CREATE TABLE IF NOT EXISTS card_progress (
  user_id   UUID    NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  card_id   TEXT    NOT NULL,
  state     TEXT    NOT NULL CHECK (state IN ('got_it', 'flagged')),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, card_id)
);

-- Index for fast per-user queries
CREATE INDEX IF NOT EXISTS card_progress_user_idx ON card_progress(user_id);

-- Auto-update the updated_at timestamp on changes
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS card_progress_updated_at ON card_progress;
CREATE TRIGGER card_progress_updated_at
  BEFORE UPDATE ON card_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ── Table 2: user_meta ───────────────────────────────────────
-- One row per user. Stores last_studied timestamps as JSON.
-- e.g. { "neuro": 1712345678000, "chest": 1712300000000 }

CREATE TABLE IF NOT EXISTS user_meta (
  user_id       UUID  PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  last_studied  JSONB NOT NULL DEFAULT '{}'::jsonb,
  updated_at    TIMESTAMPTZ DEFAULT NOW()
);

DROP TRIGGER IF EXISTS user_meta_updated_at ON user_meta;
CREATE TRIGGER user_meta_updated_at
  BEFORE UPDATE ON user_meta
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();


-- ── Row Level Security ───────────────────────────────────────
-- Users can only read and write their own rows. 

ALTER TABLE card_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_meta     ENABLE ROW LEVEL SECURITY;

-- card_progress policies
DROP POLICY IF EXISTS "Users can view their own card progress"  ON card_progress;
DROP POLICY IF EXISTS "Users can insert their own card progress" ON card_progress;
DROP POLICY IF EXISTS "Users can update their own card progress" ON card_progress;
DROP POLICY IF EXISTS "Users can delete their own card progress" ON card_progress;

CREATE POLICY "Users can view their own card progress"
  ON card_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own card progress"
  ON card_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own card progress"
  ON card_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own card progress"
  ON card_progress FOR DELETE
  USING (auth.uid() = user_id);

-- user_meta policies
DROP POLICY IF EXISTS "Users can view their own meta"   ON user_meta;
DROP POLICY IF EXISTS "Users can insert their own meta" ON user_meta;
DROP POLICY IF EXISTS "Users can update their own meta" ON user_meta;

CREATE POLICY "Users can view their own meta"
  ON user_meta FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own meta"
  ON user_meta FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own meta"
  ON user_meta FOR UPDATE
  USING (auth.uid() = user_id);


-- ── Done ─────────────────────────────────────────────────────
-- You should see:
--   card_progress  (table)
--   user_meta      (table)
-- in the Supabase Table Editor after running this.
