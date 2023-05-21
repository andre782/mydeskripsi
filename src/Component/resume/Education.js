import React from 'react'
import { GiGraduateCap } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import ResumeTitle from './ResumeTitle';
import ResumeCard from './ResumeCard';


const Education = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
      <div className='col-span-4'>
      <ResumeTitle title="Experience" icon={<MdWork/>}/>
        <ResumeCard 
        badge="2021-2022"
        title="Web developer"
        subTitle="Learn React js"
        des="lorem ipsum dolor sit amet consectetur adiplicising elit repudindas 
        hatus ipsum wa beate lt"
        />
        <ResumeCard 
         badge="2021-2022"
         title="Front-end Developer"
         subTitle="still Learn React js"
         des="lorem ipsum dolor sit amet consectetur adiplicising elit repudindas 
         hatus ipsum wa beate lt"
        />
        <ResumeCard 
        badge="2021-2022"
        title="SMA N 1 paguyangan"
        subTitle="lulus SMA"
        des="lorem ipsum dolor sit amet consectetur adiplicising elit repudindas 
        hatus ipsum wa beate lt"
        />
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className='col-span-4'>
      <ResumeTitle title="Education" icon={<GiGraduateCap/>}/>
        <ResumeCard 
        badge="2021-2022"
        title="Front-end Developer"
        subTitle="pngin kerja frontend"
        des="lorem ipsum dolor sit amet consectetur adiplicising elit repudindas 
        hatus ipsum wa beate lt"
        />
        <ResumeCard 
         badge="2021-2022"
         title="Junior Developer"
         subTitle=" React js"
         des="lorem ipsum dolor sit amet consectetur adiplicising elit repudindas 
         hatus ipsum wa beate lt"
        />
         <ResumeCard 
         badge="2021-2022"
         title="middle Developer"
         subTitle="bismillah senior"
         des="lorem ipsum dolor sit amet consectetur adiplicising elit repudindas 
         hatus ipsum wa beate lt"
        />
       

      </div>
    </div>
  )
}

export default Education
