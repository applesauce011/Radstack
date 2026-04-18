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

export function TermsPage() {
  const navigate = useNavigate()
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: '800',
          color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '8px',
        }}>
          Terms of Service
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '36px' }}>
          Last updated: April 2026
        </p>

        <H2>1. Acceptance of Terms</H2>
        <P>By accessing or using RadiologyStack ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</P>

        <H2>2. Description of Service</H2>
        <P>RadiologyStack provides radiology flashcard content intended for educational purposes. Content is designed to support exam preparation for the Royal College of Physicians and Surgeons of Canada radiology examinations and the American Board of Radiology (ABR) examinations.</P>

        <H2>3. Not for Clinical Use</H2>
        <P>RadiologyStack content is strictly for educational and exam preparation purposes. It is NOT intended for use in clinical practice, patient care, or medical decision-making. Do not use RadiologyStack content to guide clinical decisions. Always rely on current clinical guidelines, peer-reviewed literature, and your institutional resources for patient care.</P>

        <H2>4. Subscriptions and Billing</H2>
        <P>RadiologyStack offers paid subscription plans that provide full access to all flashcard content. All plans are one-time payments — there is no automatic renewal. Your access period is specified at the time of purchase (3 months, 12 months, or lifetime).</P>
        <P>All payments are processed securely by Stripe. RadiologyStack does not store your payment card information.</P>
        <P>Prices are listed in USD and may be subject to applicable taxes depending on your location.</P>

        <H2>5. Refund Policy</H2>
        <P>Due to the digital nature of the content, all purchases are final. Refunds will not be issued after 48 hours from the time of purchase. If you experience a technical issue preventing access within 48 hours of purchase, contact radiologystack@gmail.com and we will resolve the issue or issue a refund at our discretion.</P>

        <H2>6. Account Registration</H2>
        <P>You must create an account to save progress. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</P>

        <H2>7. Intellectual Property</H2>
        <P>All flashcard content, images, and materials on RadiologyStack are the property of RadiologyStack or its content creators. You may not reproduce, distribute, or create derivative works from this content without explicit written permission.</P>

        <H2>8. Disclaimer of Warranties</H2>
        <P>The Service is provided "as is" without warranties of any kind. We do not warrant that the content is error-free, complete, or current. Radiology guidelines and exam content change over time — always verify against current official sources.</P>

        <H2>9. Limitation of Liability</H2>
        <P>To the maximum extent permitted by applicable law, RadiologyStack shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service.</P>

        <H2>10. Governing Law</H2>
        <P>These Terms are governed by the laws of the Province of Ontario, Canada. Any disputes shall be resolved in the courts of Ontario.</P>

        <H2>11. Contact</H2>
        <P>For questions about these Terms, email: radiologystack@gmail.com</P>

        <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-subtle)' }}>
          <button
            onClick={() => navigate('/privacy')}
            style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit' }}
          >
            Privacy Policy →
          </button>
        </div>
      </div>
    </div>
  )
}
