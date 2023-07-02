import React from 'react'
import CategoryCards from './CategoryCards'

const CategoryBanner = () => {
  return (
    <div className='grid grid-flow-col auto-cols-min bg-white h-[90px] my-4 mx-4'>
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
      <CategoryCards />
     
    </div>
  )
}

export default CategoryBanner
