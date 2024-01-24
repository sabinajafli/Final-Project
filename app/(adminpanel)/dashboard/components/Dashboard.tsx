import React from 'react'
import TotalOrders from './TotalOrders'
import OrderStatus from './OrderStatus'

export default function Dashboard() {
  return (
    <section className='white dark:black px-10 py-10 h-[calc(100%-40px)]'>
      <h1 className='text-[22px] pb-10'>Dashboard Overview</h1>
      <TotalOrders />
      <OrderStatus />
    </section>
  )
}
