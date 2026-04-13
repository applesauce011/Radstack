import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
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

export function LoginPage() {
  const navigate   = useNavigate()
  const { login }  = useAuthStore()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [error,    setError]    = useState('')
  const [loading,  setLoading]  = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    setError('')
    setLoading(true)
    const result = await login(email.trim(), password)
    if (result.success) {
      // onAuthStateChange (SIGNED_IN) fires and triggers loadForUser.
      // RequireAuth shows the AppLoader while that completes, then
      // renders the dashboard. Navigate eagerly so the URL updates now.
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
