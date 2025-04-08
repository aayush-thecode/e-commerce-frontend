'use client'

import React, { useEffect } from 'react'
import ProductList from '../products-list'
import { getAllProducts } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import toast from 'react-hot-toast'

const products = [
    {
        image: '/products/pashmina.webp',
        name: 'Trending Products',
        price: 3500
    },
    {
        image: '/products/pashminap.jpg',
        name: 'Trending Products',
        price: 3000
    },
    {
      image: '/products/pashmina.webp',
      name: 'Trending Products',
      price: 3500
  },
  {
      image: '/products/pashminap.jpg',
      name: 'Trending Products',
      price: 3000
  },
  {
    image: '/products/pashmina.webp',
    name: 'Trending Products',
    price: 3500
},
{
    image: '/products/pashminap.jpg',
    name: 'Trending Products',
    price: 3000
}
]

const TrendingProducts = () => {
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

  return (
    <div className='mt-10'>

        <ProductList title='Trending products' products ={data?.data?.data?? []} isLoading={isPending} 

        />
    </div>
  )
}

export default TrendingProducts;