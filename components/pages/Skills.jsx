'use client';
import { useState } from 'react';
import ProgressCircle from '@/components/ui/ProgressCircle';
import { skills } from '@/data/data.js';
import { motion as m } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClickTab1 = () => {
    setActiveTab(1);
  };

  const handleClickTab2 = () => {
    setActiveTab(2);
  };

  const handleClickTab3 = () => {
    setActiveTab(3);
  };
  return (
    <div className='py-20 container mx-auto bg-[#121B42]'>
      {/* header */}
      <div className='flex flex-col items-center'>
        <m.h1 className='text-3xl text-center mb-2 text-[#FCFFFF] font-bold uppercase' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0, duration:1}}>
          Skills
        </m.h1>
        <m.p className='text-md text-center font-medium text-[#B4B4B4] max-w-[800px]' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3, duration:1}}>
          I provide a full range of frontend development services focused on
          delivering functional and aesthetically pleasing websites
        </m.p>
      </div>
      {/* header end */}

      {/* tabs */}
      <m.div className='flex flex-wrap items-center justify-center gap-4 mt-10 mb-20' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6, duration:1}}>
        <button
          className={`px-2.5 py-2 rounded-md uppercase text-sm ${
            activeTab === 1
              ? 'bg-[#01B2F6] text-[#121B42] font-bold'
              : 'bg-[#262E4E] text-[#B4B4B4] font-medium'
          }`}
          onClick={handleClickTab1}
        >
          Technical
        </button>
        <button
          className={`px-2.5 py-2 rounded-md uppercase text-sm ${
            activeTab === 2
              ? 'bg-[#01B2F6] text-[#121B42] font-bold'
              : 'bg-[#262E4E] text-[#B4B4B4] font-medium'
          }`}
          onClick={handleClickTab2}
        >
          Language
        </button>
        <button
          className={`px-2.5 py-2 rounded-md uppercase text-sm ${
            activeTab === 3
              ? 'bg-[#01B2F6] text-[#121B42] font-bold'
              : 'bg-[#262E4E] text-[#B4B4B4] font-medium'
          }`}
          onClick={handleClickTab3}
        >
          Soft Skills
        </button>
      </m.div>
      {/* tabs end */}

      {/* skills */}
      <m.div className='grid grid-cols-3 md:flex md:flex-wrap justify-center w-full md:max-w-[800px] h-[600px] lg:h-[250px] gap-4 md:gap-10 mx-auto' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.9, duration:1}}>
        {activeTab === 1
          ? skills.technical.map((skill, index) => (
              <ProgressCircle
                key={index}
                percentage={skill.percentage}
                label={skill.title}
              />
            ))
          : activeTab === 2
          ? skills.language.map((skill, index) => (
              <ProgressCircle
                key={index}
                percentage={skill.percentage}
                label={skill.title}
              />
            ))
          : skills.softSkills.map((skill, index) => (
              <ProgressCircle
                key={index}
                percentage={skill.percentage}
                label={skill.title}
              />
            ))}
      </m.div>
      {/* skills end */}
    </div>
  );
};

export default Skills;
