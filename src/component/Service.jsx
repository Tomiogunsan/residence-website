import React from 'react'
import {FaSpa } from 'react-icons/fa'
import { BiDish, BiBusSchool, BiWifi } from 'react-icons/bi'
import { AiOutlineInteraction } from 'react-icons/ai'
import { CgGym } from 'react-icons/cg'

const Service = () => {
    return (
        <div className='w-full bg-gray-100/30 py-16 px-4 text-black'>
            <h2 className='text-center font-bold text-3xl pb-6'>What We Offer</h2>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-y-4 gap-x-4'>
                <div className='flex flex-col border-2 rounded-lg shadow-md border-white p-6 hover:scale-110 transition-transform'>
                <FaSpa size={30} className='text-black'/>
                <h3 className='py-2 font-bold text-xl'>SPA</h3>
                <p>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
                </div>
               
                <div className='flex flex-col border-2 border-white rounded-lg shadow-md p-6 hover:scale-110 transition-transform'>
                    <BiDish size={30} className='text-black'/>
                    <h3 className='py-2 font-bold text-xl'>Food</h3>
                <p>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
                </div>
                
                <div className='flex flex-col border-2 border-white rounded-lg shadow-md p-6 hover:scale-110 transition-transform'>
                    <AiOutlineInteraction size={30} className='text-black'/>
                    <h3 className='py-2 font-bold text-xl'>Activities</h3>
                <p>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
                </div>
                
                <div className='flex flex-col border-2 border-white rounded-lg shadow-md p-6 hover:scale-110 transition-transform'>
                    < BiBusSchool size={30} className='text-black'/>
                    <h3 className='py-2 font-bold text-xl'>Transportation</h3>
                <p>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
                </div>
                
                <div  className='flex flex-col border-2 border-white rounded-lg shadow-md p-6 hover:scale-110 transition-transform'>
                <BiWifi size={30} className='text-black'/>
                <h3 className='py-2 font-bold text-xl'>Wifi</h3>
                <p>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
                </div>
                
                <div className='flex flex-col border-2 border-white rounded-lg shadow-md p-6 hover:scale-110 transition-transform'>
                <CgGym size={30} className='text-black'/>
                <h3 className='py-2 font-bold text-xl'>Gym</h3>
                <p>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
                </div>
            </div>

        </div>
    )
}

export default Service