// ============================================================
// Active site-wide promo config.
//
// Flip `enabled` to turn the promo off early; it also turns itself
// off automatically once `endsAt` passes. Shared by the homepage
// banner (src/components/layout/PromoBanner.jsx) and the checkout
// API (api/create-checkout.js), so keep this file free of
// browser-only globals (no `import.meta`, no `window`) — it runs
// in the Vercel serverless function too.
// ============================================================

export const ACTIVE_PROMO = {
  enabled: true,
  code: 'BLACKFRIDAY2026',
  label: 'Black Friday',
  percentOff: 40,
  // Cyber Monday 2026, end of day Eastern time (UTC-5).
  endsAt: '2026-12-01T04:59:59Z',
}

export function isPromoActive() {
  return ACTIVE_PROMO.enabled && Date.now() < new Date(ACTIVE_PROMO.endsAt).getTime()
}
