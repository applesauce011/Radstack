import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStudyStore } from '../store/studyStore'
import { useProgressStore, CARD_STATE } from '../store/progressStore'
import { useAuthStore } from '../store/authStore'
import { Flashcard } from '../components/cards/Flashcard'
import { StudyControls } from '../components/cards/StudyControls'
import { SessionComplete } from '../components/cards/SessionComplete'

export function StudyPage() {
  const navigate = useNavigate()
  const {
    cards, currentIndex, isComplete, isFlipped, sessionSource,
    flip, next, prev, reset, getCurrentCard,
  } = useStudyStore()

  const exitUrl = sessionSource
    ? `/decks/${sessionSource.subspecialtyId || sessionSource.id}`
    : '/decks'
  const { setCardState } = useProgressStore()
  const { isAuthenticated } = useAuthStore()

  // Redirect if no session active
  useEffect(() => {
    if (cards.length === 0 && !isComplete) {
      navigate('/decks')
    }
  }, [cards, navigate, isComplete])

  // Keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return

    const card = useStudyStore.getState().getCurrentCard()
    const flipped = useStudyStore.getState().isFlipped

    // Space / Enter: flip the card
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      flip()
      return
    }

    // Arrow keys: navigate
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
      return
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
      return
    }

    // G = Got It (only works when card is flipped, advances to next)
    if ((e.key === 'g' || e.key === 'G') && flipped && card && isAuthenticated) {
      e.preventDefault()
      setCardState(card.id, CARD_STATE.GOT_IT)
      next()
      return
    }

    // F = Flag (only works when card is flipped, advances to next)
    if ((e.key === 'f' || e.key === 'F') && flipped && card && isAuthenticated) {
      e.preventDefault()
      setCardState(card.id, CARD_STATE.FLAGGED)
      next()
      return
    }
  }, [flip, next, prev, setCardState, isAuthenticated])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  const currentCard = getCurrentCard()

  if (isComplete) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '24px' }}>
          <SessionComplete
            onRestart={() => reset()}
            onExit={() => navigate(exitUrl)}
          />
        </div>
      </div>
    )
  }

  if (!currentCard) return null

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '0 0 40px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '24px' }}>
        <StudyControls onExit={() => navigate(exitUrl)} />

        <div style={{ marginTop: '20px' }}>
          <Flashcard card={currentCard} />
        </div>

        {/* Dot navigator (for decks up to 30 cards) */}
        {cards.length <= 30 && (
          <div style={{
            display: 'flex', justifyContent: 'center', gap: '5px',
            marginTop: '20px', flexWrap: 'wrap', padding: '0 8px',
          }}>
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => useStudyStore.getState().goTo(i)}
                style={{
                  width: i === currentIndex ? '20px' : '8px',
                  height: '8px', borderRadius: '999px', border: 'none',
                  background: i === currentIndex
                    ? 'var(--accent-cyan)'
                    : i < currentIndex
                      ? 'var(--border-strong)'
                      : 'var(--border-subtle)',
                  cursor: 'pointer', padding: 0,
                  transition: 'all 0.25s ease',
                }}
              />
            ))}
          </div>
        )}

        {/* Keyboard shortcut hint */}
        <div style={{
          textAlign: 'center', marginTop: '16px',
          fontSize: '12px', color: 'var(--text-muted)',
          display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap',
        }}>
          <span>Space — flip</span>
          <span>← → — navigate</span>
          {isAuthenticated && <span style={{ color: 'var(--accent-emerald)' }}>G — got it &amp; next</span>}
          {isAuthenticated && <span style={{ color: 'var(--accent-amber)' }}>F — flag &amp; next</span>}
        </div>
      </div>
    </div>
  )
}
