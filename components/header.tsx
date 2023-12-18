'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { links } from '@/lib/data';
import { IoMenu } from 'react-icons/io5';

const lgSize = 1150;

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [widthDevice, setWidthDevice] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    const handleDeviceSize = () => {
      setWidthDevice(window.innerWidth);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleDeviceSize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleDeviceSize);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        <header className="z-[10]">{isScrolling && widthDevice > lgSize ? <NavbarScroll /> : <NavbarFixed />}</header>
      </AnimatePresence>
    </>
  );
}

function NavbarFixed() {
  return (
    <nav
      className="md:px-24 px-4 flex justify-between items-center fixed bg-white w-full h-[4rem] rounded-non top-0
        border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]"
    >
      <Link href={'/'} className="flex gap-2 items-center">
        <div className="w-[22px] h-[22px] bg-white rounded-full"></div>
        <h1 className=" text-xl font-semibold">cmwuaan</h1>
      </Link>
      <ul className="hidden lg:flex gap-12 items-center h-full">
        {links.map((link) => (
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={link.hash}
            className="px-2 text-white text-md"
          >
            <Link href={link.hash}>{link.name}</Link>
          </motion.li>
        ))}
      </ul>
      <button className="hidden lg:flex w-24 h-8 rounded-md bg-white border border-white border-opacity-20 bg-opacity-10 justify-center items-center text-sm gap-1">
        Hire me
        <MdOutlineArrowOutward />
      </button>
      <div className="lg:hidden text-2xl text-gray-300">
        <IoMenu />
      </div>
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
      className="fixed bg-white h-[3rem] rounded-full top-6 left-1/2
        border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]"
    >
      <ul className="flex justify-center gap-6 items-center h-full px-4">
        {links.map((link) => (
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={link.hash}
            className="px-2 text-white text-md"
          >
            <Link href={link.hash}>{link.name}</Link>
          </motion.li>
        ))}
        <li className="text-white text-md px-[12px] py-1 bg-black rounded-full">
          <Link href={'#hire'}>Hire me</Link>
        </li>
      </ul>
    </motion.nav>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: '-50%',
    opacity: 0,
  },
  animate: {
    y: 0,
    x: '-50%',
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
