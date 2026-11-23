import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { ACTIVE_PROMO, isPromoActive } from '../../data/promo'
import { trackEvent } from '../../utils/analytics'

// Shown at the top of the homepage for as long as the promo window is open
// and the visitor isn't logged in. Set ACTIVE_PROMO.enabled to false in
// src/data/promo.js to turn it off without removing this component.
export function PromoBanner() {
  const { isAuthenticated } = useAuthStore()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  const active = isPromoActive()

  useEffect(() => {
    if (active && !isAuthenticated) trackEvent('promo_banner_viewed', { code: ACTIVE_PROMO.code })
  }, [active, isAuthenticated])

  if (!active || isAuthenticated) return null

  const handleCopy = async (e) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(ACTIVE_PROMO.code)
      setCopied(true)
      trackEvent('promo_banner_code_copied', { code: ACTIVE_PROMO.code })
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  return (
    <div
      onClick={() => navigate('/pricing')}
      style={{
        cursor: 'pointer',
        background: 'linear-gradient(135deg, #F59E0B, #F43F5E)',
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '12px', flexWrap: 'wrap', textAlign: 'center',
      }}
    >
      <span style={{
        fontSize: '14px', fontWeight: '700', color: '#fff',
        fontFamily: 'var(--font-display)', letterSpacing: '-0.01em',
      }}>
        🔥 {ACTIVE_PROMO.label} Sale — {ACTIVE_PROMO.percentOff}% off any plan
      </span>

      <span style={{
        fontSize: '11px', fontWeight: '800', letterSpacing: '0.05em',
        textTransform: 'uppercase', color: '#B45309',
        background: '#fff', padding: '3px 10px', borderRadius: '999px',
        whiteSpace: 'nowrap',
      }}>
        ⏰ Limited time offer
      </span>

      <button
        type="button"
        onClick={handleCopy}
        style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '4px 6px 4px 12px', borderRadius: 'var(--radius-md)',
          background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.35)',
          color: '#fff', fontFamily: 'var(--font-body)',
        }}
      >
        <span style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.03em' }}>
          {ACTIVE_PROMO.code}
        </span>
        <span style={{
          fontSize: '12px', fontWeight: '700', padding: '4px 10px',
          borderRadius: 'var(--radius-sm)', background: '#fff', color: '#B45309',
        }}>
          {copied ? 'Copied ✓' : 'Copy Code'}
        </span>
      </button>

      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)' }}>
        Copy the code & paste it at checkout to apply your discount →
      </span>
    </div>
  )
}
