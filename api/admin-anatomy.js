// ============================================================
// Admin: Anatomy Access Management
// GET    /api/admin-anatomy  → list users with anatomy access
// POST   /api/admin-anatomy  → grant access by email
// DELETE /api/admin-anatomy  → revoke access by email
//
// Protected by ADMIN_SECRET env var (same as admin-codes.js).
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
  if (!process.env.ADMIN_SECRET) return false
  return secret === process.env.ADMIN_SECRET
}

async function findUserByEmail(email) {
  // Page through users to find by email (admin API has no direct email filter)
  let page = 1
  while (true) {
    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers({
      page,
      perPage: 1000,
    })
    if (error || !users || users.length === 0) break
    const found = users.find(u => u.email?.toLowerCase() === email.toLowerCase())
    if (found) return found
    if (users.length < 1000) break
    page++
  }
  return null
}

export default async function handler(req, res) {
  if (!checkAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  // ── GET: list users with anatomy access ──────────────────
  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin.rpc('get_anatomy_access_users')
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ users: data })
  }

  // ── POST: grant anatomy access by email ──────────────────
  if (req.method === 'POST') {
    const { email } = req.body
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'email is required.' })
    }

    const user = await findUserByEmail(email.trim())
    if (!user) {
      return res.status(404).json({ error: `No account found for "${email}". The user must sign up first.` })
    }

    const { error } = await supabaseAdmin
      .from('subscriptions')
      .upsert(
        { user_id: user.id, has_anatomy_access: true },
        { onConflict: 'user_id' }
      )

    if (error) return res.status(500).json({ error: error.message })

    console.log(`[admin-anatomy] granted anatomy access to ${email} (${user.id})`)
    return res.status(200).json({ success: true, email: user.email, user_id: user.id })
  }

  // ── DELETE: revoke anatomy access by email ────────────────
  if (req.method === 'DELETE') {
    const { email } = req.body
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'email is required.' })
    }

    const user = await findUserByEmail(email.trim())
    if (!user) {
      return res.status(404).json({ error: `No account found for "${email}".` })
    }

    const { error } = await supabaseAdmin
      .from('subscriptions')
      .update({ has_anatomy_access: false })
      .eq('user_id', user.id)

    if (error) return res.status(500).json({ error: error.message })

    console.log(`[admin-anatomy] revoked anatomy access from ${email} (${user.id})`)
    return res.status(200).json({ success: true })
  }

  res.status(405).json({ error: 'Method not allowed' })
}
