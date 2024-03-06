import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import DpLogo from '../images/DP Logo black.png'
const StyledHeader = styled.header `
  position: absolute;
  width: 100%;
  padding: 0 4vw;
  background-blend-mode: overlay;
  
  .header__container {
    max-width: 1920px;
    margin: 0 auto;
    .header__inner {
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 120px;
        fill: #fff;
      }
    }
  }
  .header__hamburger {
    z-index: 10;
      cursor: pointer;
      display: block;
      span {
        height: 3px;
        width: 30px;
        margin: 6px;
        display: block;
        background: #fff;
      }
    }
`;

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  const topRef = useRef();
  const bottomRef = useRef();
  //store the timeline in a ref
  const hamburgerTl = useRef();

  useEffect(() => {
    hamburgerTl.current = gsap
      .timeline({
        defaults: {
          duration: 0.3,
          ease: 'power2.out',
        },
      })
      .fromTo(topRef.current, { y: 0 }, { y: 4.5 })
      .fromTo(bottomRef.current, { y: 0 }, { y: -4.5 }, 0)
      .fromTo(topRef.current, { rotation: 0 }, { rotation: 135 }, 0)
      .fromTo(bottomRef.current, { rotation: 0 }, { rotation: 45 }, 0);
  }, []);

  useEffect(() => {
    hamburgerTl.current.reversed(!isMenuOpen);
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <div className="header__container">
        <div className="header__inner">
        <a href="/" >
        <img src={DpLogo} alt="logo" className='object-scale-down h-6 sm:h-10 md:h-16 ' />
        </a>
       
          
          <div
            ref={hamburgerTl}
            onClick={()=>setIsMenuOpen(!isMenuOpen)}
            className="header__hamburger"
          >
            <span ref={topRef}></span>
            <span ref={bottomRef}></span>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}
