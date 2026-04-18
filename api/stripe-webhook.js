// ============================================================
// Stripe Webhook Handler
// POST /api/stripe-webhook
//
// Server-side only. Never exposed to the browser.
// Verifies Stripe's signature on every request, then writes
// subscription state into Supabase using the service_role key
// (which bypasses RLS — this is intentional and correct here).
//
// Required environment variables (set in Vercel dashboard):
//   STRIPE_SECRET_KEY
//   STRIPE_WEBHOOK_SECRET
//   STRIPE_PRICE_3MONTH
//   STRIPE_PRICE_12MONTH
//   STRIPE_PRICE_LIFETIME
//   SUPABASE_SERVICE_ROLE_KEY
//   VITE_SUPABASE_URL
// ============================================================

import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

// Vercel must NOT parse the body — Stripe needs the raw bytes
// to verify the signature.
export const config = { api: { bodyParser: false } }

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

  // Collect raw body for signature verification
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const rawBody = Buffer.concat(chunks)
  const sig = req.headers['stripe-signature']

  let event
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('[webhook] signature verification failed:', err.message)
    return res.status(400).json({ error: `Webhook signature error: ${err.message}` })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object)
        break
      // These fire for Stripe subscriptions (not used in v1 one-time model)
      // but kept here for robustness and future use.
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object)
        break
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object)
        break
      default:
        // Unhandled event types — acknowledge and ignore
        break
    }

    res.status(200).json({ received: true })
  } catch (err) {
    console.error('[webhook] handler error:', err)
    res.status(500).json({ error: 'Internal handler error' })
  }
}

// ── Helpers ───────────────────────────────────────────────────

function getPlanType(priceId) {
  const map = {
    [process.env.STRIPE_PRICE_3MONTH]:  '3month',
    [process.env.STRIPE_PRICE_12MONTH]: '12month',
    [process.env.STRIPE_PRICE_LIFETIME]: 'lifetime',
  }
  return map[priceId] ?? null
}

function getPeriodEnd(planType) {
  const now = new Date()
  if (planType === '3month')  return new Date(now.getTime() + 90  * 24 * 60 * 60 * 1000).toISOString()
  if (planType === '12month') return new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString()
  if (planType === 'lifetime') return null  // no expiry
  return null
}

async function handleCheckoutCompleted(session) {
  const userId = session.metadata?.user_id
  if (!userId) {
    console.error('[webhook] checkout.session.completed missing user_id in metadata')
    return
  }

  const priceId = session.line_items
    ? session.line_items.data?.[0]?.price?.id
    : (await stripe.checkout.sessions.retrieve(session.id, { expand: ['line_items'] })).line_items?.data?.[0]?.price?.id

  const planType = getPlanType(priceId)
  const currentPeriodEnd = getPeriodEnd(planType)
  const status = planType === 'lifetime' ? 'lifetime' : 'active'

  const { error } = await supabaseAdmin
    .from('subscriptions')
    .upsert({
      user_id:             userId,
      stripe_customer_id:  session.customer,
      stripe_subscription_id: session.subscription ?? null,
      status,
      plan_type:           planType,
      current_period_end:  currentPeriodEnd,
      cancel_at_period_end: false,
    }, { onConflict: 'user_id' })

  if (error) {
    console.error('[webhook] upsert error:', error.message)
    throw error
  }

  console.log(`[webhook] subscription activated: user=${userId} plan=${planType}`)
}

async function handleSubscriptionUpdated(subscription) {
  // Only relevant if you switch to recurring Stripe subscriptions in future.
  const priceId = subscription.items?.data?.[0]?.price?.id
  const planType = getPlanType(priceId)
  const status = subscription.status === 'canceled' ? 'canceled' : subscription.status

  const { error } = await supabaseAdmin
    .from('subscriptions')
    .update({
      status,
      plan_type:           planType,
      current_period_end:  subscription.current_period_end
        ? new Date(subscription.current_period_end * 1000).toISOString()
        : null,
      cancel_at_period_end: subscription.cancel_at_period_end,
    })
    .eq('stripe_subscription_id', subscription.id)

  if (error) console.error('[webhook] subscription update error:', error.message)
}

async function handleSubscriptionDeleted(subscription) {
  const { error } = await supabaseAdmin
    .from('subscriptions')
    .update({ status: 'canceled' })
    .eq('stripe_subscription_id', subscription.id)

  if (error) console.error('[webhook] subscription delete error:', error.message)
}
