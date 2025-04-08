'use client'

import React, { useEffect } from 'react'
import ProductList from '../products-list'
import { getAllProducts } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'


const products = [
  {
    id: '1',
    coverImage: '/products/pashminap.jpg',
    name: 'Summer Products',
    price: 3500
  },
  {
    id: '2',
    coverImage: '/products/pashmina.webp',
    name: 'Summer Products',
    price: 3500
  },
  {
    id: '3',
    coverImage: '/products/pashminap.jpg',
    name: 'Summer Products',
    price: 3500
  },
  {
    id: '4',
    coverImage: '/products/pashmina.webp',
    name: 'Summer Products',
    price: 3500
  }
]

const SummerProducts = () => {

    const { isPending, data, isError, error } = useQuery({
      queryKey: ['trending-products'],
      queryFn: getAllProducts,
    })
    console.log('trending', data, isPending)
  
    useEffect(() => {
      toast.error
      {
        (error?.message ?? 'Something went wrong')
      }
    },[error,isError])

    return(
      <div className='mt-10'>

        <ProductList title='Summer Sale' products ={data?.data?.data?? []} isLoading={isPending} 

        />
    </div>
    )
}


export default SummerProducts;