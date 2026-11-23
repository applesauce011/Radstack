import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LAST_UPDATED } from '../../data/config'

export function Footer() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isMedStudent = pathname.startsWith('/medstudents')

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
      <div>
        <p style={{ margin: '0 0 2px', fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          {isMedStudent
            ? 'RadiologyStack for Med Students · Not for clinical use'
            : 'RadiologyStack · Built for radiology residents · Not for clinical use'}
        </p>
        {!isMedStudent && (
          <p style={{ margin: 0, fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.5', opacity: 0.7 }}>
            Cards continuously updated to reflect current literature · Last updated: {LAST_UPDATED}
          </p>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={() => navigate(isMedStudent ? '/' : '/medstudents')}
          style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            fontSize: '12px', color: 'var(--text-muted)',
          }}
        >
          {isMedStudent ? 'For residents' : 'For med students'}
        </button>
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
          href="mailto:team@radiologystack.com"
          style={{ fontSize: '12px', color: 'var(--text-muted)', textDecoration: 'none' }}
        >
          team@radiologystack.com
        </a>
      </div>
    </footer>
  )
}
