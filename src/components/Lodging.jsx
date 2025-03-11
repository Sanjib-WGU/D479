import React from 'react'
import { NavLink } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpeg'
import { FaImage } from 'react-icons/fa'

function Lodging() {
  return (
      <div className='max-w-[1640px] mx-auto p-4'>
          <div className='max-w-[90%] mx-auto bg-white text-black text-xl flex items-center justify-center'>
            <p className='p-4'>
            Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.
            </p>
          </div>
          <div className='max-w-[90%] mx-auto m-4'>
            <p className='text-xl font-bold p-2'>Find Your Stay</p>
          </div>
          {/* ------Image Divs------ */}
          <div className='max-w-[90%] mx-auto'>
            <div className='rounded-xl overflow-clip relative border border-gray-300'>
              <img src={placeholder} alt="" className='w-full max-h-[600px] object-cover' />
              <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
                <p className='text-2xl'>Google Map</p>
                </div>
            </div>
          </div>
    
          <div className='max-w-[90%] mx-auto m-4'>
            <p className='text-xl font-bold p-2'>Featured Hotels</p>
          </div>
             {/* ------Image Divs------ */}
             <div className='max-w-[90%] mx-auto grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl overflow-clip relative border border-gray-300'>
              <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
              <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
              <div className='w-full text-center py-2 bg-white'>Hotel 1</div>
            </div>
            <div className='rounded-xl overflow-clip relative border border-gray-300'>
              <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
              <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
              <div className='w-full text-center py-2 bg-white'>Hotel 2</div>
            </div>
    
            <div className='rounded-xl overflow-clip relative border border-gray-300'>
              <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
              <FaImage size={40} className='absolute inset-0 m-auto text-gray-200' />
              <div className='w-full text-center py-2 bg-white'>Hotel 3</div>
            </div>
          </div>
        </div>
  )
}

export default Lodging
