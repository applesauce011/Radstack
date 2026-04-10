import React, { useState } from 'react'
import { useStudyStore } from '../../store/studyStore'
import { useProgressStore, CARD_STATE } from '../../store/progressStore'
import { useAuthStore } from '../../store/authStore'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

// Image component with fallback
function CardImage({ src, alt, caption, maxHeight = '220px', maskSides }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div style={{
        width: '100%', height: '180px', background: 'var(--bg-elevated)',
        border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-md)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        color: 'var(--text-muted)', fontSize: '13px', gap: '8px',
      }}>
        <span style={{ fontSize: '28px' }}>🖼️</span>
        <span>Image unavailable</span>
        {caption && <span style={{ fontSize: '11px', textAlign: 'center', maxWidth: '200px' }}>{caption}</span>}
      </div>
    )
  }

  return (
    <div style={{ width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          style={{
            width: '100%', maxHeight, objectFit: 'contain',
            borderRadius: 'var(--radius-md)', display: 'block',
          }}
        />
        {maskSides?.left && (
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0,
            width: maskSides.left, background: '#000',
            borderRadius: 'var(--radius-md) 0 0 var(--radius-md)',
            pointerEvents: 'none',
          }} />
        )}
        {maskSides?.right && (
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0,
            width: maskSides.right, background: '#000',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0',
            pointerEvents: 'none',
          }} />
        )}
      </div>
      {caption && (
        <p style={{
          fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center',
          marginTop: '6px', fontStyle: 'italic',
        }}>{caption}</p>
      )}
    </div>
  )
}

// Card Front
function CardFront({ card, onFlip }) {
  return (
    <div
      className="card-face"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-default)',
        display: 'flex', flexDirection: 'column',
        padding: '28px',
        cursor: 'pointer',
      }}
      onClick={onFlip}
    >
      <div style={{
        fontSize: '11px', fontWeight: '600', letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '16px',
      }}>
        Tap to reveal
      </div>

      {card.front.image && (
        <div style={{ marginBottom: '20px' }}>
          <CardImage {...card.front.image} maxHeight="240px" />
        </div>
      )}

      <p style={{
        fontSize: '17px', fontWeight: '500', lineHeight: '1.55',
        color: 'var(--text-primary)', flex: 1,
        fontFamily: 'var(--font-body)',
      }}>
        {card.front.question}
      </p>

      {card.front.hint && (
        <div style={{
          marginTop: '16px', padding: '10px 14px',
          background: 'var(--bg-elevated)', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          fontSize: '13px', color: 'var(--text-muted)',
          display: 'flex', gap: '8px', alignItems: 'flex-start',
        }}>
          <span>💡</span>
          <span>{card.front.hint}</span>
        </div>
      )}

      <div style={{
        marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '6px', color: 'var(--text-muted)', fontSize: '13px',
      }}>
        <span>Click or tap to flip</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </div>
    </div>
  )
}

