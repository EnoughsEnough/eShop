import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "./product/product.types";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<IProducts>) => {
            state.cartItems.push(action.payload);
            state.amount += 1;
        },
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((product) => {
                total += product.price; 
            });
             state.total = Math.floor(total);
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions