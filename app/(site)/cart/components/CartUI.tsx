import React from 'react'
import Product from './Product'
import Recommendation from './Recommendation'

const CartUI = () => {
  return (
    <div className='w-full md:w-[73%]'>
        <Product />
        <Recommendation />
    </div>
  )
}

export default CartUI