import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ─────────────────────────────────────────────────────────────
// Subscription Store
//
// Mirrors the pattern of authStore.js exactly.
// State is driven externally from App.jsx's onAuthStateChange
// handler — this store never subscribes to Supabase events itself.
//
// hasAnatomyAccess: true when the user can study anatomy decks.
//   Granted by admin only (has_anatomy_access=true on subscription row).
// ─────────────────────────────────────────────────────────────

function isAccessActive(sub) {
  if (!sub) return false
  if (sub.status === 'lifetime') return true
  // Active or canceled-but-still-within-the-paid-period: both depend on
  // current_period_end actually being in the future. One-time-payment plans
  // are written with status 'active' at purchase and never revisited, so
  // this date check is the only thing that ever expires them.
  if ((sub.status === 'active' || sub.status === 'canceled') && sub.current_period_end) {
    return new Date(sub.current_period_end) > new Date()
  }
  return false
}

function isExpiredAccess(sub) {
  if (!sub) return false // never subscribed — not "expired"
  if (sub.status === 'lifetime') return false
  if (sub.status === 'active' || sub.status === 'canceled') return !isAccessActive(sub)
  return false
}

function deriveAnatomyAccess(sub) {
  if (!sub) return false
  return sub.has_anatomy_access === true
}

export const useSubscriptionStore = create((set, get) => ({
  subscription:     null,   // raw row from DB, or null
  isLoaded:         false,  // true once we've attempted a fetch for this user
  hasAccess:        false,  // true if user has an active paid subscription
  hasAnatomyAccess: false,  // true if user can study anatomy decks
  isExpired:        false,  // true if user subscribed before but their plan has lapsed
  simulated:        false,  // true while a dev-only simulated state is active (see simulateExpired)

  // Called from App.jsx after auth resolves for a user.
  // Passing null clears state (used on logout).
  loadSubscription: async (userId) => {
    if (!userId) {
      set({ subscription: null, isLoaded: true, hasAccess: false, hasAnatomyAccess: false, isExpired: false, simulated: false })
      return
    }

    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (error) {
      console.error('[subscription] load error:', error.message)
      set({ subscription: null, isLoaded: true, hasAccess: false, hasAnatomyAccess: false, isExpired: false, simulated: false })
      return
    }

    set({
      subscription:     data,
      isLoaded:         true,
      hasAccess:        isAccessActive(data),
      hasAnatomyAccess: deriveAnatomyAccess(data),
      isExpired:        isExpiredAccess(data),
      simulated:        false,
    })
  },

  // Re-fetch after returning from Stripe Checkout or after code redemption,
  // and also used to discard a simulated state (see simulateExpired below).
  refresh: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    const userId = session?.user?.id
    if (!userId) return
    await get().loadSubscription(userId)
  },

  // Optimistic clear on logout (before async resolves)
  clear: () => set({ subscription: null, isLoaded: false, hasAccess: false, hasAnatomyAccess: false, isExpired: false, simulated: false }),

  // ── Dev-only testing helper (never used in production) ──────────────
  // Overrides local state only — never writes to Supabase — so you can
  // preview the expired → redirect → resubscribe flow without hand-editing
  // a real row. Call restoreReal() (or refresh()) to discard it.
  simulateExpired: () => {
    const real = get().subscription
    const fakePast = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
    const fakeSub = real
      ? { ...real, status: 'active', current_period_end: fakePast }
      : { user_id: null, status: 'active', plan_type: '3month', current_period_end: fakePast, has_anatomy_access: false }
    set({ subscription: fakeSub, hasAccess: false, isExpired: true, hasAnatomyAccess: false, simulated: true })
  },
  restoreReal: () => get().refresh(),
}))
