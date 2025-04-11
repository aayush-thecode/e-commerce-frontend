import React from 'react'
import { RatingStar } from './../../ui/rating-star';

interface IProp{
    name: string,
    rating: number
}

const ProductTitle: React.FC<IProp> = ({name, rating}) => {
  return (
    <div>
        <p>{name}</p>
        <div>
        <RatingStar rating={rating}/>
        <p className='tracking-wider text-sm text-gray-500 flex '>({rating})</p>

     
        </div>
    </div>
  )
}

export default ProductTitle;