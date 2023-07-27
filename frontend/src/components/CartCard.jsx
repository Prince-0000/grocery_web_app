import React from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri';
import { remove, incQty, decQty } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({image,name,price,id, quantity}) => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  const increment = (id) => {
    dispatch(incQty(id))
  }
  const decrement = (id) => {
    dispatch(decQty(id))
  }

  return (
    <div className='flex'>
    <div className="sm:p-5 p-3 h-fit sm:w-[70%] w-[100%] bg-white sm:h-[180px]  relative">
    <div className="relative">
      <div className="flex sm:w-[100px] sm:h-[100px] h-[50x] w-[50px] items-center justify-center">
        <img className='max-w-full sm:max-h-full max-h-[4rem]' src={image} alt="speaker" />
      </div>
      <div className="sm:py-4 sm:px-[10px] py-3">
        <button onClick={() => decrement(id)} className="sm:px-2 px-1 sm:py-0 sm:leading-[23px] leading-[17px] border border-slate-300">-</button>
        <button className="sm:px-2 px-1 sm:leading-[23px] leading-[17px] sm:text-base text-sm border border-slate-300">{quantity}</button>
        <button onClick={() => increment(id)} className="sm:px-2 px-1 sm:leading-[23px] leading-[17px] border border-slate-300">+</button>
      </div>
      <p className="sm:text-base text-sm font-medium absolute top-0 sm:left-[9rem] left-[4rem]">
        {name}
      </p>
      <p className="sm:text-base text-sm font-medium absolute sm:bottom-[6rem] top-8 sm:first-letter sm:left-[9rem] left-[4rem]">
        Rs.{price}
      </p>
      <div className="absolute sm:top-0 sm:right-5 bottom-0 right-0">
        <button onClick={() => removeFromCart(id)}>
          <RiDeleteBin6Line size={20} />
        </button>
      </div>
    </div>
  </div>
  </div>
  )
}

export default CartCard
