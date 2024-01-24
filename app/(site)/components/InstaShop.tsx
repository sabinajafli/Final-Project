'use client'
import InstaShopItem from "./InstaShopItem"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const InstaShop = () => {
    const img = ['/insta1.webp', '/insta2.webp', '/insta3.webp', '/insta4.webp', '/insta5.webp', '/insta6.webp'];
  return (
    <div className="px-5 md:px-10 lg:px-10 xl:px-10">
      <div className='pt-10 text-center'>
        <h2 className="text-[#111111] text-[33px] mb-1">Shop by Gram</h2>
        <p className="text-[#555]">Inspire and let yourself be inspired, from one unique fashion to another.</p>
      </div>
      <div className="flex items-center justify-center">
        <Swiper 
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          648: {
            slidesPerView: 3, 
          },
          1024: {
            slidesPerView: 6, 
          },
        }}>
        {img.map((image, index) => (
          <SwiperSlide key={index}>
          <InstaShopItem img={image}/>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  )
}

export default InstaShop