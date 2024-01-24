'use client'
import React, { useEffect, useState } from 'react';
import { API } from '@/config/axios';
import { HiOutlineTrash } from "react-icons/hi2";
import { MdOutlineEdit } from "react-icons/md";
import DetailButton from './DetailButton';
import Pagination from './Pagination';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Cross2Icon } from '@radix-ui/react-icons';
import { Input } from '@/components/ui/input';
import ImageConverter from './ImageConverter';
import { TfiMoney } from 'react-icons/tfi';
import { Button } from '@/components/ui/button';
import AddProductSheet from './AddProductSheet';
import BrandSelector from './BrandSelector';


export interface Product {
  images: any;
  description: any;
  _id: string;
  title: string;
  productPrice: number;
  salePrice: number;
  stock: number
  brandId: string
}

interface ProductFormState {
  title: string;
  description: string;
  stock: number;
  images: any[]; 
  productPrice: number;
  salePrice: number;
  brandId: string;
}

export default function ProductTable() {
  const [products, setProducts] = useState<{ data: Product[] }>({ data: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const perPage = 10;

  const fetchProducts = (page: number, perPage: number) => {
    API.get(`/dashboard/products?page=${page}&perPage=${perPage}`)
      .then((res) => {
        if (res.data && res.data.data && Array.isArray(res.data.data.product)) {
          setProducts({ data: res.data.data.product });
        } else {
          console.error("Invalid data format:", res.data);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchProducts(currentPage, perPage);
  }, [currentPage]); 

  const handleDeleteProduct = async (productId: string) => {
    try {
      await API.delete(`/dashboard/products/${productId}`);
      fetchProducts(currentPage, perPage);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  function handleImageChange(_base64Images: string[]): void {
    throw new Error('Function not implemented.');
  }

  const [editForm, setEditForm] = useState<ProductFormState>({
    title: '',
    description: '',
    stock: 0,
    images: [],
    productPrice: 0,
    salePrice: 0,
    brandId: '',
  });

  useEffect(() => {
    if (editingProductId) {
      const editedProduct = products.data.find(product => product._id === editingProductId);
      if (editedProduct) {
        setEditForm({
          title: editedProduct.title,
          description: editedProduct.description,
          stock: editedProduct.stock,
          images: editedProduct.images,
          productPrice: editedProduct.productPrice,
          salePrice: editedProduct.salePrice,
          brandId: editedProduct.brandId,
        });
      }
    } else {
      setEditForm({
        title: '',
        description: '',
        stock: 0,
        images: [],
        productPrice: 0,
        salePrice: 0,
        brandId: '',
      });
    }
  }, [editingProductId, products.data]);

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditForm((prevForm: any) => ({ ...prevForm, [name]: value }));
  };

  const handleEditSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!editingProductId) return;

    const editedProduct = { ...editForm };

    try {
      await API.put(`/dashboard/products/${editingProductId}`, editedProduct);
      setEditingProductId(null);
      fetchProducts(currentPage, perPage);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const filterProduct = products.data.filter(product =>
    (product && product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
  <section>
    <div className='flex mb-6 w-full gap-4'>
      <Input 
      type='text' 
      placeholder='Search by product name' 
      className='' 
      value={searchQuery} 
      onChange={(e) => setSearchQuery(e.target.value)} />
      <AddProductSheet />
    </div>
    <div className="border rounded-lg shadow-sm">
      <table className='w-full text-sm'>
          <thead className='text-start light dark:dark rounded-lg'>
            <tr>
              <th className='text-start px-2 py-2'>Product Name</th>
              <th className='text-start px-2 py-2'>Price</th>
              <th className='text-start px-2 py-2'>Sale Price</th>
              <th className='text-start px-2 py-2'>Stock</th>
              <th className='text-start px-2 py-2'>Status</th>
              <th className='text-start px-2 py-2'>View</th>
              <th className='text-start px-2 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody className='w-full'>
          {filterProduct.length > 0 && filterProduct.map(product => (
            <tr className='border-t' key={product._id}>
              <td className="px-2 py-4">{product.title}</td>
              <td className="px-2 py-4">${product.productPrice}</td>
              <td className="px-2 py-4">${product.salePrice}</td>
              <td className="px-2 py-4">{product.stock}</td>
              <td className="px-2 py-4">
                <span className={`px-4 py-1 rounded-md ${product.stock === 0 ? 'bg-[#fee1e1] text-[#991b1b] dark:bg-[#991b1b] dark:text-[#fee1e1]' : 'bg-[#d1faf5] text-[#059669] dark:bg-[#059669] dark:text-[#d1faf5]'}`}>
                  {product.stock === 0 ? "Sold Out" : "Selling"}
                </span>
              </td>
              <td className="px-2 py-4">
                <DetailButton />
              </td>
              <td className="px-2 py-1">


              <Sheet>
                <SheetTrigger asChild>
                  <button className="pr-4 border-0">
                  <MdOutlineEdit className='text-[18px]' />
                  </button>
                </SheetTrigger>
                <SheetContent side={'right'} className='w-[70%] light dark:dark'>
                  <SheetHeader className='light-gray dark:gray'>
                    <SheetTitle className='relative'>
                      <div className='flex items-center justify-between text-[#111] bg-white py-4 px-4 w-full absolute light-gray dark:gray'>
                        <p className='text-[18px] fornt-semibold'>Edit Product</p>
                        <SheetClose asChild>
                          <Cross2Icon className=" text-red-500 opacity-[1] hover:opacity-[0.6] duration-75" />
                        </SheetClose>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <section className="overflow-y-auto white dark:black h-[750px]">



                  <form className='w-full flex flex-col gap-6 py-8 px-4 mt-16' onSubmit={handleEditSubmit}>
                        <div className='flex items-center'>
                          <label className='w-1/3'>Product Title/Name</label>
                          <Input
                            type='text'
                            name='title'
                            placeholder='Product Title/Name'
                            value={editForm.title}
                            onChange={handleEditChange}
                          />
                        </div>
                        <div className='flex items-start'>
                          <label className='w-1/3'>Product Description</label>
                          <textarea
                            name='description'
                            className='w-full border rounded-lg px-2 text-sm white dark:black'
                            placeholder='Product Description'
                            value={editForm.description}
                            onChange={handleEditChange}
                          ></textarea>
                        </div>
                        <BrandSelector
                          onBrandSelect={brandId => setEditForm((prevForm: any) => ({ ...prevForm, brandId }))}
                          selectedBrandId={editForm.brandId}
                        />
                        <div className='flex items-center'>
                          <label className='w-1/3'>Product Quantity</label>
                          <Input
                            type='number'
                            name='stock'
                            value={editForm.stock}
                            onChange={handleEditChange}
                          />
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
                            <Input
                              type='number'
                              name='productPrice'
                              value={editForm.productPrice}
                              onChange={handleEditChange}
                            />
                          </div>
                        </div>
                        <div className='flex items-center'>
                          <label className='w-1/3'>Sale Price</label>
                          <div className='w-full relative'>
                            <span className='absolute right-2 top-3'>
                            <TfiMoney />
                            </span>
                            <Input
                              type='number'
                              name='salePrice'
                              value={editForm.salePrice}
                              onChange={handleEditChange}
                            />
                          </div>
                        </div>
                        <Button type='submit' className='mt-5 green-light dark:green-dark'>
                          Edit Product
                        </Button>
                        <Button
                          type='button'
                          onClick={() => setEditingProductId(null)}
                          className='mt-2 bg-red-500 text-white'
                        >
                          Cancel
                        </Button>
                      </form>
                  </section>
                </SheetContent>
              </Sheet>


              <button className="border-0" onClick={() => handleDeleteProduct(product._id)} >
                <HiOutlineTrash className='text-[18px]' />
              </button>
              </td>
            </tr>
          ))}
          </tbody> 
      </table>
    </div>
    <Pagination
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        isPreviousDisabled={currentPage === 1}
      />
  </section>
  )
}