'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '/app/globals.css'

const Recommendation = () => {
  return (
    <div className='py-10'>
        <h4 className='text-[20px] font-medium mb-5 mt-5'>You may also like</h4>
        <Swiper
            spaceBetween={16}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            breakpoints={{
                1024: {
                    slidesPerView: 2, 
                },
            }}
            pagination={{
                clickable: true,
                el: '.swiper-pagination',
            }}
        >
            <SwiperSlide>
            <div className=' border py-2 px-4 h-[135px] flex rounded-xl'>
            <img src="/1.webp" alt="" className='h-[115px] w-[83px] mr-4' />
            <div className='flex flex-col items-start justify-center gap-2'>
                <h3>
                Square Textured Striped
                </h3>
                <div>
                    <span className='text-[#dd3327] font-medium text-[14px] mr-2'>$20.00</span>
                    <span className='text-[#757575] text-[14px] line-through'>$40.00</span>
                </div>
                <button className='text-[12px] font-medium underline'>
                    ADD TO CART
                </button>
            </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='border py-2 px-4 h-[135px] flex rounded-xl'>
            <img src="/1.webp" alt="" className='h-[115px] w-[83px] mr-4' />
            <div className='flex flex-col items-start justify-center gap-2'>
                <h3>
                Square Textured Striped
                </h3>
                <div>
                    <span className='text-[#dd3327] font-medium text-[14px] mr-2'>$20.00</span>
                    <span className='text-[#757575] text-[14px] line-through'>$40.00</span>
                </div>
                <button className='text-[12px] font-medium underline'>
                    ADD TO CART
                </button>
            </div>
        </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='border py-2 px-4 h-[135px] flex rounded-xl'>
            <img src="/1.webp" alt="" className='h-[115px] w-[83px] mr-4' />
            <div className='flex flex-col items-start justify-center gap-2'>
                <h3>
                Square Textured Striped
                </h3>
                <div>
                    <span className='text-[#dd3327] font-medium text-[14px] mr-2'>$20.00</span>
                    <span className='text-[#757575] text-[14px] line-through'>$40.00</span>
                </div>
                <button className='text-[12px] font-medium underline'>
                    ADD TO CART
                </button>
            </div>
        </div>
            </SwiperSlide>
              <div className="swiper-pagination your-pagination-modifier"></div>
        </Swiper>
    </div>
  )
}

export default Recommendation