import React, { useEffect, useRef, useState } from 'react'

export const useElementIsVisible = (options) => {
    
    const intersectRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [prevRatio, setPrevRatio] = useState(0);
    const [footerRatio, setFooterRatio] = useState(0);
    const [moveFooterDim, setMoveFooterDim] = useState(0);

    const callbackFunction = (entries) => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting);
    // if(entry.isIntersecting){
		// 	console.log(entry);}

    setPrevRatio(Math.round(entry.boundingClientRect.bottom / 5));
    // console.log(entry.boundingClientRect)
    setFooterRatio(Math.round(entry.target.clientHeight));
    // console.log(footerRatio);
    setMoveFooterDim(Math.round(entry.intersectionRect.height));
    // console.log(moveFooterDim);
    }
  

 

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (intersectRef.current) observer.observe(intersectRef.current)
    
    return () => {
      if(intersectRef.current) observer.unobserve(intersectRef.current)
    }  
  }, [intersectRef, options]);
  // console.log(moveFooterDim);
  
  return[intersectRef, isVisible, prevRatio, footerRatio, moveFooterDim]
}
