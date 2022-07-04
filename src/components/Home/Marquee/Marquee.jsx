
import React, { useEffect, useRef, useState } from 'react';
import { useElementIsVisible } from './ElementIsVisible';
import './Marquee.scss'
import { AiOutlineLink } from 'react-icons/ai';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FaCodepen } from 'react-icons/fa';
import { MarqueeSplitTools } from './MarqueeContent';

export default function Marquee() {

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

  const [activeIndex, setActiveIndex] = useState(-1);
  const [showImg, setShowImg] = useState(false)
  const mouseImgRef = useRef(null);
  

  const showMqImg = () => {
    setShowImg(!showImg)
    console.log('inside')
  }

  useEffect(() => {
    
    mouseImgRef.current.addEventListener('mouseenter', showMqImg);
    return () => {
      mouseImgRef.current.removeEventListener('mouseenter', showMqImg);
    }
  }, [])
  


  return (
    <div className='marquee-wrapper'>
        <div className='marquee-container'>
            <div className="wrap" ref={intersectRef}>
            <span style={{"--a": `${moveMarquee}`}}
            className='marquee level'>
              <h3 className='heading' 
              ref={mouseImgRef}
              >Portfolio v 1.5
              <img 
              src='https://i.imgur.com/9s8zR7V_d.webp?maxwidth=760&fidelity=grand' 
              alt='imgwork'
              className={`mq-works-img ${showImg ? 'show': 'hide' }`}
              /></h3>
              
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <AiOutlineLink className='social-icons'/>
                </a>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <GitHubIcon className='social-icons'/>
                </a>
              <p className='mq-stacks'>React SCSS SVG</p>
              <MarqueeSplitTools 
              letterClass={letterClass} 
              strArray={toolsArrayA}
              idx={1}/>
            </span>

            <span style={{"--a": `${moveMarquee}`}}
            className='marquee left'>
              <h3 className='heading'>AI Studio</h3>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <AiOutlineLink />
                </a>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <GitHubIcon className='social-icons'/>
                </a>
              <p className='mq-stacks'>React.js SCSS SVG</p>
              <MarqueeSplitTools 
              letterClass={letterClass} 
              strArray={toolsArrayB}
              idx={2}/>
            </span>

            <span style={{"--a": `${moveMarquee}`}}
            className='marquee level right'>
              <h3 className='heading'>Uber Part Clone</h3>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <AiOutlineLink />
                </a>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <GitHubIcon className='social-icons'/>
                </a>
              <p className='mq-stacks'>Next.js Tailwind CSS SVG</p>
              <MarqueeSplitTools 
              letterClass={letterClass} 
              strArray={toolsArrayC}
              idx={3}/>

            </span>

            <span style={{"--a": `${moveMarquee}`}}
            className='marquee left'>
              <h3 className='heading'>Neumorphic App</h3>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <AiOutlineLink />
                </a>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <GitHubIcon className='social-icons'/>
                </a>
              <p className='mq-stacks'>React.js Styled Components CSS</p>
              <MarqueeSplitTools 
              letterClass={letterClass} 
              strArray={toolsArrayD}
              idx={4}/>
            </span>

            <span style={{"--a": `${moveMarquee}`}}
            className='marquee level'>
              <h3 className='heading'>Intersection Observer Pens</h3>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <AiOutlineLink />
                </a>
              <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <GitHubIcon className='social-icons'/>
                </a>
              <p className='mq-stacks'>React.js React DOM SCSS Codepen</p>
              <MarqueeSplitTools 
              letterClass={letterClass} 
              strArray={toolsArrayE}
              idx={5}/>
            </span>
            </div>
        </div>
    </div>
  )
}
