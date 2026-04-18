import React from 'react'
import { useNavigate } from 'react-router-dom'

// Shown at the top of subspecialty pages that have no free content,
// or as an inline prompt when a free user hits the paywall.
export function UpgradePromptBanner({ compact = false }) {
  const navigate = useNavigate()

  if (compact) {
    return (
      <div style={{
        padding: '10px 14px',
        background: 'rgba(34,211,238,0.05)',
        border: '1px solid rgba(34,211,238,0.2)',
        borderRadius: 'var(--radius-md)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: '12px', flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          🔒 Subscribe to unlock all decks
        </span>
        <button
          onClick={() => navigate('/pricing')}
          style={{
            padding: '6px 14px', borderRadius: 'var(--radius-sm)',
            background: 'var(--accent-cyan)', border: 'none',
            color: 'var(--bg-primary)', fontSize: '13px', fontWeight: '600',
            cursor: 'pointer', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap',
          }}
        >
          View Plans →
        </button>
      </div>
    )
  }

  return (
    <div style={{
      padding: '20px 24px',
      background: 'linear-gradient(135deg, rgba(34,211,238,0.06), rgba(59,130,246,0.06))',
      border: '1px solid rgba(34,211,238,0.2)',
      borderRadius: 'var(--radius-lg)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: '16px', flexWrap: 'wrap', marginBottom: '24px',
    }}>
      <div>
        <div style={{
          fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)',
          marginBottom: '4px',
        }}>
          🔒 Subscribe to unlock this deck
        </div>
        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Get full access to all 12 subspecialties. Plans from $49.
        </div>
      </div>
      <button
        onClick={() => navigate('/pricing')}
        style={{
          padding: '10px 20px', borderRadius: 'var(--radius-md)',
          background: 'var(--accent-cyan)', border: 'none',
          color: 'var(--bg-primary)', fontSize: '14px', fontWeight: '700',
          cursor: 'pointer', fontFamily: 'var(--font-display)',
          whiteSpace: 'nowrap', flexShrink: 0,
          boxShadow: '0 0 16px rgba(34,211,238,0.25)',
        }}
      >
        View Plans →
      </button>
    </div>
  )
}
