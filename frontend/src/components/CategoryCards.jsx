import React from "react";

const CategoryCards = ({ name, image }) => {
  return (
    <div className="flex items-center flex-col w-[100px] h-full mx-4 cursor-pointer">
      <div className="px-auto mx-auto my-[1rem] w-[3rem] h-[3rem]  flex items-center justify-center">
        <img
          className="max-w-full max-h-full"
          src={image}
          alt="Speaker"
        />
      </div>
        <p className="text-[12px] leading-none font-medium">{name}</p>
    </div>
  );
};

export default CategoryCards;
