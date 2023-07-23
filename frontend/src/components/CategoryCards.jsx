import React from "react";

const CategoryCards = ({ name, image }) => {
  return (
    <div className="flex items-center flex-col md:w-[100px] sm:w-[90px] w-[80px] h-full md:mx-4 sm:mx-3 mx-2 cursor-pointer">
      <div className="px-auto mx-auto md:my-[1rem] sm:my-[0.8rem] my-[0.5rem] md:w-[3rem] md:h-[3rem] w-[2.2rem] h-[2.2rem] flex items-center justify-center">
        <img
          className="max-w-full max-h-full"
          src={image}
          alt="Speaker"
        />
      </div>
        <p className="md:text-[12px] sm:text-[10px] text-[9px] leading-none font-medium">{name}</p>
    </div>
  );
};

export default CategoryCards;
