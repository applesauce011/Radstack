// This flag is purely cosmetic (see PricingPage.jsx) — it only controls
// whether the welcome-discount banner is shown, never whether a discount is
// actually applied, which api/create-checkout.js always re-verifies server-side.
export const PRICING_SEEN_KEY = 'radstack-pricing-seen'
