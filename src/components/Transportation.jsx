import React from 'react'
import { NavLink } from 'react-router-dom'
import placeholder from '../assets/placeholder.jpeg'
import { FaImage } from 'react-icons/fa'

function Transportation() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-w-[90%] mx-auto bg-white text-black text-xl p-4'>
        <h1 className='font-bold'>Ground Transportation: </h1>
        <p className=''>
          Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day.
          Private buses serve the rest of the island. Taxis are available in Taniti City,
          and rental cars can be rented from a local rental agency near the airport.
          Bikes and helmets are available to rent from several vendors (helmets are required by law).
          Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing:
          this area is easy to explore on foot.
        </p>
      </div>
      <div className='max-w-[90%] mx-auto m-4'>
        <p className='text-xl font-bold p-2'>All Transportations</p>
      </div>
      {/* ------Image Divs------ */}
      <div className='max-w-[90%] mx-auto grid md:grid-cols-2 gap-6'>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
            <p className='text-2xl'>Google Map</p>
          </div>
          <div className='w-full text-center py-2 bg-white'>Airport</div>
        </div>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
            <p className='text-2xl'>Google Map</p>
          </div>
          <div className='w-full text-center py-2 bg-white'>Cruise Ship</div>
        </div>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
            <p className='text-2xl'>Google Map</p>
          </div>
          <div className='w-full text-center py-2 bg-white'>Car Rentals</div>
        </div>

        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
            <p className='text-2xl'>Google Map</p>
          </div>
          <div className='w-full text-center py-2 bg-white'>Bus</div>
        </div>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
            <p className='text-2xl'>Google Map</p>
          </div>
          <div className='w-full text-center py-2 bg-white'>Bikes Rentals</div>
        </div>
        <div className='rounded-xl overflow-clip relative border border-gray-300'>
          <img src={placeholder} alt="" className='w-full max-h-[400px] object-cover' />
          <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
            <p className='text-2xl'>Google Map</p>
          </div>
          <div className='w-full text-center py-2 bg-white'>Taxi</div>
        </div>
      </div>
    </div>
  )
}

export default Transportation
