import { IProduct } from '@/interface/auth/product.interface';
import React from 'react';
import ProductTitle from './product-title';
import { QuantityInput } from '@/components/ui/quantity-input';
import { RatingStar } from '@/components/ui/rating-star';

interface IProps {
    product:IProduct;
}

const ProductDetails: React.FC<IProps> = ({ product }) => {
    return (
        <div>
          <div className='font-serif'>
            <ProductTitle name={product.name} rating={product.averageRating}/>
            <p className='text-[20px] tracking-wider mt-5'>  
              <span className='font-semibold text-[15px]'> रु. </span>
              <span className='font-serif text-black'>{product.price}</span></p>
          </div>
          <div className='mt-10 font-serif'>
              <p className='mb-2 font-bold'>Quantity Input</p>
              <QuantityInput/>
          </div>

             {/* button */}
             <div className='flex gap-10 mt-10 w-full '>
        <button className='px-4 py-2 w-1/2 md:max-w-[300px] rounded-md cursor-pointer text-lg font-bold tracking-wider bg-orange-500 hover:bg-orange-600 text-white'>Add to cart</button>
        <button className='px-4 py-2 w-1/2 md:max-w-[300px] cursor-pointer text-lg font-bold tracking-wider text-orange-500 border border-orange-500 rounded-md hover:ge-orange-500'> Add to wishlist</button>
             </div>
             <div className="mt-6 bg-[#F8FAFC] border border-gray-300 rounded-lg shadow-sm p-6">
                <h1 className="font-bold text-2xl text-gray-800 mb-3">Description</h1>
                <p className="text-base text-gray-700 leading-relaxed text-justify m-0 p-0">
                  {product.description}
                </p>
          </div>


    <div className='max-w-max mt-20 rounded-2xl'>

          <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            What Our Customers Say
           </h2>

        <div className="flex flex-col sm:flex-row justify-center gap-8 items-center">
    {/* Testimonial Card */}
         <div className="bg-white  shadow-md p-6 max-w-md w-full">
          <div className="flex items-center gap-4 mb-4">
         <img
          src="/rajesh.png" 
          alt="Rajesh Sharma"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">Rajesh Sharma</h4>
          <div className="flex text-yellow-400 text-sm">
            
            {/* 5 stars */}
            <RatingStar rating={product.averageRating}/>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">
        "Amazing selection of authentic Nepali products. The quality is
        excellent and delivery was faster than expected. Will definitely shop
        again!"
      </p>
    </div>

    {/* Rating Count */}
    <div className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold text-lg">
      436
    </div>
  </div>
</section>
</div>
        </div>

        
    );
};

export default ProductDetails;
