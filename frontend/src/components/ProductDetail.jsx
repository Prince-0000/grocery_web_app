import React from "react";
import watch from "../assests/watch_1.webp";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductDetail = () => {
  return (
    <div className="mx-5  w-[95%] h-full">
      <div className="relative m-10 py-10">
        <div className="border rounded-xl border-slate-300 w-[20rem] h-[20rem]">
          <img src={watch} alt="watch" />
        </div>
        <div className="absolute top-10 left-[22rem] text-base">
          <p className="text-2xl font-medium">Watch</p>

          <div className="text-xs text-yellow-400 flex flex-cols pt-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>

          <p className="py-3 text-base">This is the premium smartwatch</p>
          <p className="text-[18px] font-medium">Rs.79999</p>

          <div className="py-6 flex flex-row">
            <div className="text-sm">
                <p>Quantity:</p>
            </div>
            <div className="pl-4">
                <button className="px-2 border border-slate-300">-</button>
                <button className="px-2 border border-slate-300">1</button>
                <button className="px-2 border border-slate-300">+</button>
            </div>
          </div>
        </div>
        <div className="text-[15px] leading-[25px] absolute bottom-[6rem] left-[22rem]">
            <button className="mr-5 px-[25px] py-[2px] border-[1.5px] border-green-500 ">Add to Cart</button>
            <button className="ml-5 px-[35px] py-[3px] bg-green-500 text-white font-medium">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
