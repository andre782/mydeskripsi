import React from 'react'
import Title from '../Home/Title'
import Education from './Education'
import Skill from '../about/Skill'

const Resume = () => {
  return (
    <section id='resume'>
      <Title title='My' subTitle='Resume'/>
      <Education/>
      <Title title="My" subTitle="skill"/>
      <Skill/>
    </section>
  )
}

export default Resume
