import React, { FC, useState, useRef, useEffect } from "react";
import {
  useGetProductByIdQuery,
  useGetUsersQuery,
} from "../components/store/product/product.api";
import { useParams, Link } from "react-router-dom";
import styles from "../styles/ProductItemAbout.module.scss";

export const ProductItemAbout: FC = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);

  const { data, error, isLoading } = useGetUsersQuery(10);
  const fetch = useGetUsersQuery(10);

  const handlerDecrement = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handlerIncrement = () => {
    setAmount(amount + 1);
  };

  const { productId, title, price, image, description, raiting, raites } =
    useGetProductByIdQuery(parseInt(id), {
      skip: !parseInt(id),
      selectFromResult: ({ data }) => ({
        productId: data?.id,
        title: data?.title,
        price: data?.price,
        image: data?.image,
        description: data?.description,
        raiting: data?.rating?.rate,
        raites: data?.rating?.count,
      }),
    });
  return (
    <div className={styles.itemAbout__container}>
      <div className={styles.backToHome}>
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long"></i>
          <p>Назад</p>
        </Link>
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} style={{ width: "25%", height: "30%" }} />
        <div className={styles.galery}>
          <div className={styles.galery__item}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.galery__item}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.galery__item}>
            <img src={image} alt={title} />
          </div>
          <div className={styles.galery__item}>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
      <div className={styles.mainInfoAboutItem}>
        <div className={styles.title}>{title}</div>
        <div className={styles.rate}>
          <div className={styles.stars}>
            <i className="fa-solid fa-star"></i> {raiting}
          </div>
          <div className={styles.ratings}>{raites} ratings</div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price}</div>
        <div className={styles.buySection}>
          <button className={styles.addToCart}>Add to cart</button>
          <div className={styles.chooseAmount}>
            <div className={styles.minus} onClick={handlerDecrement}>
              -
            </div>
            <div className={styles.count}>{amount}</div>
            <div className={styles.plus} onClick={handlerIncrement}>
              +
            </div>
          </div>
        </div>
      </div>

      <h1 className={styles.commentsAndReviews}>Сomments and reviews</h1>
      <div className={styles.comments__section}>
        {data?.map((user) => (
          <div>
            <div className={styles.username__info}>
              <div>
                <i className="fa-solid fa-user-astronaut"></i>
              </div>
              <div className={styles.userName}>{user.username}</div>
            </div>
            <div className={styles.userName__stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div>Reviewed in {user.address.city} on 22 November 2022</div>
            <div className={styles.comments}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor hic
              officiis, quod id aspernatur, numquam repellat recusandae quam,
              exercitationem mollitia unde voluptas a voluptatem provident magni
              cum consequuntur incidunt error!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
