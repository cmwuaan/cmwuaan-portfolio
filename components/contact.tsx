import React from 'react';
import ContactForm from './form';
import Image from 'next/image';
import ContactCover from '@/public/images/ContactMe.jpg';

export default function Contact() {
  return (
    <section id="contact" className="lg:mt-44 mt-10 flex flex-col items-center snap-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Contact
      </h1>
      <p className="mt-2 text-sm font-medium mb-8 sm:text-base sm:mb-16 md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Let&apos;s connect and bring ideas to life.
      </p>
      <div className="flex flex-col lg:flex-row w-full gap-20 items-center">
        <div className="overflow-hidden bg-white border border-white border-opacity-20 bg-opacity-10 rounded-md lg:w-[50%] h-[400px]">
          <Image
            src={ContactCover}
            alt="contact cover"
            className="object-cover w-[100%] h-[100%] transition duration-300 ease-in-out hover:scale-105"
          ></Image>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
