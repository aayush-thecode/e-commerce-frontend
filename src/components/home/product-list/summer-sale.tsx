import React from 'react'
import ProductList from '../products-list'

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
  return (
    <div>
        <ProductList title='Summer Products' products={products} isLoading={false}
        />
    </div>
  )
}

export default SummerProducts;