import React from 'react'
import ShopHeader from './components/ShopHeader'
import CategorySwiper from './components/CategorySwiper'
import ShopUi from './components/ShopUi'

const page = () => {
  return (
    <section>
      <ShopHeader />
      <CategorySwiper />
      <ShopUi />
    </section>
  )
}

export default page