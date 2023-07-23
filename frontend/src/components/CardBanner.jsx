import React from "react";
import { Link } from "react-router-dom";
// import Cards from "./Cards";
import { urlFor } from "../lib/client";
// import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { FaSpinner } from "react-icons/fa";
// import {
//   BsFillArrowLeftSquareFill,
//   BsFillArrowRightSquareFill,
// } from "react-icons/bs";
// import { useSelector } from "react-redux";

const CardBanner = ({ head, products }) => {
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

  if (products.length === 0) return <div className="flex items-center justify-center h-screen">
  <FaSpinner className="animate-spin text-4xl text-gray-500" />
</div>

  return (
    <>
      <div className="bg-white md:my-[30px] sm:my-[20px] my-[8px] md:mx-4 sm:mx-3 mx-2 h-fit">
        <div className="sm:pt-2 pt-1 md:pl-[20px] sm:pl-[18px] pl-[10px]">
          <h1 className="md:py-3 sm:py-2 py-1 md:text-2xl sm:text-xl text-sm font-medium">
            {head}
          </h1>
          <div
            id="slider"
            className="md:pb-5 sm:pb-4 pb-3 w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
          >
            {/* <div className=" opacity-50 hover:opacity-100 absolute bottom-[1px] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer bg-white">
              <BsFillArrowLeftSquareFill onClick={slideLeft} size={30} />
            </div> */}

            <div className="flex grid grid-flow-col auto-cols-max sm:gap-2 gap-1 items-center">
              {products.map((product) => (
                <div key={product._id}>
                  {product.price > 5 ? (
                    <div>
                      {/* <Cards product={product} image={urlFor(product.image).url()} price={product.price} name={product.name}/> */}
                      <div className="sm:w-[200px] sm:h-[230px] w-[120px] h-[145px] border-[0.1px] border-slate-300">
                        <Link to={`/product/${product._id}`}>
                          <div className="px-auto mx-auto sm:my-[1rem] my-[0.5rem] sm:w-[6rem] sm:h-[6rem] w-[3.2rem] h-[3.2rem] max-w-[6rem] max-h-[6rem] flex items-center justify-center">
                            <img
                              className="max-w-full max-h-full"
                              src={urlFor(product.image).url()}
                              alt="watch"
                            />
                          </div>

                          <p className="md:mx-4 sm:mx-3 mx-2 sm:text-[14px] text-[11px] md:leading-[19px] font-normal text-clip overflow-hidden">
                            {product.name}
                          </p>
                          <p className="md:mx-4 sm:mx-3 mx-2 my-1 sm:text-[13px] text-[10px] font-bold ">
                            Rs.{product.price}
                          </p>
                        </Link>

                        <div className="flex items-center justify-content w-full relative py-1">
                          <button
                            onClick={() => addToCart(product)}
                            type="button"
                            className="md:ml-4 sm:ml-3 ml-2 border-[0.5px] w-10/12 md:text-[15px] sm:text-[13px] text-[11px] md:leading-[28px] sm:leading-[25px] leading-[20px] rounded-full hover:bg-gray-100 active:bg-gray-200"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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
