import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { useSubscriptionStore } from '../store/subscriptionStore'
import { Navbar } from '../components/layout/Navbar'
import { SubscriptionBadge } from '../components/paywall/SubscriptionBadge'
import { supabase } from '../lib/supabase'

function Section({ title, children }) {
  return (
    <div style={{
      background: 'var(--bg-card)', border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '16px',
    }}>
      <div style={{
        padding: '16px 24px', borderBottom: '1px solid var(--border-subtle)',
        fontSize: '13px', fontWeight: '600', letterSpacing: '0.05em',
        textTransform: 'uppercase', color: 'var(--text-muted)',
      }}>
        {title}
      </div>
      <div style={{ padding: '24px' }}>
        {children}
      </div>
    </div>
  )
}

function FieldRow({ label, value, hint }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
        {label}
      </label>
      <div style={{
        padding: '10px 14px', background: 'var(--bg-elevated)',
        border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
        fontSize: '14px', color: 'var(--text-muted)',
      }}>
        {value}
      </div>
      {hint && <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{hint}</div>}
    </div>
  )
}

export function SettingsPage() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const { subscription, hasAccess } = useSubscriptionStore()

  // Password change state
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [pwLoading, setPwLoading] = useState(false)
  const [pwError, setPwError] = useState(null)
  const [pwSuccess, setPwSuccess] = useState(false)

  // Billing portal state
  const [portalLoading, setPortalLoading] = useState(false)
  const [portalError, setPortalError] = useState(null)

  // Delete account state
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [deleteError, setDeleteError] = useState(null)

  const handleChangePassword = async (e) => {
    e.preventDefault()
    setPwError(null)
    setPwSuccess(false)

    if (newPassword.length < 6) {
      setPwError('New password must be at least 6 characters.')
      return
    }
    if (newPassword !== confirmPassword) {
      setPwError('Passwords do not match.')
      return
    }

    setPwLoading(true)
    try {
      // Verify current password first
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: currentPassword,
      })
      if (signInError) {
        setPwError('Current password is incorrect.')
        return
      }

      const { error } = await supabase.auth.updateUser({ password: newPassword })
      if (error) throw error

      setPwSuccess(true)
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err) {
      setPwError(err.message || 'Failed to update password.')
    } finally {
      setPwLoading(false)
    }
  }

  const handleManageBilling = async () => {
    setPortalError(null)
    setPortalLoading(true)
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (!token) { navigate('/login'); return }

      const res = await fetch('/api/create-portal', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Could not open billing portal')
      window.location.href = json.url
    } catch (err) {
      setPortalError(err.message)
    } finally {
      setPortalLoading(false)
    }
  }

  const handleDeleteAccount = async () => {
    setDeleteError(null)
    setDeleteLoading(true)
    try {
      // Delete all user data via Supabase RPC (requires a DB function)
      // For now, sign the user out and let them contact support.
      // A proper delete_user_account RPC should be added via Supabase Edge Function.
      const { error } = await supabase.rpc('delete_user_account')
      if (error) throw error
      await logout()
      navigate('/')
    } catch (err) {
      // Fallback message if RPC not yet set up
      setDeleteError('To delete your account, please email radiologystack@gmail.com with your registered email address.')
      setDeleteLoading(false)
    }
  }

  const planLabels = { '3month': '3-Month', '12month': '12-Month', lifetime: 'Lifetime' }
  const planLabel = subscription?.plan_type ? planLabels[subscription.plan_type] : null

  const formatDate = (iso) => {
    if (!iso) return null
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '620px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '28px',
          fontWeight: '800', color: 'var(--text-primary)',
          letterSpacing: '-0.02em', marginBottom: '28px',
        }}>
          Settings
        </h1>

        {/* Account */}
        <Section title="Account">
          <FieldRow label="Display Name" value={user?.name} />
          <FieldRow label="Email" value={user?.email} hint="Contact support to change your email." />
        </Section>

        {/* Change Password */}
        <Section title="Change Password">
          <form onSubmit={handleChangePassword}>
            {[
              { label: 'Current Password', value: currentPassword, setter: setCurrentPassword },
              { label: 'New Password', value: newPassword, setter: setNewPassword },
              { label: 'Confirm New Password', value: confirmPassword, setter: setConfirmPassword },
            ].map(({ label, value, setter }) => (
              <div key={label} style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', display: 'block', marginBottom: '6px' }}>
                  {label}
                </label>
                <input
                  type="password"
                  value={value}
                  onChange={e => setter(e.target.value)}
                  required
                  style={{
                    width: '100%', padding: '10px 14px', boxSizing: 'border-box',
                    background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                    borderRadius: 'var(--radius-md)', color: 'var(--text-primary)',
                    fontSize: '14px', fontFamily: 'var(--font-body)', outline: 'none',
                  }}
                />
              </div>
            ))}
            {pwError && (
              <div style={{ fontSize: '13px', color: 'var(--accent-rose)', marginBottom: '12px' }}>{pwError}</div>
            )}
            {pwSuccess && (
              <div style={{ fontSize: '13px', color: 'var(--accent-emerald)', marginBottom: '12px' }}>Password updated successfully.</div>
            )}
            <button
              type="submit"
              disabled={pwLoading}
              style={{
                padding: '10px 20px', borderRadius: 'var(--radius-md)',
                background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600',
                cursor: pwLoading ? 'wait' : 'pointer', fontFamily: 'var(--font-body)',
                opacity: pwLoading ? 0.6 : 1,
              }}
            >
              {pwLoading ? 'Updating…' : 'Update Password'}
            </button>
          </form>
        </Section>

        {/* Subscription */}
        <Section title="Subscription">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '6px' }}>Current Plan</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SubscriptionBadge />
                {planLabel && (
                  <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{planLabel}</span>
                )}
              </div>
            </div>
          </div>

          {hasAccess && subscription?.current_period_end && subscription.plan_type !== 'lifetime' && (
            <div style={{
              fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px',
              padding: '10px 14px', background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)',
            }}>
              {subscription.status === 'canceled'
                ? `Access expires on ${formatDate(subscription.current_period_end)}`
                : `Access valid until ${formatDate(subscription.current_period_end)}`
              }
            </div>
          )}

          {hasAccess && subscription?.stripe_customer_id && (
            <div style={{ marginBottom: '12px' }}>
              <button
                onClick={handleManageBilling}
                disabled={portalLoading}
                style={{
                  padding: '10px 20px', borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600',
                  cursor: portalLoading ? 'wait' : 'pointer', fontFamily: 'var(--font-body)',
                  opacity: portalLoading ? 0.6 : 1,
                }}
              >
                {portalLoading ? 'Opening…' : 'View Receipts & Billing →'}
              </button>
              {portalError && (
                <div style={{ fontSize: '13px', color: 'var(--accent-rose)', marginTop: '8px' }}>{portalError}</div>
              )}
            </div>
          )}

          {!hasAccess && (
            <button
              onClick={() => navigate('/pricing')}
              style={{
                padding: '10px 20px', borderRadius: 'var(--radius-md)',
                background: 'var(--accent-cyan)', border: 'none',
                color: 'var(--bg-primary)', fontSize: '14px', fontWeight: '700',
                cursor: 'pointer', fontFamily: 'var(--font-display)',
              }}
            >
              View Plans →
            </button>
          )}
        </Section>

        {/* Danger zone */}
        <Section title="Danger Zone">
          {!deleteOpen ? (
            <div>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: '1.5' }}>
                Permanently delete your account and all study progress. This cannot be undone.
              </p>
              <button
                onClick={() => setDeleteOpen(true)}
                style={{
                  padding: '10px 20px', borderRadius: 'var(--radius-md)',
                  background: 'transparent', border: '1px solid var(--accent-rose)',
                  color: 'var(--accent-rose)', fontSize: '14px', fontWeight: '600',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                }}
              >
                Delete Account
              </button>
            </div>
          ) : (
            <div>
              <p style={{ fontSize: '14px', color: 'var(--accent-rose)', marginBottom: '20px', lineHeight: '1.5', fontWeight: '600' }}>
                Are you sure? This will permanently delete all your progress data.
              </p>
              {deleteError && (
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px', lineHeight: '1.5' }}>{deleteError}</div>
              )}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => { setDeleteOpen(false); setDeleteError(null) }}
                  style={{
                    padding: '10px 20px', borderRadius: 'var(--radius-md)',
                    background: 'var(--bg-elevated)', border: '1px solid var(--border-default)',
                    color: 'var(--text-primary)', fontSize: '14px', fontWeight: '600',
                    cursor: 'pointer', fontFamily: 'var(--font-body)',
                  }}
                >
                  Cancel
                </button>
                {!deleteError && (
                  <button
                    onClick={handleDeleteAccount}
                    disabled={deleteLoading}
                    style={{
                      padding: '10px 20px', borderRadius: 'var(--radius-md)',
                      background: 'var(--accent-rose)', border: 'none',
                      color: '#fff', fontSize: '14px', fontWeight: '700',
                      cursor: deleteLoading ? 'wait' : 'pointer', fontFamily: 'var(--font-body)',
                      opacity: deleteLoading ? 0.6 : 1,
                    }}
                  >
                    {deleteLoading ? 'Deleting…' : 'Yes, Delete My Account'}
                  </button>
                )}
              </div>
            </div>
          )}
        </Section>
      </div>
    </div>
  )
}
