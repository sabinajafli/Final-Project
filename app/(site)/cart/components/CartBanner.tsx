import Link from 'next/link'
import React from 'react'

const CartBanner = () => {
  return (
    <div className='w-full h-[200px] text-center'>
        <div className='text-center my-10'>
          <h1 className='text-[45px] pb-[5px]'>Your Cart</h1>
          <ul className='flex justify-center text-[15px] text-gray-700'>
            <li><Link href='/' className='pr-2'>Home</Link>/</li>
            <li className='pl-2'>Your Shopping Cart</li>
          </ul>
        </div> 
        <div className='flex justify-center gap-2 py-4 text-[14px] rounded-lg bg-[#e8f5ff]'>
            🔥
            <p>You're out of time! Checkout now to avoid losing your order!</p>
        </div>
    </div>
  )
}

export default CartBanner