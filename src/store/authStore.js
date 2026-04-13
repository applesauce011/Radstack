import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ─────────────────────────────────────────────────────────────
// Auth Store
//
// State machine:
//   isLoading:true  → app just opened, waiting for INITIAL_SESSION
//   isLoading:false + isAuthenticated:false → no session
//   isLoading:false + isAuthenticated:true  → session active
//
// The ONLY place that sets user/isAuthenticated is _setUser(),
// which is called exclusively from the onAuthStateChange listener
// in App.jsx. This guarantees the store is always in sync with
// the live Supabase session.
// ─────────────────────────────────────────────────────────────

function parseUser(supabaseUser) {
  return {
    id:    supabaseUser.id,
    email: supabaseUser.email,
    name:  supabaseUser.user_metadata?.name ?? supabaseUser.email,
  }
}

export const useAuthStore = create((set) => ({
  user:            null,
  isAuthenticated: false,
  isLoading:       true, // true until INITIAL_SESSION resolves

  // ── Internal — called only from App.jsx's auth listener ──────
  // Call with a Supabase user object to mark authenticated,
  // or null to mark signed out.
  // When a non-null user is set, isLoading stays true until
  // _doneLoading() is called (after progress finishes loading).
  _setUser: (supabaseUser) => {
    if (!supabaseUser) {
      set({ user: null, isAuthenticated: false, isLoading: false })
    } else {
      set({ user: parseUser(supabaseUser), isAuthenticated: true })
      // isLoading deliberately left as-is; App.jsx calls _doneLoading()
      // after loadForUser() completes so the app never flashes
      // an authenticated-but-empty state.
    }
  },

  // Called by App.jsx after progress has finished loading.
  _doneLoading: () => set({ isLoading: false }),

  // ── Public actions ────────────────────────────────────────────
  login: async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { success: false, error: error.message }
    // onAuthStateChange (SIGNED_IN) fires automatically and calls
    // _setUser() + loadForUser() — no extra work needed here.
    return { success: true }
  },

  register: async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } }, // stored in auth.users.raw_user_meta_data
    })
    if (error) return { success: false, error: error.message }
    // If email confirmation is ON, data.session is null until verified.
    if (data.user && !data.session) return { success: true, needsConfirmation: true }
    return { success: true }
  },

  logout: async () => {
    // Clear local state immediately for instant UI feedback.
    set({ user: null, isAuthenticated: false, isLoading: false })
    // Invalidate the server-side session.
    try {
      await supabase.auth.signOut()
    } catch (err) {
      // Not fatal — the local state is already cleared and the
      // JWT will expire naturally.
      console.warn('[auth] signOut error:', err?.message)
    }
  },
}))
