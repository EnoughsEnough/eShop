import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts, IUsers } from "./product.types";

export const productAPI = createApi({
  reducerPath: "api/product",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query<IProducts[], number>({
      query: (limit = 10) => `products?limit=${limit}`}),
    getProductById: build.query<IProducts, number>({
      query: id => `products/${id}`}),
      getUsers: build.query<IUsers[], number>({
        query: () => `users`})
  }),
});

export const {useGetProductByIdQuery} = productAPI;
export const {useGetProductsQuery} = productAPI;
export const {useGetUsersQuery} = productAPI