import React, { useEffect } from 'react'
import HeroBanner from './HeroBanner'
import CategoryBanner from './CategoryBanner'
import CardBanner from './CardBanner'
import Footer from './Footer'
import { urlFor } from '../lib/client'
import { getBhujia, getProduct } from '../store/productSlice';
import { getBiscuits } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

// const {data} = useSelector(state=>state.products);
const { databi } = useSelector(state=>state.products);
const { databh } = useSelector(state=>state.products);
console.log("Databi",databi)
const dispatch = useDispatch();
  
useEffect(()=>{
  dispatch(getBiscuits());
  dispatch(getBhujia());
  // dispatch(getProduct());
},[])

  return (
    <div>
      <CategoryBanner />
      <HeroBanner />
      <CardBanner products = {databi}/>
      <CardBanner products = {databh}/>
      {/* <CardBanner /> */}
      {/* <CardBanner /> */}
      <Footer />

    </div>
  )
}

export default Home
