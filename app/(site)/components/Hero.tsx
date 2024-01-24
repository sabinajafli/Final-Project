'use client';
import { Carousel } from 'flowbite-react';
import Link from 'next/link';



const Hero = () => {
  return (
    <div className="h-[550px] md:h-[650px] lg:h-[600px]">
      <Carousel slide={true}>
        <div className='h-[550px] md:h-[650px] lg:h-[836px] relative text-start md:text-center'>
          <img src="/slider1.webp" alt="..." className='object-cover
          md:object-cover lg:object-contain h-full w-full' />
          <div className='absolute top-[30%] md:left-[15%] lg:left-[20%] lg:top-[25%] left-5'>
            <h2 className='text-[36px] leading-tight mb-[15px] text-[#111] md:text-[50px] lg:text-[80px] '>Stylish <br />
            Top Trending</h2>
            <p className='text-[#555] mb-[30px] lg:mb-[50px]'>So soft, you don't want to take it off.</p>
            <Link href='/shop' className='px-[35px] py-[12px] bg-[#111] text-white text-[12px] font-semibold rounded-full lg:px-[66px] lg:py-[15px'>SHOP NOW</Link>
          </div>  
         </div>  

        <div className='h-[550px] md:h-[650px] lg:h-[836px] relative text-start md:text-center'>
          <img src="/slider2.webp" alt="..." className='object-cover
          md:object-cover lg:object-contain h-full w-full' />
          <div className='absolute top-[30%] md:left-[15%] lg:left-[20%] lg:top-[25%] left-5'>
            <h2 className='text-[36px] leading-tight mb-[15px] text-[#111] md:text-[50px] lg:text-[80px] '>Hulton <br />Perfect Simple</h2>
            <p className='text-[#555] mb-[30px] lg:mb-[50px]'>So soft, you don't want to take it off.</p>
            <Link href='/shop' className='px-[35px] py-[12px] bg-[#111] text-white text-[12px] font-semibold rounded-full lg:px-[66px] lg:py-[15px'>SHOP NOW</Link>
          </div>
        </div>

        <div className='h-[550px] md:h-[650px] lg:h-[836px] relative text-start md:text-center'>
          <img src="/slider3.webp" alt="..." className='object-cover
          md:object-cover lg:object-contain h-full w-full' />
          <div className='absolute top-[30%] md:left-[15%] lg:left-[20%] lg:top-[25%] left-5'>
            <h2 className='text-[36px] leading-tight mb-[15px] text-[#111] md:text-[50px] lg:text-[80px] '>Online <br />
            Limited Edition</h2>
            <p className='text-[#555] mb-[30px] lg:mb-[50px]'>So soft, you don't want to take it off.</p>
            <Link href='/shop' className='px-[35px] py-[12px] bg-[#111] text-white text-[12px] font-semibold rounded-full lg:px-[66px] lg:py-[15px'>SHOP NOW</Link>
          </div>
        </div>
      </Carousel>
    </div>

  )
}

export default Hero

