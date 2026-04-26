import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { getPremiumCardCount } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { PricingCard } from '../components/paywall/PricingCard'
import { supabase } from '../lib/supabase'
import { usePageMeta } from '../hooks/usePageMeta'
import { trackEvent } from '../utils/analytics'

const CARD_COUNT = `${getPremiumCardCount()}+ flashcards`

const PLANS = [
  {
    id: '3month',
    label: '3 Months',
    price: '$49',
    period: 'one-time',
    perDay: '$0.54 / day',
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
    perDay: '$0.27 / day',
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
    perDay: 'pay once, yours forever',
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

  useEffect(() => { trackEvent('pricing_page_viewed') }, [])

  usePageMeta({
    title: 'Pricing — RadiologyStack | Radiology Board Exam Flashcards',
    description: 'Unlock all 12 radiology subspecialty decks. One-time payment, no subscription. Plans from $49. Built for FRCPC and ABR board exam prep.',
    canonical: 'https://radiologystack.com/pricing',
  })

  const handleSelectPlan = async (plan) => {
    setError(null)
    trackEvent('pricing_plan_clicked', { plan_type: plan.id, price: plan.price })

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
          Not ready? Try a <strong style={{ color: 'var(--text-secondary)' }}>free deck from every subspecialty</strong> — no account required.
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
          {['Secure payment via Stripe', 'One-time payment, no auto-renewal', '7-day money-back guarantee', 'Questions? radiologystack@gmail.com'].map(s => (
            <span key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent-cyan)' }}>✓</span>
              {s}
            </span>
          ))}
        </div>

        {/* For Programs / Group pricing */}
        <div style={{
          marginTop: '48px', padding: '32px',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.06), rgba(139,92,246,0.06))',
          border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: 'var(--radius-xl)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                padding: '4px 12px', borderRadius: '999px',
                background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
                fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em',
                textTransform: 'uppercase', color: '#818CF8',
                marginBottom: '12px',
              }}>
                For Residency Programs
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: '20px',
                fontWeight: '800', color: 'var(--text-primary)', marginBottom: '10px',
              }}>
                Group access for your whole program
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                Buying for 3 or more residents? We offer volume discounts — one payment, individual access codes delivered instantly.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {[
                  { seats: '3–9 seats', discount: '20% off', price: '~$79 / resident' },
                  { seats: '10–19 seats', discount: '30% off', price: '~$69 / resident' },
                  { seats: '20+ seats', discount: '35% off', price: '~$64 / resident' },
                ].map(tier => (
                  <div key={tier.seats} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    fontSize: '13px',
                  }}>
                    <span style={{ color: 'var(--text-muted)', minWidth: '90px' }}>{tier.seats}</span>
                    <span style={{
                      padding: '2px 10px', borderRadius: '999px', fontSize: '12px',
                      fontWeight: '700', background: 'rgba(99,102,241,0.12)',
                      color: '#818CF8', border: '1px solid rgba(99,102,241,0.25)',
                      whiteSpace: 'nowrap',
                    }}>{tier.discount}</span>
                    <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>{tier.price}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/group')}
                style={{
                  padding: '11px 28px', borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  border: 'none', color: '#fff',
                  fontSize: '14px', fontWeight: '700',
                  cursor: 'pointer', fontFamily: 'var(--font-display)',
                }}
              >
                Get Group Access →
              </button>
            </div>
            <div style={{
              flex: '0 0 auto', fontSize: '64px', alignSelf: 'center',
              opacity: 0.4,
            }}>
              🏥
            </div>
          </div>
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
