import { API } from "@/config/axios";
import { useEffect, useState } from "react";
import { TbFileInvoice } from "react-icons/tb";
import moment from 'moment';


interface Order {
    _id: string;
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

    const handleStatusChange = async (orderId: string, newStatus: string) => {
      try {
        await API.put(`/dashboard/orders/${orderId}`, { status: newStatus });
        console.log('Updating status for order ID:', orderId, 'to', newStatus);
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
      } catch (error) {
        console.error('Error updating order status:', error);
      }
    };

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
            <tr key={order._id} className='border-t'>
                <td key={`invoiceNumber-${index}`} className="px-2 py-4">1</td>
                <td key={`createdAt-${index}`} className="px-2 py-4">{moment(order.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                <td key={`customerName-${index}`} className="px-2 py-4">{order.customer.name.charAt(0).toUpperCase() + order.customer.name.slice(1)}</td>
                <td key={`method-${index}`} className="px-2 py-4">{order.method.charAt(0).toUpperCase() + order.method.slice(1)}</td>
                <td key={`total-${index}`} className="px-2 py-4">${order.total.toFixed(2)}</td>
                <td key={`status-${index}`} className="px-2 py-4">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</td>
                <td key={`action-${index}`} className="px-2 py-4">
                <select
                  name="status"
                  value={order.status}
                  onChange={(e) => handleStatusChange(order._id, e.target.value)}
                  className="white dark:black rounded-md"
                >
                  <option value="delivered">Delivered</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="cancel">Cancel</option>
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
