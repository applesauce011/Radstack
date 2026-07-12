import React from 'react'

// Trend chart over time (cumulative checkpoints). Two modes:
//   - single series (points + color, original API) — filled area under the
//     line, endpoint value label, no legend. Used by the flashcards
//     "Cards Mastered Over Time" chart.
//   - multi series (series: [{ label, color, points }]) — one line per
//     series plus a small legend (since there's more than one line to
//     name). Used by the Differential Sprint "Questions Over Time" chart
//     to show "done" and "got it" as two lines on one graph.
// points/series points: [{ label, value }] sorted chronologically.
export function TrendLineChart({ points, series, color = 'var(--accent-cyan)', height = 160 }) {
  const width = 640
  const padding = { top: 16, right: 12, bottom: 26, left: 30 }
  const innerW = width - padding.left - padding.right
  const innerH = height - padding.top - padding.bottom

  const isMulti = Array.isArray(series) && series.length > 0
  const allSeries = isMulti ? series : [{ label: null, color, points: points ?? [] }]

  const basePoints = allSeries[0]?.points ?? []
  const maxVal = Math.max(1, ...allSeries.flatMap(s => s.points.map(p => p.value)))
  const stepX = basePoints.length > 1 ? innerW / (basePoints.length - 1) : 0

  const toCoords = (pts) => pts.map((p, i) => ({
    ...p,
    x: padding.left + i * stepX,
    y: padding.top + innerH - (p.value / maxVal) * innerH,
  }))

  const seriesCoords = allSeries.map(s => ({ ...s, coords: toCoords(s.points) }))

  const yTicks = [...new Set([0, Math.round(maxVal / 2), maxVal])]
  const labelIdxs = [...new Set([0, Math.floor((basePoints.length - 1) / 2), basePoints.length - 1])].filter(i => i >= 0)

  return (
    <div>
      {isMulti && (
        <div style={{ display: 'flex', gap: '16px', marginBottom: '8px' }}>
          {allSeries.map(s => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: s.color, display: 'inline-block' }} />
              {s.label}
            </div>
          ))}
        </div>
      )}
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" style={{ overflow: 'visible' }}>
        {yTicks.map(t => {
          const y = padding.top + innerH - (t / maxVal) * innerH
          return (
            <g key={t}>
              <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="var(--border-subtle)" strokeWidth="1" />
              <text x={padding.left - 8} y={y + 4} fontSize="10" fill="var(--text-muted)" textAnchor="end">{t}</text>
            </g>
          )
        })}

        {seriesCoords.map((s, si) => {
          if (s.coords.length === 0) return null
          const linePath = s.coords.map((c, i) => `${i === 0 ? 'M' : 'L'} ${c.x} ${c.y}`).join(' ')
          const lastPoint = s.coords[s.coords.length - 1]
          const areaPath = `${linePath} L ${lastPoint.x} ${padding.top + innerH} L ${padding.left} ${padding.top + innerH} Z`
          return (
            <g key={s.label ?? si}>
              {!isMulti && <path d={areaPath} fill={s.color} opacity="0.1" stroke="none" />}
              <path d={linePath} fill="none" stroke={s.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              {s.coords.map((c, i) => (
                <circle
                  key={i} cx={c.x} cy={c.y} r={i === s.coords.length - 1 ? 5 : 3}
                  fill={s.color} stroke="var(--bg-card)" strokeWidth="2"
                >
                  <title>{`${s.label ? s.label + ' — ' : ''}${c.label}: ${c.value}`}</title>
                </circle>
              ))}
              {!isMulti && (
                <text x={lastPoint.x} y={lastPoint.y - 12} fontSize="12" fontWeight="700" fill="var(--text-primary)" textAnchor="end">
                  {lastPoint.value}
                </text>
              )}
            </g>
          )
        })}

        {labelIdxs.map(i => (
          <text key={i} x={padding.left + i * stepX} y={height - 8} fontSize="10" fill="var(--text-muted)" textAnchor="middle">
            {basePoints[i]?.label}
          </text>
        ))}
      </svg>
    </div>
  )
}
