import React from 'react'
import { useSubscriptionStore } from '../../store/subscriptionStore'

// Displays the user's current subscription status inline.
export function SubscriptionBadge() {
  const { subscription, hasAccess } = useSubscriptionStore()

  if (!subscription || subscription.status === 'none') {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        padding: '3px 10px', borderRadius: '999px',
        background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
        fontSize: '12px', color: 'var(--text-muted)', fontWeight: '500',
      }}>
        Free
      </span>
    )
  }

  const planLabels = { '3month': '3-Month', '12month': '12-Month', lifetime: 'Lifetime' }
  const label = planLabels[subscription.plan_type] ?? 'Pro'
  const isLifetime = subscription.plan_type === 'lifetime'
  const isActive = hasAccess

  if (!isActive) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: '5px',
        padding: '3px 10px', borderRadius: '999px',
        background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)',
        fontSize: '12px', color: 'var(--text-muted)', fontWeight: '500',
      }}>
        Expired
      </span>
    )
  }

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '5px',
      padding: '3px 10px', borderRadius: '999px',
      background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)',
      fontSize: '12px', color: 'var(--accent-cyan)', fontWeight: '600',
    }}>
      ✓ {label}{isLifetime ? '' : ' Pro'}
    </span>
  )
}
