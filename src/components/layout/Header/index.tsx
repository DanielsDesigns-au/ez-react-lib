import React from 'react';

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
  return (
    <>
      <div className={`${styles.container} ${classOverride}`} />
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
      </div>
    </>
  );
};

export default Header;
