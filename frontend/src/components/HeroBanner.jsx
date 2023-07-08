import React, { useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import Banner1 from "../assests/banner1.png";
// import Banner2 from "../assests/banner2.png";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urlFor } from "../lib/client";
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from "../store/productSlice";


const HeroBanner = () => {
  const {data}=useSelector(state=>state.products)

  console.log(data);

  // ------- redux ---------//

  const dispatch=useDispatch();


  useEffect(()=>{

      dispatch(getProducts())
  },[])


  // ------//
 
  if(data.length===0) return <div>Loading...</div>

  // const slides = [
  //   {
  //     url:urlFor(data[1].image).url()
  //   },
  //   {
  //     url:urlFor(data[0].image).url()
  //   },
  // ];
  // const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    // const isFirstSlide = currentIndex === 0;
    // const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    // setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    // const isLastSlide = currentIndex === slides.length - 1;
    // const newIndex = isLastSlide ? 0 : currentIndex + 1;
    // setCurrentIndex(newIndex);
  };
  
  return (
    <>
      <div className="max-w-[1400px] md:h-[300px] sm:h-[200px] h-[150px] w-[100%] m-auto mt-4 px-4 relative group ">
        <div
          style={{ backgroundImage: `url(${urlFor(data[1].image).url()})`}}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={20} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={20} />
        </div>
        <div className="flex justify-center top-4 py-1 text-gray-300 ">
          {/* {slides.map((slide, index) => ( */}
            <div  className="text-xl">
              <RxDotFilled />
            </div>
          {/* ))} */}
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
