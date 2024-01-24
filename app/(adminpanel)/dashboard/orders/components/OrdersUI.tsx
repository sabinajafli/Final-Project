import DataTable from "./DataTable";
import OrdersInput from "./OrdersInput";


export default function OrdersUI() {
  return (
    <section className='white dark:black px-10 pt-10  overflow-y-auto'>
      <h1 className='text-[23px] pb-10'>Orders</h1>
      <OrdersInput />
      <div className="my-10 light dark:dark py-3 px-2 rounded-lg text-[18px]">
        <p>Total Amount: <span className="font-medium">$1124</span>
        </p>
      </div>
      <DataTable />
    </section>
  )
}