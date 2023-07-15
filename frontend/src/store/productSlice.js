import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { client } from "../lib/client";

const initialState = {
  data: [],
  databi: [],
  databe: [],
  datafo:[],
  datadr:[],
  datada:[],
  datast:[],
  dataoil:[],
  status: "idle",
};

const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    find(state, action) {
      state.data.find((item) => {
        if (item._id === action.payload) return item;
        return null;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "fetched";
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getBiscuits.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getBiscuits.fulfilled, (state, action) => {
        state.databi = action.payload;
        state.status = "fetched";
      })
      .addCase(getBiscuits.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getBeverage.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getBeverage.fulfilled, (state, action) => {
        state.databe = action.payload;
        state.status = "fetched";
      })
      .addCase(getBeverage.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getFood.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getFood.fulfilled, (state, action) => {
        state.datafo = action.payload;
        state.status = "fetched";
      })
      .addCase(getFood.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getDrink.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getDrink.fulfilled, (state, action) => {
        state.datadr = action.payload;
        state.status = "fetched";
      })
      .addCase(getDrink.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getDairy.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getDairy.fulfilled, (state, action) => {
        state.datada  = action.payload;
        state.status = "fetched";
      })
      .addCase(getDairy.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getStaple.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getStaple.fulfilled, (state, action) => {
        state.datast = action.payload;
        state.status = "fetched";
      })
      .addCase(getStaple.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(getOil.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getOil.fulfilled, (state, action) => {
        state.dataoil = action.payload;
        state.status = "fetched";
      })
      .addCase(getOil.rejected, (state, action) => {
        state.status = "error";
      })
      
  },
});

export default productSlice.reducer;

export const getProduct = createAsyncThunk("product/get", async () => {
  const query = '*[_type == "product"]';
  const response = await client.fetch(query);
  console.log("product response", response);
  return response;
});

export const getBiscuits = createAsyncThunk("biscuit/get", async () => {
  const query = '*[type == "snack"]';
  const response = await client.fetch(query);
  console.log("Biscuits", response);
  return response;
});
export const getDrink = createAsyncThunk("drink/get", async () => {
  const query = '*[type == "drink"]';
  const response = await client.fetch(query);
  console.log("Drink", response);
  return response;
});
export const getBeverage= createAsyncThunk("beverage/get", async () => {
    const query = '*[type == "beverage"]';
    const response = await client.fetch(query);
    console.log("Beverage", response);
    return response;
  });
export const getFood = createAsyncThunk("food/get", async () => {
  const query = '*[type == "food"]';
  const response = await client.fetch(query);
  console.log("Food", response);
  return response;
});
export const getDairy = createAsyncThunk("dairy/get", async () => {
  const query = '*[type == "dairy"]';
  const response = await client.fetch(query);
  console.log("Dairy", response);
  return response;
});
export const getStaple = createAsyncThunk("staple/get", async () => {
  const query = '*[type == "staple"]';
  const response = await client.fetch(query);
  console.log("Staple", response);
  return response;
});
export const getOil = createAsyncThunk("oil/get", async () => {
  const query = '*[type == "oil"]';
  const response = await client.fetch(query);
  console.log("Oil", response);
  return response;
});

