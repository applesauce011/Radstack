import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useProgressStore, CARD_STATE } from '../store/progressStore'
import { SUBSPECIALTIES, getCardsBySubspecialty } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { TriProgressBar } from '../components/ui/ProgressBar'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'

// ============================================================
// Continue Studying logic
//
// Priority order:
//   1. Most recently studied deck that still has flagged cards
//      → "Review X flagged cards"
//   2. Most recently studied deck that still has unseen cards
//      → "Continue — X unseen cards left"
//   3. A deck not yet started (first untouched deck)
//      → "Start this deck"
//   4. Everything complete → hide banner
// ============================================================
function getSuggestion(subspecialties, getStatsForCards, getLastStudiedTimestamp) {
  const scored = subspecialties.map(sub => {
    const cards = getCardsBySubspecialty(sub.id)
    const stats = getStatsForCards(cards)
    const lastStudied = getLastStudiedTimestamp(sub.id)
    return { sub, stats, lastStudied, cards }
  })

  // 1. Recently studied with flagged cards
  const withFlagged = scored
    .filter(x => x.stats.flagged > 0 && x.lastStudied > 0)
    .sort((a, b) => b.lastStudied - a.lastStudied)
  if (withFlagged.length > 0) {
    const { sub, stats } = withFlagged[0]
    return { sub, stats, reason: `${stats.flagged} flagged card${stats.flagged !== 1 ? 's' : ''} to review`, mode: 'flagged' }
  }

  // 2. Recently studied with unseen cards
  const withUnseen = scored
    .filter(x => x.stats.unseen > 0 && x.lastStudied > 0)
    .sort((a, b) => b.lastStudied - a.lastStudied)
  if (withUnseen.length > 0) {
    const { sub, stats } = withUnseen[0]
    return { sub, stats, reason: `${stats.unseen} unseen card${stats.unseen !== 1 ? 's' : ''} remaining`, mode: 'unseen' }
  }

  // 3. Not yet started
  const notStarted = scored.filter(x => x.lastStudied === 0 && x.stats.unseen > 0)
  if (notStarted.length > 0) {
    const { sub, stats } = notStarted[0]
    return { sub, stats, reason: `Not started yet — ${stats.total} cards`, mode: 'all' }
  }

  return null
}

function ResetDeckModal({ isOpen, onClose, sub, onConfirm }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reset Deck Progress">
      <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
        This will reset all cards in <strong style={{ color: 'var(--text-primary)' }}>{sub?.label}</strong> back to <strong style={{ color: 'var(--text-primary)' }}>Unseen</strong>. Got It and Flagged states will be cleared.
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
        This cannot be undone.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="secondary" onClick={onClose} fullWidth>Cancel</Button>
        <Button variant="danger" onClick={onConfirm} fullWidth>Reset Deck</Button>
      </div>
    </Modal>
  )
}

function SubspecialtyCard({ sub }) {
  const navigate = useNavigate()
  const { getStatsForCards, resetDeck } = useProgressStore()
  const cards = getCardsBySubspecialty(sub.id)
  const stats = getStatsForCards(cards)
  const pctDone = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0
  const [resetModalOpen, setResetModalOpen] = useState(false)
  const hasProgress = stats.gotIt > 0 || stats.flagged > 0

  return (
    <>
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', padding: '20px',
        display: 'flex', flexDirection: 'column', gap: '12px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <button
            onClick={() => navigate(`/decks/${sub.id}`)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
              display: 'flex', alignItems: 'center', gap: '10px', flex: 1, padding: 0,
            }}
          >
            <span style={{ fontSize: '22px' }}>{sub.icon}</span>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '15px',
                fontWeight: '700', color: 'var(--text-primary)',
              }}>{sub.label}</div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                {sub.subsections.length} section{sub.subsections.length !== 1 ? 's' : ''} · {stats.total} cards
              </div>
            </div>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <span style={{
              fontSize: '13px', fontWeight: '700', color: sub.color,
              background: sub.colorDim, padding: '3px 10px', borderRadius: '999px',
            }}>
              {pctDone}%
            </span>
            {hasProgress && (
              <button
                onClick={() => setResetModalOpen(true)}
                title="Reset deck progress"
                style={{
                  background: 'none', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)', padding: '4px 8px',
                  cursor: 'pointer', color: 'var(--text-muted)', fontSize: '12px',
                  fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-rose)'
                  e.currentTarget.style.color = 'var(--accent-rose)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                ↺ Reset
              </button>
            )}
          </div>
        </div>

        <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={stats.total} />

        <div style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
          <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt} got it</span>
          <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged} flagged</span>
          <span style={{ color: 'var(--text-muted)' }}>● {stats.unseen} unseen</span>
        </div>
      </div>

      <ResetDeckModal
        isOpen={resetModalOpen}
        onClose={() => setResetModalOpen(false)}
        sub={sub}
        onConfirm={() => { resetDeck(cards.map(c => c.id)); setResetModalOpen(false) }}
      />
    </>
  )
}

