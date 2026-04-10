import React from 'react'

const VARIANTS = {
  unseen: { bg: 'var(--bg-elevated)', color: 'var(--text-muted)', border: 'var(--border-subtle)' },
  got_it: { bg: 'var(--accent-emerald-dim)', color: 'var(--accent-emerald)', border: 'rgba(16,185,129,0.25)' },
  flagged: { bg: 'var(--accent-amber-dim)', color: 'var(--accent-amber)', border: 'rgba(245,158,11,0.25)' },
  cyan: { bg: 'var(--accent-cyan-dim)', color: 'var(--accent-cyan)', border: 'rgba(34,211,238,0.25)' },
  blue: { bg: 'var(--accent-blue-dim)', color: 'var(--accent-blue)', border: 'rgba(59,130,246,0.25)' },
  rose: { bg: 'var(--accent-rose-dim)', color: 'var(--accent-rose)', border: 'rgba(244,63,94,0.25)' },
}

export function Badge({ children, variant = 'unseen', size = 'sm' }) {
  const v = VARIANTS[variant] || VARIANTS.unseen
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      padding: size === 'sm' ? '2px 8px' : '4px 12px',
      fontSize: size === 'sm' ? '11px' : '13px',
      fontWeight: '600', letterSpacing: '0.04em', textTransform: 'uppercase',
      borderRadius: '999px',
      background: v.bg, color: v.color,
      border: `1px solid ${v.border}`,
    }}>
      {children}
    </span>
  )
}
