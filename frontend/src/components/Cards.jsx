import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

const Cards = ({product,image,price,name}) => {
  console.log("In cards",product);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="md:w-[200px] md:h-[230px] border-[0.1px] border-slate-300">
      <div className="px-auto mx-auto my-[1rem] w-[6rem] h-[6rem]">
        <img className='py-1 w-4/6' src={image} alt="watch" />
      </div>
        <p className="mx-4 text-[14px] leading-[19px] font-normal text-clip overflow-hidden">
          {name}
        </p>
        <p className="mx-4 my-1 text-[13px] font-bold ">
          Rs.{price}
        </p>
      <div className="flex items-center justify-content w-full relative py-1">
        <button
          onClick={() => addToCart(add(product))}
          type="button"
          className="ml-4 border-[0.5px] w-10/12 text-[15px] leading-[28px] rounded-full hover:bg-gray-100 active:bg-gray-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
