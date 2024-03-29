'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from './Product';
import { ProductItem } from './Product';
import { useEffect, useState } from 'react';
import { API } from '@/config/axios';
import { Skeleton } from "@/components/ui/skeleton"


const ProductSwiper = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
    API.get('/site/products')
      .then(response => {
        setProducts(response.data.data.product);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (products.length === 0) {
    console.log('Rendering Skeletons...');
    return (
      <div className="flex items-center w-full h-[550px] space-x-4">
        <Skeleton className="h-[500px] w-1/4 bg-[#b3b3b3]" />
        <Skeleton className="h-[500px] w-1/4 bg-[#b3b3b3]" />
        <Skeleton className="h-[500px] w-1/4 bg-[#b3b3b3]" />
        <Skeleton className="h-[500px] w-1/4 bg-[#b3b3b3]" />
      </div>
    );
  }
  return (
    <div className='py-10'>
        <Swiper
        spaceBetween={20}
        breakpoints={{
          0: {
            slidesPerView: 2
          },
          648: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 4 
          },
        }}
        >
          {products.slice(0, 5).map(productItem => (
          <SwiperSlide key={productItem._id}>
            <Product productItem={productItem} />
          </SwiperSlide>
        ))}
        </Swiper>
    </div>
  )
}

export default ProductSwiper