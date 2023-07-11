import React, { useState, useEffect } from "react";
import CategoryCards from "./CategoryCards";
import { client, urlFor } from "../lib/client";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/categorySlice";
import { Link } from "react-router-dom";

const CategoryBanner = () => {
  // const [state, setState] = useState([]);

  const { data } = useSelector((state) => state.categories);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const query = '*[_type == "category"]';
  //       const response = await client.fetch(query);

  //       setState(response);
  //     } catch (error) {
  //       console.error("Error fetching banner data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  if (data.length === 0) return <div>loading...</div>;
  return (
    <div className="grid grid-flow-col auto-cols-min bg-white h-[100px] my-4 mx-4">
      {/* <CategoryCards name={data[0].name} image={urlFor(data[0].image).url()}/> */}

      {data.map((card) => (
        <div key={card._id}>
          <Link to={`category/${card.type}`}>
            {/* <CategoryCards name={card.name} image={urlFor(card.image).url()}/> */}
            <div className="flex items-center flex-col w-[100px] h-full mx-4 cursor-pointer">
              <div className="pt-[7px] w-3/5">
                <img className="" src={urlFor(card.image).url()} alt="Speaker" />
              </div>
              <div className="mt-3">
                <p className="text-[12px] leading-none font-medium">{card.name}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryBanner;
