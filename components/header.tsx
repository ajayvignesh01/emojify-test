import { EmojifyLogo } from '@/components/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  CircleDollarSignIcon,
  CircleHelpIcon,
  CoinsIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  UserRoundIcon
} from 'lucide-react'
import Image from 'next/image'

export function Header() {
  const recents = [
    {
      id: '1',
      name: 'Deadpool portrait',
      src: '/deadpool.png',
      alt: 'deadpool',
      width: 768,
      height: 768,
      date: 'About 109 days ago'
    },
    {
      id: '2',
      name: 'Spiderman jumping',
      src: '/spiderman.png',
      alt: 'spiderman',
      width: 768,
      height: 768,
      date: 'About 130 days ago'
    },
    {
      id: '3',
      name: 'Spongebob starfish',
      src: '/spongebob-starfish.png',
      alt: 'spongbob-starfish',
      width: 768,
      height: 768,
      date: 'About 141 days ago'
    }
  ]

  return (
    <header className='flex w-full flex-col gap-3 bg-white/95 p-3 backdrop-blur supports-[backdrop-filter]:bg-white/60 md:h-16 md:flex-row md:items-center lg:px-4'>
      <div className='flex w-full items-center gap-8'>
        {/* Logo */}
        <EmojifyLogo />

        {/*  */}
        <div className='ml-auto flex items-center gap-2 sm:gap-4'>
          <Button size='sm' variant='outline' className='hidden rounded-full shadow-none sm:flex'>
            Feedback
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className='size-8 cursor-pointer' asChild>
              <Avatar>
                <AvatarImage src='https://vercel.com/api/www/avatar/YUl2lbZ0xz8gEqG79FbF5ytX?s=64' alt='avatar' />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align='end'
              className='max-h-[80vh] w-[360px] min-w-[16rem] overflow-y-auto p-0 md:max-h-[calc(100vh-64px)]'
            >
              <DropdownMenuGroup className='flex items-center justify-between p-4'>
                <DropdownMenuLabel className='grid truncate p-0 text-sm font-normal'>
                  <span className='font-medium'>Ajay</span>
                  <span className='text-zinc-500'>ajayvignesh01@gmail.com</span>
                </DropdownMenuLabel>
                <div className='shrink-0'>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size='sm' variant='outline' className='gap-[6px] rounded-full px-2 text-sm font-medium'>
                          <CoinsIcon className='size-4' />
                          <span className='inline'>200</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>You have 200 credits</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className='my-0' />

              <DropdownMenuGroup className='p-2'>
                <DropdownMenuLabel className='pt-0'>Recent</DropdownMenuLabel>
                {recents.map((recent) => (
                  <DropdownMenuItem key={recent.id} className='gap-3 py-2.5'>
                    <Image
                      src={recent.src}
                      alt={recent.alt}
                      width={recent.width}
                      height={recent.height}
                      className='size-14 rounded-md border'
                    />
                    <div className='flex flex-col'>
                      <span className='truncate font-medium'>{recent.name}</span>
                      <span className='text-xs text-muted-foreground'>{recent.date}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem className='justify-center p-2 text-xs font-medium'>View All</DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className='my-0' />

              <DropdownMenuGroup className='p-2'>
                <DropdownMenuItem className='gap-3 py-2.5'>
                  <LayoutDashboardIcon className='size-4' />
                  <span>Explore</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='gap-3 py-2.5'>
                  <UserRoundIcon className='size-4' />
                  <span>Account</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className='my-0' />

              <DropdownMenuGroup className='p-2'>
                <DropdownMenuItem className='gap-3 py-2.5'>
                  <CircleHelpIcon className='size-4' />
                  <span>FAQs</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='gap-3 py-2.5'>
                  <CreditCardIcon className='size-4' />
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='gap-3 py-2.5'>
                  <CircleDollarSignIcon className='size-4' />
                  <span>Pricing</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator className='my-0' />

              <DropdownMenuGroup className='p-2'>
                <DropdownMenuItem className='gap-3 py-2.5'>
                  <LogOutIcon className='size-4' />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
