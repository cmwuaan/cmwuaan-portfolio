import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CMQLogo from '@/public/logos/CMQLogo.png';
import { FaGithub, FaLinkedinIn, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="lg:mt-44 mt-20 mb-20 flex items-center snap-center justify-between mx-10 md:mx-36">
      <Link href={'/'} className="flex justify-center gap-2 md:gap-4 ">
        <Image src={CMQLogo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8"></Image>
        <p className="hover:text-gray-100 transition duration-300 ease-in-out text-sm sm:text-base md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 ">
          cmwuaan
        </p>
      </Link>
      <div className="flex gap-2 md:gap-6">
        <Link
          target="_blank"
          href={'https://www.linkedin.com/in/cmwuaan'}
          className="hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-xl md:text-2xl text-gray-300"
        >
          <FaLinkedinIn />
        </Link>
        <Link
          target="_blank"
          href={'https://github.com/cmwuaan'}
          className="hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-xl md:text-2xl text-gray-300"
        >
          <FaGithub />
        </Link>
        <Link
          target="_blank"
          href={'https://facebook.com/cmwuaan'}
          className="hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-xl md:text-2xl text-gray-300"
        >
          <FaFacebookSquare />
        </Link>
        <Link
          target="_blank"
          href={'https://instagram.com/cmwuaan'}
          className="hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-xl md:text-2xl text-gray-300"
        >
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
