import React from 'react'
import Speaker from '../assests/speaker1.webp';
const Card = () => {
  return (
    <div className='w-[11rem] bg-slate-200 h-[13.5rem]'>
      <div className='flex items-center justify-center py-2'>
        <img className='max-w-[60%] w-7/12' src={Speaker} alt="speaker"/>
      </div>
      <p className='text-sm mx-2 mt-1'>Speaker</p>
      <p className='text-sm my-1 mx-2'>Rs.1999</p>
      <button className='mt-3 mb-2 ml-3 border-[0.5px] w-10/12 text-[15px] leading-[22px] rounded-full hover:bg-gray-100 active:bg-gray-200'>Add to Cart</button>
    </div>
  )
}

export default Card
