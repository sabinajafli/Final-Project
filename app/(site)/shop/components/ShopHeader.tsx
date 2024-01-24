import Link from "next/link";


export default function ShopHeader() {
  return (
    <section className="relative">
            <img src='/shop-banner.webp' className="w-full h-[200px] object-center object-cover" />
            <div className='text-center text-white absolute z-10 top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4'>
            <h1 className='text-[30px] md:text-[45px] pb-[5px]'>Shop</h1>
            <ul className='flex justify-center text-[15px] text-white'>
                <li><Link href='/' className='pr-2'>Home</Link>/</li>
                <li className='pl-2'>Shop</li>
          </ul>
        </div> 
    </section>
  )
}
