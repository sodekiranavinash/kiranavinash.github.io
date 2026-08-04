import React from 'react';
import { About } from '../sections/about/About';
import { Skills } from '../sections/skills/Skills';
import { Experience } from '../sections/experience/Experience';
import { Projects } from '../sections/projects/Projects';
import { Recommendations } from '../sections/recommendations/Recommendations';
import { Contact } from '../sections/contact/Contact';

export const Home: React.FC = () => {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Recommendations />
      <Contact />
    </>
  );
};
