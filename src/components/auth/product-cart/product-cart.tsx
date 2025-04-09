'use client'

import React from 'react'
import Image from 'next/image'
import { IProduct } from '@/interface/auth/product.interface'
import Link from 'next/link'

interface IProp {
  product: IProduct
}

const ProductCard: React.FC<IProp> = ({ product }) => {
  const { coverImage, price, name, _id } = product;

  return (
    <div className="overflow-hidden tracking-wider border border-gray-300 w-fit rounded-xl ml-7 bg-amber-50">

      {/* image */}
      <div className="h-fit w-60 aspect-square p-3 transition-all duration-300 hover:scale-[1.1]">
        <Link href={`/product/${_id}`}>
          <Image
            className="h-full w-full"
            height={1000}
            width={1000}
            src={coverImage ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${coverImage}` : '/products/pashminap.jpg'}
            alt={name}
          />
        </Link>
      </div>
      <div className="p-3">
        <p className="text-[15px] font-bold">{name}</p>
        <span className="text-[15px]">रु.{price}</span>
      </div>
      <div>
        <Link href={`/product/${product._id}`}>
          <button className="cursor-pointer py-3 w-full text-[14px] bg-black text-white font-semibold hover:scale-[1.1]">
            View Detail
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
