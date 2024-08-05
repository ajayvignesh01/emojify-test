import { useSessionStore } from '@/lib/hooks/zustand/useSessionStore'
import { createClient } from '@/lib/utils/supabase/client'
import useSWRImmutable from 'swr/immutable'

export function useSession() {
  const supabase = createClient()
  const setSession = useSessionStore((state) => state.setSession)

  const fetcher = async () => {
    const {
      data: { session },
      error
    } = await supabase.auth.getSession()
    if (error) throw error

    setSession(session)
    return session
  }

  return useSWRImmutable('session', fetcher, { shouldRetryOnError: false })
}
