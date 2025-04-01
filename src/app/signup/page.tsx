import SignupPage from "@/components/auth/signup";
import Link from "next/link";

const signUp = () => {
  return (
    <div className='flex-grow flex justify-center items-center'>
            <div className='md:border border-gray-400 rounded-md  h-fit w-full md:w-fit p-4'>
                <div className='flex flex-col items-center tracking-wider'>
                    <h1 className='text-xl font-bold '>Register</h1>
                    <p>welcome</p>
                </div>
                <div>
                    <SignupPage/>
                </div>
                <div className='mt-4 tracking-wider text-center'>
                    <p>Already have an account? <Link href='/login'><span className="text-blue-600 font-semibold">Login</span></Link></p>
                </div>
            </div>
    </div>
  );
};

export default signUp;