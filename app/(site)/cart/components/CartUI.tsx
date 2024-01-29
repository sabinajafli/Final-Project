'use client'
import { API } from '@/config/axios';
import Product from './Product'
import Recommendation from './Recommendation'
import Shipping from './Shipping'
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BasketItem {
  _id: string;
  userId: string;
  productId: string;
  productCount: number;
}


const CartUI = () => {
  const [basketData, setBasketData] = useState<BasketItem[] | null>(null);
  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    const fetchBasketData = async () => {
      try {
        const response = await API.get('/site/basket');
        setBasketData(response.data.data);

        if (response.data.data?.length > 0) {
          const productIds = response.data.data.map((item: any) => item.productId);

          const productDetailsResponse = await Promise.all(
            productIds.map((productId: string) => API.get(`/site/products/${productId}`))
          );

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
    const product = productDetails?.find((p: { _id: string }) => p._id === item.productId);
    if (product) {
      const price = product.salePrice === 0 ? product.productPrice : product.salePrice;
      acc += price * item.productCount;
    }
    return acc;
  }, 0);

  return (
    <div className="flex flex-col  md:flex-row md:justify-between ">
      {basketData && basketData.length > 0 ? (
        <div className="w-full md:w-[73%]">
          <Product productDetails={productDetails} />
          <Recommendation />
        </div>
      ) : (
        <div>
          <button className="py-[11px] px-[30px] text-white rounded-full bg-[#111] text-[12px]">
            <Link href="/shop">RETURN TO SHOP</Link>
          </button>
        </div>
      )}
      <Shipping total={total} />
    </div>
  );
};

export default CartUI;
