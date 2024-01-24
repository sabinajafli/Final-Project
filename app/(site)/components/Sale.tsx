'use server'
import ProductSwiper from "./ProductSwiper"


const Sale = () => {
  return (
    <div className='px-5 lg:px-10'>
        <div className='pt-10 text-center'>
            <h2 className="text-[#111111] text-[33px] mb-1">Special Offers</h2>
            <p className="text-[#555]">Unbeatable prices, endless style – shop now and elevate your look.</p>
        </div>
        <ProductSwiper />
    </div>
  )
}

export default Sale