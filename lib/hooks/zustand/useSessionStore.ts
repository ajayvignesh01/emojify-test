'use client'

import { createClient } from '@/lib/utils/supabase/client'
import { Session } from '@supabase/supabase-js'
import { create } from 'zustand'

type SessionStore = {
  session: Session | null
  setSession: (session: Session | null) => void
  // mutateSession: () => void
}

export const useSessionStore = create<SessionStore>((set) => ({
  session: null,
  setSession: (session) => set({ session })
  // mutateSession: async () => {
  //   const supabase = createClient()
  //   const {
  //     data: { session }
  //   } = await supabase.auth.getSession()
  //   set(() => ({ session: session }))
  // }
}))
