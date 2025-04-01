import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link  from 'next/link';

const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-6 px-10">
            <div className="flex justify-between items-center">

                {/* Left section */}
                <div className="flex gap-5">
                    <p className="font-semibold text-lg">© 2025 My Company. All Rights Reserved.</p>
                </div>

                {/* Center section */}
                
                <div className="flex gap-8 text-lg">
                    <Link href="/privacy-policy">
                        <p className="transition-all duration-300 hover:text-blue-400">Privacy Policy</p>
                    </Link>
                    <Link href="/terms-of-service">
                        <p className="transition-all duration-300 hover:text-blue-400">Terms of Service</p>
                    </Link>
                    <Link href="/faq">
                        <p className="transition-all duration-300 hover:text-blue-400">FAQ</p>
                    </Link>
                </div>

                {/* Right section - Social Media */}
                <div className="flex gap-6">
                    <Link href="https://facebook.com" target="_blank">
                        <FaFacebook className="text-white transition-all duration-300 hover:text-blue-600" size={24} />
                    </Link>
                    <Link href="https://twitter.com" target="_blank">
                        <FaTwitter className="text-white transition-all duration-300 hover:text-blue-400" size={24} />
                    </Link>
                    <Link href="https://instagram.com" target="_blank">
                        <FaInstagram className="text-white transition-all duration-300 hover:text-pink-500" size={24} />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank">
                        <FaLinkedin className="text-white transition-all duration-300 hover:text-blue-700" size={24} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
