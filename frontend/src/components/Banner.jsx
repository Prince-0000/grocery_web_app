import React, {useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs';
import {RxDotFilled} from 'react-icons/rx';
import Banner1 from '../assests/banner1.png';
import Banner2 from '../assests/banner2.png';

const Banner = () => {
  const slides = [
    {
      url:Banner1
    },
    {
      url:Banner2
    },
    {
      url:'https://images.unsplash.com/photo-1684870500871-2b0d6cc5afa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1077&q=80'
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex===0;
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex===slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex);
  }
  
  return (
    <div className='max-w-[1400px] md:h-[300px] sm:h-[200px] h-[150px] w-[100%] m-auto mt-4 px-4 relative group '>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>

      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={20}/>
      </div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={20}/>
      </div>
      <div className='flex justify-center top-4 py-1 text-gray-300 '>
        {slides.map((slide, index)=>(
          <div key={index} className='text-xl'>
            <RxDotFilled  />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner
