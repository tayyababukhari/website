import React from 'react';
import Common from './Common';
import web from '../src/images/appp.svg'

const Home = () => {
  return(
    <>
     <Common name = 'Grow Your Business with' 
    imgsrc = {web} 
    visit="/service" 
    btname="Get Started" />
    </>
  )
}


export default Home;
