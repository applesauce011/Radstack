import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { trackEvent } from '../../utils/analytics'

// Bold, "in your face" paywall block. Reused everywhere a free/non-paying
// user hits a hard wall — Differential Sprint's summary and setup pages,
// flashcard subsection locks, session-complete upsells.
//
// Color is the only thing that should vary by feature: purple identifies
// Differential Sprint, blue/cyan identifies flashcards. Copy and layout
// stay identical so the "you've hit a paywall" moment reads the same
// everywhere in the app.
const THEMES = {
  purple: {
    background: 'linear-gradient(135deg, rgba(139,92,246,0.16), rgba(34,211,238,0.08))',
    border: '2px solid rgba(139,92,246,0.45)',
    glow: '0 0 40px rgba(139,92,246,0.18)',
    buttonBg: '#8B5CF6',
    buttonColor: '#fff',
    buttonGlow: '0 0 24px rgba(139,92,246,0.4)',
  },
  blue: {
    background: 'linear-gradient(135deg, rgba(34,211,238,0.16), rgba(59,130,246,0.08))',
    border: '2px solid rgba(34,211,238,0.45)',
    glow: '0 0 40px rgba(34,211,238,0.18)',
    buttonBg: 'var(--accent-cyan)',
    buttonColor: 'var(--bg-primary)',
    buttonGlow: '0 0 24px rgba(34,211,238,0.4)',
  },
}

export function UnlockPrompt({
  theme = 'blue',
  icon = '🔓',
  title,
  description,
  buttonText = 'View Plans →',
  note = 'Plans from $49',
  onButtonClick,
  style: extraStyle,
}) {
  const navigate = useNavigate()
  const t = THEMES[theme] || THEMES.blue

  useEffect(() => {
    trackEvent('unlock_prompt_viewed', { theme, title })
  }, [theme, title])

  return (
    <div style={{
      padding: '32px 28px', textAlign: 'center',
      background: t.background, border: t.border,
      borderRadius: 'var(--radius-xl)', boxShadow: t.glow,
      ...extraStyle,
    }}>
      <div style={{ fontSize: '38px', marginBottom: '10px' }}>{icon}</div>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '800',
        color: 'var(--text-primary)', marginBottom: '10px',
      }}>
        {title}
      </div>
      {description && (
        <p style={{
          fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6',
          maxWidth: '440px', margin: '0 auto 22px',
        }}>
          {description}
        </p>
      )}
      <button
        onClick={onButtonClick || (() => navigate('/pricing'))}
        style={{
          padding: '14px 36px', borderRadius: 'var(--radius-md)',
          background: t.buttonBg, border: 'none', color: t.buttonColor,
          fontSize: '16px', fontWeight: '700', cursor: 'pointer',
          fontFamily: 'var(--font-display)', boxShadow: t.buttonGlow,
        }}
      >
        {buttonText}
      </button>
      {note && (
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '14px' }}>
          {note}
        </p>
      )}
    </div>
  )
}
