// ============================================================
// Create Stripe Checkout Session
// POST /api/create-checkout
// Body: { priceId: string }
// Auth: Authorization: Bearer <supabase-jwt>
//
// Verifies the user's Supabase JWT, creates a Stripe Checkout
// session with the user_id embedded in metadata (used by the
// webhook to write the subscription row), and returns the
// Stripe-hosted checkout URL.
// ============================================================

import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

const VALID_PRICE_IDS = () => [
  process.env.STRIPE_PRICE_3MONTH,
  process.env.STRIPE_PRICE_12MONTH,
  process.env.STRIPE_PRICE_LIFETIME,
].filter(Boolean)

const LIFETIME_PRICE_ID = () => process.env.STRIPE_PRICE_LIFETIME

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Verify the Supabase JWT
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'Missing auth token' })

  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !user) return res.status(401).json({ error: 'Unauthorized' })

  // Parse body (Vercel parses JSON bodies automatically)
  const { priceId } = req.body
  if (!priceId || !VALID_PRICE_IDS().includes(priceId)) {
    return res.status(400).json({ error: 'Invalid price ID' })
  }

  // Check if this user already has a Stripe customer record
  const { data: existingSub } = await supabaseAdmin
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', user.id)
    .maybeSingle()

  const isLifetime = priceId === LIFETIME_PRICE_ID()

  const session = await stripe.checkout.sessions.create({
    // Reuse existing customer if available, otherwise let Stripe create one
    customer:       existingSub?.stripe_customer_id ?? undefined,
    customer_email: existingSub?.stripe_customer_id ? undefined : user.email,

    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: isLifetime ? 'payment' : 'payment',  // all plans are one-time payments

    success_url: `${process.env.VITE_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url:  `${process.env.VITE_APP_URL}/pricing`,

    // user_id is stored in metadata so the webhook can write the subscription row
    metadata: { user_id: user.id },

    allow_promotion_codes: true,

    // Stripe Tax — requires Stripe Tax product to be enabled in dashboard
    automatic_tax: { enabled: true },
  })

  res.status(200).json({ url: session.url })
}
