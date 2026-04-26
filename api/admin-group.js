// GET   /api/admin-group         → list all group orders
// PATCH /api/admin-group         → update order status
// Protected by X-Admin-Secret header.

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

function checkAdmin(req) {
  const secret = req.headers['x-admin-secret']
  if (!process.env.ADMIN_SECRET) return false
  return secret === process.env.ADMIN_SECRET
}

export default async function handler(req, res) {
  if (!checkAdmin(req)) return res.status(401).json({ error: 'Unauthorized' })

  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('group_orders')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ orders: data })
  }

  if (req.method === 'PATCH') {
    const { id, status } = req.body ?? {}
    if (!id || !status) return res.status(400).json({ error: 'id and status are required' })
    const validStatuses = ['pending', 'fulfilled']
    if (!validStatuses.includes(status)) return res.status(400).json({ error: 'Invalid status' })

    const { error } = await supabaseAdmin
      .from('group_orders')
      .update({ status })
      .eq('id', id)

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
