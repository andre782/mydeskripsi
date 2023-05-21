import React from 'react'
import bannerImg from "../../../src/assets/work/bannerImg.png"
import { FaGithub, FaLinkedin, } from 'react-icons/fa';
import { BsFacebook, BsYoutube, BsInstagram, BsTwitter, BsCloudLightningFill } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import { useTypewriter, Cursor }  from 'react-simple-typewriter';
import { IoMdContact } from "react-icons/io";
import CV from "../../assets/blog/setyorini.jpg"



const Left = () => {
    const [text]= useTypewriter({
        words:["Web Developer", "Frontend Developer", "Ui Designer"],
        loop:true,
        typeSpeed:30,
        deleteSpeed:20,
        delaySpeed:2000
    });
    

  return (
        <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10'>
            <div className='w-full h-3/5'>
                <img className='w-full h-full object-cover rounded-2xl'
                src={bannerImg} 
                alt="bannerImage"
                Loading='priority'
                />
            </div>
            <div className='w-full h-2/5'>
            {/* contain the intro */}
                <div className='flex flex-col items-center gap-2 py-10'>
                    <h1 className='text-textColor text-4x1 font-semiBold'>Andre setyo</h1>
                    <p className='text-base text-designColor tracking-wide'>{text} <Cursor cursorBlinking="false" cursorStyle="|"/>
                    </p>
                    <div className='flex justify-center gap-2 mt-2'>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><FaGithub/></span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><FaLinkedin/></span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><BsYoutube/></span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><BsFacebook/></span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><BsInstagram/></span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><BsTwitter/></span>
                        <span className='hover:text-designColor duration-300 cursor-pointer text-x1'><AiTwotoneMail/></span>            
                    </div>
                </div>
                {/* buttons */}
                <div className='flex h-14'>
                    <a className='w-1/2 border-t-{1px} borderRight border-t-zinc-800 text-sm tracking-wide gap-2 hover:text-designColor duration-300s' 
                    
                    href={CV} target="-blank" rel="noreferrer">
                    <button className='w-full h-full flex justify-center borderRight items-center gap-2'>Download CV <BsCloudLightningFill/> </button>
                    </a>
                    <button className='w-1/2 h-full flex justify-center items-center gap-2 border-t-{1px}
                     border-t-zinc-800 text-sm tracking-wide 
                    uppercase hover:text-designColor duration-300s'>Contact ME <IoMdContact/> </button>
                </div>
            </div>
        </div>
      
  )
}

export default Left
