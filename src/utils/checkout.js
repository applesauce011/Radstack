import { supabase } from '../lib/supabase'
import { getPriceId } from '../data/plans'

// Remembers which plan a logged-out visitor picked so that once they
// finish creating an account (or log in instead), we can send them
// straight to Stripe Checkout instead of back to the pricing cards.
const PENDING_PLAN_KEY = 'radstack-pending-plan'

export function storePendingPlan(planId) {
  try { sessionStorage.setItem(PENDING_PLAN_KEY, planId) } catch {}
}

export function peekPendingPlanId() {
  try { return sessionStorage.getItem(PENDING_PLAN_KEY) } catch { return null }
}

export function clearPendingPlan() {
  try { sessionStorage.removeItem(PENDING_PLAN_KEY) } catch {}
}

// Creates a Stripe Checkout session for `plan` and redirects the browser
// to it. Throws on failure; on success the page navigates away.
// `applyWelcomeDiscount` is only a hint — api/create-checkout.js always
// re-verifies eligibility server-side before actually applying anything.
export async function startCheckout(plan, { applyWelcomeDiscount = false } = {}) {
  const priceId = getPriceId(plan.priceEnvKey)
  if (!priceId) throw new Error('Pricing is not yet configured. Please try again later.')

  const { data: { session } } = await supabase.auth.getSession()
  const token = session?.access_token
  if (!token) throw new Error('Please sign in to continue.')

  const res = await fetch('/api/create-checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ priceId, applyWelcomeDiscount }),
  })

  const json = await res.json()
  if (!res.ok) throw new Error(json.error || 'Checkout failed')

  window.location.href = json.url
}
