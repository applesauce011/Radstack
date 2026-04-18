import { useEffect } from 'react'

export function usePageMeta({ title, description, canonical }) {
  useEffect(() => {
    if (title) document.title = title

    const descEl = document.querySelector('meta[name="description"]')
    if (description && descEl) descEl.setAttribute('content', description)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (title && ogTitle) ogTitle.setAttribute('content', title)

    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (description && ogDesc) ogDesc.setAttribute('content', description)

    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (canonical && ogUrl) ogUrl.setAttribute('content', canonical)

    const canonicalEl = document.querySelector('link[rel="canonical"]')
    if (canonical && canonicalEl) canonicalEl.setAttribute('href', canonical)
  }, [title, description, canonical])
}
