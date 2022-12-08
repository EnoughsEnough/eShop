import { configureStore } from "@reduxjs/toolkit";
import { productAPI } from "./product/product.api";


export const store = configureStore({
<<<<<<< Updated upstream
    reducer: { [productAPI.reducerPath]: productAPI.reducer },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(productAPI.middleware)
})
=======
  reducer: { [productAPI.reducerPath]: productAPI.reducer, cart: cartReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productAPI.middleware),
});
>>>>>>> Stashed changes

export type TypeRootState = ReturnType<typeof store.getState>;
