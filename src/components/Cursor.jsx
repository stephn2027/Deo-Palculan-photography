import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import gsap from 'gsap';
import styled from 'styled-components';

const StyledCursor = styled.div`
    cursor: pointer;
    height: 2rem;
    width: 2rem;
    position: fixed;
    z-index: 99;
    top:0;
    left:0;
    will-change:transform;
    transform: translate(-50%, -50%);
    background: #9d9d9c;
    border-radius:100%;
    pointer-events: none;
    opacity: .6;
`;


const Cursor = forwardRef((props,ref)=>{
    const el = useRef();
    useImperativeHandle(
        ref,
        ()=>{
        //return from API
        return {
            moveTo(x,y){
                gsap.to(el.current,{x,y});
            },
        };
    },[]);
    return <StyledCursor ref={el}/>
});

export default Cursor;