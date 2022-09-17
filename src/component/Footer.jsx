import React from 'react'
import { FaFacebook, FaInstagram, FaTwitterSquare, FaPhone} from 'react-icons/fa'
import {AiOutlineBook, AiOutlineMail } from 'react-icons/ai'
import {GrLocation } from 'react-icons/gr'
 

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-gray-300'>
            <div className='ml-2'>
            <h1 className='font-bold text-xl'> 47 RESIDENCE.</h1>
            <p className='py-4'>Lorem ipusm dolor sit amet, consector adipicting elit sed do elumidmod tempor
                     incidant yt bibore et dolore magna aliqua ipsum dolor sit ammer sed </p>
            <div className='flex justify-between my-6 md: w-[75%]'>
                <FaFacebook size={30}/>
                <FaTwitterSquare size={30}/>
                <FaInstagram size={30}/> 
            </div>
            </div>

            <div className='  lg:col-span-2 md:flex justify-between'>
                <div>
                    <h6 className='font-medium text-xl ml-2'>Information</h6>
                <ul>
                <li className='text-sm py-2 '>Home</li>
                <li className='text-sm py-2 '>About</li>
                <li className='text-sm py-2 '>Services</li>
                <li className='text-sm py-2 '>Contact</li>
            </ul>
                </div>

                <div className='pt-4 md:pt-0'>
                    <h6 className='font-medium text-xl ml-2'>Contact</h6>
                <ul>
                <li className='text-sm py-2 flex'><GrLocation className='mr-2'/> 32 Thomas Street.Nc Saint Paul Church</li>
                <li className='text-sm py-2 flex'> <FaPhone className='mr-2'/> 1500 000 068</li>
                <li className='text-sm py-2 flex'> <AiOutlineMail className='mr-2'/> residence47@gmail.com</li>
                <li className='text-sm py-2 flex'> <AiOutlineBook className='mr-2'/> Bookings</li>
            </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer