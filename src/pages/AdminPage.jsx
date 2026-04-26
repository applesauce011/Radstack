import React, { useState, useEffect, useCallback } from 'react'
import { Navbar } from '../components/layout/Navbar'

const FUNNEL_STEPS = [
  { key: 'pricing_page_viewed', label: 'Viewed Pricing' },
  { key: 'pricing_plan_clicked', label: 'Clicked a Plan' },
  { key: 'checkout_started', label: 'Started Checkout' },
]

const EVENT_LABELS = {
  pricing_page_viewed: 'Pricing Page Views',
  pricing_plan_clicked: 'Plan Button Clicks',
  checkout_started: 'Checkouts Started',
  locked_section_hit: 'Locked Section Views',
  upgrade_banner_viewed: 'Upgrade Banner Views',
  session_complete_upgrade_cta_shown: 'Post-Session Upgrade CTAs Shown',
  session_complete_upgrade_clicked: 'Post-Session Upgrade Clicks',
}

const PLAN_LABELS = { '3month': '3-Month', '12month': '12-Month', lifetime: 'Lifetime' }
const PLAN_COLORS = { '3month': 'var(--accent-blue)', '12month': 'var(--accent-cyan)', lifetime: 'var(--accent-amber)' }

function CodeRow({ row, onDeactivate }) {
  const used = row.uses
  const max  = row.max_uses
  const expired = row.expires_at && new Date(row.expires_at) < new Date()
  const exhausted = used >= max

  const statusColor = !row.active || expired || exhausted
    ? 'var(--text-muted)'
    : 'var(--accent-emerald)'

  const statusLabel = !row.active ? 'Deactivated' : expired ? 'Expired' : exhausted ? 'Used up' : 'Active'

  return (
    <div style={{
      padding: '14px 16px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      display: 'flex', alignItems: 'center', gap: '12px',
      flexWrap: 'wrap',
      opacity: !row.active ? 0.5 : 1,
    }}>
      <div style={{ flex: '0 0 auto' }}>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '15px',
          fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-primary)',
        }}>
          {row.code}
        </span>
      </div>

      <span style={{
        padding: '2px 10px', borderRadius: '999px', fontSize: '12px',
        fontWeight: '600', background: 'rgba(0,0,0,0.2)',
        color: PLAN_COLORS[row.plan_type] || 'var(--text-secondary)',
        border: `1px solid ${PLAN_COLORS[row.plan_type] || 'var(--border-subtle)'}30`,
        whiteSpace: 'nowrap',
      }}>
        {PLAN_LABELS[row.plan_type] || row.plan_type}
      </span>

      <span style={{ fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
        {used}/{max} uses
      </span>

      {row.expires_at && (
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
          Exp: {new Date(row.expires_at).toLocaleDateString()}
        </span>
      )}

      {row.note && (
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic', flex: 1, minWidth: '100px' }}>
          {row.note}
        </span>
      )}

      <span style={{ fontSize: '12px', fontWeight: '600', color: statusColor, whiteSpace: 'nowrap', marginLeft: 'auto' }}>
        {statusLabel}
      </span>

      {row.active && !expired && !exhausted && (
        <button
          onClick={() => onDeactivate(row.code)}
          style={{
            padding: '4px 10px', borderRadius: 'var(--radius-sm)',
            background: 'none', border: '1px solid var(--border-subtle)',
            color: 'var(--accent-rose)', cursor: 'pointer', fontSize: '12px',
            fontFamily: 'var(--font-body)',
          }}
        >
          Deactivate
        </button>
      )}
    </div>
  )
}

function AnatomyUserRow({ row, onRevoke }) {
  return (
    <div style={{
      padding: '12px 16px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      display: 'flex', alignItems: 'center', gap: '12px',
      flexWrap: 'wrap',
    }}>
      <span style={{ flex: 1, fontSize: '14px', color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>
        {row.email}
      </span>
      <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--accent-emerald)' }}>
        Anatomy Access
      </span>
      <button
        onClick={() => onRevoke(row.email)}
        style={{
          padding: '4px 10px', borderRadius: 'var(--radius-sm)',
          background: 'none', border: '1px solid var(--border-subtle)',
          color: 'var(--accent-rose)', cursor: 'pointer', fontSize: '12px',
          fontFamily: 'var(--font-body)',
        }}
      >
        Revoke
      </button>
    </div>
  )
}

export function AdminPage() {
  const [secret, setSecret]       = useState('')
  const [authed, setAuthed]       = useState(false)
  const [authError, setAuthError] = useState(null)

  // ── Promo codes state ─────────────────────────────────────
  const [codes, setCodes]         = useState([])
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState(null)
  const [newCode, setNewCode]     = useState('')
  const [newPlan, setNewPlan]     = useState('lifetime')
  const [newMaxUses, setNewMaxUses] = useState(1)
  const [newExpiry, setNewExpiry] = useState('')
  const [newNote, setNewNote]     = useState('')
  const [createLoading, setCreateLoading] = useState(false)
  const [createError, setCreateError]     = useState(null)
  const [createSuccess, setCreateSuccess] = useState(null)

  // ── Anatomy access state ──────────────────────────────────
  const [anatomyUsers, setAnatomyUsers]         = useState([])
  const [anatomyLoading, setAnatomyLoading]     = useState(false)
  const [anatomyError, setAnatomyError]         = useState(null)
  const [grantEmail, setGrantEmail]             = useState('')
  const [grantLoading, setGrantLoading]         = useState(false)
  const [grantError, setGrantError]             = useState(null)
  const [grantSuccess, setGrantSuccess]         = useState(null)

  // ── Analytics state ───────────────────────────────────────
  const [analytics, setAnalytics]               = useState(null)
  const [analyticsLoading, setAnalyticsLoading] = useState(false)
  const [analyticsError, setAnalyticsError]     = useState(null)

  // ── Group orders state ────────────────────────────────────
  const [groupOrders, setGroupOrders]           = useState([])
  const [groupLoading, setGroupLoading]         = useState(false)
  const [groupError, setGroupError]             = useState(null)

  const headers = { 'Content-Type': 'application/json', 'X-Admin-Secret': secret }

  const loadCodes = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/admin-codes', { headers: { 'X-Admin-Secret': secret } })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to load codes')
      setCodes(json.codes)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [secret])

  const loadAnatomyUsers = useCallback(async () => {
    setAnatomyLoading(true)
    setAnatomyError(null)
    try {
      const res = await fetch('/api/admin-anatomy', { headers: { 'X-Admin-Secret': secret } })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to load anatomy users')
      setAnatomyUsers(json.users)
    } catch (err) {
      setAnatomyError(err.message)
    } finally {
      setAnatomyLoading(false)
    }
  }, [secret])

  const loadAnalytics = useCallback(async () => {
    setAnalyticsLoading(true)
    setAnalyticsError(null)
    try {
      const res = await fetch('/api/admin-analytics', { headers: { 'X-Admin-Secret': secret } })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to load analytics')
      setAnalytics(json)
    } catch (err) {
      setAnalyticsError(err.message)
    } finally {
      setAnalyticsLoading(false)
    }
  }, [secret])

  const loadGroupOrders = useCallback(async () => {
    setGroupLoading(true)
    setGroupError(null)
    try {
      const res = await fetch('/api/admin-group', { headers: { 'X-Admin-Secret': secret } })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to load group orders')
      setGroupOrders(json.orders)
    } catch (err) {
      setGroupError(err.message)
    } finally {
      setGroupLoading(false)
    }
  }, [secret])

  const handleLogin = async (e) => {
    e.preventDefault()
    setAuthError(null)
    const res = await fetch('/api/admin-codes', { headers: { 'X-Admin-Secret': secret } })
    if (res.status === 401) { setAuthError('Incorrect admin password.'); return }
    const json = await res.json()
    if (!res.ok) { setAuthError(json.error || 'Error'); return }
    setCodes(json.codes)
    setAuthed(true)
    // Load anatomy users too
    const aRes = await fetch('/api/admin-anatomy', { headers: { 'X-Admin-Secret': secret } })
    const aJson = await aRes.json()
    if (aRes.ok) setAnatomyUsers(aJson.users)
    // Load analytics
    const anRes = await fetch('/api/admin-analytics', { headers: { 'X-Admin-Secret': secret } })
    const anJson = await anRes.json()
    if (anRes.ok) setAnalytics(anJson)
    // Load group orders
    const grRes = await fetch('/api/admin-group', { headers: { 'X-Admin-Secret': secret } })
    const grJson = await grRes.json()
    if (grRes.ok) setGroupOrders(grJson.orders)
  }

  const handleCreate = async (e) => {
    e.preventDefault()
    setCreateError(null)
    setCreateSuccess(null)
    setCreateLoading(true)
    try {
      const res = await fetch('/api/admin-codes', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          code: newCode,
          plan_type: newPlan,
          max_uses: newMaxUses,
          expires_at: newExpiry || null,
          note: newNote || null,
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to create')
      setCreateSuccess(json.code.code)
      setNewCode('')
      setNewNote('')
      setNewExpiry('')
      setNewMaxUses(1)
      await loadCodes()
    } catch (err) {
      setCreateError(err.message)
    } finally {
      setCreateLoading(false)
    }
  }

  const handleDeactivate = async (code) => {
    if (!confirm(`Deactivate "${code}"? This cannot be undone.`)) return
    await fetch('/api/admin-codes', {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ code }),
    })
    await loadCodes()
  }

  const handleGrantAnatomy = async (e) => {
    e.preventDefault()
    setGrantError(null)
    setGrantSuccess(null)
    setGrantLoading(true)
    try {
      const res = await fetch('/api/admin-anatomy', {
        method: 'POST',
        headers,
        body: JSON.stringify({ email: grantEmail.trim() }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to grant access')
      setGrantSuccess(json.email)
      setGrantEmail('')
      await loadAnatomyUsers()
    } catch (err) {
      setGrantError(err.message)
    } finally {
      setGrantLoading(false)
    }
  }

  const handleRevokeAnatomy = async (email) => {
    if (!confirm(`Revoke anatomy access for "${email}"?`)) return
    const res = await fetch('/api/admin-anatomy', {
      method: 'DELETE',
      headers,
      body: JSON.stringify({ email }),
    })
    if (res.ok) await loadAnatomyUsers()
  }

  // ── Login gate ────────────────────────────────────────────
  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
        <Navbar />
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '80px 24px' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '24px',
            fontWeight: '800', color: 'var(--text-primary)', marginBottom: '28px',
          }}>
            Admin
          </h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Admin password"
              value={secret}
              onChange={e => setSecret(e.target.value)}
              autoFocus
              style={{
                width: '100%', padding: '12px 14px', boxSizing: 'border-box',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
                fontSize: '14px', fontFamily: 'var(--font-body)',
                marginBottom: '12px', outline: 'none',
              }}
            />
            {authError && (
              <div style={{ fontSize: '13px', color: 'var(--accent-rose)', marginBottom: '12px' }}>{authError}</div>
            )}
            <button
              type="submit"
              style={{
                width: '100%', padding: '12px',
                background: 'var(--accent-cyan)', border: 'none',
                borderRadius: 'var(--radius-md)', color: 'var(--bg-primary)',
                fontSize: '15px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
              }}
            >
              Enter →
            </button>
          </form>
        </div>
      </div>
    )
  }

  // ── Admin dashboard ───────────────────────────────────────
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* ── Section 1: Anatomy Access ───────────────────── */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '26px',
          fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px',
        }}>
          Anatomy Access
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '28px' }}>
          Grant or revoke access to the 7 anatomy decks (Brain, Spine, Head/Skull Base, Shoulder, Knee, Ankle, Wrist) for specific users.
          The user must have an account before you can grant access.
        </p>

        {/* Grant access form */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '24px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '16px',
            fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px',
          }}>
            Grant Anatomy Access
          </h2>
          <form onSubmit={handleGrantAnatomy} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <input
              type="email"
              value={grantEmail}
              onChange={e => setGrantEmail(e.target.value)}
              placeholder="user@example.com"
              required
              style={{ ...inputStyle, flex: 1, minWidth: '220px' }}
            />
            <button
              type="submit"
              disabled={grantLoading || !grantEmail.trim()}
              style={{
                padding: '9px 20px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)', border: 'none',
                color: 'var(--bg-primary)', fontSize: '14px', fontWeight: '700',
                cursor: grantLoading ? 'wait' : 'pointer',
                fontFamily: 'var(--font-display)',
                opacity: grantLoading || !grantEmail.trim() ? 0.6 : 1,
                whiteSpace: 'nowrap',
              }}
            >
              {grantLoading ? 'Granting…' : 'Grant Access →'}
            </button>
          </form>
          {grantError && (
            <div style={{ fontSize: '13px', color: 'var(--accent-rose)', marginTop: '10px' }}>{grantError}</div>
          )}
          {grantSuccess && (
            <div style={{ fontSize: '13px', color: 'var(--accent-emerald)', marginTop: '10px' }}>
              Anatomy access granted to <strong>{grantSuccess}</strong>.
            </div>
          )}
        </div>

        {/* Users with anatomy access */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '12px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '16px',
            fontWeight: '700', color: 'var(--text-primary)',
          }}>
            Users with Anatomy Access ({anatomyUsers.length})
          </h2>
          <button
            onClick={loadAnatomyUsers}
            style={{
              background: 'none', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)', padding: '5px 12px',
              color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px',
              fontFamily: 'var(--font-body)',
            }}
          >
            ↺ Refresh
          </button>
        </div>

        {anatomyError && (
          <div style={{ color: 'var(--accent-rose)', fontSize: '14px', marginBottom: '12px' }}>{anatomyError}</div>
        )}
        {anatomyLoading && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '12px' }}>Loading…</div>
        )}
        {!anatomyLoading && anatomyUsers.length === 0 && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '12px' }}>
            No users have anatomy access yet.
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '48px' }}>
          {anatomyUsers.map(row => (
            <AnatomyUserRow key={row.user_id} row={row} onRevoke={handleRevokeAnatomy} />
          ))}
        </div>

        {/* ── Section 2: Promo Codes ──────────────────────── */}
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '26px',
          fontWeight: '800', color: 'var(--text-primary)', marginBottom: '28px',
          paddingTop: '12px', borderTop: '1px solid var(--border-subtle)',
        }}>
          Promo Codes
        </h1>

        {/* Create new code */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '32px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '16px',
            fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px',
          }}>
            Create New Code
          </h2>
          <form onSubmit={handleCreate}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px', marginBottom: '12px' }}>
              <div>
                <label style={labelStyle}>Code</label>
                <input
                  type="text"
                  value={newCode}
                  onChange={e => setNewCode(e.target.value.toUpperCase())}
                  placeholder="e.g. FRIEND2024"
                  required
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Plan</label>
                <select value={newPlan} onChange={e => setNewPlan(e.target.value)} style={inputStyle}>
                  <option value="3month">3-Month</option>
                  <option value="12month">12-Month</option>
                  <option value="lifetime">Lifetime</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>Max Uses</label>
                <input
                  type="number"
                  value={newMaxUses}
                  onChange={e => setNewMaxUses(parseInt(e.target.value) || 1)}
                  min="1"
                  max="9999"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Expires (optional)</label>
                <input
                  type="date"
                  value={newExpiry}
                  onChange={e => setNewExpiry(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Note (optional)</label>
                <input
                  type="text"
                  value={newNote}
                  onChange={e => setNewNote(e.target.value)}
                  placeholder="e.g. For conference attendees, Dr. Smith"
                  style={inputStyle}
                />
              </div>
            </div>
            {createError && (
              <div style={{ fontSize: '13px', color: 'var(--accent-rose)', marginBottom: '12px' }}>{createError}</div>
            )}
            {createSuccess && (
              <div style={{ fontSize: '13px', color: 'var(--accent-emerald)', marginBottom: '12px' }}>
                Code <strong>{createSuccess}</strong> created successfully.
              </div>
            )}
            <button
              type="submit"
              disabled={createLoading}
              style={{
                padding: '10px 24px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)', border: 'none',
                color: 'var(--bg-primary)', fontSize: '14px', fontWeight: '700',
                cursor: createLoading ? 'wait' : 'pointer',
                fontFamily: 'var(--font-display)',
                opacity: createLoading ? 0.6 : 1,
              }}
            >
              {createLoading ? 'Creating…' : 'Create Code →'}
            </button>
          </form>
        </div>

        {/* Existing codes */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: '12px',
        }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: '16px',
            fontWeight: '700', color: 'var(--text-primary)',
          }}>
            All Codes ({codes.length})
          </h2>
          <button
            onClick={loadCodes}
            style={{
              background: 'none', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)', padding: '5px 12px',
              color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px',
              fontFamily: 'var(--font-body)',
            }}
          >
            ↺ Refresh
          </button>
        </div>

        {error && (
          <div style={{ color: 'var(--accent-rose)', fontSize: '14px', marginBottom: '12px' }}>{error}</div>
        )}
        {loading && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Loading…</div>
        )}
        {!loading && codes.length === 0 && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>No codes yet.</div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {codes.map(row => (
            <CodeRow key={row.code} row={row} onDeactivate={handleDeactivate} />
          ))}
        </div>

        {/* ── Section 3: Analytics ────────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '48px', marginBottom: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '26px',
            fontWeight: '800', color: 'var(--text-primary)',
          }}>
            Analytics
          </h1>
          <button
            onClick={loadAnalytics}
            style={{
              background: 'none', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)', padding: '5px 12px',
              color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px',
              fontFamily: 'var(--font-body)',
            }}
          >
            ↺ Refresh
          </button>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
          Last 30 days. Run the SQL migration in Supabase before events will appear here.
        </p>

        {analyticsError && (
          <div style={{ color: 'var(--accent-rose)', fontSize: '14px', marginBottom: '16px' }}>{analyticsError}</div>
        )}
        {analyticsLoading && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>Loading…</div>
        )}

        {analytics && (
          <>
            {/* Conversion funnel */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: '24px', marginBottom: '24px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: '16px',
                fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px',
              }}>
                Conversion Funnel
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {analytics.funnel.map((step, i) => {
                  const prev = i > 0 ? analytics.funnel[i - 1].count : null
                  const pct = prev && prev > 0 ? Math.round((step.count / prev) * 100) : null
                  return (
                    <div key={step.key} style={{
                      display: 'flex', alignItems: 'center', gap: '16px',
                      padding: '12px 0',
                      borderBottom: i < analytics.funnel.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                    }}>
                      <div style={{
                        width: '24px', height: '24px', borderRadius: '50%',
                        background: 'rgba(34,211,238,0.15)', border: '1px solid rgba(34,211,238,0.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '11px', fontWeight: '700', color: 'var(--accent-cyan)',
                        flexShrink: 0,
                      }}>
                        {i + 1}
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                          {step.label}
                        </div>
                        {pct !== null && (
                          <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {pct}% from previous step
                          </div>
                        )}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: '24px',
                        fontWeight: '800', color: step.count > 0 ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      }}>
                        {step.count.toLocaleString()}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* All events breakdown */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: '24px',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)', fontSize: '16px',
                fontWeight: '700', color: 'var(--text-primary)', marginBottom: '16px',
              }}>
                All Events
              </h2>
              {Object.keys(analytics.counts).length === 0 ? (
                <div style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
                  No events recorded yet. Make sure the Supabase migration has been run.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {Object.entries(analytics.counts)
                    .sort((a, b) => b[1] - a[1])
                    .map(([name, count], i, arr) => (
                      <div key={name} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                      }}>
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                          {EVENT_LABELS[name] || name}
                        </span>
                        <span style={{
                          fontFamily: 'var(--font-display)', fontSize: '16px',
                          fontWeight: '700', color: 'var(--text-primary)',
                        }}>
                          {count.toLocaleString()}
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* ── Section 4: Group Orders ──────────────────────── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '48px', marginBottom: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '26px',
            fontWeight: '800', color: 'var(--text-primary)',
          }}>
            Group Orders
          </h1>
          <button
            onClick={loadGroupOrders}
            style={{
              background: 'none', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)', padding: '5px 12px',
              color: 'var(--text-muted)', cursor: 'pointer', fontSize: '12px',
              fontFamily: 'var(--font-body)',
            }}
          >
            ↺ Refresh
          </button>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px' }}>
          Automated multi-seat purchases from /group. Codes are generated instantly on payment.
        </p>

        {groupError && (
          <div style={{ color: 'var(--accent-rose)', fontSize: '14px', marginBottom: '16px' }}>{groupError}</div>
        )}
        {groupLoading && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>Loading…</div>
        )}
        {!groupLoading && groupOrders.length === 0 && !groupError && (
          <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>No group orders yet.</div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {groupOrders.map(order => (
            <div key={order.id} style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: '20px',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {order.program_name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                    {order.institution}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    padding: '3px 12px', borderRadius: '999px', fontSize: '12px',
                    fontWeight: '700', background: 'rgba(52,211,153,0.12)',
                    color: 'var(--accent-emerald)', border: '1px solid rgba(52,211,153,0.3)',
                  }}>
                    {order.num_seats} seats
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '15px',
                    fontWeight: '700', color: 'var(--text-primary)',
                  }}>
                    ${((order.amount_paid ?? 0) / 100).toFixed(2)}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                <span>
                  Contact:{' '}
                  <a href={`mailto:${order.contact_email}`} style={{ color: 'var(--accent-cyan)' }}>
                    {order.contact_name} ({order.contact_email})
                  </a>
                </span>
                {order.start_year && <span>Start year: {order.start_year}</span>}
                <span>Paid: {new Date(order.created_at).toLocaleDateString()}</span>
              </div>
              {order.codes?.length > 0 && (
                <details>
                  <summary style={{ fontSize: '12px', color: 'var(--text-muted)', cursor: 'pointer', marginBottom: '8px' }}>
                    View {order.codes.length} codes
                  </summary>
                  <div style={{
                    display: 'flex', flexWrap: 'wrap', gap: '6px',
                    marginTop: '8px', maxHeight: '120px', overflowY: 'auto',
                  }}>
                    {order.codes.map(code => (
                      <span key={code} style={{
                        fontFamily: 'var(--font-display)', fontSize: '12px',
                        fontWeight: '600', letterSpacing: '0.04em',
                        padding: '3px 10px', background: 'var(--bg-elevated)',
                        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)',
                        color: 'var(--text-primary)',
                      }}>
                        {code}
                      </span>
                    ))}
                  </div>
                </details>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const labelStyle = {
  display: 'block', fontSize: '12px', fontWeight: '600',
  color: 'var(--text-muted)', marginBottom: '5px',
}

const inputStyle = {
  width: '100%', padding: '9px 12px', boxSizing: 'border-box',
  background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
  fontSize: '13px', fontFamily: 'var(--font-body)', outline: 'none',
}
