
import React, { useEffect, useRef, useState } from 'react';
import { useElementIsVisible } from './ElementIsVisible';
import './Marquee.scss'
import { AiOutlineLink } from 'react-icons/ai';
import GitHubIcon from '@material-ui/icons/GitHub';
import { MarqueeSplitTools } from './MarqueeContent';
import { recentWorksList } from './MarqueeContent'; 

export function NewMarquee() {

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
  // console.log(prevRatio)
  const moveMarquee = prevRatio + 'px';
  // console.log(moveMarquee);

  const [letterClass, setLetterClass] = useState('mq-tools')
  const toolsArrayA = "Intersection Observer, Fortawesome, Material UI, Framer Motion, Leaflet, Router DOM, Sweet Alert".split(",");
  const toolsArrayB = "Intersection Observer, Fortawesome, Material UI, Framer Motion, Router, DOM".split(",");
  const toolsArrayC = "Material UI, Mapbox, Expo".split(",");
  const toolsArrayD = "Material UI, DOM".split(",");
  const toolsArrayE = "Intersection Observer, Google Fonts".split(",");


  return (
    <div className='marquee-wrapper'>
        <div className='marquee-container'>
           <div className="wrap" ref={intersectRef}>
            
            {recentWorksList.map((work, index) => (
                <span 
                    style={{"--a": `${moveMarquee}`}}
                    className={`marquee _${work.tempid}`}>
                    <h3 
                        key={index} 
                        className={`heading ${work.tempid}`}>
                        {work.heading}
                    </h3>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href={work.firstLink}>
                            <AiOutlineLink className='social-icons'/>
                    </a>
                    <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href={work.secondLink}>
                            <GitHubIcon className='social-icons'/>
                     </a>
                     {work.thirdLink && (
                        <a 
                        target="_blank" 
                        rel='noreferrer' 
                        href={work.thirdLink}>
                            <AiOutlineLink className='social-icons'/>
                        </a>
                     )}
                    <p className='mq-stacks'>{work.stacks}</p>
                    <MarqueeSplitTools 
                        letterClass={letterClass} 
                        strArray={work.tools}
                        idx={1}/>
                </span>
            ))}
            

            </div>
        </div>
    </div>
  )
}
