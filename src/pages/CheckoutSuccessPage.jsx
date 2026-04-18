import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { Navbar } from '../components/layout/Navbar'

export function CheckoutSuccessPage() {
  const navigate = useNavigate()
  const { refresh, hasAccess } = useSubscriptionStore()
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'pending'

  useEffect(() => {
    let attempts = 0

    const poll = async () => {
      await refresh()
      const { hasAccess: active } = useSubscriptionStore.getState()

      if (active) {
        setStatus('success')
        setTimeout(() => navigate('/dashboard'), 2500)
        return
      }

      // Webhook may take a few seconds — retry up to 5 times
      if (++attempts < 5) {
        setTimeout(poll, 2000)
      } else {
        // Access not yet confirmed — show pending message, user can refresh manually
        setStatus('pending')
      }
    }

    poll()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{
        maxWidth: '480px', margin: '0 auto', padding: '80px 24px',
        textAlign: 'center',
      }}>
        {status === 'loading' && (
          <>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px', margin: '0 auto 24px',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}>R</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Confirming your access…
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
              Activating your subscription. This takes just a moment.
            </p>
          </>
        )}

        {status === 'success' && (
          <>
            <div style={{ fontSize: '56px', marginBottom: '24px' }}>🎉</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              You're in!
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '8px' }}>
              Full access to all RadiologyStack decks is now unlocked.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
              Redirecting to your dashboard…
            </p>
          </>
        )}

        {status === 'pending' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>✅</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Payment received!
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
              Your access is being activated. If it doesn't appear immediately, please refresh the page or check your dashboard in a minute.
            </p>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                padding: '12px 28px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)', border: 'none',
                color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
              }}
            >
              Go to Dashboard →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
