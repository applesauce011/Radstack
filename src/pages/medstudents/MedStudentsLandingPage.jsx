import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { usePageMeta } from '../../hooks/usePageMeta'
import { LIBRARY_GROUPS, getArticleCount } from '../../data/library'

function StatPill({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: '32px',
        fontWeight: '800', color: 'var(--accent-amber)',
        letterSpacing: '-0.03em',
      }}>{value}</div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{label}</div>
    </div>
  )
}

function WhatsHereCard({ title, desc, status, onClick }) {
  const live = status === 'live'
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        flex: 1, minWidth: '220px', textAlign: 'left',
        padding: '24px', borderRadius: 'var(--radius-xl)',
        background: live ? 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(16,185,129,0.05))' : 'var(--bg-card)',
        border: `1px solid ${live ? 'rgba(245,158,11,0.35)' : 'var(--border-subtle)'}`,
        cursor: 'pointer', position: 'relative',
      }}
    >
      <div style={{
        display: 'inline-block', fontSize: '10px', fontWeight: '700',
        letterSpacing: '0.06em', textTransform: 'uppercase',
        color: live ? 'var(--accent-amber)' : 'var(--text-muted)',
        background: live ? 'var(--accent-amber-dim)' : 'var(--bg-elevated)',
        padding: '3px 10px', borderRadius: '999px', marginBottom: '12px',
      }}>
        {live ? 'Live now' : 'Coming soon'}
      </div>
      <div style={{
        fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)',
        fontFamily: 'var(--font-display)', marginBottom: '8px',
      }}>
        {title}
      </div>
      <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-secondary)', margin: 0 }}>
        {desc}
      </p>
    </button>
  )
}

export function MedStudentsLandingPage() {
  const navigate = useNavigate()

  usePageMeta({
    title: 'RadiologyStack for Med Students — Free Radiology Library for Clerkships & USMLE',
    description: 'Free radiology articles built for medical students: imaging physics, contrast safety, cross-sectional anatomy, ordering and communicating, and pre-rotation prep — for clerkships, shelf exams, and USMLE Step exams.',
    canonical: 'https://radiologystack.com/medstudents',
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      {/* Hero */}
      <section style={{
        maxWidth: '900px', margin: '0 auto', padding: '80px 24px 50px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px', borderRadius: '999px',
          background: 'var(--accent-amber-dim)', border: '1px solid rgba(245,158,11,0.25)',
          fontSize: '12px', fontWeight: '600', letterSpacing: '0.06em',
          textTransform: 'uppercase', color: 'var(--accent-amber)',
          marginBottom: '28px',
        }}>
          <span>📚</span> For Medical Students
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 5.5vw, 56px)',
          fontWeight: '800', lineHeight: '1.12', letterSpacing: '-0.03em',
          color: 'var(--text-primary)', marginBottom: '20px',
        }}>
          Radiology for your<br />
          <span style={{
            background: 'linear-gradient(135deg, var(--accent-amber), var(--accent-emerald))',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>clerkship, shelf, and Step exams</span>
        </h1>

        <p style={{
          fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.65',
          maxWidth: '560px', margin: '0 auto 36px',
        }}>
          Free, plain-language radiology articles written for medical students — not residents. No login, no paywall, just what you actually need for the wards and the exam.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/medstudents/library')}
            style={{
              padding: '14px 32px', borderRadius: 'var(--radius-md)',
              background: 'var(--accent-amber)', border: 'none',
              color: 'var(--bg-primary)', fontSize: '16px', fontWeight: '700',
              cursor: 'pointer', fontFamily: 'var(--font-display)',
              letterSpacing: '-0.01em',
              boxShadow: '0 0 24px rgba(245,158,11,0.25)',
            }}
          >
            Browse the Library →
          </button>
          <button
            onClick={() => navigate('/')}
            style={{
              padding: '14px 32px', borderRadius: 'var(--radius-md)',
              background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
              color: 'var(--text-primary)', fontSize: '16px', fontWeight: '600',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
            }}
          >
            I'm a resident →
          </button>
        </div>

        <div style={{
          display: 'flex', gap: '48px', justifyContent: 'center',
          marginTop: '56px', flexWrap: 'wrap',
        }}>
          <StatPill value={getArticleCount()} label="Free articles" />
          <StatPill value={LIBRARY_GROUPS.length} label="Topic areas" />
          <StatPill value="$0" label="To read any of it" />
        </div>
      </section>

      {/* Group chips */}
      <section style={{ padding: '0 24px 56px' }}>
        <div style={{
          display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap',
          maxWidth: '800px', margin: '0 auto',
        }}>
          {LIBRARY_GROUPS.map(group => (
            <button
              key={group.id}
              type="button"
              onClick={() => navigate(`/medstudents/library#group-${group.id}`)}
              style={{
                padding: '8px 16px', borderRadius: '999px',
                background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                fontSize: '13px', fontWeight: '500', color: 'var(--text-secondary)',
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              {group.label}
            </button>
          ))}
        </div>
      </section>

      {/* What's here */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 4vw, 30px)',
            fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
            marginBottom: '10px',
          }}>
            What's here
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
            The Library is live today. The rest is on the way.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <WhatsHereCard
            title="Library"
            desc={`${getArticleCount()} free articles on physics, safety, anatomy, ordering, and reports — written for med students.`}
            status="live"
            onClick={() => navigate('/medstudents/library')}
          />
          <WhatsHereCard
            title="Question Bank"
            desc="Organ-system practice questions for shelf exams and Step 2, with explanations."
            status="soon"
            onClick={() => navigate('/medstudents/questions')}
          />
          <WhatsHereCard
            title="Cheat Sheets"
            desc="High-yield, must-know quick-reference sheets for the wards."
            status="soon"
            onClick={() => navigate('/medstudents/cheat-sheets')}
          />
        </div>
      </section>
    </div>
  )
}