// Card Back
function CardBack({ card, onFlip, cardState, onSetState }) {
  const { next } = useStudyStore()
  return (
    <div
      className="card-face card-back"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-default)',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
        padding: '28px',
      }}
    >
      {/* Answer */}
      <div style={{
        fontSize: '11px', fontWeight: '600', letterSpacing: '0.08em',
        textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '12px',
      }}>
        Answer
      </div>
      <h2 style={{
        fontFamily: 'var(--font-display)', fontSize: '22px',
        fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px',
        lineHeight: '1.3',
      }}>
        {card.back.answer}
      </h2>

      {/* Back images */}
      {card.back.images?.length > 0 && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: card.back.images.length > 1 ? '1fr 1fr' : '1fr',
          gap: '8px', marginBottom: '16px',
        }}>
          {card.back.images.map((img, i) => (
            <CardImage key={i} {...img} maxHeight="160px" />
          ))}
        </div>
      )}

      {/* Differentials */}
      {card.back.differentials?.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <div style={{
            fontSize: '11px', fontWeight: '600', letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px',
          }}>
            Differential Diagnosis
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {card.back.differentials.map((d, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '8px 12px',
                background: 'var(--bg-elevated)', borderRadius: 'var(--radius-sm)',
                fontSize: '14px', color: 'var(--text-primary)',
              }}>
                <span style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  background: 'var(--accent-cyan-dim)', color: 'var(--accent-cyan)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '11px', fontWeight: '700', flexShrink: 0,
                }}>{i + 1}</span>
                {d.dx}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Explanation */}
      <p style={{
        fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)',
        marginBottom: '16px',
      }}>
        {card.back.explanation}
      </p>

      {/* Key Fact lightbulb */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(59,130,246,0.08))',
        border: '1px solid var(--accent-cyan-dim)',
        borderRadius: 'var(--radius-md)', padding: '14px 16px',
        marginBottom: '16px',
        display: 'flex', gap: '10px', alignItems: 'flex-start',
      }}>
        <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
        <p style={{ fontSize: '14px', lineHeight: '1.55', color: 'var(--text-primary)', fontWeight: '500' }}>
          {card.back.keyFact}
        </p>
      </div>

      {/* Tags + Radiopaedia link */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '4px', alignItems: 'center' }}>
        {card.back.tags?.map(tag => (
          <span key={tag} style={{
            padding: '2px 8px', fontSize: '11px', fontWeight: '500',
            background: 'var(--bg-elevated)', color: 'var(--text-muted)',
            borderRadius: '999px', border: '1px solid var(--border-subtle)',
          }}>#{tag}</span>
        ))}
        {card.back.radiopaediaUrl && (
          <a
            href={card.back.radiopaediaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            style={{
              marginLeft: 'auto', fontSize: '12px', color: 'var(--accent-cyan)',
              display: 'flex', alignItems: 'center', gap: '4px',
              fontWeight: '500',
            }}
          >
            <span>Radiopaedia</span>
            <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* State buttons */}
      <div style={{
        display: 'flex', gap: '8px', marginTop: '16px',
        paddingTop: '16px', borderTop: '1px solid var(--border-subtle)',
      }}>
        <button
          onClick={(e) => { e.stopPropagation(); onSetState(CARD_STATE.GOT_IT); next() }}
          style={{
            flex: 1, padding: '10px', borderRadius: 'var(--radius-md)',
            border: `2px solid ${cardState === CARD_STATE.GOT_IT ? 'var(--accent-emerald)' : 'var(--border-default)'}`,
            background: cardState === CARD_STATE.GOT_IT ? 'var(--accent-emerald-dim)' : 'var(--bg-elevated)',
            color: cardState === CARD_STATE.GOT_IT ? 'var(--accent-emerald)' : 'var(--text-secondary)',
            cursor: 'pointer', fontSize: '13px', fontWeight: '600',
            fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          }}
        >
          <span>✓</span> Got it <span style={{ fontSize: '11px', opacity: 0.6 }}>(G)</span>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onSetState(CARD_STATE.FLAGGED); next() }}
          style={{
            flex: 1, padding: '10px', borderRadius: 'var(--radius-md)',
            border: `2px solid ${cardState === CARD_STATE.FLAGGED ? 'var(--accent-amber)' : 'var(--border-default)'}`,
            background: cardState === CARD_STATE.FLAGGED ? 'var(--accent-amber-dim)' : 'var(--bg-elevated)',
            color: cardState === CARD_STATE.FLAGGED ? 'var(--accent-amber)' : 'var(--text-secondary)',
            cursor: 'pointer', fontSize: '13px', fontWeight: '600',
            fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          }}
        >
          <span>⚑</span> Flag <span style={{ fontSize: '11px', opacity: 0.6 }}>(F)</span>
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onFlip() }}
          style={{
            padding: '10px 14px', borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-default)', background: 'var(--bg-elevated)',
            color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px',
            fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
          }}
        >
          ↩
        </button>
      </div>
    </div>
  )
}

// Main Flashcard
export function Flashcard({ card }) {
  const { isFlipped, flip } = useStudyStore()
  const { getCardState, setCardState } = useProgressStore()
  const { isAuthenticated } = useAuthStore()

  const cardState = getCardState(card.id)

  const handleSetState = (state) => {
    if (!isAuthenticated) return
    if (cardState === state) {
      setCardState(card.id, CARD_STATE.UNSEEN)
    } else {
      setCardState(card.id, state)
    }
  }

  return (
    <div
      className="perspective"
      style={{ width: '100%', minHeight: '460px', position: 'relative' }}
    >
      <div className={`card-inner ${isFlipped ? 'flipped' : ''}`} style={{ minHeight: '460px' }}>
        <CardFront card={card} onFlip={flip} />
        <CardBack card={card} onFlip={flip} cardState={cardState} onSetState={handleSetState} />
      </div>
    </div>
  )
}
