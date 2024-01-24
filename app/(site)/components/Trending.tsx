'use server'
import ProductSwiper from "./ProductSwiper"


const SimilarProduct = () => {
  return (
    <div className='px-5 lg:px-10'>
        <div className='pt-10 text-center'>
            <h2 className="text-[#111111] text-[33px] mb-1">Trending this Week</h2>
            <p className="text-[#555]">Here’s some of our most popular products people are in love with.</p>
        </div>
        <ProductSwiper />
    </div>
  )
}

export default SimilarProduct