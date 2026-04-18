import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'

function H2({ children }) {
  return (
    <h2 style={{
      fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '700',
      color: 'var(--text-primary)', marginTop: '32px', marginBottom: '12px',
    }}>{children}</h2>
  )
}

function P({ children }) {
  return <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>{children}</p>
}

export function PrivacyPage() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800',
          color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '8px',
        }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '36px' }}>
          Last updated: April 2026
        </p>

        <H2>1. Information We Collect</H2>
        <P>When you create an account, we collect your name and email address. When you study, we store your card progress (which cards you've marked as "Got It" or "Flagged") linked to your account. We do not collect any health or clinical information.</P>
        <P>We do not store payment card information. All payment processing is handled by Stripe, Inc. See Stripe's privacy policy at stripe.com/privacy.</P>

        <H2>2. How We Use Your Information</H2>
        <P>Your email and name are used to identify your account and for account communications (password reset, purchase receipts). Your study progress data is used solely to power the progress tracking features of the app.</P>

        <H2>3. Data Storage and Security</H2>
        <P>Your account and progress data is stored in Supabase, which is hosted on AWS infrastructure with encryption at rest and in transit. We use Row Level Security to ensure each user can only access their own data.</P>

        <H2>4. Data Sharing</H2>
        <P>We do not sell your personal information. We do not share your data with third parties except as necessary to operate the Service (Supabase for database, Stripe for payment processing, Vercel for hosting).</P>

        <H2>5. Cookies and Analytics</H2>
        <P>RadiologyStack uses browser localStorage to persist your authentication session. We do not currently use third-party analytics or advertising cookies.</P>

        <H2>6. Your Rights</H2>
        <P>You may request deletion of your account and all associated data at any time via the Settings page or by emailing radiologystack@gmail.com. We will process deletion requests within 30 days.</P>
        <P>If you are a resident of Canada, you have rights under the Personal Information Protection and Electronic Documents Act (PIPEDA) regarding access to and correction of your personal information.</P>

        <H2>7. Children's Privacy</H2>
        <P>RadiologyStack is intended for adults (medical students and physicians). We do not knowingly collect information from anyone under 18.</P>

        <H2>8. Changes to This Policy</H2>
        <P>We may update this Privacy Policy. We will notify you of significant changes by email or a notice on the Service. Continued use after changes constitutes acceptance.</P>

        <H2>9. Contact</H2>
        <P>For privacy questions or data deletion requests: radiologystack@gmail.com</P>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
          <button
            onClick={() => navigate('/terms')}
            style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
          >
            Terms of Service →
          </button>
        </div>
      </div>
    </div>
  )
}
