'use client';
import React from 'react';
import Typewriter from '@/app/typing/typewriter';

export default function Intro() {
  return (
    <section className="lg:mt-44 mt-10  snap-center">
      <p className="text-2xl sm:text-5xl lg:text-6xl lg:leading-relaxed font-medium text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        <Typewriter
          delay={40}
          infinite={false}
          text="I create elevating digital experiences that inspire and connect with people through development and design."
        />
      </p>
    </section>
  );
}
