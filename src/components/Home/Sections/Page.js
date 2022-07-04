import './Page.scss';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@material-ui/core';
 

const SinglePage = () => {
    const [showTitle, setShowTitle] = useState(true);
    setTimeout(() => {
        setShowTitle(false);
    }, 4000);

    return(
    
        <div className='page'  >
            <div className='page-inner'>
            <AnimatePresence>
            {showTitle && (
                <motion.h4
                exit={{ opacity: [0.5, 0.3, 0.2, 0] }}>Page</motion.h4>
            )}
            </AnimatePresence>
            <div className='container'>
                <p>Got a project, feel free to say hello!</p>
                <div className='row'>
                <Button 
                className='flat-button'
                variant='contained' 
                href="/about" 
                >
                    About me
                </Button>
                <Button 
                className='flat-button'
                variant='contained' 
                href="/contact" 
                >
                    Say hello
                </Button>
                
            </div>
            </div>

        </div>
        </div>
   
    )
    
}

export default SinglePage