import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SUBSPECIALTIES, getCardsBySubspecialty, getCardsBySubsection } from '../data/index'
import { useProgressStore } from '../store/progressStore'
import { useAuthStore } from '../store/authStore'
import { Navbar } from '../components/layout/Navbar'
import { TriProgressBar } from '../components/ui/ProgressBar'
import { StartStudyModal } from '../components/cards/StartStudyModal'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'

function SubsectionRow({ section, subspecialtyColor, onStudy }) {
  const { getStatsForCards, resetDeck } = useProgressStore()
  const [resetOpen, setResetOpen] = useState(false)
  const cards = getCardsBySubsection(section.id)
  const stats = getStatsForCards(cards)
  const pct = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0
  const hasProgress = stats.gotIt > 0 || stats.flagged > 0

  return (
    <>
      <div style={{
        padding: '16px 20px', background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: '180px' }}>
          <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '6px' }}>
            {section.label}
          </div>
          <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={stats.total} />
          <div style={{ display: 'flex', gap: '10px', marginTop: '6px', fontSize: '11px' }}>
            <span style={{ color: 'var(--text-muted)' }}>{stats.total} cards</span>
            <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
            <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged}</span>
            <span style={{ color: 'var(--text-muted)' }}>● {stats.unseen}</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{
            fontSize: '13px', fontWeight: '700',
            color: subspecialtyColor, minWidth: '36px', textAlign: 'right',
          }}>{pct}%</span>
          {hasProgress && (
            <button
              onClick={() => setResetOpen(true)}
              title="Reset section progress"
              style={{
                background: 'none', border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-sm)', padding: '6px 10px',
                cursor: 'pointer', color: 'var(--text-muted)', fontSize: '12px',
                fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-rose)'; e.currentTarget.style.color = 'var(--accent-rose)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >↺</button>
          )}
          <button
            onClick={() => onStudy(cards, { type: 'subsection', id: section.id, label: section.label })}
            style={{
              padding: '8px 16px', borderRadius: 'var(--radius-sm)',
              background: 'var(--accent-cyan)', border: 'none',
              color: 'var(--bg-primary)', fontSize: '13px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              whiteSpace: 'nowrap',
            }}
          >
            Study →
          </button>
        </div>
      </div>
      <Modal isOpen={resetOpen} onClose={() => setResetOpen(false)} title="Reset Section Progress">
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
          Reset all cards in <strong style={{ color: 'var(--text-primary)' }}>{section.label}</strong> back to <strong style={{ color: 'var(--text-primary)' }}>Unseen</strong>?
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>This cannot be undone.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary" onClick={() => setResetOpen(false)} fullWidth>Cancel</Button>
          <Button variant="danger" onClick={() => { resetDeck(cards.map(c => c.id)); setResetOpen(false) }} fullWidth>Reset</Button>
        </div>
      </Modal>
    </>
  )
}

function SubspecialtyTab({ sub, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px', borderRadius: 'var(--radius-md)',
        border: `1px solid ${isActive ? sub.color + '50' : 'var(--border-subtle)'}`,
        background: isActive ? sub.colorDim : 'transparent',
        color: isActive ? sub.color : 'var(--text-secondary)',
        cursor: 'pointer', fontSize: '14px', fontWeight: isActive ? '600' : '400',
        fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
        display: 'flex', alignItems: 'center', gap: '6px',
        whiteSpace: 'nowrap',
      }}
    >
      <span>{sub.icon}</span>
      <span>{sub.label}</span>
    </button>
  )
}

