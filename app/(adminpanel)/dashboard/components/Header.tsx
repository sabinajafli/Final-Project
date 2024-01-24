'use client'

import { ModeToggle } from "./ModeToggle"



export default function Header() {
  return (
    <header className='h-18 w-full border-b flex items-center justify-between light dark:dark py-4 px-10'>
        <ModeToggle />
        <div>Welcome!</div>
    </header>
  )
}
