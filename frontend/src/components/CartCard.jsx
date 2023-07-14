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
    <div className="p-5 w-[60%] bg-white h-[180px] relative">
    <div className="relative">
      <div className="flex w-[100px] h-[100px] items-center justify-center">
        <img className='max-w-full max-h-full' src={image} alt="speaker" />
      </div>
      <div className="py-4 px-[10px]">
        <button onClick={() => decrement(id)} className="px-2 border border-slate-300">-</button>
        <button className="px-2 border border-slate-300">{quantity}</button>
        <button onClick={() => increment(id)} className="px-2 border border-slate-300">+</button>
      </div>
      <p className="text-base font-medium absolute top-0 left-[9rem]">
        {name}
      </p>
      <p className="text-base absolute bottom-[5rem] left-[9rem]">
        Rs.{price}
      </p>
      <div className="absolute top-0 right-5">
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