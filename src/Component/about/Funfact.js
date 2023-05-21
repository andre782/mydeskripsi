import React from 'react'
import FunCard from './FunCard'
import { BsFillTrophyFill } from "react-icons/bs";
import { AiOutlineAntDesign, AiFillYoutube } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";




const Funfact = () => {
  return (
    <div className='px-0 grid grid-cols-4 pb-10'>
      <FunCard icon={<BsFillTrophyFill />} des="1 awards won"/>
      <FunCard icon={<AiOutlineAntDesign/>} des="menyelesaikan sekitar 15 project"/>
      <FunCard icon={<BiCodeAlt/>} des="100 jam coding"/>
      <FunCard icon={<AiFillYoutube/>} des="0 subcribers"/>

    </div>
  )
}

export default Funfact

