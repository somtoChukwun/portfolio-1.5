import { useState } from "react"
import './LettersAnimationFunc.scss'
import React from "react"
import HeroSection from "../Home/Hero/Hero"

const LettersAnimationFunction = ({ textToSplit }) => {
  

   return(
      <span className='split-span'>
          {textToSplit.split("").map((item, index) => (
             <span className='split-letters' key={index}>{item}</span>
          ))}
        </span>
    );
}


export default LettersAnimationFunction