import React from 'react'
import { NavLink } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpeg'
import { FaImage } from 'react-icons/fa'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='relative'>
        <div className='absolute right-6 z-10'>
          <ul className='flex text-black m-4 items-center'>
            <li className='px-4 py-2'>
              <NavLink to='/' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>
                Home
              </NavLink>
            </li>
            <li className='p-4'>
              <NavLink to='/lodging' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>Lodging</NavLink></li>
            <li className='p-4'>
              <NavLink to='/transportation' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>Transportation</NavLink></li>
              <li className='p-4'>
              <NavLink to='/todo' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>Things To Do</NavLink></li>
              <li className='p-4'>
              <NavLink to='/destinations' className={({isActive})=> isActive?'text-orange-400 text-xl':'hover:text-xl hover:text-white'}>Featured Destinations</NavLink></li>
          </ul>
        </div>
      </div>
      <div className='relative w-full h-[400px]'>
        <img src={placeholder} alt="" className='w-full h-full object-cover' />
        <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
      </div>
    </div>
  )
}

export default Hero