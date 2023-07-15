import React, { useEffect } from 'react'
import HeroBanner from './HeroBanner'
import CategoryBanner from './CategoryBanner'
import CardBanner from './CardBanner'
import Footer from './Footer'
import { getDrink, getProduct, getBeverage, getFood, getDairy, getStaple, getOil } from '../store/productSlice';
import { getBiscuits } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {

// const {data} = useSelector(state=>state.products);
const { databi } = useSelector(state=>state.products);
const { datadr } = useSelector(state=>state.products);
const { databe } = useSelector(state=>state.products);
const { datafo } = useSelector(state=>state.products);
const { datada } = useSelector(state=>state.products);
const { datast } = useSelector(state=>state.products);
const { dataoil } = useSelector(state=>state.products);
console.log("Databi",databi)
const dispatch = useDispatch();
  
useEffect(()=>{
  dispatch(getProduct());
  dispatch(getBiscuits())
  dispatch(getDrink());
  dispatch(getBeverage());
  dispatch(getFood());
  dispatch(getDairy());
  dispatch(getStaple());
  dispatch(getOil());
  // dispatch(getProduct());
},[dispatch])

  return (
    <div>
      <CategoryBanner />
      <HeroBanner />
      <CardBanner head={"Biscuits & Namkeen"} products = {databi}/>
      <CardBanner head={"Tea and Coffee"} products = {datadr}/>
      <CardBanner head={"Soft Drinks"} products = {databe}/>
      <CardBanner head={"Packaged Foods"} products={datafo} />
      <CardBanner head={"Dairy & Eggs"} products={datada} />
      <CardBanner head={"Atta & Dals"} products={datast} />
      <CardBanner head={"Ghee & Oil"} products={dataoil} />
      <Footer />

    </div>
  )
}

export default Home
