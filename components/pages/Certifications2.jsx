'use client';
import Image from 'next/image';
import { motion as m } from 'framer-motion';

const Certifications = () => {
  return (
    <div className='bg-[#050922] container py-20'>
      <h1 className='uppercase text-[60px] font-semibold text-center mb-10 text-[#FCFFFF]'>
        Certifications
      </h1>

      <div>
        <div className='flex w-full mb-4'>
          <m.div
            className='w-full'
            initial={{ opacity: 0, x: '300px' }}
            whileInView={{ opacity: 1, x: '0px' }}
            transition={{ duration: 1, stiffness: 20, type: 'spring' }}
          >
            <h1 className='text-2xl font-semibold mb-4 text-end text-[#FCFFFF]'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-end text-[#D9D9D9]'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
          </m.div>

          <div className='flex flex-col gap-2 items-center w-[10%]'>0
            <Image
              src='/icons/check-circle-white.svg'
              alt='check-circle'
              width={30}
              height={30}
            />

            <hr className='h-[180px] border border-[#D9D9D9]' />
          </div>
          <m.div className='w-full' initial={{ opacity: 0, x: '-50px' }}
            whileInView={{ opacity: 1, x: '0px' }}
            transition={{ duration: 1, stiffness: 22, type: 'spring' }}>
            <div className='flex items-center'>
              <Image
                src='/icons/arrow-fill-white.svg'
                alt='check-circle'
                width={10}
                height={10}
                className='rotate-180'
              />
              <div className='bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 rounded-md'>
                2022-2023
              </div>
            </div>
          </m.div>
        </div>

        <div className='flex w-full mb-4'>
          <m.div className='w-full'initial={{ opacity: 0, x: '50px' }}
            whileInView={{ opacity: 1, x: '0px' }}
            transition={{ duration: 1, stiffness: 22, type: 'spring' }}>
            <div className='flex items-center justify-end'>
              <div className='bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 rounded-md'>
                2022-2023
              </div>
              <Image
                src='/icons/arrow-fill-white.svg'
                alt='check-circle'
                width={10}
                height={10}
              />
            </div>
          </m.div>
          <div className='flex flex-col gap-2 items-center w-[10%]'>
            <Image
              src='/icons/check-circle-white.svg'
              alt='check circle white'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-[#D9D9D9]' />
          </div>
          <m.div className='w-full' initial={{ opacity: 0, x: '-300px' }}
            whileInView={{ opacity: 1, x: '0px' }}
            transition={{ duration: 1, stiffness: 20, type: 'spring' }}>
            <h1 className='text-2xl font-semibold mb-4 text-start text-[#FCFFFF]'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-start text-[#D9D9D9]'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
          </m.div>
        </div>
        <div className='flex w-full mb-4'>
          <m.div className='w-full' initial={{ opacity: 0, x: '300px' }}
            whileInView={{ opacity: 1, x: '0px' }}
            transition={{ duration: 1, stiffness: 20, type: 'spring' }}>
            <h1 className='text-2xl font-semibold mb-4 text-end text-[#FCFFFF]'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-end text-[#D9D9D9]'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
          </m.div>
          <div className='flex flex-col gap-2 items-center w-[10%]'>
            <Image
              src='/icons/check-circle-white.svg'
              alt='check-circle'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-[#D9D9D9]' />
          </div>
          <m.div className='w-full' initial={{ opacity: 0, x: '-50px' }}
            whileInView={{ opacity: 1, x: '0px' }}
            transition={{ duration: 1, stiffness: 22, type: 'spring' }}>
            <div className='flex items-center'>
              <Image
                src='/icons/arrow-fill-white.svg'
                alt='arrow fill'
                width={10}
                height={10}
                className='rotate-180'
              />
              <div className='bg-[#D9D9D9] text-[#050922] text-sm font-semibold w-fit px-2 py-1 rounded-md -ml-[1px]'>
                2022-2023
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
