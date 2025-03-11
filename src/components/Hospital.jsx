import React from 'react'
import placeholder from '../assets/placeholder.jpeg'

function Hospital() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-w-[90%] mx-auto'>
        <div className='max-w-[90%] mx-auto mb-5'>
            <p className='text-xl font-bold'>Clinics and Hospital</p>
          </div>
                    <div className='rounded-xl overflow-clip relative border border-gray-300'>
                      <img src={placeholder} alt="" className='w-full max-h-[600px] object-cover' />
                      <div className='p-2 absolute text-white inset-0 flex items-center justify-center'>
                        <p className='text-2xl'>Google Map</p>
                        </div>
                    </div>
                  </div>
                  
                {/* ---Card--- */}
                <div className='max-w-[90%] mx-auto lg:flex lg:justify-between bg-white rounded-xl mt-5'>
                    <div className='flex items-center justify-center'>
                        <p className='text-2xl p-4'>
                        Taniti is equipped with one hospital and several clinics to cater to the healthcare needs of residents and visitors. The hospital is staffed with many multilingual employees, ensuring effective communication and quality care for patients from diverse linguistic backgrounds.
                        </p>
                    </div>
                </div>
                </div>
  )
}

export default Hospital
