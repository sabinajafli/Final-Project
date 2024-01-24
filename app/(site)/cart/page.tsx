import React from 'react'
import CartBanner from './components/CartBanner'
import CartUI from './components/CartUI'
import Shipping from './components/Shipping'
import SimilarProduct from './components/SimilarProduct'

const page = () => {
  return (
    <div className='px-5 md:px-5 lg:px-10'>
      <CartBanner />
      <div className="flex flex-col  md:flex-row md:justify-between ">
        <CartUI />
        <Shipping />
      </div>
      <SimilarProduct />
    </div>
  )
}

export default page