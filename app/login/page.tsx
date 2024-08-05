import { LoginCard } from '@/app/login/components/login-card'

export default async function Login() {
  return (
    <div className='flex min-h-[calc(100vh_-_theme(spacing.14))] flex-col justify-center py-12 sm:px-8 md:min-h-[calc(100vh_-_theme(spacing.16))] lg:px-8'>
      <LoginCard />
    </div>
  )
}
