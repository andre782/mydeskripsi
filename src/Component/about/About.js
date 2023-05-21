import React from 'react'
import Title from '../Home/Title'
import AboutMe from './AboutMe'
import MyService from './MyService'
import Funfact from './Funfact'

const About = () => {
  return (
    <section id="About" className='w-full'>
     <Title title="About" subTitle="Me"/>
     <AboutMe/>
     <Title title="My" subTitle="Services"/>
     <MyService/>
    <Title title="Fun" subTitle="Fact"/>
    <Funfact/>
    </section>
  )
}

export default About
