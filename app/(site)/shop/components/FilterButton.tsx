import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { CiFilter } from "react-icons/ci";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
import StockFilter from "./StockFilter";
import PriceFilter from "./PriceFilter";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ProductItem } from "../../components/Product";
import { IoClose } from "react-icons/io5";


interface Brand {
    _id: string;
    name: string;
  }
  
  export default function FilterButton() {
    const [products, setProducts] = useState<ProductItem[]>([]);
    const [showOutOfStock, setShowOutOfStock] = useState(false);
    const [showInStock, setShowInStock] = useState(false);
    const [minPrice, setMinPrice] = useState<number | string>('');
    const [maxPrice, setMaxPrice] = useState<number | string>('');
    const [brands, setBrands] = useState<{ data: Brand[] }>({ data: [] });

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
    
    
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="lg:hidden flex items-center gap-1 text-[12px] font-medium text-white bg-[#111] px-3 py-1 rounded-sm">
        <CiFilter />
            FILTER
        </button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center justify-between">Filter <SheetClose asChild>
          <IoClose />
          </SheetClose></SheetTitle>
        </SheetHeader>
        <div className="pl-2 pr-4">
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
      </SheetContent>
    </Sheet>
  )
}
