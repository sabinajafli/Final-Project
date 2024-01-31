'use client'
import Product from './Product'
import Recommendation from './Recommendation'
import Shipping from './Shipping'
import Link from 'next/link';
import {CartItem} from './Product'


interface CartUIProps {
  cartItems: CartItem[]; 
}


const CartUI = ({ cartItems }: CartUIProps) => {
  return (
    <div className="flex flex-col  md:flex-row md:justify-between ">
      {cartItems.length > 0 ? (
        <>
        <div className="w-full md:w-[73%]">
          <Product />
          <Recommendation />
        </div>
        <Shipping />
        </>
      ) : (
        <div className='w-full pt-10 pb-32 px-10 border-b text-center'>
        <button className="py-[18px] px-[50px] text-[#111} rounded-full bg-white border text-[13px] font-medium hover:text-white hover:bg-[#111] transition-all duration-200">
          <Link href="/shop">CONTINUE SHOPPING</Link>
        </button>
      </div>
    )}
    </div>
  );
};

export default CartUI;
