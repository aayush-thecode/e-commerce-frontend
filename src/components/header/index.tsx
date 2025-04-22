'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { BsCart3 } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import { useAuth } from '@/context/auth.content';
import Image from 'next/image';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* Hamburger icon (mobile only) */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-2xl" />
            ) : (
              <HiOutlineMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Center section (desktop only) */}
        <nav className="hidden lg:flex gap-5 text-lg font-semibold">
          <Link href="/">
            <p className="transition-all duration-300 hover:text-orange-600">Home</p>
          </Link>
          <Link href="/contact-us">
            <p className="transition-all duration-300 hover:text-orange-600">Contact Us</p>
          </Link>
          <Link href="/about-us">
            <p className="transition-all duration-300 hover:text-orange-600">About Us</p>
          </Link>
        </nav>

        {/* Right section (desktop only) */}
        <div className="hidden lg:flex gap-4 items-center">
          <Link href="/wishlist">
            <CiHeart className="text-gray-700 transition-all duration-300 hover:scale-110" size={24} />
          </Link>
          <Link href="/cart">
            <BsCart3 className="text-gray-700 transition-all duration-300 hover:scale-110" size={20} />
          </Link>
          <Link href="/login">
            <IoPersonOutline className="text-gray-700 transition-all duration-300 hover:scale-110" size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-lg font-semibold bg-white">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <p className="hover:text-orange-600">Home</p>
          </Link>
          <Link href="/contact-us" onClick={() => setMenuOpen(false)}>
            <p className="hover:text-orange-600">Contact Us</p>
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpen(false)}>
            <p className="hover:text-orange-600">About Us</p>
          </Link>
          <div className="flex gap-4 pt-2">
            <Link href="/wishlist">
              <CiHeart className="text-gray-700" size={24} />
            </Link>
            <Link href="/cart">
              <BsCart3 className="text-gray-700" size={20} />
            </Link>
            <Link href="/login">
              <IoPersonOutline className="text-gray-700" size={20} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
