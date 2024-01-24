'use client'
import { MdOutlineDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { LuUser } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { PiCompass } from "react-icons/pi";
import { FiTag } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Sidebar() {
  const route = useRouter()
  
  const handleLogout = () => {
    localStorage.clear();
    route.push('/auth/login')
    console.log('user logged out')
  };
  return (
    <aside className='w-1/5 h-[100vh] light dark:dark p-4 flex flex-col '>
        <div>
            <h2 className="flex items-center gap-2 text-[25px] text-[#22c55e] mb-10"><MdOutlineDashboard />Dashtar</h2>

            <ul className="flex flex-col gap-5 text-[19px]">
                <li>
                  <Link href='/dashboard' className="flex items-center gap-2">
                    <RxDashboard />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href='/dashboard/brands' className="flex items-center gap-2">
                    <FiTag />
                    Brands
                  </Link>
                </li>
                <li>
                  <Link href='/dashboard/products' className="flex items-center gap-2">
                    <AiOutlinePlusSquare />
                    Products
                  </Link>
                </li>
                <li>
                  <Link href='/dashboard/orders' className="flex items-center gap-2">
                    <PiCompass />
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href='/dashboard/staff' className="flex items-center gap-2 pb-4 border-b border-[#94a3b866]">
                    <LuUser />
                    Our Staff
                  </Link>
                </li>
            </ul>

        </div>

        <button className="flex items-center text-[19px] gap-3  mt-5 text-red-500" onClick={handleLogout}><IoLogOutOutline className='text-[20px] text-red-500' />LOG OUT</button>
    </aside>
  )
}
