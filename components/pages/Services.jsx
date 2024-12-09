import ServiceCard from '@/components/pages/ServiceCard';
import {motion as m} from 'framer-motion';

const Services = () => {
  return (
    <div className='bg-[#050922] container mx-auto py-20' id="services">
      <div className='flex flex-col items-center'>
        <m.h1 className='text-3xl text-center mb-2 text-[#FCFFFF] font-bold uppercase' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0, duration:1}}>
          Services
        </m.h1>
        <m.p className='text-md text-center font-medium text-[#B4B4B4] max-w-[800px]' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.3, duration:1}}>
          I provide a full range of frontend development services focused on
          delivering functional and aesthetically pleasing websites
        </m.p>
      </div>
      <m.div className='flex items-center justify-between w-full my-10' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.6, duration:1}}>
        <ServiceCard />
      </m.div>
    </div>
  );
};

export default Services;
