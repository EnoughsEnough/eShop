import React, { FC } from "react";
import styles from "../styles/ProductItem.module.scss";
import { IProducts } from "./store/product/product.types";
import { useNavigate } from "react-router-dom";

export const ProductItem: FC<{ product: IProducts }> = ({ product }) => {
  const navigate = useNavigate();
<<<<<<< Updated upstream

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
=======
  const { cartItems } = useTypedSelector((state) => state.cart);
  const isExisting = cartItems.some((p: {id: number}) => p.id === product.id);

  const { addItem } = useActions();

  return (
    <div className={styles.productItem__container}>
      <div className={styles.productItem__card}>
        <div onClick={() => navigate(`/products/${product.id}`)}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.productItem__image}
          />
        </div>
        <div className={styles.productItem__info}>
          <div className={styles.productItem__title}>{product.title}</div>
          <div className={styles.productItem__price}>${product.price} </div>
        </div>
        <div>
          {isExisting === false ? (
            <button
              className={styles.productItem__buttonCart}
              onClick={() => addItem(product)}
            >
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </button>
          ) : (
            <button className={styles.productItem__buttonCart__active}>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </button>
          )}
        </div>
>>>>>>> Stashed changes
      </div>
    </div>
  );
};
