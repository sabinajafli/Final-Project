import type { Metadata } from 'next'
import Header from "./checkout/components/Header"
import '../globals.css'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Umino',
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
