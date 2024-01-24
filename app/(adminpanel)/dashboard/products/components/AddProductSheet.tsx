import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Cross2Icon } from '@radix-ui/react-icons'
import { GoPlus } from "react-icons/go";
import CreateProduct from "./CreateProduct";


export default function AddProductSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-[#22c55e] text-[#f1f5f9] w-full"><GoPlus className='mr-3' /> Add Product</Button>
      </SheetTrigger>
      <SheetContent side={'right'} className='w-[70%] light dark:dark'>
        <SheetHeader className='light-gray dark:gray'>
          <SheetTitle className='relative'>
            <div className='flex items-center justify-between text-[#111] bg-white pt-4 px-4 w-full absolute light-gray dark:gray'>
              <p className='text-[18px] fornt-semibold'>Add Product</p>
              <SheetClose asChild>
                <Cross2Icon className=" text-red-500 opacity-[1] hover:opacity-[0.6] duration-75" />
              </SheetClose>
            </div>
          </SheetTitle>
            <p className='px-4 pt-10 pb-2 border-b text-[13px] light-gray dark:gray'>Add your product and necessary information from here</p>
        </SheetHeader>
        <section className="overflow-y-auto white dark:black h-[700px]">
          <CreateProduct />
        </section>
      </SheetContent>
    </Sheet>
  )
}
