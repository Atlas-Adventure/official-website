// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js'


// Ces variables sont chargées depuis .env.local
const supabaseUrl     = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// On n’utilise PAS le service_role ici, pour ne pas l’exposer
export const supabase = createClient(supabaseUrl, supabaseAnonKey)