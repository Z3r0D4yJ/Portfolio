import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { GradientCursor } from '@/lib/gradient-cursor'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio Jasper Van Zeir',
  description:
    'Cybersecurity student, active-duty Sergeant in the Belgian Armed Forces IT division, and red team operator.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-text font-body text-[15px] leading-[1.7] overflow-x-hidden">
        <GradientCursor color="#00ff88" size={500} opacity={0.08} spread={100} zIndex={0} />
        {children}
      </body>
    </html>
  )
}
