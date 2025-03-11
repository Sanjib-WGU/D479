import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='w-[90%] bg-white mx-auto h-[40px]'>
        <ul className='flex items-center justify-center h-full'>
        <li className='px-4'> | </li>

          <li><NavLink to='/faq'>FAQ</NavLink></li>
          {/* <li>Emergency Services</li> */}
          <li className='px-4'>|</li>
          <li><NavLink to='/hospital'>Clinics & Hospitals</NavLink></li>
          <li className='px-4'> | </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
