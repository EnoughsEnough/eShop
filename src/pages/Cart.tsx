import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../components/hooks/useActions";
import { useTypedSelector } from "../components/hooks/useTypedSelector";
import { productAPI } from "../components/store/product/product.api";
import { IProducts } from "../components/store/product/product.types";
import styles from "../styles/Cart.module.scss";

export const Cart: FC = () => {
  const { cartItems, total } = useTypedSelector((state) => state.cart);
  const { deleteItem } = useActions();

  return (
    <div className={styles.cart__container}>
      <h1 className={styles.cart__title}>Это Корзина</h1>
      <Link to="/">Назад к товаром</Link>
      {cartItems.length ? (
        <>
          <div className={styles.cartList}>
            {cartItems.map((product: IProducts) => (
              <div
                key={`Cart item: ${product.id}`}
                className={styles.cart__item}
              >
                <div className={styles.cart__img}>
                  <img src={product.image} alt={product.title} />
                </div>
                <div className={styles.cart__info}>
                  <div className={styles.cart__title}>{product.title}</div>
                  <div className={styles.cart__description}>
                    {product.description}
                  </div>
                  <div className={styles.item__price}>
                    {product.price} ${" "}
                    <button
                      className="fa-solid fa-trash"
                      onClick={() => deleteItem(product.id)}
                    ></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cart__totalInfo}>
            <div className={styles.cart__total}>Итого:</div>
            <div className={styles.cart__itemsTotal}>
              Товаров в корзине: {cartItems.length}
            </div>
            <div className={styles.cart__itemsAmount}>
              Общая сумма: {total} $
            </div>
          </div>
        </>
      ) : (
        <div className={styles.cartIsEmpty}>Корзина пуста!</div>
      )}
    </div>
  );
};
