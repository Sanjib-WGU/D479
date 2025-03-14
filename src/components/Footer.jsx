import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='w-[90%] bg-[#b9b8b8] mx-auto h-[40px]'>
        <ul className='flex items-center justify-center h-full'>
        <li className='px-4'> | </li>

          <li><NavLink to='/faq' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>FAQ</NavLink></li>
          {/* <li>Emergency Services</li> */}
          <li className='px-4'>|</li>
          <li><NavLink to='/hospital' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>Clinics & Hospitals</NavLink></li>
          <li className='px-4'> | </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
