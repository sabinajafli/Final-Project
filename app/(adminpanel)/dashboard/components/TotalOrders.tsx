import { LuLayers } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { IoCardOutline } from "react-icons/io5";

export default function TotalOrders() {
  return (
    <section className="flex w-full gap-4">
        <div className="w-1/5 bg-[#0d9488] text-[#d1fae5] h-[130px] rounded-md flex flex-col items-center justify-center">
            <LuLayers />
            <p>Today Orders</p>
            <p className="font-medium text-[18px]">$0.00</p>
        </div>
        <div className="w-1/5 bg-[#fb923c] text-[#ffedd5] h-[130px] rounded-md flex flex-col items-center justify-center">
            <LuLayers />
            <p>Yesterday Orders</p>
            <p className="font-medium text-[18px]">$0.00</p>
        </div>
        <div className="w-1/5 bg-[#3b82f6] text-[#d1fae5] h-[130px] rounded-md flex flex-col items-center justify-center">
            <LuShoppingCart />
            <p>This Month</p>
            <p className="font-medium text-[18px]">$2455.25</p>
        </div>
        <div className="w-1/5 bg-[#0891b2] text-[#ccfbf1] h-[130px] rounded-md flex flex-col items-center justify-center">
            <IoCardOutline />
            <p>Last Month</p>
            <p className="font-medium text-[18px]">$2455.25</p>
        </div>
        <div className="w-1/5 bg-[#059669] text-[#d1fae5] h-[130px] rounded-md flex flex-col items-center justify-center">
            <IoCardOutline />
            <p>All-Time Sales</p>
            <p className="font-medium text-[18px]">$2455.25</p>
        </div>
    </section>
  )
}
