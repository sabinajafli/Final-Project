import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface PriceFilterProps {
  minPrice: string | number;
  maxPrice: string | number;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}) => {
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>
      <h4 className="font-medium px-2">Price</h4>
      </AccordionTrigger>
      <AccordionContent>
        <div className="flex items-center justify-center">
          <input
            type="number"
            min={0}
            value={minPrice}
            onChange={(e) => onMinPriceChange(e.target.value)}
            className="text-center w-[70px]"
            placeholder="min"
          />
          <span className="mx-5">-</span>
          <input
            type="number"
            min={0}
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(e.target.value)}
            className="text-center w-[70px]"
            placeholder="max"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default PriceFilter;