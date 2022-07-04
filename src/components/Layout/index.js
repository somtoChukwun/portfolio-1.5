import './index.scss';
import Sidebar from '../Sidebar/index';
import { Outlet, useLocation } from 'react-router-dom';
import Cursor from '../Cursor/Cursor';
import { motion } from 'framer-motion'
import { layoutVariants } from './PageVariants';



const Layout = () => {

    return(
    <motion.div 
    className='App' 
    variants={layoutVariants} 
    initial="hidden"
    animate="visible"
    exit="exit">
        <Sidebar />
        <div className='layout-bg'>
            <Outlet />
        </div>
        <Cursor />
    </motion.div>
    )
    
}

export default Layout