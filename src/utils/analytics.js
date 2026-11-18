import { supabase } from '../lib/supabase'

export async function trackEvent(name, properties = {}) {
  let token = null
  try {
    const { data: { session } } = await supabase.auth.getSession()
    token = session?.access_token ?? null
  } catch {}

  fetch('/api/track-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ event_name: name, properties }),
  }).catch(() => {})
}
