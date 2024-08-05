'use server'

import { getURL } from '@/lib/utils'
import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

export async function login() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: getURL('/api/auth/callback')
    }
  })

  // TODO: error handling
  if (!error && data) redirect(data.url)
}
