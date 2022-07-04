import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FaCodepen } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';
import { Divider } from '@material-ui/core';
import NewLogo from '../Home/Logo/NewLogo';




const Sidebar = () => (
     <div className='nav-wrapper'>
    <div className='nav-bar'>
        <Link className='logo' to ='/'>
            <NewLogo />
        </Link>
        <nav>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className='home-link nav-link'
            to="/">
               <HomeIcon className='nav-icons'/>
               <span className='nav-tooltip'>Home</span>
               
            </NavLink>
            <NavLink 
            exact="true" 
            activeclassname="active" 
            className='about-link nav-link' 
            to="/about">
               <EmojiEmotionsIcon className='nav-icons'/>
               <span className='nav-tooltip'>About</span>
               
            </NavLink>

            <NavLink 
            exact="true" 
            activeclassname="active" 
            className='contact nav-link' 
            to="/contact">
               <TelegramIcon className='nav-icons'/>
               <span className='nav-tooltip'>Contact</span>
               
            </NavLink>
        </nav>
        
    </div>
    <div className='social-icons-bar'>
    <ul>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://www.linkedin.com/in/whitney-o-837903198/'>
                    <LinkedInIcon className='social-icons'/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://github.com/somtoChukwun'>
                    <GitHubIcon className='social-icons'/>
                </a>
            </li> 
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://codepen.io/somtoChukwun/'>
                    <FaCodepen className='social-icons'/>
                </a>
            </li>
            <li>
                <a 
                target="_blank" 
                rel='noreferrer' 
                href='https://dribbble.com/Sapphirin'>
                    <FaDribbble className='social-icons'/>
                </a>
            </li>
            <li className='social-icon-divider'>
                <Divider />
            </li>
        </ul>
        </div>
        
    </div>
)

export default Sidebar