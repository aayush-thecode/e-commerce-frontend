'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import Image from 'next/image';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

import { useAuth } from '@/context/auth.content';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="shadow bg-white">
      <div className="tracking-wider flex justify-between items-center py-4 px-6 sm:px-8 lg:h-20">
        {/* Logo */}
        <div className="w-[120px] lg:w-[150px]">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Nepali Bazar Logo"
              width={1000}
              height={1000}
              className="object-contain w-full h-16 sm:h-20"
              priority
            />
          </Link>
        </div>

        {/* Hamburger icon (Mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Center navigation (Desktop only) */}
        <nav className="hidden lg:flex gap-5 text-lg font-semibold">
          <Link href="/" className="transition-all duration-300 hover:text-orange-600">
            Home
          </Link>
          <Link href="/contact-us" className="transition-all duration-300 hover:text-orange-600">
            Contact Us
          </Link>
          <Link href="/about-us" className="transition-all duration-300 hover:text-orange-600">
            About Us
          </Link>
        </nav>

        {/* Right section (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link href="/wishlist">
                <CiHeart className="text-gray-600 font-bold transition-all duration-300 hover:scale-110" size={28} />
              </Link>
              <Link href="/cart">
                <BsCart3 className="text-gray-600 font-bold transition-all duration-300 hover:scale-110" size={24} />
              </Link>
              <IoPersonOutline className="text-gray-600 font-bold transition-all duration-300 hover:scale-110" size={24} />
              <button
                onClick={logout}
                className="cursor-pointer text-lg font-semibold border border-red-500 text-red-500 px-3 py-2 min-w-[100px] rounded-md"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="cursor-pointer text-lg font-semibold border border-orange-500 text-orange-500 px-3 py-2 min-w-[100px] rounded-md">
                  Login
                </button>
              </Link>
              <Link href="/sign-up">
                <button className="cursor-pointer text-lg font-semibold bg-orange-500 text-white px-3 py-2 min-w-[100px] rounded-md">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-lg font-semibold bg-white">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block hover:text-orange-600">
            Home
          </Link>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)} className="block hover:text-orange-600">
            Contact Us
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)} className="block hover:text-orange-600">
            About Us
          </Link>

          {/* Right icons in mobile */}
          <div className="flex gap-4 pt-4">
            {isAuthenticated ? (
              <>
                <Link href="/wishlist" onClick={() => setMenuOpen(false)}>
                  <CiHeart className="text-gray-700" size={24} />
                </Link>
                <Link href="/cart" onClick={() => setMenuOpen(false)}>
                  <BsCart3 className="text-gray-700" size={20} />
                </Link>
                <IoPersonOutline className="text-gray-700" size={20} />
                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="text-red-500 text-sm font-semibold ml-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)} className="text-orange-500">
                  Login
                </Link>
                <Link href="/sign-up" onClick={() => setMenuOpen(false)} className="text-orange-500">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
