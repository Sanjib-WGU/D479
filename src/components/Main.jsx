import React from 'react'
import { NavLink } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpeg'
import { FaImage } from 'react-icons/fa'


function Main() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-w-[90%] mx-auto bg-white text-black text-xl flex items-center justify-center'>
        <p className='p-4'>
          Taniti Island is a small, tropical paradise in the Pacific, featuring diverse landscapes with sandy and rocky beaches, rainforests, and a mountainous interior with an active volcano. With a population of around 20,000, the island offers a variety of attractions including local cuisine, comfortable lodging, and numerous entertainment options like snorkeling, zip-lining, and visiting the volcano.
        </p>
      </div>
      <div className='max-w-[90%] mx-auto m-4'>
        <p className='text-xl font-bold p-2'>Things To DO</p>
      </div>
      {/* ------Image Divs------ */}
      <div className='max-w-[90%] mx-auto grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
          <div className='w-full text-center py-2 bg-white'>Shopping</div>
        </div>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
          <div className='w-full text-center py-2 bg-white'>Restaurant</div>
        </div>

        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
          <div className='w-full text-center py-2 bg-white'>Entertainment</div>
        </div>
      </div>
      <div className='max-w-[90%] mx-auto'>
      <button className='border rounded-full p-2 my-2 font-bold cursor-pointer bg-[#b9b8b8]'>
        <NavLink to='/todo' className={'hover:text-white hover:text-xl'}>Explore More</NavLink>
        </button>
      </div>
      <div className='max-w-[90%] mx-auto m-4'>
        <p className='text-xl font-bold p-2'>Featured Destination</p>
      </div>
         {/* ------Image Divs------ */}
         <div className='max-w-[90%] mx-auto grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
          <div className='w-full text-center py-2 bg-white'>Beaches</div>
        </div>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
          <div className='w-full text-center py-2 bg-white'>Rainforests</div>
        </div>

        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
          <div className='w-full text-center py-2 bg-white'>Volcano</div>
        </div>
      </div>
      <div className='max-w-[90%] mx-auto'>
      <button className='border rounded-full p-2 my-2 font-bold cursor-pointer bg-[#b9b8b8]'>
      <NavLink to='/destinations' className={'hover:text-white hover:text-xl'}>Explore More</NavLink>
      </button>
      </div>
    </div>
  )
}

export default Main