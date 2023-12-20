'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { links } from '@/lib/data';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import CMQLogo from '@/public/logos/CMQLogo.png';

const lgSize = 1150;

interface NavbarFixedProps {
  toggleMenu: Function;
}

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [widthDevice, setWidthDevice] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Navbar Controller for Mobile Device
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: '30vh',
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.45, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

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
        <header className="z-[9999]">
          {isScrolling && widthDevice > lgSize ? <NavbarScroll /> : <NavbarFixed toggleMenu={toggleMenu} />}

          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen bg-black backdrop-blur-[0.5rem] bg-opacity-10 text-gray-300 p-10 origin-top"
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <h1 className="text-lg text-gray-300 font-semibold">cmwuaan</h1>
                    <div
                      onClick={() => toggleMenu()}
                      className="cursor-pointer text-2xl hover:text-gray-400 transition duration-300 ease-in-out"
                    >
                      <IoClose />
                    </div>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center items-center gap-4"
                  >
                    {links.map((link, index) => {
                      return (
                        <div className="overflow-hidden" key={index}>
                          <motion.div
                            variants={mobileLinkVars}
                            className=" font-medium text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 lowercase hover:text-gray-500 px-6 cursor-pointer transition duration-500 ease-in-out"
                          >
                            <Link onClick={() => toggleMenu()} href={link.hash}>
                              {'.' + link.name}
                            </Link>
                          </motion.div>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      </AnimatePresence>
    </>
  );
}

function NavbarFixed({ toggleMenu }: NavbarFixedProps) {
  return (
    <nav
      className="md:px-24 px-4 flex justify-between items-center fixed bg-white w-[90%] left-1/2 -translate-x-1/2 sm:w-full h-[3rem] sm:h-[4rem] top-6 rounded-full sm:rounded-none sm:top-0
        border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] backdrop-blur-[0.5rem]"
    >
      <Link href={'/'} className="flex justify-center gap-2 md:gap-4 ">
        <Image src={CMQLogo} alt="Logo" className="w-6 h-6 md:w-8 md:h-8"></Image>
        <p className="hover:text-gray-100 transition duration-300 ease-in-out text-sm sm:text-base md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 ">
          cmwuaan
        </p>
      </Link>
      <ul className="hidden lg:flex gap-12 items-center h-full">
        {links.map((link) => (
          <motion.li
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={link.hash}
            className="px-2 text-white text-md transition duration-300 ease-in-out hover:text-gray-300"
          >
            <Link href={link.hash}>{link.name}</Link>
          </motion.li>
        ))}
      </ul>
      <a
        href="https://www.linkedin.com/in/cmwuaan/"
        target="blank"
        className=" cursor-pointer hidden lg:flex w-24 h-8 rounded-md bg-white border border-white border-opacity-20 bg-opacity-10 justify-center items-center text-sm gap-1 transition duration-300 ease-in-out hover:bg-opacity-[0.15]"
      >
        Hire me
        <MdOutlineArrowOutward />
      </a>
      <div
        onClick={() => {
          toggleMenu();
        }}
        className="cursor-pointer lg:hidden text-2xl text-gray-300 hover:text-gray-400 transition duration-300 ease-in-out"
      >
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
            className="px-2 text-white text-md transition duration-300 ease-in-out hover:text-gray-300"
          >
            <Link href={link.hash}>{link.name}</Link>
          </motion.li>
        ))}
        <li className="text-white text-md px-[12px] py-1 bg-black rounded-full transition duration-300 ease-in-out hover:bg-opacity-40 hover:text-gray-200">
          <Link href="https://www.linkedin.com/in/cmwuaan" target="blank">
            Hire me
          </Link>
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
