import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledProjectItem = styled.a`
  position: relative;
  margin-bottom: 1rem;
  font-family: 'Italiana', serif;
  cursor: pointer;
  color: #fff;
  will-change: transform;
  text-decoration: none;
  z-index: 3;
  &:hover {
    z-index: 3;
  }
  .project__item-text {
    pointer-events: none;
    display: block;
    line-height: 1;
    position: relative;
    font-size: 2rem;
    font-family: 'Italiana', serif;
    @media screen and (min-width: 53em) {
      font-size: 7.5vw;
    }
  }
  .word {
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
  }
  .clone {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: inline-block;
    overflow: hidden;
    perspective: 1000px;
    perspective-origin: -150% 50%;
  }
`;

export default function MenuItems({
  name,
  bgcolor,
  src,
  innerRef,
  outerRef,
  backgroundRef,
  projectsRef,
  link,
}) {
  const wordRef = useRef();
  const wordRefClone = useRef();

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';

    const getAllProjects = gsap.utils.toArray('.project__item');
    gsap.set(getAllProjects, { opacity: 0, y: 200 });
    gsap.to(getAllProjects, { opacity: 1, y: 0, stagger: 0.2 });

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleMouseEnter = (event) => {
    const { image, color } = event.target.dataset;
    const getAllProjects = gsap.utils.toArray('.project__item');
    const getSiblings = getAllProjects.filter((item) => item !== event.target);
    // create the timeline
    const tlEnter = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'none',
        onStart: () => {
          gsap.set(innerRef.current, {
            backgroundImage: `url(${image})`,
          });
          gsap.to(backgroundRef.current, {
            backgroundColor: color,
            duration: 1,
            ease: 'expo',
          });
        },
      },
    });
    tlEnter
      .to(outerRef.current, {
        duration: 1.3,
        ease: 'expo',
        autoAlpha: 1,
      })
      .to(
        innerRef.current,
        {
          duration: 1.3,
          ease: 'expo',
          startAt: { scale: 1.2 },
          scale: 1,
        },
        0
      )
      .to(getSiblings, { autoAlpha: 0.2 }, 0)
      .to(wordRef.current.children,{
        y:"100%",
        rotationX:-90,
        opacity:0,
        duration:0.5,
        ease:"power2",
        stagger:0.025,
      },0)
      .to(wordRefClone.current.children,{
        startAt:{y:"-100%", rotationX:90, opacity:0},
        y:"0%",
        rotationX:0,
        opacity:1,
        duration:0.5,
        ease:"power2",
        stagger:0.025,
      },0)
  };

  const handleMouseLeave = () => {
    const getAllProjects = gsap.utils.toArray('.project__item');
    const tlLeave = gsap.timeline({
      defaults: {
        duration: 1,
        ease: 'none',
      },
    });
    tlLeave
      .to(outerRef.current, {
        autoAlpha: 0,
      })
      .to(getAllProjects, { autoAlpha: 1 }, 0)
      .to(wordRef.current.children,{
        startAt:{y:"100%", rotationX:-90, opacity:0},
        y:"0%",
        rotationX:0,
        opacity:1,
        duration:0.5,
        ease:"power2",
        stagger:0.025,
      },0)
      .to(wordRefClone.current.children,{
        y:"-100%",
        rotationX:90,
        opacity:0,
        duration:0.5,
        ease:"power2",
        stagger:0.025,
      },0)
  };

  const handleMouseMove = ({ clientX, clientY }) => {
    const bound = projectsRef.current.getBoundingClientRect();
    const xVal = clientX - (bound.left + Math.floor(bound.width / 2));
    const yVal = clientY - (bound.top + Math.floor(bound.height / 2));

    gsap.to(outerRef.current, {
      duration: 1,
      x: xVal,
      y: yVal,
      ease: 'none',
    });
  };

  return (
   
    <StyledProjectItem
      href={link}
      className="project__item max-w-[1920px]"
      data-color={bgcolor}
      data-image={src}
      onTouchStart={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={(event) => handleMouseLeave(event)}
      onTouchEnd={event=>handleMouseLeave(event)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
    >
       
      <span className="project__item-text sm:text-[2rem] md:text-[3rem] lg:text-[4rem]">
        <span className="word" ref={wordRef}>
          {name.split('').map((item, i) => {
            return (
              <span
                key={i}
                className="char"
                style={{ display: 'inline-block', willChange: 'transform' }}
              >
                {item}
              </span>
            );
          })}
        </span>
        <span className="word clone" ref={wordRefClone}>
          {name.split('').map((item, i) => {
            return (
              <span
                key={i}
                className="char"
                style={{ display: 'inline-block', willChange: 'transform' }}
              >
                {item}
              </span>
            );
          })}
        </span>
      </span>
   
    </StyledProjectItem>

   
    
  );
}
