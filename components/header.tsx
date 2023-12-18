'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <header className="z-[99]">{isScrolling ? <NavbarScroll /> : <NavbarFixed />}</header>
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav
      className="px-24 flex justify-between items-center fixed bg-white w-full h-[4rem] rounded-none top-0
        border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]"
    >
      <div className="flex gap-2 items-center">
        <div className="w-[22px] h-[22px] bg-white rounded-full"></div>
        <h1 className=" text-xl font-semibold">cmwuaan</h1>
      </div>
      <ul className="flex gap-12 items-center h-full">
        <li className="px-2 text-white text-md">
          <Link href={'/home'}>Home</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={'/about'}>About</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={'/projects'}>Projects</Link>
        </li>
        <li className="px-2 text-white text-md">
          <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
      <button
        onClick={() => console.log('Hello')}
        className=" w-24 h-8 rounded-md bg-white border border-white border-opacity-20 bg-opacity-10 flex justify-center items-center text-sm gap-1"
      >
        Hire me
        <MdOutlineArrowOutward />
      </button>
    </nav>
  );
}

function NavbarScroll() {
  return (
    <motion.nav
      key={1}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={NavAnimations}
      className="fixed bg-white h-[3rem] rounded-full top-6
        border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]"
    >
      <ul className="flex justify-center gap-12 items-center h-full px-4">
        <li className="text-white text-md">
          <Link href={'/home'}>Home</Link>
        </li>
        <li className="text-white text-md">
          <Link href={'/about'}>About</Link>
        </li>
        <li className="text-white text-md">
          <Link href={'/projects'}>Projects</Link>
        </li>
        <li className="text-white text-md">
          <Link href={'/contact'}>Contact</Link>
        </li>
        <li className="text-white text-md px-[12px] py-1 bg-black rounded-full">
          <Link href={'/hire'}>Hire me</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: '90%', // Fix 1
    opacity: 0,
  },
  animate: {
    y: 0,
    x: '90%', // Fix 1
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opcity: 0,
  },
};

// Bugs:
/**
 * Error 1:
 */
