import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const StyledContentSection = styled.section`
  position: relative;
  padding: 3vh 3vw;
  background-color: #e1dfdd;
  z-index: -1;
  .content__wrapper {
    width: 100%;
    max-width: 1417px;
    .content__text--heading {
      font-family: 'Italiana', serif;
      font-size: clamp(1.5rem, 3.15vw, 4.25rem);
      line-height: 1;
      font-weight: 300;
      width: 80%;
      
    }
    .content__text--copy {
      font-size: clamp(1rem, 2.4vw, 1.55rem);
      line-height: 1.3;
      font-weight: 300;
      max-width: 80%;
      margin-bottom: 5vh;
      margin-top: 5vh;
      font-style: italic;
    }
  }
`;
const Content = () => {
  return (
    <StyledContentSection>
      <motion.div className="content__wrapper flex flex-col items-center justify-center px-4 m-auto"
       initial={{ y:200 ,opacity: 0 }}
      whileInView={{ y:0,opacity: 1 }}
      transition={{ ease:'easeInOut',duration: 1 }}
      viewport={{once:true}}
      >
        <p className="content__text--heading text-sm max-w-6xl text-start">
          Welcome to our homepage! Feel free to explore and check out our galleries. You're 
          in luck to have come across the page of a hobbyist photographer who's passionate about capturing
          your milestone moments.
        </p>
        <p className="content__text--copy text-start">
        {/* From the gentle play of shadows to the lively burst of colors, each photo opens a window into its subject's soul. Join us as we explore the world through our camera lens, finding the extraordinary in everyday moments and the beauty in quiet scenes.
          <br />
          <br />
          Feel the passion, notice the details, and experience the world anew through our images. Our photography page is more than just a showcase; it's an invitation to see, feel, and uncover the profound stories each picture tells.
          shutter.
          <br />
          <br /> */}
         
        </p>
      </motion.div>
    </StyledContentSection>
  );
};

export default Content;
