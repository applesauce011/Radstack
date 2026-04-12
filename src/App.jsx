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

// ── Route guards ─────────────────────────────────────────────
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

export default function App() {
  const { setSessionUser, setLoading } = useAuthStore()
  const { loadForUser } = useProgressStore()

  useEffect(() => {
    // We rely solely on onAuthStateChange — NOT getSession().
    //
    // Why: getSession() reads from localStorage before the Supabase client has
    // loaded the JWT into memory. Any Supabase request made during that window
    // goes out with the anon key instead of the user JWT, so RLS silently blocks
    // both SELECT (returns empty) and INSERT (writes nothing).
    //
    // onAuthStateChange fires INITIAL_SESSION only after the client has loaded
    // and refreshed the session from storage, so the JWT is guaranteed valid by
    // the time loadForUser (and any subsequent writes) run.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSessionUser(session?.user ?? null)

        if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
          await loadForUser(session?.user?.id ?? null)
          setLoading(false)
        } else if (event === 'SIGNED_OUT') {
          loadForUser(null)
        }
        // TOKEN_REFRESHED: identity already updated via setSessionUser; no reload needed.
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const defaultDeck = SUBSPECIALTIES[0]?.id || ''

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login"    element={<RedirectIfAuth><LoginPage /></RedirectIfAuth>} />
      <Route path="/register" element={<RedirectIfAuth><RegisterPage /></RedirectIfAuth>} />
      <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
      <Route path="/decks" element={<Navigate to={`/decks/${defaultDeck}`} replace />} />
      <Route path="/decks/:subspecialtyId" element={<DecksPage />} />
      <Route path="/study" element={<StudyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
