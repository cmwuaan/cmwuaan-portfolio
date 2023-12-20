import React from 'react';
import Image from 'next/image';
import { skillsData } from '@/lib/data';
import { imageTechTags } from '@/lib/data';

interface imageTagProps {
  tag: String;
}

export default function Skills() {
  return (
    <section id="more" className="lg:mt-44 mt-10 flex flex-col items-center snap-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
        Skills
      </h1>
      <div className="flex flex-col gap-4 items-center">
        {skillsData.map((role, index) => {
          const ComponentToRender = role.drawComponent; // Extracting the component from role.drawComponent
          return (
            <div key={index} className="flex flex-col items-center">
              <p className="text-lg font-medium mt-8 mb-2 md:mb-4 lg:mb-6 sm:text-xl sm:mt-16 md:text-2xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                {role.role}
              </p>
              <div className="flex flex-wrap justify-center mb-4 md:mb-8 lg:mb-10">
                {role.techTags.map((tag, index) => {
                  const logoIndex = findLogo({ tag });
                  const logoUrl = logoIndex >= 0 ? imageTechTags[logoIndex].imageUrl : '';
                  const logoName = logoIndex >= 0 ? imageTechTags[logoIndex].name : '';
                  return (
                    <div
                      key={index}
                      className="w-[7.9rem] h-[2.2rem] m-2 flex items-center rounded-full bg-white border border-white border-opacity-20 bg-opacity-10 shadow-lg shadow-white/[0.03]"
                    >
                      {logoUrl && (
                        <Image
                          src={logoUrl}
                          alt={tag}
                          title={logoName}
                          className="w-[1.6rem] h-[1.6rem] bg-white rounded-full ml-1 mr-2"
                        ></Image>
                      )}
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </div>
              {/* {ComponentToRender && <ComponentToRender />} Render the component */}
              <Image
                src={role.imageRole}
                alt={role.role}
                className="my-4 transition duration-500 ease-in-out hover:scale-105 hover:contrast-150 hover:brightness-150"
              ></Image>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function findLogo({ tag }: imageTagProps) {
  let sourceIndex = -1;
  imageTechTags.map((url, index) => (url.name === tag ? (sourceIndex = index) : -1));
  return sourceIndex;
}
