
'use client'

import { getProductById } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from './product-detail/image-slider';
import ProductDetails from './product-detail/product-details';
import { IProduct } from '@/interface/auth/product.interface'

interface IProp {
    id:string
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

    if(isLoading) {
        return <div className='h-[calc(100vh-8.6rem)] w-full flex items-center justify-center'>
            <p className='text-2xl font-serif text-orange-500'>
            loading...
                </p>
        </div>
      }

  
  return (
    <div className='px-10 py-10 flex gap-10 w-full'>

            {/* Left Side: Image Section */}    
            <div className='mt-7'>
                <div className=' mx-auto '>
                    <ImageSlider images={data?.data?.images} />
                </div>
            </div>

            {/* Right Side: Product Details */}
            <div className='flex-1'>
            <ProductDetails product={data?.data}/>
            </div>
            
    </div>
  )


}

export default ProductDetail
