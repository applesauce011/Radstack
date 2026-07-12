import React, { useEffect } from 'react'
import { useProgressStore, CARD_STATE } from '../store/progressStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { useAuthStore } from '../store/authStore'
import { useDifferentialSprintProgressStore } from '../store/differentialSprintProgressStore'
import { DS_STATUS } from '../data/differentialSprint/types'
import { DIFFERENTIAL_SPRINT_QUESTION_BANK } from '../data/differentialSprint/questionBank'
import { DIFFERENTIAL_SPRINT_SUBSPECIALTIES } from '../data/differentialSprint/subspecialties'
import { SUBSPECIALTIES, getAccessibleCardsBySubspecialty, getAllAccessibleCards } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { DonutChart } from '../components/stats/DonutChart'
import { BarChart } from '../components/stats/BarChart'
import { TrendLineChart } from '../components/stats/TrendLineChart'
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

// Cumulative count of timestamps at N weekly checkpoints, oldest first.
// Used to approximate "mastery over time" from card_progress.updated_at —
// this is the last time a card's status changed, not literally the first
// time it was marked got_it, but for a monotonic-ish trend it's a fair proxy.
function buildWeeklyTrend(timestamps, weeksBack = 8) {
  const now = new Date()
  const points = []
  for (let w = weeksBack - 1; w >= 0; w--) {
    const weekEnd = new Date(now)
    weekEnd.setDate(weekEnd.getDate() - w * 7)
    weekEnd.setHours(23, 59, 59, 999)
    const count = timestamps.filter(t => t <= weekEnd.getTime()).length
    const label = weekEnd.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    points.push({ label, value: count })
  }
  return points
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

function ChartCard({ title, children }) {
  return (
    <div style={{
      flex: 1, minWidth: '280px', background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
    }}>
      <div style={{
        fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
        textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px',
      }}>
        {title}
      </div>
      {children}
    </div>
  )
}

// Non-clickable subspecialty row — same shape reused for both flashcards
// and Differential Sprint so the two sections read consistently.
function SubspecialtyRow({ icon, label, right }) {
  return (
    <div style={{
      padding: '10px 16px', background: 'var(--bg-card)',
      border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
      display: 'flex', alignItems: 'center', gap: '10px',
    }}>
      <span style={{ fontSize: '16px', flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1, fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>{label}</span>
      {right}
    </div>
  )
}

export function StatsPage() {
  const { getStatsForCards, getStreak, getStudyDates, getTodayActivity, progress, updatedAt } = useProgressStore()
  const { hasAccess, hasAnatomyAccess } = useSubscriptionStore()
  const { user } = useAuthStore()
  const {
    loadForUser: loadDsProgress,
    getStatsForQuestions: getDsStatsForQuestions,
    progress: dsProgress,
    updatedAt: dsUpdatedAt,
  } = useDifferentialSprintProgressStore()

  usePageMeta({
    title: 'My Stats — RadiologyStack',
    description: 'Your personal study stats and progress across all radiology subspecialties.',
  })

  // Loaded lazily here (not from the shared auth listener) — same isolation
  // approach used by the Differential Sprint page itself.
  useEffect(() => {
    if (user?.id) loadDsProgress(user.id)
  }, [user?.id])

  const allCards = getAllAccessibleCards(hasAccess, hasAnatomyAccess)
  const overall = getStatsForCards(allCards)
  const overallPct = overall.total ? Math.round((overall.gotIt / overall.total) * 100) : 0

  const streak = getStreak()
  const studyDates = new Set(getStudyDates())
  const todayActivity = getTodayActivity()
  const last14 = getLastNDays(14)

  // Per-subspecialty flashcard stats. Kept in canonical subspecialty order
  // (not sorted by % mastered) so the row order matches the Differential
  // Sprint section below for easy side-by-side comparison.
  const subStats = SUBSPECIALTIES.map(sub => {
    const cards = getAccessibleCardsBySubspecialty(sub.id, hasAccess, hasAnatomyAccess)
    const stats = getStatsForCards(cards)
    const pct = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0
    return { sub, stats, pct }
  })

  // Cards mastered over time, from card_progress.updated_at
  const masteredTimestamps = allCards
    .filter(c => progress[c.id] === CARD_STATE.GOT_IT)
    .map(c => updatedAt[c.id])
    .filter(Boolean)
  const masteryTrend = buildWeeklyTrend(masteredTimestamps, 8)

  // Differential Sprint stats — isolated from flashcard progress above,
  // pulled from its own store/table. Kept in the same canonical
  // subspecialty order as the flashcard section above (not sorted by %)
  // so the two sections' rows line up.
  const dsStats = getDsStatsForQuestions(DIFFERENTIAL_SPRINT_QUESTION_BANK)
  const dsBySubspecialty = DIFFERENTIAL_SPRINT_SUBSPECIALTIES
    .map(sub => {
      const questions = DIFFERENTIAL_SPRINT_QUESTION_BANK.filter(q => q.subspecialties.includes(sub.id))
      const stats = getDsStatsForQuestions(questions)
      const pct = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0
      return { sub, stats, pct }
    })
    .filter(x => x.stats.total > 0)

  // Questions done (any rating) and questions marked Got It over time,
  // both from differential_sprint_progress.updated_at.
  const dsRatedTrend = buildWeeklyTrend(Object.values(dsUpdatedAt), 8)
  const dsGotItTimestamps = DIFFERENTIAL_SPRINT_QUESTION_BANK
    .filter(q => dsProgress[q.id] === DS_STATUS.GOT_IT)
    .map(q => dsUpdatedAt[q.id])
    .filter(Boolean)
  const dsGotItTrend = buildWeeklyTrend(dsGotItTimestamps, 8)

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
                    background: studied ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                    border: `1px solid ${studied ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '10px', color: studied ? 'var(--bg-primary)' : 'var(--text-muted)',
                    fontWeight: '600', transition: 'all var(--transition)',
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

        {/* ============================== */}
        {/* Flashcards                     */}
        {/* ============================== */}
        <div style={{
          fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
        }}>
          Flashcards
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
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
            emoji="📅"
            label="Cards Done Today"
            value={todayActivity.total}
            sub={`${todayActivity.new} new`}
            color="var(--accent-cyan)"
          />
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <ChartCard title="Overall Mastery">
            <DonutChart
              centerValue={`${overallPct}%`}
              centerLabel="mastered"
              segments={[
                { label: 'Got It', value: overall.gotIt, color: 'var(--accent-emerald)' },
                { label: 'Flagged', value: overall.flagged, color: 'var(--accent-amber)' },
                { label: 'Unseen', value: overall.unseen, color: 'var(--text-muted)' },
              ]}
            />
          </ChartCard>
          <ChartCard title="Mastery by Subspecialty">
            <BarChart
              items={subStats.map(({ sub, pct }) => ({
                label: sub.label, icon: sub.icon, value: pct, max: 100, color: sub.color,
              }))}
              valueFormatter={v => `${v}%`}
            />
          </ChartCard>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ChartCard title="Cards Mastered Over Time (8 Weeks)">
            <TrendLineChart points={masteryTrend} color="var(--accent-emerald)" />
          </ChartCard>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
          {subStats.map(({ sub, stats, pct }) => (
            <SubspecialtyRow
              key={sub.id}
              icon={sub.icon}
              label={sub.label}
              right={
                <>
                  <span style={{ fontSize: '12px', color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
                  <span style={{ fontSize: '12px', color: 'var(--accent-amber)' }}>⚑ {stats.flagged}</span>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>● {stats.unseen}</span>
                  <span style={{
                    fontSize: '12px', fontWeight: '700', color: sub.color,
                    background: sub.colorDim, padding: '1px 8px', borderRadius: '999px',
                  }}>
                    {pct}%
                  </span>
                </>
              }
            />
          ))}
        </div>

        {/* ============================== */}
        {/* Differential Sprint            */}
        {/* ============================== */}
        <div style={{
          fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
        }}>
          Differential Sprint
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <HeroTile emoji="✓" label="Got It" value={dsStats.gotIt} color="var(--accent-emerald)" />
          <HeroTile emoji="◐" label="Partial" value={dsStats.partial} color="var(--accent-amber)" />
          <HeroTile emoji="✕" label="Missed" value={dsStats.missed} color="var(--accent-rose)" />
          <HeroTile emoji="⚡" label="Unseen" value={dsStats.unseen} sub={`${dsStats.total} total questions`} color="var(--text-muted)" />
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <ChartCard title="Overall Mastery">
            <DonutChart
              centerValue={dsStats.total ? `${Math.round((dsStats.gotIt / dsStats.total) * 100)}%` : '—'}
              centerLabel="got it"
              segments={[
                { label: 'Got It', value: dsStats.gotIt, color: 'var(--accent-emerald)' },
                { label: 'Partial', value: dsStats.partial, color: 'var(--accent-amber)' },
                { label: 'Missed', value: dsStats.missed, color: 'var(--accent-rose)' },
                { label: 'Unseen', value: dsStats.unseen, color: 'var(--text-muted)' },
              ]}
            />
          </ChartCard>
          <ChartCard title="Mastery by Subspecialty">
            <BarChart
              items={dsBySubspecialty.map(({ sub, pct }) => ({
                label: sub.label, icon: sub.icon, value: pct, max: 100, color: sub.color,
              }))}
              valueFormatter={v => `${v}%`}
              emptyLabel="No Differential Sprint activity in any subspecialty yet."
            />
          </ChartCard>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <ChartCard title="Questions Over Time (8 Weeks)">
            <TrendLineChart
              series={[
                { label: 'Done', color: 'var(--accent-cyan)', points: dsRatedTrend },
                { label: 'Got It', color: 'var(--accent-emerald)', points: dsGotItTrend },
              ]}
            />
          </ChartCard>
        </div>

        {dsBySubspecialty.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {dsBySubspecialty.map(({ sub, stats }) => (
              <SubspecialtyRow
                key={sub.id}
                icon={sub.icon}
                label={sub.label}
                right={
                  <>
                    <span style={{ fontSize: '12px', color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
                    <span style={{ fontSize: '12px', color: 'var(--accent-amber)' }}>◐ {stats.partial}</span>
                    <span style={{ fontSize: '12px', color: 'var(--accent-rose)' }}>✕ {stats.missed}</span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>● {stats.unseen}</span>
                  </>
                }
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
