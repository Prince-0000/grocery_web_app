import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { client } from '../lib/client';

const initialState={
    data:[],
    databi:[],
    databh:[],

    status:"idle"
}

const productSlice = createSlice({
    name:'Product',
    initialState,
    reducers:{
        find(state,action){
            state.data.find((item)=>{
                if(item._id===action.payload) return item;
                return null;
            })
           
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state,action)=>{
            state.status = 'pending'
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status='fetched'
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.status='error'
        })
        .addCase(getBiscuits.pending,(state,action)=>{
            state.status = 'pending'
        })
        .addCase(getBiscuits.fulfilled,(state,action)=>{
            state.databi = action.payload;
            state.status='fetched'
        })
        .addCase(getBiscuits.rejected,(state,action)=>{
            state.status='error'
        })
        .addCase(getBeverage.pending,(state,action)=>{
            state.status = 'pending'
        })
        .addCase(getBeverage.fulfilled,(state,action)=>{
            state.databh = action.payload;
            state.status='fetched'
        })
        .addCase(getBeverage.rejected,(state,action)=>{
            state.status='error'
        })
    }
});

export default productSlice.reducer;

export const getProduct=createAsyncThunk('product/get',async ()=>{
    const query = '*[_type == "product"]';
    const response = await client.fetch(query);
    console.log("product response",response);
    return response;
})

export const getBiscuits=createAsyncThunk('biscuit/get',async ()=>{
    const query = '*[type == "snack"]';
    const response = await client.fetch(query);
    console.log("Biscuits",response);
    return response;
})
export const getBeverage=createAsyncThunk('beverage/get',async ()=>{
    const query = '*[type == "drink"]';
    const response = await client.fetch(query);
    console.log("Beverage",response);
    return response;
})

