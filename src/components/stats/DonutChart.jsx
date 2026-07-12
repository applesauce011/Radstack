import React from 'react'

// Part-to-whole snapshot with a hero figure in the center.
// segments: [{ label, value, color }]
export function DonutChart({ segments, centerValue, centerLabel, size = 152, thickness = 18 }) {
  const total = segments.reduce((sum, s) => sum + s.value, 0)
  const radius = (size - thickness) / 2
  const circumference = 2 * Math.PI * radius
  const nonZero = segments.filter(s => s.value > 0)
  let cumulative = 0

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: 'rotate(-90deg)' }}>
          {total === 0 ? (
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--bg-elevated)" strokeWidth={thickness} />
          ) : nonZero.map(s => {
            const fraction = s.value / total
            const dash = fraction * circumference
            const gapPx = nonZero.length > 1 ? 3 : 0
            const offset = -cumulative
            cumulative += dash
            return (
              <circle
                key={s.label}
                cx={size / 2} cy={size / 2} r={radius}
                fill="none" stroke={s.color} strokeWidth={thickness}
                strokeDasharray={`${Math.max(dash - gapPx, 0)} ${circumference - dash + gapPx}`}
                strokeDashoffset={offset}
                strokeLinecap="round"
              >
                <title>{`${s.label}: ${s.value} (${Math.round(fraction * 100)}%)`}</title>
              </circle>
            )
          })}
        </svg>
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', padding: '0 12px',
        }}>
          <div style={{
            fontSize: '26px', fontWeight: '800', color: 'var(--text-primary)',
            fontFamily: 'var(--font-display)', lineHeight: 1,
          }}>
            {centerValue}
          </div>
          {centerLabel && (
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', textAlign: 'center' }}>
              {centerLabel}
            </div>
          )}
        </div>
      </div>

      {/* Legend — always present for 2+ segments */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '140px' }}>
        {segments.map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '3px', background: s.color, flexShrink: 0 }} />
            <span style={{ color: 'var(--text-secondary)' }}>{s.label}</span>
            <span style={{ color: 'var(--text-muted)', marginLeft: 'auto', paddingLeft: '12px', fontWeight: '600' }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
