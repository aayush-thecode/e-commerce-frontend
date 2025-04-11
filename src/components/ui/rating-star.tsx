'use client'


import React, { useEffect } from "react";


const  StarRatings =  dynamic(()=> import('react-star-ratings') ,{
    ssr:false
})

import dynamic from "next/dynamic";

interface IProp {
  rating: number;
}

export const RatingStar: React.FC<IProp> = ({ rating }) => {
  useEffect(() => {
    console.log('render', rating);
  }, [rating]);

  return (
    <div className="flex ">
      <StarRatings  
        rating={rating}          
        starRatedColor="gold"    
        changeRating={() => {}} 
        numberOfStars={5}        
        name="rating"            
        starDimension="20px"     
      />
    </div>
  );
};
