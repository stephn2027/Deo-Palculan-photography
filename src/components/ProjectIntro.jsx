import React,{useEffect} from 'react';
import styled from 'styled-components';
import backgroundOne from '../images/intro1.webp';
import backgroundTwo from '../images/intro3.webp';
import {motion} from 'framer-motion';


const StyledProject = styled.section`
  position: relative;
  display: grid;
  padding-top: 20vh;
  grid-template-columns: 35% 15% 1fr;
  grid-template-areas:
    'project-img-left . project-title'
    'project-img-left project-img-right project-img-right';
  background-color: #e1dfdd;
  z-index: -4;
  padding-bottom:2rem;
  max-width: 1920px;
  margin: 0 auto;
`;
const ProjectIntro = () => {

  useEffect(() => {
    // Preload images
    const images = [backgroundOne, backgroundTwo];
    images.forEach((image) => {
      new Image().src = image;
    });
  }, []);

  return (
    <StyledProject 
      
    >
      <motion.h2 className="project__title pr-16"
      initial={{x:100,opacity:0.7}}
      animate={{x:0, opacity:1}}
      transition={{ease:'linear', delay:0.2}}
      viewport={{once:true}}
      >
      
        <span className="project__title--main text-2xl md:text-7xl sm:text-3xl">Deo Palculan</span>
        <span className="project__title--sub text-xl md:text-4xl sm:text-2xl">Photography</span>
      </motion.h2>
      <motion.div
        className="project__img project__img--left h-[30vh] md:h-[60vh] sm:h-[40vh]"
        style={{ backgroundImage: `url(${backgroundOne})` }}
        initial={{x:-200,opacity:0.7}}
        animate={{x:0,opacity:1}}
        transition={{ease:'easeIn',delay:0.2}}
        viewport={{once:true}}
        
      ></motion.div>
      <motion.div
        className="project__img project__img--right h-[40vh] md:h-[70vh] sm:h-[55vh]"
        style={{ backgroundImage: `url(${backgroundTwo})` }}
        initial={{x:200,opacity:0.7}}
      animate={{x:0, opacity:1}}
      transition={{ease:'linear', delay:0.2}}
      viewport={{once:true}}
      ></motion.div>
      
    </StyledProject>
  );
};

export default ProjectIntro;
