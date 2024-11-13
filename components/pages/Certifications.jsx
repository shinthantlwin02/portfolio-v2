import Image from 'next/image';

const Certifications = () => {
  return (
    <div className='bg-[#EBEDEF] container py-20'>
      <h1 className='uppercase text-[60px] font-semibold text-center mb-5'>
        Certifications
      </h1>

      <div>
        <div className='flex w-full mb-4'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 text-end'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-end'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
          </div>

          <div className='flex flex-col gap-2 items-center w-[10%]'>
            <Image
              src='/icons/check-circle.svg'
              alt='check-circle'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-black' />
          </div>
          <div className='w-full'>
            <div className='flex items-center'>
              <Image
                src='/icons/arrow-fill.svg'
                alt='check-circle'
                width={10}
                height={10}
                className='rotate-180'
              />
              <div className='bg-[#050922] text-white w-fit px-2 py-1 rounded-md'>
                2022-2023
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full mb-4'>
          <div className='w-full'>
            <div className='flex items-center justify-end'>
              <div className='bg-[#050922] text-white w-fit px-2 py-1 rounded-md'>
                2022-2023
              </div>
              <Image
                src='/icons/arrow-fill.svg'
                alt='check-circle'
                width={10}
                height={10}
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 items-center w-[10%]'>
            <Image
              src='/icons/check-circle.svg'
              alt='check-circle'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-black' />
          </div>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 text-start'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-start'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
          </div>
        </div>
        <div className='flex w-full mb-4'>
          <div className='w-full'>
            <h1 className='text-2xl font-semibold mb-4 text-end'>
              MMS One Stop IT Solutions(MMSIT)
            </h1>
            <p className='text-end'>
              MMSIT’s Fronted Development certification program offers a
              comprehensive curriculum covering HTML, CSS, JavaScript, and
              react, ensuring students are well prepared for employment in
              fronted development roles. with a focus on practical skills and
              real-world projects, students acquire the expertise needed to
              succeed in the industry upon completion of the program{' '}
            </p>
          </div>
          <div className='flex flex-col gap-2 items-center w-[10%]'>
            <Image
              src='/icons/check-circle.svg'
              alt='check-circle'
              width={30}
              height={30}
            />
            <hr className='h-[180px] border border-black' />
          </div>
          <div className='w-full'>
            <div className='flex items-center'>
              <Image
                src='/icons/arrow-fill.svg'
                alt='check-circle'
                width={10}
                height={10}
                className='rotate-180'
              />
              <div className='bg-[#050922] text-white w-fit px-2 py-1 rounded-md'>
                2022-2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
