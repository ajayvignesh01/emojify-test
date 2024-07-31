import { EmojifyLogo, Google } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ComponentPropsWithoutRef } from 'react'

interface LoginCardProps extends Omit<ComponentPropsWithoutRef<'div'>, 'className'> {
  className?:
    | string
    | {
        Card?: string
        CardHeader?: string
        CardContent?: string
        CardFooter?: string
      }
}

export function LoginCard({ className, ...props }: LoginCardProps) {
  return (
    <Card
      className={cn(
        'mx-5 overflow-hidden sm:mx-auto sm:w-full sm:max-w-md',
        typeof className === 'string' ? className : className?.Card
      )}
      {...props}
    >
      <CardHeader className={cn('', typeof className === 'object' && className?.CardHeader)}>
        <EmojifyLogo className='mx-auto size-12' />
      </CardHeader>
      <CardContent className={cn('', typeof className === 'object' && className?.CardContent)}>
        <h1 className='text-center text-3xl'>Emojify</h1>
        <p className='mt-2 text-center text-sm text-accent-foreground'>
          Generate emojis from text or photos using AI. <br />
          <span className='text-center text-sm text-muted-foreground'>
            <Link className='underline underline-offset-4 hover:text-primary' href='/terms'>
              Terms of Service
            </Link>
            {' and '}
            <Link className='underline underline-offset-4 hover:text-primary' href='/privacy'>
              Privacy Policy
            </Link>
            .
          </span>
        </p>
      </CardContent>
      <CardFooter className={cn('bg-accent pt-6', typeof className === 'object' && className?.CardFooter)}>
        <Button size='lg' className='w-full gap-2'>
          <Google />
          <span>Login with Google</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
