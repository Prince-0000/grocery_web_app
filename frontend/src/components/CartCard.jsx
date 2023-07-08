import React from 'react'
import Speaker from '../assests/speaker1.webp'
import {RiDeleteBin6Line} from 'react-icons/ri';

const CartCard = () => {
  return (
      <div className='p-5 w-[60%] bg-white h-[180px] relative'>
        <div className='relative'>
        <div className='w-[100px] h-[100px]'>
          <img src={Speaker} alt="speaker"/>
        </div>
        <div className='py-4 px-[10px]'>
          <button className='px-2 border border-slate-300'>-</button>
          <button className='px-2 border border-slate-300'>1</button>
          <button className='px-2 border border-slate-300'>+</button>
        </div>
          <p className='text-base font-medium absolute top-0 left-[9rem]'>Speaker</p>
          <p className='text-base absolute bottom-[5rem] left-[9rem]'>Rs.1999</p>
        <div className='absolute top-0 right-5'>
          <button>
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
        </div>
      </div>
  )
}

export default CartCard



{/* <div className="relative">
          <div className="w-[80px] h-[80px] m-5 mt-8 border-[0.5px] border-black rounded-md">
            <img src={Watch} alt="image" />
          </div>
          <div className="absolute top-0 text-sm font-medium left-[120px]">
            Speaker
          </div>
          <div className="absolute top-0 right-10 font-medium text-sm">
            Rs.1999
          </div>
          <div className="absolute bottom-0 right-10 font-bold text-sm">
            <button>Delete</button>
          </div>
        </div> */}