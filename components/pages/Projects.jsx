import ProjectCard from './ProjectCard';
import { projects } from '@/data/data.js';
import {motion as m} from 'framer-motion';

const Projects = () => {
  return (
    <div className='bg-[#121B42] py-20' id="projects">
      <div className='flex flex-col items-center'>
        <m.h1 className='text-3xl text-center mb-2 text-[#FCFFFF] font-bold uppercase' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0, duration:1}}>
          My Projects
        </m.h1>
        <m.p className='text-md text-center font-medium text-[#B4B4B4] max-w-[800px]' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.2, duration:1}}>
          Browse through my recent projects to see how I combine design and
          development to create seamless, intuitive web solutions
        </m.p>
      </div>

      <m.div className='flex items-center justify-between w-full overflow-x-scroll no-scrollbar scroll-smooth' initial={{y:100}} whileInView={{y:0}} transition={{ duration:1, stiffness:40, type:"spring"}}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            linkTitle={project.linkTitle}
            link={project.link}
            title={project.title}
            img={project.img}
            description={project.description}
          />
        ))}
      </m.div>
    </div>
  );
};

export default Projects;
