import React from 'react'

export function PricingCard({ plan, onSelect, loading }) {
  const { label, price, period, features, highlight, badge } = plan

  return (
    <div style={{
      padding: '32px 28px',
      background: highlight
        ? 'linear-gradient(135deg, rgba(34,211,238,0.07), rgba(59,130,246,0.07))'
        : 'var(--bg-card)',
      border: `1px solid ${highlight ? 'rgba(34,211,238,0.35)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-xl)',
      display: 'flex', flexDirection: 'column',
      position: 'relative',
      transition: 'border-color var(--transition)',
      flex: 1,
      minWidth: '240px',
    }}>
      {badge && (
        <div style={{
          position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
          color: '#fff', fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em',
          textTransform: 'uppercase', padding: '4px 14px', borderRadius: '999px',
          whiteSpace: 'nowrap',
        }}>
          {badge}
        </div>
      )}

      <div style={{ marginBottom: '8px' }}>
        <div style={{
          fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)',
          fontFamily: 'var(--font-display)',
        }}>
          {label}
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <span style={{
          fontSize: '40px', fontWeight: '800', color: highlight ? 'var(--accent-cyan)' : 'var(--text-primary)',
          fontFamily: 'var(--font-display)', letterSpacing: '-0.03em',
        }}>
          {price}
        </span>
        <span style={{ fontSize: '14px', color: 'var(--text-muted)', marginLeft: '6px' }}>
          {period}
        </span>
      </div>

      <ul style={{
        listStyle: 'none', padding: 0, margin: '0 0 28px',
        display: 'flex', flexDirection: 'column', gap: '10px', flex: 1,
      }}>
        {features.map(f => (
          <li key={f} style={{
            display: 'flex', alignItems: 'flex-start', gap: '10px',
            fontSize: '14px', color: 'var(--text-secondary)',
          }}>
            <span style={{ color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '1px' }}>✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => onSelect(plan)}
        disabled={loading}
        style={{
          width: '100%', padding: '13px', borderRadius: 'var(--radius-md)',
          background: highlight
            ? 'var(--accent-cyan)'
            : 'var(--bg-elevated)',
          border: highlight ? 'none' : '1px solid var(--border-default)',
          color: highlight ? 'var(--bg-primary)' : 'var(--text-primary)',
          fontSize: '15px', fontWeight: '700',
          cursor: loading ? 'wait' : 'pointer',
          fontFamily: 'var(--font-display)',
          transition: 'opacity var(--transition)',
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? 'Redirecting…' : 'Get Access →'}
      </button>
    </div>
  )
}
