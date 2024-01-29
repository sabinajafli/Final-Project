'use client'
import Order from './Order'
import Delivery from './Delivery'

export default function CheckoutUI() {
  return (
    <section className='flex flex-col lg:flex-row overflow-y-hidden'>
    <Order />
    <Delivery />
    </section>
  )
}
