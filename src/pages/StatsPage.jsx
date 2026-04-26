import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProgressStore } from '../store/progressStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { SUBSPECIALTIES, getAccessibleCardsBySubspecialty, getAllAccessibleCards } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { TriProgressBar } from '../components/ui/ProgressBar'
import { usePageMeta } from '../hooks/usePageMeta'

// Returns the last N calendar days as YYYY-MM-DD strings, oldest first
function getLastNDays(n) {
  const days = []
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    days.push(d.toISOString().slice(0, 10))
  }
  return days
}

function formatRelativeDate(ts) {
  if (!ts) return 'Never'
  const diff = Date.now() - ts
  const days = Math.floor(diff / 86400000)
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  return `${days} days ago`
}

function HeroTile({ emoji, label, value, sub, color }) {
  return (
    <div style={{
      padding: '20px 24px', background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
      flex: 1, minWidth: '140px',
    }}>
      <div style={{ fontSize: '24px', marginBottom: '8px' }}>{emoji}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '32px',
        fontWeight: '800', color: color || 'var(--text-primary)',
        letterSpacing: '-0.02em', lineHeight: 1,
      }}>{value}</div>
      <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', marginTop: '6px' }}>{label}</div>
      {sub && <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{sub}</div>}
    </div>
  )
}

export function StatsPage() {
  const navigate = useNavigate()
  const { getStatsForCards, getStreak, getStudyDates, getLastStudiedTimestamp } = useProgressStore()
  const { hasAccess, hasAnatomyAccess } = useSubscriptionStore()

  usePageMeta({
    title: 'My Stats — RadiologyStack',
    description: 'Your personal study stats and progress across all radiology subspecialties.',
  })

  const allCards = getAllAccessibleCards(hasAccess, hasAnatomyAccess)
  const overall = getStatsForCards(allCards)
  const overallPct = overall.total ? Math.round((overall.gotIt / overall.total) * 100) : 0

  const streak = getStreak()
  const studyDates = new Set(getStudyDates())
  const last14 = getLastNDays(14)

  // Per-subspecialty stats, sorted by % mastered descending
  const subStats = SUBSPECIALTIES.map(sub => {
    const cards = getAccessibleCardsBySubspecialty(sub.id, hasAccess, hasAnatomyAccess)
    const stats = getStatsForCards(cards)
    const pct = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0
    const lastStudied = getLastStudiedTimestamp(sub.id)
    return { sub, stats, pct, lastStudied }
  }).sort((a, b) => b.pct - a.pct)

  // Weak spots: subspecialties with most flagged cards, exclude zero
  const weakSpots = [...subStats]
    .filter(x => x.stats.flagged > 0)
    .sort((a, b) => b.stats.flagged - a.stats.flagged)
    .slice(0, 5)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 32px)',
            fontWeight: '800', color: 'var(--text-primary)', marginBottom: '6px',
            letterSpacing: '-0.02em',
          }}>
            My Stats
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Your personal study progress across all radiology subspecialties.
          </p>
        </div>

        {/* Hero tiles */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <HeroTile
            emoji="🔥"
            label="Day Streak"
            value={streak}
            sub={streak === 0 ? 'Study today to start one!' : streak === 1 ? 'Keep it going' : 'Consistent!'}
            color={streak > 0 ? 'var(--accent-amber)' : 'var(--text-muted)'}
          />
          <HeroTile
            emoji="✓"
            label="Cards Mastered"
            value={overall.gotIt}
            sub={`${overallPct}% of accessible cards`}
            color="var(--accent-emerald)"
          />
          <HeroTile
            emoji="🚩"
            label="Flagged"
            value={overall.flagged}
            sub="needs review"
            color={overall.flagged > 0 ? 'var(--accent-amber)' : 'var(--text-muted)'}
          />
          <HeroTile
            emoji="📊"
            label="Overall"
            value={`${overallPct}%`}
            sub={`${overall.unseen} cards unseen`}
            color="var(--accent-cyan)"
          />
        </div>

        {/* 14-day activity grid */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: '32px',
        }}>
          <div style={{
            fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '14px',
          }}>
            Last 14 Days
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {last14.map(day => {
              const studied = studyDates.has(day)
              const label = new Date(day + 'T12:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
              return (
                <div
                  key={day}
                  title={`${label}${studied ? ' — studied' : ''}`}
                  style={{
                    width: '36px', height: '36px', borderRadius: 'var(--radius-sm)',
                    background: studied
                      ? 'var(--accent-cyan)'
                      : 'var(--bg-elevated)',
                    border: `1px solid ${studied ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', color: studied ? 'var(--bg-primary)' : 'var(--text-muted)',
                    fontWeight: '600', cursor: 'default',
                    transition: 'all var(--transition)',
                  }}
                >
                  {new Date(day + 'T12:00:00').getDate()}
                </div>
              )
            })}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '10px' }}>
            Cyan = studied · Grey = no activity
          </div>
        </div>

        {/* Weak spots */}
        {weakSpots.length > 0 && (
          <div style={{ marginBottom: '32px' }}>
            <div style={{
              fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
              textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
            }}>
              Flagged for Review
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {weakSpots.map(({ sub, stats }) => (
                <div
                  key={sub.id}
                  onClick={() => navigate(`/decks/${sub.id}`)}
                  style={{
                    padding: '14px 18px', background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    cursor: 'pointer', transition: 'border-color var(--transition)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent-amber)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
                >
                  <span style={{ fontSize: '20px' }}>{sub.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {sub.label}
                    </div>
                  </div>
                  <div style={{
                    fontSize: '13px', fontWeight: '700',
                    color: 'var(--accent-amber)',
                    background: 'rgba(251,191,36,0.1)',
                    border: '1px solid rgba(251,191,36,0.25)',
                    borderRadius: '999px', padding: '3px 12px',
                    whiteSpace: 'nowrap',
                  }}>
                    ⚑ {stats.flagged} flagged
                  </div>
                  <span style={{ fontSize: '13px', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                    Review →
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subspecialty mastery grid */}
        <div style={{
          fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
        }}>
          Subspecialty Mastery
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '12px', marginBottom: '40px',
        }}>
          {subStats.map(({ sub, stats, pct, lastStudied }) => (
            <div
              key={sub.id}
              onClick={() => navigate(`/decks/${sub.id}`)}
              style={{
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)', padding: '18px 20px',
                cursor: 'pointer', transition: 'border-color var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = sub.color + '60'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '20px' }}>{sub.icon}</span>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{sub.label}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '1px' }}>
                      Last: {formatRelativeDate(lastStudied)}
                    </div>
                  </div>
                </div>
                <span style={{
                  fontSize: '13px', fontWeight: '700', color: sub.color,
                  background: sub.colorDim, padding: '2px 10px', borderRadius: '999px',
                }}>
                  {pct}%
                </span>
              </div>
              <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={stats.total} />
              <div style={{ display: 'flex', gap: '10px', fontSize: '11px', marginTop: '6px' }}>
                <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
                <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged}</span>
                <span style={{ color: 'var(--text-muted)' }}>● {stats.unseen}</span>
                <span style={{ color: 'var(--text-muted)', marginLeft: 'auto' }}>{stats.total} cards</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => navigate('/decks')}
            style={{
              padding: '12px 28px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-cyan)', border: 'none',
              color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
            }}
          >
            Keep Studying →
          </button>
        </div>
      </div>
    </div>
  )
}
