import React, { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'

export function GroupSuccessPage() {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [status, setStatus] = useState('loading')  // 'loading' | 'ready' | 'pending' | 'error'
  const [order, setOrder] = useState(null)
  const [copied, setCopied] = useState(false)
  const attemptsRef = useRef(0)

  useEffect(() => {
    if (!sessionId) { setStatus('error'); return }

    const poll = async () => {
      try {
        const res = await fetch(`/api/group-order-status?session_id=${encodeURIComponent(sessionId)}`)
        if (res.status === 404) {
          // Webhook hasn't fired yet — retry
          if (++attemptsRef.current < 10) {
            setTimeout(poll, 2000)
          } else {
            setStatus('pending')
          }
          return
        }
        if (!res.ok) { setStatus('error'); return }

        const data = await res.json()
        if (data.status === 'fulfilled' && data.codes?.length > 0) {
          setOrder(data)
          setStatus('ready')
        } else if (++attemptsRef.current < 10) {
          setTimeout(poll, 2000)
        } else {
          setStatus('pending')
        }
      } catch {
        setStatus('error')
      }
    }

    poll()
  }, [sessionId])

  const handleCopyAll = () => {
    if (!order?.codes) return
    const text = order.codes.join('\n')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>

        {status === 'loading' && (
          <>
            <div style={{
              width: '56px', height: '56px', borderRadius: '16px',
              background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px', margin: '0 auto 24px',
              animation: 'pulse 1.5s ease-in-out infinite',
            }}>R</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Generating access codes…
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
              This takes just a moment. Please don't close this tab.
            </p>
          </>
        )}

        {status === 'ready' && order && (
          <>
            <div style={{ fontSize: '56px', marginBottom: '16px' }}>🎉</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '28px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '8px',
            }}>
              Payment confirmed!
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '32px', lineHeight: '1.6' }}>
              Here are the {order.num_seats} access codes for <strong>{order.program_name}</strong>.
              Each resident redeems their code at{' '}
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>radiologystack.com/redeem</span>.
            </p>

            {/* Code list */}
            <div style={{
              background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)', padding: '20px', marginBottom: '16px',
              textAlign: 'left',
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                marginBottom: '14px',
              }}>
                <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {order.codes.length} Access Codes
                </span>
                <button
                  onClick={handleCopyAll}
                  style={{
                    padding: '6px 14px', borderRadius: 'var(--radius-sm)',
                    background: copied ? 'rgba(52,211,153,0.15)' : 'var(--bg-elevated)',
                    border: `1px solid ${copied ? 'rgba(52,211,153,0.4)' : 'var(--border-default)'}`,
                    color: copied ? 'var(--accent-emerald)' : 'var(--text-secondary)',
                    cursor: 'pointer', fontSize: '13px', fontWeight: '600',
                    fontFamily: 'var(--font-body)', transition: 'all 0.2s',
                  }}
                >
                  {copied ? '✓ Copied!' : 'Copy All'}
                </button>
              </div>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '6px',
                maxHeight: '320px', overflowY: 'auto',
              }}>
                {order.codes.map((code, i) => (
                  <div
                    key={code}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '8px 12px', background: 'var(--bg-elevated)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)', minWidth: '24px' }}>
                      {i + 1}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-display)', fontSize: '15px',
                      fontWeight: '700', letterSpacing: '0.05em', color: 'var(--text-primary)',
                      flex: 1,
                    }}>
                      {code}
                    </span>
                    <button
                      onClick={() => navigator.clipboard.writeText(code)}
                      style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: 'var(--text-muted)', fontSize: '12px',
                        fontFamily: 'var(--font-body)', padding: '2px 6px',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: 'rgba(34,211,238,0.06)', border: '1px solid rgba(34,211,238,0.2)',
              borderRadius: 'var(--radius-md)', padding: '14px 18px',
              fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6',
              textAlign: 'left',
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>To distribute:</strong> Send each resident one code.
              They create a free account at{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>radiologystack.com/register</span>
              {' '}then redeem their code at{' '}
              <span style={{ color: 'var(--accent-cyan)' }}>radiologystack.com/redeem</span>.
              Codes expire in 12 months from today.
            </div>

            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '20px' }}>
              A copy of these codes has also been saved — contact radiologystack@gmail.com if you need them resent.
            </p>
          </>
        )}

        {status === 'pending' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>✅</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Payment received!
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
              Your codes are being generated — this usually takes under a minute.
              Please refresh this page, or email{' '}
              <a href="mailto:radiologystack@gmail.com" style={{ color: 'var(--accent-cyan)' }}>
                radiologystack@gmail.com
              </a>
              {' '}with your order confirmation and we'll send them right away.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 28px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)', border: 'none',
                color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
              }}
            >
              Refresh →
            </button>
          </>
        )}

        {status === 'error' && (
          <>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>⚠️</div>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: '26px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Something went wrong
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
              Please email{' '}
              <a href="mailto:radiologystack@gmail.com" style={{ color: 'var(--accent-cyan)' }}>
                radiologystack@gmail.com
              </a>
              {' '}with your payment confirmation and we'll get your codes to you immediately.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
