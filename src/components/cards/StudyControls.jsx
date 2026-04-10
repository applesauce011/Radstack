import React from 'react'
import { useStudyStore } from '../../store/studyStore'
import { useProgressStore } from '../../store/progressStore'
import { ProgressBar } from '../ui/ProgressBar'

export function StudyControls({ onExit }) {
  const { currentIndex, cards, isShuffled, isFlipped, next, prev, toggleShuffle, reset, sessionSource } = useStudyStore()
  const { getCardState } = useProgressStore()

  const progress = { current: currentIndex + 1, total: cards.length }
  const currentCard = cards[currentIndex]
  const cardState = currentCard ? getCardState(currentCard.id) : 'unseen'

  const stateColors = {
    unseen: 'var(--text-muted)',
    got_it: 'var(--accent-emerald)',
    flagged: 'var(--accent-amber)',
  }
  const stateLabels = {
    unseen: 'Unseen',
    got_it: 'Got it',
    flagged: 'Flagged',
  }

  return (
    <div>
      {/* Session header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '12px', flexWrap: 'wrap', gap: '8px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={onExit}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px',
              fontSize: '14px', fontFamily: 'var(--font-body)', padding: '4px 0',
            }}
          >
            ← Exit
          </button>
          {sessionSource && (
            <span style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: '500' }}>
              {sessionSource.label}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{
            fontSize: '12px', fontWeight: '600',
            color: stateColors[cardState] || stateColors.unseen,
          }}>
            ● {stateLabels[cardState] || 'Unseen'}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            {progress.current} / {progress.total}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar value={currentIndex} max={cards.length} height={3} />

      {/* Navigation */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginTop: '20px', gap: '12px',
      }}>
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          style={{
            padding: '12px 20px', borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)', background: 'var(--bg-elevated)',
            color: currentIndex === 0 ? 'var(--text-muted)' : 'var(--text-primary)',
            cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-body)', fontSize: '14px',
            display: 'flex', alignItems: 'center', gap: '6px',
            opacity: currentIndex === 0 ? 0.4 : 1,
            transition: 'all var(--transition)',
          }}
        >
          ← Prev
        </button>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={toggleShuffle}
            title={isShuffled ? 'Disable shuffle' : 'Shuffle cards'}
            style={{
              padding: '10px', borderRadius: 'var(--radius-md)',
              border: `1px solid ${isShuffled ? 'var(--accent-cyan)' : 'var(--border-default)'}`,
              background: isShuffled ? 'var(--accent-cyan-dim)' : 'var(--bg-elevated)',
              color: isShuffled ? 'var(--accent-cyan)' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: '16px',
              transition: 'all var(--transition)',
            }}
          >
            🔀
          </button>
          <button
            onClick={reset}
            title="Restart deck"
            style={{
              padding: '10px', borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-default)', background: 'var(--bg-elevated)',
              color: 'var(--text-muted)', cursor: 'pointer', fontSize: '16px',
              transition: 'all var(--transition)',
            }}
          >
            ↺
          </button>
        </div>

        <button
          onClick={next}
          style={{
            padding: '12px 20px', borderRadius: 'var(--radius-md)',
            background: 'var(--accent-cyan)', border: 'none',
            color: 'var(--bg-primary)', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: '600',
            display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'all var(--transition)',
          }}
        >
          Next →
        </button>
      </div>

      {/* Keyboard hint */}
      <div style={{
        textAlign: 'center', marginTop: '16px',
        fontSize: '12px', color: 'var(--text-muted)',
      }}>
        Space to flip · ← → to navigate
      </div>
    </div>
  )
}
