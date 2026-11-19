// Google Ads conversion tracking (AW-981487661).
//
// Fires the "purchase" conversion exactly once per completed Stripe
// Checkout session. `transactionId` (the Stripe session_id) is passed
// to gtag so Google Ads can dedupe server-side, and is also used as a
// local dedupe key so a page refresh, the StrictMode double-render, or
// the success-page poll retry never reports the same sale twice.
const CONVERSION_ID = 'AW-18583310008'

const PURCHASE_CONVERSION_LABEL = 'MGZiCJmSiLsdELidm51F'

const FIRED_KEY_PREFIX = 'radstack-gads-conversion-'

export function fireGoogleAdsPurchaseConversion({ transactionId, value, currency = 'USD' }) {
  if (!transactionId) return

  if (!PURCHASE_CONVERSION_LABEL) {
    console.warn('[google-ads] PURCHASE_CONVERSION_LABEL is not set — conversion not sent. See src/utils/googleAds.js')
    return
  }

  const dedupeKey = FIRED_KEY_PREFIX + transactionId
  try {
    if (localStorage.getItem(dedupeKey)) return
  } catch {}

  if (typeof window.gtag !== 'function') return // blocked by ad blocker, or script failed to load

  window.gtag('event', 'conversion', {
    send_to: `${CONVERSION_ID}/${PURCHASE_CONVERSION_LABEL}`,
    value,
    currency,
    transaction_id: transactionId,
  })

  try { localStorage.setItem(dedupeKey, '1') } catch {}
}
