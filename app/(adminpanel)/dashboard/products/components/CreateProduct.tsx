import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { TfiMoney } from 'react-icons/tfi';
import { Button } from '@/components/ui/button';
import ImageConverter from './ImageConverter';
import { API } from '../../../../../config/axios';
import BrandSelector from './BrandSelector';
import { Input } from '@/components/ui/input';

interface Product {
  title: string;
  description: string;
  productPrice: number;
  salePrice: number;
  stock: number;
  images: string[];
  brandId: string;
}

export default function CreateProduct() {
  const initialPostState: Product = {
    title: '',
    description: '',
    productPrice: 0,
    salePrice: 0,
    stock: 0,
    images: [],
    brandId: '',
  };

  const [post, setPost] = useState(initialPostState);
  const [productImages, setProductImages] = useState<string[]>([]);

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const numericFields = ['productPrice', 'salePrice', 'stock'];
    const newValue = numericFields.includes(name) ? parseFloat(value) : value;

    setPost((prevPost) => ({ ...prevPost, [name]: newValue }));
  };

  const handleBrandSelect = (brandId: string) => {
    setPost((prevPost) => ({ ...prevPost, brandId }));
  };

  const handleImageChange = (base64Images: string[]) => {
    setProductImages(base64Images);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (post.title.trim() === '' || post.description.trim() === '') {
      return;
    }
    try {
      const response = await API.post('/dashboard/products', {
        ...post,
        images: productImages,
      });
      resetForm();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const resetForm = () => {
    setPost(initialPostState);
    setProductImages([]);
  };

  return (
    <form className='w-full flex flex-col gap-6 py-8 px-4' onSubmit={handleSubmit}>
      <div className='flex items-center'>
        <label className='w-1/3'>Product Title/Name</label>
        <Input
          type='text'
          name='title'
          placeholder='Product Title/Name'
          onChange={handleInput}
          value={post.title}
        />
      </div>
      <div className='flex items-start'>
        <label className='w-1/3'>Product Description</label>
        <textarea
          name='description'
          className='w-full border rounded-lg px-2 text-sm white dark:black'
          placeholder='Product Description'
          onChange={handleInput}
          value={post.description}
        ></textarea>
      </div>
      <BrandSelector onBrandSelect={handleBrandSelect} selectedBrandId={post.brandId} />
      <div className='flex items-center'>
        <label className='w-1/3'>Product Quantity</label>
        <Input type='number' name='stock' onChange={handleInput} value={post.stock} />
      </div>
      <div className='flex items-start'>
        <label className='w-1/3'>Product Images</label>
        <ImageConverter onImageChange={handleImageChange} />
      </div>
      <div className='flex items-center'>
        <label className='w-1/3'>Product Price</label>
        <div className='w-full relative'>
          <span className='absolute right-2 top-3'>
            <TfiMoney />
          </span>
          <Input type='number' name='productPrice' onChange={handleInput} value={post.productPrice} />
        </div>
      </div>
      <div className='flex items-center'>
        <label className='w-1/3'>Sale Price</label>
        <div className='w-full relative'>
          <span className='absolute right-2 top-3'>
            <TfiMoney />
          </span>
          <Input type='number' name='salePrice' onChange={handleInput} value={post.salePrice} />
        </div>
      </div>
      <Button type='submit' className='mt-5 green-light dark:green-dark'>
        Add Product
      </Button>
    </form>
  );
}