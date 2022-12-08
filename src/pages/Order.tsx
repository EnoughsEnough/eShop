import React, { FC } from "react";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import { IProducts } from "../components/store/product/product.types";
import styles from "../styles/Order.module.scss";
export const Order: FC = () => {
  const { cartItems, total } = useTypedSelector((state) => state.cart);

  return (
    <div className={styles.order__container}>
      <div className={styles.order}>
        <h1 className={styles.orderTitle}>Ваш заказ:</h1>
        <div className={styles.OrderList}>
          {cartItems.map((product: IProducts) => (
            <div>1 x {product.title}</div>
          ))}
        </div>
        <h1 className={styles.orderAmount}>Итого: ${total}</h1>
      </div>
    </div>
  );
};
