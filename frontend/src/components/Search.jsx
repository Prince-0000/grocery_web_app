import React from 'react'
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from '../store/cartSlice';
import { urlFor } from '../lib/client';
import { Link } from 'react-router-dom';

const Search = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const data = location.state.products;
    console.log("Search",data);

    const addToCart = (product) => {
        dispatch(add(product));
    };
  return (
    <div className="w-[97%] bg-white h-auto mx-auto my-3">
      <h1 className="mx-4 pt-3 font-medium text-xl">
        Results<span className='mx-2'>({data.length})</span>
      </h1>
      <div className="flex my-3">
      </div>
      <div className="mx-7 py-5 grid grid-cols-5 auto-cols-max gap-[3rem]">
        {data.map((product) => (
          <div
            key={product._id}
            className="w-[11rem] bg-slate-20 border border-slate-200 h-[13.5rem]"
          >
            <Link to={`/product/${product._id}`}>
              <div className="px-auto mx-auto my-[1rem] w-[6rem] h-[6rem] max-w-[6rem] max-h-[6rem] flex items-center justify-center">
                <img
                  className="max-w-full max-h-full"
                  src={urlFor(product.image).url()}
                  alt="speaker"
                />
              </div>
              <p className="text-sm mx-2 mt-1">{product.name}</p>
              <p className="text-sm my-1 mx-2 font-bold">Rs.{product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 mb-2 ml-3 border-[0.5px] w-10/12 text-[15px] leading-[22px] rounded-full hover:bg-gray-100 active:bg-gray-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Search
