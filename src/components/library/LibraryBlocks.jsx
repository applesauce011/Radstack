import React from 'react'

const CALLOUT_STYLES = {
  note:     { label: 'Note',      color: 'var(--accent-blue)',    dim: 'var(--accent-blue-dim)' },
  warning:  { label: 'Warning',   color: 'var(--accent-amber)',   dim: 'var(--accent-amber-dim)' },
  critical: { label: 'Critical',  color: 'var(--accent-rose)',    dim: 'var(--accent-rose-dim)' },
  examtip:  { label: 'Exam tip',  color: 'var(--accent-emerald)', dim: 'var(--accent-emerald-dim)' },
}

function boldLead(text) {
  // Definition-style bullets ("Term: description") get the lead term bolded —
  // a lightweight heuristic, not a full markdown parser.
  const m = /^([^:]{1,50}):\s(.+)$/.exec(text)
  if (!m) return text
  return (
    <>
      <strong style={{ color: 'var(--text-primary)' }}>{m[1]}:</strong> {m[2]}
    </>
  )
}

function Paragraph({ block }) {
  return (
    <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '20px' }}>
      {block.text}
    </p>
  )
}

function ListBlock({ block }) {
  return (
    <ul style={{ margin: '0 0 20px', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {block.items.map((item, i) => (
        <li key={i} style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
          {boldLead(item)}
        </li>
      ))}
    </ul>
  )
}

function OrderedListBlock({ block }) {
  return (
    <ol style={{ margin: '0 0 20px', padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {block.items.map((item, i) => (
        <li key={i} style={{ fontSize: '15px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
          {item}
        </li>
      ))}
    </ol>
  )
}

function DeflistBlock({ block }) {
  return (
    <div style={{
      display: 'grid', gap: '10px', marginBottom: '20px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    }}>
      {block.items.map((item, i) => (
        <div key={i} style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)', padding: '14px 16px',
        }}>
          <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-amber)', textDecoration: 'none' }}>
                {item.term} ↗
              </a>
            ) : item.term}
          </div>
          {item.fields.filter(f => f.value).map((f, j) => (
            <div key={j} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: j > 0 ? '6px' : 0 }}>
              {f.label && <span style={{ color: 'var(--text-muted)' }}>{f.label}: </span>}
              {f.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function CalloutBlock({ block }) {
  const style = CALLOUT_STYLES[block.variant] || CALLOUT_STYLES.note
  return (
    <div style={{
      display: 'flex', gap: '12px',
      background: style.dim, borderLeft: `3px solid ${style.color}`,
      borderRadius: 'var(--radius-md)', padding: '14px 16px', marginBottom: '20px',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '11px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase',
          color: style.color, marginBottom: '4px',
        }}>
          {style.label}
        </div>
        <div style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-primary)' }}>
          {block.text}
        </div>
      </div>
    </div>
  )
}

function AsideBlock({ block }) {
  return (
    <div style={{
      background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)', padding: '18px 20px', marginBottom: '20px',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700',
        color: 'var(--accent-amber)', marginBottom: '8px',
      }}>
        {block.title}
      </div>
      <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--text-secondary)', margin: 0 }}>
        {block.text}
      </p>
    </div>
  )
}

function ImageBlock({ block }) {
  return (
    <div style={{
      border: '1px dashed var(--border-default)', borderRadius: 'var(--radius-md)',
      padding: '32px 20px', textAlign: 'center', marginBottom: '20px',
      background: 'var(--bg-card)',
    }}>
      <div style={{ fontSize: '24px', marginBottom: '8px', opacity: 0.6 }}>🖼️</div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontStyle: 'italic' }}>
        {block.caption}
      </div>
    </div>
  )
}

function FaqBlock({ block }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
      {block.items.map((item, i) => (
        <div key={i}>
          <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
            Q: {item.q}
          </div>
          <div style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
            A: {item.a}
          </div>
        </div>
      ))}
    </div>
  )
}

function GlossaryBlock({ block }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '20px' }}>
      <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>Glossary:</span>
      {block.terms.map((term, i) => (
        <span key={i} style={{
          fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--bg-elevated)',
          padding: '4px 10px', borderRadius: '999px', border: '1px solid var(--border-subtle)',
        }}>
          {term}
        </span>
      ))}
    </div>
  )
}

const RENDERERS = {
  paragraph: Paragraph,
  list: ListBlock,
  orderedlist: OrderedListBlock,
  deflist: DeflistBlock,
  callout: CalloutBlock,
  aside: AsideBlock,
  image: ImageBlock,
  faq: FaqBlock,
  glossary: GlossaryBlock,
}

export function LibraryBlocks({ blocks }) {
  return (
    <>
      {blocks.map((block, i) => {
        const Renderer = RENDERERS[block.type]
        if (!Renderer) return null
        return <Renderer key={i} block={block} />
      })}
    </>
  )
}
