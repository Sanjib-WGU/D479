import React from 'react'
import placeholder from '../assets/placeholder.jpeg'

function ThingsToDo() {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            {/* ---Card--- */}
            <div className='max-w-[90%] mx-auto lg:flex lg:justify-between bg-white rounded-xl'>
                {/* ---Image-- */}
                <div className='rounded-xl relative'>
                    <div className='lg:w-[400px] lg:max-h-[400px] rounded-xl overflow-clip'>
                        <img src={placeholder} alt="/" className='w-full h-full' />
                        <div className='absolute inset-0 w-[400px] max-h-[400px] flex items-center justify-center'>
                            <p className=' text-2xl'>Shopping Image</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-2xl p-4'>
                        Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.
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
                        <div className='absolute inset-0 w-[400px] max-h-[400px] flex items-center justify-center'>
                            <p className=' text-2xl'>Restaurant Image</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-2xl p-4'>
                    Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.
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
                        <div className='absolute inset-0 w-[400px] max-h-[400px] flex items-center justify-center'>
                            <p className=' text-2xl'>Entertainment Image</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <p className='text-2xl p-4'>
                    Tourists can visit a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. 
                    </p>
                </div>
            </div>
            {/* ---end Card--- */}
        </div>

    )
}

export default ThingsToDo
