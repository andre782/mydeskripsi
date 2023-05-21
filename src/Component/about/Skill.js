import React from 'react'
import ResumeTitle from '../resume/ResumeTitle'
import { FaArtstation } from "react-icons/fa";


const Skill = () => {
  return (
    <div className='w-full grid grid-cols-9 px-6'>
      <div className='col-span-4'>
        <ResumeTitle title="Design" icon={<FaArtstation/>}/>
        <div className='py-4'>
            <div className='py-3 border-b-[1px] border-zinc-800'>
                <p className='text-base text-textColor -mb-1.5'>Web Development</p>
                <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
                    <span className='w-[50%] h-full absolute top-0 left-0 bg-designColor'></span>
                </span>
            </div>

            <div className='py-3 border-b-[1px] border-zinc-800'>
                <p className='text-base text-textColor -mb-1.5'>Web Design</p>
                <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
                    <span className='w-[20%] h-full absolute top-0 left-0 bg-designColor'></span>
                </span>
            </div>

            <div className='py-3 border-b-[1px] border-zinc-800'>
                <p className='text-base text-textColor -mb-1.5'>Mobile application</p>
                <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
                    <span className='w-[0%] h-full absolute top-0 left-0 bg-designColor'></span>
                </span>
            </div>

            <div className='py-3 border-b-[1px] border-zinc-800'>
                <p className='text-base text-textColor -mb-1.5'>Ui Design</p>
                <span className='w-full bg-zinc-800 h-1 inline-flex relative'>
                    <span className='w-[35%] h-full absolute top-0 left-0 bg-designColor'></span>
                </span>
            </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center items-center'>
        <span className='w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className='col-span-4'></div>
    </div>
  )
}

export default Skill
