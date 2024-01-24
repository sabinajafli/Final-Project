import React from 'react'
import Header from '../components/Header'
import BrandsUI from './components/BrandsUI'

export default function page() {
  return (
      <section  className='flex flex-col w-[calc(100%-20%)] border-l border-[#94a3b866]'>
      <Header />
      <BrandsUI />
    </section>
  )
}