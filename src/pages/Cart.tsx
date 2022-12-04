import React, { FC } from 'react'
import {Link} from 'react-router-dom'
import { useTypedSelector } from '../components/hooks/usetypedSelector'
import { productAPI } from '../components/store/product/product.api'

export const Cart: FC = () => {

  const {cart} = useTypedSelector(state => state)

  return (
    <div>
        <h1>Это Корзина</h1>
        <Link to='/'>Назад к товаром</Link>
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <div>
                <img 
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div>{product.title}</div>
              <div>${product.price}</div>
            </div>
          ))}
        </div>
    </div>
  )
}
