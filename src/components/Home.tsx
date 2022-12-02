import React, { FC } from "react";
import styles from "../styles/Home.module.scss";
import { ProductItem } from "./ProductItem";
import { useGetProductsQuery } from "./store/product/product.api";

export const Home: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(5);

  return (
    <div className={styles.container}>
      <h1 className="font-bold text-lg text-center text-green-600 mb-10 mt-3">Hot Sales</h1>
      <div className={styles.productsList}>
        {data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
