import Image from 'next/image'
type CustomerProps = {
    img: string;
    comment: string;
    name: string
}

const Customer = ({ img, comment, name}:CustomerProps) => {
  return (
    <div className='py-10'>
        <div className='border rounded-xl flex flex-col justify-center items-center p-4 gap-3 text-[#111111]'>
            <Image src={img} alt='customer' width={70} height={70}/>
            <p className='text-center text-[15px]'>{comment}</p>
            <div className='text-black text-[14px]'>★★★★★</div>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Customer