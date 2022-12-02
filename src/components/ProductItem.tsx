import React, { FC } from "react";
import styles from "../styles/ProductItem.module.scss";
import { IProducts } from "./store/product/product.types";
import { useNavigate } from "react-router-dom";

export const ProductItem: FC<{ product: IProducts }> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.productItem__container}>
        <div className={styles.productItem__card}>
      <div className={styles.productItem__image} onClick={() => navigate(`/products/${product.id}`)}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productItem__info}>
        <div className={styles.productItem__title}>{product.title}</div>
        <div className={styles.productItem__price}>{product.price} $</div>
      </div>
      <button className={styles.productItem__buttunCart}><i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  );
};
