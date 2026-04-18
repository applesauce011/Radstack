import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { Navbar } from '../components/layout/Navbar'
import { supabase } from '../lib/supabase'

export function RedeemPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const { refresh } = useSubscriptionStore()

  const [code, setCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleRedeem = async (e) => {
    e.preventDefault()
    setError(null)

    if (!code.trim()) {
      setError('Please enter a code.')
      return
    }

    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    setLoading(true)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) { navigate('/login'); return }

      const res = await fetch('/api/redeem-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ code: code.trim() }),
      })

      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Invalid code. Please check and try again.')
        return
      }

      // Refresh subscription state
      await refresh()
      setSuccess(json)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <Navbar />
        <div style={{
          maxWidth: '420px', margin: '0 auto', padding: '80px 24px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '56px', marginBottom: '24px' }}>🎉</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '26px',
            fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
          }}>
            Access granted!
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '6px' }}>
            Your <strong style={{ color: 'var(--accent-cyan)' }}>{success.plan_label}</strong> access is now active.
          </p>
          {success.current_period_end && (
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '28px' }}>
              Valid until {new Date(success.current_period_end).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          )}
          {!success.current_period_end && (
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '28px' }}>
              Lifetime access — never expires.
            </p>
          )}
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              padding: '13px 28px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-cyan)', border: 'none',
              color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
            }}
          >
            Start Studying →
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '420px', margin: '0 auto', padding: '80px 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '40px', marginBottom: '16px' }}>🎁</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '28px',
            fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px',
          }}>
            Redeem a code
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
            Enter your access code below to unlock RadiologyStack.
          </p>
        </div>

        {!isAuthenticated && (
          <div style={{
            padding: '12px 16px', background: 'rgba(59,130,246,0.08)',
            border: '1px solid rgba(59,130,246,0.25)', borderRadius: 'var(--radius-md)',
            fontSize: '13px', color: 'var(--accent-blue)', marginBottom: '24px',
          }}>
            You need an account to redeem a code.{' '}
            <button
              onClick={() => navigate('/register')}
              style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: '600' }}
            >
              Create one free →
            </button>
          </div>
        )}

        <form onSubmit={handleRedeem}>
          <div style={{ marginBottom: '16px' }}>
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value.toUpperCase())}
              placeholder="ENTER-CODE-HERE"
              autoFocus
              style={{
                width: '100%', padding: '14px 16px', boxSizing: 'border-box',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
                fontSize: '18px', fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em', textAlign: 'center',
                outline: 'none',
              }}
            />
          </div>

          {error && (
            <div style={{
              padding: '10px 14px', background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-md)',
              fontSize: '14px', color: 'var(--accent-rose)', marginBottom: '16px',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !code.trim()}
            style={{
              width: '100%', padding: '14px',
              background: 'var(--accent-cyan)', border: 'none',
              borderRadius: 'var(--radius-md)', color: 'var(--bg-primary)',
              fontSize: '16px', fontWeight: '700',
              cursor: loading || !code.trim() ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-display)',
              opacity: loading || !code.trim() ? 0.6 : 1,
            }}
          >
            {loading ? 'Checking…' : 'Redeem →'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button
            onClick={() => navigate('/pricing')}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit' }}
          >
            ← Back to pricing
          </button>
        </div>
      </div>
    </div>
  )
}
