import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getURL = (input: string = '') => {
  return process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}${input}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${input}`
      : `http://localhost:3000${input}`
}

// run `bun tunnel` and set TUNNEL_URL
export const getDomain = (input: string = '') => {
  const domain =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}${input}`
      : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
        ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${input}`
        : `${process.env.TUNNEL_URL!}${input}`

  return domain + input
}

export function getInitials(fullName: string) {
  if (!fullName) return ''

  const names = fullName.trim().split(' ')
  return names.reduce((acc, curr, index) => {
    if (index === 0 || index === names.length - 1) {
      acc += curr.charAt(0).toUpperCase()
    }
    return acc
  }, '')
}
