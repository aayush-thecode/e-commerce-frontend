import LoginForm from "../../components/auth/login-form"
import Link from "next/link"
import * as React from 'react';


const Page = () => {
    return (
        <div className='h-[100vh] w-full flex justify-center items-center border bg-white'>
        <div className="flex flex-col justify-center md:items-center px-3 sm:px-14 py-10 w-full md:w-fit  md:border md:border-gray-400   rounded-md">
            {/* <h1 className="text-2xl font-bold  text-center tracking-widest mb-4">Login </h1> */}
            <LoginForm />
            <div className='mt-4 tracking-wider'>
                <p>Don&apos;t have an account? <Link href='/signup'><span className="text-blue-600 font-semibold">Sign-Up</span></Link></p>
            </div>
        </div>
    </div>
    )
}

export default Page;