'use client';

import React from 'react';
import { Timeline } from '@/components/ui/timeline';

const Experiences = () => {
  const data = [
    {
      title: '2024',
      content: (
        <div>
          <p className='text-[#B4B4B4] text-xs md:text-sm font-normal mb-8'>
            At Circles X, I am a frontend developer specializing in React and
            Next.js. I collaborate with designers and backend developers to
            create scalable, high-performance features that meet top standards
            of functionality and usability.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 w-full'>
            <img
              src='/images/circleX-1.png'
              alt='template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/circleX-2.png'
              alt='template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/circleX-3.png'
              alt='template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/circleX-4.png'
              alt='template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Mid 2023',
      content: (
        <div>
          <p className='text-[#B4B4B4] text-xs md:text-sm font-normal mb-8'>
            After completing the Special Web Design course, I participated in
            workshop projects at MMSIT, where I worked with a team to build
            practical web applications.
          </p>
          <p className='text-[#B4B4B4] text-xs md:text-sm font-normal mb-8'>
            These projects gave me hands-on experience in React, focusing on
            creating clean designs and improving performance.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <img
              src='/images/mmsit-1.png'
              alt='hero template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/mmsit-2.png'
              alt='feature template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/mmsit-3.png'
              alt='bento template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/mmsit-4.png'
              alt='cards template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Early 2023',
      content: (
        <div>
          <p className='text-[#B4B4B4] text-xs md:text-sm font-normal mb-4'>
            I teamed up with a frontend developer and UI/UX designer on a{' '}
            <span className='font-semibold'>Movie Project</span>, where I
            developed the frontend using React.
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <img
              src='/images/premio.png'
              alt='hero template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/premio-2.png'
              alt='feature template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/premio-3.png'
              alt='bento template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
            <img
              src='/images/premio-4.png'
              alt='cards template'
              className='rounded-lg object-cover h-40 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]'
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className='w-full' id="experiences">
      <Timeline data={data} />
    </div>
  );
};

export default Experiences;
