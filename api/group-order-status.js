// GET /api/group-order-status?session_id=xxx
// Public endpoint — returns codes for a group order once fulfilled.
// The session_id acts as an unguessable token (Stripe-generated).

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { session_id } = req.query
  if (!session_id || typeof session_id !== 'string') {
    return res.status(400).json({ error: 'session_id is required' })
  }

  const { data, error } = await supabaseAdmin
    .from('group_orders')
    .select('status, codes, num_seats, program_name, institution, contact_email, created_at')
    .eq('stripe_session_id', session_id)
    .maybeSingle()

  if (error) return res.status(500).json({ error: error.message })
  if (!data) return res.status(404).json({ error: 'Order not found' })

  return res.status(200).json(data)
}
