/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ReviewCard from './review-card'
import { IReviews } from '@/interface/review.interface'
import { getProductReview } from '@/api/review';

interface IProps {
    productId:string
}


const Reviews:React.FC<IProps> = ({productId}) => {

    const {isLoading,data,error} = useQuery({
        queryKey:['reviews', productId],
        queryFn:() => getProductReview(productId)
    })

    if(isLoading){
        return <div >Loading....</div>
    }
    
    // if (error) return <div>Error loading reviews.</div>;

  return (
    <div className='flex flex-wrap justify-center gap-4 mt-3'>
        {
            data.data?.map((review:IReviews) => <ReviewCard key={review?._id} review={review} />)
        }
    </div>
  )
}

export default Reviews