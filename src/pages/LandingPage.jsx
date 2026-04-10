import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { SUBSPECIALTIES, getTotalCardCount } from '../data/index'
import { Navbar } from '../components/layout/Navbar'

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

export function LandingPage() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuthStore()

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
            onClick={() => navigate(isAuthenticated ? '/dashboard' : '/register')}
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
            {isAuthenticated ? 'Go to Dashboard →' : 'Get Started Free →'}
          </button>
          <button
            onClick={() => navigate('/decks')}
            style={{
              padding: '14px 32px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
              color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              transition: 'all var(--transition)',
            }}
          >
            Browse Decks
          </button>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center',
          marginTop: '60px', flexWrap: 'wrap',
        }}>
          <StatPill value={SUBSPECIALTIES.length} label="Subspecialties" />
          <StatPill value={getTotalCardCount() + '+'} label="Flashcards" />
          <StatPill value="2" label="Exams covered" />
        </div>
      </section>

      {/* Subspecialties row */}
      <section style={{
        padding: '0 24px 60px',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap',
          maxWidth: '800px', margin: '0 auto',
        }}>
          {SUBSPECIALTIES.map(sub => (
            <SubspecialtyPill key={sub.id} sub={sub} />
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        maxWidth: '960px', margin: '0 auto', padding: '0 24px 80px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {[
            {
              icon: '🖼️',
              title: 'Image-rich cards',
              desc: 'Every card includes real radiological images. Learn to recognize findings the way you will on exam day.',
            },
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
              Ready to study?
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '15px' }}>
              Create a free account to track progress and sync across devices.
            </p>
            <button
              onClick={() => navigate('/register')}
              style={{
                padding: '14px 32px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)', border: 'none',
                color: 'var(--bg-primary)', fontSize: '16px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
                boxShadow: '0 0 24px rgba(34,211,238,0.25)',
              }}
            >
              Create Free Account →
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-subtle)', padding: '24px',
        textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px',
      }}>
        RadStack · Built for radiology residents · Not for clinical use
      </footer>
    </div>
  )
}
