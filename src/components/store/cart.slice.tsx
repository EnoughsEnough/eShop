import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "./product/product.types";

const initialState = {
  cartItems: [] as IProducts[],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: any, action: PayloadAction) => {
      state.cartItems.push(action.payload);
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item: IProducts) => item.id !== itemId
      );
    },
    calculateTotal: (state) => {
      let total = 0;
      state.cartItems.forEach((product: IProducts) => {
        total += product.price;
      });
      state.total = Math.floor(total);
    },
    deleteAll: (state) => {
      state.cartItems = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
