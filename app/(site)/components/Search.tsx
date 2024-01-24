'use client'
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import Product, { ProductItem } from "./Product";
import { API } from "@/config/axios";
import { useEffect, useState } from "react";





export default function Search() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    API.get('/site/products')
      .then(response => {
        setProducts(response.data.data.product);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Sheet>
        <SheetTrigger asChild>
            <button>
                <FiSearch className='hover:text-[#dd3327] duration-200 transition-colors text-[20px]' />
            </button>
        </SheetTrigger>
        <SheetContent side={'top'} className="h-[93%]">
        <SheetHeader>
            <SheetClose asChild>
                <div className="w-full flex justify-end pr-5 pt-5">
                    <IoMdClose className="opacity-[0.5] hover:opacity-[1] transition-all duration-75  text-[25px]" />
                </div>
            </SheetClose>
        </SheetHeader>
            <section className="overflow-y-auto m-auto">
                <h1 className="text-[30px] font-medium text-center">Search Our Site</h1>
                <div className="relative w-[60%] m-auto mt-5">
                <Input className="w-full h-12 rounded-full" placeholder="I`m looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}  
                />
                <FiSearch className='absolute top-[30%] right-5' />
                </div>
                <div className="flex justify-center items-center h-[60vh] lg:mx-20 mt-10 gap-6 flex-wrap ">
                {filteredProducts.slice(0,5).map(productItem => (
                  <div className="w-1/3 lg:w-1/6" key={productItem._id}>
                    <Product productItem={productItem} />
                  </div>
                )
              )}
                </div>
            </section>
      </SheetContent>
    </Sheet>
  )
}
