import ProjectCard from './ProjectCard';
import { projects } from '@/data/data.js';

const Projects = () => {
  return (
    <div className='bg-[#121B42] py-20'>
      <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-center mb-2 text-[#FCFFFF] font-bold uppercase'>
          My Projects
        </h1>
        <p className='text-md text-center font-medium text-[#B4B4B4] max-w-[800px]'>
          Browse through my recent projects to see how I combine design and
          development to create seamless, intuitive web solutions
        </p>
      </div>

      <div className='flex items-center justify-between w-full overflow-x-scroll no-scrollbar scroll-smooth'>
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
      </div>
    </div>
  );
};

export default Projects;
