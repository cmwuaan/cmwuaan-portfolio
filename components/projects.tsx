import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import { imageTechTags } from '@/lib/data';

import { FiArrowUpRight } from 'react-icons/fi';

interface imageTagProps {
  tag: String;
}

export default function Projects() {
  return (
    <section id="project" className="lg:mt-44 mt-10 mx-10 flex flex-col items-center snap-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Projects
      </h1>
      <p className="mt-2 text-sm font-medium mb-8 sm:text-base sm:mb-16 md:text-xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        What I can do.
      </p>
      <div className="flex flex-col lg:flex-row lg:gap-6 flex-wrap items-center justify-center">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="overflow-hidden w-[398px] h-[430px] mb-6 rounded-md bg-white border border-white border-opacity-20 bg-opacity-10 hover:bg-opacity-[0.15] transition duration-500 ease-in-out"
          >
            <Link href="/">
              <Image
                className="object-cover w-[398px] h-[56%] rounded-t-md transition duration-300 ease-in-out hover:scale-105"
                src={project.coverUrl}
                alt={project.title}
              ></Image>
            </Link>
            <div className="flex flex-row items-center p-4 gap-2">
              <Image className="w-[22px] h-[22px]" src={project.logoUrl} alt={project.title}></Image>
              <Link
                href={project.source}
                target="_blank"
                className="text-white font-semibold text-xl flex items-end w-[20px] transition duration-300 ease-in-out hover:text-gray-300"
              >
                {project.title}
                <div>
                  <FiArrowUpRight />
                </div>
              </Link>
            </div>

            <p className="pl-4 text-sm text-gray-300 font-normal w-[90%]">{project.description}</p>
            <div className="flex gap-2 pl-4 mt-6">
              {project.techTags.map((tag, index) => {
                const logoIndex = findLogo({ tag });
                const logoUrl = logoIndex >= 0 ? imageTechTags[logoIndex].imageUrl : '';
                const logoName = logoIndex >= 0 ? imageTechTags[logoIndex].name : '';
                return (
                  <div
                    key={index}
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-transparent border-[1.5px] border-gray-400 "
                  >
                    {logoUrl && <Image src={logoUrl} alt={tag} title={logoName} className="w-[22px] h-[22px]"></Image>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function findLogo({ tag }: imageTagProps) {
  let sourceIndex = -1;
  imageTechTags.map((url, index) => (url.name === tag ? (sourceIndex = index) : -1));
  return sourceIndex;
}
