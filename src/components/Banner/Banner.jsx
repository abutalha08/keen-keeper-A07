import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className=' max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8 '>
            <div className='text-center py-12 sm:py-16 md:py-20 space-y-4'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black'>Friends to keep close in your life</h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <div className='flex items-center justify-center pt-2'>
                <button className='bg-[#2f5d50] text-white px-4 sm:px-5 py-2 sm:py-3 rounded-md flex items-center gap-2 text-sm sm:text-base hover:bg-[#264a40] transition cursor-pointer'><FaPlus /> Add a Friend</button>
                </div>

                <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
                    <div className=' p-6 shadow-lg rounded-lg text-center hover:scale-105 transition'>
                        <p className='text-xl font-semibold'>10</p>
                        <p className='text-gray-500 text-base'>Total Friends</p>
                    </div>
                    <div className=' p-6 shadow-lg rounded-lg text-center hover:scale-105 transition'>
                        <p className='text-xl font-semibold'>3</p>
                        <p className='text-gray-500 text-base'>On Track</p>
                    </div>
                    <div className=' p-6 shadow-lg rounded-lg text-center hover:scale-105 transition'>
                        <p className='text-xl font-semibold'>6</p>
                        <p className='text-gray-500 text-base'>Need Attention</p>
                    </div>
                    <div className=' p-6 shadow-lg rounded-lg text-center hover:scale-105 transition'>
                        <p className='text-xl font-semibold'>12</p>
                        <p className='text-gray-500 text-base'>Interactions This Month</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;