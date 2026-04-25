import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { supabase } from '../../lib/supabase'
import { Button } from '../ui/Button'

// ── Shared sub-components ─────────────────────────────────────

function FormInput({ label, type, value, onChange, placeholder, error }) {
  const id = `field-${label.toLowerCase().replace(/\s+/g, '-')}`
  return (
    <div style={{ marginBottom: '16px' }}>
      <label htmlFor={id} style={{
        display: 'block', fontSize: '13px', fontWeight: '500',
        color: 'var(--text-secondary)', marginBottom: '6px',
      }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'current-password' : type === 'email' ? 'email' : 'name'}
        style={{
          width: '100%', background: 'var(--bg-elevated)',
          border: `1px solid ${error ? 'var(--accent-rose)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-md)', padding: '11px 14px',
          color: 'var(--text-primary)', fontSize: '15px',
          fontFamily: 'var(--font-body)', outline: 'none',
          transition: 'border-color var(--transition)',
          boxSizing: 'border-box',
        }}
        onFocus={e => { e.target.style.borderColor = 'var(--accent-cyan)' }}
        onBlur={e => { e.target.style.borderColor = error ? 'var(--accent-rose)' : 'var(--border-default)' }}
      />
      {error && (
        <div style={{ fontSize: '12px', color: 'var(--accent-rose)', marginTop: '4px' }}>
          {error}
        </div>
      )}
    </div>
  )
}

function ErrorBanner({ message }) {
  if (!message) return null
  return (
    <div style={{
      padding: '10px 14px', background: 'var(--accent-rose-dim)',
      border: '1px solid rgba(244,63,94,0.3)', borderRadius: 'var(--radius-md)',
      color: 'var(--accent-rose)', fontSize: '14px', marginBottom: '16px',
    }}>
      {message}
    </div>
  )
}

function AuthShell({ children, title, subtitle }) {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg-primary)', padding: '24px',
    }}>
      <div style={{
        width: '100%', maxWidth: '420px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)', padding: '40px',
        boxShadow: 'var(--shadow-lg)',
        animation: 'fadeIn 0.3s ease',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            width: '48px', height: '48px', borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '24px', fontWeight: '800', color: '#fff',
            fontFamily: 'var(--font-display)', margin: '0 auto 16px',
          }}>R</div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '24px',
            fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px',
          }}>{title}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  )
}

// ── Login ─────────────────────────────────────────────────────

const REMEMBER_EMAIL_KEY = 'radstack-remember-email'
const supportsCredentials = () =>
  typeof window !== 'undefined' && 'PasswordCredential' in window && navigator.credentials

export function LoginPage() {
  const navigate   = useNavigate()
  const { login }  = useAuthStore()
  const [email,      setEmail]      = useState('')
  const [password,   setPassword]   = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [error,      setError]      = useState('')
  const [loading,    setLoading]    = useState(false)

  useEffect(() => {
    if (supportsCredentials()) {
      navigator.credentials
        .get({ password: true, mediation: 'silent' })
        .then(cred => {
          if (cred) {
            setEmail(cred.id)
            setPassword(cred.password)
            setRememberMe(true)
          }
        })
        .catch(() => {})
    } else {
      const saved = localStorage.getItem(REMEMBER_EMAIL_KEY)
      if (saved) {
        setEmail(saved)
        setRememberMe(true)
      }
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    setError('')
    setLoading(true)
    const result = await login(email.trim(), password)
    if (result.success) {
      if (rememberMe) {
        if (supportsCredentials()) {
          const cred = new window.PasswordCredential({ id: email.trim(), password })
          navigator.credentials.store(cred).catch(() => {})
        } else {
          localStorage.setItem(REMEMBER_EMAIL_KEY, email.trim())
        }
      } else {
        localStorage.removeItem(REMEMBER_EMAIL_KEY)
        if (supportsCredentials()) {
          navigator.credentials.preventSilentAccess().catch(() => {})
        }
      }
      navigate('/dashboard', { replace: true })
    } else {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <AuthShell title="Welcome back" subtitle="Sign in to track your study progress">
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Email" type="email"
          value={email} onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <FormInput
          label="Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
        />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', marginTop: '-4px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              style={{ accentColor: 'var(--accent-cyan)', width: '15px', height: '15px', cursor: 'pointer' }}
            />
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Remember me</span>
          </label>
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit' }}
          >
            Forgot password?
          </button>
        </div>
        <ErrorBanner message={error} />
        <Button type="submit" fullWidth disabled={loading} size="lg">
          {loading ? 'Signing in…' : 'Sign In'}
        </Button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
        No account?{' '}
        <button
          type="button"
          onClick={() => navigate('/register')}
          style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
        >
          Create one
        </button>
      </p>
      <p style={{ textAlign: 'center', marginTop: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
        Or{' '}
        <button
          type="button"
          onClick={() => navigate('/decks')}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
        >
          browse decks without signing in
        </button>
      </p>
    </AuthShell>
  )
}

// ── Forgot Password ───────────────────────────────────────────

export function ForgotPasswordPage() {
  const navigate = useNavigate()
  const [email,   setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState('')
  const [sent,    setSent]    = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.includes('@')) { setError('Valid email required'); return }
    setError('')
    setLoading(true)
    const redirectTo = `${window.location.origin}/reset-password`
    const { error: err } = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo })
    setLoading(false)
    if (err) { setError(err.message); return }
    setSent(true)
  }

  if (sent) {
    return (
      <AuthShell title="Check your email" subtitle="Password reset link sent">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📬</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
            We sent a reset link to{' '}
            <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>.
            Click the link in the email to set a new password.
          </p>
          <Button variant="primary" fullWidth onClick={() => navigate('/login')}>
            Back to Sign In
          </Button>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell title="Reset your password" subtitle="We'll send you a link to reset it">
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Email" type="email"
          value={email} onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
        <ErrorBanner message={error} />
        <Button type="submit" fullWidth disabled={loading} size="lg">
          {loading ? 'Sending…' : 'Send Reset Link'}
        </Button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
        <button
          type="button"
          onClick={() => navigate('/login')}
          style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
        >
          Back to Sign In
        </button>
      </p>
    </AuthShell>
  )
}

// ── Reset Password ────────────────────────────────────────────

export function ResetPasswordPage() {
  const navigate = useNavigate()
  const [password,  setPassword]  = useState('')
  const [confirm,   setConfirm]   = useState('')
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState('')
  const [done,      setDone]      = useState(false)
  const [ready,     setReady]     = useState(false)

  // Supabase fires PASSWORD_RECOVERY and establishes a session from the URL token.
  // Wait for that before allowing form interaction.
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'PASSWORD_RECOVERY') setReady(true)
    })
    // Also handle the case where the session is already established on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) setReady(true)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password.length < 6) { setError('Password must be at least 6 characters'); return }
    if (password !== confirm) { setError('Passwords do not match'); return }
    setError('')
    setLoading(true)
    const { error: err } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (err) { setError(err.message); return }
    setDone(true)
  }

  if (done) {
    return (
      <AuthShell title="Password updated" subtitle="You're all set">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
            Your password has been changed. You can now sign in with your new password.
          </p>
          <Button variant="primary" fullWidth onClick={() => navigate('/login')}>
            Go to Sign In
          </Button>
        </div>
      </AuthShell>
    )
  }

  if (!ready) {
    return (
      <AuthShell title="Verifying link…" subtitle="Just a moment">
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '14px', padding: '16px 0' }}>
          Validating your reset link…
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell title="Set new password" subtitle="Choose a strong password">
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="New Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)}
          placeholder="Min. 6 characters"
        />
        <FormInput
          label="Confirm Password" type="password"
          value={confirm} onChange={e => setConfirm(e.target.value)}
          placeholder="Repeat new password"
        />
        <ErrorBanner message={error} />
        <Button type="submit" fullWidth disabled={loading} size="lg">
          {loading ? 'Updating…' : 'Update Password'}
        </Button>
      </form>
    </AuthShell>
  )
}

// ── Register ──────────────────────────────────────────────────

export function RegisterPage() {
  const navigate      = useNavigate()
  const { register }  = useAuthStore()
  const [name,     setName]     = useState('')
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [errors,   setErrors]   = useState({})
  const [formError, setFormError] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [needsConfirmation, setNeedsConfirmation] = useState(false)

  const validate = () => {
    const e = {}
    if (!name.trim())          e.name     = 'Name is required'
    if (!email.includes('@'))  e.email    = 'Valid email required'
    if (password.length < 6)   e.password = 'Password must be at least 6 characters'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setFormError('')
    setLoading(true)
    const result = await register(name.trim(), email.trim(), password)
    if (result.success) {
      if (result.needsConfirmation) {
        setNeedsConfirmation(true)
        setLoading(false)
      } else {
        navigate('/dashboard', { replace: true })
      }
    } else {
      setFormError(result.error)
      setLoading(false)
    }
  }

  if (needsConfirmation) {
    return (
      <AuthShell title="Check your email" subtitle="One more step">
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📬</div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
            We sent a confirmation link to{' '}
            <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>.
            Click it to activate your account, then sign in.
          </p>
          <Button variant="primary" fullWidth onClick={() => navigate('/login')}>
            Go to Sign In
          </Button>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell title="Create your account" subtitle="Start tracking your radiology study progress">
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Full Name" type="text"
          value={name} onChange={e => setName(e.target.value)}
          placeholder="Dr. Jane Smith" error={errors.name}
        />
        <FormInput
          label="Email" type="email"
          value={email} onChange={e => setEmail(e.target.value)}
          placeholder="you@example.com" error={errors.email}
        />
        <FormInput
          label="Password" type="password"
          value={password} onChange={e => setPassword(e.target.value)}
          placeholder="Min. 6 characters" error={errors.password}
        />
        <ErrorBanner message={formError} />
        <Button type="submit" fullWidth disabled={loading} size="lg">
          {loading ? 'Creating account…' : 'Create Account'}
        </Button>
      </form>
      <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: 'var(--text-muted)' }}>
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/login')}
          style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
        >
          Sign in
        </button>
      </p>
    </AuthShell>
  )
}
