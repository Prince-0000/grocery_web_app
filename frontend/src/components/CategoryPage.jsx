import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { urlFor } from "../lib/client";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { FaSpinner } from "react-icons/fa";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { productType } = useParams();
  const { data } = useSelector((state) => state.products);

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortingOrder, setSortingOrder] = useState("");
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const findProducts = () => {
      const matchingProducts = data.filter((item) => item.type === productType);
      setProducts(matchingProducts);
      setIsLoading(false);
    };

    findProducts();
  }, [data, productType]);

  useEffect(() => {
    if (sortingOrder === "lowToHigh") {
      sortProducts("asc");
    } else if (sortingOrder === "highToLow") {
      sortProducts("desc");
    }
  }, [sortingOrder]);

  const sortProducts = (order) => {
    const sorted = [...products];
    sorted.sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else if (order === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

    setSortedProducts(sorted);
  };

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (isLoading || data.length === 0) {
    return <div className="flex items-center justify-center h-screen">
    <FaSpinner className="animate-spin text-4xl text-gray-500" />
  </div>
  }

  const productList = sortingOrder ? sortedProducts : products;

  return (
    <div className="w-[97%] bg-white h-auto mx-auto my-3">
      <h1 className="mx-4 pt-3 font-medium sm:text-xl text-base">
        All products of category
      </h1>
      <div className="flex my-3 sm:text-base text-sm">
        <button
          onClick={() => setSortingOrder("lowToHigh")}
          className={`md:ml-7 sm:ml-6 ml-[1.3rem] border border-slate-300 px-4 rounded ${
            sortingOrder === "lowToHigh" ? "bg-gray-200" : ""
          }`}
        >
          Low to High
        </button>
        <button
          onClick={() => setSortingOrder("highToLow")}
          className={`md:ml-7 sm:ml-6 ml-5 border border-slate-300 px-4 rounded ${
            sortingOrder === "highToLow" ? "bg-gray-200" : ""
          }`}
        >
          High to Low
        </button>
      </div>
      <div className="md:mx-7 sm:mx-5 mx-3 ml-7 md:py-5 sm:py-4 py-2 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 auto-cols-max md:gap-[3rem] sm:gap-[2rem] gap-[1rem]">
        {productList.map((product) => (
          <div
            key={product._id}
            className="md:w-[11rem] sm:w-[10rem] w-[9rem] bg-slate-20 border border-slate-200 md:h-[14rem] sm:h-[13rem] h-[11rem]"
          >
            <Link to={`/product/${product._id}`}>
              <div className="px-auto mx-auto my-[1rem] w-[6rem] md:h-[6rem] sm:max-w-[6rem] sm:w-[5rem] sm:h-[5rem] w-[3.5rem] h-[3.5rem] max-h-[6rem] flex items-center justify-center">
                <img
                  className="max-w-full max-h-full"
                  src={urlFor(product.image).url()}
                  alt="speaker"
                />
              </div>
              <p className="truncate sm:text-sm text-xs md:mx-2 mx-1 mt-1">{product.name}</p>
              <p className="sm:text-sm text-xs my-1 sm:mx-2 mx-1 font-bold">Rs.{product.price}</p>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 mb-2 ml-3 border-[0.5px] w-10/12 md:text-[15px] sm:text-[14px] text-[13px] md:leading-[22px] sm:leading-[21px] leading-[20px] rounded-full hover:bg-gray-100 active:bg-gray-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
