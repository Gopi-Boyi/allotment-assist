import { Chivo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

const chivo = Chivo({ subsets: ['latin'], variable: '--font-sans' })
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Allotment Assist - Aditya University',
  description: 'Book your MCA reporting slot, prepare documents, and navigate Aditya University campus for admissions.',
  openGraph: {
    title: 'Allotment Assist - Aditya University',
    description: 'Book your MCA reporting slot, prepare documents, and navigate Aditya University campus for admissions.',
    images: ['/aditya-university-logo.svg'],
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/aditya-university-logo.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#fbfaf6' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
