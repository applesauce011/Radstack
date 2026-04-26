import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useProgressStore } from '../store/progressStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { SUBSPECIALTIES, getAccessibleCardsBySubspecialty, getAllAccessibleCards, getPremiumCardCount } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { TriProgressBar } from '../components/ui/ProgressBar'

function StreakStrip({ hasAccess, hasAnatomyAccess }) {
  const navigate = useNavigate()
  const { getStreak, getStatsForCards, getLastStudiedTimestamp } = useProgressStore()
  const streak = getStreak()
  const allCards = getAllAccessibleCards(hasAccess, hasAnatomyAccess)
  const stats = getStatsForCards(allCards)

  // Last studied: max timestamp across all subspecialties
  const lastStudiedTs = Math.max(
    0, ...SUBSPECIALTIES.map(s => getLastStudiedTimestamp(s.id))
  )
  const lastStudiedLabel = !lastStudiedTs ? 'Never'
    : Date.now() - lastStudiedTs < 86400000 ? 'Today'
    : Date.now() - lastStudiedTs < 172800000 ? 'Yesterday'
    : `${Math.floor((Date.now() - lastStudiedTs) / 86400000)} days ago`

  return (
    <div style={{
      display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px', alignItems: 'stretch',
    }}>
      {[
        { label: 'Study Streak', value: streak > 0 ? `${streak} day${streak !== 1 ? 's' : ''}` : '—', color: streak > 0 ? 'var(--accent-amber)' : 'var(--text-muted)', icon: '🔥' },
        { label: 'Last Studied', value: lastStudiedLabel, color: 'var(--text-secondary)', icon: '📅' },
        { label: 'Flagged', value: stats.flagged, color: stats.flagged > 0 ? 'var(--accent-amber)' : 'var(--text-muted)', icon: '🚩' },
      ].map(item => (
        <div key={item.label} style={{
          flex: 1, minWidth: '120px', padding: '14px 18px',
          background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <span style={{ fontSize: '18px' }}>{item.icon}</span>
          <div>
            <div style={{ fontSize: '16px', fontWeight: '700', color: item.color, fontFamily: 'var(--font-display)' }}>
              {item.value}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{item.label}</div>
          </div>
        </div>
      ))}
      <button
        onClick={() => navigate('/stats')}
        style={{
          flex: 1, minWidth: '120px', padding: '14px 18px',
          background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px',
          transition: 'border-color var(--transition)', fontFamily: 'inherit',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-cyan)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
      >
        <span style={{ fontSize: '18px' }}>📈</span>
        <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)' }}>
            Full Stats →
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>streak · mastery · activity</div>
        </div>
      </button>
    </div>
  )
}

function WeakSpotsSection({ hasAccess, hasAnatomyAccess }) {
  const navigate = useNavigate()
  const { getStatsForCards } = useProgressStore()

  const weak = SUBSPECIALTIES
    .map(sub => {
      const cards = getAccessibleCardsBySubspecialty(sub.id, hasAccess, hasAnatomyAccess)
      const stats = getStatsForCards(cards)
      return { sub, stats }
    })
    .filter(x => x.stats.flagged > 0)
    .sort((a, b) => b.stats.flagged - a.stats.flagged)
    .slice(0, 3)

  if (weak.length === 0) return null

  return (
    <div style={{ marginTop: '32px' }}>
      <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
        Needs Attention
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {weak.map(({ sub, stats }) => (
          <div
            key={sub.id}
            onClick={() => navigate(`/decks/${sub.id}`)}
            style={{
              padding: '12px 16px', background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
              display: 'flex', alignItems: 'center', gap: '12px',
              cursor: 'pointer', transition: 'border-color var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-amber)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
          >
            <span style={{ fontSize: '18px' }}>{sub.icon}</span>
            <span style={{ flex: 1, fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{sub.label}</span>
            <span style={{
              fontSize: '12px', fontWeight: '700', color: 'var(--accent-amber)',
              background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)',
              borderRadius: '999px', padding: '2px 10px', whiteSpace: 'nowrap',
            }}>
              ⚑ {stats.flagged} flagged
            </span>
            <span style={{ fontSize: '13px', color: 'var(--accent-cyan)', fontWeight: '600' }}>Review →</span>
          </div>
        ))}
      </div>
    </div>
  )
}

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
function getSuggestion(subspecialties, getStatsForCards, getLastStudiedTimestamp, hasAccess, hasAnatomyAccess) {
  const scored = subspecialties.map(sub => {
    const cards = getAccessibleCardsBySubspecialty(sub.id, hasAccess, hasAnatomyAccess)
    const stats = getStatsForCards(cards)
    const lastStudied = getLastStudiedTimestamp(sub.id)
    return { sub, stats, lastStudied, cards }
  }).filter(x => x.cards.length > 0)  // skip subspecialties with no accessible cards

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


function SubspecialtyCard({ sub, hasAccess, hasAnatomyAccess }) {
  const navigate = useNavigate()
  const { getStatsForCards } = useProgressStore()
  const cards = getAccessibleCardsBySubspecialty(sub.id, hasAccess, hasAnatomyAccess)
  const stats = getStatsForCards(cards)
  const pctDone = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0

  return (
    <div
      onClick={() => navigate(`/decks/${sub.id}`)}
      style={{
        background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)', padding: '20px',
        display: 'flex', flexDirection: 'column', gap: '12px',
        cursor: 'pointer', transition: 'border-color var(--transition)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-default)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
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
        </div>
        <span style={{
          fontSize: '13px', fontWeight: '700', color: sub.color,
          background: sub.colorDim, padding: '3px 10px', borderRadius: '999px', flexShrink: 0,
        }}>
          {pctDone}%
        </span>
      </div>

      <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={stats.total} />

      <div style={{ display: 'flex', gap: '12px', fontSize: '12px' }}>
        <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt} got it</span>
        <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged} flagged</span>
        <span style={{ color: 'var(--text-muted)' }}>● {stats.unseen} unseen</span>
      </div>
    </div>
  )
}

function OverallStats({ hasAccess, hasAnatomyAccess }) {
  const { getStatsForCards } = useProgressStore()
  const allCards = getAllAccessibleCards(hasAccess, hasAnatomyAccess)
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

function ContinueStudyBanner({ hasAccess, hasAnatomyAccess }) {
  const navigate = useNavigate()
  const { getStatsForCards, getLastStudiedTimestamp } = useProgressStore()
  const suggestion = getSuggestion(SUBSPECIALTIES, getStatsForCards, getLastStudiedTimestamp, hasAccess, hasAnatomyAccess)
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

function ExpiredBanner({ subscription }) {
  const navigate = useNavigate()
  const { getStatsForCards } = useProgressStore()
  // Show full history stats so the renewal CTA feels meaningful
  const allCards = getAllAccessibleCards(true, false)
  const stats = getStatsForCards(allCards)

  const expiredOn = subscription?.current_period_end
    ? new Date(subscription.current_period_end).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : null

  return (
    <div style={{
      padding: '16px 20px',
      background: 'rgba(239,68,68,0.06)',
      border: '1px solid rgba(239,68,68,0.25)',
      borderRadius: 'var(--radius-lg)',
      marginBottom: '28px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '12px',
    }}>
      <div>
        <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--accent-rose)', marginBottom: '4px' }}>
          Your premium access has expired{expiredOn ? ` · ${expiredOn}` : ''}
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          {stats.flagged > 0
            ? `You have ${stats.flagged} flagged card${stats.flagged !== 1 ? 's' : ''} and ${stats.gotIt} completed. Renew to pick up where you left off.`
            : `You completed ${stats.gotIt} card${stats.gotIt !== 1 ? 's' : ''}. Renew to continue studying all ${getPremiumCardCount()}+.`
          }
        </div>
      </div>
      <button
        onClick={() => navigate('/pricing')}
        style={{
          padding: '10px 20px', borderRadius: 'var(--radius-md)',
          background: 'var(--accent-rose)', border: 'none',
          color: '#fff', fontSize: '14px', fontWeight: '700',
          cursor: 'pointer', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap',
        }}
      >
        Renew Access →
      </button>
    </div>
  )
}

export function DashboardPage() {
  const { user } = useAuthStore()
  const { hasAccess, hasAnatomyAccess, subscription, isLoaded } = useSubscriptionStore()

  const isExpired = !hasAccess && !!subscription

  // Wait for subscription state before deciding to redirect
  if (!isLoaded) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Loading…</div>
        </div>
      </div>
    )
  }

  // New user: never subscribed — redirect to pricing
  if (!hasAccess && !subscription) {
    return <Navigate to="/pricing" replace />
  }

  // Expired users see their full history on the dashboard — pass displayAccess=true
  // so the stats and deck cards reflect all the work they've done, not just free cards.
  const displayAccess = hasAccess || isExpired

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const firstName = user?.name?.split(' ')[0] || 'there'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '40px 24px' }}>
        {isExpired && <ExpiredBanner subscription={subscription} />}

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

        <StreakStrip hasAccess={displayAccess} hasAnatomyAccess={hasAnatomyAccess} />

        <ContinueStudyBanner hasAccess={displayAccess} hasAnatomyAccess={hasAnatomyAccess} />

        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Overall Progress
        </div>
        <OverallStats hasAccess={displayAccess} hasAnatomyAccess={hasAnatomyAccess} />

        <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
          Subspecialty Decks
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
          {SUBSPECIALTIES.map(sub => (
            <SubspecialtyCard key={sub.id} sub={sub} hasAccess={displayAccess} hasAnatomyAccess={hasAnatomyAccess} />
          ))}
        </div>

        <WeakSpotsSection hasAccess={displayAccess} hasAnatomyAccess={hasAnatomyAccess} />
      </div>
    </div>
  )
}
