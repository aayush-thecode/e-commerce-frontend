import Link from 'next/link'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import Image from 'next/image';

const Header = () => {
    return (
        <div className='tracking-wider flex shadow justify-between items-center py-2 px-6 sm:px-8 h-20 bg-white'>
            {/* logo */}
            <div className="w-[120px]"> 
                <Link href="/">
                    <Image 
                        src="/logo.png"  
                        alt="Nepali Bazar Logo"
                        width={1000}
                        height={1000}
                        className="object-contain w-full h-20" 
                        priority
                    />
                </Link>
            </div>


             {/* center section  */}
             <div className='flex gap-5 text-lg'>
                <div>
                    <Link href={'/'}>
                        <p className=' transition-all duration-300 hover:text-blue-600 font-semibold'>Home</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/contact-us'}>
                        <p className=' transition-all duration-300 hover:text-blue-600 font-semibold'>Contact Us</p>
                    </Link>
                </div>
                <div>
                    <Link href={'/about-us'}>
                        <p className=' transition-all duration-300 hover:text-blue-600 font-semibold'>About Us</p>
                    </Link>
                </div>

            </div>

            {/* right section */}
            <div className='flex gap-3'>
                <Link href='/wishlist'>
                    <CiHeart className='text-gray-600 transition-all duration-300 hover:scale-[1.1]' size={24} />
                </Link>
                <Link href='/cart'>
                    <BsCart3 className='text-gray-600 transition-all duration-300 hover:scale-[1.1]' size={20} />
                </Link>
                <Link href='/login'>
                    <IoPersonOutline className='text-gray-600 transition-all duration-300 hover:scale-[1.1]' size={20} />
                </Link>
            </div>
        </div>
    )
}

export default Header;