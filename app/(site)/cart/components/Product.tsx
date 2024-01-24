import Link from 'next/link'
import { IoTrashOutline } from "react-icons/io5";


const Product = () => {
  return (
   <div className="mt-8">
    <table className="min-w-full bg-white border border-gray-300 hidden md:table">
    <thead>
      <tr className='text-gray-700 text-[14px] font-normal'>
        <th className="py-2 px-4 border-b border-r text-start">Product</th>
        <th className="py-2 px-4 border-b border-r text-start">Quantity</th>
        <th className="py-2 px-3 border-b border-r text-start">Total</th>
        <th className="py-2 px-4 border-b text-start"></th>
      </tr>
    </thead>
    <tbody className='border-b'>
      <tr>
        <td className="py-2 px-4 border-r">
          <div className="flex items-center">
            <img src="/1.webp" alt="Product Image" className="w-[80px] h-[105px] object-cover mr-4" />
            <div>
              <p className="font-medium"><Link href='/product/productId'>Square Textured Striped</Link></p>
              <p className="text-gray-500">$116.00</p>
            </div>
          </div>
        </td>
        <td className="py-2 px-4 border-r">
          <div className='w-[80px] border text-center px-0 bg-[#efefef]'>
            <button>–</button>
            <input type="number" defaultValue={1} className="w-12 border-0 bg-[#efefef] text-center" />
            <button>+</button>
          </div>
        </td>
        <td className="py-2 px-4 border-r">$116.0</td>
        <td className="py-2 px-2 text-center">
          <button className="text-gray-600 hover:text-gray-700"><IoTrashOutline /></button>
        </td>
      </tr>
    </tbody>
    </table>
    <table className="min-w-full bg-white border border-gray-300 md:hidden">
    <tbody className='border-b'>
      <tr>
        <td className="py-2 w-[133px] px-4">
          <img src="/1.webp" alt="Product Image" className="w-[100px] h-[133px] object-cover" />
        </td>
        <td className='flex flex-col py-2 justify-between gap-2'>
          <p className="font-medium text-[14px]"><Link href='/product/productId'>Square Textured Striped</Link></p>
          <p className="text-gray-500 text-[12px] py-1">$116.00</p> 
          <div className='w-[80px] h-7 text-center bg-[#efefef]'>
            <button>–</button>
            <input type="number" defaultValue={1} className="w-[30px] h-7 border-0 bg-[#efefef] text-center" />
            <button>+</button>
          </div>
          <p className='text-[14px] py-1'>$116.00</p>
        </td>
        <td className="py-2 px-2 text-center align-top">
          <button className="text-gray-600 hover:text-gray-700"><IoTrashOutline /></button>
        </td>
      </tr>
    </tbody>
    </table>
</div>

  )
}

export default Product