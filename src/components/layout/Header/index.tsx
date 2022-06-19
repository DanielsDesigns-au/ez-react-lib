import React from 'react';

import styles from './Header.module.scss';

type HeaderRow = Array<Link | Title>;

interface HeaderProps {
  rows: HeaderRow[];
  classOverride?: string;
  sticky?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  rows,
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
        {rows?.map((linksOrTitle, i) => (
          <div
            className={styles.row}
            key={`headerRow-${i}-${linksOrTitle?.[0]?.text}`}
          >
            {linksOrTitle?.map((data) =>
              Object.keys(data).includes('href') ? (
                <a
                  href={(data as Link)?.href}
                  className={styles.link}
                  key={`headerLink-${data?.text}`}
                >
                  {(data as Link)?.text}
                </a>
              ) : (
                <h1
                  className={styles.brandName}
                  key={`headerLink-${data?.text}`}
                >
                  {(data as Title)?.text}
                </h1>
              )
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
