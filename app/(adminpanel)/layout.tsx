import '../globals.css'
import { Jost } from 'next/font/google'
import Sidebar from './dashboard/components/Sidebar'
import { ThemeProvider } from "./dashboard/components/theme-provider"
import Provider from './Provider'


const jost = Jost({ subsets: ['latin'] })

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jost.className}>
      <Provider>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main className='flex w-full'>
          <Sidebar />
          {children}
        </main>
      </ThemeProvider>
      </Provider>
      </body>
    </html>
  )
}