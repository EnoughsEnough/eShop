
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { ProductItemAbout } from '../pages/ProductItemAbout'
import { Home } from './Home'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/:id' element={<ProductItemAbout />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/*' element={<Home />}/>
      </Routes>
  )
}
