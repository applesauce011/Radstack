import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../ui/Modal'
import { Button } from '../ui/Button'
import { useStudyStore, STUDY_MODE } from '../../store/studyStore'
import { useProgressStore, CARD_STATE } from '../../store/progressStore'
import { TriProgressBar } from '../ui/ProgressBar'
import { useAuthStore } from '../../store/authStore'

export function StartStudyModal({ isOpen, onClose, cards, source }) {
  const navigate = useNavigate()
  const { startSession } = useStudyStore()
  const { getStatsForCards, recordStudied } = useProgressStore()
  const { isAuthenticated } = useAuthStore()
  const [mode, setMode] = useState(STUDY_MODE.ALL)
  const [shuffle, setShuffle] = useState(false)

  const stats = getStatsForCards(cards)

  const filteredCount = () => {
    if (mode === STUDY_MODE.FLAGGED) return stats.flagged
    if (mode === STUDY_MODE.UNSEEN) return stats.unseen
    return stats.total
  }

  const getFilteredCards = () => {
    if (mode === STUDY_MODE.FLAGGED) {
      // Need access to progress — filter will happen in page using getCardState
      return cards
    }
    return cards
  }

  const handleStart = () => {
    let sessionCards = [...cards]
    const { progress } = useProgressStore.getState()

    if (mode === STUDY_MODE.FLAGGED) {
      sessionCards = cards.filter(c => (progress[c.id] || CARD_STATE.UNSEEN) === CARD_STATE.FLAGGED)
    } else if (mode === STUDY_MODE.UNSEEN) {
      sessionCards = cards.filter(c => !progress[c.id] || progress[c.id] === CARD_STATE.UNSEEN)
    }

    if (sessionCards.length === 0) {
      return
    }

    startSession({ cards: sessionCards, mode, shuffle, source })
    // Record this subspecialty as last studied (for Continue Studying logic)
    if (isAuthenticated && source?.type === 'subspecialty') {
      recordStudied(source.id)
    } else if (isAuthenticated && source?.id) {
      // For subsections, record the parent subspecialty too
      recordStudied(source.subspecialtyId || source.id)
    }
    onClose()
    navigate('/study')
  }

  const count = filteredCount()

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Study: ${source?.label || 'Deck'}`}>
      {/* Stats row */}
      <div style={{ marginBottom: '24px' }}>
        <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={stats.total} />
        <div style={{
          display: 'flex', justifyContent: 'space-between', marginTop: '8px',
          fontSize: '12px',
        }}>
          <span style={{ color: 'var(--text-muted)' }}>{stats.total} cards total</span>
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
            <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged}</span>
            <span style={{ color: 'var(--text-muted)' }}>● {stats.unseen}</span>
          </div>
        </div>
      </div>

      {/* Study mode */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{
          display: 'block', fontSize: '12px', fontWeight: '600',
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'var(--text-muted)', marginBottom: '10px',
        }}>Study Mode</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { value: STUDY_MODE.ALL, label: 'All cards', count: stats.total, desc: 'Study the full deck' },
            { value: STUDY_MODE.UNSEEN, label: 'Unseen only', count: stats.unseen, desc: 'Cards not yet seen' },
            { value: STUDY_MODE.FLAGGED, label: 'Flagged only', count: stats.flagged, desc: 'Cards marked for review' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setMode(opt.value)}
              disabled={opt.count === 0}
              style={{
                padding: '12px 16px', borderRadius: 'var(--radius-md)',
                border: `2px solid ${mode === opt.value ? 'var(--accent-cyan)' : 'var(--border-default)'}`,
                background: mode === opt.value ? 'var(--accent-cyan-dim)' : 'var(--bg-elevated)',
                cursor: opt.count === 0 ? 'not-allowed' : 'pointer',
                opacity: opt.count === 0 ? 0.4 : 1,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
                textAlign: 'left',
              }}
            >
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {opt.desc}
                </div>
              </div>
              <span style={{
                fontSize: '13px', fontWeight: '700',
                color: mode === opt.value ? 'var(--accent-cyan)' : 'var(--text-muted)',
              }}>
                {opt.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Shuffle toggle */}
      <button
        onClick={() => setShuffle(!shuffle)}
        style={{
          width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)',
          border: `2px solid ${shuffle ? 'var(--accent-cyan)' : 'var(--border-default)'}`,
          background: shuffle ? 'var(--accent-cyan-dim)' : 'var(--bg-elevated)',
          cursor: 'pointer', display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', fontFamily: 'var(--font-body)', marginBottom: '24px',
          transition: 'all var(--transition)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🔀</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>Shuffle</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Randomize card order</div>
          </div>
        </div>
        <div style={{
          width: '36px', height: '20px', borderRadius: '999px',
          background: shuffle ? 'var(--accent-cyan)' : 'var(--border-default)',
          position: 'relative', transition: 'background 0.2s',
        }}>
          <div style={{
            position: 'absolute', top: '2px',
            left: shuffle ? '18px' : '2px',
            width: '16px', height: '16px', borderRadius: '50%',
            background: '#fff', transition: 'left 0.2s',
          }} />
        </div>
      </button>

      <div style={{ display: 'flex', gap: '10px' }}>
        <Button variant="secondary" onClick={onClose} fullWidth>Cancel</Button>
        <Button
          variant="primary"
          onClick={handleStart}
          fullWidth
          disabled={count === 0}
        >
          Start {count} Card{count !== 1 ? 's' : ''}
        </Button>
      </div>
    </Modal>
  )
}
