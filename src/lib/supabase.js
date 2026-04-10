import { createClient } from '@supabase/supabase-js'

// Single shared Supabase client instance for the whole app.
// Supabase-js automatically handles:
//   - Session persistence (localStorage by default)
//   - Token refresh in the background
//   - Cross-tab session sync
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
