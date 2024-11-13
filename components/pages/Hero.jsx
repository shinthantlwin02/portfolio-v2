import { FlipWords } from '@/components/ui/flip-words';
import Navbar from '@/components/ui/Navbar';
import Image from 'next/image';
import { cn } from "@/lib/utils";


const Hero = () => {
    const words = ["shin thant lwin", "frontend developer"];
    return(
        <div className='bg-[#050922] h-screen'>
      <Navbar />

        <div className="container flex h-full pt-10">
          
        {/* left content */}
        <div className='flex items-center gap-10 w-[60%]'>
          <div className='bg-[#D9D9D9] w-2 h-80 shadow-[0px_0px_20px_4px_rgba(200,221,235,1)] shadow-white rounded-full'></div>
          <div>
            <h1 className='text-white text-4xl font-regular mb-8 uppercase'>
              Transform Your Ideas into Stunning Digital Experiences <br /> With<FlipWords words={words}  className={cn('font-bold text-white')}/>
            </h1>
            <p className='text-[#D9D9D9] text-base mb-10'>
              I specialize in React and Next.js, creating dynamic, highly
              performant web applications tailored to your business needs.
            </p>
            <button className='bg-[#01B2F6] text-[#050922] px-3 py-2 rounded-md'>
              Download CV
            </button>
          </div>
        </div>
        {/* left content end */}

        {/* right content  */}
        <div className="w-[40%] min-h-full relative">
          <Image src="/images/ellipse-hero.png" alt="ellipse" width="400" height="400" className="absolute top-20 right-10"/>
          <Image src="/images/shin.png" alt="shin thant lwin" width="500" height="500" className="absolute bottom-0 right-0" />
        </div>
        {/* right content end */}
        </div>
      </div>
    )
}

export default Hero