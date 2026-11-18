import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { useProgressStore } from '../store/progressStore'
import { getPremiumCardCount, getAllAccessibleCards } from '../data/index'
import { PLANS } from '../data/plans'
import { Navbar } from '../components/layout/Navbar'
import { PricingCard } from '../components/paywall/PricingCard'
import { Modal } from '../components/ui/Modal'
import { Button } from '../components/ui/Button'
import { startCheckout, storePendingPlan } from '../utils/checkout'
import { usePageMeta } from '../hooks/usePageMeta'
import { trackEvent } from '../utils/analytics'
import { PRICING_SEEN_KEY } from '../utils/welcomeDiscount'

const WELCOME_DISCOUNT_PERCENT = 20

export function PricingPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()
  const { hasAccess, subscription } = useSubscriptionStore()
  const { getStatsForCards } = useProgressStore()
  const [loadingPlan, setLoadingPlan] = useState(null)
  const [error, setError] = useState(null)
  const [confirmPlan, setConfirmPlan] = useState(null)
  const [eligibleForWelcomeDiscount, setEligibleForWelcomeDiscount] = useState(false)

  useEffect(() => {
    trackEvent('pricing_page_viewed')

    // Welcome-back discount: optimistic, cosmetic-only client check — the
    // real gate is server-side in api/create-checkout.js (this localStorage
    // flag is trivially spoofable, so it only controls whether the banner
    // *shows*, never whether the discount is actually applied).
    try {
      const seenBefore = localStorage.getItem(PRICING_SEEN_KEY)
      if (seenBefore) {
        setEligibleForWelcomeDiscount(true)
      } else {
        localStorage.setItem(PRICING_SEEN_KEY, '1')
      }
    } catch {}
  }, [])

  const isExpiredUser = !hasAccess && !!subscription
  const showWelcomeDiscount = isAuthenticated && !hasAccess && !subscription && eligibleForWelcomeDiscount

  const expiredStats = isExpiredUser ? getStatsForCards(getAllAccessibleCards(true, false)) : null

  const formatDate = (iso) =>
    iso ? new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : null

  usePageMeta({
    title: 'Pricing: RadiologyStack | Flashcards & Differential Sprint',
    description: 'Unlock all 12 radiology subspecialty decks plus unlimited Differential Sprint. One-time payment, no subscription. Plans from $59. Built for FRCPC and ABR board exam prep.',
    canonical: 'https://radiologystack.com/pricing',
  })

  const proceedToCheckout = async (plan) => {
    setLoadingPlan(plan.id)
    try {
      await startCheckout(plan, { applyWelcomeDiscount: showWelcomeDiscount })
    } catch (err) {
      console.error('[pricing] checkout error:', err)
      if (err.message === 'Please sign in to continue.') {
        navigate('/login')
      } else {
        setError(err.message || 'Something went wrong. Please try again.')
      }
      setLoadingPlan(null)
    }
  }

  const handleSelectPlan = (plan) => {
    setError(null)
    trackEvent('pricing_plan_clicked', { plan_type: plan.id, price: plan.price })

    if (!isAuthenticated) {
      storePendingPlan(plan.id)
      navigate('/register')
      return
    }

    // Already covered — confirm before starting a second payment, since
    // they may genuinely want to switch/extend plans rather than having
    // clicked by mistake.
    if (hasAccess) {
      setConfirmPlan(plan)
      return
    }

    proceedToCheckout(plan)
  }

  const handleConfirmPurchase = () => {
    const plan = confirmPlan
    setConfirmPlan(null)
    proceedToCheckout(plan)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '60px 24px 80px' }}>
        {/* Expired user banner — personalized with saved progress to maximize resubscribe conversion */}
        {isExpiredUser && (
          <div style={{
            padding: '16px 20px', marginBottom: '32px',
            background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)',
            borderRadius: 'var(--radius-lg)', textAlign: 'center',
          }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--accent-rose)', marginBottom: '4px' }}>
              Your access has expired
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {expiredStats?.flagged > 0
                ? `You have ${expiredStats.flagged} flagged card${expiredStats.flagged !== 1 ? 's' : ''} and ${expiredStats.gotIt} completed. Resubscribe to pick up where you left off.`
                : `You completed ${expiredStats?.gotIt ?? 0} card${expiredStats?.gotIt === 1 ? '' : 's'}. Resubscribe to continue studying all ${getPremiumCardCount()}+.`
              }
            </div>
          </div>
        )}

        {/* Welcome-back discount banner for never-purchased accounts returning to Pricing.
            Deliberately bigger and louder than the other banners here — this one exists
            to convert, so it should be the first thing the eye catches on the page. */}
        {showWelcomeDiscount && (
          <div style={{
            padding: '24px 28px', marginBottom: '32px',
            background: 'linear-gradient(135deg, rgba(34,211,238,0.14), rgba(251,191,36,0.10))',
            border: '1px solid rgba(34,211,238,0.45)', borderRadius: 'var(--radius-lg)',
            textAlign: 'center', boxShadow: '0 0 0 1px rgba(34,211,238,0.08), 0 8px 24px rgba(34,211,238,0.12)',
          }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '4px 12px', borderRadius: '999px',
              background: 'var(--accent-amber)', color: '#1a1200',
              fontSize: '11px', fontWeight: '800', letterSpacing: '0.05em', textTransform: 'uppercase',
              marginBottom: '12px', animation: 'pulse 1.8s ease-in-out infinite',
            }}>
              ⏳ Limited-time offer
            </div>
            <div style={{
              fontSize: '22px', fontWeight: '800', letterSpacing: '-0.01em',
              color: 'var(--text-primary)', marginBottom: '6px',
            }}>
              Still not sure? Here's <span style={{ color: 'var(--accent-cyan)' }}>{WELCOME_DISCOUNT_PERCENT}% off</span> to help you decide
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Pick any plan below and the discount is applied automatically at checkout — no code needed.
              Don't wait too long, this offer won't stick around.
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
            {isExpiredUser ? 'Renew your RadiologyStack access' : 'Unlock full access to RadiologyStack'}
          </h1>
          <p style={{
            fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.6',
            maxWidth: '540px', margin: '0 auto',
          }}>
            {getPremiumCardCount()}+ high-yield flashcards across all 12 radiology subspecialties, plus unlimited Differential Sprint:
            rapid board-style differential diagnosis practice. Built for Royal College and ABR exam prep.
          </p>
        </div>

        {/* Free preview note */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)', padding: '14px 20px',
          fontSize: '13px', color: 'var(--text-muted)',
          marginBottom: '32px', textAlign: 'center',
        }}>
          Not ready? Try a <strong style={{ color: 'var(--text-secondary)' }}>free deck from every subspecialty</strong>, plus{' '}
          <strong style={{ color: 'var(--text-secondary)' }}>4 free Differential Sprint questions</strong>, no account required.
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
              discountPercent={showWelcomeDiscount ? WELCOME_DISCOUNT_PERCENT : null}
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
          {['Secure payment via Stripe', 'One-time payment, no auto-renewal', 'Questions? team@radiologystack.com'].map(s => (
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
                Buying for 3 or more residents? We offer volume discounts — email us and we'll set your program up.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {[
                  { seats: '3–9 seats', discount: '20% off', price: '~$103 / resident' },
                  { seats: '10–19 seats', discount: '30% off', price: '~$90 / resident' },
                  { seats: '20+ seats', discount: '35% off', price: '~$84 / resident' },
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
              <a
                href={`mailto:team@radiologystack.com?subject=${encodeURIComponent('Group access for my program')}`}
                style={{
                  display: 'inline-block',
                  padding: '11px 28px', borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
                  border: 'none', color: '#fff',
                  fontSize: '14px', fontWeight: '700',
                  cursor: 'pointer', fontFamily: 'var(--font-display)',
                  textDecoration: 'none',
                }}
              >
                Email team@radiologystack.com →
              </a>
            </div>
            <div style={{
              flex: '0 0 auto', fontSize: '64px', alignSelf: 'center',
              opacity: 0.4,
            }}>
              🏥
            </div>
          </div>
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

      <Modal isOpen={!!confirmPlan} onClose={() => setConfirmPlan(null)} title="You already have access">
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '16px' }}>
          Your current plan is active
          {subscription?.current_period_end && subscription.plan_type !== 'lifetime'
            ? ` until ${formatDate(subscription.current_period_end)}`
            : ''}
          . Purchasing the <strong style={{ color: 'var(--text-primary)' }}>{confirmPlan?.label}</strong> plan will start a new payment.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
          Only continue if you mean to extend or switch your plan.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="secondary" onClick={() => setConfirmPlan(null)} fullWidth>Cancel</Button>
          <Button variant="primary" onClick={handleConfirmPurchase} fullWidth>Continue to Payment</Button>
        </div>
      </Modal>
    </div>
  )
}
