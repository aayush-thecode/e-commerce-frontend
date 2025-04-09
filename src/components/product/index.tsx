'use client'
import { getProductById } from '@/api/product'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import ImageSlider from './product-detail/image-slider';
import { Star, StarHalf, Heart, Share2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IProp {
    id: string
}

const product = {
    name: 'Premium Laptop Pro 15"',
    category: {
        name: 'Electronics'
    },
    _id: '3',
    coverImage: '/products/dell.webp',
    images: [
        '/products/dell.webp',
        '/products/dell.webp',
        '/products/dell.webp',
    ],
    price: '1299',
    discountPrice: '1099',
    averageRating: 4.2,
    reviewCount: 128,
    stock: 15,
    features: [
        '15.6" 4K OLED Display',
        'Intel Core i9 Processor',
        '32GB RAM | 1TB SSD',
        'NVIDIA RTX 4070',
        'Thunderbolt 4 Ports'
    ],
    description: `The Premium Laptop Pro combines cutting-edge performance with elegant design. Featuring a stunning 4K OLED display, powerful Intel Core i9 processor, and NVIDIA RTX graphics, this laptop delivers exceptional performance for professionals and creatives alike. The ultra-slim aluminum chassis houses advanced cooling technology for sustained performance.`,
}

const ProductDetail: React.FC<IProp> = ({ id }) => {
    const { isLoading, data, isError, error } = useQuery({
        queryKey: ['get-product-by-id', id],
        queryFn: () => getProductById(id)
    })

    useEffect(() => {
        if (isError) {
            toast.error(error?.message ?? 'Something went wrong')
        }
    }, [error, isError])

    const renderRatingStars = () => {
        const stars = [];
        const fullStars = Math.floor(product.averageRating);
        const hasHalfStar = product.averageRating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
        }
        
        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-5 h-5 fill-yellow-400 text-yellow-400" />);
        }
        
        const emptyStars = 5 - stars.length;
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />);
        }
        
        return stars;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>Home</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span>Electronics</span>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-800 font-medium">Laptops</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* Image Gallery */}
                <div className="lg:w-1/2">
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        <div className="w-full h-[500px]">
                            <ImageSlider images={product.images} />
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            Share
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Heart className="w-4 h-4" />
                            Save
                        </Button>
                    </div>
                </div>

                {/* Product Info */}
                <div className="lg:w-1/2">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <div className="flex items-center mt-2">
                                <div className="flex items-center">
                                    {renderRatingStars()}
                                    <span className="ml-2 text-sm font-medium text-gray-600">
                                        {product.averageRating} ({product.reviewCount} reviews)
                                    </span>
                                </div>
                                <span className="mx-2 text-gray-300">|</span>
                                <span className="text-sm text-green-600 font-medium">
                                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-3xl font-bold text-gray-900">रु. {product.discountPrice}</span>
                            {product.discountPrice && (
                                <>
                                    <span className="text-xl text-gray-500 line-through">रु. {product.price}</span>
                                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-0.5 rounded">
                                        {Math.round((1 - Number(product.discountPrice) / Number(product.price)) * 100)}% OFF
                                    </span>
                                </>
                            )}
                        </div>

                        <div className="border-t border-b border-gray-200 py-6">
                            <h3 className="text-lg font-medium mb-3">Key Features</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-medium">Description</h3>
                            <p className="text-gray-700 leading-relaxed">{product.description}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="flex-1 h-12 bg-black hover:bg-gray-800 rounded-lg">
                                Buy Now
                            </Button>
                            <Button variant="outline" className="flex-1 h-12 border-gray-800 text-gray-800 hover:bg-gray-50 rounded-lg">
                                Add to Cart
                            </Button>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center gap-3">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <p className="text-sm font-medium text-blue-800">Free delivery</p>
                                    <p className="text-xs text-blue-600">Get free delivery on all orders over रु. 1000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default ProductDetail