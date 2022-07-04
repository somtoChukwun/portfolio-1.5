import React from 'react'
import './Logo.scss';
import LogoTitle from '../../../assets/images/logo-no-footer.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { motion } from 'framer-motion'

const NewLogo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

   const svgVariants = {
       hidden: {
           opacity: 0,},
       visible: {
           opacity: 1,
        transition: {duration: 0.5}}
   }

   const pathVariantsOne = {
       hidden: {
           opacity: 0,
           pathLength: 0,
           fill: 'transparent',
           
       },
       visible: {
        opacity: 1,
        pathLength: 1,
        fill: 'url(#a)',
        transition: {
            duration: 2,
            ease: "easeInOut",
        }
    }
   }
   const pathVariantsTwo = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'transparent',
        delay: 0.5,
        
    },
    visible: {
     opacity: 1,
     pathLength: 1,
     fill: 'url(#b)',
     transition: {
         duration: 2,
         ease: "easeInOut",
         delay: 1,
     }
 }
}
const pathVariantsThree = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        fill: 'transparent',
        
    },
    visible: {
     opacity: 1,
     pathLength: 1,
     fill: 'url(#c)',
     transition: {
         duration: 2,
         ease: "easeInOut",
         delay: 1.5,
     }
 }
}
    

  return (
    <div className='logo-container' ref={bgRef}>
    <motion.svg 
        id="eUprGIWLTmV1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 270 270" 
        shapeRendering="geometricPrecision" 
        textRendering="geometricPrecision"
        fill={`none`}
        strokeWidth="0"
        variants = {svgVariants}
        initial="hidden"
        animate="visible">



        <g
            fill="none" 
            className='svg-container'
            ref={outlineLogoRef}
            >
        <motion.path 
        d="M239.71521,199.235859L210,199.235861l-40,98.882298l37.548944,102.645987h32.166266L210,298.118159l29.71521-98.8823" 
        transform="translate(-164.985345-165.000003)"
        fill={`url(#a)`} 
        stroke="rgba(135,63,93,0)" 
        strokeWidth="3"
        variants={pathVariantsOne}
        />

        <motion.path 
        d="M239.71521,199.235859L210,199.235861l-40,98.882298l37.548944,102.645987h32.166266L210,298.118159l29.71521-98.8823" 
        transform="matrix(-1 0 0-1 434.985345 434.235856)"  
        fill={`url(#b)`}
        stroke="rgba(135,63,93,0)" 
        strokeWidth="3"
        variants={pathVariantsTwo}
        />

        <motion.path 
        d="M360.255479,440L330,460L239.71521,160l30.284789-20l90.255478,300" 
        transform="matrix(.990412-.412433 0.377015 0.905358-275.213559-12.88357)" 
        fill={`url(#c)`} 
        stroke="rgba(135,63,93,0)" 
        strokeWidth="3"
        variants={pathVariantsThree}/>

        <defs>
        <linearGradient gradientUnits="objectBoundingBox"  id={`a`} 
            x1="0" y1="0.5" x2="1" y2="0.5" 
            spreadMethod="pad"  
            gradientTransform="translate(0 0)">
            <stop stopOpacity=".21" offset="0%" stopColor="#ff0000"/>
            <stop offset="60%" stopOpacity=".81" stopColor="#f00"/>
            <stop offset="100%" stopOpacity=".21" stopColor="#f00"/>
            </linearGradient>
        <linearGradient spreadMethod="pad" id={`b`} 
            x1="0" y1="0.5" x2="1" y2="0.5"
            gradientUnits="objectBoundingBox"  
            gradientTransform="translate(0 0)" >
            <stop stopOpacity=".21" offset="0%" stopColor="#ff0000"/>
            <stop offset="60%" stopOpacity=".81" stopColor="#f00"/>
            <stop offset="100%" stopOpacity=".21" stopColor="#f00"/></linearGradient>
        <linearGradient gradientUnits="objectBoundingBox"  id={`c`} 
            x1="0" y1="0.5" x2="1" y2="0.5" 
            spreadMethod="pad" 
            gradientTransform="translate(0 0)">
            <stop stopOpacity=".81" offset="0%" stopColor="#f00"/>
            <stop offset="30%" stopOpacity=".81" stopColor="#f00"/>
            <stop offset="60%" stopOpacity=".81" stopColor="#f00"/>
            <stop offset="100%" stopOpacity="1" stopColor="#f00"/>
            </linearGradient>
        </defs>

        </g>
</motion.svg>
    </div>
  )
}

export default NewLogo