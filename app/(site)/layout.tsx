import type { Metadata } from 'next'
import { Jost } from 'next/font/google'
import '../globals.css'
import Footer from '@/app/(site)/components/Footer'
import Header from '@/app/(site)/components/Header'

const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
