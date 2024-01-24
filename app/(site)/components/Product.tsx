'use client'
import Link from 'next/link';
import { MdStarRate } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { BiCart } from "react-icons/bi";
import { VscLayers } from "react-icons/vsc";
import ProductDialog from './ProductDialog';
import { useState } from 'react';
import { API } from '@/config/axios';

export interface ProductItem {
  availability: string;
  brand: string;
  price: number;
  _id: string;
  title: string;
  description: string;
  productPrice: number;
  salePrice: number;
  brandId: string;
  stock: number;
  images: { public_id: string; url: string }[];
}

interface ProductProps {
  productItem: ProductItem;
}

const Product: React.FC<ProductProps> = ({ productItem }) => {
  const firstImageUrl = productItem.images[0]?.url;
  const secondImageUrl = productItem.images[1]?.url;
  const [quantity, setQuantity] = useState(1);
  

  const handleAddToCart = async () => {
    try {
      const response = await API.post('/site/basket', {
        basket: [
          {
            productId: productItem._id,
            productCount: quantity,
          },
        ],
      });
      if (response.status === 200) {
        console.log('Product added to cart successfully');
      } else {
        console.error('Failed to add product to cart');
      }
    } catch (error) {
      console.error('Error while processing the request:', error);
    }
  };
  

  return (
    <div className='w-full'>
      <div key={productItem._id} className='group relative overflow-hidden rounded-xl w-full'>
        <Link href={`/products/${productItem._id}`} className='relative overflow-hidden rounded-xl'>
          {firstImageUrl && <img src={firstImageUrl} alt="" />}
          {secondImageUrl && (
            <img
              src={secondImageUrl}
              alt=""
              className='hidden lg:block absolute top-0 opacity-0 group-hover:opacity-100 group-hover:scale-[1.1] transition-all duration-200 overflow-hidden'
            />
          )}
        </Link>
        <div className='absolute top-3 left-3 text-white bg-red-600 px-2 text-[14px] rounded-full'>
          {productItem.salePrice != null && productItem.salePrice !== 0 ? (
            <span>
              {((productItem.productPrice - productItem.salePrice) / productItem.productPrice * 100).toFixed(0)}%
            </span>
          ) : productItem.stock === 0 ? (
            <span>Sold out</span>
          ) : (
            null
          )}
        </div>
        <div className='absolute top-3 right-3 hidden lg:flex flex-col items-end gap-2'>
          <div className='group flex items-center gap-2'>
            <button className='w-7 h-7 rounded-full bg-white hover:bg-[#111] hover:text-white flex justify-center items-center group-hover:opacity-100 transition-all duration-200 opacity-0'>
              <IoIosHeartEmpty className='text-[14px] inline-block' />
            </button>
          </div>
          <div className='flex items-center gap-5'>
            <button className='w-7 h-7 rounded-full bg-white hover:bg-[#111] hover:text-white flex justify-center items-center group-hover:opacity-100 transition-all duration-200 opacity-0'>
              <VscLayers className='text-[14px] inline-block' />
            </button>
          </div>
          <div className='flex items-center gap-5'>
            <ProductDialog productItem={productItem} />
          </div>
        </div>
        <div className='lg:hidden absolute bottom-3 right-3 flex flex-col gap-2'>
          <button className='w-7 h-7 rounded-full bg-white hover:bg-[#111] hover:text-white flex justify-center items-center  transition-all duration-200' >
            <IoIosHeartEmpty className=' inline-block' />
          </button>
          <ProductDialog productItem={productItem} />
          <button
            className={`w-7 h-7 rounded-full bg-white hover:bg-[#111] hover:text-white flex justify-center items-center transition-all duration-200 ${
              productItem.stock === 0 ? 'cursor-not-allowed' : ''
            }`}
            disabled={productItem.stock === 0}
          >
            <BiCart className='align-middle inline-block text-center' />
          </button>
        </div>
        <div className='group-hover:opacity-100 transition-all duration-200 opacity-0 hidden lg:block absolute bottom-3 text-center w-full px-3'>
          <button
            onClick={handleAddToCart}
            className={`${
              productItem.stock === 0
                ? 'bg-white hover:bg-[#111] text-[#111] hover:text-white cursor-not-allowed'
                : 'bg-white hover:bg-[#111] text-[#111] hover:text-white'
            } w-full py-2 rounded-full transition-all duration-200 text-[12px] font-medium`}
            disabled={productItem.stock === 0}
          >
            {productItem.stock === 0 ? 'SOLD OUT' : 'ADD TO CART'}
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-2 mt-2'>
        <h3 key={productItem.brandId}>
          <Link href='/product/'>{productItem.title}</Link>
        </h3>
        <div className='flex'>
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
        </div>
        <div>
          {productItem.salePrice !== null && productItem.salePrice !== 0 ? (
            <>
              <span className='text-red-600 mr-2'>${productItem.salePrice.toFixed(2)}</span>
              <span className='text-[14px] last:line-through'>${productItem.productPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className='text-red-600'>${productItem.productPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
