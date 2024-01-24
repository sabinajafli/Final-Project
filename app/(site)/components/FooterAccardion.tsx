'use client'

import React, { useState, useRef, ReactElement } from 'react';
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

interface Item {
  category: string;
  items: string[] | ReactElement[];
}

const FooterAccardion: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const contentRefs: Record<string, React.RefObject<HTMLDivElement>> = {};

  const toggleNav = (category: string) => {
    setOpenCategory((prevCategory) => (prevCategory === category ? null : category));
  };

  const data: Item[] = [
    {
      category: 'Company',
      items: ['About Us', 'Our Stores', 'Contact Us', 'Size Guide', 'My Account'],
    },
    {
      category: 'Customer Service',
      items: [
        'Privacy Policy',
        'Refund Policy',
        'Shipping & Return',
        'Term & Conditions',
        'Advanced Search',
        'Theme FAQs',
        'Store Locations',
      ],
    },
    {
      category: 'Sign Up to Newsletter',
      items: [
        <div>
          <p className='text-[16px] text-[#555] mt-3'>Enter your email address to get $10 off your first order and free shipping.Updates information on Sales and Offers.</p>
          <div className='flex gap-4 mt-[40px]'>
            <input type="email" className='p-3 w-[80%] border-gray-300 rounded-full' placeholder='Enter your email...' />
            <button className='text-sm font-medium py-2 px-5 bg-[#111] text-white rounded-full'>SUBSCRIBE</button>
          </div>
        </div>
      ]
    }
  ];

  return (
    <div className='border-t'>
      {data.map((item, index) => {
        contentRefs[item.category] = contentRefs[item.category] || useRef<HTMLDivElement>(null);

        return (
          <div key={index} className='border-b py-4'>
            <div
              className='flex items-center justify-between cursor-pointer'
              onClick={() => toggleNav(item.category)}
            >
              <button className='text-[20px]'>{item.category}</button>
              {openCategory === item.category ? (
                <FiMinus className='text-[#858585]' />
              ) : (
                <GoPlus className='text-[#858585]' />
              )}
            </div>
            <div
              ref={contentRefs[item.category]}
              style={{
                height: openCategory === item.category ? `${contentRefs[item.category]?.current?.scrollHeight}px` : '0',
                overflow: 'hidden',
                transition: 'height 0.3s ease',
              }}
            >
              {item.items.map((subItem, subIndex) => (
                <div className='flex flex-col gap-3 mt-5 cursor-pointer' key={subIndex}>{subItem}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterAccardion;