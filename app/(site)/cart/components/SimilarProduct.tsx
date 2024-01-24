import ProductSwiper from '../../components/ProductSwiper'

const SimilarProduct = () => {
  return (
    <div className='py-10'>
        <div className='pt-10 text-center'>
            <h2 className="text-[#111111] text-[33px] mb-1">People Also Bought</h2>
            <p className="text-[#555]">Here’s some of our most similar products people are buying. Click to discover trending style.</p>
        </div>
        <ProductSwiper />
    </div>
  )
}

export default SimilarProduct