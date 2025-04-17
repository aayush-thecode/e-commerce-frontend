'use client'

import React from 'react'
const  Slider  =  dynamic(()=>import("react-slick"),{
  ssr:false
});

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import dynamic from 'next/dynamic';
interface IProps {
    images:string[],
}

const ImageSlider:React.FC<IProps> = ({images}) =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
      };

      console.log(images)
    return(
        <div className="h-[550px] w-[550px] overflow-hidden">
      <Slider className='h-full' {...settings}>
        {images.map((image,index) => {
            return(
                <div  key={index} className='h-[550px] w-[550px] '>
                    <Image
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image}`}
                    width={1000}
                    height={1000}
                    alt={'product detail image'}
                    className='w-[400px] h-[400px] object-cover'
                    />
                </div>
            )
        })}
      </Slider>
    </div>
    )
}

export default ImageSlider;