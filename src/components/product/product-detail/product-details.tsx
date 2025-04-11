import { IProduct } from '@/interface/auth/product.interface';
import React from 'react';
import ProductTitle from './product-title';

interface IProps {
    product:IProduct
}

const ProductDetails: React.FC<IProps> = ({ product }) => {
    return (
        <div>
          <div>
            <ProductTitle name={product.name} rating={product.averageRating}/>
            <p className='text-[20px] tracking-wider mt-5'> रु. <span className='font-serif-'>{product.price}</span></p>
          </div>
             {/* button */}
             <div className='flex gap-10 mt-10 w-full'>
        <button className='cursor-pointer text-lg font-bold tracking-wider bg-orange-500 text-black'>Add to cart</button>
        <button className='cursor-pointer text-lg font-bold tracking-wider  bg-orange-500 text-black'> Add to wishlist</button>
             </div>
        </div>
    );
};

export default ProductDetails;
