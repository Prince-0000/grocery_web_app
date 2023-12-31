import React, { useEffect } from "react";
import CategoryCards from "./CategoryCards";
import { urlFor } from "../lib/client";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/categorySlice";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const CategoryBanner = () => {

  const { data } = useSelector((state) => state.categories);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  if (data.length === 0) return '';
  return (
    <div id="slider" className="grid grid-flow-col auto-cols-min bg-white md:h-[100px] sm:h-[80px] h-[70px] sm:my-4 sm:mx-4 m-2 overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar">
      {data.map((card) => (
        <div key={card._id}>
      <Link to={`category/${card.type}`}>
        <CategoryCards name={card.name} image={urlFor(card.image).url()}/>
      </Link>
      </div>
))}
    </div>
  );
};

export default CategoryBanner;
