import React from 'react'
import { Navbar } from '../components/layout/Navbar'
import { usePageMeta } from '../hooks/usePageMeta'

export function ProceduresPage() {
  usePageMeta({
    title: 'Procedures: RadiologyStack | Coming Soon',
    description: 'A step-by-step encyclopedia of radiology procedures every radiologist should know how to do. Coming soon to RadiologyStack.',
    canonical: 'https://radiologystack.com/procedures',
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{
        maxWidth: '640px', margin: '0 auto', padding: '120px 24px 140px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', borderRadius: '999px',
          background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
          fontSize: '13px', color: 'var(--accent-cyan)', fontWeight: '600',
          marginBottom: '24px',
        }}>
          🚧 Coming soon
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 44px)',
          fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--text-primary)',
          marginBottom: '16px',
        }}>
          Procedures
        </h1>
        <p style={{
          fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.6',
          maxWidth: '480px', margin: '0 auto',
        }}>
          A step-by-step encyclopedia of the procedures every radiologist should know how to
          perform — from setup to technique to pitfalls. We're building it out now, so check
          back soon.
        </p>
      </div>
    </div>
  )
}