export function DecksPage() {
  const { subspecialtyId } = useParams()
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const { getStatsForCards, resetDeck } = useProgressStore()

  const activeSub = SUBSPECIALTIES.find(s => s.id === subspecialtyId) || SUBSPECIALTIES[0]
  const allCards = getCardsBySubspecialty(activeSub.id)
  const stats = getStatsForCards(allCards)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalCards, setModalCards] = useState([])
  const [modalSource, setModalSource] = useState(null)
  const [resetModalOpen, setResetModalOpen] = useState(false)

  const hasProgress = stats.gotIt > 0 || stats.flagged > 0

  const handleStudy = (cards, source) => {
    setModalCards(cards)
    setModalSource({ ...source, subspecialtyId: activeSub.id })
    setModalOpen(true)
  }

  const handleResetDeck = () => {
    resetDeck(allCards.map(c => c.id))
    setResetModalOpen(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Subspecialty tabs */}
        <div style={{
          overflowX: 'auto', paddingBottom: '4px', marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', gap: '8px', width: 'max-content' }}>
            {SUBSPECIALTIES.map(sub => (
              <SubspecialtyTab
                key={sub.id}
                sub={sub}
                isActive={sub.id === activeSub.id}
                onClick={() => navigate(`/decks/${sub.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Subspecialty header */}
        <div style={{
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          marginBottom: '24px', flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '32px' }}>{activeSub.icon}</span>
              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 30px)',
                fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
              }}>
                {activeSub.label}
              </h1>
            </div>
            <div style={{ display: 'flex', gap: '12px', fontSize: '13px' }}>
              <span style={{ color: 'var(--text-muted)' }}>{stats.total} cards</span>
              <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt} got it</span>
              <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged} flagged</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexShrink: 0 }}>
            {isAuthenticated && hasProgress && (
              <button
                onClick={() => setResetModalOpen(true)}
                style={{
                  padding: '12px 16px', borderRadius: 'var(--radius-md)',
                  background: 'transparent', border: '1px solid var(--border-default)',
                  color: 'var(--text-muted)', fontSize: '14px', fontWeight: '500',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                  transition: 'all var(--transition)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-rose)'
                  e.currentTarget.style.color = 'var(--accent-rose)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-default)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                }}
              >
                ↺ Reset Deck
              </button>
            )}
            <button
              onClick={() => handleStudy(allCards, { type: 'subspecialty', id: activeSub.id, label: activeSub.label })}
              style={{
                padding: '12px 24px', borderRadius: 'var(--radius-md)',
                background: activeSub.color, border: 'none',
                color: '#fff', fontSize: '15px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
              }}
            >
              Study All {stats.total} Cards →
            </button>
          </div>
        </div>

        {/* Whole deck progress bar */}
        <div style={{ marginBottom: '32px' }}>
          <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={stats.total} />
        </div>

        {!isAuthenticated && (
          <div style={{
            padding: '12px 16px', background: 'var(--accent-blue-dim)',
            border: '1px solid rgba(59,130,246,0.3)', borderRadius: 'var(--radius-md)',
            fontSize: '13px', color: 'var(--accent-blue)', marginBottom: '24px',
          }}>
            💡 <strong>Sign in</strong> to save your progress, flag cards, and track what you've studied.{' '}
            <button
              onClick={() => navigate('/register')}
              style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: '600' }}
            >
              Create a free account →
            </button>
          </div>
        )}

        {/* Subsections */}
        <div style={{
          fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px',
        }}>
          Sections
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {activeSub.subsections.map(section => (
            <SubsectionRow
              key={section.id}
              section={section}
              subspecialtyColor={activeSub.color}
              onStudy={handleStudy}
            />
          ))}
        </div>
      </div>

      <StartStudyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        cards={modalCards}
        source={modalSource}
      />

      <Modal isOpen={resetModalOpen} onClose={() => setResetModalOpen(false)} title="Reset Deck Progress">
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
          This will reset all cards in <strong style={{ color: 'var(--text-primary)' }}>{activeSub.label}</strong> back to <strong style={{ color: 'var(--text-primary)' }}>Unseen</strong>.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
          All Got It and Flagged states will be cleared. This cannot be undone.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary" onClick={() => setResetModalOpen(false)} fullWidth>Cancel</Button>
          <Button variant="danger" onClick={handleResetDeck} fullWidth>Reset Deck</Button>
        </div>
      </Modal>
    </div>
  )
}
