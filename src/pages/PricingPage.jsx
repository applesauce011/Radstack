import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { getPremiumCardCount } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { PricingCard } from '../components/paywall/PricingCard'
import { supabase } from '../lib/supabase'

const CARD_COUNT = `${getPremiumCardCount()}+ flashcards`

const PLANS = [
  {
    id: '3month',
    label: '3 Months',
    price: '$49',
    period: 'one-time',
    priceEnvKey: 'VITE_STRIPE_PRICE_3MONTH',
    badge: null,
    highlight: false,
    features: [
      'Full access for 90 days',
      'All 12 subspecialties',
      CARD_COUNT,
      'Progress tracking & flagging',
      'All study modes',
    ],
  },
  {
    id: '12month',
    label: '12 Months',
    price: '$99',
    period: 'one-time',
    priceEnvKey: 'VITE_STRIPE_PRICE_12MONTH',
    badge: 'Most Popular',
    highlight: true,
    features: [
      'Full access for 1 year',
      'All 12 subspecialties',
      CARD_COUNT,
      'Progress tracking & flagging',
      'Best value for residency',
    ],
  },
  {
    id: 'lifetime',
    label: 'Lifetime',
    price: '$149',
    period: 'one-time',
    priceEnvKey: 'VITE_STRIPE_PRICE_LIFETIME',
    badge: null,
    highlight: false,
    features: [
      'Permanent access, no expiry',
      'All 12 subspecialties',
      CARD_COUNT,
      'All future content included',
      'Never pay again',
    ],
  },
]

function getPriceId(envKey) {
  const map = {
    VITE_STRIPE_PRICE_3MONTH:  import.meta.env.VITE_STRIPE_PRICE_3MONTH,
    VITE_STRIPE_PRICE_12MONTH: import.meta.env.VITE_STRIPE_PRICE_12MONTH,
    VITE_STRIPE_PRICE_LIFETIME: import.meta.env.VITE_STRIPE_PRICE_LIFETIME,
  }
  return map[envKey]
}

export function PricingPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const { hasAccess, subscription } = useSubscriptionStore()
  const [loadingPlan, setLoadingPlan] = useState(null)
  const [error, setError] = useState(null)

  const handleSelectPlan = async (plan) => {
    setError(null)

    if (!isAuthenticated) {
      navigate('/register')
      return
    }

    const priceId = getPriceId(plan.priceEnvKey)
    if (!priceId) {
      setError('Pricing is not yet configured. Please try again later.')
      return
    }

    setLoadingPlan(plan.id)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) {
        navigate('/login')
        return
      }

      const res = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ priceId }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Checkout failed')

      // Redirect to Stripe Checkout
      window.location.href = json.url
    } catch (err) {
      console.error('[pricing] checkout error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
      setLoadingPlan(null)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px' }}>
        {/* Expired user banner */}
        {!hasAccess && subscription && (
          <div style={{
            padding: '16px 20px', marginBottom: '32px',
            background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 'var(--radius-lg)', textAlign: 'center',
          }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--accent-rose)', marginBottom: '4px' }}>
              Your access has expired
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Pick a plan below to restore full access. Your progress and flagged cards are still saved.
            </div>
          </div>
        )}

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          {hasAccess && (
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 16px', borderRadius: '999px',
              background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
              fontSize: '13px', color: 'var(--accent-cyan)', fontWeight: '600',
              marginBottom: '20px',
            }}>
              ✓ You already have an active subscription
            </div>
          )}
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            {!hasAccess && subscription ? 'Renew your RadiologyStack access' : 'Unlock full access to RadiologyStack'}
          </h1>
          <p style={{
            fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.6',
            maxWidth: '520px', margin: '0 auto',
          }}>
            {getPremiumCardCount()}+ high-yield flashcards across all 12 radiology subspecialties.
            Built for Royal College and ABR exam prep.
          </p>
        </div>

        {/* Free preview note */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)', padding: '14px 20px',
          fontSize: '13px', color: 'var(--text-muted)',
          marginBottom: '32px', textAlign: 'center',
        }}>
          Not ready? Try <strong style={{ color: 'var(--text-secondary)' }}>Biliary System</strong> and <strong style={{ color: 'var(--text-secondary)' }}>Stroke & Vascular</strong> for free — no account required.
        </div>

        {/* Pricing cards */}
        <div style={{
          display: 'flex', gap: '16px', flexWrap: 'wrap',
          justifyContent: 'center', alignItems: 'stretch',
          marginBottom: '32px',
        }}>
          {PLANS.map(plan => (
            <PricingCard
              key={plan.id}
              plan={plan}
              onSelect={handleSelectPlan}
              loading={loadingPlan === plan.id}
            />
          ))}
        </div>

        {error && (
          <div style={{
            padding: '12px 16px', background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-md)',
            fontSize: '14px', color: 'var(--accent-rose)', textAlign: 'center',
            marginBottom: '24px',
          }}>
            {error}
          </div>
        )}

        {/* Trust signals */}
        <div style={{
          display: 'flex', gap: '24px', justifyContent: 'center',
          flexWrap: 'wrap', fontSize: '13px', color: 'var(--text-muted)',
        }}>
          {['Secure payment via Stripe', 'One-time payment, no auto-renewal', 'Questions? radiologystack@gmail.com'].map(s => (
            <span key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>✓</span>
              {s}
            </span>
          ))}
        </div>

        {/* Have a code? */}
        <div style={{
          textAlign: 'center', marginTop: '36px', paddingTop: '28px',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
            Have an access code?{' '}
          </span>
          <button
            onClick={() => navigate('/redeem')}
            style={{
              background: 'none', border: 'none', color: 'var(--accent-cyan)',
              cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit', fontWeight: '600',
            }}
          >
            Redeem it here →
          </button>
        </div>

        {/* Legal footer */}
        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: 'var(--text-muted)' }}>
          By subscribing you agree to our{' '}
          <button
            onClick={() => navigate('/terms')}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px', fontFamily: 'inherit', textDecoration: 'underline' }}
          >
            Terms of Service
          </button>
          {' '}and{' '}
          <button
            onClick={() => navigate('/privacy')}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px', fontFamily: 'inherit', textDecoration: 'underline' }}
          >
            Privacy Policy
          </button>.
          {' '}Not for clinical use.
        </div>
      </div>
    </div>
  )
}
