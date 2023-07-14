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
      <h1 className="mx-4 pt-3 font-medium text-xl">
        All products of category
      </h1>
      <div className="flex my-3">
        <button
          onClick={() => setSortingOrder("lowToHigh")}
          className={`ml-7 border border-slate-300 px-4 rounded ${
            sortingOrder === "lowToHigh" ? "bg-gray-200" : ""
          }`}
        >
          Low to High
        </button>
        <button
          onClick={() => setSortingOrder("highToLow")}
          className={`ml-7 border border-slate-300 px-4 rounded ${
            sortingOrder === "highToLow" ? "bg-gray-200" : ""
          }`}
        >
          High to Low
        </button>
      </div>
      <div className="mx-7 py-5 grid grid-cols-5 auto-cols-max gap-[3rem]">
        {productList.map((product) => (
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
  );
};

export default CategoryPage;
