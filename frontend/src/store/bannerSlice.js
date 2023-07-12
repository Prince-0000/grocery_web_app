import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { client } from "../lib/client";
const initialState={
    data:[],
    status:'idle'
}

const bannerSlice=createSlice({
    name:'Banner',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getBanners.pending,(state,action)=>{
            state.status='pending'
        })
        .addCase(getBanners.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status='fetched'
        })
        .addCase(getBanners.rejected,(state,action)=>{
            state.status='error'
        })
    
    }
});


export default bannerSlice.reducer;

export const getBanners=createAsyncThunk('banner/get',async ()=>{
    
    
        const query = '*[_type == "banner"]';
        const response = await client.fetch(query);
        
    //    console.log('this is result',response)
        
        return response;
      

    //   } catch (error) {
    //     console.error("Error fetching banner data:", error);
    //   }
})