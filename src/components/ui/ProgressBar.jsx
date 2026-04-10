import React from 'react'

export function ProgressBar({ value, max, color = 'var(--accent-cyan)', height = 4, showLabel = false }) {
  const pct = max ? Math.round((value / max) * 100) : 0

  return (
    <div style={{ width: '100%' }}>
      {showLabel && (
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginBottom: '6px', fontSize: '12px', color: 'var(--text-muted)'
        }}>
          <span>{value} / {max}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div style={{
        width: '100%', height, background: 'var(--bg-elevated)',
        borderRadius: height, overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`, height: '100%', background: color,
          borderRadius: height, transition: 'width 0.4s ease',
        }} />
      </div>
    </div>
  )
}

export function TriProgressBar({ gotIt, flagged, total }) {
  const gotItPct = total ? (gotIt / total) * 100 : 0
  const flaggedPct = total ? (flagged / total) * 100 : 0

  return (
    <div style={{
      width: '100%', height: 6, background: 'var(--bg-elevated)',
      borderRadius: 6, overflow: 'hidden', display: 'flex',
    }}>
      <div style={{
        width: `${gotItPct}%`, height: '100%',
        background: 'var(--accent-emerald)', transition: 'width 0.4s ease',
      }} />
      <div style={{
        width: `${flaggedPct}%`, height: '100%',
        background: 'var(--accent-amber)', transition: 'width 0.4s ease',
      }} />
    </div>
  )
}
