import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./product/product.api";
import { cartReducer } from "./cart.slice";

export const store = configureStore({
    reducer: { [productAPI.reducerPath]: productAPI.reducer, cart: cartReducer },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productAPI.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>