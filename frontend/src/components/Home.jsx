import React, { useEffect } from 'react'
import HeroBanner from './HeroBanner'
import CategoryBanner from './CategoryBanner'
import CardBanner from './CardBanner'
import Footer from './Footer'
import { getBeverage, getProduct } from '../store/productSlice';
import { getBiscuits } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

// const {data} = useSelector(state=>state.products);
const { databi } = useSelector(state=>state.products);
const { databh } = useSelector(state=>state.products);
console.log("Databi",databi)
const dispatch = useDispatch();
  
useEffect(()=>{
  dispatch(getProduct());
  dispatch(getBiscuits())
  dispatch(getBeverage());
  // dispatch(getProduct());
},[dispatch])

  return (
    <div>
      <CategoryBanner />
      <HeroBanner />
      <CardBanner head={"Biscuits & Namkeen"} products = {databi}/>
      <CardBanner head={"Tea and Coffee"} products = {databh}/>
      {/* <CardBanner /> */}
      {/* <CardBanner /> */}
      <Footer />

    </div>
  )
}

export default Home
