import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { urlFor } from "../lib/client";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { FaSpinner } from "react-icons/fa";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { data } = useSelector((state) => state.products);
  const { productId } = useParams();

  console.log("id", productId);
  console.log("Product data", data);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findProduct = () => {
      const foundProduct = data.find((item) => (item._id === productId));
      if (foundProduct) {
        setProduct(foundProduct);
      }
      setIsLoading(false);
    };

    findProduct();
  }, [data, productId]);

  if (isLoading || data.length === 0) {
    return <div className="flex items-center justify-center h-screen">
    <FaSpinner className="animate-spin text-4xl text-gray-500" />
  </div>
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const handleBuyNow = (product) => {
    dispatch(add(product));
    navigate("/cart");
  };
  console.log("product detail", product);
  return (
    <div className="flex">
    <div className="sm:ml-5 sm:w-full w-full h-full">
      <div className="relative sm:m-10 sm:py-10 m-4 py-8">
        <div className="flex rounded-xl md:w-[20rem] sm:w-[15rem] md:h-[20rem] sm:h-[15rem] w-[10rem] h-[10rem] items-center justify-center">
          <img className='m-auto border border-slate-200 bg-transparent max-w-full max-h-full' src={urlFor(product.image).url()} alt="watch" />
        </div>
        <div className="absolute md:top-10 sm:top-7 top-4 md:left-[22rem] sm:left-[18rem] left-[11rem] sm:text-base text-sm w-ful">
          <p className="md:text-2xl sm:text-xl text-base font-medium">{product.name}</p>

          <div className="sm:text-xs text-[10px] text-yellow-400 flex flex-cols pt-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>

          <p className="sm:py-3 py-2 sm:text-base text-xs">{product.details}</p>
          <p className="sm:text-[18px] text-[13.5px] font-medium">Rs.{product.price}</p>
        </div>
        <div className="flex sm:flex-row flex-col sm:text-[15px] sm:leading-[25px] text-[12px] leading-[18px] absolute md:bottom-[6rem] md:left-[22rem] sm:bottom-[3rem] sm:left-[17.5rem] bottom-[0px] left-[11rem]">
          <button
            onClick={() => addToCart(product)}
            className="sm:mr-5 sm:px-[25px] sm:py-[2px] my-3 px-[18px] py-[1px] border-[1.5px] border-green-500 "
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleBuyNow(product)}
            className="sm:ml-5 sm:px-[35px] sm:my-[11.5px] px-[25.5px] py-[2px] bg-green-500 text-white font-medium"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductDetail;

// const increment = (id) => {
//     dispatch(incQty(id));
//   };
//   const decrement = (id) => {
//     dispatch(decQty(id));
//   };
{/* <div className="py-6 flex flex-row">
            <div className="text-sm">
              <p>Quantity</p>
            </div>
            <div className="pl-4">
              <button
                onClick={() => {
                  increment(productId);
                }}
                className="px-2 border border-slate-300"
              >
                -
              </button>
              <button className="px-2 border border-slate-300">
                {product.quantity}
              </button>
              <button
                onClick={() => {
                  decrement(productId);
                }}
                className="px-2 border border-slate-300"
              >
                +
              </button>
            </div>
          </div> */}