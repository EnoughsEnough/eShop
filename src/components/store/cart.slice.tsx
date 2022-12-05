import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "./product/product.types";

const initialState: IProducts[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action:PayloadAction<IProducts>) => {
            state.push(action.payload)
        },
        deleteItem: (state, action:PayloadAction<{id: number}>) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions