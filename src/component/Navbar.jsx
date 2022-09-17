import React, {useState} from 'react'
import {  AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';



const Navbar = () => {

    const [nav, setNav] = useState(false)
    

    const handleNav = () => {
        setNav(!nav)
       
    }

    return(
        <div className='flex justify-between items-center py-4 text-white absolute z-10 w-full h-20 px-4'>
            <div className='font-bold text-xl'>
            47 RESIDENCE.
            </div>

            <ul className='hidden md:flex justify-between '>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <div className=" hidden md:flex">
                <AiOutlineSearch size={20} />
                <BsPerson className="ml-2 mr-2" size={20}/>
            </div>


{/* {harmburger} */}
            <div onClick={handleNav} className="md:hidden z-10 mr-2">
                {nav ? < AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />  }
            
            </div>

            {/* {mobile menu} */}
            <div onClick={handleNav}className={nav ? 'absolute  text-white left-0 top-0 w-full bg-gray-100/30 px-4 py-7 flex flex-col ': 'absolute left-[-100%]' }>
            <ul >
               <li className='mt-7'>Home</li>
                <li>About</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>
            </div>
        </div>
    )
}


export default Navbar