-- ============================================================
-- RadStack — Differential Sprint Migration
-- ============================================================
--
-- HOW TO APPLY:
--   Supabase Dashboard → SQL Editor → New Query → paste & run
--
-- SAFETY: This is ADDITIVE — it does NOT touch card_progress,
--   user_meta, subscriptions, or any other existing table.
--   All existing user data is preserved. Safe to run on production.
--
-- NOTE: The update_updated_at() function is assumed to already
--   exist from the initial schema.sql setup.
-- ============================================================

-- ── Table: differential_sprint_progress ──────────────────────
-- One row per Differential Sprint question the user has rated.
-- No row = unseen. Mirrors the card_progress design: small table,
-- composite PRIMARY KEY (user_id, question_id) is the UPSERT target,
-- only the LATEST self-rating is stored (not attempt history).
--
-- Deliberately a separate table from card_progress — Differential
-- Sprint questions and flashcards live in different id spaces and
-- have different status vocabularies (got_it/partial/missed vs.
-- got_it/flagged), so overloading card_progress would require
-- loosening its CHECK constraint for an unrelated feature.

CREATE TABLE IF NOT EXISTS differential_sprint_progress (
  user_id     UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  question_id TEXT        NOT NULL,
  status      TEXT        NOT NULL CHECK (status IN ('got_it', 'partial', 'missed')),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, question_id)
);

CREATE INDEX IF NOT EXISTS differential_sprint_progress_user_idx
  ON differential_sprint_progress (user_id);

CREATE TRIGGER differential_sprint_progress_updated_at
  BEFORE UPDATE ON differential_sprint_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE differential_sprint_progress ENABLE ROW LEVEL SECURITY;

-- Four separate policies are required for UPSERT to work with RLS.
CREATE POLICY "differential_sprint_progress_select" ON differential_sprint_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "differential_sprint_progress_insert" ON differential_sprint_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "differential_sprint_progress_update" ON differential_sprint_progress
  FOR UPDATE
  USING     (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "differential_sprint_progress_delete" ON differential_sprint_progress
  FOR DELETE USING (auth.uid() = user_id);

-- ── Expected result ───────────────────────────────────────────
-- Table Editor should now additionally show:
--   differential_sprint_progress  (new, RLS enabled, 4 policies)
