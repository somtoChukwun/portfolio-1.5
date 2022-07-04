import './About.scss';
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import pageVariants, { overlayVariants } from '../Layout/PageVariants';
import { motion } from 'framer-motion';
import LastPage from '../Home/LastPage/LastPage';


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const aboutArray = "About Me".split("");

    useEffect(() => {
        let timer1 = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
      return () => {
        clearTimeout(timer1);
      };
    }, []);

  return (
      <>
      <motion.div
        className='pages-overlay'
        variants={overlayVariants}
        initial="hidden"
        animate="visible"></motion.div>
    <motion.div className="about-page"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        exit="exit">
        <div className="page-inner pages-wrapper">
            <div className='container'>
        <div className='text-zone'>
            <h2>
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={aboutArray}
                idx={10}
                />
            </h2>
            <p>I'm an inquisitive front-end developer and researcher😃. I enjoy making beautiful things, and I am particularly enthusiastic about beautifying the web. Did you know that many people live on the internet? Hence, the web should be beautiful, engaging, and fun.</p>
            <p>I am continuously seeking new challenges 🕵️‍♀️ and am very unafraid to face them squarely. I must tell you, I am always messing around with technology and haven't been able to find a way to keep from tampering with firmware. Oh, I've got other poisons (or should that be passions😁) as well. What can I say, "one man's passion is one man's poison." My other passions include languages, fine art, and inevitably, fashion.</p>
            <p>You can chat with me, and I'll explain the poison philosophy😄!</p>
        </div>
        <div className='column-two'>
            <div className='cube-wrapper'>
            <div className='stage-cube-cont'>
            
                <div className='cube-spinner'>
                    <div className='face1'>
                        <SiHtml5 className='spinning-icons html-icon' />
                    </div>
                    <div className='face2'>
                        <SiCss3 className='spinning-icons css-icon' />
                    </div>
                    <div className='face3'>
                        <SiTailwindcss className='spinning-icons tailwind-icon' />
                    </div>
                    <div className='face4'>
                        <SiJavascript className='spinning-icons js-icon' />
                    </div>
                    <div className='face5'>
                        <SiPhp className='spinning-icons php-icon' />
                    </div>
                    <div className='face6'>
                        <SiReact className='spinning-icons reactjs-icon' />
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    
    </motion.div>
    <LastPage />
    </>
  )
}

export default About