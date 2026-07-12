import React from 'react'
import { DS_STATUS } from '../../data/differentialSprint/types'

const OPTIONS = [
  { status: DS_STATUS.GOT_IT,  label: 'Got it',  icon: '✓', color: 'var(--accent-emerald)', bg: 'var(--accent-emerald-dim)' },
  { status: DS_STATUS.PARTIAL, label: 'Partial', icon: '◐', color: 'var(--accent-amber)',   bg: 'var(--accent-amber-dim)' },
  { status: DS_STATUS.MISSED,  label: 'Missed',  icon: '✕', color: 'var(--accent-rose)',    bg: 'var(--accent-rose-dim)' },
]

export function SelfRatingButtons({ value, onRate }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {OPTIONS.map(opt => {
        const active = value === opt.status
        return (
          <button
            key={opt.status}
            onClick={() => onRate(opt.status)}
            style={{
              flex: 1, padding: '12px', borderRadius: 'var(--radius-md)',
              border: `2px solid ${active ? opt.color : 'var(--border-default)'}`,
              background: active ? opt.bg : 'var(--bg-elevated)',
              color: active ? opt.color : 'var(--text-secondary)',
              cursor: 'pointer', fontSize: '14px', fontWeight: '600',
              fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            }}
          >
            <span>{opt.icon}</span> {opt.label}
          </button>
        )
      })}
    </div>
  )
}
