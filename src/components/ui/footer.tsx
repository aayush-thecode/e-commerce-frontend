import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section - Made more compact */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          
          {/* Brand Info - Smaller */}
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-orange-500">NEPALI BAZAR</h2>
            <p className="italic text-gray-300">Your Local Store</p>
            <p className="text-gray-300">
              Quality Nepali products at the best prices.
            </p>
          </div>

          {/* Quick Links - Smaller */}
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link href="/shop" className="hover:text-orange-400 transition">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-orange-400 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service - Smaller */}
          <div>
            <h3 className="text-base font-semibold mb-2">Customer Service</h3>
            <ul className="space-y-1">
              <li><Link href="/returns" className="hover:text-orange-400 transition">Return Policy</Link></li>
              <li><Link href="/shipping" className="hover:text-orange-400 transition">Shipping Info</Link></li>
              <li><Link href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info - Smaller */}
          <div>
            <h3 className="text-base font-semibold mb-2">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500 text-sm" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-orange-500 text-sm" />
                <span>+977 9841XXXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500 text-sm" />
                <span>info@nepalibazar.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - More compact */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            {/* Copyright - Smaller */}
            <div>
              <p className="text-xs text-gray-400">
                © 2025 Nepali Bazar. All Rights Reserved.
              </p>
            </div>

            {/* Social Media - Smaller icons */}
            <div className="flex gap-3">
              <Link href="https://facebook.com/nepalibazar" target="_blank" aria-label="Facebook">
                <FaFacebook className="text-gray-300 hover:text-orange-500 transition text-sm" size={16} />
              </Link>
              <Link href="https://twitter.com/nepalibazar" target="_blank" aria-label="Twitter">
                <FaTwitter className="text-gray-300 hover:text-orange-500 transition text-sm" size={16} />
              </Link>
              <Link href="https://instagram.com/nepalibazar" target="_blank" aria-label="Instagram">
                <FaInstagram className="text-gray-300 hover:text-orange-500 transition text-sm" size={16} />
              </Link>
              <Link href="https://linkedin.com/company/nepalibazar" target="_blank" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-300 hover:text-orange-500 transition text-sm" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;