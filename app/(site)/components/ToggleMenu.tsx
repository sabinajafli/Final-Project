'use client'
import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { LuClock4 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { Cross2Icon } from "@radix-ui/react-icons"


const ToggleMenu = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button>
            <HiMiniBars3 className="text-[#111] text-[20px]" />
          </button>
        </SheetTrigger>
        <SheetContent className='overflow-y-auto'>
          <SheetHeader>
            <SheetTitle className='relative mb-[40px]'>
            <div className='flex justify-between items-center text-white bg-[#dd3327] py-4 px-4 w-full absolute'>
              <p className='text-[14px] font-medium'>MENU</p>
              <SheetClose asChild>
                <Cross2Icon className="opacity-[0.7] hover:opacity-[1] duration-75" />
              </SheetClose>
            </div>
          </SheetTitle>
          </SheetHeader>
              <div className="bg-white cursor-pointer text-[18px] p-4 text-left">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Home</AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col  text-[16px] text">
                          <li className="border-t py-4">Main Demo</li>
                          <li className="border-t py-4">Simple Modern</li>
                          <li className="border-t py-4">Home Decor</li>
                          <li className="border-t py-4">Skin Care</li>
                          <li className="border-t py-4">Mega Store</li>
                          <li className="border-t py-4">TikTok Fashion</li>
                          <li className="border-t py-4">Gym Fitnes</li>
                          <li className="border-t py-4">Smart Digital</li>
                          <li className="border-t py-4">Swimwears</li>
                          <li className="border-t py-4">Organic Foods</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Shop</AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col  text-[16px] text">
                          <li className="border-t py-4">Shop Layout</li>
                          <li className="border-t border-b py-4">
                            <Link href="/shop">Shop Page</Link>
                          </li>
                          <li className="my-2 relative rounded-xl">
                            <img
                              src="/collection2.webp"
                              alt=""
                              className="rounded-xl"
                            />
                            <Link
                              href="/"
                              className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white text-[#111] text-[16px] py-2 px-10 rounded-full"
                            >
                              Blazers
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Product</AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col  text-[16px] text">
                          <li className="border-t py-4">Product Layout</li>
                          <li className="border-t py-4">Product Features</li>
                          <li className="border-t py-4">Product Detail</li>
                          <li className="border-t py-4">Thumbnails Position</li>
                          <li className="border-t py-4">Boot Sale</li>
                          <li className="border-t py-4">Product Types</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>Blog</AccordionTrigger>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                      <AccordionTrigger>Page</AccordionTrigger>
                      <AccordionContent>
                      <ul className="flex flex-col  text-[16px] text">
                        <li className="border-t py-4"><Link href='/shop'>Shop</Link></li>
                        <li className="border-t py-4"><Link href='/cart'>Cart</Link></li>
                        <li className="border-t py-4"><Link href='/checkout'>Checkout</Link></li>
                      </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  <p className="border-b border-gray py-4">Sale</p>
                  <p className="flex items-center border-b py-4">
                    <LuClock4 className="mr-3 text-[18px]" />
                    Recently Viewed
                  </p>
                  <p className="flex items-center border-b py-4">
                    <FaRegHeart className="mr-3 text-[18px]" />
                    Wishlist
                  </p>
                  <p className="border-b py-4">
                    <Link className="flex items-center" href="/account/login">
                      <GoPerson className="mr-3 text-[18px]" />
                      Login / Register
                    </Link>
                  </p>
              </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ToggleMenu;