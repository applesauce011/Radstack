import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'

export function CheckoutCancelPage() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{
        maxWidth: '480px', margin: '0 auto', padding: '80px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '24px' }}>↩</div>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '26px',
          fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
        }}>
          No charge was made
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '32px', lineHeight: '1.6' }}>
          Your checkout was cancelled. You have not been charged.
          Come back when you're ready — your free preview is always available.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/pricing')}
            style={{
              padding: '12px 24px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-cyan)', border: 'none',
              color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
            }}
          >
            View Plans →
          </button>
          <button
            onClick={() => navigate('/decks')}
            style={{
              padding: '12px 24px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
              color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
            }}
          >
            Browse Free Decks
          </button>
        </div>
      </div>
    </div>
  )
}
