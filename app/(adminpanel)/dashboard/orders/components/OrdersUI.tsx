import DataTable from "./DataTable";


export default function OrdersUI() {
  return (
    <section className='white dark:black px-10 pt-10  overflow-y-auto'>
      <h1 className='text-[23px] pb-10'>Orders</h1>
      <DataTable />
    </section>
  )
}