import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import Insurance from '../components/Home/Insurance'
import About from '../components/Home/About'
import Service from '../components/Home/Service'
import AskQue from '../components/Home/AskQue'
import FromBlog from '../components/Home/FromBlog'
import Ourexpert from '../components/Home/Ourexpert'
import Testimonial from '../components/Home/Testimonial'
import Client from '../components/Home/Client'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Insurance />
      <About />
      <Service />
      <AskQue />
      <FromBlog />
      <Ourexpert />
      <Testimonial />
      <Client />

    </>
  )
}

export default Home