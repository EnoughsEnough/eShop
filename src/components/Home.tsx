import React, { FC } from "react";
import styles from "../styles/Home.module.scss";

import { ProductItem } from "./ProductItem";
import { useGetProductsQuery } from "./store/product/product.api";

export const Home: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(24);

  return (
    <div className={styles.container}>
      <h1 className={styles.hotSales}>All Products</h1>
      {isLoading ? <div className={styles.loading}>Loading...</div>: {error} && (
      <div className={styles.productsList}>
        {data?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      )}
    </div>
  );
};