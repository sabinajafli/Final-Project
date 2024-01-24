'use client'
import Header from '../components/Header'
import OrdersUI from './components/OrdersUI'


export default function page() {
  return (
        <section className='flex flex-col w-[calc(100%-20%)] border-l border-[#94a3b866]'>
            <Header />
            <OrdersUI />
        </section>
  )
}
