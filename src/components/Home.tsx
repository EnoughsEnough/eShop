import React, { FC } from "react";
import styles from "../styles/Home.module.scss";
import { useGetProductsQuery } from "./store/product/product.api";

export const Home: FC = () => {
  const {data, isLoading, error} = useGetProductsQuery(6)


  return (
    <div className={styles.title}>
        {data?.map((product) => (
          <div>
            <div style={{width: '10%'}}><img src={product.image} alt={product.title}/></div>
          <div key={product.id}>{product.title} {product.price}</div>
          </div>
        ))}
    </div>
  )
};
