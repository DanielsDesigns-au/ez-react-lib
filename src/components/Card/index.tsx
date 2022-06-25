import React from 'react';

import styles from './Card.module.scss';

interface CardProps {
  name: string;
  category: string;
  price: string;
  imgSrc: string;
  classOverride?: string;
  href?: string;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  name,
  category,
  price,
  imgSrc,
  classOverride,
  href,
  onClick,
}) => {
  return (
    <div
      className={`${styles.container} ${classOverride}`}
      style={{ cursor: href && 'pointer' }}
      onClick={onClick}
      aria-hidden
    >
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
