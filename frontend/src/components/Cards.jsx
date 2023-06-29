import React from 'react'
import Watch from '../assests/watch_1.webp';
// import Board from '../assests/board.jpg'
// import Speaker from '../assests/speaker1.webp';
const Cards = () => {
  return (
    <div className='w-[200px] h-[250px] border-[0.1px] border-slate-300'>
    <div className=''>
        <img src={Watch} alt="watch"/>
    </div>
      <div className='flex flex-col text-center'>
        <p className='py-2 text-xs font-normal  mt-[-10px]  mb-[-5px]'>Apple Smartwatch</p>
        <p className=' text-xs font-bold'>Rs. 80000</p>
      </div>
    </div>
  )
}

export default Cards
