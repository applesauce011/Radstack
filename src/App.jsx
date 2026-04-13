import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './lib/supabase'
import { useAuthStore } from './store/authStore'
import { useProgressStore } from './store/progressStore'
import { LandingPage } from './pages/LandingPage'
import { DashboardPage } from './pages/DashboardPage'
import { DecksPage } from './pages/DecksPage'
import { StudyPage } from './pages/StudyPage'
import { LoginPage, RegisterPage } from './components/auth/AuthForms'
import { SUBSPECIALTIES } from './data/index'

// ── Route guards ──────────────────────────────────────────────

// Shows AppLoader while the session is being determined, then
// redirects unauthenticated users to /login.
function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuthStore()
  if (isLoading) return <AppLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}

// Shows AppLoader while the session is being determined, then
// redirects authenticated users away from login/register pages.
function RedirectIfAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuthStore()
  if (isLoading) return <AppLoader />
  if (isAuthenticated) return <Navigate to="/dashboard" replace />
  return children
}

function AppLoader() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg-primary)', flexDirection: 'column', gap: '16px',
    }}>
      <div style={{
        width: '40px', height: '40px', borderRadius: '10px',
        background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '20px', fontWeight: '800', color: '#fff',
        fontFamily: 'var(--font-display)',
        animation: 'pulse 1.5s ease-in-out infinite',
      }}>R</div>
      <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Loading…</div>
    </div>
  )
}

// ── App ───────────────────────────────────────────────────────

export default function App() {
  useEffect(() => {
    // Single, authoritative subscription to Supabase auth events.
    // This is the ONLY place that mutates auth or progress state
    // in response to session changes — no other component does this.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Always read from getState() inside async callbacks to avoid
        // stale closure captures from the outer useEffect scope.
        const { _setUserPending, _resolveLoading } = useAuthStore.getState()
        const { loadForUser }                       = useProgressStore.getState()
        const user = session?.user ?? null

        // ── Signed out ──────────────────────────────────────────
        // Covers explicit logout, session expiry, and sign-out
        // triggered from another tab.
        if (event === 'SIGNED_OUT') {
          _resolveLoading(null)    // clear user + isAuthenticated, isLoading:false
          loadForUser(null)        // clear progress (non-blocking)
          return
        }

        // ── No session on initial load ──────────────────────────
        // INITIAL_SESSION with user:null means the stored token was
        // absent or invalid. Resolve immediately so the app renders.
        if (event === 'INITIAL_SESSION' && !user) {
          _resolveLoading(null)
          return
        }

        // ── Authenticated session (initial load or fresh sign-in) ─
        if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
          // Check BEFORE mutating any state, so we know whether this is
          // a genuine new login or a re-fire from a tab restore / token
          // edge case while the user is already active.
          const { isAuthenticated: alreadyAuthenticated } = useAuthStore.getState()

          if (alreadyAuthenticated) {
            // The user is already logged in. Supabase sometimes re-fires
            // SIGNED_IN on tab focus or during certain token refresh paths.
            // Don't re-run the blocking load sequence — that would:
            //   1) Set isLoading:true, locking any RequireAuth page with
            //      AppLoader for the duration of the DB fetch (Bug: infinite load).
            //   2) Reset the write queue, discarding in-flight card-state
            //      writes from the current deck (Bug: second deck not saved).
            // Instead, just update the user object and do a silent background
            // sync only if progress wasn't synced the first time.
            _resolveLoading(user)
            const { isSynced } = useProgressStore.getState()
            if (!isSynced) loadForUser(user.id)
            return
          }

          // Genuine new session — show the loading screen while progress
          // is fetched so the dashboard never renders with empty data.
          _setUserPending(user)
          try {
            await loadForUser(user.id)
          } finally {
            // Always clear the loading gate — even if loadForUser threw —
            // so the app doesn't get permanently stuck on the loader.
            _resolveLoading(user)
          }
          return
        }

        // ── Token silently refreshed (~1 h access token TTL) ────
        // Normal background event during an active session. Don't
        // show the AppLoader. Just update the user object and, if
        // progress didn't sync during the initial load (edge case:
        // RLS blocked the very first fetch with a just-expired token),
        // retry loading progress now that the token is fresh.
        if (event === 'TOKEN_REFRESHED') {
          _resolveLoading(user)    // isLoading unchanged if already false
          const { isSynced } = useProgressStore.getState()
          if (user && !isSynced) {
            loadForUser(user.id)   // background retry — non-blocking
          }
          return
        }

        // ── User profile updated ─────────────────────────────────
        // Fires when the user changes their email or password.
        // Re-parse the updated user object.
        if (event === 'USER_UPDATED') {
          _resolveLoading(user)
          return
        }
      }
    )

    return () => subscription.unsubscribe()
  }, []) // empty deps — subscription is registered once for the app lifetime

  const defaultDeck = SUBSPECIALTIES[0]?.id ?? ''

  return (
    <Routes>
      <Route path="/"          element={<LandingPage />} />
      <Route path="/login"     element={<RedirectIfAuth><LoginPage /></RedirectIfAuth>} />
      <Route path="/register"  element={<RedirectIfAuth><RegisterPage /></RedirectIfAuth>} />
      <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
      <Route path="/decks"     element={<Navigate to={`/decks/${defaultDeck}`} replace />} />
      <Route path="/decks/:subspecialtyId" element={<DecksPage />} />
      <Route path="/study"     element={<StudyPage />} />
      <Route path="*"          element={<Navigate to="/" replace />} />
    </Routes>
  )
}
