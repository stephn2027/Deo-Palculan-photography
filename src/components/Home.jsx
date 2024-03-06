import React from 'react';
import Contact from './Contact';
import Content from './Content';
import Footer from './Footer';
import ProjectIntro from './ProjectIntro';
import Services from './Services';
import Works from './Works';

export default function Home() {
  return (
    <div>
      <ProjectIntro />
      <Content />
      <Works />
      <Services />
      <Contact />
    </div>
  );
}
