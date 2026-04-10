import React from 'react'
import { useStudyStore } from '../../store/studyStore'
import { useProgressStore, CARD_STATE } from '../../store/progressStore'
import { Button } from '../ui/Button'

export function SessionComplete({ onRestart, onExit }) {
  const { cards, sessionSource } = useStudyStore()
  const { getStatsForCards } = useProgressStore()
  const stats = getStatsForCards(cards)

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
    </div>
  )
}
