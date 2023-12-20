import React from 'react';
import AboutCover from '@/public/images/CMQCover.jpg';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="lg:mt-44 mt-10 flex flex-col items-center snap-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        About
      </h1>
      <p className="text-sm font-medium mb-8 sm:text-base sm:mb-16 md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Something fun about me.
      </p>
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="hidden relative lg:flex w-full h-[20rem] sm:h-[28rem] md:w-[12rem] md:h-[20rem] lg:w-[16rem] lg:h-[24rem] bg-white border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] rounded-md">
          <div className="absolute p-4 text-xs">
            <p className="text-green-500">user: ~/aboutme $</p>
            <p className="text-green-500">user: ~/aboutme $ clear</p>
            <p className=" text-red-500">clear: command not found</p>
            <p className="text-green-500">user: ~/aboutme $ echo</p>
            <p className="text-green-500">info.txt</p>
            <p className="text-center my-4">/==INTRODUCTION==/</p>
            <p>Name: Cao Minh Quan</p>
            <p>Role: Software Engineer</p>
            <p>Location: HCM City</p>
            <p className="text-green-500">
              user: ~/aboutme $ <span>_</span>
            </p>
          </div>
        </div>
        <Image className="rounded-md lg:w-[32rem] md:w-[26rem]" src={AboutCover} alt="About cover"></Image>
        <div className="hidden relative lg:flex w-full h-[20rem] sm:h-[28rem] md:w-[12rem] md:h-[20rem] lg:w-[16rem] lg:h-[24rem] bg-white border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03] rounded-md">
          <div className="absolute p-4 text-xs">
            <p className="text-green-500">user: ~/aboutme $ echo </p>
            <p className="text-green-500">education.txt</p>
            <p className="text-center my-4">/==UNIVERSITY==/</p>
            <p>School: University of</p>
            <p>Information Technology</p>
            <p>VNU-HCM</p>
            <p className="text-center my-4">/==FACULTY==/</p>
            <p>B.S.E Computer Networks</p>
            <p>and Communications</p>
            <p className="text-green-500">
              user: ~/aboutme $ <span>_</span>
            </p>
          </div>
        </div>
        <p className="lg:hidden font-medium text-gray-300 text-justify">
          I am a junior student at University of Information Technology VNU-HCM expertised in DevOps, Mobile App and Web
          Software Development. Eager to apply my skills and knowledge to fintech technologies as a Software Engineer at
          the company.
        </p>
      </div>
    </section>
  );
}
