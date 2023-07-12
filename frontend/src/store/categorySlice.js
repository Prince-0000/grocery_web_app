import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { client } from "../lib/client";

const initialState = {
    data:[],
    status:'idle'
}
const categorySlice=createSlice({
    name:'Category',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getCategory.pending,(state,action)=>{
            state.status = 'pending'
        })
        .addCase(getCategory.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.status = 'fetched'
        })
        .addCase(getCategory.rejected,(state,action)=>{
            state.status = 'error'
        })
    }
});

export default categorySlice.reducer;

export const getCategory=createAsyncThunk('category/get',async ()=>{
    const query = '*[_type == "category"]';
    const response = await client.fetch(query);
    console.log("category response",response)
    return response
})