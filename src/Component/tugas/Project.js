import React from 'react'
import {
    bannerImg,
    workImgOne,
    workImgTwo,
    workImgThree,
    workImgFour,
    workImgFive,
    workImgSix,
    workImgSeven,
    workImgEight,
    
} from"../../assets" 
import Title from '../Home/Title'
import ProjectCard from './ProjectCard'


const Project = () => {
  return (
    <div>
        <Title title='Recent' subTitle='Project'/>
      <div className='w-full grid grid-cols-2 gap-10'>
        <div className='px-6'>
            <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgThree}
            />
             <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgTwo}
            />
             <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgFive}
            />    
            <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgFour}
            />           
        </div>
        <div className='px-6'>
        <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgOne}
            />
            <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgSix}
            />
            <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgEight}
            />
            <ProjectCard
            title="Blog Website"
            category="Website"
            image={workImgSeven}
            />
        </div>
      </div>
    </div>
  )
}

export default Project
