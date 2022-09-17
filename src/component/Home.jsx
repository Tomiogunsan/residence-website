import React from 'react'
import main from '../images/main1.jpg';
import Typed from 'react-typed';

const Home = () => {
    return(
        <div className='w-full h-screen relative'>
            <img className='w-full h-full object-cover' src={main} alt='/' />
            <div className='absolute w-full h-full left-0 top-0 bg-gray-900/40'></div>
            
            <div className='absolute w-full top-0 h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>Superior Residence</h1>
                <p>With exclusive, beautifully-tailored homes in the heart of the city</p>
                
                <div className='flex justify-center items-center'>
                <p className='font-semibold text-xl py-2'>A global centre of </p>
                <Typed className='font-semibold text-xl pl-2' strings={['comfort','culture', 'fashion', 'luxury living']}
                typeSpeed={120} 
                backSpeed={140}
                loop/>
                </div>
                <button>Book Now</button>
            </div>
        </div>
    )
}


export default Home