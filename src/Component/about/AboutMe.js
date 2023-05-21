import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex pb-6'>
      <div className='w-1/2 text-zinc-400 p-6 borderRigth flex flex-col'>
        <div className='py-6'>
        <h2 className='font-semibold mb-1 text-lg'>Halo nama saya Andre</h2>
        <p className='text-base leading-6'>saya web developer dari indonesia, saya punya penglaman membuat web dengan react js dan html,css,jsdan sya gemar akan mempelajari hal baru.
        </p>
        </div>
      </div>
      <div className='w-1/2 p-6'>
        <ul>
            <li  className='aboutRightLi'>
            <span className='aboutRightLiSpan'> AGE:</span>21</li>
        </ul>
        <ul>
            <li  className='aboutRightLi'>
            <span className='aboutRightLiSpan'> RESIDENCE:</span>INDONESIA</li>
        </ul>
        <ul>
            <li  className='aboutRightLi'>
            <span className='aboutRightLiSpan'> FREELANCE:</span>AVALIABLE</li>
        </ul>
        <ul>
            <li  className='aboutRightLi'>
            <span className='aboutRightLiSpan'> ADDRES:</span>INDONESIA,Jateng</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe
