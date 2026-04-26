import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { SUBSPECIALTIES, getPremiumCardCount } from '../data/index'
import { Navbar } from '../components/layout/Navbar'
import { usePageMeta } from '../hooks/usePageMeta'

function StatPill({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '32px',
        fontWeight: '800', color: 'var(--accent-cyan)',
        letterSpacing: '-0.03em',
      }}>{value}</div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{label}</div>
    </div>
  )
}

function SubspecialtyPill({ sub }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '8px 16px', borderRadius: '999px',
      background: sub.colorDim,
      border: `1px solid ${sub.color}30`,
      fontSize: '14px', fontWeight: '500', color: sub.color,
      whiteSpace: 'nowrap',
    }}>
      <span>{sub.icon}</span>
      {sub.label}
    </div>
  )
}

function PricingSection({ onSelect }) {
  const plans = [
    {
      label: '3 Months',
      price: '$49',
      highlight: false,
      badge: null,
      features: ['Full access for 90 days', 'All 12 subspecialties', 'Progress tracking'],
    },
    {
      label: '12 Months',
      price: '$99',
      highlight: true,
      badge: 'Most Popular',
      features: ['Full access for 1 year', 'All 12 subspecialties', 'Best value for residency'],
    },
    {
      label: 'Lifetime',
      price: '$149',
      highlight: false,
      badge: null,
      features: ['Permanent access', 'All future content', 'Never pay again'],
    },
  ]

  return (
    <section style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px 80px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          Simple, one-time pricing
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
          No subscriptions. No auto-renewal. Pay once, study at your own pace.
        </p>
      </div>

      <div style={{
        display: 'flex', gap: '16px', flexWrap: 'wrap',
        justifyContent: 'center', alignItems: 'stretch',
        marginBottom: '28px',
      }}>
        {plans.map(plan => (
          <div
            key={plan.label}
            style={{
              flex: 1, minWidth: '220px', maxWidth: '280px',
              padding: '28px 24px',
              background: plan.highlight
                ? 'linear-gradient(135deg, rgba(34,211,238,0.07), rgba(59,130,246,0.07))'
                : 'var(--bg-card)',
              border: `1px solid ${plan.highlight ? 'rgba(34,211,238,0.35)' : 'var(--border-subtle)'}`,
              borderRadius: 'var(--radius-xl)',
              display: 'flex', flexDirection: 'column',
              position: 'relative',
            }}
          >
            {plan.badge && (
              <div style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                color: '#fff', fontSize: '10px', fontWeight: '700', letterSpacing: '0.06em',
                textTransform: 'uppercase', padding: '3px 12px', borderRadius: '999px',
                whiteSpace: 'nowrap',
              }}>{plan.badge}</div>
            )}
            <div style={{
              fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)', marginBottom: '8px',
            }}>{plan.label}</div>
            <div style={{ marginBottom: '20px' }}>
              <span style={{
                fontSize: '36px', fontWeight: '800',
                color: plan.highlight ? 'var(--accent-cyan)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)', letterSpacing: '-0.03em',
              }}>{plan.price}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', marginLeft: '4px' }}>one-time</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', flex: 1 }}>
              {plan.features.map(f => (
                <li key={f} style={{
                  display: 'flex', gap: '8px', fontSize: '13px',
                  color: 'var(--text-secondary)', marginBottom: '8px',
                }}>
                  <span style={{ color: 'var(--accent-cyan)', flexShrink: 0 }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <button
              onClick={onSelect}
              style={{
                width: '100%', padding: '11px',
                background: plan.highlight ? 'var(--accent-cyan)' : 'var(--bg-elevated)',
                border: plan.highlight ? 'none' : '1px solid var(--border-default)',
                color: plan.highlight ? 'var(--bg-primary)' : 'var(--text-primary)',
                borderRadius: 'var(--radius-md)', fontSize: '14px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
              }}
            >
              Get Access →
            </button>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)' }}>
        ✓ Secure payment via Stripe &nbsp;·&nbsp; ✓ No auto-renewal &nbsp;·&nbsp; ✓ Free preview always available
      </div>
    </section>
  )
}

export function LandingPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

  usePageMeta({
    title: 'RadiologyStack — Radiology Flashcards for FRCPC & ABR Board Exam Prep',
    description: 'High-yield radiology flashcards for Canadian Royal College (FRCPC) and ABR board exam prep. 1000+ cards across 12 subspecialties — neuro, chest, MSK, abdominal, and more. Free preview available.',
    canonical: 'https://radiologystack.com/',
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        maxWidth: '900px', margin: '0 auto', padding: '80px 24px 60px',
        textAlign: 'center',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', borderRadius: '999px',
          background: 'var(--accent-cyan-dim)', border: '1px solid rgba(34,211,238,0.25)',
          fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--accent-cyan)',
          marginBottom: '28px',
        }}>
          <span>🎓</span> Royal College · ABR Prep
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 64px)',
          fontWeight: '800', lineHeight: '1.1', letterSpacing: '-0.03em',
          color: 'var(--text-primary)', marginBottom: '20px',
        }}>
          Radiology flashcards<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>built for the boards</span>
        </h1>

        <p style={{
          fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.65',
          maxWidth: '560px', margin: '0 auto 40px',
        }}>
          High-yield flashcards covering all radiology subspecialties. Designed for Canadian Royal College and ABR exam prep.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate(isAuthenticated ? '/dashboard' : '/decks/neuro')}
            style={{
              padding: '14px 32px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-cyan)', border: 'none',
              color: 'var(--bg-primary)', fontSize: '16px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em',
              boxShadow: '0 0 24px rgba(34,211,238,0.3)',
              transition: 'all var(--transition)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            {isAuthenticated ? 'Go to Dashboard →' : 'Try Free →'}
          </button>
          <button
            onClick={() => navigate('/pricing')}
            style={{
              padding: '14px 32px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
              color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              transition: 'all var(--transition)',
            }}
          >
            View Pricing
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center',
          marginTop: '60px', flexWrap: 'wrap',
        }}>
          <StatPill value={SUBSPECIALTIES.length} label="Subspecialties" />
          <StatPill value={getPremiumCardCount() + '+'} label="Flashcards" />
          <StatPill value="2" label="Exams covered" />
        </div>

      </section>

      {/* Subspecialties row */}
      <section style={{ padding: '0 24px 60px', overflow: 'hidden' }}>
        <div style={{
          display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap',
          maxWidth: '800px', margin: '0 auto',
        }}>
          {SUBSPECIALTIES.map(sub => (
            <SubspecialtyPill key={sub.id} sub={sub} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 60px' }}>
        <p style={{
          textAlign: 'center', fontSize: '13px', color: 'var(--text-muted)',
          letterSpacing: '0.01em', marginBottom: '24px',
        }}>
          Trusted by radiology residents across Canada and the US
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {[
            {
              quote: 'I was struggling to keep up with MSK and neuro. RadiologyStack\'s high-yield cards helped me focus on what actually shows up on the boards. Passed my RC exam first try.',
              initials: 'A.K.',
              role: 'Radiology Resident',
              location: 'Toronto, Canada',
            },
            {
              quote: 'Way better than building Anki decks from scratch. Everything is organized by subspecialty and tied to Radiopaedia — exactly how I think about cases.',
              initials: 'M.R.',
              role: 'Radiology Resident',
              location: 'Seattle, WA',
            },
            {
              quote: 'I used RadiologyStack throughout residency to prep for the boards. The structured format made it easy to stay consistent even during busy rotations — it gave me real confidence going into exam day.',
              initials: 'S.L.',
              role: 'Radiology Fellow',
              location: 'New York, NY',
            },
          ].map(t => (
            <div key={t.initials} style={{
              padding: '24px', background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}>
              <p style={{
                fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)',
                fontStyle: 'italic', margin: 0, flex: 1,
              }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: '700', color: 'var(--bg-primary)',
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {t.role}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Overview */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 32px)',
            fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
            marginBottom: '12px',
          }}>
            Everything the exams test
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15px', maxWidth: '520px', margin: '0 auto' }}>
            Built specifically for the Royal College (FRCPC) and ABR written boards. Every card is mapped to high-yield exam objectives.
          </p>
        </div>

        {/* Exam badges */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
          {[
            {
              label: 'Royal College FRCPC',
              desc: 'Aligned with the Royal College Diagnostic Radiology objectives. Covers all 12 subspecialties tested on the written and oral exams.',
              color: '#8B5CF6',
              colorDim: 'rgba(139,92,246,0.1)',
              icon: '🍁',
            },
            {
              label: 'ABR Core & Certifying',
              desc: 'Covers ABR Core Exam physics, anatomy, and clinical content, plus high-yield topics for the Certifying Exam.',
              color: '#3B82F6',
              colorDim: 'rgba(59,130,246,0.1)',
              icon: '🦅',
            },
          ].map(e => (
            <div key={e.label} style={{
              flex: 1, minWidth: '260px', maxWidth: '400px',
              padding: '28px 24px',
              background: e.colorDim,
              border: `1px solid ${e.color}30`,
              borderRadius: 'var(--radius-xl)',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{e.icon}</div>
              <div style={{
                fontSize: '15px', fontWeight: '700',
                color: e.color, fontFamily: 'var(--font-display)', marginBottom: '10px',
              }}>{e.label}</div>
              <p style={{ fontSize: '14px', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
                {e.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Feature grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {[
            {
              icon: '💡',
              title: 'High-yield key facts',
              desc: 'Each card surfaces the single most testable fact — exactly what you need to know for boards.',
            },
            {
              icon: '📊',
              title: 'Track your progress',
              desc: 'Mark cards as Got It or Flagged. Study only what you need. Never lose your progress.',
            },
            {
              icon: '🔀',
              title: 'Smart study modes',
              desc: 'Study full decks, flagged cards only, or unseen cards. Shuffle anytime.',
            },
            {
              icon: '📱',
              title: 'Works everywhere',
              desc: 'Optimized for laptop, iPad, and iPhone. Study on rounds, at home, or on the go.',
            },
            {
              icon: '🔗',
              title: 'Radiopaedia linked',
              desc: 'Every card links to the relevant Radiopaedia article for deeper reading.',
            },
            {
              icon: '🧪',
              title: 'Physics & anatomy',
              desc: 'Dedicated decks for imaging physics and anatomy — the sections most residents under-prepare.',
            },
          ].map(f => (
            <div key={f.title} style={{
              padding: '24px', background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)',
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{f.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)', fontSize: '16px',
                fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px',
              }}>{f.title}</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-muted)' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing section */}
      <PricingSection onSelect={() => navigate('/pricing')} />

      {/* CTA */}
      {!isAuthenticated && (
        <section style={{
          maxWidth: '600px', margin: '0 auto', padding: '0 24px 80px',
          textAlign: 'center',
        }}>
          <div style={{
            padding: '48px', background: 'var(--bg-card)',
            border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)',
            backgroundImage: 'radial-gradient(ellipse at top, rgba(34,211,238,0.05) 0%, transparent 60%)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: '28px',
              fontWeight: '800', color: 'var(--text-primary)', marginBottom: '12px',
            }}>
              Start with the free preview
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '8px', fontSize: '15px' }}>
              Try a free deck from every subspecialty — no account required.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '28px', fontSize: '14px' }}>
              Create a free account to save progress. Go premium to unlock every deck across all 12 subspecialties.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/decks')}
                style={{
                  padding: '13px 28px', borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-cyan)', border: 'none',
                  color: 'var(--bg-primary)', fontSize: '15px', fontWeight: '700',
                  cursor: 'pointer', fontFamily: 'var(--font-display)',
                  boxShadow: '0 0 24px rgba(34,211,238,0.25)',
                }}
              >
                Try Free Preview →
              </button>
              <button
                onClick={() => navigate('/pricing')}
                style={{
                  padding: '13px 28px', borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}
              >
                See Pricing
              </button>
            </div>
            <p style={{ marginTop: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
              Buying for your program?{' '}
              <button
                onClick={() => navigate('/group')}
                style={{
                  background: 'none', border: 'none', color: 'var(--accent-cyan)',
                  cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', fontWeight: '600',
                  padding: 0,
                }}
              >
                Group discounts available →
              </button>
            </p>
          </div>
        </section>
      )}

    </div>
  )
}
