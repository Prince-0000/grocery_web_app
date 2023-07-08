import React from "react";
import Cards from "./Cards";
import { urlFor } from "../lib/client";
// import {
//   BsFillArrowLeftSquareFill,
//   BsFillArrowRightSquareFill,
// } from "react-icons/bs";
// import { useSelector } from "react-redux";

const CardBanner = ({products}) => {
  // const {data:products} = useSelector(state=>state.products)
  console.log("Product",products);
  // console.log("Products in cardbanner",products)
  // const slideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  // const slideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };
  const name = products[0]?.type
  return (
    <>
      <div className="bg-white my-[30px] mx-4">
        <div className="pt-2 pl-[20px]">
          <h1 className="py-3 md:text-2xl sm:text-xl text-base font-medium">{name.charAt(0).toUpperCase()+name.slice(1)}</h1>
          <div
            id="slider"
            className="pb-5 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
          >
            {/* <div className=" opacity-50 hover:opacity-100 absolute bottom-[1px] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white">
              <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
            </div> */}

            <div className="flex grid grid-flow-col auto-cols-max gap-3 items-center">
              {products.map((product)=>(
                <div key={product._id}>
                  <Cards image={urlFor(product.image).url()} price={product.price} name={product.name}/>
                </div>
              ))}

            </div>
            {/* <div className="opacity-50 hover:opacity-100 absolute bottom-[1px] right-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white">
              <BsFillArrowRightSquareFill onClick={slideRight} size={30} />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBanner;
