/* eslint-disable @typescript-eslint/no-explicit-any */


"use client"
import * as React from 'react';

import { ILogin } from "../../interface/auth/auth.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuAsterisk } from "react-icons/lu";
import { loginSchema } from "../../schemas/login.schema";
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { useAuth } from '@/context/auth.content';

import {
  useMutation,
} from '@tanstack/react-query'
import { login } from "../../api/auth";
import { useRouter } from 'next/navigation'


const LoginPage= () => {
  const router = useRouter()
  const {setUser} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "all",
  });

  //Mutation 
  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (response) => {

      //Invalidate and refetch 
      console.log('response', response);
      toast.success("Login Successfull!")
      Cookies.set('access_token', response.token, {expires: 1})
      localStorage.setItem('user',JSON.stringify(response.user))
      setUser(response.user)
      router.replace('/')
    },

    onError:(error: any) => {
      toast.error(error?.response?.data.message ?? 'Login Failed!')
    }
  })

  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    console.log(data);
    await mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md"
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2"> Login to your Account </h1>

        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <label className="text-base tracking-wide font-semibold text-gray-800">
              Email
            </label>
            <LuAsterisk className="text-xs text-red-500 ml-1" />
          </div>
          <input
            {...register("email")}
            className={`text-lg border ${errors.email ? "border-red-500 text-red-500" : "border-gray-300"} p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            placeholder="johndoe@gmail.com"
          />
          {errors.email && (
            <p className="text-xs text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <label className="text-base tracking-wide font-semibold text-gray-800">
              Password
            </label>
            <LuAsterisk className="text-xs text-red-500 ml-1" />
          </div>
          <input
            type="password"
            {...register("password")}
            className={`text-lg border ${errors.password ? "border-red-500 text-red-500" : "border-gray-300"} p-2 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="text-xs text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          disabled={isPending}
          type="submit"
          className="text-lg font-semibold px-4 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md text-white cursor-pointer hover:bg-blue-700 transition-all duration-300 mt-2 disabled:cursor-not-allowed"
        >
          {isPending? 'Loggin...':"Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginPage;