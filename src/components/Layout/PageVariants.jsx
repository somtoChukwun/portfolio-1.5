import React from 'react'


const footerVariants ={
    hidden: {
        opacity: 0,
    },
    visible: {
    opacity: [0, 0.2, 1],
    transition: {
        delay: 0.01,
        duration: 0.5,
        ease: [1, 0, 0.1, 1] 
    },
    },
   
}

export const layoutVariants ={
    hidden: {
        opacity:0,
    },
    visible: {
    opacity: 1,
    transition: {
        delay: 0.01,
        duration: 0.5,
        ease: [1, 0, 0.1, 1] 
    },
    },
    exit: {
        y: '-100vh',
    }
}


export const overlayVariants ={
    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        opacity: [1, 1, 0.9, 0],
        y: '-100vh',
        transition: {
            delay: 0.01,
            duration: 0.8,
            ease: [1, 0, 0.1, 1] 
        }
    },
    
}

const pageVariants = {
    hidden: {
        y: '100vh',
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: '0',
        transition: {
            delay: 0.1,
            duration: 1,
            ease: [1, 0, 0, 1] 
        }
    },
    exit: {
        y: '-1000',
        opacity: 0.5,
        transition: {
            delay: 0,
            duration: 0.8,
            ease: 'easeInOut'
        }, 
    }
}


export default pageVariants