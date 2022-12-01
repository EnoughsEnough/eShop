import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./product/product.api";


export const store = configureStore({
    reducer: { [productAPI.reducerPath]: productAPI.reducer },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productAPI.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>