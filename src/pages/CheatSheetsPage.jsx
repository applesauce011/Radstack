import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { usePageMeta } from '../hooks/usePageMeta'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { CHEAT_SHEETS, isCheatSheetFree } from '../data/cheatSheets'
import { loadSheetRuntime, loadSearchIndex } from '../utils/sheetLoader'
import '../styles/cheatSheetTheme.css'

const DEFAULT_SHEET_ID = 'nucs'

// ── Tabs ─────────────────────────────────────────────────────

function SheetTab({ sheet, isActive, isSoon, isLocked, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px', borderRadius: 'var(--radius-md)',
        border: `1px solid ${isActive ? sheet.color + '50' : 'var(--border-subtle)'}`,
        background: isActive ? sheet.colorDim : 'transparent',
        color: isActive ? sheet.color : (isSoon ? 'var(--text-muted)' : 'var(--text-secondary)'),
        cursor: 'pointer', fontSize: '14px', fontWeight: isActive ? '600' : '400',
        fontFamily: 'var(--font-body)', transition: 'all var(--transition)',
        display: 'flex', alignItems: 'center', gap: '6px',
        whiteSpace: 'nowrap', opacity: isSoon ? 0.6 : 1,
      }}
    >
      <span>{sheet.icon}</span>
      <span>{sheet.label}</span>
      {isLocked && <span style={{ fontSize: '11px' }}>🔒</span>}
      {isSoon && (
        <span style={{
          fontSize: '9px', fontWeight: '700', letterSpacing: '0.04em', textTransform: 'uppercase',
          color: 'var(--text-muted)', border: '1px solid var(--border-default)',
          borderRadius: '999px', padding: '1px 6px', marginLeft: '2px',
        }}>
          Soon
        </span>
      )}
    </button>
  )
}

// ── Search ───────────────────────────────────────────────────

function highlightedSnippet(text, query) {
  const i = text.toLowerCase().indexOf(query.toLowerCase())
  if (i === -1) return text.slice(0, 120)
  const start = Math.max(0, i - 40)
  const end = Math.min(text.length, i + query.length + 60)
  const prefix = start > 0 ? '…' : ''
  const suffix = end < text.length ? '…' : ''
  return {
    before: prefix + text.slice(start, i),
    match: text.slice(i, i + query.length),
    after: text.slice(i + query.length, end) + suffix,
  }
}

function SearchResultRow({ entry, query, locked, onPick }) {
  const sheet = CHEAT_SHEETS.find(s => s.id === entry.sheet)
  const snippet = highlightedSnippet(entry.text, query)
  return (
    <button
      onClick={onPick}
      style={{
        display: 'block', width: '100%', textAlign: 'left', padding: '10px 14px',
        background: 'none', border: 'none', borderBottom: '1px solid var(--border-subtle)',
        cursor: 'pointer', fontFamily: 'var(--font-body)',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-hover)'}
      onMouseLeave={e => e.currentTarget.style.background = 'none'}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
        <span style={{ fontSize: '12px' }}>{sheet?.icon}</span>
        <span style={{ fontSize: '11px', fontWeight: '600', color: sheet?.color || 'var(--text-secondary)' }}>
          {sheet?.label}
        </span>
        <span style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: '600' }}>
          {entry.cardTitle}
        </span>
        {locked && <span style={{ fontSize: '11px' }}>🔒</span>}
      </div>
      {typeof snippet === 'string' ? (
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{snippet}</div>
      ) : (
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          {snippet.before}
          <b style={{ color: 'var(--accent-cyan)' }}>{snippet.match}</b>
          {snippet.after}
        </div>
      )}
    </button>
  )
}

