import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "./product.types";

export const productAPI = createApi({
  reducerPath: "api/product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query<IProducts[], number>({
      query: (limit = 10) => `products?limit=${limit}`,
    }),
  }),
});

export const {useGetProductsQuery} = productAPI;
