'use client'
import { useEffect, useState } from 'react';
import { API } from '@/config/axios';
import DetailNav from './components/DetailNav';
import SwiperComponent from './components/DetailImages';
import Details from './components/Details';
import DetailTabs from './components/DetailTabs';
import ProductSwiper from '../../components/ProductSwiper';


interface ImageDetails {
  public_id: string;
  url: string;
}

interface ProductDetails {
  _id: string;
  title: string;
  images: ImageDetails[];
  productPrice: number;
  salePrice: number;
  description: string
}

export default function DetailPage({ params }: any) {
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
  const productId = params.id;
 

  useEffect(() => {
    API.get(`/site/products/${productId}`)
      .then(response => {
        console.log('Data from API:', response.data.data);
        setProductDetails(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [productId]);

  if (!productDetails) {
    return <p>Loading...</p>;
  }

  return (
    <section className='px-5 md:mx-5 xl:mx-10'>
      <DetailNav productDetails={productDetails} />
      <div className='flex flex-col md:flex-row gap-28 mb-20'>
        <SwiperComponent images={productDetails.images} />
        <Details productDetails={productDetails} />
      </div>
      <DetailTabs />
      <div className='py-5'>
        <h4 className='text-[30px] text-center  font-medium mb-5 mt-5'>People Also Bought</h4>
        <p className='text-[#555] pb-6 text-center '>Here’s some of our most similar products people are buying. Click to discover trending style.</p>
        <ProductSwiper />
      </div>
    </section>
  );
}
