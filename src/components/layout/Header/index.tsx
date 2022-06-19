import React from 'react';

import styles from './Header.module.scss';

interface Props {}

export const Header: React.FC<Props> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <a className={styles.link}>Home</a>
        <a className={styles.link}>About</a>
        <a className={styles.link}>Search</a>
      </div>
      <div className={styles.row}>
        <h1 className={styles.brandName}>⸸BADINFLUENCE©</h1>
      </div>
      <div className={styles.row}>
        <a className={styles.link}>Contact</a>
        <a className={styles.link}>Account</a>
        <a className={styles.link}>Bag</a>
      </div>
    </div>
  );
};

export default Header;
