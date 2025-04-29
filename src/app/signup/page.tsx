import SignupPage from "@/components/auth/signup";
import Link from "next/link";
import * as React from "react";

const SignUp = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-white">
      <div className="flex flex-col justify-center md:items-center px-3 sm:px-14 py-10 w-full md:w-fit md:border md:border-gray-400 rounded-md">
        {/* <h1 className="text-2xl font-bold text-center tracking-widest mb-4">Register</h1> */}
        <SignupPage />
        <div className="mt-4 tracking-wider">
          <p>
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-orange-600 font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
