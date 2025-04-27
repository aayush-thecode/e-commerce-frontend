'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import('react-slick'), {
  ssr: false
});

interface IProps {
  images: string[];
}

const ImageSlider: React.FC<IProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };

  return (
    <div className="h-[550px] w-[550px] overflow-hidden">
      <Slider className="h-full" {...settings}>
        {images?.map((image, index) => {
          const fixedImageUrl = image.replace(/\\/g, '/');
          const imageSrc = fixedImageUrl
            ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${fixedImageUrl}`
            : '/products/pashminap.jpg';

          return (
            <div key={index} className="h-[550px] w-[550px]">
              <Image
                src={imageSrc}
                width={1000}
                height={1000}
                alt="product detail image"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ImageSlider;
