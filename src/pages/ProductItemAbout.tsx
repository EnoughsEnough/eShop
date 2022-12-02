import React, { FC } from 'react'
import { useGetProductByIdQuery } from '../components/store/product/product.api';
import {useParams, Link} from 'react-router-dom'

export const ProductItemAbout: FC = () => {
 const { id } = useParams()

 const {productId, title, price, image, description} = useGetProductByIdQuery(parseInt(id), {
  skip: !parseInt(id),
  selectFromResult: ({ data }) => ({
    productId: data?.id,
    title: data?.title,
    price: data?.price,
    image: data?.image,
    description: data?.description
  })
 })

  return (
    <div>
     <Link to='/'>Back</Link>
      <div>
        <img src={image} alt={title} style={{width: '30%'}}/>
      </div>
      <div>{title}</div>
      <div>{description}</div>
      <div>{price}</div>
      <button>Add to cart</button>
    </div>
    )
}
