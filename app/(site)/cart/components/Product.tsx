'use client'
import Link from 'next/link'
import { IoTrashOutline } from "react-icons/io5";
import { API } from "@/config/axios";
import { useEffect, useState } from "react";

interface ProductDetails {
  data: any;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
}

export interface CartItem {
  productPrice: number;
  title: string;
  productId: string;
  productCount: number;
  productDetails: ProductDetails;
}

const Product = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

    
    const fetchProductDetails = async () => {
      const updatedCart = await Promise.all(
        storedCart.map(async (item: any) => {
          try {
            const response = await API.get(`/site/products/${item.productId}`);
            const productDetails: ProductDetails = response.data;
            return {
              ...item,
              productDetails,
            };
          } catch (error) {
            console.error(`Error fetching product details for ID ${item.productId}:`, error);
            return item;
          }
        })
      );
      setCartItems(updatedCart);
      
    };

    fetchProductDetails();
  }, []);

  const saveCartToLocalStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleDecrease = (productId: string) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.productId === productId
          ? { ...item, productCount: Math.max(item.productCount - 1, 0) }
          : item
      );
  
      const filteredCart = updatedCart.filter((item) => item.productCount > 0);
  
      return filteredCart;
    });
  };

  const handleIncrease = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, productCount: item.productCount + 1 } : item
      )
    );
  };

  const handleRemoveFromBasket = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  };

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);
  

  const calculateTotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((total, item) => {
      const itemTotal = item.productCount * (item.productDetails.data.salePrice || item.productDetails.data.productPrice);
      return total + itemTotal;
    }, 0);
  };

  const totalAmount = calculateTotal(cartItems);

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
    {cartItems.map((item) => (
      <tr key={item.productId} className='border-b'>
        <td className="py-2 px-4 border-r">
          <div className="flex items-center">
            <img src={item.productDetails.data.images[0].url} alt="Product Image" className="w-[80px] h-[105px] object-cover mr-4" />
            <div>
              <p className="font-medium"><Link href='/product/productId'>{item.productDetails.data.title}</Link></p>
              <div>
              {
                item.productDetails.data.salePrice !== 0 ? (
                <>
                  <span className='text-red-600 mr-2'>${item.productDetails.data.salePrice.toFixed(2)}</span>
                  <span className='text-[14px] last:line-through'>${item.productDetails.data.productPrice.toFixed(2)}</span>
                </>
                ) : (
                <span className='text-red-600'>${item.productDetails.data.productPrice.toFixed(2)}</span>
              )}
              </div>
            </div>
          </div>
        </td>
        <td className="py-2 px-4 border-r">
          <div className="w-[80px] border text-center px-0 bg-[#efefef] rounded-[5px]">
            <button onClick={() => handleDecrease(item.productId)}> - </button>
            <input type="number" className="w-12 border-0 bg-[#efefef] text-center" value={item.productCount} readOnly />
            <button onClick={() => handleIncrease(item.productId)}> + </button>
          </div>
        </td>
        <td className="py-2 px-4 border-r">${totalAmount}</td>
        <td className="py-2 px-2 text-center">
          <button className="text-gray-600 hover:text-gray-700" onClick={() => handleRemoveFromBasket(item.productId)}><IoTrashOutline /></button>
        </td>
      </tr>
      ))
    }
    </tbody>
    </table>
   
    <table className="min-w-full bg-white border border-gray-300 md:hidden">
    <tbody className='border-b'>
    {cartItems.map((item) => (
      <tr key={item.productId} className='border-b'>
        <td className="py-2 w-[133px] px-4">
          <img src={item.productDetails.data.images[0].url} alt="Product Image" className="w-[100px] h-[133px] object-cover" />
        </td>
        <td className='flex flex-col py-2 justify-between gap-2'>
          <p className="font-medium text-[14px]"><Link href='/product/productId'>{item.productDetails.data.title}</Link></p>
          <div>
            {
              item.productDetails.data.salePrice !== 0 ? (
              <>
                <span className='text-red-600 mr-2'>${item.productDetails.data.salePrice.toFixed(2)}</span>
                <span className='text-[14px] last:line-through'>${item.productDetails.data.productPrice.toFixed(2)}</span>
              </>
              ) : (
              <span className='text-red-600'>${item.productDetails.data.productPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="w-[80px] border text-center px-0 bg-[#efefef] rounded-[5px]">
            <button onClick={() => handleDecrease(item.productId)}> - </button>
            <input type="number" className="w-12 border-0 bg-[#efefef] text-center" value={item.productCount} readOnly />
            <button onClick={() => handleIncrease(item.productId)}> + </button>
          </div>
          
          <p className='text-[14px] py-1'>${totalAmount}</p>
        </td>
        <td className="py-2 px-2 text-center align-top">
          <button className="text-gray-600 hover:text-gray-700" onClick={() => handleRemoveFromBasket(item.productId)}><IoTrashOutline /></button>
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