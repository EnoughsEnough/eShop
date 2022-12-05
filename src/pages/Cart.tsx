import React, { FC } from 'react'
import {Link} from 'react-router-dom'
import { useTypedSelector } from '../components/hooks/useTypedSelector'
import styles from '../styles/Cart.module.scss'

export const Cart: FC = () => {

  const {cart} = useTypedSelector(state => state)

  return (
    <div className={styles.cart__container}>
        <h1 className={styles.cart__title}>Это Корзина</h1>
        <Link to='/'>Назад к товаром</Link>
        <div className={styles.cartList}>
          {cart.map((product) => (
            <div key={product.id}>
              <div className={styles.cart__img}>  
                <img 
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className={styles.info}>
                <div>{product.title}</div>
                <div>{product.description}</div>
                <div>${product.price}</div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}