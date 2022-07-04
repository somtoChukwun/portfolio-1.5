import './index.scss';
import HeroSection from './Hero/Hero';
import SinglePage from './Sections/Page';
import LastPage from './LastPage/LastPage';
import Marquee from './Marquee/Marquee';
import { motion } from 'framer-motion';
import pageVariants, { overlayVariants } from '../Layout/PageVariants';
import {NewMarquee} from './Marquee/NewMarquee';


const Home = () => {

    return(
    <>
        <motion.div
            className='pages-overlay'
            variants={overlayVariants}
            initial="hidden"
            animate="visible"></motion.div>
        <motion.div 
            className='homepage' 
            id="home-container"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
                <div className='home-scroll-container'>
                <div className='page-sections'>  
                <div className='scroll-snap'>
                    <HeroSection />
                    <NewMarquee />
                </div>
                <SinglePage />
                <LastPage />
            </div>
            </div>
            </motion.div>
        </>
    )
    
}

export default Home