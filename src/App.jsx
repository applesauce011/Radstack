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
import { AdminPage } from './pages/AdminPage'
import { StatsPage } from './pages/StatsPage'
import { DifferentialSprintPage } from './pages/DifferentialSprintPage'
import { ProceduresPage } from './pages/ProceduresPage'
import { CheatSheetsPage } from './pages/CheatSheetsPage'
import { LoginPage, RegisterPage, ForgotPasswordPage, ResetPasswordPage } from './components/auth/AuthForms'
import { SUBSPECIALTIES } from './data/index'
import { Analytics } from '@vercel/analytics/react'
import { Footer } from './components/layout/Footer'
import { PromoBanner } from './components/layout/PromoBanner'

// ── Footer hidden on study page ──────────────────────────────
const FOOTER_HIDDEN = [
  '/study', '/login', '/register',
  '/forgot-password', '/reset-password',
  '/checkout/success', '/checkout/cancel',
  '/admin',
]

function FooterWithGuard() {
  const { pathname } = useLocation()
  if (FOOTER_HIDDEN.includes(pathname)) return null
  return <Footer />
}

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

// Blocks content routes once a paid plan has lapsed, sending the user to
// /pricing to resubscribe. subscriptionStore.isLoaded only ever becomes true
// for an authenticated user (loadSubscription is never called for anonymous
// visitors), so we must gate on auth state first — otherwise an anonymous
// visitor to an unguarded route like /decks would be stuck on AppLoader forever.
function RedirectIfExpired({ children }) {
  const { isAuthenticated, isLoading: authLoading } = useAuthStore()
  const { isExpired, isLoaded: subLoaded } = useSubscriptionStore()
  if (authLoading) return <AppLoader />
  if (isAuthenticated && !subLoaded) return <AppLoader />
  if (isExpired) return <Navigate to="/pricing" replace />
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
          // Re-check subscription expiry hourly too, not just at sign-in —
          // otherwise a long-lived open tab never notices a plan lapsing.
          if (user) loadSubscription(user.id)
          return
        }

        // ── User profile updated ─────────────────────────────────
        if (event === 'USER_UPDATED') {
          _resolveLoading(user)
          return
        }

        // ── Password recovery link clicked ───────────────────────
        if (event === 'PASSWORD_RECOVERY') {
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
    <Analytics />
    <ScrollToTop />
    <PromoBanner />
    <Routes>
      <Route path="/"          element={<LandingPage />} />
      <Route path="/login"            element={<RedirectIfAuth><LoginPage /></RedirectIfAuth>} />
      <Route path="/register"         element={<RedirectIfAuth><RegisterPage /></RedirectIfAuth>} />
      <Route path="/forgot-password"  element={<ForgotPasswordPage />} />
      <Route path="/reset-password"   element={<ResetPasswordPage />} />
      <Route path="/dashboard" element={<RequireAuth><RedirectIfExpired><DashboardPage /></RedirectIfExpired></RequireAuth>} />
      <Route path="/decks"     element={<Navigate to={`/decks/${defaultDeck}`} replace />} />
      <Route path="/decks/:subspecialtyId" element={<RedirectIfExpired><DecksPage /></RedirectIfExpired>} />
      <Route path="/study"     element={<RedirectIfExpired><StudyPage /></RedirectIfExpired>} />
      {/* Access is checked per-sheet inside CheatSheetsPage (only `nucs` is free),
          not by a route guard, since one route covers both free and locked sheets. */}
      <Route path="/cheat-sheets"           element={<Navigate to="/cheat-sheets/nucs" replace />} />
      <Route path="/cheat-sheets/:sheetId"  element={<CheatSheetsPage />} />
      <Route path="/pricing"   element={<PricingPage />} />
      <Route path="/settings"  element={<RequireAuth><SettingsPage /></RequireAuth>} />
      <Route path="/stats"     element={<RequireAuth><RedirectIfExpired><StatsPage /></RedirectIfExpired></RequireAuth>} />
      {/* Anonymous visitors still get a 4-question free preview (RedirectIfExpired
          only fires for a real lapsed subscription, never for subscription == null);
          an expired user gets no free-preview fallback here, same as decks/study. */}
      <Route path="/differential-sprint" element={<RedirectIfExpired><DifferentialSprintPage /></RedirectIfExpired>} />
      <Route path="/procedures" element={<ProceduresPage />} />
      <Route path="/checkout/success" element={<RequireAuth><CheckoutSuccessPage /></RequireAuth>} />
      <Route path="/checkout/cancel"  element={<CheckoutCancelPage />} />
      <Route path="/terms"     element={<TermsPage />} />
      <Route path="/privacy"   element={<PrivacyPage />} />
      <Route path="/admin"     element={<AdminPage />} />
      <Route path="*"          element={<Navigate to="/" replace />} />
    </Routes>
      <FooterWithGuard />
    </>
  )
}
