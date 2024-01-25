'use client'
import { API } from '@/config/axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { IoTrashOutline } from "react-icons/io5";

interface BasketItem {
  _id: string;
  userId: string;
  productId: string;
  productCount: number;
}

const Product = () => {
  const [basketData, setBasketData] = useState<BasketItem[] | null>(null);
  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    const fetchBasketData = async () => {
      try {
        const response = await API.get('/site/basket');
        setBasketData(response.data.data);
  
        if (response.data.data?.length > 0) {
          const productIds = response.data.data.map((item: any) => item.productId);
          

          const productDetailsResponse = await Promise.all(productIds.map((productId: string) => API.get(`/site/products/${productId}`)));

          const details = productDetailsResponse.map((response: any) => response.data.data);
          console.log('Product Details:', details);
          setProductDetails(details);
        }
      } catch (error) {
        console.error('Error fetching basket data:', error);
      }
    };
  
    fetchBasketData();
  }, []);

  const total = basketData?.reduce((acc, item) => {
    const product = productDetails?.find((p: { _id: string; }) => p._id === item.productId);
    if (product) {
      const price = product.salePrice === 0 ? product.productPrice : product.salePrice;
      acc += price * item.productCount;
    }
    return acc;
  }, 0);


  return (
    <div className="mt-8">
    <table className="min-w-full bg-white border border-gray-300 hidden md:table">
    <thead>
      <tr className='text-gray-700 text-[14px] font-normal'>
        <th className="py-2 px-4 border-b border-r text-start">Product</th>
        <th className="py-2 px-4 border-b border-r text-start">Quantity</th>
        <th className="py-2 px-3 border-b border-r text-start">Total</th>
        <th className="py-2 px-4 border-b text-start"></th>
      </tr>
    </thead>
    <tbody className='border-b'>
    {productDetails &&
    productDetails.map((product: any) => (
      <tr key={product._id} className='border-b'>
        <td className="py-2 px-4 border-r">
          <div className="flex items-center">
          {product.images.length > 0 && (
            <img src={product.images[0].url} alt="Product Image" className="w-[80px] h-[105px] object-cover mr-4" />
          )}
            <div>
              <p className="font-medium"><Link href='/product/productId'>{product.title}</Link></p>
              <div>
            {
              product.salePrice === 0 ? (
                        <span className="pr-2 font-medium text-[#dd3327]">${product.productPrice.toFixed(2)}</span>
              ) : (
              <>
                <span className="pr-2 font-medium text-[#dd3327]">${product.salePrice.toFixed(2)}</span><span className="text-[15px] text-[#555] line-through">${product.productPrice.toFixed(2)}</span>
              </>
              )
            }
          </div>
            </div>
          </div>
        </td>
        <td className="py-2 px-4 border-r">
          <div className='w-[80px] border text-center px-0 bg-[#efefef]'>
            <button>–</button>
            <input type="number" defaultValue={1} className="w-12 border-0 bg-[#efefef] text-center" />
            <button>+</button>
          </div>
        </td>
        <td className="py-2 px-4 border-r">${((product.salePrice === 0 ? product.productPrice : product.salePrice) * 1).toFixed(2)}</td>
        <td className="py-2 px-2 text-center">
          <button className="text-gray-600 hover:text-gray-700"><IoTrashOutline /></button>
        </td>
      </tr>
      ))
    }
    </tbody>
    </table>

    <table className="min-w-full bg-white border border-gray-300 md:hidden">
    <tbody className='border-b'>
    {productDetails &&
    productDetails.map((product: any) => (
      <tr key={product._id} className='border-b'>
        <td className="py-2 w-[133px] px-4">
        {product.images.length > 0 && (
          <img src={product.images[0].url} alt="Product Image" className="w-[100px] h-[133px] object-cover" />
        )}
        </td>
        <td className='flex flex-col py-2 justify-between gap-2'>
          <p className="font-medium text-[14px]"><Link href='/product/productId'>{product.title}</Link></p>
          <div>
            {
              product.salePrice === 0 ? (
                        <span className="pr-2 font-medium text-[#dd3327]">${product.productPrice.toFixed(2)}</span>
              ) : (
              <>
                <span className="pr-2 font-medium text-[#dd3327]">${product.salePrice.toFixed(2)}</span><span className="text-[15px] text-[#555] line-through">${product.productPrice.toFixed(2)}</span>
              </>
              )
            }
          </div>
          <div className='w-[80px] h-7 text-center bg-[#efefef]'>
            <button>–</button>
            <input type="number" defaultValue={1} className="w-[30px] h-7 border-0 bg-[#efefef] text-center" />
            <button>+</button>
          </div>
          
          <p className='text-[14px] py-1'>${((product.salePrice === 0 ? product.productPrice : product.salePrice) * 1).toFixed(2)}</p>
        </td>
        <td className="py-2 px-2 text-center align-top">
          <button className="text-gray-600 hover:text-gray-700"><IoTrashOutline /></button>
        </td>
      </tr>
      ))
    }
    </tbody>
    </table>
    </div>

  )
}

export default Product