function OverallStats() {
  const { getStatsForCards } = useProgressStore()
  const allCards = SUBSPECIALTIES.flatMap(s => getCardsBySubspecialty(s.id))
  const stats = getStatsForCards(allCards)
  const pct = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '12px', marginBottom: '32px',
    }}>
      {[
        { label: 'Total Cards', value: stats.total, color: 'var(--text-primary)', sub: 'across all decks' },
        { label: 'Got It', value: stats.gotIt, color: 'var(--accent-emerald)', sub: `${pct}% complete` },
        { label: 'Flagged', value: stats.flagged, color: 'var(--accent-amber)', sub: 'needs review' },
        { label: 'Unseen', value: stats.unseen, color: 'var(--text-muted)', sub: 'not yet studied' },
      ].map(s => (
        <div key={s.label} style={{
          padding: '16px 20px', background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
        }}>
          <div style={{ fontSize: '28px', fontWeight: '800', color: s.color, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
            {s.value}
          </div>
          <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', marginTop: '4px' }}>
            {s.label}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {s.sub}
          </div>
        </div>
      ))}
    </div>
  )
}

function ContinueStudyBanner() {
  const navigate = useNavigate()
  const { getStatsForCards, getLastStudiedTimestamp } = useProgressStore()
  const suggestion = getSuggestion(SUBSPECIALTIES, getStatsForCards, getLastStudiedTimestamp)
  if (!suggestion) return null

  const { sub, stats, reason } = suggestion
  const modeLabel = { flagged: 'Review Flagged →', unseen: 'Continue →', all: 'Start Studying →' }[suggestion.mode] || 'Continue →'

  return (
    <div style={{
      padding: '20px 24px',
      background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(59,130,246,0.06))',
      border: '1px solid var(--accent-cyan-dim)',
      borderRadius: 'var(--radius-lg)', marginBottom: '28px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '12px',
    }}>
      <div>
        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '4px' }}>
          Continue Studying
        </div>
        <div style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
          {sub.icon} {sub.label}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
          {reason}
        </div>
      </div>
      <button
        onClick={() => navigate(`/decks/${sub.id}`)}
        style={{
          padding: '10px 20px', borderRadius: 'var(--radius-md)',
          background: 'var(--accent-cyan)', border: 'none',
          color: 'var(--bg-primary)', fontSize: '14px', fontWeight: '700',
          cursor: 'pointer', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap',
        }}
      >
        {modeLabel}
      </button>
    </div>
  )
}

export function DashboardPage() {
  const { user } = useAuthStore()
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '40px 24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: '800', color: 'var(--text-primary)', marginBottom: '6px',
            letterSpacing: '-0.02em',
          }}>
            {greeting}, {firstName} 👋
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Here's your study overview.</p>
        </div>

        <ContinueStudyBanner />

        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Overall Progress
        </div>
        <OverallStats />

        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Subspecialty Decks
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {SUBSPECIALTIES.map(sub => (
            <SubspecialtyCard key={sub.id} sub={sub} />
          ))}
        </div>
      </div>
    </div>
  )
}