function SheetSearchBar({ hasAccess, onNavigate }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(null)
  const [open, setOpen] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    loadSearchIndex().then(setIndex).catch(() => setIndex([]))
  }, [])

  useEffect(() => {
    function onDocClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  const results = useMemo(() => {
    if (!index || query.trim().length < 2) return []
    const q = query.trim().toLowerCase()
    return index
      .filter(e => e.text.toLowerCase().includes(q) || e.cardTitle.toLowerCase().includes(q))
      .sort((a, b) => b.cardTitle.toLowerCase().includes(q) - a.cardTitle.toLowerCase().includes(q))
      .slice(0, 25)
  }, [index, query])

  function pick(entry) {
    setOpen(false)
    setQuery('')
    const locked = !isCheatSheetFree(entry.sheet) && !hasAccess
    onNavigate(entry.sheet, locked ? null : entry.cardIndex, locked)
  }

  return (
    <div ref={boxRef} style={{ position: 'relative', marginBottom: '20px' }}>
      <input
        value={query}
        onChange={e => { setQuery(e.target.value); setOpen(true) }}
        onFocus={() => setOpen(true)}
        placeholder='Search all cheat sheets (e.g. "Colles", "HIDA", "endoleak")…'
        style={{
          width: '100%', padding: '11px 14px', fontSize: '14px',
          background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
          fontFamily: 'var(--font-body)', outline: 'none',
        }}
      />
      {open && query.trim().length >= 2 && (
        <div style={{
          position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
          maxHeight: '420px', overflowY: 'auto', zIndex: 30,
          background: 'var(--bg-card)', border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
        }}>
          {results.length === 0 ? (
            <div style={{ padding: '14px', fontSize: '13px', color: 'var(--text-muted)' }}>
              No matches.
            </div>
          ) : (
            results.map((entry, i) => (
              <SearchResultRow
                key={`${entry.sheet}-${entry.cardIndex}-${i}`}
                entry={entry}
                query={query}
                locked={!isCheatSheetFree(entry.sheet) && !hasAccess}
                onPick={() => pick(entry)}
              />
            ))
          )}
        </div>
      )}
    </div>
  )
}

// ── Sheet rendering helpers ────────────────────────────────────

function setToggle(root, label, on) {
  const btn = Array.from(root.querySelectorAll('.rs-tgl')).find(b => b.textContent.includes(label))
  if (btn && (btn.getAttribute('aria-pressed') === 'true') !== on) btn.click()
}

function jumpToCard(root, idx) {
  setToggle(root, 'Quiz mode', false)
  setToggle(root, '⭐', false)
  requestAnimationFrame(() => {
    const card = root.querySelector(`.rs-card[data-card-idx="${idx}"]`)
    if (!card) return
    card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    card.classList.add('cs-search-hit')
    setTimeout(() => card.classList.remove('cs-search-hit'), 2400)
  })
}

// ── Page ─────────────────────────────────────────────────────

export function CheatSheetsPage() {
  const { sheetId } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { isAuthenticated, isLoading: authLoading } = useAuthStore()
  const { hasAccess, isLoaded: subLoaded } = useSubscriptionStore()

  const activeSheet = CHEAT_SHEETS.find(s => s.id === sheetId) || CHEAT_SHEETS[0]
  const isRealSheet = !!activeSheet.file
  const isFree = isCheatSheetFree(activeSheet.id)
  const accessReady = !authLoading && (!isAuthenticated || subLoaded)
  const locked = isRealSheet && !isFree && !hasAccess

  usePageMeta({
    title: `${activeSheet.label} Cheat Sheet: RadiologyStack | Daily Review`,
    description: `High-yield ${activeSheet.label} review sheet with quiz mode and starred-only filtering, built for daily memorization.`,
    canonical: `https://radiologystack.com/cheat-sheets/${activeSheet.id}`,
  })

  // Redirect to pricing once we know for sure the user lacks paid access.
  useEffect(() => {
    if (!accessReady) return
    if (locked) navigate('/pricing', { replace: true })
  }, [accessReady, locked, navigate])

  const containerRef = useRef(null)
  const [renderState, setRenderState] = useState('idle') // idle | loading | ready | error

  useEffect(() => {
    if (!isRealSheet || !accessReady || locked) return
    let cancelled = false
    setRenderState('loading')
    Promise.all([loadSheetRuntime(), fetch(`/sheets/data/${activeSheet.file}`).then(r => r.json())])
      .then(([RSheet, data]) => {
        if (cancelled || !containerRef.current) return
        containerRef.current.setAttribute('data-theme', 'dark')
        return RSheet.render(containerRef.current, data, { diagramBase: '/sheets/diagrams/' })
      })
      .then(container => {
        if (cancelled || !container) return
        container.querySelectorAll('.rs-card').forEach((card, i) => card.setAttribute('data-card-idx', String(i)))
        setRenderState('ready')
      })
      .catch(err => {
        console.error('Cheat sheet render failed:', err)
        if (!cancelled) setRenderState('error')
      })
    return () => { cancelled = true }
  }, [activeSheet.id, isRealSheet, accessReady, locked])

  // Jump to a card when ?card= is present and the sheet has finished rendering.
  useEffect(() => {
    if (renderState !== 'ready' || !containerRef.current) return
    const cardParam = searchParams.get('card')
    if (cardParam == null) return
    jumpToCard(containerRef.current, Number(cardParam))
  }, [renderState, searchParams])

  function handleSearchNavigate(sheet, cardIndex, isLockedResult) {
    if (isLockedResult) {
      navigate('/pricing')
      return
    }
    navigate(`/cheat-sheets/${sheet}${cardIndex != null ? `?card=${cardIndex}` : ''}`)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: '8px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '26px', fontWeight: '800',
            color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '4px',
          }}>
            Cheat Sheets
          </h1>
        </div>

        <SheetSearchBar hasAccess={hasAccess} onNavigate={handleSearchNavigate} />

        <div style={{ overflowX: 'auto', paddingBottom: '4px', marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', width: 'max-content' }}>
            {CHEAT_SHEETS.map(sheet => (
              <SheetTab
                key={sheet.id}
                sheet={sheet}
                isActive={sheet.id === activeSheet.id}
                isSoon={!sheet.file}
                isLocked={!!sheet.file && !isCheatSheetFree(sheet.id) && !hasAccess}
                onClick={() => sheet.file && navigate(`/cheat-sheets/${sheet.id}`)}
              />
            ))}
          </div>
        </div>

        {!isRealSheet && (
          <div style={{
            textAlign: 'center', padding: '80px 24px', color: 'var(--text-secondary)',
          }}>
            <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-cyan)', marginBottom: '8px' }}>
              🚧 Coming soon
            </div>
            <p style={{ fontSize: '15px' }}>
              The {activeSheet.label} cheat sheet is being built. Check back soon.
            </p>
          </div>
        )}

        {isRealSheet && !accessReady && (
          <div style={{ padding: '80px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
            Loading…
          </div>
        )}

        {isRealSheet && accessReady && !locked && (
          <>
            {renderState === 'error' && (
              <div style={{ padding: '40px 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px' }}>
                Couldn't load this sheet. Try refreshing the page.
              </div>
            )}
            <div ref={containerRef} />
          </>
        )}
      </div>
    </div>
  )
}
