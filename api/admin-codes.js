// ============================================================
// Admin: Promo Code Management
// GET  /api/admin-codes        → list all codes
// POST /api/admin-codes        → create a new code
//
// Protected by ADMIN_SECRET env var.
// Set X-Admin-Secret header to the value of ADMIN_SECRET.
// ============================================================

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

function checkAdmin(req) {
  const secret = req.headers['x-admin-secret']
  if (!process.env.ADMIN_SECRET) return false  // must be configured
  return secret === process.env.ADMIN_SECRET
}

export default async function handler(req, res) {
  if (!checkAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // ── GET: list all codes ───────────────────────────────────
  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('promo_codes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ codes: data })
  }

  // ── POST: create a new code ───────────────────────────────
  if (req.method === 'POST') {
    const { code, plan_type, max_uses = 1, expires_at = null, note = null } = req.body

    if (!code || !plan_type) {
      return res.status(400).json({ error: 'code and plan_type are required.' })
    }

    const validPlans = ['3month', '12month', 'lifetime']
    if (!validPlans.includes(plan_type)) {
      return res.status(400).json({ error: `plan_type must be one of: ${validPlans.join(', ')}` })
    }

    const normalizedCode = code.trim().toUpperCase()
    if (!/^[A-Z0-9_-]{2,32}$/.test(normalizedCode)) {
      return res.status(400).json({ error: 'Code must be 2–32 alphanumeric characters, dashes, or underscores.' })
    }

    const { data, error } = await supabaseAdmin
      .from('promo_codes')
      .insert({
        code:       normalizedCode,
        plan_type,
        max_uses:   Math.max(1, parseInt(max_uses) || 1),
        expires_at: expires_at || null,
        note:       note || null,
      })
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {  // unique_violation
        return res.status(409).json({ error: `Code "${normalizedCode}" already exists.` })
      }
      return res.status(500).json({ error: error.message })
    }

    return res.status(201).json({ code: data })
  }

  // ── DELETE: deactivate a code ─────────────────────────────
  if (req.method === 'DELETE') {
    const { code } = req.body
    if (!code) return res.status(400).json({ error: 'code is required.' })

    const { error } = await supabaseAdmin
      .from('promo_codes')
      .update({ active: false })
      .eq('code', code.trim().toUpperCase())

    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ success: true })
  }

  res.status(405).json({ error: 'Method not allowed' })
}
