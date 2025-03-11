import React from 'react'
import placeholder from '../assets/placeholder.jpeg'

function Destinations() {
  return (
    <div className='max-w-[1640px] mx-auto p-4 grid'>
                {/* ---Card--- */}
                <div className='max-w-[90%] mx-auto lg:flex lg:justify-between bg-white rounded-xl'>
                    {/* ---Image-- */}
                    <div className='rounded-xl relative'>
                        <div className='lg:w-[400px] lg:max-h-[400px] rounded-xl overflow-clip'>
                            <img src={placeholder} alt="/" className='w-full h-full' />
                            <div className='absolute inset-0 lg:w-[400px] lg:max-h-[400px] flex items-center justify-center'>
                                <p className=' text-2xl'>Beach Image</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-2xl p-4'>
                        Most tourists spend their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay.
                        </p>
                    </div>
                </div>
                {/* ---end Card--- */}
                {/* ---Card--- */}
                <div className='max-w-[90%] mx-auto lg:flex lg:justify-between bg-white my-4 rounded-xl'>
                    {/* ---Image-- */}
                    <div className='rounded-xl relative'>
                        <div className='lg:w-[400px] lg:max-h-[400px] rounded-xl overflow-clip'>
                            <img src={placeholder} alt="/" className='w-full h-full' />
                            <div className='absolute inset-0 lg:w-[400px] lg:max-h-[400px] flex items-center justify-center'>
                                <p className=' text-2xl'>Rainforests Image</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-2xl p-4'>
Immerse yourself in the lush tropical rainforests of Taniti. Discover the diverse flora and fauna that call this vibrant ecosystem home.

Experience the thrill of zip-lining through the rainforest canopy. Enjoy breathtaking views and an adrenaline rush as you soar above the treetops.

Take guided hikes through the rainforest trails. Learn about the unique plants and animals from knowledgeable guides while enjoying the natural beauty of the forest.
                        </p>
                    </div>
                </div>
                {/* ---end Card--- */}
                {/* ---Card--- */}
                <div className='max-w-[90%] mx-auto lg:flex lg:justify-between bg-white rounded-xl'>
                    {/* ---Image-- */}
                    <div className='rounded-xl relative'>
                        <div className='lg:w-[400px] lg:max-h-[400px] rounded-xl overflow-clip'>
                            <img src={placeholder} alt="/" className='w-full h-full' />
                            <div className='absolute inset-0 lg:w-[400px] lg:max-h-[400px] flex items-center justify-center'>
                                <p className=' text-2xl'>Volcano Image</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='text-2xl p-4'>
                        Taniti's active volcano offers a thrilling experience for visitors. Guided tours provide insights into the volcano's geological history and current activity, while hiking trails of varying difficulty lead to stunning views of the diverse terrain. These tours often include educational components about volcanology and the ecological impact of volcanic activity. Safety is a top priority, with strict protocols in place to ensure a secure and enjoyable adventure for all. Exploring the volcano is a must-do for adventure seekers and nature enthusiasts visiting Taniti.
                        </p>
                    </div>
                </div>
                {/* ---end Card--- */}
            </div>
  )
}

export default Destinations
