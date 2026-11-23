import rawContent from './content.raw.txt?raw'
import { parseLibraryRaw } from './parseLibrary'

// Parsed once at module load — the content is static, so there is no
// need to re-parse on every render.
export const LIBRARY_GROUPS = parseLibraryRaw(rawContent)

const ARTICLES_BY_SLUG = new Map()
for (const group of LIBRARY_GROUPS) {
  for (const section of group.sections) {
    for (const article of section.articles) {
      ARTICLES_BY_SLUG.set(article.slug, article)
    }
  }
}

export const LIBRARY_ARTICLES = Array.from(ARTICLES_BY_SLUG.values())

export function getArticleBySlug(slug) {
  return ARTICLES_BY_SLUG.get(slug) ?? null
}

export function getArticleCount() {
  return LIBRARY_ARTICLES.length
}
