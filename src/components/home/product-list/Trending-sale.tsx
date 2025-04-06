import React from 'react'
import ProductList from '../products-list'

const products = [
    {
        image: '/products/pashmina.main.webp',
        name: 'Trending Products',
        price: 3500
    },
    {
      image: '/products/pashmina.pink.jpg',
        name: 'Trending Products',
        price: 3000
    }
]

const TrendingProducts = () => {
  return (
    <div>
        <ProductList title='Trending products' products ={products}
        />
    </div>
  )
}

export default TrendingProducts;