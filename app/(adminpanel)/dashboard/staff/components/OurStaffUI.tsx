import StaffTable from "./StaffTable";

export default function OurStaffUI() {
  return (
    <section className='white dark:black px-10 py-10 h-[calc(100%-40px)]'>
      <h1 className='text-[22px] pb-10'>All Staff</h1>
      <StaffTable />
    </section>
  )
}

