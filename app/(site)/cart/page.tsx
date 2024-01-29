import React from 'react'
import CartBanner from './components/CartBanner'
import CartUI from './components/CartUI'
import SimilarProduct from './components/SimilarProduct'

const page = () => {
  return (
    <div className='px-5 md:px-5 lg:px-10'>
      <CartBanner />
        <CartUI />
      <SimilarProduct />
    </div>
  )
}

export default page