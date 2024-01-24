import BrandsTable from './BrandsTable';
import CreateBrand from './CreateBrand';


export default function BrandsUI() {
  return (
    <section className='white dark:black px-10 pt-10 h-screen'>
      <h1 className='text-[23px] pb-10'>Brands</h1>
      <CreateBrand />
      <BrandsTable />
    </section>
  );
}