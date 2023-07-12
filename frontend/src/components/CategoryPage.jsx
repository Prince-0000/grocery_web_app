import React, { useState,useEffect } from "react";
import Card from "./Card";
import Speaker from '../assests/speaker1.webp';
import { useParams} from "react-router-dom";
import { useSelector } from "react-redux";
import { urlFor } from "../lib/client";

const CategoryPage = () => {
  // let product=[];
  const { productType } = useParams();
  const { data } = useSelector((state) => state.products);

  console.log("Type",productType);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const findProducts = () => {
      const matchingProducts = data.filter((item) => item.type === productType);
      setProducts(matchingProducts);
      setIsLoading(false);
    };

    findProducts();
  }, [data, productType]);

  if (isLoading || data.length===0) {
    return <div>Loading...</div>;
  }
  console.log("product",products);

  return (
    <div className="w-[97%] bg-white h-auto mx-auto my-3">
      <h1 className="mx-4 pt-3 font-medium text-xl">
        All products of category
      </h1>
      <div className="mx-7 py-5 grid grid-cols-5 auto-cols-max gap-[3rem]">
        {/* d */}
        {products.map((product)=>(
        <div className="w-[11rem] bg-slate-20 border border-slate-200 h-[13.5rem]">
          <div className="px-auto mx-auto my-[1rem] w-[6rem] h-[6rem] max-w-[6rem] max-h-[6rem] flex items-center justify-center">
            <img className="max-w-full max-h-full" src={urlFor(product.image).url()} alt="speaker" />
          </div>
          <p className="text-sm mx-2 mt-1">{product.name}</p>
          <p className="text-sm my-1 mx-2">Rs.{product.price}</p>
          <button className="mt-2 mb-2 ml-3 border-[0.5px] w-10/12 text-[15px] leading-[22px] rounded-full hover:bg-gray-100 active:bg-gray-200">
            Add to Cart
          </button>
        </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
