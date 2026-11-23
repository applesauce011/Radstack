import React from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { Navbar } from '../../components/layout/Navbar'
import { usePageMeta } from '../../hooks/usePageMeta'
import { LibraryBlocks } from '../../components/library/LibraryBlocks'
import { getArticleBySlug } from '../../data/library'
import { LIBRARY_DISCLAIMER_SHORT } from '../../data/library/disclaimer'

export function LibraryArticlePage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const article = getArticleBySlug(slug)

  // usePageMeta must run unconditionally (hooks can't be called after an
  // early return) — guard the values it reads instead.
  usePageMeta({
    title: article ? `${article.title} | RadiologyStack for Med Students` : 'Article not found | RadiologyStack',
    description: article?.dek,
    canonical: article ? `https://radiologystack.com/medstudents/library/${article.slug}` : undefined,
  })

  if (!article) {
    return <Navigate to="/medstudents/library" replace />
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />

      <article style={{ maxWidth: '680px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <button
          type="button"
          onClick={() => navigate('/medstudents/library')}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '13px', fontFamily: 'var(--font-body)',
            padding: 0, marginBottom: '20px',
          }}
        >
          ← Back to Library
        </button>

        <div style={{
          fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'var(--accent-amber)', marginBottom: '10px',
        }}>
          {article.groupLabel} · {article.sectionLabel}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(26px, 4vw, 38px)',
          fontWeight: '800', color: 'var(--text-primary)', letterSpacing: '-0.02em',
          lineHeight: '1.15', marginBottom: '14px',
        }}>
          {article.title}
        </h1>

        <p style={{ fontSize: '16px', lineHeight: '1.65', color: 'var(--text-secondary)', marginBottom: '36px' }}>
          {article.dek}
        </p>

        <LibraryBlocks blocks={article.blocks} />

        <p style={{
          marginTop: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)',
          fontSize: '12px', lineHeight: '1.6', color: 'var(--text-muted)',
        }}>
          {LIBRARY_DISCLAIMER_SHORT}
        </p>
      </article>
    </div>
  )
}
