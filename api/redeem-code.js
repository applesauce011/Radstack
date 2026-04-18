// ============================================================
// Promo Code Redemption
// POST /api/redeem-code
// Body: { code: string }
// Auth: Authorization: Bearer <supabase-jwt>
//
// Validates a promo code server-side and grants the user a free
// subscription. Uses claim_promo_code() DB function for atomicity —
// two simultaneous requests for a single-use code cannot both succeed.
// ============================================================

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

function getPeriodEnd(planType) {
  const now = new Date()
  if (planType === '3month')  return new Date(now.getTime() + 90  * 24 * 60 * 60 * 1000).toISOString()
  if (planType === '12month') return new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString()
  return null  // lifetime → no expiry
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // User must be signed in to redeem
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error: 'You must be signed in to redeem a code.' })

  const { data: { user }, error: authError } = await supabaseAdmin.auth.getUser(token)
  if (authError || !user) return res.status(401).json({ error: 'Unauthorized' })

  const rawCode = req.body?.code
  if (!rawCode || typeof rawCode !== 'string') {
    return res.status(400).json({ error: 'No code provided.' })
  }

  // Check if user already has an active/lifetime subscription
  const { data: existingSub } = await supabaseAdmin
    .from('subscriptions')
    .select('status, current_period_end')
    .eq('user_id', user.id)
    .maybeSingle()

  const alreadyActive = existingSub && (
    existingSub.status === 'lifetime' ||
    existingSub.status === 'active' ||
    (existingSub.status === 'canceled' &&
      existingSub.current_period_end &&
      new Date(existingSub.current_period_end) > new Date())
  )

  if (alreadyActive) {
    return res.status(409).json({ error: 'You already have an active subscription.' })
  }

  // Atomically claim the code via the DB function.
  // Returns the promo row if successful, empty array if invalid/used/expired.
  const { data: rows, error: rpcError } = await supabaseAdmin
    .rpc('claim_promo_code', { p_code: rawCode.trim() })

  if (rpcError) {
    console.error('[redeem] claim_promo_code error:', rpcError.message)
    return res.status(500).json({ error: 'Server error. Please try again.' })
  }

  if (!rows || rows.length === 0) {
    return res.status(400).json({ error: 'Invalid, expired, or already used code.' })
  }

  const promo = rows[0]
  const planType = promo.plan_type
  const currentPeriodEnd = getPeriodEnd(planType)
  const status = planType === 'lifetime' ? 'lifetime' : 'active'

  // Write the subscription row — same shape as the Stripe webhook writes
  const { error: subError } = await supabaseAdmin
    .from('subscriptions')
    .upsert({
      user_id:              user.id,
      stripe_customer_id:   null,
      stripe_subscription_id: null,
      status,
      plan_type:            planType,
      current_period_end:   currentPeriodEnd,
      cancel_at_period_end: false,
    }, { onConflict: 'user_id' })

  if (subError) {
    console.error('[redeem] subscription write error:', subError.message)
    // Best-effort rollback: decrement the use count we just claimed
    await supabaseAdmin.rpc('rollback_promo_claim', { p_code: promo.code }).catch(() => {})
    return res.status(500).json({ error: 'Error activating your access. Please contact support@radstack.io.' })
  }

  const planLabels = { '3month': '3-Month', '12month': '12-Month', lifetime: 'Lifetime' }
  console.log(`[redeem] code=${promo.code} user=${user.id} plan=${planType}`)

  res.status(200).json({
    success: true,
    plan_type: planType,
    plan_label: planLabels[planType] ?? planType,
    current_period_end: currentPeriodEnd,
  })
}
