import { create } from 'zustand'
import { supabase } from '../lib/supabase'

// ============================================================
// Auth Store — backed by Supabase Auth
//
// Supabase automatically handles:
//   - Secure password hashing
//   - JWT session tokens stored in localStorage
//   - Silent token refresh
//   - Cross-device sessions (same account, any browser)
//
// The app listens to onAuthStateChange in App.jsx to keep
// this store in sync with the Supabase session at all times.
// ============================================================

export const useAuthStore = create((set) => ({
  user: null,           // { id, email, name }
  isAuthenticated: false,
  isLoading: true,      // true until the initial session check completes

  // Called by App.jsx's onAuthStateChange listener.
  // This is the single source of truth for session state.
  setSessionUser: (supabaseUser) => {
    if (!supabaseUser) {
      set({ user: null, isAuthenticated: false, isLoading: false })
      return
    }
    const user = {
      id: supabaseUser.id,
      email: supabaseUser.email,
      // name is stored in user_metadata at signup
      name: supabaseUser.user_metadata?.name || supabaseUser.email,
    }
    set({ user, isAuthenticated: true, isLoading: false })
  },

  setLoading: (isLoading) => set({ isLoading }),

  // Sign in with email + password
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) return { success: false, error: error.message }
    // setSessionUser will be called automatically via onAuthStateChange
    return { success: true }
  },

  // Create a new account — name is stored in Supabase user_metadata
  register: async (name, email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { name }, // stored in auth.users.raw_user_meta_data
      },
    })
    if (error) return { success: false, error: error.message }
    // Supabase may require email confirmation depending on your project settings.
    // If email confirmation is OFF (recommended for this app), the user is
    // signed in immediately and onAuthStateChange fires automatically.
    if (data.user && !data.session) {
      // Email confirmation is ON — user needs to verify email first
      return { success: true, needsConfirmation: true }
    }
    return { success: true }
  },

  logout: async () => {
    await supabase.auth.signOut()
    // onAuthStateChange will fire and call setSessionUser(null)
  },
}))
