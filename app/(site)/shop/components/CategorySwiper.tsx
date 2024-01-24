'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import React from 'react'
import { Category } from './Category';

export default function CategorySwiper() {
  const data = [
    {
      img: '/collection16.webp',
      title: 'Shirts',
    },
    {
      img: '/3.webp',
      title: 'Dresses',
    },
    {
      img: '/collection2.webp',
      title: 'Blazer',
    },
    {
      img: '/collection8.webp',
      title: 'Sportswear',
    },
    {
      img: '/collection11.webp',
      title: 'Top T-Shirt',
    },
    {
      img: '/collection9.webp',
      title: 'Winter Coat',
    },
    {
      img: '/collection5_1.webp',
      title: 'New Arrivals',
    },
  ];
  return (
    <div className='py-10 mx-5 lg:mx-10'>
    <Swiper
      spaceBetween={16}
      breakpoints={{
          0: {
            slidesPerView: 2,
        },
          648: {
          slidesPerView: 4, 
        },
          1024: {
              slidesPerView: 5, 
          },
      }}
    >
      {data.map((categoryItem, index) => (
          <SwiperSlide key={index}>
            <Category img={categoryItem.img} title={categoryItem.title} />
          </SwiperSlide>
        ))}
    </Swiper>
    </div>
  )
}
