import React from "react";
import Cards from "./Cards";
import { urlFor } from "../lib/client";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
// import {
//   BsFillArrowLeftSquareFill,
//   BsFillArrowRightSquareFill,
// } from "react-icons/bs";
// import { useSelector } from "react-redux";

const CardBanner = ({ products }) => {
  const dispatch = useDispatch();
  // const {data:products} = useSelector(state=>state.products)
  console.log("Product", products);
  // console.log("Products in cardbanner",products)
  // const slideLeft = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  // const slideRight = () => {
  //   var slider = document.getElementById("slider");
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };
  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (products.length === 0) return;
  <div className="flex justify-center items-center">
    <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
  </div>;
  return (
    <>
      <div className="bg-white my-[30px] mx-4">
        <div className="pt-2 pl-[20px]">
          <h1 className="py-3 md:text-2xl sm:text-xl text-base font-medium">
            {products[0].type}
          </h1>
          <div
            id="slider"
            className="pb-5 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
          >
            {/* <div className=" opacity-50 hover:opacity-100 absolute bottom-[1px] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white">
              <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
            </div> */}

            <div className="flex grid grid-flow-col auto-cols-max gap-3 items-center">
              {products.map((product) => (
                <div key={product._id}>
                  {/* <Cards image={urlFor(product.image).url()} price={product.price} name={product.name}/> */}
                  <div className="md:w-[200px] md:h-[230px] border-[0.1px] border-slate-300">
                    <div className="px-auto mx-auto my-[1rem] w-[6rem] h-[6rem]">
                      <img
                        className="py-1 w-4/6"
                        src={urlFor(product.image).url()}
                        alt="watch"
                      />
                    </div>
                    <p className="mx-4 text-[14px] leading-[19px] font-normal text-clip overflow-hidden">
                      {product.name}
                    </p>
                    <p className="mx-4 my-1 text-[13px] font-bold ">
                      Rs.{product.price}
                    </p>
                    <div className="flex items-center justify-content w-full relative py-1">
                      <button
                        onClick={() => addToCart(product)}
                        type="button"
                        className="ml-4 border-[0.5px] w-10/12 text-[15px] leading-[28px] rounded-full hover:bg-gray-100 active:bg-gray-200"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
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
