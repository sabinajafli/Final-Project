'use client'
import Customer from "./Customer"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


const CustomerSection = () => {
    const data = [
        {
          img: '/h-main-test1.webp',
          comment:
            "A perfect product, it keeps you very warm without over heating. True to size, I couldn't be happier with the purchase... Thank you! 🤗",
          name: 'Algistino Lionel - Verified Buyer',
        },
        {
          img: '/h-main-test2.webp',
          comment:
            'Great to be able to order everything I needed from the comfort of my home and the delivery was extremely quick. Thank you. Recommend... 🥰',
          name: 'Siarhei Dzenisenka - Verified Buyer',
        },
        {
          img: '/h-main-test3.webp',
          comment:
            'These are sooo pretty and very comfy. Perfect color as well. I love wearing these with a neutral top and Chelsea boots. Wicked cute...😍',
          name: 'Sarah Bond - Verified Buyer',
        },
    ];
  return (
    <div className="px-5 md:px-10 lg:px-10 xl:px-10">
        <div className='pt-10 text-center'>
            <h2 className="text-[#111111] text-[33px] mb-1">Customer Say!</h2>
            <p className="text-[#555]">Customers love our products and we always strive to please them all.</p>
        </div>
        <div className="flex items-center justify-center gap-5 cursor-pointer">
          <Swiper
            loop={true}
            slidesPerView={1}
            breakpoints={{
            648: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            },
            }}
            spaceBetween={10}
          >
            {data.map((customer, index) => (
              <SwiperSlide key={index}>
                <Customer  {...customer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </div>
  )
}

export default CustomerSection