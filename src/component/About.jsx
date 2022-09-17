import React from  'react'
import bedroom from '../images/bedroom.jpg'

const About = () => {
    return(
        <div className='w-full bg-white py-16 px-4 '>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <div className=''>
                <h3 className='font-bold text-2xl py-2'>At 47 Residence we believe that your stay should be home away from home </h3>
                <p>We invite you to experience our philosophy of design in places out of ordinary.
                     Residential by land securities puts the world's finest restaurants, 
                     boutiques and businesses directly on your door step</p>
                     <button className='w-[150px] mt-4'>Explore more</button>
            </div>
            <img className='w-[500px] mx-auto my-8 md:my-4' src={bedroom} alt='/' />

            </div>
        </div>
    )
}

export default About