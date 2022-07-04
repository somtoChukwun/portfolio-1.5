import './Hero.scss';
import { Link, Outlet } from 'react-router-dom';
import LogoTitle from '../../../assets/images/logo-n-o-cut.png';
import { Button } from '@material-ui/core';
import AnimatedLetters from '../../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import LettersAnimationFunction from '../../AnimatedLetters/LettersAnimationFunc';
import NewLogo from '../Logo/NewLogo';




const HeroSection = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "mesoma, a ".split("")
    const jobArray = "web developer ".split("")
    const greetingArray = "Hi, ".split("")
    const introArray = "I'm ".split("");
  
    useEffect(() => {
        let timer1 = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000);
      return () => {
        clearTimeout(timer1);
      };
    }, []);
    
    

    return(
    
        <div className='hero'>
            <div className='view-tags'>
            <span className='tags top-tags'>&lt;View&gt;</span>
            <div className='container hero-content'>
               <div className='text-zone'>
                   <div className='upper-row'>
                   <h2 className='hero-heading'>
                   <AnimatedLetters 
                   letterClass={letterClass} 
                   strArray={greetingArray}
                   idx={7}
                   />
                    
                   <AnimatedLetters 
                   letterClass={letterClass} 
                   strArray={introArray}
                   idx={8}
                   />
                   <br/>
                   <span className='wrap-logo'>
                   <NewLogo />
                   <AnimatedLetters 
                   letterClass={letterClass} 
                   strArray={nameArray}
                   idx={9}
                   />
                   </span>
                   <AnimatedLetters 
                   letterClass={letterClass} 
                   strArray={jobArray}
                   idx={11}
                   />
                  
                   </h2>
                   <span className='heading-subtitle'>Frontend Developer / Researcher</span>
                  
                   </div>

                   <div className='lower-row'>
                   <Button 
                    className='flat-button'
                    variant='contained' 
                    href="/contact" 
                    >
                       Say Hello
                    </Button>
                    </div>
               </div>


           </div>
            <span className='tags bottom-tags'>
                &lt;/View&gt;
                <br />
                
            </span>
            </div>
  

        </div>
   
    )
    
}

export default HeroSection