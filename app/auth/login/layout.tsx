
import { Jost } from 'next/font/google'


const jost = Jost({ subsets: ['latin'] })


export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jost.className}>
      
        <main className='flex w-full'>
          
          {children}
        </main>
      
      </body>
    </html>
  )
}