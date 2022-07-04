import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react';
import './Cursor.scss';

const Cursor = () => {
    const cursorRef = useRef({});
    const followerRef = useRef({});

    

    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    })

  

    useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const {clientX, clientY} = event;
  
            const mouseX = clientX;
            const mouseY = clientY;
  
            positionRef.current.mouseX = mouseX - followerRef.current.clientWidth / 2;
            positionRef.current.mouseY = mouseY - followerRef.current.clientHeight / 2;
  
            cursorRef.current.style.transform = 
            `translate3d(
                ${mouseX - cursorRef.current.clientWidth / 2}px, 
                ${mouseY - cursorRef.current.clientHeight / 2}px, 0)`;
  
        });

      return () => {};
    }, []);

    useEffect(() => {
      const followMouse = () => {
          positionRef.current.key = requestAnimationFrame(followMouse);
          const {
              mouseX, 
              mouseY,
              destinationX, 
              destinationY, 
              distanceX, 
              distanceY,
        } = positionRef.current;

        if(!destinationX | !destinationY) {
            positionRef.current.destinationX = mouseX;
            positionRef.current.destinationY = mouseY;
        } else{
            positionRef.current.distanceX = (mouseX-destinationX) * 0.1;
            positionRef.current.distanceY = (mouseY-destinationY) * 0.1;

            if(Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1){
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else{
                positionRef.current.destinationX += distanceX;
                positionRef.current.destinationY += distanceY;
            }
        }
        followerRef.current.style.transform = 
        `translate3d(
            ${destinationX}px, 
            ${destinationY}px, 0)`;
      };
    followMouse ();
      
    }, [])
    
   
    
    return(
        <div className='cursor-wrapper'>
            <div className="cursor" ref={cursorRef} />
            <div className="shapes" ref={followerRef}>
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
    )
}

export default Cursor