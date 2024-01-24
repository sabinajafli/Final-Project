import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { LuTruck } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";

export default function OrderStatus() {
  return (
    <section className="flex w-full gap-4 py-10">
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#f97316] relative">
            <FiShoppingCart className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Total order</p>
                <p className="text-[20px] font-medium">445</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#3b82f6] relative">
            <HiOutlineArrowPathRoundedSquare className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Orders Pending </p>
                <p className="text-[20px] font-medium">229</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#14b8a6] relative">
            <LuTruck className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Orders Processing</p>
                <p className="text-[20px] font-medium">76</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#10b981] relative">
            <IoMdCheckmark className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Orders Delivered</p>
                <p className="text-[20px] font-medium">338</p>
            </div>
        </div>
    </section>
  )
}
