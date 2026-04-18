// ============================================================
// Create Stripe Billing Portal Session
// POST /api/create-portal
// Auth: Authorization: Bearer <supabase-jwt>
//
// Used from SettingsPage to let users view their receipts and
// manage payment details. Returns the Stripe-hosted portal URL.
// ============================================================

import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Verify the Supabase JWT
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'Missing auth token' })

  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !user) return res.status(401).json({ error: 'Unauthorized' })

  // Look up the user's Stripe customer ID
  const { data: sub, error: subError } = await supabaseAdmin
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (subError || !sub?.stripe_customer_id) {
    return res.status(400).json({ error: 'No billing account found' })
  }

  const portalSession = await stripe.billingPortal.sessions.create({
    customer:   sub.stripe_customer_id,
    return_url: `${process.env.VITE_APP_URL}/settings`,
  })

  res.status(200).json({ url: portalSession.url })
}
