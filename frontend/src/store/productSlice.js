import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { client } from "../lib/client";
const initialState={
    data:[],
    status:'idle'
}


const productSlice=createSlice({
    name:'productSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProducts.pending,(state,action)=>{
            state.status='pending'
        })
        .addCase(getProducts.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status='fetched'
        })
        .addCase(getProducts.rejected,(state,action)=>{
            state.status='errorrr'
        })
    
    }
})


export default productSlice.reducer;

export const getProducts=createAsyncThunk('product/get',async ()=>{
    
    
        const query = '*[_type == "banner"]';
        const response = await client.fetch(query);
        
       console.log('this is result',response)
        
        return response;
      

    //   } catch (error) {
    //     console.error("Error fetching banner data:", error);
    //   }
})