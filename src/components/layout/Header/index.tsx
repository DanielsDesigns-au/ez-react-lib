import React, { useState } from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  links?: Array<Link | string>;
  brand?: string;
  brandElementOverride?: JSX.Element;
  classOverride?: string;
  sticky?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  links,
  brand,
  brandElementOverride,
  sticky = true,
  classOverride,
}) => {
  const [headerModalOpen, setHeaderModalOpen] = useState(false);
  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setHeaderModalOpen(!headerModalOpen);
  };

  return (
    <>
      <div
        className={`${styles.container} ${classOverride}`}
        style={{
          position: sticky ? 'fixed' : 'relative',
          zIndex: sticky && 1,
          boxShadow: sticky ? '0px 2px 20px rgb(0 0 0 / 50%)' : 'none',
        }}
      >
        <div className={styles.row}>
          {links?.slice(0, links.length / 2)?.map((linkOrString, i) =>
            typeof linkOrString === 'string' ? (
              <a
                href={linkOrString}
                className={styles.link}
                key={`headerLink-${linkOrString}`}
              >
                {linkOrString}
              </a>
            ) : (
              <a
                href={linkOrString?.href}
                className={styles.link}
                key={`headerLink-${linkOrString?.text}`}
              >
                {linkOrString?.text}
              </a>
            )
          )}
        </div>
        <div className={styles.row}>
          {brandElementOverride ? (
            brandElementOverride
          ) : (
            <h1 className={styles.brandName}>{brand}</h1>
          )}
        </div>
        <div className={styles.row}>
          {links?.slice(-(links.length / 2))?.map((linkOrString, i) =>
            typeof linkOrString === 'string' ? (
              <a
                href={linkOrString}
                className={styles.link}
                key={`headerLink-${linkOrString}`}
              >
                {linkOrString}
              </a>
            ) : (
              <a
                href={linkOrString?.href}
                className={styles.link}
                key={`headerLink-${linkOrString?.text}`}
              >
                {linkOrString?.text}
              </a>
            )
          )}
        </div>
        <div className={styles.menuOpen} onClick={handleModal}>
          <div className={styles.menuLine} />
          <div className={styles.menuLine} />
          <div className={styles.menuLine} />
        </div>
      </div>
      <div
        className={`${styles.modal} ${
          headerModalOpen ? styles.modalOpen : null
        }`}
      >
        <div className={styles.menuClose} onClick={handleModal}>
          <div className={styles.crossLeft} />
          <div className={styles.crossRight} />
        </div>
        <div className={styles.modalLinks}>
          {links?.map((linkOrString) =>
            typeof linkOrString === 'string' ? (
              <a
                href={linkOrString}
                className={styles.link}
                key={`headerLink-${linkOrString}`}
              >
                {linkOrString}
              </a>
            ) : (
              <a
                href={linkOrString?.href}
                className={styles.link}
                key={`headerLink-${linkOrString?.text}`}
              >
                {linkOrString?.text}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
