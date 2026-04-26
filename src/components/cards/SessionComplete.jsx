import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStudyStore } from '../../store/studyStore'
import { useProgressStore, CARD_STATE } from '../../store/progressStore'
import { useAuthStore } from '../../store/authStore'
import { useSubscriptionStore } from '../../store/subscriptionStore'
import { ANATOMY_SECTIONS, FREE_SECTIONS } from '../../data/config'
import { getPremiumCardCount } from '../../data/index'
import { trackEvent } from '../../utils/analytics'
import { Button } from '../ui/Button'

export function SessionComplete({ onRestart, onExit, sectionId }) {
  const navigate = useNavigate()
  const { cards, sessionSource } = useStudyStore()
  const { getStatsForCards } = useProgressStore()
  const { isAuthenticated } = useAuthStore()
  const { hasAccess } = useSubscriptionStore()
  const stats = getStatsForCards(cards)

  // Show signup prompt when studying any non-anatomy section without an account
  const showSignupPrompt = !isAuthenticated &&
    sessionSource?.type === 'subsection' &&
    !ANATOMY_SECTIONS.has(sessionSource?.id)

  // Show upgrade CTA when a logged-in free user completes a free section
  const effectiveSectionId = sectionId || sessionSource?.id
  const showUpgradeCTA = isAuthenticated && !hasAccess &&
    effectiveSectionId && FREE_SECTIONS.has(effectiveSectionId)

  useEffect(() => {
    if (showUpgradeCTA) {
      trackEvent('session_complete_upgrade_cta_shown', { section_id: effectiveSectionId })
    }
  }, [showUpgradeCTA, effectiveSectionId])

  const pctGotIt = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0

  const getMessage = () => {
    if (pctGotIt === 100) return { emoji: '🏆', text: 'Perfect session! Every card marked.' }
    if (pctGotIt >= 75) return { emoji: '🔥', text: 'Great work — solid session!' }
    if (pctGotIt >= 50) return { emoji: '📈', text: 'Making progress. Keep going!' }
    return { emoji: '💪', text: 'Keep studying — you\'ve got this.' }
  }

  const msg = getMessage()

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', minHeight: '60vh', textAlign: 'center',
      padding: '40px 24px', animation: 'fadeIn 0.4s ease',
    }}>
      <div style={{ fontSize: '56px', marginBottom: '16px' }}>{msg.emoji}</div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: '28px',
        fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px',
      }}>
        Session Complete
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '15px' }}>
        {msg.text}
      </p>

      {/* Stats */}
      <div style={{
        display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap', justifyContent: 'center',
      }}>
        {[
          { label: 'Total', value: stats.total, color: 'var(--text-secondary)' },
          { label: 'Got It', value: stats.gotIt, color: 'var(--accent-emerald)' },
          { label: 'Flagged', value: stats.flagged, color: 'var(--accent-amber)' },
          { label: 'Unseen', value: stats.unseen, color: 'var(--text-muted)' },
        ].map(s => (
          <div key={s.label} style={{
            padding: '16px 24px', background: 'var(--bg-card)',
            border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)',
            minWidth: '80px',
          }}>
            <div style={{ fontSize: '28px', fontWeight: '700', color: s.color, fontFamily: 'var(--font-display)' }}>
              {s.value}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary" onClick={onRestart}>Restart Deck</Button>
        <Button variant="secondary" onClick={onExit}>Back to Decks</Button>
      </div>

      {showUpgradeCTA && (
        <div style={{
          marginTop: '40px', padding: '28px 24px', maxWidth: '420px', width: '100%',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(59,130,246,0.08))',
          border: '1px solid rgba(34,211,238,0.3)',
          borderRadius: 'var(--radius-lg)', textAlign: 'center',
        }}>
          <div style={{ fontSize: '24px', marginBottom: '10px' }}>🔓</div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: '700',
            color: 'var(--text-primary)', marginBottom: '8px',
          }}>
            You've finished the free preview
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.55' }}>
            Unlock {getPremiumCardCount()}+ cards across all 12 subspecialties — including everything you haven't seen yet.
          </p>
          <button
            onClick={() => {
              trackEvent('session_complete_upgrade_clicked', { section_id: effectiveSectionId })
              navigate('/pricing')
            }}
            style={{
              display: 'block', width: '100%', padding: '13px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              border: 'none', borderRadius: 'var(--radius-md)',
              color: '#fff', fontSize: '15px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
            }}
          >
            View Plans →
          </button>
          <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '10px' }}>
            7-day money-back guarantee · one-time payment
          </p>
        </div>
      )}

      {showSignupPrompt && (
        <div style={{
          marginTop: '40px', padding: '24px', maxWidth: '420px', width: '100%',
          background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(99,102,241,0.08))',
          border: '1px solid rgba(34,211,238,0.25)',
          borderRadius: 'var(--radius-lg)', textAlign: 'center',
        }}>
          <div style={{ fontSize: '22px', marginBottom: '8px' }}>🎯</div>
          <div style={{
            fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '700',
            color: 'var(--text-primary)', marginBottom: '6px',
          }}>
            Save your progress
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: '1.5' }}>
            Create a free account to track what you've learned, flag cards for review, and pick up where you left off.
          </p>
          <button
            onClick={() => navigate('/register')}
            style={{
              display: 'block', width: '100%', padding: '12px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              border: 'none', borderRadius: 'var(--radius-md)',
              color: '#fff', fontSize: '14px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
              marginBottom: '10px',
            }}
          >
            Create Free Account →
          </button>
          <button
            onClick={() => navigate('/login')}
            style={{
              background: 'none', border: 'none', color: 'var(--text-muted)',
              fontSize: '13px', cursor: 'pointer', fontFamily: 'var(--font-body)',
            }}
          >
            Already have an account? Sign in
          </button>
        </div>
      )}
    </div>
  )
}
