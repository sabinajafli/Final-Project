'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { API } from '../../../../../config/axios';
import { Input } from '@/components/ui/input';

interface CreateBrandProps {}

export default function CreateBrand(props: CreateBrandProps) {
  const [brandName, setBrandName] = useState<string>('');
  const [brandImage, setBrandImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBrandImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await API.post('/dashboard/brands', {
        name: brandName,
        image: brandImage,
      });
      setBrandName('');
      setBrandImage(null);
    } catch (error) {
      console.error('Error adding brand:', error);
    }
  };

  return (
    <form className='w-full flex gap-4 items-end' onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1 items-start w-1/3">
        <label htmlFor="brandName">Brand</label>
        <Input
          type="text"
          placeholder="Brand name"
          className="w-full"
          name="brandName"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 items-start w-1/3">
        <label htmlFor="brandImage">Brand Image</label>
        <Input
          type="file"
          accept="image/*,.jpeg,.jpg,.png,.webp"
          className="w-full border rounded-md h-9 p-0"
          onChange={handleImageChange}
        />
      </div>
      <button
        className="green-light dark:green-dark w-1/3 h-9 rounded-lg"
        type='submit'
      >
        Add Brand
      </button>
    </form>
  );
}
