import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react';

interface StockFilterProps {
  showInStock: boolean;
  showOutOfStock: boolean;
  onInStockChange: (checked: boolean) => void;
  onOutOfStockChange: (checked: boolean) => void;
}

const StockFilter: React.FC<StockFilterProps> = ({
  showInStock,
  showOutOfStock,
  onInStockChange,
  onOutOfStockChange,
}) => {
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger>
      <h4 className="font-medium px-2">Availability</h4>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex items-center space-x-2 mb-4 p-2">
          <input
            type="checkbox"
            id="stock"
            checked={showInStock}
            onChange={() => onInStockChange(!showInStock)}
          />
          <label
            htmlFor="stock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#555]"
          >
            In stock
          </label>
        </div>
        <div className="flex items-center space-x-2 mb-2 px-2">
          <input
            type="checkbox"
            id="outOfStock"
            checked={showOutOfStock}
            onChange={() => onOutOfStockChange(!showOutOfStock)}
          />
          <label
            htmlFor="outOfStock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#555]"
          >
            Out of stock
          </label>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default StockFilter;