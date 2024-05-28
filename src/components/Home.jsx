import React, { Suspense } from 'react';
import Contact from './Contact';
import Content from './Content';
import Loading from './Loading';

import ProjectIntro from './ProjectIntro';
import Services from './Services';
import Works from './Works';

export default function Home() {
  return (
    <div>
    <Suspense fallback={<Loading/>}>
    <ProjectIntro />
    </Suspense>
      
      <Content />
      <Works />
      <Services />
      <Contact />
    </div>
  );
}
