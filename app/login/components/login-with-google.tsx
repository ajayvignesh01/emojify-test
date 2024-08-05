'use client'

import { Google, LoaderCircleIcon } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { useFormStatus } from 'react-dom'

export function SignInWithGoogle() {
  const { pending } = useFormStatus()

  return (
    <Button size='lg' className='w-full gap-3' type='submit' disabled={pending}>
      {!pending ? <Google /> : <LoaderCircleIcon />}
      <span>Login with Google</span>
    </Button>
  )
}
