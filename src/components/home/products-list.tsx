
import React from 'react'
import ProductCard from '../auth/product-cart/product-cart'
interface IProp {
    title: string,
    products: any[]
}

const ProductList: React.FC<IProp> = ({title = 'Most Sale', products}) => {
  return (
    <div className='w-full '>
        <div>
            <h1 className='font-bold text-2xl tracking-wider font-serif flex justify-center mt-4'>{title}</h1>
        <div>
            {/* products */}
            <div className='flex gap-2.5 flex-wrap'>
                {
                    products.map((product, index) => <ProductCard key={index}/>)
                }
            </div>
        </div>
        </div>

    </div>
  )
}

export default ProductList