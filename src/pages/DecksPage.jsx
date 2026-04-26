import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { SUBSPECIALTIES, ANATOMY_SECTIONS, FREE_SECTIONS, isSectionAccessible, getPremiumCardCount, getCardsBySubspecialty, getCardsBySubsection } from '../data/index'
import { trackEvent } from '../utils/analytics'
import { useProgressStore } from '../store/progressStore'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { Navbar } from '../components/layout/Navbar'
import { TriProgressBar } from '../components/ui/ProgressBar'
import { StartStudyModal } from '../components/cards/StartStudyModal'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'
import { usePageMeta } from '../hooks/usePageMeta'

// ── SubsectionRow ─────────────────────────────────────────────

function SubsectionRow({ section, subspecialtyId, subspecialtyColor, onStudy, hasAccess, hasAnatomyAccess, navigate }) {
  const { getStatsForCards, resetDeck } = useProgressStore()
  const [resetOpen, setResetOpen] = useState(false)
  const allCards = getCardsBySubsection(section.id)

  const isEmpty      = allCards.length === 0
  const isPremiumLocked = !isEmpty && !isSectionAccessible(section.id, hasAccess, hasAnatomyAccess)

  useEffect(() => {
    if (isPremiumLocked) {
      trackEvent('locked_section_hit', { section_id: section.id, subspecialty: subspecialtyId })
    }
  }, [isPremiumLocked, section.id, subspecialtyId])

  const accessibleCards = isPremiumLocked ? [] : allCards
  const stats = getStatsForCards(accessibleCards.length > 0 ? accessibleCards : allCards)
  const pct   = stats.total ? Math.round((stats.gotIt / stats.total) * 100) : 0
  const hasProgress = stats.gotIt > 0 || stats.flagged > 0

  const handleStudyClick = () => {
    onStudy(accessibleCards, { type: 'subsection', id: section.id, label: section.label })
  }

  return (
    <>
      <div style={{
        padding: '16px 20px', background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap',
        opacity: (isPremiumLocked || isEmpty) ? (isEmpty ? 0.5 : 0.7) : 1,
      }}>
        <div style={{ flex: 1, minWidth: '180px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: isEmpty ? 0 : '6px' }}>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
              {section.label}
            </div>
            {isPremiumLocked && (
              <span style={{
                fontSize: '10px', fontWeight: '600', letterSpacing: '0.05em',
                textTransform: 'uppercase', color: 'var(--accent-cyan)',
                background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)',
                borderRadius: '999px', padding: '2px 8px', whiteSpace: 'nowrap',
              }}>
                Premium
              </span>
            )}
          </div>
          {!isEmpty && (
            <>
              <TriProgressBar
                gotIt={isPremiumLocked ? 0 : stats.gotIt}
                flagged={isPremiumLocked ? 0 : stats.flagged}
                total={allCards.length}
              />
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px', fontSize: '11px' }}>
                <span style={{ color: 'var(--text-muted)' }}>
                  {isPremiumLocked ? `${allCards.length} cards` : `${accessibleCards.length} cards`}
                </span>
                {!isPremiumLocked && (
                  <>
                    <span style={{ color: 'var(--accent-emerald)' }}>✓ {stats.gotIt}</span>
                    <span style={{ color: 'var(--accent-amber)' }}>⚑ {stats.flagged}</span>
                    <span style={{ color: 'var(--text-muted)' }}>● {stats.unseen}</span>
                  </>
                )}
              </div>
            </>
          )}
        </div>

        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {!isEmpty && !isPremiumLocked && (
            <span style={{
              fontSize: '13px', fontWeight: '700',
              color: subspecialtyColor, minWidth: '36px', textAlign: 'right',
            }}>{pct}%</span>
          )}

          {!isEmpty && hasProgress && !isPremiumLocked && (
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

          {isEmpty ? (
            <span style={{
              fontSize: '12px', fontWeight: '600', letterSpacing: '0.05em',
              textTransform: 'uppercase', color: 'var(--text-muted)',
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: '999px', padding: '6px 14px', whiteSpace: 'nowrap',
            }}>
              Coming Soon
            </span>
          ) : isPremiumLocked ? (
            <button
              onClick={() => navigate('/pricing')}
              style={{
                fontSize: '12px', fontWeight: '600', letterSpacing: '0.04em',
                color: 'var(--accent-cyan)',
                background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)',
                borderRadius: '999px', padding: '6px 14px', whiteSpace: 'nowrap',
                cursor: 'pointer', fontFamily: 'var(--font-body)',
              }}
            >
              🔒 Unlock
            </button>
          ) : (
            <button
              onClick={handleStudyClick}
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
          )}
        </div>
      </div>

      <Modal isOpen={resetOpen} onClose={() => setResetOpen(false)} title="Reset Section Progress">
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
          Reset all cards in <strong style={{ color: 'var(--text-primary)' }}>{section.label}</strong> back to <strong style={{ color: 'var(--text-primary)' }}>Unseen</strong>?
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>This cannot be undone.</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary" onClick={() => setResetOpen(false)} fullWidth>Cancel</Button>
          <Button variant="danger" onClick={() => { resetDeck(accessibleCards.map(c => c.id)); setResetOpen(false) }} fullWidth>Reset</Button>
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
  const { hasAccess, hasAnatomyAccess } = useSubscriptionStore()
  const { getStatsForCards, resetDeck } = useProgressStore()

  const activeSub = SUBSPECIALTIES.find(s => s.id === subspecialtyId) || SUBSPECIALTIES[0]

  usePageMeta({
    title: `${activeSub.label} Flashcards — RadiologyStack | FRCPC & ABR Board Prep`,
    description: `High-yield ${activeSub.label} flashcards for Canadian Royal College (FRCPC) and ABR board exam prep. Study key facts, track progress, and ace your radiology boards.`,
    canonical: `https://radiologystack.com/decks/${activeSub.id}`,
  })

  // Subsections visible to this user (anatomy sections hidden if no anatomy access)
  const visibleSubsections = activeSub.subsections.filter(
    s => hasAnatomyAccess || !ANATOMY_SECTIONS.has(s.id)
  )

  // Accessible cards for this subspecialty
  const accessibleCards = visibleSubsections
    .filter(s => isSectionAccessible(s.id, hasAccess, hasAnatomyAccess))
    .flatMap(s => getCardsBySubsection(s.id))

  // Total cards (all, for display context on locked sections)
  const allCards = getCardsBySubspecialty(activeSub.id)
  const stats = getStatsForCards(accessibleCards)

  const [modalOpen, setModalOpen] = useState(false)
  const [modalCards, setModalCards] = useState([])
  const [modalSource, setModalSource] = useState(null)
  const [resetModalOpen, setResetModalOpen] = useState(false)

  const hasProgress = stats.gotIt > 0 || stats.flagged > 0

  // Whether any visible section is premium-locked (for contextual upgrade note)
  const hasPremiumLocked = !hasAccess && !hasAnatomyAccess &&
    visibleSubsections.some(s => !FREE_SECTIONS.has(s.id) && !ANATOMY_SECTIONS.has(s.id))

  const handleStudy = (cards, source) => {
    setModalCards(cards)
    setModalSource({ ...source, subspecialtyId: activeSub.id })
    setModalOpen(true)
  }

  const handleResetDeck = () => {
    resetDeck(accessibleCards.map(c => c.id))
    setResetModalOpen(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Subspecialty tabs */}
        <div style={{ overflowX: 'auto', paddingBottom: '4px', marginBottom: '32px' }}>
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
              <span style={{ color: 'var(--text-muted)' }}>
                {accessibleCards.length} card{accessibleCards.length !== 1 ? 's' : ''}
                {hasPremiumLocked && (
                  <span style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                    {' '}· {allCards.length} total
                  </span>
                )}
              </span>
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

            {accessibleCards.length > 0 && (
              <button
                onClick={() => handleStudy(accessibleCards, { type: 'subspecialty', id: activeSub.id, label: activeSub.label })}
                style={{
                  padding: '12px 24px', borderRadius: 'var(--radius-md)',
                  background: activeSub.color, border: 'none',
                  color: '#fff', fontSize: '15px', fontWeight: '700',
                  cursor: 'pointer', fontFamily: 'var(--font-display)',
                }}
              >
                Study All {accessibleCards.length} Cards →
              </button>
            )}
          </div>
        </div>

        {/* Whole deck progress bar */}
        <div style={{ marginBottom: '24px' }}>
          <TriProgressBar gotIt={stats.gotIt} flagged={stats.flagged} total={accessibleCards.length || allCards.length} />
        </div>

        {/* Combined premium / sign-in prompt */}
        {hasPremiumLocked && (
          <div style={{
            padding: '14px 18px',
            background: 'rgba(34,211,238,0.04)',
            border: '1px solid rgba(34,211,238,0.2)',
            borderRadius: 'var(--radius-md)',
            fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap',
          }}>
            <span>
              🔒 Most sections require a premium subscription — unlock {getPremiumCardCount()}+ cards across all 12 subspecialties.
              {!isAuthenticated && (
                <span>
                  {' '}Already have an account?{' '}
                  <button
                    onClick={() => navigate('/login')}
                    style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: '600', padding: 0 }}
                  >
                    Sign in
                  </button>
                </span>
              )}
            </span>
            <button
              onClick={() => navigate('/pricing')}
              style={{
                background: 'var(--accent-cyan)', border: 'none', color: 'var(--bg-primary)',
                cursor: 'pointer', fontSize: '13px', fontWeight: '700',
                fontFamily: 'var(--font-body)', padding: '7px 14px',
                borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap',
              }}
            >
              View Plans →
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
          {visibleSubsections.map(section => (
            <SubsectionRow
              key={section.id}
              section={section}
              subspecialtyId={activeSub.id}
              subspecialtyColor={activeSub.color}
              onStudy={handleStudy}
              hasAccess={hasAccess}
              hasAnatomyAccess={hasAnatomyAccess}
              navigate={navigate}
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
