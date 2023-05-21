import React from 'react'
import SidenavTitle from './SidenavTitle'

const SideNav = () => {
  return (
    <div className='px-7 py-4'>
      <SidenavTitle title="M" subTitle="enu"/>
      <ul>
        <li className='sidenavLi cursor-pointer'>Blog Page</li>
        <li className='sidenavLi cursor-pointer'>Portofolio Page</li>
      <SidenavTitle title="P" subTitle="oject"/>
      </ul>
      <ul>
      <li className='sidenavLi cursor-pointer'>Web Development</li>
      <li className='sidenavLi cursor-pointer'>E-commerce</li>
      <li className='sidenavLi cursor-pointer'>Sosial Media</li>
      <li className='sidenavLi cursor-pointer'>Portofolio Website</li>
      <li className='sidenavLi cursor-pointer'>Backend Setup</li>
      <li className='sidenavLi cursor-pointer'>Instagram Clone</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts"/>
      <ul>
      <li className='sidenavLi cursor-pointer'>UI & UX Designer</li>
      <li className='sidenavLi cursor-pointer'>Creative Designer</li>
      <li className='sidenavLi cursor-pointer'>Designer Website</li>     
      </ul>
      <SidenavTitle title="k" subTitle="ontak Saya"/>
      <ul>
      <li className='sidenavLi cursor-pointer'>No HP: +6285879385742</li>
      <li className='sidenavLi cursor-pointer'>andreaswinarno1212@gmail.com</li>
      </ul>
    </div>
  )
}

export default SideNav
