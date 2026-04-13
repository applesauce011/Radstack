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

function RequireAuth({ children }) {
  const { isAuthenticated, isLoading } = useAuthStore()
  if (isLoading) return <AppLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}

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
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        // Always read from getState() inside async callbacks to avoid
        // capturing stale closure references.
        const { _setUser, _doneLoading } = useAuthStore.getState()
        const { loadForUser, isSynced }  = useProgressStore.getState()
        const user = session?.user ?? null

        // ── Signed out ──────────────────────────────────────────
        // Covers both explicit logout and automatic session expiry.
        if (event === 'SIGNED_OUT') {
          _setUser(null)
          await loadForUser(null)
          return
        }

        // ── New session (initial page load or fresh sign-in) ────
        // _setUser keeps isLoading:true while loadForUser runs so
        // RequireAuth shows the AppLoader instead of flashing to /login.
        if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
          _setUser(user)
          try {
            await loadForUser(user?.id ?? null)
          } finally {
            // Always unblock the app, even if loadForUser threw.
            _doneLoading()
          }
          return
        }

        // ── Token refreshed ─────────────────────────────────────
        // The access token (~1 h TTL) was silently refreshed.
        // This can also fire on app open when the stored token was
        // expired — in that case INITIAL_SESSION may have run with
        // the old token and RLS silently blocked the DB queries,
        // leaving isSynced:false with empty progress.
        // We reload progress here to recover from that race.
        if (event === 'TOKEN_REFRESHED') {
          _setUser(user)
          const currentlySynced = useProgressStore.getState().isSynced
          if (user && !currentlySynced) {
            await loadForUser(user.id)
          }
          return
        }

        // ── User profile updated ────────────────────────────────
        if (event === 'USER_UPDATED') {
          _setUser(user)
          return
        }
      }
    )

    return () => subscription.unsubscribe()
  }, []) // empty array — subscription is set up once, never needs to re-run

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
