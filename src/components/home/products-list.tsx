'use client'

import React from 'react'
import ProductCard from '../auth/product-cart/product-cart'
interface IProp {
    title: string,
    products: any[],
    isLoading: boolean,
}

const ProductList: React.FC<IProp> = ({title = 'Most Sale', products, isLoading=false}) => {
  return (
    <div className='w-full '>
        <div>
            <h1 className='font-bold text-2xl tracking-wider font-serif flex justify-center mt-10'>{title}</h1>
        </div>
            
            {/* products */}

            {isLoading &&<p>Loading...</p>} 
            {
                !isLoading && products.length > 0 && 
                <div className='flex gap-4 my-2 flex-wrap '>
            
            {
                products?.map((product, index) => <ProductCard key={index} product={product}/>)
                
            }
                </div>

}
              { !isLoading && products && products.length === 0 && <p>No Data found</p> }
              </div>

            )
        }
    

export default ProductList;