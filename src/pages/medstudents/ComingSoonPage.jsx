import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { usePageMeta } from '../../hooks/usePageMeta'

export function ComingSoonPage({ title, description, icon = '🚧' }) {
  const navigate = useNavigate()

  usePageMeta({
    title: `${title} — Coming Soon | RadiologyStack for Med Students`,
    description,
    canonical: `https://radiologystack.com${window.location.pathname}`,
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <section style={{
        maxWidth: '560px', margin: '0 auto', padding: '100px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '40px', marginBottom: '20px' }}>{icon}</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', borderRadius: '999px',
          background: 'var(--accent-amber-dim)', border: '1px solid rgba(245,158,11,0.3)',
          fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--accent-amber)',
          marginBottom: '20px',
        }}>
          Coming soon
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: '800', color: 'var(--text-primary)', marginBottom: '14px',
        }}>
          {title}
        </h1>
        <p style={{ fontSize: '15px', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '32px' }}>
          {description}
        </p>
        <button
          type="button"
          onClick={() => navigate('/medstudents/library')}
          style={{
            padding: '12px 28px', borderRadius: 'var(--radius-md)',
            background: 'var(--accent-amber)', border: 'none',
            color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
            cursor: 'pointer', fontFamily: 'var(--font-display)',
          }}
        >
          Browse the Library →
        </button>
      </section>
    </div>
  )
}
