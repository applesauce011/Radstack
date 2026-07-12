import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { useDifferentialSprintStore, DS_PHASE } from '../store/differentialSprintStore'
import { useDifferentialSprintProgressStore } from '../store/differentialSprintProgressStore'
import { DIFFERENTIAL_SPRINT_QUESTION_BANK, FREE_PREVIEW_QUESTION_IDS } from '../data/differentialSprint/questionBank'
import { getDifferentialSprintSubspecialty } from '../data/differentialSprint/subspecialties'
import { selectDifferentialSprintQuestions } from '../data/differentialSprint/selectQuestions'
import { DS_POOL, DS_STATUS } from '../data/differentialSprint/types'
import { Navbar } from '../components/layout/Navbar'
import { Button } from '../components/ui/Button'
import { UnlockPrompt } from '../components/paywall/UnlockPrompt'
import { usePageMeta } from '../hooks/usePageMeta'
import { SprintSetupControls } from '../components/differentialSprint/SprintSetupControls'
import { SprintProgressHeader } from '../components/differentialSprint/SprintProgressHeader'
import { QuestionCard } from '../components/differentialSprint/QuestionCard'
import { AnswerRevealPanel } from '../components/differentialSprint/AnswerRevealPanel'
import { SelfRatingButtons } from '../components/differentialSprint/SelfRatingButtons'

const RATING_COLORS = {
  [DS_STATUS.GOT_IT]:  'var(--accent-emerald)',
  [DS_STATUS.PARTIAL]: 'var(--accent-amber)',
  [DS_STATUS.MISSED]:  'var(--accent-rose)',
}

// Differential Sprint is a paid feature (hasAccess). Anyone without an
// active subscription — logged in or not — gets a fixed free preview
// instead of being blocked outright: the same FREE_PREVIEW_QUESTION_IDS
// every time (not a random sample), so refreshing the page can't be used
// to farm new content for free.
const FREE_PREVIEW_LIMIT = FREE_PREVIEW_QUESTION_IDS.length
const FREE_PREVIEW_QUESTIONS = DIFFERENTIAL_SPRINT_QUESTION_BANK.filter(
  q => FREE_PREVIEW_QUESTION_IDS.includes(q.id)
)

// ── Disclaimer ───────────────────────────────────────────────
function Disclaimer() {
  return (
    <p style={{
      fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center',
      marginTop: '32px', lineHeight: '1.5',
    }}>
      Differential Sprint is for educational board preparation only and should not be used for clinical decision-making.
    </p>
  )
}

