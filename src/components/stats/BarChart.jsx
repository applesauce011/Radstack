import React from 'react'

// Horizontal small-multiples bars — best for many/long-named categories.
// items: [{ label, icon, value, max, color }], already sorted by caller.
export function BarChart({ items, valueFormatter, emptyLabel = 'No data yet' }) {
  if (items.length === 0) {
    return <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{emptyLabel}</p>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {items.map(item => {
        const pct = item.max ? Math.min(100, Math.round((item.value / item.max) * 100)) : 0
        const display = valueFormatter ? valueFormatter(item.value) : item.value
        return (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '124px', flexShrink: 0, fontSize: '12px', color: 'var(--text-secondary)',
              display: 'flex', alignItems: 'center', gap: '5px', overflow: 'hidden',
            }}>
              {item.icon && <span style={{ flexShrink: 0 }}>{item.icon}</span>}
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.label}</span>
            </div>
            <div
              title={`${item.label}: ${display}`}
              style={{ flex: 1, height: '10px', background: 'var(--bg-elevated)', borderRadius: '5px', overflow: 'hidden' }}
            >
              <div style={{
                width: `${pct}%`, height: '100%', background: item.color,
                borderRadius: '5px', transition: 'width 0.4s ease',
              }} />
            </div>
            <div style={{ width: '38px', flexShrink: 0, textAlign: 'right', fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)' }}>
              {display}
            </div>
          </div>
        )
      })}
    </div>
  )
}
