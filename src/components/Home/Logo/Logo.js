import './Logo.scss';
import LogoTitle from '../../../assets/images/logo-no-footer.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap'
import { motion } from 'framer-motion'


const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

   const svgVariants = {
       hidden: {opacity: 0},
       visible: {
           opacity: 1,
        transition: {duration: 1}}
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
    

    return(
        <div className='logo-container' ref={bgRef}>
            {/* <img 
            ref={solidLogoRef}
            src={LogoTitle} 
            alt="S" 
            className='solid-logo'
             /> */}
             <motion.svg 
                version="1.0"
                viewBox="0 0 174 198" 
                xmlns="http://www.w3.org/2000/svg" 
                fill={`none`}
                variants = {svgVariants}
                initial="hidden"
                animate="visible"

               
                >
                <g
                    fill="none" 
                    className='svg-container'
                    ref={outlineLogoRef}
                    >
                <motion.path d="M145.165 197.608c-15.767 0-28.667-12.898-28.667-28.661V29.125c0-15.764 12.9-28.661 28.667-28.661 15.766 0 28.666 12.897 28.666 28.66v139.823c0 15.968-12.695 28.661-28.666 28.661z" fill={`url(#a)`} variants={pathVariantsOne}/>
                <motion.path d="M29.474 197.608c-15.766 0-28.666-12.898-28.666-28.661V29.125C.808 13.36 13.708.464 29.474.464c15.767 0 28.667 12.897 28.667 28.66v139.823c0 15.968-12.695 28.661-28.667 28.661z" fill={`url(#b)`} variants={pathVariantsTwo}/>
                <motion.path d="M145.165 197.608c-8.191 0-16.381-3.48-22.115-10.441L7.36 47.345c-10.033-12.283-8.395-30.299 3.89-40.33 12.286-10.031 30.305-8.393 40.339 3.89l115.69 139.822c10.033 12.284 8.395 30.299-3.891 40.33-5.323 4.504-11.671 6.551-18.223 6.551z" fill={`url(#c)`} variants={pathVariantsThree}/>
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id={`a`} x1="144.923" x2="198.201" y1="175.343" y2="157.211">
                        <stop stopOpacity=".21" stopColor="#fd0000"/>
                        <stop offset="1" stopColor="#fd0000"/></linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id={`b`} x1="57.906" x2="41.749" y1="21.584" y2="211.238">
                        <stop stopOpacity=".21" stopColor="#fd0000"/>
                        <stop offset="1" stopColor="#fd0000"/></linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id={`c`} x1="149.049" x2="88.366" y1="208.305" y2="-18.86">
                        <stop stopOpacity=".21" stopColor="#fd0000"/>
                        <stop offset="1" stopColor="#fd0000"/></linearGradient>
                        </defs>
            </g>
            </motion.svg>
        </div>
    )
}

export default Logo