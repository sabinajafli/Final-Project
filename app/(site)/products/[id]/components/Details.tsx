import { Checkbox } from '@/components/ui/checkbox';
import React from 'react'
import { IoIosHeartEmpty } from 'react-icons/io'
import { MdStarRate } from 'react-icons/md'
import { VscLayers } from 'react-icons/vsc'

interface DetailProps {
  productDetails: { 
    title: string 
    productPrice: number
    salePrice: number
    description: string
    stock: number
  };
}

export default function Details({productDetails}: DetailProps) {

  return (
    <div className='w-full md:w-1/2'>
      <div>
        {productDetails.salePrice != null && productDetails.salePrice !== 0 ? (
            <span className='w-10 text-white bg-red-600 px-2 text-[14px] rounded-full'>
              {((productDetails.productPrice - productDetails.salePrice) / productDetails.productPrice * 100).toFixed(0)}%
            </span>
          ) : productDetails.stock === 0 ? (
            <span className='text-white bg-red-600 px-2 text-[14px] rounded-full'>Sold Out</span>
          ) : (
            null
          )}
      </div>
        <h1 className="text-[30px] mb-1">{productDetails.title}</h1>
        <div className='flex items-center gap-1'>
          <div className='flex'>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </div>
          <p className="text-[#555] text-[14px]">1 reviews</p>
        </div>
        <p className="text-[#555] my-5">Sku: <span className="text-[#111]">SKU_15</span></p>
        {productDetails.salePrice !== null && productDetails.salePrice !== 0 ? (
        <div>
        <span className="text-[30px] text-[#dd3327] font-semibold">${productDetails.salePrice.toFixed(2)}</span>
        <span className='text-[20px] text-[#555] line-through ml-2'>${productDetails.productPrice.toFixed(2)}</span>
        </div>
        ) : (
          <span className="text-[30px] text-[#dd3327] font-semibold">${productDetails.productPrice.toFixed(2)}</span>
        )}
        <p></p>
        <p className="my-10 text-[#555]">{productDetails.description}</p>
        <div className='text-[#555] mb-6'>
          {productDetails.stock > 0 ? (
            `Hurry Up! Only ${productDetails.stock} left in stock!`
          ) : (
            'Our stocks will be replenished!'
          )}
        </div>
        <div className='w-full h-[6px] rounded-full bg-[#dd3327] mb-6'></div>
        <div className='flex items-center justify-between mt-3'>
          <div className='w-[120px] border h-[42px] flex items-center justify-center bg-[#efefef] rounded-full'>
            <button>–</button>
            <input type="number" defaultValue={1} className="w-[60px] h-8 border-0 bg-[#efefef] text-center" />
            <button>+</button>
          </div>
          <button
            className={`bg-[#111] px-10 py-3 rounded-full text-white text-[12px] font-medium w-[60%] md:w-[50%] lg:w-[65%] border border-[#111] transition-all duration-150 ${
              productDetails.stock === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:text-[#111]'
            }`}
            disabled={productDetails.stock === 0}
          >
            {productDetails.stock === 0 ? 'SOLD OUT' : 'ADD TO CART'}
          </button>
          <button  className='w-[42px] h-[42px] rounded-full bg-white hover:bg-[#111] text-[#111] hover:text-white flex justify-center items-center  transition-all duration-200 border border-[#11111183]' ><IoIosHeartEmpty className=' inline-block' /></button>
          <button  className='w-[42px] h-[42px] rounded-full bg-white hover:bg-[#111] text-[#111] hover:text-white flex justify-center items-center  transition-all duration-200 border border-[#11111183]' ><VscLayers className='text-[14px] inline-block' /></button>
        </div>
        <div className='mt-8 flex flex-col gap-5'>
          <div className='flex items-center gap-2 text-[#111]'>
            <Checkbox />
            <label htmlFor="">I agree with  
            <span className='underline ml-2'>Terms & Conditions</span></label>
          </div>
          <button className='bg-[#555] px-10 py-3 rounded-full text-white text-[12px] font-medium w-full'>MORE PAYMENT OPTIONS</button>
        </div>
    </div>
  )
}
