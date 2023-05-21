import React,{useState} from 'react'
import Title from '../Home/Title'
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const[clientName, setClientName] = useState("");
  const[email, setEmail] = useState("");
  const[message, setMessage] = useState("");

  // error message
  const [errClientName, setErrClientName] = useState(false)
  const [errEmail, setErrEmail] = useState(false)
  const [errMessage, setErrMessage] = useState(false)
// error message end here
 const [succesMsg, setsuccesMsg] = useState("")
// email validation start here
const EmailValidation=(email)=>{
  return String(email)
  .toLowerCase()
  .match(/^\w+( [-]?\w+)*@\w+([-]?\w+)*(\. \w{2,3})+$/)
 
}


const handleName=(e)=>{
  setClientName(e.target.value)
  setErrClientName(false)
}
const handleEmail=(e)=>{
  setEmail(e.target.value)
  setErrEmail(false)
}
const handleMessage=(e)=>{
  setMessage(e.target.value)
  setErrMessage(false)
}

  const handleSend=(e)=>{
    e.preventDefault();
    if(!clientName){
      setErrClientName(true)
    }
    if(!email){
      setErrEmail(true)
    }else{
      if(!EmailValidation(email)){
        setErrEmail(true)
      }
    }


    if(!message){
      setErrMessage(true)
    }
    if(clientName && email && message){
      console.log(clientName.email.message)
    }
  }

  return (
    <div>
      <Title title="Got" subTitle="in Touch"/>
      <div className='p-6 flex justify-between gap-20'>
        <div className='w-1/2'>
        <p className='flex justify-between w-full py-4 border-b-[1px] border-b-zinc-800 align-items-center'>
          <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center 
          justify-center'>
            Addres:</span>
          <span className='text-xs text-[#ccc] ml-11'>Paguyangan,Brebes,Jawa tengah</span>
        </p>

            <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
          <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center 
          justify-center'>
            Phone:</span>+6285879385742</p>
        </div>
        <div className='w-1/2'>
        <p className='flex justify-between w-full py-4 border-b-[1px] border-b-zinc-800'>
          <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center 
          justify-center'>
            Email:</span>
          <span className='text-xs text-[#ccc]'>andreaswinarno1212@gmail.com</span>
        </p>

            <p className='flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
          <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center 
          justify-center'>
            Freelncer:</span>Avalible</p>
        </div>
        
      </div>
          <div className='w-full mt-10'>
          <Title title="Send" subTitle="Message"/>
          <form className='p-6 flex flex-col gap-6'>
            <div className='w-full flex gap-10 justify-between'>
            <input
            omChange={handleName}
            value={clientName} 
            className={`${clientName?
              "border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor"}
               w-full bg-transparent border-2 px-4 py-2 text-base
            text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`
            }

            type="text" placeholder='Full Name'/>
            <input 
            omChange={handleEmail}
            value={email} 
            className='w-full bg-transparent border-2 px-4 py-2 text-base
            text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300'
            type="Email" placeholder='Email Addres'/>
            </div>
            <textarea
            omChange={handleMessage}
            value={message}
            className='w-full bg-transparent border-2 px-4 py-2 text-base
            text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300
            resize-none' placeholder='Your Message'
            cols="30" rows="4"></textarea>
            <button onClick={handleSend} className='text-base w-44 flex items-center ap-1 text-gray-200 
            hover:text-designColor duration-200'>
              Send Masage{" "}<span>{<IoIosSend/>}</span></button>
          </form>
          </div>
    </div>
  )
}

export default Contact
