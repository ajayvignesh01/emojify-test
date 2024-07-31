import { Header } from '@/components/header'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Emojify',
  description: 'Generate emojis from photos or text.'
}

export default function RootLayout({
  auth,
  children
}: Readonly<{
  auth: React.ReactNode
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen font-sans antialiased`}>
        <Analytics />
        <SpeedInsights />
        <div className='sticky top-0 z-20'>
          <Header />
        </div>
        {auth}
        {children}
      </body>
    </html>
  )
}
