import Link from 'next/link';
import React from 'react';

interface DetailNavProps {
  productDetails: { title: string };
}

export default function DetailNav({ productDetails }: DetailNavProps) {
  return (
    <nav>
      <ul className='flex gap-2 py-4 w-full'>
        <li><Link href='/'>Home /</Link></li>
        <li><Link href='/shop'>Shop / </Link></li>
        <li className='text-[#555] cursor-pointer'>{productDetails.title}</li>
      </ul>
    </nav>
  );
}