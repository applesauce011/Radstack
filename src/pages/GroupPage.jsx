import React, { useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import { usePageMeta } from '../hooks/usePageMeta'

// Discount tiers — matches what's shown on /pricing
const TIERS = [
  { min: 3,  max: 9,   discount: 0.20, label: '20% off' },
  { min: 10, max: 19,  discount: 0.30, label: '30% off' },
  { min: 20, max: Infinity, discount: 0.35, label: '35% off' },
]
const BASE_PRICE_CENTS = 9900  // $99 per seat (12-month plan)

function getTier(n) {
  return TIERS.find(t => n >= t.min && n <= t.max) ?? null
}

function getPricePerSeat(n) {
  const tier = getTier(n)
  if (!tier) return BASE_PRICE_CENTS
  return Math.round(BASE_PRICE_CENTS * (1 - tier.discount))
}

const currentYear = new Date().getFullYear()
const START_YEARS = [currentYear, currentYear + 1, currentYear + 2]

const inputStyle = {
  width: '100%', padding: '10px 14px', boxSizing: 'border-box',
  background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
  borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
  fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none',
}

const labelStyle = {
  display: 'block', fontSize: '12px', fontWeight: '600',
  color: 'var(--text-muted)', marginBottom: '6px',
}

export function GroupPage() {
  usePageMeta({
    title: 'Group Access for Residency Programs — RadiologyStack',
    description: 'Buy RadiologyStack access for your entire radiology residency program. Group discounts available for 3+ residents.',
    canonical: 'https://radiologystack.com/group',
  })

  const [form, setForm] = useState({
    programName: '',
    institution: '',
    numSeats: 10,
    startYear: currentYear,
    contactName: '',
    contactEmail: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const set = (field, value) => setForm(f => ({ ...f, [field]: value }))

  const numSeats = Math.max(3, parseInt(form.numSeats) || 3)
  const tier = getTier(numSeats)
  const pricePerSeatCents = getPricePerSeat(numSeats)
  const totalCents = pricePerSeatCents * numSeats
  const fmt = (cents) => `$${(cents / 100).toFixed(0)}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    if (numSeats < 3) { setError('Minimum 3 seats for group purchase.'); return }

    setLoading(true)
    try {
      const res = await fetch('/api/create-group-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          programName: form.programName.trim(),
          institution: form.institution.trim(),
          numSeats,
          startYear: form.startYear,
          contactName: form.contactName.trim(),
          contactEmail: form.contactEmail.trim(),
        }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Something went wrong')
      window.location.href = json.url
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '5px 14px', borderRadius: '999px',
            background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.25)',
            fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '16px',
          }}>
            🏥 For Residency Programs
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 5vw, 38px)',
            fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Group Access for Your Program
          </h1>
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '540px' }}>
            Give your entire cohort access to RadiologyStack. Fill in the details below,
            pay once, and every resident receives their own access code instantly.
          </p>
        </div>

        {/* Discount tiers */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: '32px',
        }}>
          <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Group Discount Tiers (12-Month Access, per resident)
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {TIERS.map(t => (
              <div
                key={t.min}
                style={{
                  flex: 1, minWidth: '140px', padding: '14px 16px',
                  background: tier && tier.min === t.min ? 'rgba(34,211,238,0.08)' : 'var(--bg-elevated)',
                  border: `1px solid ${tier && tier.min === t.min ? 'rgba(34,211,238,0.4)' : 'var(--border-subtle)'}`,
                  borderRadius: 'var(--radius-md)', transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {t.max === Infinity ? `${t.min}+ seats` : `${t.min}–${t.max} seats`}
                </div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '800',
                  color: tier && tier.min === t.min ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}>
                  {fmt(Math.round(BASE_PRICE_CENTS * (1 - t.discount)))}
                  <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-muted)', marginLeft: '3px' }}>/resident</span>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--accent-emerald)', fontWeight: '600', marginTop: '2px' }}>
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={labelStyle}>Program Name *</label>
              <input
                type="text"
                value={form.programName}
                onChange={e => set('programName', e.target.value)}
                placeholder="e.g. Diagnostic Radiology Residency"
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Institution / Hospital *</label>
              <input
                type="text"
                value={form.institution}
                onChange={e => set('institution', e.target.value)}
                placeholder="e.g. Toronto General Hospital"
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Number of Residents *</label>
              <input
                type="number"
                value={form.numSeats}
                onChange={e => set('numSeats', parseInt(e.target.value) || 3)}
                min="3"
                max="200"
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Residency Start Year</label>
              <select
                value={form.startYear}
                onChange={e => set('startYear', parseInt(e.target.value))}
                style={inputStyle}
              >
                {START_YEARS.map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Your Name *</label>
              <input
                type="text"
                value={form.contactName}
                onChange={e => set('contactName', e.target.value)}
                placeholder="Program Director / Coordinator"
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Your Email *</label>
              <input
                type="email"
                value={form.contactEmail}
                onChange={e => set('contactEmail', e.target.value)}
                placeholder="you@hospital.com"
                required
                style={inputStyle}
              />
            </div>
          </div>

          {/* Live quote */}
          <div style={{
            background: tier
              ? 'linear-gradient(135deg, rgba(34,211,238,0.07), rgba(59,130,246,0.07))'
              : 'var(--bg-elevated)',
            border: `1px solid ${tier ? 'rgba(34,211,238,0.3)' : 'var(--border-subtle)'}`,
            borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {numSeats} resident{numSeats !== 1 ? 's' : ''} × {fmt(pricePerSeatCents)}/seat
                  {tier && <span style={{ color: 'var(--accent-emerald)', marginLeft: '8px', fontWeight: '600' }}>({tier.label})</span>}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  12-month access · each resident gets their own code
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800',
                  color: tier ? 'var(--accent-cyan)' : 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}>
                  {fmt(totalCents)}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>one-time · USD</div>
              </div>
            </div>
          </div>

          {error && (
            <div style={{
              padding: '12px 16px', background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.25)', borderRadius: 'var(--radius-md)',
              fontSize: '14px', color: 'var(--accent-rose)', marginBottom: '16px',
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || numSeats < 3}
            style={{
              width: '100%', padding: '14px',
              background: loading ? 'var(--bg-elevated)' : 'var(--accent-cyan)',
              border: 'none', borderRadius: 'var(--radius-md)',
              color: loading ? 'var(--text-muted)' : 'var(--bg-primary)',
              fontSize: '16px', fontWeight: '700',
              cursor: loading || numSeats < 3 ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--font-display)',
              transition: 'all var(--transition)',
              opacity: numSeats < 3 ? 0.5 : 1,
            }}
          >
            {loading ? 'Redirecting to checkout…' : `Purchase Group Access — ${fmt(totalCents)} →`}
          </button>

          <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Secure payment via Stripe · One-time payment · Each resident redeems their own access code
          </p>
        </form>

        {/* FAQ */}
        <div style={{
          marginTop: '48px', paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '20px' }}>
            How it works
          </h2>
          {[
            ['You pay once for all seats', 'Enter your program details, choose your seat count, and complete checkout with a single card payment.'],
            ['Each resident gets a unique code', 'After payment, you\'ll see all the access codes immediately — one per resident. Each code is redeemed independently at radiologystack.com/redeem.'],
            ['Individual progress, not shared', 'Every resident has their own account with their own study progress, flagged cards, and streak. Nothing is shared between accounts.'],
            ['Questions?', 'Email us at radiologystack@gmail.com — we\'re happy to help with invoicing, custom seat counts, or anything else.'],
          ].map(([q, a]) => (
            <div key={q} style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>{q}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
