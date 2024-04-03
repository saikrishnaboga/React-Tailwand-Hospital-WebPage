import React from 'react'

import Header from '../Header/Index';
import Appointment from '../Appointment/Index';
import WhyChooseUs from '../WhyChooseUs/Index';
import Carousel from './Carousel/Index';
import Experience from './Experience/Index';
import Stories from './Stories/Index';
import Emergency from './Emergency/Index';
import Footer from './Footer/Index';

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Appointment />
      <WhyChooseUs />
      <Carousel />
      <Experience />
      <Stories />
      <Emergency/>
      <Footer />
    </div>
  )
}

export default Home
