import React from 'react'
import { getDifferentialSprintSubspecialty } from '../../data/differentialSprint/subspecialties'
import { DIFFERENTIAL_SPRINT_QUESTION_TYPE_LABELS } from '../../data/differentialSprint/types'

function Tag({ children, color, bg }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '4px',
      padding: '3px 10px', fontSize: '11px', fontWeight: '600',
      borderRadius: '999px', background: bg, color,
      border: `1px solid ${color}33`,
    }}>
      {children}
    </span>
  )
}

export function QuestionCard({ question, typedAnswer, onTypedAnswerChange, disabled }) {
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-xl)', padding: '28px',
    }}>
      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
        {question.subspecialties.map(subId => {
          const sub = getDifferentialSprintSubspecialty(subId)
          if (!sub) return null
          return (
            <Tag key={subId} color={sub.color} bg={sub.colorDim}>
              {sub.icon} {sub.label}
            </Tag>
          )
        })}
        {question.modalities?.map(m => (
          <Tag key={m} color="var(--accent-cyan)" bg="var(--accent-cyan-dim)">{m}</Tag>
        ))}
        {question.anatomy?.map(a => (
          <Tag key={a} color="var(--text-secondary)" bg="var(--bg-elevated)">{a}</Tag>
        ))}
        <Tag color="var(--text-muted)" bg="var(--bg-elevated)">
          {DIFFERENTIAL_SPRINT_QUESTION_TYPE_LABELS[question.questionType] || question.questionType}
        </Tag>
      </div>

      {/* Prompt */}
      <p style={{
        fontSize: '18px', fontWeight: '500', lineHeight: '1.55',
        color: 'var(--text-primary)', marginBottom: '20px',
        fontFamily: 'var(--font-body)',
      }}>
        {question.prompt}
      </p>

      {/* Optional typed answer */}
      <textarea
        value={typedAnswer}
        onChange={e => onTypedAnswerChange(e.target.value)}
        disabled={disabled}
        placeholder="Type your differential here (optional)…"
        rows={4}
        style={{
          width: '100%', padding: '14px', borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-default)', background: 'var(--bg-elevated)',
          color: 'var(--text-primary)', fontSize: '14px', fontFamily: 'var(--font-body)',
          resize: 'vertical', outline: 'none',
        }}
      />
    </div>
  )
}
