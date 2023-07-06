import { configureStore } from "@reduxjs/toolkit";
// import your slice 
import productSlice from "./productSlice";


const store=configureStore({
    reducer:
    {
        products:productSlice,
    }
})

export default store;