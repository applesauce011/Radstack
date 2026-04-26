// POST /api/track-event
// Fire-and-forget analytics event ingestion. No auth required.
// Body: { event_name: string, properties?: object }

import { createClient } from '@supabase/supabase-js'
import { createClient as createUserClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } }
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { event_name, properties = {} } = req.body || {}
  if (!event_name || typeof event_name !== 'string') {
    return res.status(400).json({ error: 'event_name is required' })
  }

  // Optionally resolve user_id from auth header
  let user_id = null
  const authHeader = req.headers['authorization']
  if (authHeader?.startsWith('Bearer ')) {
    const token = authHeader.slice(7)
    try {
      const userClient = createUserClient(
        process.env.VITE_SUPABASE_URL,
        process.env.VITE_SUPABASE_ANON_KEY,
        { auth: { persistSession: false } }
      )
      const { data } = await userClient.auth.getUser(token)
      user_id = data?.user?.id ?? null
    } catch {
      // ignore — anonymous events are fine
    }
  }

  await supabaseAdmin
    .from('analytics_events')
    .insert({ event_name, properties, user_id })

  return res.status(200).json({ ok: true })
}
