import React from 'react'

const CategoryCards = ({name, image}) => {

  return (
    <div className='flex items-center flex-col w-[100px] h-full mx-4 cursor-pointer'>
        <div className='pt-[7px] w-3/5'>
            <img className='' src={image} alt="Speaker"/>
        </div>
        <div className='mt-3'>
          <p className='text-[12px] leading-none font-medium'>{name}</p>
        </div>
       
    </div>
  )
}

export default CategoryCards
