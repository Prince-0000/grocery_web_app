import React from "react";
import Watch from "../assests/watch_1.webp";
// import Board from '../assests/board.jpg'
// import Speaker from '../assests/speaker1.webp';
const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center md:w-[200px] sm:w-[150px] w-[100px] md:h-[230px] sm:h-[190px] h-[140px] border-[0.1px] border-slate-300">
      <div className="mt-[-80px] w-4/6">
        <img src={Watch} alt="watch" />
      </div>
      <div className="flex w-full relative text-center">
        <p className="absolute left-2 top-1 md:py-2 sm:py-1 md:text-xs sm:text-[10px] text-[9px] font-normal  md:mt-[-10px] sm:mt-[-9px] md:mb-[-5px] sm:mb-[-4px] mt-[-6px] mb-[-12px] text-clip overflow-hidden">
          Apple Smartwatch
        </p>
        <p className="absolute left-2 top-3 md:text-[12px] sm:text-[10px] text-[8px] font-bold ">
          Rs. 80000
        </p>
      </div>
      <div className="flex items-center justify-content w-full relative py-1">
        <button
          type="button"
          className="border-[0.5px] absolute left-4 w-10/12 top-[50px] text-[15px] leading-[28px] rounded-full hover:bg-gray-100 active:bg-gray-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Cards;
