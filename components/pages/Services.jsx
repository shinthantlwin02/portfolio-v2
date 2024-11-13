import ServiceCard from '@/components/pages/ServiceCard';
const Services = () => {
  return (
    <div className='bg-[#050922] container mx-auto py-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-center mb-2 text-[#FCFFFF] font-bold uppercase'>
          Services
        </h1>
        <p className='text-md text-center font-medium text-[#B4B4B4] max-w-[800px]'>
          I provide a full range of frontend development services focused on
          delivering functional and aesthetically pleasing websites
        </p>
      </div>
      <div className='flex items-center justify-between w-full my-10'>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
