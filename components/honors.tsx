import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { honorsData } from '@/lib/data';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Honors() {
  return (
    <section className="lg:mt-44 mt-10 flex flex-col items-center snap-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Honors & Awards
      </h1>
      <p className="mt-2 text-sm font-medium mb-8 sm:text-base sm:mb-16 md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        The fruit of effort.
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-16 flex-wrap items-center justify-center">
        {honorsData.map((honor, index) => (
          <div
            key={index}
            className="overflow-hidden w-[398px] lg:w-[500px] h-[430px] mb-6 rounded-md bg-white border border-white border-opacity-20 bg-opacity-10 hover:bg-opacity-[0.15] transition duration-500 ease-in-out"
          >
            <Link href={honor.source} target="_blank">
              <Image
                className="object-cover w-[398px] lg:w-[500px] h-[56%] rounded-t-md transition duration-300 ease-in-out hover:scale-105"
                src={honor.imageUrl}
                alt={honor.title}
              ></Image>
            </Link>
            <div className="flex flex-row items-center p-4 gap-2">
              <Link
                href={honor.source}
                target="_blank"
                className="text-white font-semibold text-lg flex items-end transition duration-300 ease-in-out hover:text-gray-300"
              >
                {honor.title}
                <div>
                  <FiArrowUpRight />
                </div>
              </Link>
            </div>
            <p className="pl-4 text-xs lg:text-sm text-gray-300 font-normal w-[90%] lg:mt-2">{honor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
