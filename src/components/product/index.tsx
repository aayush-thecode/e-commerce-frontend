
'use client'

import { getProductById } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from './product-detail/image-slider';
import ProductDetails from './product-detail/product-details';
import { IProduct } from '@/interface/auth/product.interface'
import { RatingStar } from '../ui/rating-star'

interface IProp {
    id:string
    product: IProduct
    
}

const product = {
    name:'Laptop',
    category:{
        name:'Electronics'
    },
    _id:'3',
    autoplay:true,
    coverImage: '/products/dell.webp',
    images:['/products/dell.webp','/products/dell.webp','/products/dell.webp',],
    price:'1000',
    averageRating: 3.5,
    description:` Experience powerful performance and sleek design with the all-new UltraBook X15. Featuring a 12th Gen Intel® Core™ i7 processor, 16GB of DDR5 RAM, and a blazing-fast 512GB SSD, this laptop is built for multitasking, productivity, and seamless everyday computing. The 15.6" Full HD IPS display delivers vibrant colors and wide viewing angles, making it perfect for both work and entertainment. With its lightweight aluminum body, backlit keyboard, and all-day battery life, the UltraBook X15 is your perfect companion — whether you’re working from home, on campus, or on the go.`,

}

const ProductDetail:React.FC<IProp> = ({id}) => {
    const {isLoading,data,isError,error} = useQuery({
        queryKey:['get-product-by-id',id],
        queryFn:() => getProductById(id)
    })
    


    console.log(isLoading,data)

    useEffect(()=>{
        if(isError){
            toast.error(error?.message ??'something went wrong')
        }
    },[error,isError])
  return (
    <div className='px-10 py-10 flex gap-10 w-full'>
            {/* Left Side: Image Section */}

            <div className='mt-7'>
                <div className='relative w-[600px] h-[600px] max-w-full mx-auto '>
                    <ImageSlider images={product.images} />
                </div>
            </div>

            {/* Right Side: Product Details */}
            <div className='flex-1'>
            <ProductDetails product={product}/>
            </div>
            
    </div>
  )
}

export default ProductDetail
