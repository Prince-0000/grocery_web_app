import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        add(state,action){
            // state.push(action.payload);
            const itemInCart = state.find((item)=> item._id === action.payload._id);

            if(itemInCart){
                itemInCart.quantity++;
            }else{
                state.push({...action.payload,quantity:1})
            }
        },
        remove(state,action){
            return state.filter(item=>item._id!==action.payload)
        },
        incQty(state,action){
            const item = state.find((item)=>item._id===action.payload);
            item.quantity++;
        },
        decQty(state,action){
            const item = state.find((item)=>item._id===action.payload);
            
            if(item.quantity === 1){
                item.quantity = 1;
            }else{
                item.quantity--;
            }
        }

    }
})

export const {add,remove, incQty, decQty} = cartSlice.actions;
export default cartSlice.reducer;


