import { API } from "@/config/axios";
import { useEffect, useState } from "react";
import { TbFileInvoice } from "react-icons/tb";



interface Order {
    customer: any;
    invoiceNumber: string;
    createdAt: string;
    name: string;
    method: string;
    total: number;
    status: string;
  }

export default function DataTable() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
      const fetchOrders = async () => {
        try {
          const response = await API.get('/dashboard/orders');
          console.log('Response Data:', response.data);
          const uniqueOrders = response.data.data.data.reduce((acc: any[], order: { invoiceNumber: any; }) => {
            if (!acc.some((existingOrder) => existingOrder.invoiceNumber === order.invoiceNumber)) {
              acc.push(order);
            }
            return acc;
          }, [] as Order[]);
          setOrders(uniqueOrders);
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      };
  
      fetchOrders();
    }, []);

  return (
    <div className="border rounded-lg shadow-sm mb-44">
      <table className='w-full text-sm'>
          <thead className='text-start light dark:dark rounded-lg'>
            <tr>
              <th className='text-start px-2 py-2'>Invoice NO</th>
              <th className='text-start px-2 py-2'>Order Time</th>
              <th className='text-start px-2 py-2'>Customer Name</th>
              <th className='text-start px-2 py-2'>Method</th>
              <th className='text-start px-2 py-2'>Amount</th>
              <th className='text-start px-2 py-2'>Status</th>
              <th className='text-start px-2 py-2'>Action</th>
              <th className='text-start px-2 py-2'>Invoice</th>
            </tr>           
          </thead>
          <tbody className='w-full'>
          {orders.map((order, index) => (
            <tr key={1} className='border-t'>
                <td key={`invoiceNumber-${index}`} className="px-2 py-4">1</td>
                <td key={`createdAt-${index}`} className="px-2 py-4">{order.createdAt}</td>
                <td key={`customerName-${index}`} className="px-2 py-4">{order.customer.name}</td>
                <td key={`method-${index}`} className="px-2 py-4">{order.method}</td>
                <td key={`total-${index}`} className="px-2 py-4">${order.total.toFixed(2)}</td>
                <td key={`status-${index}`} className="px-2 py-4">{order.status}</td>
                <td key={`action-${index}`} className="px-2 py-4">
                    <select name="" id="" className="white dark:black rounded-md">
                        <option value="">Delivered</option>
                        <option value="">Pending</option>
                        <option value="">Processing</option>
                        <option value="">Cancel</option>
                    </select>
                </td>
                <td key={`invoice-${index}`} className="px-2 py-1">
                    <button>
                    <TbFileInvoice className='text-[20px]' />
                    </button>
                </td>
            </tr>
            ))}
          </tbody> 
      </table>
    </div>
  )
}
