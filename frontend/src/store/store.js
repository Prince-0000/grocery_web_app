import { configureStore } from "@reduxjs/toolkit";
// import your slice 
import bannerSlice from "./bannerSlice";
import productSlice from './productSlice';
import categorySlice from "./categorySlice";

const store=configureStore({
    reducer:
    {
        banners:bannerSlice,
        products:productSlice,
        categories:categorySlice
    }
})

export default store;