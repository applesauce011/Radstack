// Loads the review-sheet renderer (public/sheets/template/sheet.js + sheet.css)
// exactly once per page lifetime. sheet.js is a plain IIFE (window.RSheet), not
// an ES module, so it's injected as a <script> tag rather than imported.
let loadPromise = null

export function loadSheetRuntime() {
  if (window.RSheet) return Promise.resolve(window.RSheet)
  if (loadPromise) return loadPromise

  if (!document.querySelector('link[data-rs-sheet-css]')) {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/sheets/template/sheet.css'
    link.setAttribute('data-rs-sheet-css', '')
    document.head.appendChild(link)
  }

  loadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = '/sheets/template/sheet.js'
    script.onload = () => resolve(window.RSheet)
    script.onerror = () => reject(new Error('Failed to load sheet.js'))
    document.body.appendChild(script)
  })
  return loadPromise
}

let indexPromise = null

export function loadSearchIndex() {
  if (!indexPromise) {
    indexPromise = fetch('/sheets/search-index.json').then(r => r.json())
  }
  return indexPromise
}
