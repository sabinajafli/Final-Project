import ToggleMenu from './ToggleMenu'
import Link from 'next/link'
import { FaChevronDown } from "react-icons/fa";
import Cart from './Basket';
import Search from './Search';
// import Login from './Login';



const Header = () => {
  return (
    <header className='flex items-center justify-between px-5 py-4 lg:px-10 lg:py-0 w-full z-10 bg-white border-b'>
        <ToggleMenu />
        <Link href='/'>
            <img src='/logo.png' alt='logo' className='w-[95px] h-[20px]'/>
        </Link>
        <ul className='hidden lg:flex lg:items-center lg:justify-between'>
            <li className='flex items-center px-5 py-5 cursor-pointer hover:text-[#dd3327] transition-all duration-150'>
                <span>Home</span> <FaChevronDown className='text-[10px] ml-2' />
            </li>
            <li className='flex items-center px-5 py-5 cursor-pointer hover:text-[#dd3327] transition-all duration-150 relative'>
                <span>Shop</span> <FaChevronDown className='text-[10px] ml-2' />
            </li>
            <li className='flex items-center px-5 py-5 cursor-pointer hover:text-[#dd3327] transition-all duration-150'>
                <span>Product</span> <FaChevronDown className='text-[10px] ml-2' />
            </li>
            <li className='flex items-center px-5 py-5 cursor-pointer hover:text-[#dd3327] transition-all duration-150'>
                <span>Blog</span> <FaChevronDown className='text-[10px] ml-2' />
            </li>
            <li className='flex items-center px-5 py-5 cursor-pointer hover:text-[#dd3327] transition-all duration-150'>
                <span>Page</span> <FaChevronDown className='text-[10px] ml-2' />
            </li>
            <li className='px-5 py-5 cursor-pointer hover:text-[#dd3327] transition-all duration-150'>Sale</li>
        </ul>
        <div className='flex gap-5'>
            {/* <Login /> */}
            <Search />
            <Cart/>
        </div>

    </header>
  )
}

export default Header