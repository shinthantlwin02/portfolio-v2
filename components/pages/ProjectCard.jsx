'use client';
import React from 'react';
import { PinContainer } from '../ui/3d-pin';
import { cn } from '@/lib/utils';

const ProjectCard = ({ linkTitle, link, title, img, description }) => {
  return (
    <div className='h-[30rem] w-full flex items-center justify-center'>
      <PinContainer
        title={linkTitle}
        href={link}
      >
        <div className='flex basis-full flex-col tracking-tight text-slate-100/50 sm:basis-1/2 w-[280px] h-[350px] max-h-[350px]'>
          <img
            src={img}
            className='w-full h-[180px] object-cover'
          />
          <div className='px-4 py-3'>
            <h3 className='font-bold  text-base text-slate-100'>
             {title}
            </h3>
            <p className='text-sm font-normal'>
                {description}
            </p>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default ProjectCard;
