'use client'
import { ThemeProvider } from 'next-themes'
import Dashboard from './components/Dashboard'
import Header from './components/Header'

export default function page() {
  return (
    <ThemeProvider attribute="class">
      <section  className='flex flex-col w-[calc(100%-20%)] border-l border-[#94a3b866]'>
        <Header />
        <Dashboard />
      </section>
    </ThemeProvider>
  )
}
