import React, { useEffect, useState } from 'react';
import { API } from '../../../../../config/axios';

interface Brand {
  _id: string;
  name: string;
}

interface BrandSelectorProps {
  onBrandSelect: (brandId: string) => void;
  selectedBrandId: string;
}

const BrandSelector: React.FC<BrandSelectorProps> = ({ onBrandSelect, selectedBrandId }) => {
  const [brands, setBrands] = useState<{ data: Brand[] }>({ data: [] });

  const fetchBrands = () => {
    API.get("/dashboard/brands")
      .then(res => {
        setBrands(res.data);
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return (
    <div className='flex items-center w-full'>
      <label className='w-1/3'>Product Brand</label>
      <select
        className='border rounded-lg px-2 py-1 white dark:black w-full text-sm'
        onChange={(e) => onBrandSelect(e.target.value)}
        value={selectedBrandId}
      >
        <option value='' disabled>
          Select a brand
        </option>
        {brands.data.map((brand) => (
          <option key={brand._id} value={brand._id}>
            {brand.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BrandSelector;