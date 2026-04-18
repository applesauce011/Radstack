import React, { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { supabase } from './lib/supabase'
import { useAuthStore } from './store/authStore'
import { useProgressStore } from './store/progressStore'
import { useSubscriptionStore } from './store/subscriptionStore'
import { LandingPage } from './pages/LandingPage'
import { DashboardPage } from './pages/DashboardPage'
import { DecksPage } from './pages/DecksPage'
import { StudyPage } from './pages/StudyPage'
import { PricingPage } from './pages/PricingPage'
import { SettingsPage } from './pages/SettingsPage'
import { CheckoutSuccessPage } from './pages/CheckoutSuccessPage'
import { CheckoutCancelPage } from './pages/CheckoutCancelPage'
import { TermsPage } from './pages/TermsPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { RedeemPage } from './pages/RedeemPage'
import { AdminPage } from './pages/AdminPage'
import { LoginPage, RegisterPage } from './components/auth/AuthForms'
import { SUBSPECIALTIES } from './data/index'
import { Analytics } from "@vercel/analytics/next"

// ── Scroll to top on every navigation ────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

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
    // Single, authoritative subscription to Supabase auth events.
    // This is the ONLY place that mutates auth, progress, or subscription
    // state in response to session changes.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        const { _resolveLoading } = useAuthStore.getState()
        const { loadForUser }                       = useProgressStore.getState()
        const { loadSubscription, clear: clearSub } = useSubscriptionStore.getState()
        const user = session?.user ?? null

        // ── Signed out ──────────────────────────────────────────
        if (event === 'SIGNED_OUT') {
          _resolveLoading(null)
          loadForUser(null)
          clearSub()
          return
        }

        // ── No session on initial load ──────────────────────────
        if (event === 'INITIAL_SESSION' && !user) {
          _resolveLoading(null)
          clearSub()
          return
        }

        // ── Authenticated session (initial load or fresh sign-in) ─
        if (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') {
          const { isAuthenticated: alreadyAuthenticated } = useAuthStore.getState()

          // Resolve auth state immediately so RequireAuth never blocks
          // on a loading spinner waiting for data. Data loads run in the
          // background and Zustand reactivity updates the UI when ready.
          _resolveLoading(user)

          if (!alreadyAuthenticated) {
            // Genuine new session — kick off data loads in background.
            loadForUser(user.id)
            loadSubscription(user.id)
          } else {
            // Re-fire (tab focus / token edge case) — only sync if stale.
            const { isSynced } = useProgressStore.getState()
            if (!isSynced) loadForUser(user.id)
          }
          return
        }

        // ── Token silently refreshed (~1 h access token TTL) ────
        if (event === 'TOKEN_REFRESHED') {
          _resolveLoading(user)
          const { isSynced } = useProgressStore.getState()
          if (user && !isSynced) {
            loadForUser(user.id)
          }
          return
        }

        // ── User profile updated ─────────────────────────────────
        if (event === 'USER_UPDATED') {
          _resolveLoading(user)
          return
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const defaultDeck = SUBSPECIALTIES[0]?.id ?? ''

  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/"          element={<LandingPage />} />
      <Route path="/login"     element={<RedirectIfAuth><LoginPage /></RedirectIfAuth>} />
      <Route path="/register"  element={<RedirectIfAuth><RegisterPage /></RedirectIfAuth>} />
      <Route path="/dashboard" element={<RequireAuth><DashboardPage /></RequireAuth>} />
      <Route path="/decks"     element={<Navigate to={`/decks/${defaultDeck}`} replace />} />
      <Route path="/decks/:subspecialtyId" element={<DecksPage />} />
      <Route path="/study"     element={<StudyPage />} />
      <Route path="/pricing"   element={<PricingPage />} />
      <Route path="/settings"  element={<RequireAuth><SettingsPage /></RequireAuth>} />
      <Route path="/checkout/success" element={<RequireAuth><CheckoutSuccessPage /></RequireAuth>} />
      <Route path="/checkout/cancel"  element={<CheckoutCancelPage />} />
      <Route path="/terms"     element={<TermsPage />} />
      <Route path="/privacy"   element={<PrivacyPage />} />
      <Route path="/redeem"    element={<RedeemPage />} />
      <Route path="/admin"     element={<AdminPage />} />
      <Route path="*"          element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}
