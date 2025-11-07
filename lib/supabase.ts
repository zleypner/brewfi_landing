import { createClient } from '@supabase/supabase-js'

// ✅ Use environment variables for security and flexibility
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 🔍 Debug: Verify environment variables are loaded (remove in production)
if (typeof window !== 'undefined') {
  console.log('🔗 Supabase URL:', supabaseUrl)
  console.log('🔑 Supabase Key exists:', !!supabaseAnonKey)
}

// ✅ Create the Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
