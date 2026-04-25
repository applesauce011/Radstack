import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables — check your .env file')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,      // Don't persist session across page reloads
    autoRefreshToken: true,     // Silently refresh access tokens within a session
    detectSessionInUrl: true,   // Handle OAuth / magic-link redirects
    storageKey: 'radstack-auth-v1',
  },
})
