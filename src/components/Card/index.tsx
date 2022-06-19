import React from 'react';

import styles from './Card.module.scss';

interface Props {
  name: string;
  category: string;
  price: string;
  imgSrc: string;
}

export const Card: React.FC<Props> = ({ name, category, price, imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} alt={name} src={imgSrc} loading="lazy" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{name}</p>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
};

export default Card;
