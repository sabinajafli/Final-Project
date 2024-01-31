'use client'
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Cross2Icon } from "@radix-ui/react-icons"
import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiNotepadLight } from "react-icons/pi";
import { PiGiftLight } from "react-icons/pi";
import { PiArchiveLight } from "react-icons/pi";
import { PiTrash } from "react-icons/pi";
import { API } from "@/config/axios";
import { useEffect, useState } from "react";

interface ProductDetails {
  data: any;
  title: string;
  image: string;
  originalPrice: number;
  salePrice: number;
}

interface CartItem {
  productPrice: number;
  title: string;
  productId: string;
  productCount: number;
  productDetails: ProductDetails;
}


export default function Basket() {
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
    <Sheet>
      <SheetTrigger asChild>
        <div className='relative cursor-pointer'>
          <svg className='hover:text-[#dd3327] duration-200 transition-colors' width="21" height="17" viewBox="0 0 21 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3699 15.3407C14.1509 15.3407 13.941 15.2535 13.7862 15.0982C13.6314 14.943 13.5444 14.7324 13.5444 14.5128H11.8936C11.8936 15.1715 12.1545 15.8032 12.6189 16.269C13.0832 16.7347 13.7131 16.9964 14.3699 16.9964C15.0266 16.9964 15.6565 16.7347 16.1209 16.269C16.5853 15.8032 16.8462 15.1715 16.8462 14.5128H15.1953C15.1953 14.7324 15.1083 14.943 14.9535 15.0982C14.7987 15.2535 14.5888 15.3407 14.3699 15.3407Z"></path>
          <path d="M8.5612 15.3407C8.34228 15.3407 8.13233 15.2535 7.97753 15.0982C7.82273 14.943 7.73576 14.7324 7.73576 14.5128H6.07715C6.07715 14.8395 6.14129 15.1629 6.26592 15.4646C6.39055 15.7664 6.57322 16.0406 6.8035 16.2715C7.03378 16.5025 7.30717 16.6857 7.60805 16.8107C7.90893 16.9357 8.23141 17 8.55707 17C8.88274 17 9.20522 16.9357 9.5061 16.8107C9.80698 16.6857 10.0804 16.5025 10.3106 16.2715C10.5409 16.0406 10.7236 15.7664 10.8482 15.4646C10.9729 15.1629 11.037 14.8395 11.037 14.5128H9.38612C9.38612 14.7323 9.29923 14.9428 9.14454 15.098C8.98985 15.2533 8.78003 15.3406 8.5612 15.3407Z"></path>
          <path d="M19.3299 1.64401C19.2849 1.63633 19.2393 1.63252 19.1937 1.63263H5.9867C5.76778 1.63263 5.55782 1.71985 5.40302 1.8751C5.24823 2.03035 5.16126 2.24092 5.16126 2.46047C5.16126 2.68003 5.24823 2.8906 5.40302 3.04585C5.55782 3.2011 5.76778 3.28832 5.9867 3.28832H18.2192L18.001 4.60149L16.8438 11.5668H6.07595L3.26946 4.60149L1.59537 0.482961C1.50684 0.289212 1.34721 0.13717 1.14972 0.0584856C0.952225 -0.020199 0.732083 -0.0194636 0.535118 0.0605389C0.338153 0.140541 0.179541 0.293646 0.0922992 0.487983C0.00505767 0.682319 -0.00409102 0.902913 0.0667575 1.10384L2.73963 7.68158L4.56385 12.5307C4.6985 12.9389 4.97657 13.2224 5.37794 13.2224H17.5428C17.7383 13.2225 17.9275 13.1531 18.0766 13.0264C18.2258 12.8997 18.3253 12.724 18.3574 12.5307L19.675 4.60149L20.0083 2.59655C20.0443 2.38002 19.993 2.15803 19.8658 1.9794C19.7386 1.80077 19.5458 1.68013 19.3299 1.64401Z"></path>
          </svg>
          <span className='absolute top-[-10px] right-[-5px] bg-[#dd3327] text-white px-1 rounded-full text-[11px]'>{cartItems.reduce((total, item) => total + item.productCount, 0)}</span>
        </div>
      </SheetTrigger>
      <SheetContent side={'right'} className="w-[80%] md:w-[65%] lg:w-[45%]">
        <SheetHeader>
          <SheetTitle className='relative mb-[50px]'>
          <div className='flex items-center justify-between text-[#111] bg-white py-4 px-4 w-full absolute'>
          <p className='text-[18px] font-medium'>Shopping Cart {cartItems.length}</p>
          <SheetClose asChild>
            <Cross2Icon className="opacity-[0.6] hover:opacity-[1] duration-75" />
          </SheetClose>
          </div>
          </SheetTitle>
        </SheetHeader>
        <div className="h-full relative">
          
            {/* Shipping */}
            <div className="px-4 py-6 bg-[#f5f5f5] w-full border-t border-b">
            <div className='w-full h-1 bg-[#ebebeb]
            rounded-full  mb-[40px] relative'>
            <button className={`rounded-full bg-white border p-1 absolute top-[-10px] ${totalAmount >= 100 ? 'right-0' : ''}`}>
                <LiaShippingFastSolid className='text-[#dd3327]' />
              </button>
              <p className="absolute top-6 text-[14px] text-[#111]">Spend $100.00 more to enjoy <span className="text-[#dd3327]">FREE SHIPPING!</span></p>
            </div>
            </div>

          <div className="h-[300px] overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.productId}>
              <div className="flex justify-between py-5 px-4 border-b border-dashed">
                <div className="flex gap-4">
                    <img src={item.productDetails.data.images[0].url} alt="product" width={87} height={70} />
                  <div className="flex flex-col gap-3">
                    <h4>{item.productDetails.data.title}</h4>
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
                  </div>
                </div>
                <div>
                <button onClick={() => handleRemoveFromBasket(item.productId)}>
                  <PiTrash />
                </button>
                </div>
              </div>
              </div>
              ))
          ) : (
            <div className="px-7 py-10 flex flex-col items-center justify-center align-middle gap-7">
            <svg width="62" height="69" viewBox="0 0 62 69" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M2.08737 28.4645C2.08737 28.4645 2.08737 28.4645 2.08737 28.4645L2.73622 31.7945C2.84185 32.3366 2.48803 32.8616 1.94594 32.9673C1.40385 33.0729 0.878769 32.7191 0.773143 32.177L0.124283 28.847C-0.665369 24.7938 2.40693 21 6.52744 21H55.4733C59.5451 21 62.6061 24.7104 61.898 28.7297L55.7575 63.5715C55.2054 66.7055 52.5032 69 49.3328 69H13.9327C10.8871 69 8.25497 66.8784 7.57386 63.8981C7.57386 63.8981 7.57386 63.8981 7.57386 63.8981L6.61662 59.71C6.49356 59.1716 6.83027 58.6354 7.36867 58.5123C7.90707 58.3893 8.44328 58.726 8.56634 59.2644L9.52358 63.4524C9.99963 65.5355 11.8324 67 13.9327 67H49.3328C51.5189 67 53.4017 65.416 53.7878 63.2245L59.9283 28.3827C60.4248 25.565 58.2786 23 55.4733 23H6.52744C3.68849 23 1.53379 25.623 2.08737 28.4645Z" fill="#DEDEDE"></path>
              <path d="M28.9027 2.47902C29.391 1.74918 29.1972 0.760308 28.4699 0.27033C27.7425 -0.219647 26.7571 -0.0251418 26.2688 0.704705L9.76598 25.3734C9.2777 26.1032 9.47153 27.0921 10.1988 27.5821C10.9262 28.072 11.9116 27.8775 12.3999 27.1477L28.9027 2.47902Z" fill="#DEDEDE"></path>
              <path d="M49.6341 26.9818C50.3923 27.422 51.3625 27.162 51.8014 26.401C52.2397 25.6401 51.9806 24.6664 51.2224 24.2262L31.0853 12.5365C30.327 12.0963 29.3567 12.3563 28.9181 13.1173C28.4794 13.8781 28.7385 14.8518 29.4967 15.292L49.6341 26.9818Z" fill="#DEDEDE"></path>
              <path fillRule="evenodd" clipRule="evenodd" d="M31.0099 46.9028C30.7467 46.9639 30.423 47.2225 30.2155 47.4984C29.7609 48.1028 28.9649 48.1704 28.4376 47.6495C27.9102 47.1285 27.8512 46.2162 28.3058 45.6118C28.7285 45.0498 29.5089 44.3029 30.5098 44.0707C31.0378 43.9482 31.6328 43.9702 32.2308 44.2541C32.8242 44.5358 33.335 45.0345 33.7603 45.7078C34.1687 46.354 34.0425 47.2573 33.4786 47.7253C32.9147 48.1933 32.1266 48.0487 31.7183 47.4024C31.5084 47.0702 31.3454 46.9614 31.266 46.9237C31.1911 46.8882 31.114 46.8787 31.0099 46.9028Z" fill="#DEDEDE"></path>
              <path d="M22.5 42C23.3284 42 24 41.3284 24 40.5C24 39.6716 23.3284 39 22.5 39C21.6716 39 21 39.6716 21 40.5C21 41.3284 21.6716 42 22.5 42Z" fill="#DEDEDE"></path>
              <path d="M39.5 42C40.3287 42 41 41.3284 41 40.5C41 39.6716 40.3287 39 39.5 39C38.6713 39 38 39.6716 38 40.5C38 41.3284 38.6713 42 39.5 42Z" fill="#DEDEDE"></path>
            </svg>
            <div  className="flex flex-col gap-2 text-center">
              <span className="font-semibold text-[18px]">Your cart is empty.</span>
              <span>You may check out all the available product and buy some in the shop.</span>
            </div>
            <SheetClose asChild>
              <button className="py-[11px] px-[30px] text-white rounded-full bg-[#111]
              text-[12px]">
                <SheetClose asChild>
                  <Link href='/shop'>RETURN TO SHOP</Link>
                </SheetClose>
              </button>
            </SheetClose>
            </div>
          )}
          </div> 
             
          {/* Subtotal */}
        <div className="absolute bottom-14 w-full">
          <div className="flex items-center justify-center gap-[50px] text-[24px] py-3 border-t border-b bg-white">
            <span><PiNotepadLight /></span>
            <span className="px-8 border-l border-r border-dashed"><PiGiftLight /></span>
            <span><PiArchiveLight /></span>
          </div>
          <div className="py-5 px-4 bg-[#f5f5f5]">
            <div className="flex justify-between">
              <p className="text-[18px] text-[#111] font-medium">Subtotal</p>
              <p className="text-[18px] text-[#111] font-medium">{cartItems.length > 0 ? `${totalAmount.toFixed(2)}` : "$0.00"}</p>
            </div>
            <div className="py-4 flex items-center gap-3 text-[#111]">
              <input type="checkbox" />
              <label>I agree with <span className="underline">Terms & Conditions</span></label>
            </div>
            <div className="flex flex-col gap-4">
              <SheetClose className="py-3 w-full bg-white border border-[#111] rounded-full hover:bg-[#111] hover:text-white transition-all duration-150 text-[12px] font-semibold">
                <Link href='/cart'>VIEW CART</Link>
              </SheetClose>
              <SheetClose className="py-3 w-full bg-[#111] text-white rounded-full text-[12px] font-semibold">
                CHECKOUT
              </SheetClose>
            </div>
          </div>
        </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}