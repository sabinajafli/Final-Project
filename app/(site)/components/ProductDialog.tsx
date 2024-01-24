import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import { VscLayers } from "react-icons/vsc";
import { ProductItem } from "./Product";
  
  interface ProductDialogProps {
    productItem: ProductItem;
  }
  
  const ProductDialog: React.FC<ProductDialogProps> = ({ productItem }) => {
    return (
      <Dialog>
        <DialogTrigger>
          <p className='w-7 h-7 rounded-full bg-white hover:bg-[#111] hover:text-white flex justify-center items-center md:group-hover:opacity-100 transition-all duration-200 lg:opacity-0'>
            <IoEyeOutline className='text-[14px] inline-block' />
          </p>
        </DialogTrigger>
        <DialogContent>
            <div className='flex items-center flex-col h-[400px] lg:h-[549px]  overflow-y-auto lg:flex-row gap-4'>
                <div className='lg:w-1/2 w-full'>
                    <img src={productItem.images[0]?.url} />
                </div>
                <div className='lg:w-1/2 w-full flex flex-col gap-2 p-6'>
                <div>
                {productItem.salePrice != null && productItem.salePrice !== 0 ? (
                  <span className='w-10 text-white bg-red-600 px-2 text-[14px] rounded-full'>
                    {((productItem.productPrice - productItem.salePrice) / productItem.productPrice * 100).toFixed(0)}%
                  </span>
                ) : productItem.stock === 0 ? (
                  <span className='text-white  bg-red-600 px-2 text-[14px] rounded-full'>Sold Out</span>
                ) : (
                  null
                )}
                </div>
                <h3 className='text-[30px] text-[#111] my-2'>
                    <Link href='/product/productId'>{productItem.title}</Link>
                </h3>
                <div className='flex'>
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                </div>
                <div className='my-2'>
                {productItem.salePrice !== null && productItem.salePrice !== 0 ? (
                <div>
                <span className="text-[30px] text-[#dd3327] font-semibold">${productItem.salePrice.toFixed(2)}</span>
                <span className='text-[20px] text-[#555] line-through ml-2'>${productItem.productPrice.toFixed(2)}</span>
                </div>
                ) : (
                  <span className="text-[30px] text-[#dd3327] font-semibold">${productItem.productPrice.toFixed(2)}</span>
                )}
                </div>
                <p className='text-[#555] text-[16px] my-4'>{productItem.description}</p>
                <div className='flex items-center justify-between mt-3'>
                    <div className='w-[100px] h-[42px] flex items-center justify-center bg-[#efefef] rounded-full'>
                    <button>–</button>
                    <input type="number" defaultValue={1} className="w-[60px] h-8 border-0 bg-[#efefef] text-center" />
                    <button>+</button>
                </div>
                <button
                className={`bg-[#111] px-10 py-3 rounded-full text-white text-[12px] font-medium border border-[#111] transition-all duration-150 ${
                  productItem.stock === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-white hover:text-[#111]'
                }`}
                disabled={productItem.stock === 0}
              >
                {productItem.stock === 0 ? 'SOLD OUT' : 'ADD TO CART'}
                </button>
                <button  className='w-[42px] h-[42px] rounded-full bg-white hover:bg-[#111] text-[#111] hover:text-white flex justify-center items-center  transition-all duration-200 border border-[#11111183]' >
                    <IoIosHeartEmpty className=' inline-block' />
                </button>
                <button  className='w-[42px] h-[42px] rounded-full bg-white hover:bg-[#111] text-[#111] hover:text-white flex justify-center items-center  transition-all duration-200 border border-[#11111183]' >
                    <VscLayers className='text-[14px] inline-block' />
                </button>
                </div>
                </div>
            </div>
        </DialogContent>
      </Dialog>
  );
}

export default ProductDialog;