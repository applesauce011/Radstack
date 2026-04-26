// GET /api/admin-analytics
// Returns aggregated analytics event data for the admin dashboard.
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
  if (!checkAdmin(req)) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const since = new Date()
  since.setDate(since.getDate() - 30)
  const sinceIso = since.toISOString()

  // Total counts by event name (last 30 days)
  const { data: rows, error } = await supabaseAdmin
    .from('analytics_events')
    .select('event_name, created_at')
    .gte('created_at', sinceIso)
    .order('created_at', { ascending: false })

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  // Aggregate counts per event name
  const counts = {}
  const daily = {}

  for (const row of rows ?? []) {
    counts[row.event_name] = (counts[row.event_name] || 0) + 1

    const day = row.created_at.slice(0, 10)
    if (!daily[day]) daily[day] = {}
    daily[day][row.event_name] = (daily[day][row.event_name] || 0) + 1
  }

  // Build last-14-days array
  const days = []
  for (let i = 13; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    const key = d.toISOString().slice(0, 10)
    days.push({ date: key, events: daily[key] || {} })
  }

  const FUNNEL = [
    { key: 'pricing_page_viewed', label: 'Viewed Pricing' },
    { key: 'pricing_plan_clicked', label: 'Clicked a Plan' },
    { key: 'checkout_started', label: 'Started Checkout' },
  ]

  const funnel = FUNNEL.map(step => ({
    ...step,
    count: counts[step.key] || 0,
  }))

  return res.status(200).json({ counts, days, funnel, total: rows?.length ?? 0 })
}
