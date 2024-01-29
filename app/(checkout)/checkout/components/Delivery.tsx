'use client'
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import { API } from "@/config/axios";



export default function Delivery() {
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const clearInputs = () => {
    setCountry("");
    setFirstName("");
    setLastName("");
    setAddress("");
  };

  const handleCompleteOrder = async () => {
    try {
      // Step 1: Add product to basket
      const cartString = localStorage.getItem('cart');
  
      if (cartString === null) {
        console.error('Cart is null in local storage');
        return;
      }
  
      const cart = JSON.parse(cartString);
      const products = cart.map((item: { productId: any; productCount: any; }) => ({
        productId: item.productId,
        productCount: item.productCount,
      }));
  
      // Adjust the payload structure with the 'basket' key
      const addToBasketResponse = await API.post('/site/basket', { basket: products }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (addToBasketResponse.status !== 200) {
        console.error('Error updating basket:', addToBasketResponse.data);
        return;
      }
  
      console.log('Product added to basket successfully!');
  
      // Step 2: Get updated basket data
      const getBasketResponse = await API.get('/site/basket');

if (getBasketResponse.status === 200) {
  const updatedBasket = getBasketResponse.data.data;

  if (Array.isArray(updatedBasket)) {
    console.log('Updated Basket Data:', updatedBasket);

    // Step 3: Proceed with order post request
    const orderPayload = {
      products: updatedBasket.map((item) => ({
        productId: item.productId, // Adjust these properties based on your actual data structure
        productCount: item.productCount,
        // Add other properties if needed
      })),
    };

    const orderResponse = await API.post('/site/orders', orderPayload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (orderResponse.status === 200) {
      console.log('Order placed successfully!');
      localStorage.removeItem('cart');
    } else {
      console.error('Error placing order:', orderResponse.data);
    }
  } else {
    console.error('Invalid format for updated basket data:', updatedBasket);
  }
} else {
  console.error('Error fetching updated basket:', getBasketResponse.data);
}
    } catch (error) {
      console.error('Error completing order:', error.response ? error.response.data : error.message);
    }
  };


  return (
    <section className='md:w-full lg:w-1/2 px-5 md:px-5 lg:px-10 xl:pl-52 py-5'>
      <h1 className='text-[24px] font-medium'>Delivery</h1>
      <form className='mt-2 flex flex-col gap-4'>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className='border w-full px-3 py-3'
          placeholder='Country/Region'
        />
        <div className='flex flex-col gap-4 lg:flex-row'>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className='border w-full px-3 py-3'
            placeholder='First name (optional)'
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className='border w-full px-3 py-3'
            placeholder='Last name'
          />
        </div>
        <div className='relative'>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className='border w-full px-3 py-3'
            placeholder='Address'
          />
          <IoIosSearch className='absolute right-3 top-1/2 -translate-y-1/2' />
        </div>
      </form>
      <div>
        <h1 className='text-[24px] font-medium pt-5'>Payment</h1>
        <p className='text-[14px] text-[#707070]'>All transactions are secure and encrypted.</p>
        <div className='w-full bg-[#d6d6d654] my-2'>
          <p className='text-[14px] p-[17px] border rounded-xl border-[#888888]'>Cash on Delivery (COD)</p>
        </div>
      </div>
      <button className='w-full p-[17px] bg-[#555] text-white rounded-xl my-3' onClick={handleCompleteOrder}>
        Complete order
      </button>
    </section>
  );
}
