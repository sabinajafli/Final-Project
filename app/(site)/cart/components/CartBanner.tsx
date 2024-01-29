import Link from 'next/link'
import React from 'react'

const CartBanner = () => {
  return (
    <div className='w-full h-[140px] text-center'>
        <div className='text-center my-10'>
          <h1 className='text-[45px] pb-[5px]'>Your Cart</h1>
          <ul className='flex justify-center text-[15px] text-gray-700'>
            <li><Link href='/' className='pr-2'>Home</Link>/</li>
            <li className='pl-2'>Your Shopping Cart</li>
          </ul>
        </div> 
    </div>
  )
}

export default CartBanner