import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import { useProgressStore } from '../../store/progressStore'

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const { loadForUser } = useProgressStore()
  const navigate  = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = async () => {
    setMenuOpen(false)
    navigate('/')
    // Clear progress immediately (no flash of stale data if user comes back)
    await loadForUser(null)
    // Clear auth state + invalidate server session
    await logout()
    // The SIGNED_OUT event fired by supabase.auth.signOut() will also call
    // loadForUser(null) via App.jsx, but that's a harmless no-op at this point.
  }

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(8,13,26,0.85)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '0 24px', height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <button
        type="button"
        onClick={() => navigate(isAuthenticated ? '/dashboard' : '/')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}
      >
        <div style={{
          width: '32px', height: '32px', borderRadius: '8px',
          background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '16px', fontWeight: '800', color: '#fff',
          fontFamily: 'var(--font-display)',
        }}>R</div>
        <span style={{
          fontFamily: 'var(--font-display)', fontWeight: '700',
          fontSize: '18px', letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}>
          Rad<span style={{ color: 'var(--accent-cyan)' }}>Stack</span>
        </span>
      </button>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {isAuthenticated ? (
          <div style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setMenuOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)', padding: '6px 12px',
                cursor: 'pointer', color: 'var(--text-primary)',
                fontFamily: 'var(--font-body)', fontSize: '14px',
              }}
            >
              <div style={{
                width: '28px', height: '28px', borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '12px', fontWeight: '700', color: '#fff',
                flexShrink: 0,
              }}>
                {user?.name?.[0]?.toUpperCase() ?? 'U'}
              </div>
              <span>{user?.name?.split(' ')[0]}</span>
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {menuOpen && (
              <>
                {/* Backdrop to close on outside click */}
                <div
                  style={{ position: 'fixed', inset: 0, zIndex: 99 }}
                  onClick={() => setMenuOpen(false)}
                />
                <div style={{
                  position: 'absolute', right: 0, top: 'calc(100% + 8px)',
                  background: 'var(--bg-card)', border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-md)', minWidth: '180px',
                  boxShadow: 'var(--shadow-lg)', overflow: 'hidden',
                  animation: 'fadeIn 0.15s ease', zIndex: 100,
                }}>
                  <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {user?.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {user?.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => { navigate('/dashboard'); setMenuOpen(false) }}
                    style={menuItemStyle}
                  >
                    Dashboard
                  </button>
                  <button
                    type="button"
                    onClick={() => { navigate('/decks'); setMenuOpen(false) }}
                    style={menuItemStyle}
                  >
                    Browse Decks
                  </button>
                  <div style={{ borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      type="button"
                      onClick={handleLogout}
                      style={{ ...menuItemStyle, color: 'var(--accent-rose)' }}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={() => navigate('/login')}
              style={{
                background: 'none', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)', padding: '8px 16px',
                color: 'var(--text-primary)', cursor: 'pointer', fontSize: '14px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => navigate('/register')}
              style={{
                background: 'var(--accent-cyan)', border: 'none',
                borderRadius: 'var(--radius-md)', padding: '8px 16px',
                color: 'var(--bg-primary)', cursor: 'pointer', fontSize: '14px',
                fontWeight: '600', fontFamily: 'var(--font-body)',
              }}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

const menuItemStyle = {
  display: 'block', width: '100%', padding: '10px 16px',
  textAlign: 'left', background: 'none', border: 'none',
  color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px',
  fontFamily: 'var(--font-body)', transition: 'background var(--transition)',
}
