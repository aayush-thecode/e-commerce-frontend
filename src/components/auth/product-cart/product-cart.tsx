import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/interface/auth/product.interface'

interface IProp {
    product: IProduct
}

const ProductCard: React.FC<IProp> = ({product}) => {
    const{coverImage, price, name} = product;
    return (
        <div className='overflow-hidden tracking-wider border border-gray-300 w-fit rounded-md ml-7'>
            {/* image */}
            <div className='h-fit w-60 aspect-square p-3 transition-all  duration-300 hover:scale-[1.1]'>
                <Image 
                className='h-full w-full' 
                height={1000} 
                width={1000} 
                src={coverImage ?? '/products/pashminap.jpg'}  
                alt='product image'/>
            </div>
            <div className='p-3'>
                <p className='text-[15px] font-bold'>
                    Pashmina
                </p>
                <span className='text-[15px]'>
                    रु.{price}
                </span>
            </div>
            <div >
                <button className='cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold'>View Detail</button>
            </div>
        </div>
    )
}

export default ProductCard