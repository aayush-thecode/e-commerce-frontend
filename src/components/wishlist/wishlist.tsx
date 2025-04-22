'use client'

import { getWishlist } from '@/api/wishlist'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import PageLoading from '../ui/page-loading'
import { IProduct } from '@/interface/auth/product.interface'
import ProductCard from '../auth/product-cart/product-cart'

const Wishlist = () => {

    const {isLoading, data} = useQuery({
        queryFn: getWishlist,
        queryKey: ['wishlist']
    })
    console.log('wishlist', data)
    if(isLoading){
        return <PageLoading/>
    }

  return (
    <div className='px-10'>
    <div className='my-4 tracking-wider text-xl'>
        <h1>
       Your wishlist
        </h1>
    </div>
    <div className='flex flex-wrap'>
        {
            data?.data?.data?.map((product:IProduct) => <ProductCard key={product._id} wishlist={true} product={product}/>)
        }
    </div>
    </div>

  )
}

export default Wishlist