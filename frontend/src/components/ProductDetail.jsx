import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useSelector } from "react-redux";
import { urlFor } from "../lib/client";
import { useDispatch } from "react-redux";
import { incQty, decQty, add } from "../store/cartSlice";
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
    <div className="mx-5  w-[95%] h-full">
      <div className="relative m-10 py-10">
        <div className="flex rounded-xl w-[20rem] h-[20rem] items-center justify-center">
          <img className='m-auto border border-slate-200 bg-transparent max-w-full max-h-full' src={urlFor(product.image).url()} alt="watch" />
        </div>
        <div className="absolute top-10 left-[22rem] text-base">
          <p className="text-2xl font-medium">{product.name}</p>

          <div className="text-xs text-yellow-400 flex flex-cols pt-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>

          <p className="py-3 text-base">{product.details}</p>
          <p className="text-[18px] font-medium">Rs.{product.price}</p>
        </div>
        <div className="text-[15px] leading-[25px] absolute bottom-[6rem] left-[22rem]">
          <button
            onClick={() => addToCart(product)}
            className="mr-5 px-[25px] py-[2px] border-[1.5px] border-green-500 "
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleBuyNow(product)}
            className="ml-5 px-[35px] py-[3px] bg-green-500 text-white font-medium"
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