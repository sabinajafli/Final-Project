import Link from 'next/link'
import React from 'react'

const FeaturedCollection = () => {
  return (
    <section className='py-5 px-5 md:px-10 lg:px-10 xl:px-10'>
        <div className='pt-10 text-center'>
            <h2 className="text-[#111111] text-[33px] mb-1">Featured Collections</h2>
            <p className="text-[#555]">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
        </div>
        {/* Mobile */}
        <div className='grid grid-cols-2 gap-4 grid-rows-1 md:hidden mt-10 cursor-pointer'>
        <div>
          <div className='mb-4 relative rounded-xl'>
            <img src="/main-grid.webp" alt="" className='rounded-xl'/>
            <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-2 px-10 rounded-full font-semibold'>Clothing</Link>
          </div>
          <div className='relative rounded-xl'>
            <img src="/glasses.webp" alt="" className='rounded-xl'/>
            <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-2 px-10 rounded-full font-semibold'>Sunglasses</Link>
          </div>
        </div>
        <div>
          <div className='mb-4 relative rounded-xl'>
            <img src="/bag.webp" alt="" className='rounded-xl'/>
            <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-2 px-10 rounded-full font-semibold'>Bags</Link>
          </div>
          <div className='relative rounded-xl'>
            <img src="/shoes.webp" alt="" className='rounded-xl'/>
            <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-2 px-10 rounded-full font-semibold'>Sneaker</Link>
          </div>
        </div>
        </div>
        {/* Web */}
        <div className='hidden md:grid md:grid-cols-3 py-10 gap-10'>
          <div className='overflow-hidden rounded-xl relative'>
            <img src="/main-grid.webp" alt="" className='hover:scale-110 transition ease-in delay-150 rounded-xl' />
            <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-3 px-20 rounded-full font-semibold'>Clothing</Link>
          </div>
          <div className='grid grid-rows-2 gap-7 rounded-xl'>
            <div className='overflow-hidden rounded-xl relative'>
              <img src="/glasses.webp" alt="" className='hover:scale-110 transition ease-in delay-150 overflow-hidden rounded-xl' />
               <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-3 px-20 rounded-full font-semibold'>Sunglasses</Link>
            </div>
            <div className='rounded-xl  overflow-hidden relative'>
              <img src="/bag.webp" alt="" className='hover:scale-110 transition ease-in delay-150 rounded-xl' />
               <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-3 px-20 rounded-full font-semibold'>Bags</Link>
            </div>
          </div>
          <div className='rounded-xl overflow-hidden transition delay-300 relative'>
            <img src="/shoes.webp" alt="" className='hover:scale-110 transition ease-in delay-150 rounded-xl' />
             <Link href='/' className='absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] py-3 px-20 rounded-full font-semibold'>Sneakers</Link>
          </div>
        </div>
    </section>
  )
}

export default FeaturedCollection