// ── Landing / Setup ──────────────────────────────────────────
function SprintLanding() {
  const {
    selectedSubspecialties, pool, count, randomOrder,
    setSelectedSubspecialties, setPool, setCount, setRandomOrder, startSprint,
  } = useDifferentialSprintStore()
  const { progress } = useDifferentialSprintProgressStore()
  const { hasAccess } = useSubscriptionStore()
  const countCap = hasAccess ? null : FREE_PREVIEW_LIMIT
  const [error, setError] = useState('')

  const toggleSubspecialty = (id) => {
    setSelectedSubspecialties(
      selectedSubspecialties.includes(id)
        ? selectedSubspecialties.filter(s => s !== id)
        : [...selectedSubspecialties, id]
    )
  }

  const handleStart = () => {
    setError('')

    // Free preview: always the same fixed question set, regardless of
    // subspecialty/pool/count selection — those controls are locked below.
    if (!hasAccess) {
      const sprintQuestions = selectDifferentialSprintQuestions({
        allQuestions: FREE_PREVIEW_QUESTIONS, progress: {},
        subspecialtyIds: [], pool: DS_POOL.ALL, count: FREE_PREVIEW_QUESTIONS.length, randomOrder,
      })
      startSprint(sprintQuestions)
      return
    }

    const available = selectDifferentialSprintQuestions({
      allQuestions: DIFFERENTIAL_SPRINT_QUESTION_BANK, progress,
      subspecialtyIds: selectedSubspecialties, pool, count: Infinity, randomOrder: false,
    })
    if (available.length === 0) {
      setError('No questions match these filters. Try selecting more subspecialties, choosing "All questions," or changing the question pool.')
      return
    }
    const sprintQuestions = selectDifferentialSprintQuestions({
      allQuestions: DIFFERENTIAL_SPRINT_QUESTION_BANK, progress,
      subspecialtyIds: selectedSubspecialties, pool, count, randomOrder,
    })
    startSprint(sprintQuestions)
  }

  return (
    <div>
      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 32px)',
        fontWeight: '800', color: 'var(--text-primary)', marginBottom: '6px',
        letterSpacing: '-0.02em',
      }}>
        Differential Sprint
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '20px' }}>
        Rapid board-style differential diagnosis practice.
      </p>

      {!hasAccess && (
        <>
          <UnlockPrompt
            theme="purple"
            icon="🔒"
            title="This Is a Free Preview"
            description={`This is a free preview with access to ${FREE_PREVIEW_LIMIT} questions. Subscribe to unlock unlimited questions across every subspecialty, customize your sprints, and track your progress by specialty on your Stats page.`}
            style={{ marginBottom: '20px' }}
          />
          <Button variant="primary" fullWidth onClick={handleStart} style={{ marginBottom: '24px' }}>
            Start Sprint
          </Button>
        </>
      )}

      <SprintSetupControls
        allQuestions={hasAccess ? DIFFERENTIAL_SPRINT_QUESTION_BANK : FREE_PREVIEW_QUESTIONS}
        progress={hasAccess ? progress : {}}
        selectedSubspecialties={selectedSubspecialties}
        onToggleSubspecialty={toggleSubspecialty}
        onSelectAllSubspecialties={() => setSelectedSubspecialties([])}
        pool={pool}
        onSetPool={setPool}
        count={count}
        onSetCount={setCount}
        randomOrder={randomOrder}
        onSetRandomOrder={setRandomOrder}
        countCap={countCap}
        locked={!hasAccess}
      />

      {error && (
        <div style={{
          marginTop: '16px', padding: '12px 16px', borderRadius: 'var(--radius-md)',
          background: 'var(--accent-rose-dim)', border: '1px solid rgba(244,63,94,0.25)',
          color: 'var(--accent-rose)', fontSize: '13px', lineHeight: '1.5',
        }}>
          {error}
        </div>
      )}

      {hasAccess && (
        <Button variant="primary" fullWidth onClick={handleStart} style={{ marginTop: '20px' }}>
          Start Sprint
        </Button>
      )}

      <Disclaimer />
    </div>
  )
}

// ── Active Session ───────────────────────────────────────────
function SprintSession() {
  const {
    ratings, typedAnswer, isRevealed,
    setTypedAnswer, reveal, rateCurrent, next, backToSetup,
    getCurrentQuestion, getProgress,
  } = useDifferentialSprintStore()
  const { setQuestionStatus } = useDifferentialSprintProgressStore()
  const { hasAccess } = useSubscriptionStore()

  const question = getCurrentQuestion()
  const progress = getProgress()
  if (!question) return null

  const currentRating = ratings[question.id]

  const handleRate = (status) => {
    rateCurrent(status)
    // Persistent progress tracking is a paid feature — free-preview ratings
    // still work locally for this session's summary, just aren't saved.
    if (hasAccess) setQuestionStatus(question.id, status)
  }

  return (
    <div>
      <SprintProgressHeader current={progress.current} total={progress.total} onExit={backToSetup} />

      <div style={{ marginTop: '20px' }}>
        <QuestionCard
          question={question}
          typedAnswer={typedAnswer}
          onTypedAnswerChange={setTypedAnswer}
          disabled={isRevealed}
        />
      </div>

      {!isRevealed ? (
        <Button variant="primary" fullWidth onClick={reveal} style={{ marginTop: '16px' }}>
          Reveal Answer
        </Button>
      ) : (
        <>
          <AnswerRevealPanel question={question} />
          <div style={{ marginTop: '16px' }}>
            <SelfRatingButtons value={currentRating} onRate={handleRate} />
          </div>
          <Button
            variant="primary"
            fullWidth
            onClick={next}
            disabled={!currentRating}
            style={{ marginTop: '16px' }}
          >
            {progress.current === progress.total ? 'Finish Sprint' : 'Next Question'}
          </Button>
        </>
      )}
    </div>
  )
}

