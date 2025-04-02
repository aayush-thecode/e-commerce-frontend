import React from 'react'
import Image from 'next/image'

const ProductCard = () => {
    return (
        <div className='overflow-hidden tracking-wider border border-gray-300 w-fit rounded-md ml-7'>
            {/* image */}
            <div className='h-fit w-60 aspect-square p-3'>
                <Image 
                className='h-full w-full' 
                height={1000} 
                width={1000} 
                src='/products/product.png'  
                alt='product image'/>
            </div>
            <div className='p-3'>
                <p className='text-[15px] font-bold'>
                    Pashmina
                </p>
                <span className='text-[15px]'>
                    7500/-
                </span>
            </div>
            <div >
                <button className='cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold'>View Detail</button>
            </div>
        </div>
    )
}

export default ProductCard