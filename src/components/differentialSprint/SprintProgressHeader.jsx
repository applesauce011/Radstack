import React from 'react'
import { ProgressBar } from '../ui/ProgressBar'

export function SprintProgressHeader({ current, total, onExit }) {
  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '12px', flexWrap: 'wrap', gap: '8px',
      }}>
        <button
          onClick={onExit}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px',
            fontSize: '14px', fontFamily: 'var(--font-body)', padding: '4px 0',
          }}
        >
          ← Exit Sprint
        </button>
        <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          Question {current} / {total}
        </span>
      </div>
      <ProgressBar value={current - 1} max={total} height={3} color="var(--accent-blue)" />
    </div>
  )
}
