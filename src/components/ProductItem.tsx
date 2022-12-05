import React, { FC , useState} from "react";
import styles from "../styles/ProductItem.module.scss";
import { IProducts } from "./store/product/product.types";
import { useNavigate } from "react-router-dom";
import { useActions } from "./hooks/useActions";

export const ProductItem: FC<{ product: IProducts }> = ({ product }) => {
  const navigate = useNavigate();
  const [pushed, setIsPushed] = useState(false)

  const handleAddProduct = () => {
    setIsPushed(true)
  }


  const {addItem} = useActions()

  return (
    <div className={styles.productItem__container}>
        <div className={styles.productItem__card}>
      <div className={styles.productItem__image} onClick={() => navigate(`/products/${product.id}`)}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productItem__info}>
        <div className={styles.productItem__title}>{product.title}</div>
        <div className={styles.productItem__price}>${product.price} </div>
      </div>
      <div onClick={handleAddProduct}>
        { pushed === false ?
      <button className={styles.productItem__buttonCart} onClick={() => addItem(product)}><i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
          :
          <button className={styles.productItem__buttonCart__active}><i className="fa-sharp fa-solid fa-cart-shopping"></i></button>
        }
      </div>
      </div>
    </div>
  );
      }