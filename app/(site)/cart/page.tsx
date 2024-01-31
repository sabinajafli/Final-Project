'use client'
import React, { useState } from 'react'
import CartBanner from './components/CartBanner'
import CartUI from './components/CartUI'
import SimilarProduct from './components/SimilarProduct'
import { CartItem } from './components/Product'


const page = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <div className='px-5 md:px-5 lg:px-10'>
      <CartBanner />
        <CartUI cartItems={cartItems} />
      <SimilarProduct />
    </div>
  )
}

export default page