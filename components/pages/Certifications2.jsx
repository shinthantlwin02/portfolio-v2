'use client';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

const Certifications = () => {
  return (
    <div className='bg-[#050922] container mx-auto py-10 md:py-20 px-4 md:px-0'>
      <h1 className='uppercase text-2xl md:text-[60px] font-medium md:font-semibold text-center mb-10 md:mb-20 text-[#FCFFFF]'>
        Certifications
      </h1>

      <div>
        <m.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0, duration:1}} className='flex flex-col-reverse md:flex-row w-full mb-8 md:mb-4'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 text-start md:text-end text-[#FCFFFF]'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-start md:text-end text-[#D9D9D9]'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
            
          </div>

          <div className='flex flex-col gap-2 items-center w-[10%] max-md:hidden'>
            <Image
              src='/icons/check-circle-white.svg'
              alt='check-circle'
              width={30}
              height={30}
            />

            <hr className='h-[180px] border border-[#D9D9D9]' />
          </div>
          <div className='w-full'>
            <div className='flex items-center'>
              <Image
                src='/icons/arrow-fill-white.svg'
                alt='check-circle'
                width={10}
                height={10}
                className='rotate-180 max-md:hidden'
              />
              <div className='bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md'>
                2022-2023
              </div>
            </div>
          </div>
        </m.div>

        <m.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:1}} className='flex flex-col md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4'>
          <div className='w-full'>
            <div className='flex items-center justify-start md:justify-end'>
              <div className='bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md'>
                2022-2023
              </div>
              <Image
                src='/icons/arrow-fill-white.svg'
                alt='check-circle'
                width={10}
                height={10}
                className='max-md:hidden'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 items-center w-[10%] max-md:hidden'>
            <Image
              src='/icons/check-circle-white.svg'
              alt='check circle white'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-[#D9D9D9]' />
          </div>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 text-start text-[#FCFFFF]'>
              Compass
            </h1>
            <p className='text-start text-[#D9D9D9]'>
              Compass's Advanced ReactJS course delves deep into advanced
              concepts like state management, component patterns, and
              performance optimization. Students emerge proficient in leveraging
              React for complex projects, ready to excel in frontend development
              roles.
            </p>
          </div>
        </m.div>

        <m.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4, duration:1}} className='flex flex-col-reverse md:flex-row gap-2 md:gap-0 w-full mb-8 md:mb-4'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 text-start md:text-end text-[#FCFFFF]'>
              Binary Digital Toolbox
            </h1>
            <p className='text-start md:text-end text-[#D9D9D9]'>
              Completed a UI/UX Design Certification at Binary Digital Toolbox,
              where I developed a strong foundation in designing intuitive and
              user-centered interfaces. The program emphasized practical,
              hands-on experience, enabling me to master tools like Figma and
              Adobe XD while refining my skills in wireframing, prototyping, and
              user research. This certification enhanced my ability to create
              seamless user experiences and deliver visually appealing,
              functional designs that meet client needs effectively.
            </p>
          </div>
          <div className='flex flex-col gap-2 items-center w-[10%] max-md:hidden'>
            <Image
              src='/icons/check-circle-white.svg'
              alt='check-circle'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-[#D9D9D9]' />
          </div>
          <div className='w-full'>
            <div className='flex items-center'>
              <Image
                src='/icons/arrow-fill-white.svg'
                alt='arrow fill'
                width={10}
                height={10}
                className='rotate-180 max-md:hidden'
              />
              <div className='bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 mb-2 md:mb-0 rounded-md -ml-[1px]'>
                2022-2023
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default Certifications;
