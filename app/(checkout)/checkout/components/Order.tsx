'use client'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCircleQuestion } from "react-icons/ci";
import { useEffect, useState } from "react";
import { API } from "@/config/axios";


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

export default function Order() {
  const [openOrder, setOpenOrder] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setOpenOrder(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleOrder = () => {
    setOpenOrder((prevOpenOrder: any) => !prevOpenOrder);
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    
    const fetchProductDetails = async () => {
      const updatedCart = await Promise.all(
        storedCart.map(async (item: any) => {
          try {
            const response = await API.get(`/site/products/${item.productId}`);
            const productDetails: ProductDetails = response.data;
            console.log("Product Details:", productDetails);
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
    <section className="bg-[#d6d6d654] lg:order-2 lg:w-1/2 px-5 md:px-5 lg:px-10 xl:pr-52 lg:h-[92vh]">
      <button className='lg:hidden py-5 w-full h-full flex justify-between' onClick={toggleOrder}>
        <span className="flex items-center text-[12px]">
          {openOrder ? "Hide Order Summary" : "Show Order Summary"}
          <MdOutlineKeyboardArrowDown className={`transition-transform transform ${
            openOrder ? "rotate-180" : ""
            }`} />
        </span>
        <span className="font-semibold text-[17px]">{cartItems.length > 0 ? `${totalAmount.toFixed(2)}` : "$0.00"}</span>
      </button>
      <div
        className={`lg:block overflow-hidden transition-height duration-300 ease-in-out ${
          openOrder ? 'h-auto' : 'h-0'
          }`}>
        <>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.productId} className="py-4 border-t border-[rgb(187,187,187)] lg:border-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-[64px] h-[64px] relative my-5">
                      <img
                        src={item.productDetails.data.images[0].url}
                        alt="product"
                        width={64}
                        height={64}
                        className="w-full h-full object-contain bg-gray-100 border"
                      />
                      <span className="absolute top-[-10px] right-[-5px] text-white bg-[#555] w-5 h-5 text-center rounded-full text-[13px]">{item.productCount}</span>
                    </div>
                    <p>{item.productDetails.data.title}</p>
                  </div>
                  <span>{item ? `$${item.productDetails.data.salePrice === 0 ? item.productDetails.data.productPrice.toFixed(2) : item.productDetails.data.salePrice.toFixed(2)}` : ""}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </>
        <div className="flex items-center justify-between pb-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px]">Subtotal</span>
            <span className="text-[14px] flex items-center gap-1">Shipping <CiCircleQuestion className='text-[18px]' /></span>
            <span className="font-semibold">Total</span>
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-[14px] font-medium">{cartItems.length > 0 ? `${totalAmount.toFixed(2)}` : "$0.00"}</span>
            <span className="text-[12px] text-[#666]">Enter shipping address</span>
            <span><span className="text-[12px] text-[#666] mr-2">USD</span><span className='font-semibold text-[17px]'>{cartItems.length > 0 ? `${totalAmount.toFixed(2)}` : "$0.00"}</span></span>
          </div>
        </div>
      </div>
    </section>
  );
}
