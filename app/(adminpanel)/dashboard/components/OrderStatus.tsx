import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { LuTruck } from "react-icons/lu";
import { IoMdCheckmark } from "react-icons/io";
import { useEffect, useState } from "react";
import { API } from "@/config/axios";



interface Order {
    orderNumber: number;
    _id: string;
    customer: any;
    invoiceNumber: string;
    createdAt: string;
    name: string;
    method: string;
    total: number;
    status: string;
  }



export default function OrderStatus() {
    const [orders, setOrders] = useState<Order[]>([]);
    const totalOrders = orders.length;
  
    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await API.get('/dashboard/orders');
          console.log('Response Data:', response.data);
          const ordersData = response.data?.data?.data || [];
          const ordersWithNumber = ordersData.map((order: any, index: number) => ({ ...order, orderNumber: index + 1 }));
          setOrders(ordersWithNumber);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
  
      fetchOrders();
    }, []);

    const pendingOrders = orders.filter(order => order.status === 'pending').length;

    const processingOrders = orders.filter(order => order.status === 'processing').length;

    const deliveredOrders = orders.filter(order => order.status === 'delivered').length;

  return (
    <section className="flex w-full gap-4 py-10">
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#f97316] relative">
            <FiShoppingCart className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Total order</p>
                <p className="text-[20px] font-medium">{totalOrders}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#3b82f6] relative">
            <HiOutlineArrowPathRoundedSquare className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Orders Pending </p>
                <p className="text-[20px] font-medium">{pendingOrders}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#14b8a6] relative">
            <LuTruck className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Orders Processing</p>
                <p className="text-[20px] font-medium">{processingOrders}</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-1/4 py-3 px-2 rounded-md light dark:dark">
            <div className="w-16 h-16 rounded-full bg-[#10b981] relative">
            <IoMdCheckmark className='text-[20px] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' />
            </div>
            <div>
                <p>Orders Delivered</p>
                <p className="text-[20px] font-medium">{deliveredOrders}</p>
            </div>
        </div>
    </section>
  )
}
