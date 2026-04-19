import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Footer() {
  const navigate = useNavigate()

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      padding: '24px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      background: 'var(--bg-primary)',
    }}>
      <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
        RadiologyStack · Built for radiology residents · Not for clinical use
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => navigate('/terms')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '12px', color: 'var(--text-muted)' }}
        >
          Terms of Service
        </button>
        <button
          type="button"
          onClick={() => navigate('/privacy')}
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: '12px', color: 'var(--text-muted)' }}
        >
          Privacy Policy
        </button>
        <a
          href="mailto:radiologystack@gmail.com"
          style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}
        >
          radiologystack@gmail.com
        </a>
      </div>
    </footer>
  )
}
