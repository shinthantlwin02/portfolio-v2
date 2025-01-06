import React from 'react';

const Contact = () => {
  return (
    <div className="w-full h-[400px] md:h-[600px] bg-[#121B42] md:bg-[url('/images/map.png')] bg-cover relative">
      <div className='w-full h-full bg-black/[.2] py-16 md:py-20'>
        <div className='container mx-auto flex flex-col justify-between h-full'>
          <div>

          <div className='flex items-center gap-4 mb-8'>
            <div className='bg-[#01B2F6] w-1 h-8 md:h-16'></div>
            <h1 className='text-2xl md:text-4xl font-semibold uppercase text-white'>
              Contact Me
            </h1>
          </div>
          <h5 className='text-lg md:text-2xl text-[#D9D9D9] mb-2'>Shin Thant Lwin</h5>
          <h4 className='text-lg md:text-2xl font-semibold text-[#D9D9D9]'>
            Frontend Developer
          </h4>
          </div>
          <div>
            <ul className='mb-4 flex items-center gap-2'>
              <li>
                <a href='#'>
                  <img src='/icons/facebook.svg' alt='facebook' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/icons/github.svg' alt='github' />
                </a>
              </li>
              <li>
                <a href='#'>
                  <img src='/icons/linkedin.svg' alt='linkedin' />
                </a>
              </li>
            </ul>
            <p className='text-base font-semibold text-white mb-2'>
              Email - ShinShinShinstl@gmail.com
            </p>
            <p className='text-base font-semibold text-white mb-4'>
              Phone - +853 6613 2728
            </p>
            <p className='text-base font-semibold text-white'>Macau, China</p>
          </div>
        </div>
      </div>
      <img src="/icons/pin.svg" alt="pin icon" className="absolute max-sm:hidden md:top-24 md:right-16 lg:top-[290px] lg:right-[410px]"/>
    </div>
  );
};

export default Contact;
