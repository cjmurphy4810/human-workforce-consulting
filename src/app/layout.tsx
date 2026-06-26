import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Human Workforce | Consulting',
  description: 'From AI Opportunity to Operational Certainty. Executive AI implementation partner.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-slate-950 text-white font-sans">
        <Nav />
        <div className="pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
