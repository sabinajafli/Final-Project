'use client'
import  ProductTable from './ProductTable'



export default function ProductsUI() {
  return (
    <section className='white dark:black px-10 py-5 h-[calc(100%-40px)]'>
        <h1 className='text-[22px] pb-10'>Products</h1>
        <ProductTable />
    </section>
  )
}
