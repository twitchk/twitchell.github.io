import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Twitchell Addai - Mechanical Engineer & AI Enthusiast',
  description: 'Portfolio of Twitchell Addai - Mechanical Engineer with expertise in AI, Machine Learning, and Transportation Engineering',
  keywords: 'Mechanical Engineer, AI, Machine Learning, Transportation Engineering, Python, MATLAB, Oil & Gas',
  authors: [{ name: 'Twitchell Addai' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Twitchell Addai - Portfolio',
    description: 'Mechanical Engineer with expertise in AI, Machine Learning, and Transportation Engineering',
    url: 'https://me.twitchdl.com',
    siteName: 'Twitchell Addai Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
} 