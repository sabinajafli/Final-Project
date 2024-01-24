'use client'
import 'swiper/css';

type CategoryProp = {
    img: string,
    title: string,
}

 export const Category: React.FC<CategoryProp> = ({img, title}) => {
  return (
    <div>
        <div  className='relative overflow-hidden rounded-xl'>
            <img src={img} className='object-cover w-full h-full hover:scale-110 transition-all duration-150 ' />
            <button className='absolute left-[50%] translate-x-[-50%] bottom-4 text-center text-[#111] bg-white font-medium w-[180px] h-10 rounded-full'>
                {title}
            </button>
        </div>
    </div>
  )
}