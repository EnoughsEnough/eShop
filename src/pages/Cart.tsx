import React from 'react'
import {Link} from 'react-router-dom'

export const Cart = () => {
  return (
    <div>
        <h1>Это Корзина</h1>
        <Link to='/'>Назад к товаром</Link>
    </div>
  )
}
