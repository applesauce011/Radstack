import React from 'react'
import clsx from 'clsx'

const variants = {
  primary: {
    background: 'var(--accent-cyan)',
    color: 'var(--bg-primary)',
    border: 'none',
    fontWeight: '600',
  },
  secondary: {
    background: 'var(--bg-elevated)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-default)',
    fontWeight: '500',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: '1px solid var(--border-subtle)',
    fontWeight: '500',
  },
  danger: {
    background: 'var(--accent-rose-dim)',
    color: 'var(--accent-rose)',
    border: '1px solid rgba(244,63,94,0.3)',
    fontWeight: '500',
  },
  success: {
    background: 'var(--accent-emerald-dim)',
    color: 'var(--accent-emerald)',
    border: '1px solid rgba(16,185,129,0.3)',
    fontWeight: '500',
  },
}

const sizes = {
  sm: { padding: '6px 12px', fontSize: '13px', borderRadius: 'var(--radius-sm)' },
  md: { padding: '10px 20px', fontSize: '14px', borderRadius: 'var(--radius-md)' },
  lg: { padding: '14px 28px', fontSize: '16px', borderRadius: 'var(--radius-md)' },
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled,
  fullWidth,
  icon,
  style: extraStyle,
  ...props
}) {
  const v = variants[variant] || variants.primary
  const s = sizes[size] || sizes.md

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        width: fullWidth ? '100%' : undefined,
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all var(--transition)',
        fontFamily: 'var(--font-body)',
        letterSpacing: '0.01em',
        ...v,
        ...s,
        ...extraStyle,
      }}
      onMouseEnter={e => {
        if (!disabled) e.currentTarget.style.opacity = '0.85'
      }}
      onMouseLeave={e => {
        if (!disabled) e.currentTarget.style.opacity = '1'
      }}
      {...props}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </button>
  )
}
