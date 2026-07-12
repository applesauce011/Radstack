import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

function isPathActive(pathname, target) {
  return pathname === target || pathname.startsWith(target + '/')
}

function TopNavLink({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: '14px', fontFamily: 'var(--font-body)',
        color: active ? 'var(--accent-cyan)' : 'var(--text-muted)',
        fontWeight: active ? '600' : '400',
        transition: 'color var(--transition)',
        padding: '4px 8px', whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--text-secondary)' }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--text-muted)' }}
    >
      {label}
    </button>
  )
}

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const navigate  = useNavigate()
  const location  = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)     // desktop avatar dropdown
  const [mobileOpen, setMobileOpen] = useState(false)  // mobile slide-down panel

  const handleLogout = async () => {
    setMenuOpen(false)
    setMobileOpen(false)
    await logout()
    navigate('/')
  }

  const go = (path) => {
    navigate(path)
    setMenuOpen(false)
    setMobileOpen(false)
  }

  const isActive = (path) => isPathActive(location.pathname, path)

  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, height: '64px' }}>
      {/*
        Blur lives on its own layer, not on <nav> itself — backdrop-filter
        establishes a new CSS containing block for position:fixed descendants,
        which would collapse the mobile-panel/dropdown click-outside overlays
        (they'd size themselves against this 64px-tall nav instead of the
        viewport). Keeping <nav> filter-free avoids that trap.
      */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'rgba(8,13,26,0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-subtle)',
      }} />
      <div style={{
        position: 'relative', zIndex: 1, height: '100%',
        padding: '0 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
      {/* Logo */}
      <button
        type="button"
        onClick={() => go(isAuthenticated ? '/dashboard' : '/')}
        style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0,
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
          fontSize: '16px', letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
        }}>
          Radiology<span style={{ color: 'var(--accent-cyan)' }}>Stack</span>
        </span>
      </button>

      {/* Desktop nav — hidden below the mobile breakpoint (see index.css) */}
      <div className="navbar-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <TopNavLink label="Decks" active={isActive('/decks')} onClick={() => go('/decks')} />
        <TopNavLink
          label="Differential Sprint"
          active={isActive('/differential-sprint')}
          onClick={() => go('/differential-sprint')}
        />
        <TopNavLink label="Pricing" active={isActive('/pricing')} onClick={() => go('/pricing')} />

        {isAuthenticated ? (
          <div style={{ position: 'relative', marginLeft: '8px' }}>
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
                  <button type="button" onClick={() => go('/dashboard')} style={menuItemStyle}>
                    Dashboard
                  </button>
                  <button type="button" onClick={() => go('/stats')} style={menuItemStyle}>
                    My Stats
                  </button>
                  <button type="button" onClick={() => go('/settings')} style={menuItemStyle}>
                    Settings
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
          <div style={{ display: 'flex', gap: '8px', marginLeft: '8px' }}>
            <button
              type="button"
              onClick={() => go('/login')}
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
              onClick={() => go('/register')}
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

      {/* Mobile hamburger — hidden above the mobile breakpoint (see index.css) */}
      <button
        type="button"
        className="navbar-mobile-toggle"
        onClick={() => setMobileOpen(o => !o)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        style={{
          background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-md)', width: '38px', height: '38px',
          alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
          color: 'var(--text-primary)', fontSize: '18px', flexShrink: 0,
        }}
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
      </div>

      {/* Mobile slide-down panel */}
      {mobileOpen && (
        <>
          <div
            style={{ position: 'fixed', inset: '64px 0 0 0', zIndex: 98, background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMobileOpen(false)}
          />
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)',
            boxShadow: 'var(--shadow-lg)', zIndex: 99,
            padding: '8px', display: 'flex', flexDirection: 'column', gap: '2px',
            maxHeight: 'calc(100vh - 64px)', overflowY: 'auto',
          }}>
            <button type="button" onClick={() => go('/decks')} style={mobileMenuItemStyle}>
              Decks
            </button>
            <button type="button" onClick={() => go('/differential-sprint')} style={mobileMenuItemStyle}>
              Differential Sprint
            </button>
            <button type="button" onClick={() => go('/pricing')} style={mobileMenuItemStyle}>
              Pricing
            </button>

            {isAuthenticated ? (
              <>
                <div style={{ borderTop: '1px solid var(--border-subtle)', margin: '6px 0' }} />
                <div style={{ padding: '8px 14px', fontSize: '12px', color: 'var(--text-muted)' }}>
                  Signed in as {user?.name}
                </div>
                <button type="button" onClick={() => go('/dashboard')} style={mobileMenuItemStyle}>
                  Dashboard
                </button>
                <button type="button" onClick={() => go('/stats')} style={mobileMenuItemStyle}>
                  My Stats
                </button>
                <button type="button" onClick={() => go('/settings')} style={mobileMenuItemStyle}>
                  Settings
                </button>
                <button
                  type="button"
                  onClick={handleLogout}
                  style={{ ...mobileMenuItemStyle, color: 'var(--accent-rose)' }}
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <div style={{ borderTop: '1px solid var(--border-subtle)', margin: '6px 0' }} />
                <button type="button" onClick={() => go('/login')} style={mobileMenuItemStyle}>
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => go('/register')}
                  style={{ ...mobileMenuItemStyle, color: 'var(--accent-cyan)', fontWeight: '600' }}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </>
      )}
    </nav>
  )
}

const menuItemStyle = {
  display: 'block', width: '100%', padding: '10px 16px',
  textAlign: 'left', background: 'none', border: 'none',
  color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '14px',
  fontFamily: 'var(--font-body)', transition: 'background var(--transition)',
}

const mobileMenuItemStyle = {
  display: 'block', width: '100%', padding: '12px 14px',
  textAlign: 'left', background: 'none', border: 'none',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)', cursor: 'pointer', fontSize: '15px',
  fontFamily: 'var(--font-body)', fontWeight: '500',
}
