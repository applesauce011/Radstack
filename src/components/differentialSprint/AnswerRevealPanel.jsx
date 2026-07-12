import React from 'react'

function BulletSection({ title, items, color = 'var(--accent-cyan)' }) {
  if (!items || items.length === 0) return null
  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{
        fontSize: '11px', fontWeight: '600', letterSpacing: '0.08em',
        textTransform: 'uppercase', color, marginBottom: '8px',
      }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((item, i) => (
          <li key={i} style={{
            display: 'flex', gap: '8px', fontSize: '14px',
            lineHeight: '1.5', color: 'var(--text-primary)',
          }}>
            <span style={{ color, flexShrink: 0 }}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function AnswerRevealPanel({ question }) {
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)', padding: '28px', marginTop: '16px',
      animation: 'fadeIn 0.3s ease',
    }}>
      <BulletSection title="Expected Differential" items={question.expectedAnswers} color="var(--accent-cyan)" />
      <BulletSection title="Must-Not-Miss" items={question.mustNotMiss} color="var(--accent-rose)" />
      <BulletSection title="Key Discriminators" items={question.keyDiscriminators} color="var(--text-secondary)" />

      {question.boardPearl && (
        <div style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.08), rgba(59,130,246,0.08))',
          border: '1px solid var(--accent-cyan-dim)',
          borderRadius: 'var(--radius-md)', padding: '14px 16px',
          marginBottom: '18px', display: 'flex', gap: '10px', alignItems: 'flex-start',
        }}>
          <span style={{ fontSize: '16px', flexShrink: 0 }}>💡</span>
          <p style={{ fontSize: '14px', lineHeight: '1.55', color: 'var(--text-primary)', fontWeight: '500' }}>
            {question.boardPearl}
          </p>
        </div>
      )}

      <BulletSection title="Common Traps" items={question.commonTraps} color="var(--accent-amber)" />

      {/* Future AI grading extension point — inactive in the MVP. */}
      <button
        disabled
        title="AI grading is not available yet"
        style={{
          width: '100%', padding: '10px', borderRadius: 'var(--radius-md)',
          border: '1px dashed var(--border-default)', background: 'transparent',
          color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-body)',
          cursor: 'not-allowed', marginTop: '4px',
        }}
      >
        Grade my answer (AI feedback, coming soon)
      </button>
    </div>
  )
}
