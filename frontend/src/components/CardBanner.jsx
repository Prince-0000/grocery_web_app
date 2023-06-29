import React from "react";
import Cards from "./Cards";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

const CardBanner = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="bg-white my-[30px] mx-4">
        <div className="pt-2 pl-[20px]">
          <h1 className="py-3 text-2xl font-medium">Speakers</h1>
          <div
            id="slider"
            className="pb-5 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
          >
            <div className=" opacity-50 hover:opacity-100 absolute bottom-[1px] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white">
              <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
            </div>

            <div className="flex grid grid-flow-col auto-cols-max gap-3 items-center">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="opacity-50 hover:opacity-100 absolute bottom-[1px] right-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white">
              <BsFillArrowRightSquareFill onClick={slideRight} size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBanner;
