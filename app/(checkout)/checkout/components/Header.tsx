import Link from 'next/link'
import { HiOutlineShoppingBag } from "react-icons/hi2";


const Header = () => {
  return (
    <header className='py-5 px-5 md:px-5 lg:px-10 xl:px-52  flex items-center justify-between border-b'>
        <Link href='/' className='text-2xl font-semibold'>
          UMINO
        </Link>
        <Link href='/cart'>
          <HiOutlineShoppingBag className='text-[24px]' />
        </Link>
    </header>
  )
}

export default Header