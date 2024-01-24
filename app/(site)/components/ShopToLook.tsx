'use client'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ShopToLook = () => {
  return (
    <div className='flex flex-nowrap gap-8 px-5 py-10'>
       <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
            648: {
            slidesPerView: 2, 
          },
            1024: {
                slidesPerView: 3, 
            },
        }}
    >
      <SwiperSlide>
        <div className='overflow-hidden cursor-pointer rounded-2xl relative'>
            <img src="/main-banner-1.webp" alt="" className='hover:scale-110 transition ease-in delay-150 inline-block' />
            <div className='absolute bottom-[60px] left-[20px] text-[#111111]'>
              <p className='text-[12px] font-medium'>
                ONLINE EXCULISIVE
              </p>
              <h3 className='text-[36px] text-medium'>Oversized Shirt</h3>
              <p className='text-[12px] font-semibold underline'>
                <Link href='/'>SHOP THE LOOK</Link>
              </p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='overflow-hidden cursor-pointer rounded-2xl relative'>
            <img src="/main-banner-2.webp" alt="" className='hover:scale-110 transition ease-in delay-150 inline-block' />
            <div className='absolute bottom-[60px] left-[20px] text-[#111111]'>
              <p className='text-[12px] font-medium'>
                BEST-SELLERS
              </p>
              <h3 className='text-[36px] text-medium'>Unique SS'23</h3>
              <p className='text-[12px] font-semibold underline'>
                <Link href='/'>SHOP THE LOOK</Link>
              </p>
            </div>
          </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='overflow-hidden cursor-pointer rounded-2xl relative'>
            <img src="/main-banner-3_1.webp" alt="" className='hover:scale-110 transition ease-in delay-150 w-[926px] h-full inline-block' />
            <div className='absolute bottom-[60px] left-[20px] text-[#111111]'>
              <p className='text-[12px] font-medium'>
                LIMITED EDITION
              </p>
              <h3 className='text-[36px] text-medium'>Autumn Trending</h3>
              <p className='text-[12px] font-semibold underline'>
                <Link href='/'>SHOP THE LOOK</Link>
              </p>
            </div>
          </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default ShopToLook