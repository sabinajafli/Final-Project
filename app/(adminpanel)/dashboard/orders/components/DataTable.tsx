import { API } from "@/config/axios";
import { useEffect, useState } from "react";
import { TbFileInvoice } from "react-icons/tb";
import moment from 'moment';
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

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

export default function DataTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await API.get('/dashboard/orders');
        console.log('Response Data:', response.data);
        const ordersData = response.data?.data?.data || [];
        const ordersWithNumber = ordersData.map((order: Order, index: number) => ({ ...order, orderNumber: index + 1 }));
        setOrders(ordersWithNumber);
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

  useEffect(() => {
    const calculateTotalAmount = (ordersList: Order[]) => {
      return ordersList.reduce((total, order) => total + order.total, 0);
    };

    setTotalAmount(calculateTotalAmount(orders));
  }, [orders]);

  const calculateTotalAmount = (ordersList: Order[]) => {
    return ordersList.reduce((total, order) => total + order.total, 0);
  };


  const resetInputs = () => {
    setSearchQuery("");
    setStartDate("");
    setEndDate("");
    setSelectedStatus(null);
    setFilteredOrders([]); 
    setTotalAmount(calculateTotalAmount(orders)); 
  };

  const handleFilterClick = () => {

    const filteredOrders = orders.filter((order) => {
      const nameFilter =
        !searchQuery.trim() ||
        order.customer.name.toLowerCase().includes(searchQuery.toLowerCase());

      const dateFilter =
        (!startDate || !endDate) ||
        (moment(order.createdAt).isSameOrAfter(startDate) &&
          moment(order.createdAt).isSameOrBefore(endDate));

      const statusFilter =
        !selectedStatus || order.status.toLowerCase() === selectedStatus.toLowerCase();

      return nameFilter && dateFilter && statusFilter;
    });

    setFilteredOrders(filteredOrders);
    setTotalAmount(calculateTotalAmount(filteredOrders));
  };

  return (
    <>
    {orders.length === 0 ? (
      <div>
        <Skeleton className='h-7 w-full light dark:dark'></Skeleton>
        <Skeleton className='h-14 my-1  w-full light dark:dark'></Skeleton>
        <Skeleton className='h-14 my-1  w-full light dark:dark'></Skeleton>
        <Skeleton className='h-14 my-1  w-full light dark:dark'></Skeleton>
        <Skeleton className='h-14 my-1  w-full light dark:dark'></Skeleton>
        <Skeleton className='h-14 my-1  w-full light dark:dark'></Skeleton>
        <Skeleton className='h-14 my-1  w-full light dark:dark'></Skeleton>
      </div>
    ) : (
      <>
      <section className="px-2 py-5 light dark:dark rounded-xl">
        <div className="mb-4 flex flex-col md:flex-row gap-3 justify-between">
        <Input type="text" placeholder="Search by Customer Name" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
        <Select>
            <SelectTrigger >
                <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
              <SelectItem value="Delivered" onClick={() => setSelectedStatus("Delivered")}>
                Delivered
              </SelectItem>
              <SelectItem value="Pending" onClick={() => setSelectedStatus("Pending")}>
                Pending
              </SelectItem>
              <SelectItem value="Processing" onClick={() => setSelectedStatus("Processing")}>
                Processing
              </SelectItem>
              <SelectItem value="Cancel" onClick={() => setSelectedStatus("Cancel")}>
                Cancel
              </SelectItem>
              </SelectGroup>
            </SelectContent>
        </Select>
        </div>
        <div className="w-full flex flex-col gap-3 md:flex-row md:items-end">
            <div className="flex flex-col w-1/4">
            <label htmlFor="">Start Date</label>
            <input type="date" name="" id="" className="border rounded-lg py-[5px] shadow-sm light dark:dark dark:border-white w-full" value={startDate}
            onChange={(e) => setStartDate(e.target.value)} />
            </div>  
            <div className="flex flex-col w-1/4">
            <label htmlFor="">End Date</label>
            <input type="date" name="" id="" className="border rounded-lg py-[5px] shadow-sm light dark:dark" value={endDate}
            onChange={(e) => setEndDate(e.target.value)} />
            </div> 
            <button className="w-1/4 py-[7px] green-light dark:green-dark rounded-lg" onClick={handleFilterClick}>Filter</button>
            <button className="w-1/4 light-gray dark:gray rounded-lg py-[7px]" onClick={resetInputs}>Reset</button>
        </div>
      </section>
      <div className="my-10 light dark:dark py-3 px-2 rounded-lg text-[18px]">
          <p>
            Total Amount:{" "}
            <span className="font-medium">
            ${filteredOrders.length > 0 ? totalAmount.toFixed(2) : totalAmount.toFixed(2)}
            </span>
          </p>
        </div>
      <div className="border rounded-lg shadow-sm mb-24">
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
          {(filteredOrders.length > 0 ? filteredOrders : orders).map((order: Order) => (
              <tr key={order._id} className='border-t'>
                <td className="px-2 py-4">{order.orderNumber}</td>
                <td className="px-2 py-4">{moment(order.createdAt).format('DD-MM-YYYY HH:mm:ss')}</td>
                <td className="px-2 py-4">{order.customer.name.charAt(0).toUpperCase() + order.customer.name.slice(1)}</td>
                <td className="px-2 py-4">{order.method.charAt(0).toUpperCase() + order.method.slice(1)}</td>
                <td className="px-2 py-4">${order.total.toFixed(2)}</td>
                <td className="px-2 py-4">{order.status.charAt(0).toUpperCase() + order.status.slice(1)}</td>
                <td className="px-2 py-4">
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
                <td className="px-2 py-4">
                  <button>
                    <TbFileInvoice className='text-[20px]' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
    )}
    </>
  );
  
}
