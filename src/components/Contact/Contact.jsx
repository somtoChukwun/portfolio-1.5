import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { Button, FormControl, TextField } from '@material-ui/core';
import emailjs from '@emailjs/browser';

import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker, Popup } from 'react-leaflet';
import swal from 'sweetalert';
import pageVariants, { overlayVariants } from '../Layout/PageVariants';
import { motion } from 'framer-motion';
import LastPage from '../Home/LastPage/LastPage';


const Contact = () => {
    const contactArray = "Say Hello!".split("");
    const [letterClass, setLetterClass] = useState('text-animate');
    const position = [30, -40.09];
    // const refForm = useRef;

    useEffect(() => {
        let timer1 = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000);
      return () => {
        clearTimeout(timer1);
      };
    }, []);


    function sendEmail(e){
        e.preventDefault()
        
        emailjs.init('cqfLwFHNWQBHaUaf7');
        emailjs.sendForm(
            'whitney_nmesoma', 
            'template_paeia1e', 
            e.target )
        .then(res => {
            swal({
                title: "Excellent!",
                text: "Your message has been sent!",
                icon: "success",
                button: "Great!",
              });
           console.log(res);
        }).catch(err => {
            alert('Message sending failed!')
            console.log(err)
        });
    }

    

  return (
      <>
      <motion.div
        className='pages-overlay'
        variants={overlayVariants}
        initial="hidden"
        animate="visible"></motion.div>
    <motion.div 
    className='contact-page'
    variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit">
        <div className='page-inner page-wrapper'>
            <div className='container'>
                <div className='text-zone'>
                   <h2>
                   <AnimatedLetters 
                   letterClass={letterClass}
                   strArray={contactArray}
                   idx={10}/>
                   </h2>
                   <p>
                   Hey there! Got a project that you would like me to work on, or just want to say hello? Feel free to drop me a line anytime. I look forward to hearing from you 😄.
                   </p>
                   <div className='contact-form'>
                       <form onSubmit={sendEmail}>
                           <div className='name-and-subject'>
                        <FormControl className='contact-form-control'>
                       <TextField 
                            className='contact-name' 
                            id="standard-basic" 
                            label="Name" 
                            variant="standard"
                            name="contact-name"
                            required />
                        </FormControl>
                        <FormControl className='contact-form-control'>
                            <TextField 
                            className='contact-subject' 
                            id="standard-basic" 
                            label="Subject" 
                            variant="standard"
                            name="contact-subject"
                            required />
                        </FormControl>
                           </div>
                           <FormControl className='contact-form-control'>
                            <TextField 
                            className='email' 
                            id="standard-basic" 
                            label="Email" 
                            variant="standard"
                            name="email"
                            required />
                        </FormControl>
                        
                        <FormControl className='contact-form-control'>
                        <TextField className='contact-message'
                            id="standard-multiline-flexible"
                            label="Message"
                            multiline
                            minRows={6}
                            defaultValue=""
                            variant="standard"
                            name="contact-message"
                            required
                            />
                        </FormControl>
                        <Button 
                            className='contact-button-submit flat-button' 
                            variant='contained'
                            type='submit'>Send</Button>
                       </form>
                   </div>
                </div>
                <div className='column-two'>
                    <div className='map-container-box'>
                    
                    <div className='info-map'>
                        <h4 className='map-card'>Knowledge is borderless! Skill is ageless!</h4>
                        <h4 className='map-card-author'>...Nmesoma</h4>
                        <p>
                            nmesoma.olumba@stu.cu.edu.ng
                        </p>
                    </div>
                    <div className='map-wrap'>
                       <div className='leaflet-container'>
                       <MapContainer center={position} zoom={2} scrollWheelZoom={false}>
                            <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position}>
                            <Popup>
                                No, I don't live in the ocean! <br /> 🤣
                            </Popup>
                            </Marker>
                        </MapContainer>
                       </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    </motion.div>
    <LastPage />
    </>
  )
}

export default Contact