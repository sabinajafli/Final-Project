import Link from "next/link";
import { LiaShippingFastSolid } from "react-icons/lia";

const Shipping = () => {
  return (
    <div className='w-full my-8 bg-[#f5f5f5] md:w-[25%] px-6 py-4 h-fit'>
        <div className='w-full h-1 bg-[#ebebeb] rounded-full mt-5 mb-[70px] relative'>
          <button className="rounded-full bg-white border p-1 absolute top-[-10px]">
            <LiaShippingFastSolid className='text-[#dd3327]' />
          </button>
          <p className="absolute top-6 text-[14px] text-[#111]">Congratulations! You've got free shipping!</p>
        </div>
        <div className="border-t flex justify-between">
          <p className="mt-5 text-[20px] text-[#111] font-medium">Subtotal</p>
          <p className="mt-5 text-[20px] text-[#111] font-medium">$116.00</p>
        </div>
        <p className="text-[#12px] text-[#555] my-5 ">Taxes and shipping calculated at checkout</p>
        <div className="py-4 flex items-center gap-3 text-[#111]">
          <input type="checkbox" />
          <label>I agree with <span className="underline">Terms & Conditions</span></label>
        </div>
        <button className="w-full py-4 bg-[#555] rounded-full text-white font-medium text-[14px]"><Link href='/checkout'>CHECK OUT</Link></button>
    </div>
  )
}

export default Shipping