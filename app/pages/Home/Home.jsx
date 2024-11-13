
import React from 'react';
import Projects from '@/components/pages/Projects'
import Hero from '@/components/pages/Hero';
import Certifications from '@/components/pages/Certifications2';
import Services from '@/components/pages/Services';
import ProjectGallery from '@/components/pages/ProjectGallery';
import Skills from '@/components/pages/Skills';
import Experiences from '@/components/pages/Experiences';

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Projects />
      <Services />
      <Skills />
      <ProjectGallery />
      <Experiences />
      <Certifications />
    </div>
  );
};

export default Home;
