import React from 'react'
import Speaker from '../assests/head.png';
const CategoryCards = () => {
  return (
    <div className='flex items-center flex-col w-[100px] h-full mx-4 cursor-pointer'>
        <div className='pt-[7px] w-4/5'>
            <img className='' src={Speaker} alt="Speaker"/>
        </div>
        <p className='text-[12px] font-medium'>Headphones</p>
    </div>
  )
}

export default CategoryCards
