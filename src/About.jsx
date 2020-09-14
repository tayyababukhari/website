import React from 'react';
import Common from './Common';
import about from '../src/images/about.svg'

const About = () => {
  return(
    <>
    
    <Common name = ' Welcome to About page ' 
    imgsrc = {about} 
    visit="/contact" 
    btname="Contact Now" />
    </>
  )
}


export default About;
