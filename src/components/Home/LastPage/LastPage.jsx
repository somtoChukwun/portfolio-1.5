import React, { useEffect, useRef, useState } from 'react'
import './LastPage.scss';
import '../../../../node_modules/locomotive-scroll/src/locomotive-scroll.scss'
import NewLogo from '../Logo/NewLogo';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { useElementIsVisible } from '../Marquee/ElementIsVisible';
import { motion } from 'framer-motion';


const LastPage = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
    const creditArray = "mesoma W. Olumba".split("")

    useEffect(() => {
      let timer1 = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const buildThresholdList = () => {
    const thresholds = [];
    const numSteps = 20.5;
    
    for (var i=1.0; i<=numSteps; i++){
      const ratio = i/numSteps;
      thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;

  }
  const [intersectRef, isVisible, prevRatio, footerRatio, moveFooterDim] = useElementIsVisible({
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
    
  })

  const initFooterUp =  footerRatio - 20 + 'px';
  const moveFooterDown = (footerRatio - moveFooterDim) * 0.9 + 'px';

  // console.log(moveFooterDown);
  // console.log(initFooterUp);




    return(
        <>
          <div className="footer" ref={intersectRef}
          >
          
            <div className='footer-overlay'>
            <motion.div className='footer-wrapper' 
            // variants={footerVariants}
            // initial="hidden"
            // animate="visible"
            style={{transform: `translateY(-${moveFooterDown})`}}
            >
            <div className="logo-wrapper">
              <h4 className='credit-intro'>
                made by 
              </h4>
              <h4>
              <NewLogo />
              <AnimatedLetters 
                  letterClass={letterClass}
                  strArray={creditArray}
                  idx={10}
                    />
                </h4>
            
            </div>
            </motion.div>
          </div>
          
             
          </div>
        </>
    )


}

export default LastPage