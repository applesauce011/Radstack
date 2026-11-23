import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { usePageMeta } from '../../hooks/usePageMeta'
import { LIBRARY_GROUPS, getArticleCount } from '../../data/library'
import { LIBRARY_DISCLAIMER_FULL } from '../../data/library/disclaimer'

function groupAnchor(groupId) {
  return `group-${groupId}`
}

export function LibraryIndexPage() {
  const navigate = useNavigate()

  usePageMeta({
    title: `Radiology Library for Med Students (${getArticleCount()} Free Articles) | RadiologyStack`,
    description: 'Free radiology articles for medical students: imaging physics, contrast safety, cross-sectional anatomy, ordering and communicating, and pre-rotation prep — built for clerkships, shelf exams, and USMLE.',
    canonical: 'https://radiologystack.com/medstudents/library',
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px 24px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 40px)',
          fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
          marginBottom: '12px',
        }}>
          The Library
        </h1>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
          {getArticleCount()} free articles covering what every med student needs for clerkships, shelf exams, and USMLE — plus the deeper dives for anyone considering a radiology elective.
        </p>

        <div style={{
          marginTop: '20px',
          background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)', padding: '14px 16px',
        }}>
          <p style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--text-muted)', margin: 0 }}>
            {LIBRARY_DISCLAIMER_FULL}
          </p>
        </div>

        {/* Group quick-jump chips */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
          {LIBRARY_GROUPS.map(group => (
            <a
              key={group.id}
              href={`#${groupAnchor(group.id)}`}
              style={{
                padding: '6px 14px', borderRadius: '999px',
                background: 'var(--accent-amber-dim)', border: '1px solid rgba(245,158,11,0.3)',
                fontSize: '13px', fontWeight: '600', color: 'var(--accent-amber)',
                textDecoration: 'none', whiteSpace: 'nowrap',
              }}
            >
              {group.label}
            </a>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '16px 24px 80px' }}>
        {LIBRARY_GROUPS.map(group => (
          <div key={group.id} id={groupAnchor(group.id)} style={{ marginBottom: '48px', scrollMarginTop: '80px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: '800',
              color: 'var(--accent-amber)', letterSpacing: '-0.01em', marginBottom: '20px',
            }}>
              {group.label}
            </h2>

            {group.sections.map(section => (
              <div key={section.id} style={{ marginBottom: '28px' }}>
                <h3 style={{
                  fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px',
                }}>
                  {section.label}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                  {section.dek}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {section.articles.map(article => (
                    <button
                      key={article.slug}
                      type="button"
                      onClick={() => navigate(`/medstudents/library/${article.slug}`)}
                      style={{
                        display: 'block', width: '100%', textAlign: 'left',
                        background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)', padding: '14px 16px',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'}
                      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
                    >
                      <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {article.title}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {article.dek}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  )
}
