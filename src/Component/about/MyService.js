import React from 'react'
import { BiCodeAlt } from "react-icons/bi"
import { AiOutlineAntDesign, AiTwotoneAppstore } from "react-icons/ai";
import ServicesCard from './ServicesCard'
import { FaAppStoreIos } from "react-icons/fa";

const styles = {
  icon: {
    fontSize: '30px'
  }
};






const MyService = () => {
  return (
    <div className='grid grid-cols-2 '>       
        <ServicesCard icons={<BiCodeAlt style={styles.icon}/>}
        title="Web development"
        subtitle=" lorem ipsum dolor sit amet consetur adiplixing wilit necesditabus 
        earom vero ad quaret totam zotato"
        />
        <ServicesCard
        icons={<AiOutlineAntDesign style={styles.icon}/>}
        title="Web Design"
        subtitle=" lorem ipsum dolor sit amet consetur adiplixing wilit necesditabus 
        earom vero ad quaret totam zotato"
        />
        <ServicesCard
        icons={<AiTwotoneAppstore style={styles.icon}/>}
        title="Mobile Application"
        subtitle=" lorem ipsum dolor sit amet consetur adiplixing wilit necesditabus 
        earom vero ad quaret totam zotato"
        />
        <ServicesCard
        icons={<FaAppStoreIos style={styles.icon}/>}
        title="SEO"
        subtitle=" lorem ipsum dolor sit amet consetur adiplixing wilit necesditabus 
        earom vero ad quaret totam zotato"
        />
    </div>
  )
}

export default MyService
