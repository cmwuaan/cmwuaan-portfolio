'use client';
import React from 'react';
import Image from 'next/image';
import HeroProfile from '@/public/images/CMQHome.png';
import { motion } from 'framer-motion';
import { jsPDF } from 'jspdf';
// import CV from '../public/files/CV_Cao_Minh_Quan_Software_Engineer_Intern.pdf';

// Import Icons
import { FaArrowDown } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Hero() {
  // Lazy Loading
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col items-center gap-6 md:flex-row sm:justify-around snap-end md:snap-center"
    >
      <div className="flex flex-col items-center md:items-start text-center md:text-left sm:w-[20rem] lg:w-[26rem]">
        <h1 className="text-6xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
          Quan Cao&apos;s Portfolio
        </h1>
        <p className="text-md sm:text-base lg:text-xl font-medium text-gray-300">
          I design and code beautiful simple things, and I love what I do.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-10 w-full justify-center">
          <a
            href="https://drive.google.com/uc?id=1ZxaImTafK4AyYrxq8_TFTikSijCebI5y&export=download"
            download
            target="_blank"
            className="flex items-center justify-center w-32 h-8 bg-white rounded-md text-black font-medium p-1 text-sm transition duration-300 ease-in-out hover:bg-gray-200"
          >
            Download CV <FaArrowDown />
          </a>
          <button className="flex items-center justify-center w-32 h-[2.2rem] bg-white border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] rounded-md text-white font-medium p-1 text-sm transition duration-300 ease-in-out hover:bg-opacity-[0.15]">
            Explore more
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-[18rem] h-[24rem] md:h-[24rem] lg:w-[24rem] lg:h-[30rem] bg-white border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] rounded-md z-[-1] ">
        <Image
          src={HeroProfile}
          alt="About cover"
          className="object-cover translate-y-[3.3rem] md:translate-y-[3.3rem] lg:translate-y-[2.4rem]"
        ></Image>
      </div>
    </section>
  );
}
