import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ─────────────────────────────────────────────────────────────
// Auth Store
//
// State machine:
//   isLoading:true  → app opened, waiting for INITIAL_SESSION
//   isLoading:false + isAuthenticated:false → no active session
//   isLoading:false + isAuthenticated:true  → session active
//
// All auth state changes are driven exclusively by the
// onAuthStateChange listener in App.jsx. The store only holds
// state and exposes actions — it never subscribes to Supabase
// events itself, preventing double-subscription bugs.
// ─────────────────────────────────────────────────────────────

function parseUser(supabaseUser) {
  if (!supabaseUser) return null
  return {
    id:    supabaseUser.id,
    email: supabaseUser.email,
    name:  supabaseUser.user_metadata?.name
           ?? supabaseUser.email?.split('@')[0]
           ?? 'User',
  }
}

export const useAuthStore = create((set) => ({
  user:            null,
  isAuthenticated: false,
  isLoading:       true,   // true until INITIAL_SESSION resolves

  // ── Internal — called only from App.jsx ──────────────────────

  // Mark a user as authenticated and force isLoading:true so
  // RequireAuth shows AppLoader while progress is being fetched.
  // Always call _resolveLoading() after this.
  _setUserPending: (supabaseUser) => {
    set({
      user:            parseUser(supabaseUser),
      isAuthenticated: true,
      isLoading:       true,   // explicit — holds the loading screen open
    })
  },

  // Resolve the loading gate. Atomically updates the full auth
  // state and clears isLoading. Safe to call multiple times.
  _resolveLoading: (supabaseUser = null) => {
    set({
      user:            parseUser(supabaseUser),
      isAuthenticated: !!supabaseUser,
      isLoading:       false,
    })
  },

  // ── Public actions ────────────────────────────────────────────

  login: async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { success: false, error: error.message }
    // The SIGNED_IN event fires automatically and App.jsx handles
    // the rest — no extra work needed here.
    return { success: true }
  },

  register: async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },   // stored in auth.users.raw_user_meta_data
    })
    if (error) return { success: false, error: error.message }
    // Email confirmation required → data.session is null until verified.
    if (data.user && !data.session) return { success: true, needsConfirmation: true }
    // Confirmation disabled → session is live immediately.
    return { success: true }
  },

  logout: async () => {
    try {
      await supabase.auth.signOut()
      // SIGNED_OUT event in App.jsx will call _resolveLoading(null),
      // clearing the user and setting isAuthenticated:false.
    } catch (err) {
      console.warn('[auth] signOut error:', err?.message)
      // Fallback: force local clear if the API call fails.
      // The JWT will expire naturally on the server side.
      set({ user: null, isAuthenticated: false, isLoading: false })
    }
  },
}))
