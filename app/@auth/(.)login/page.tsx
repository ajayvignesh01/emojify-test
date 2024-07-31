'use client'

import { LoginCard } from '@/components/login-card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerFooter } from '@/components/ui/drawer'
import { useMediaQuery } from '@/lib/hooks'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <Dialog open={true} onOpenChange={(open) => router.back()}>
        <DialogContent className='overflow-hidden p-0 sm:max-w-md'>
          <LoginCard className='mx-0 rounded-none border-none shadow-none' />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={true} onOpenChange={(open) => router.back} onClose={() => router.back()}>
      <DrawerContent className='overflow-hidden'>
        <LoginCard
          className={{
            Card: 'mx-0 rounded-none border-none shadow-none sm:max-w-full',
            CardFooter: 'px-4'
          }}
        />
        <DrawerFooter className='bg-accent pt-2'>
          <DrawerClose asChild>
            <Button onClick={() => router.back()} variant='outline'>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
