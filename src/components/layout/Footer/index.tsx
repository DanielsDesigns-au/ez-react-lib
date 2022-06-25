import React from 'react';

import styles from './Footer.module.scss';

import { Link } from '../../../typings/types';

type FooterRow = Array<Link>;

interface FooterProps {
  rows?: FooterRow;
  siteDev?: string;
  termsHref?: string;
  sitemapHref?: string;
}

export const Footer: React.FC<FooterProps> = ({
  rows,
  siteDev,
  termsHref,
  sitemapHref,
}) => {
  return (
    <footer className={styles.footer}>
      {rows && <div className={styles.columns}></div>}
      <hr className={styles.divider} />
      <div className={styles.subFooter}>
        <div className={styles.copyright}>
          Copyright© {new Date().getFullYear()} {siteDev}
        </div>
        <div className={styles.siteInfo}>
          {termsHref && (
            <>
              <span>Read our </span>
              <a href={termsHref} className={styles.link}>
                Terms and Conditons of Trade
              </a>
            </>
          )}

          {sitemapHref && (
            <>
              <span>| </span>
              <a href={sitemapHref} className={styles.link}>
                Sitemap
              </a>
            </>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