// ── Summary ──────────────────────────────────────────────────
function SprintSummary() {
  const { ratings, getSessionSummary, retryMissedPartial, backToSetup } = useDifferentialSprintStore()
  const { hasAccess } = useSubscriptionStore()
  const summary = getSessionSummary()

  const hasRetry = summary.missedOrPartialQuestions.length > 0

  return (
    <div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: '26px',
        fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px',
      }}>
        Sprint Complete
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px' }}>
        {summary.completed} of {summary.total} questions rated.
      </p>

      {!hasAccess && (
        <UnlockPrompt
          theme="purple"
          icon="🔓"
          title="That's Your Free Preview!"
          description="Subscribe to unlock unlimited Differential Sprint questions across every subspecialty, customize your sprints, and track your progress by specialty on your Stats page."
          buttonText="Unlock Unlimited Access →"
          style={{ marginBottom: '28px' }}
        />
      )}

      {/* Stats */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '28px', flexWrap: 'wrap' }}>
        {[
          { label: 'Got It', value: summary.gotIt, color: 'var(--accent-emerald)' },
          { label: 'Partial', value: summary.partial, color: 'var(--accent-amber)' },
          { label: 'Missed', value: summary.missed, color: 'var(--accent-rose)' },
        ].map(s => (
          <div key={s.label} style={{
            flex: 1, minWidth: '100px', padding: '16px', background: 'var(--bg-card)',
            border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
          }}>
            <div style={{ fontSize: '26px', fontWeight: '700', color: s.color, fontFamily: 'var(--font-display)' }}>
              {s.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Breakdown by subspecialty */}
      {Object.keys(summary.bySubspecialty).length > 0 && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{
            fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: '10px',
          }}>
            By Subspecialty
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries(summary.bySubspecialty).map(([subId, stats]) => {
              const sub = getDifferentialSprintSubspecialty(subId)
              if (!sub) return null
              return (
                <div key={subId} style={{
                  display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px',
                  background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  <span>{sub.icon}</span>
                  <span style={{ flex: 1, fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {sub.label}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
                  <span style={{ fontSize: '12px', color: 'var(--accent-amber)' }}>◐ {stats.partial}</span>
                  <span style={{ fontSize: '12px', color: 'var(--accent-rose)' }}>✕ {stats.missed}</span>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Missed / partial prompts */}
      {hasRetry && (
        <div style={{ marginBottom: '28px' }}>
          <div style={{
            fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em', textTransform: 'uppercase',
            color: 'var(--text-muted)', marginBottom: '10px',
          }}>
            Missed &amp; Partial This Sprint
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {summary.missedOrPartialQuestions.map(q => (
              <div key={q.id} style={{
                display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '10px 14px',
                background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)',
                fontSize: '13px', color: 'var(--text-secondary)',
              }}>
                <span style={{ color: RATING_COLORS[ratings[q.id]], flexShrink: 0 }}>●</span>
                <span>{q.prompt}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <Button variant="secondary" onClick={backToSetup}>New Sprint</Button>
        {hasRetry && (
          <Button variant="primary" onClick={retryMissedPartial}>
            Retry This Sprint ({summary.missedOrPartialQuestions.length})
          </Button>
        )}
      </div>

      <Disclaimer />
    </div>
  )
}

// ── Page ─────────────────────────────────────────────────────
export function DifferentialSprintPage() {
  usePageMeta({
    title: 'Differential Sprint: Radiology Differential Diagnosis Practice | RadiologyStack',
    description: 'Rapid board-style differential diagnosis practice for FRCPC and ABR exam prep. Sharpen pattern recognition and speed across all 12 radiology subspecialties. Free preview available.',
    canonical: 'https://radiologystack.com/differential-sprint',
  })

  const { user, isAuthenticated } = useAuthStore()
  const { loadForUser } = useDifferentialSprintProgressStore()
  const { phase } = useDifferentialSprintStore()

  useEffect(() => {
    if (isAuthenticated && user?.id) loadForUser(user.id)
  }, [isAuthenticated, user?.id])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '24px 24px 60px' }}>
        {phase === DS_PHASE.SETUP   && <SprintLanding />}
        {phase === DS_PHASE.ACTIVE  && <SprintSession />}
        {phase === DS_PHASE.SUMMARY && <SprintSummary />}
      </div>
    </div>
  )
}
