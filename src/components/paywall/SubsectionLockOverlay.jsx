import React from 'react'
import { useNavigate } from 'react-router-dom'

// Renders in place of the Study button for paywalled subsections.
export function SubsectionLockOverlay() {
  const navigate = useNavigate()
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button
        onClick={() => navigate('/pricing')}
        style={{
          padding: '8px 16px', borderRadius: 'var(--radius-sm)',
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
          border: 'none', color: '#fff', fontSize: '13px',
          fontWeight: '600', cursor: 'pointer',
          fontFamily: 'var(--font-body)', whiteSpace: 'nowrap',
          transition: 'opacity var(--transition)',
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        🔒 Unlock →
      </button>
    </div>
  )
}
