import React from 'react'
import  Image from 'next/image';


const Hero = () => {
  return (
    <div className='relative tracking-wider min-h-[520px] w-full font-serif mt-1'> 
    
    <div className='absolute inset-0 h-full'>
        <Image
        src='/hero/cover.png'
        height = {10000}
        width= {10000}
        className='w-full h-full'
        alt='hero cover image'

        />
    </div>
    <div className=' absolute inset-0 bg-black/20'>

    {/* content  */}

        <div className='absolute top-1/5 left-1/4 z-50 mx-auto max-w-[900px] px-4'>

            <div className='tracking-wider'>
                <h1 className='font-bold text-3xl '>
                    Discover your perfect style with just a click!
                </h1>
                <p className='flex justify-center text-xl mt-1'>
                    Unbeatable deals and the latest trends are waiting for you....
                </p>
            </div>
            <div className=' flex justify-center mt-2'>

            <button className= 'px-5 py-3 bg-orange-400 font-bold uppercase text-black rounded-md cursor-pointer hover:bg-orange-500 transition-all hover:text-gray-800'>
                Shop Now
            </button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Hero