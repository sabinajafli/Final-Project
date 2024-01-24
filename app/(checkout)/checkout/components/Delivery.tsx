import { IoIosSearch } from "react-icons/io";


export default function Delivery() {
  return (
    <section className='md:w-[600px] lg:w-1/2 px-5 md:px-5 lg:px-10 xl:pl-52 py-5'>
        <h1 className='text-[24px] font-medium'>Delivery</h1>
        <form className='mt-2 flex flex-col gap-4'>
            <input type="text" className='border w-full px-3 py-3' placeholder='Country/Region' />
            <div className='flex flex-col gap-4 lg:flex-row'>
                <input type="text" className='border w-full px-3 py-3' placeholder='First name (optional)' />
                <input type="text"  className='border w-full px-3 py-3' placeholder='Last name' />
            </div>
            <div className='relative'>
                <input type="text" className='border w-full px-3 py-3' placeholder='Adress' /> 
                <IoIosSearch className='absolute right-3 top-1/2 -translate-y-1/2' />
            </div>
        </form>
        <div>
            <h1 className='text-[24px] font-medium pt-5'>Payment</h1>
            <p className='text-[14px] text-[#707070]'>All transactions are secure and encrypted.</p>
            <div className='w-full bg-[#d6d6d654] my-2'>
                <p className='text-[14px] p-[17px] border rounded-xl border-[#888888]'>Cash on Delivery (COD)</p>
            </div>
        </div>
        <button className='w-full p-[17px] bg-[#555] text-white rounded-xl my-3'>Complete order</button>
    </section>
  )
}
