
'use client'

import { getProductById } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from './product-detail/image-slider';
import ProductDetails from './product-detail/product-details';
import CartPage from '../../app/cart/page'
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
    description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, expedita? Amet rem itaque
        facilis reprehenderit suscipit culpa cupiditate placeat facere, natus, nemo sequi fugiat alias
        modi dolorem. Natus, nisi culpa!`,

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
            
            <ProductDetails product={product}/>
            
    </div>
  )
}

export default ProductDetail
