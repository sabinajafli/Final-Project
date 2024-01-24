'use client'
import React, { useEffect, useState } from 'react';
import { API } from '@/config/axios';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
    Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from'@/components/ui/select'
import PriceFilter from './PriceFilter';
import StockFilter from './StockFilter';
import Product, { ProductItem } from '../../components/Product';
import FilterButton from './FilterButton';

interface Brand {
  _id: string;
  name: string;
}

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (id: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={() => onChange(id)}
      className=""
    />
  );
};

export default function Filter() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [showOutOfStock, setShowOutOfStock] = useState(false);
  const [showInStock, setShowInStock] = useState(false);
  const [minPrice, setMinPrice] = useState<number | string>('');
  const [maxPrice, setMaxPrice] = useState<number | string>('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [brands, setBrands] = useState<{ data: Brand[] }>({ data: [] });

  useEffect(() => {
    const apiUrl = `/site/products?page=1&perPage=100&minPrice=${minPrice}&maxPrice=${maxPrice}`;

    API.get(apiUrl)
      .then((response) => {
        setProducts(response.data.data.product);
        console.log('Products from API:', response.data.data.product);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [minPrice, maxPrice]);

  useEffect(() => {
    const fetchBrands = () => {
      API.get('/dashboard/brands')
        .then((res) => {
          setBrands(res.data);
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    };

    fetchBrands();
  }, []);

  const handleInStockChange = (checked: boolean) => {
    setShowInStock(checked);
  };

  const handleOutOfStockChange = (checked: boolean) => {
    setShowOutOfStock(checked);
  };

  const handleMinPriceChange = (value: string) => {
    setMinPrice(value);
  };

  const handleMaxPriceChange = (value: string) => {
    setMaxPrice(value);
  };

  const handleBrandChange = (brandId: string) => {
    const updatedBrands = selectedBrands.includes(brandId)
      ? selectedBrands.filter((id) => id !== brandId)
      : [...selectedBrands, brandId];

    setSelectedBrands(updatedBrands);
  };

  const filteredProducts = products.filter((product) => {

    const isInStock = showInStock ? product.stock > 0 : true;
    const isOutOfStock = showOutOfStock ? product.stock === 0 : true;
    
    const brandId = product.brandId; 
  
    const isBrandSelected = selectedBrands.length === 0 || selectedBrands.includes(brandId);
  
    const result = isInStock && isOutOfStock && isBrandSelected;
  
    return result;
  });
  

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section className="flex">
      <div className="hidden lg:inline-block pl-8 lg:pl-10 w-[30%]">
        <Accordion type="single" collapsible>
            <StockFilter
                showInStock={showInStock}
                showOutOfStock={showOutOfStock}
                onInStockChange={handleInStockChange}
                onOutOfStockChange={handleOutOfStockChange}
            />
            <PriceFilter
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={handleMinPriceChange}
                onMaxPriceChange={handleMaxPriceChange}
            />
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h4 className="font-medium px-2">Brand</h4>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2 mb-4">
                {brands.data.map((brand) => (
                  <div
                    key={brand._id}
                    className="flex items-center space-x-2 p-2"
                  >
                    <Checkbox
                      id={brand._id}
                      checked={selectedBrands.includes(brand._id)}
                      onChange={handleBrandChange} 
                    />
                    <label
                      htmlFor={brand._id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#555]"
                    >
                      {brand.name}
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="w-full flex flex-col gap-5 flex-wrap px-3 lg:pr-8">
        <div className="h-6 px-3 flex items-center justify-between lg:justify-end">
          <FilterButton />
          <Select>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Sort by: Best Selling" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="bg-white p-0">
                <SelectLabel>Alphabetically, A-Z</SelectLabel>
                <SelectLabel>Alphabetically, Z-A</SelectLabel>
                <SelectLabel>Price, Low To High</SelectLabel>
                <SelectLabel>Price, High To Low</SelectLabel>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-wrap w-full">
          {filteredProducts.map((productItem) => (
            <div key={productItem._id} className="w-1/2 md:w-1/2 lg:w-1/3 p-2">
              <Product productItem={productItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
