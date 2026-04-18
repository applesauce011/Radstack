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
//   Granted by admin (has_anatomy_access=true on subscription row)
//   or by having an active paid subscription.
// ─────────────────────────────────────────────────────────────

function isAccessActive(sub) {
  if (!sub) return false
  if (sub.status === 'lifetime') return true
  if (sub.status === 'active') return true
  // Canceled but still within the paid period
  if (sub.status === 'canceled' && sub.current_period_end) {
    return new Date(sub.current_period_end) > new Date()
  }
  return false
}

function deriveAnatomyAccess(sub) {
  if (!sub) return false
  // Admin-granted directly
  if (sub.has_anatomy_access === true) return true
  // Paid subscribers get anatomy access too
  return isAccessActive(sub)
}

export const useSubscriptionStore = create((set, get) => ({
  subscription:     null,   // raw row from DB, or null
  isLoaded:         false,  // true once we've attempted a fetch for this user
  hasAccess:        false,  // true if user has an active paid subscription
  hasAnatomyAccess: false,  // true if user can study anatomy decks

  // Called from App.jsx after auth resolves for a user.
  // Passing null clears state (used on logout).
  loadSubscription: async (userId) => {
    if (!userId) {
      set({ subscription: null, isLoaded: true, hasAccess: false, hasAnatomyAccess: false })
      return
    }

    const { data, error } = await supabase
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle()

    if (error) {
      console.error('[subscription] load error:', error.message)
      set({ subscription: null, isLoaded: true, hasAccess: false, hasAnatomyAccess: false })
      return
    }

    set({
      subscription:     data,
      isLoaded:         true,
      hasAccess:        isAccessActive(data),
      hasAnatomyAccess: deriveAnatomyAccess(data),
    })
  },

  // Re-fetch after returning from Stripe Checkout or after code redemption.
  refresh: async () => {
    const { data: { session } } = await supabase.auth.getSession()
    const userId = session?.user?.id
    if (!userId) return
    await get().loadSubscription(userId)
  },

  // Optimistic clear on logout (before async resolves)
  clear: () => set({ subscription: null, isLoaded: false, hasAccess: false, hasAnatomyAccess: false }),
}))
