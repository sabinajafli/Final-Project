'use client'
import React, { useEffect, useState } from 'react';
import { API } from '@/config/axios';
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface Brand {
  image: string | { url: string };
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default function BrandsTable() {
  const [brands, setBrands] = useState<{ data: Brand[] }>({ data: [] });
  const [editedBrand, setEditedBrand] = useState<Brand | null>(null);

  useEffect(() => {
    const fetchBrands = () => {
      API.get("/dashboard/brands")
        .then(res => {
          setBrands(res.data);
          console.log(res.data)
        })
        .catch(err => console.error(err));
    };

    fetchBrands();
  }, []);

  const handleDeleteBrand = (brandId: string) => {
    API.delete(`/dashboard/brands/${brandId}`)
      .then(() => {
        setBrands(prevState => ({
          data: prevState.data.filter(brand => brand._id !== brandId)
        }));
      })
      .catch(err => console.error(err));
  };

  const handleEditBrand = (brand: Brand) => {
    setEditedBrand(brand);
  };

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetId = e.target.id;

    if (targetId === 'image' && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const base64Data = await readFileAsBase64(file);

      setEditedBrand((prevBrand) => ({
        ...prevBrand!,
        [targetId]: base64Data,
      }));
    } else {
      setEditedBrand((prevBrand) => ({
        ...prevBrand!,
        [targetId]: e.target.value,
      }));
    }
  };

  const handleSaveChanges = async () => {
    if (editedBrand) {
      try {
        await API.put(`/dashboard/brands/${editedBrand._id}`, editedBrand);
        setBrands((prevState) => ({
          data: prevState.data.map((brand) =>
            brand._id === editedBrand._id ? { ...brand, ...editedBrand } : brand
          ),
        }));
        setEditedBrand(null);
      } catch (error) {
        console.error('Error editing brand:', error);
      }
    }
  };

  const readFileAsBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result as string);
        } else {
          reject(new Error('Error reading file.'));
        }
      };

      reader.onerror = (error) => reject(error);

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="border rounded-lg my-10 shadow-sm">
        <table className='w-full text-sm'>
            <thead className='text-start light dark:dark rounded-lg'>
                <tr>
                    <th className='text-start px-2 py-1'>Brand</th>
                    <th className='text-start px-2 py-1' >Brand Image</th>
                    <th className='text-start px-2 py-1' >Actions</th>
                </tr>
            </thead>
        <tbody className='w-full'>
        {brands.data.map(brand => (
            <tr key={brand._id}  className='border-t'>
            <td className="px-2 py-1">{brand.name}</td>
            <td className="px-2 py-1">{typeof brand.image === 'string' ? (
                <img src={brand.image} className='h-14' />
                ) : (
                <img src={brand.image.url} className='h-14 w-14' />
                )}</td>
            <td className="px-2 py-1">
            <Dialog>
              <DialogTrigger asChild>
              <button className="pr-4 border-0" onClick={() => handleEditBrand(brand)}>
                <MdOutlineEdit />
              </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] p-6 white dark:black">
                <DialogHeader>
                <DialogTitle>Edit brand</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Brand Name"
                    className="col-span-3"
                    value={editedBrand?.name || ''}
                    onChange={handleInputChange}
                   />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="image" className="text-right">
                    Image
                  </label>
                  <Input id="image" type='file' 
                  accept="image/*,.jpeg,.jpg,.png,.webp"
                  className="col-span-3 w-full border h-9 p-0" 
                  onChange={handleInputChange}/>
                </div>
              </div>
              <DialogFooter>
              <Button type="submit" onClick={handleSaveChanges}>
                Save changes
              </Button>
              </DialogFooter>
            </DialogContent>
            </Dialog>
            <button className="border-0" onClick={() => handleDeleteBrand(brand._id)}>
              <HiOutlineTrash />
            </button>
            </td>
            </tr>
        ))}
        </tbody> 
    </table>
  </div>
  )
}
